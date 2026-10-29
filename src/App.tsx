import React, { useState, useEffect, useRef, useCallback } from 'react';
import { RealmType, DifficultyLevel, TriviaQuestion, GameSessionResult } from './types';
import { TRIVIA_BANK } from './data/triviaBank';
import { soundManager } from './utils/audio';
import { Header } from './components/Header';
import { RealmSelector } from './components/RealmSelector';
import { CandleHUD } from './components/CandleHUD';
import { QuestionCard } from './components/QuestionCard';
import { CertificateModal } from './components/CertificateModal';
import { CodexExplorer } from './components/CodexExplorer';
import { CertificateHistory } from './components/CertificateHistory';
import { AIQuestionGeneratorModal } from './components/AIQuestionGeneratorModal';
import { Sparkles, Wand2, RotateCcw, Volume2, VolumeX, Flame, Sun, Skull } from 'lucide-react';

export default function App() {
  // Navigation & View State
  const [currentTab, setCurrentTab] = useState<'realms' | 'game' | 'codex' | 'certificates'>('realms');
  const [selectedRealm, setSelectedRealm] = useState<RealmType>('dia_de_los_muertos');
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel>('dark');
  const [isMuted, setIsMuted] = useState(soundManager.getMuted());

  // Game Engine State
  const [activeDeck, setActiveDeck] = useState<TriviaQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(45);
  const maxSeconds = 60;
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [survivalDuration, setSurvivalDuration] = useState(0);

  // Turn State
  const [selectedAnswer, setSelectedAnswer] = useState<string | boolean | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isFlaring, setIsFlaring] = useState(false);
  const [isPenalty, setIsPenalty] = useState(false);

  // Learned facts tracker for certificate digest
  const [learnedFacts, setLearnedFacts] = useState<{ question: string; fact: string; wasCorrect: boolean }[]>([]);

  // Certificates & Session Result
  const [currentResult, setCurrentResult] = useState<GameSessionResult | null>(null);
  const [playerName, setPlayerName] = useState('Seeker of Lore');
  const [certificateHistory, setCertificateHistory] = useState<GameSessionResult[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('lumina_cert_history');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          return [];
        }
      }
    }
    return [];
  });

  // AI Generator Modal
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);

  // Timer Ref
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Difficulty time profiles
  const getDifficultySettings = (diff: DifficultyLevel) => {
    switch (diff) {
      case 'light':
        return { initialSeconds: 50, bonusSeconds: 7, penaltySeconds: 5 };
      case 'spooky':
        return { initialSeconds: 35, bonusSeconds: 5, penaltySeconds: 7 };
      case 'dark':
      default:
        return { initialSeconds: 45, bonusSeconds: 6, penaltySeconds: 6 };
    }
  };

  // Shuffle helper prioritizing selected difficulty
  const shuffleQuestions = (realm: RealmType, diff: DifficultyLevel): TriviaQuestion[] => {
    let realmPool = TRIVIA_BANK;
    if (realm !== 'hybrid') {
      realmPool = TRIVIA_BANK.filter((q) => q.realm === realm || q.realm === 'hybrid');
    }

    // Exact difficulty match
    const primary = realmPool.filter((q) => q.difficulty === diff).sort(() => Math.random() - 0.5);
    // Other difficulties as secondary expansion
    const secondary = realmPool.filter((q) => q.difficulty !== diff).sort(() => Math.random() - 0.5);

    return [...primary, ...secondary];
  };

  // Start new game run
  const startGame = useCallback((realm?: RealmType, diff?: DifficultyLevel) => {
    const targetRealm = realm || selectedRealm;
    const targetDiff = diff || selectedDifficulty;
    setSelectedRealm(targetRealm);
    setSelectedDifficulty(targetDiff);

    const { initialSeconds } = getDifficultySettings(targetDiff);
    const shuffled = shuffleQuestions(targetRealm, targetDiff);

    setActiveDeck(shuffled);
    setCurrentQuestionIndex(0);
    setSecondsLeft(initialSeconds);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setCorrectCount(0);
    setTotalAnswered(0);
    setSurvivalDuration(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setIsFlaring(false);
    setIsPenalty(false);
    setLearnedFacts([]);
    setCurrentResult(null);
    setCurrentTab('game');
    soundManager.playFlameIgnite();
  }, [selectedRealm, selectedDifficulty]);

  // Finish game run and produce result
  const endGame = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    soundManager.playGameOver();

    const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;
    const finalResult: GameSessionResult = {
      id: `cert-${Date.now()}`,
      timestamp: Date.now(),
      playerName,
      realm: selectedRealm,
      score,
      totalAnswered,
      correctAnswers: correctCount,
      accuracy,
      maxStreak,
      survivalSeconds: survivalDuration,
      earnedTitle: '',
      learnedFacts
    };

    setCurrentResult(finalResult);

    // MOTIVATION POLICY: Only archive official certificate if user reached >= 50% accuracy!
    if (accuracy >= 50 && correctCount > 0) {
      setTimeout(() => soundManager.playSealStamp(), 600);
      setCertificateHistory((prev) => {
        const updated = [finalResult, ...prev].slice(0, 20);
        localStorage.setItem('lumina_cert_history', JSON.stringify(updated));
        return updated;
      });
    }
  }, [correctCount, totalAnswered, maxStreak, survivalDuration, playerName, selectedRealm, score, learnedFacts]);

  // Ticking candle survival interval
  useEffect(() => {
    if (currentTab !== 'game' || currentResult !== null) return;

    timerRef.current = setInterval(() => {
      setSurvivalDuration((prev) => prev + 1);
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          endGame();
          return 0;
        }
        if (prev <= 10 && prev % 2 === 0) {
          soundManager.playWarningTick();
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentTab, currentResult, endGame]);

  // Handle answering
  const handleSelectAnswer = (answer: string | boolean) => {
    if (isAnswered || !activeDeck[currentQuestionIndex]) return;

    const question = activeDeck[currentQuestionIndex];
    setSelectedAnswer(answer);
    setIsAnswered(true);
    setTotalAnswered((prev) => prev + 1);

    const isCorrect = answer === question.correctAnswer;
    const { bonusSeconds, penaltySeconds } = getDifficultySettings(selectedDifficulty);

    // Track learned fact for certificate digest
    setLearnedFacts((prev) => [
      ...prev,
      {
        question: question.category,
        fact: question.explanation,
        wasCorrect: isCorrect
      }
    ]);

    if (isCorrect) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);

      const multiplier = selectedDifficulty === 'spooky' ? 1.4 : selectedDifficulty === 'dark' ? 1.2 : 1.0;
      const bonusPoints = 100 * (1 + newStreak * 0.2) * multiplier;
      setScore((prev) => Math.round(prev + bonusPoints));
      setCorrectCount((prev) => prev + 1);

      // Add candle time
      setSecondsLeft((prev) => Math.min(maxSeconds, prev + bonusSeconds));

      // Audio & Flare effects
      if (newStreak >= 3) {
        soundManager.playStreak();
        setIsFlaring(true);
      } else {
        soundManager.playCorrect();
        setIsFlaring(true);
      }
      setTimeout(() => setIsFlaring(false), 600);
    } else {
      setStreak(0);
      // Penalty: deduct seconds based on difficulty
      setSecondsLeft((prev) => {
        const nextTime = Math.max(0, prev - penaltySeconds);
        if (nextTime === 0) {
          endGame();
        }
        return nextTime;
      });
      soundManager.playPenalty();
      setIsPenalty(true);
      setTimeout(() => setIsPenalty(false), 500);
    }
  };

  // Next question
  const handleNextQuestion = () => {
    soundManager.playCardGlide();
    setSelectedAnswer(null);
    setIsAnswered(false);
    setIsFlaring(false);
    setIsPenalty(false);

    if (currentQuestionIndex + 1 < activeDeck.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Loop deck with freshly reshuffled questions so the player can keep surviving
      const reshuffled = shuffleQuestions(selectedRealm, selectedDifficulty);
      setActiveDeck(reshuffled);
      setCurrentQuestionIndex(0);
    }
  };

  // Keyboard shortcut support (1-4 for options, M for Myth, F for Fact, Space/Enter for Next)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentTab !== 'game' || currentResult !== null) return;

      const currentQ = activeDeck[currentQuestionIndex];
      if (!currentQ) return;

      if (!isAnswered) {
        if (currentQ.format === 'multiple_choice' && currentQ.options) {
          if (e.key === '1' && currentQ.options[0]) handleSelectAnswer(currentQ.options[0]);
          if (e.key === '2' && currentQ.options[1]) handleSelectAnswer(currentQ.options[1]);
          if (e.key === '3' && currentQ.options[2]) handleSelectAnswer(currentQ.options[2]);
          if (e.key === '4' && currentQ.options[3]) handleSelectAnswer(currentQ.options[3]);
        } else if (currentQ.format === 'myth_vs_fact') {
          if (e.key === 'm' || e.key === 'M') handleSelectAnswer(false);
          if (e.key === 'f' || e.key === 'F') handleSelectAnswer(true);
        }
      } else {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') {
          e.preventDefault();
          handleNextQuestion();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentTab, currentResult, isAnswered, activeDeck, currentQuestionIndex]);

  // Audio mute toggle
  const handleToggleMute = () => {
    const newMuted = soundManager.toggleMute();
    setIsMuted(newMuted);
  };

  // Handle injected AI questions
  const handleQuestionsAdded = (newQuestions: TriviaQuestion[]) => {
    setActiveDeck((prev) => [...newQuestions, ...prev]);
  };

  // Dynamic ambient background tint based on realm
  const bgThemeClass =
    selectedRealm === 'dia_de_los_muertos'
      ? 'from-amber-950/20 via-slate-950 to-stone-950'
      : selectedRealm === 'halloween_science'
      ? 'from-emerald-950/25 via-slate-950 to-stone-950'
      : 'from-purple-950/20 via-slate-950 to-stone-950';

  return (
    <div className={`min-h-screen bg-slate-950 text-slate-100 bg-gradient-to-b ${bgThemeClass} flex flex-col font-sans transition-colors duration-700 selection:bg-amber-500 selection:text-white`}>
      
      {/* Top Bar Contract (Wordmark, Nav Links, Primary CTA) */}
      <Header
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
        onQuickStart={() => startGame(selectedRealm, selectedDifficulty)}
      />

      {/* Main Workspace Stage */}
      <main className="flex-1 flex flex-col items-center justify-start w-full max-w-6xl mx-auto py-6">
        
        {/* VIEW 1: Realms Portal Selection with Difficulty Controls */}
        {currentTab === 'realms' && (
          <RealmSelector
            selectedDifficulty={selectedDifficulty}
            onSelectDifficulty={setSelectedDifficulty}
            onSelectRealm={(realm) => startGame(realm, selectedDifficulty)}
            onOpenCodex={() => setCurrentTab('codex')}
          />
        )}

        {/* VIEW 2: Ticking Candle Survival Game & Certificate */}
        {currentTab === 'game' && (
          <div className="w-full flex flex-col items-center">
            {currentResult ? (
              <CertificateModal
                result={currentResult}
                onPlayAgain={() => startGame(selectedRealm, selectedDifficulty)}
                onOpenCodex={() => setCurrentTab('codex')}
                onUpdatePlayerName={(name) => {
                  setPlayerName(name);
                  setCurrentResult((prev) => (prev ? { ...prev, playerName: name } : null));
                }}
              />
            ) : (
              <>
                {/* Active Difficulty Indicator Strip */}
                <div className="mb-3 text-xs text-slate-400 flex items-center gap-2 font-mono">
                  <span>Flame Difficulty:</span>
                  <span className={`font-semibold flex items-center gap-1 ${
                    selectedDifficulty === 'spooky'
                      ? 'text-purple-400'
                      : selectedDifficulty === 'dark'
                      ? 'text-orange-400'
                      : 'text-amber-400'
                  }`}>
                    {selectedDifficulty === 'spooky' && <Skull className="w-3.5 h-3.5" />}
                    {selectedDifficulty === 'dark' && <Flame className="w-3.5 h-3.5" />}
                    {selectedDifficulty === 'light' && <Sun className="w-3.5 h-3.5" />}
                    <span className="capitalize">{selectedDifficulty}</span>
                  </span>
                </div>

                {/* Candle Timer & Wax HUD */}
                <CandleHUD
                  secondsLeft={secondsLeft}
                  maxSeconds={maxSeconds}
                  streak={streak}
                  score={score}
                  realm={selectedRealm}
                  isFlaring={isFlaring}
                  isPenalty={isPenalty}
                />

                {/* Question Card */}
                {activeDeck[currentQuestionIndex] ? (
                  <QuestionCard
                    question={activeDeck[currentQuestionIndex]}
                    selectedAnswer={selectedAnswer}
                    isAnswered={isAnswered}
                    onSelectAnswer={handleSelectAnswer}
                    onNextQuestion={handleNextQuestion}
                  />
                ) : (
                  <div className="text-center p-8">
                    <p className="text-sm text-slate-400 mb-4">Deck complete!</p>
                    <button
                      onClick={() => startGame()}
                      className="px-6 py-2 rounded-xl bg-amber-600 text-white font-medium"
                    >
                      Reshuffle Flame
                    </button>
                  </div>
                )}

                {/* Sub-toolbar: AI Question Expansion & Abandon Run */}
                <div className="flex items-center gap-4 mt-6 text-xs text-slate-500">
                  <button
                    onClick={() => setIsAiModalOpen(true)}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5 p-2 rounded-lg hover:bg-slate-900"
                  >
                    <Wand2 className="w-3.5 h-3.5 text-amber-500" />
                    <span>Expand Deck with AI Generator</span>
                  </button>
                  <span aria-hidden="true">·</span>
                  <button
                    onClick={() => endGame()}
                    className="hover:text-rose-400 transition-colors"
                  >
                    Extinguish Flame & Check Results
                  </button>
                </div>
              </>
            )}
          </div>
        )}

        {/* VIEW 3: Complete Codex & Science Library */}
        {currentTab === 'codex' && (
          <CodexExplorer
            questions={TRIVIA_BANK}
            onStartWithQuestionRealm={(realm) => startGame(realm, selectedDifficulty)}
          />
        )}

        {/* VIEW 4: Inscribed Certificates & Seals Archive */}
        {currentTab === 'certificates' && (
          <CertificateHistory
            history={certificateHistory}
            onViewCertificate={(cert) => {
              setCurrentResult(cert);
              setCurrentTab('game');
            }}
            onClearHistory={() => {
              setCertificateHistory([]);
              localStorage.removeItem('lumina_cert_history');
            }}
            onPlayNewGame={() => startGame('dia_de_los_muertos', selectedDifficulty)}
          />
        )}

      </main>

      {/* AI Dynamic Question Generator Modal */}
      <AIQuestionGeneratorModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
        onQuestionsAdded={handleQuestionsAdded}
        currentRealm={selectedRealm}
      />

      {/* Minimal Editorial Footer (Anti-Slop compliant: quiet copyright and GitHub Pages static note) */}
      <footer className="w-full py-6 px-6 border-t border-slate-900 text-center text-xs text-slate-600">
        <p>
          Lumina: Realms of Remembrance & Lore · Built as a static, offline-ready educational web app for GitHub Pages.
        </p>
      </footer>

    </div>
  );
}
