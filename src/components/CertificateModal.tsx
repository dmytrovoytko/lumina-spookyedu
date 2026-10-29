import React, { useState } from 'react';
import { GameSessionResult } from '../types';
import { computeEarnedTitle } from '../utils/titleGenerator';
import { Award, Printer, Copy, Check, RotateCcw, BookOpen, Flame, Compass, ArrowRight, HelpCircle } from 'lucide-react';

interface CertificateModalProps {
  result: GameSessionResult;
  onPlayAgain: () => void;
  onOpenCodex: () => void;
  onUpdatePlayerName: (newName: string) => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  result,
  onPlayAgain,
  onOpenCodex,
  onUpdatePlayerName
}) => {
  const [copied, setCopied] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState(result.playerName);

  // Threshold check: Must achieve at least 50% accuracy AND at least 1 correct answer
  const qualifiesForCertificate = result.accuracy >= 50 && result.correctAnswers > 0;

  const titleData = computeEarnedTitle(
    result.realm,
    result.accuracy,
    result.maxStreak,
    result.score
  );

  const realmLabel =
    result.realm === 'dia_de_los_muertos'
      ? 'Día de los Muertos Memorial'
      : result.realm === 'halloween_science'
      ? 'Gothic Halloween Science & Lore'
      : 'Dual-World Liminal Synthesis';

  const handleCopy = () => {
    const text = `🕯️ Lumina Certificate of Mastery
Player: ${result.playerName}
Realm: ${realmLabel}
Honorific Title: ${titleData.title} (${titleData.rank})
Score: ${result.score} pts · Accuracy: ${result.accuracy}% · Max Streak: ${result.maxStreak}x
Facts Mastered:
${result.learnedFacts.slice(0, 3).map((f) => `• ${f.question}: ${f.fact}`).join('\n')}`;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSaveName = () => {
    if (tempName.trim()) {
      onUpdatePlayerName(tempName.trim());
    }
    setIsEditingName(false);
  };

  // =========================================================================
  // SCENARIO 1: DID NOT REACH 50% THRESHOLD (Encouragement & Learning Review)
  // =========================================================================
  if (!qualifiesForCertificate) {
    return (
      <div className="w-full max-w-3xl mx-auto px-4 py-8 animate-in fade-in duration-300">
        <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-xl text-center">
          
          {/* Flame Icon */}
          <div className="w-16 h-16 rounded-3xl bg-amber-100 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400 mx-auto flex items-center justify-center mb-4">
            <Flame className="w-8 h-8" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            The Flame Flickers Low
          </h2>
          
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto mb-6 leading-relaxed">
            You answered <strong className="text-slate-800 dark:text-slate-200">{result.correctAnswers} out of {result.totalAnswered}</strong> questions correctly ({result.accuracy}% accuracy). To earn and inscribe an official Certificate of Mastery, a score of <strong className="text-amber-600 dark:text-amber-400">at least 50%</strong> is required.
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 max-w-md mx-auto mb-8 font-mono">
            <div>
              <div className="text-[10px] text-slate-400 uppercase">Score</div>
              <div className="text-lg font-bold text-slate-800 dark:text-slate-200">{result.score} pts</div>
            </div>
            <div>
              <div className="text-[10px] text-slate-400 uppercase">Accuracy</div>
              <div className="text-lg font-bold text-rose-500">{result.accuracy}%</div>
            </div>
            <div>
              <div className="text-[10px] text-slate-400 uppercase">Threshold</div>
              <div className="text-lg font-bold text-amber-500">≥ 50%</div>
            </div>
          </div>

          {/* Review of Missed Insights */}
          {result.learnedFacts.length > 0 && (
            <div className="text-left mb-8 p-5 rounded-2xl border border-amber-200/60 dark:border-amber-900/40 bg-amber-50/40 dark:bg-amber-950/20">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-amber-500" />
                <span>Knowledge to Remember for Next Time</span>
              </div>
              <div className="space-y-3">
                {result.learnedFacts.map((factItem, idx) => (
                  <div key={idx} className="text-xs text-slate-600 dark:text-slate-400 border-l-2 border-amber-400 pl-3 py-0.5">
                    <strong className="text-slate-800 dark:text-slate-200">{factItem.question}: </strong>
                    <span>{factItem.fact}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Encouraging Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onPlayAgain}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm text-white bg-amber-600 hover:bg-amber-500 transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Re-ignite Flame & Try Again</span>
            </button>

            <button
              onClick={onOpenCodex}
              className="w-full sm:w-auto px-5 py-3 rounded-xl font-medium text-sm text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-amber-500" />
              <span>Study Lore in Codex</span>
            </button>
          </div>

        </div>
      </div>
    );
  }

  // =========================================================================
  // SCENARIO 2: QUALIFIED FOR CERTIFICATE (≥ 50% Accuracy)
  // =========================================================================
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 animate-in fade-in duration-300">
      {/* Top Banner & Control Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 print:hidden">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-1">
            <Check className="w-4 h-4" />
            <span>Achievement Unlocked (≥ 50% Accuracy)</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Survival Run Concluded
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Your mastery has earned an inscribed ceremonial certificate below.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors flex items-center gap-1.5 shadow-sm"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied!' : 'Copy Summary'}</span>
          </button>

          <button
            onClick={handlePrint}
            className="px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <Printer className="w-4 h-4" />
            <span>Print Certificate</span>
          </button>

          <button
            onClick={onPlayAgain}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-amber-600 hover:bg-amber-500 transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Play Again</span>
          </button>
        </div>
      </div>

      {/* The Printable Certificate Container */}
      <div
        id="printable-certificate"
        className="relative p-8 sm:p-12 rounded-3xl border-8 border-double border-amber-300 dark:border-amber-700/80 bg-gradient-to-b from-amber-50/90 via-stone-50 to-orange-50/80 dark:from-slate-900 dark:via-slate-950 dark:to-stone-900 text-slate-900 dark:text-slate-100 shadow-2xl overflow-hidden"
      >
        {/* Subtle decorative watermark corners */}
        <div className="absolute top-4 left-4 text-3xl opacity-20 select-none">🏵️</div>
        <div className="absolute top-4 right-4 text-3xl opacity-20 select-none">🏵️</div>
        <div className="absolute bottom-4 left-4 text-3xl opacity-20 select-none">🏵️</div>
        <div className="absolute bottom-4 right-4 text-3xl opacity-20 select-none">🏵️</div>

        {/* Certificate Header */}
        <div className="text-center mb-8">
          <div className="text-xs font-mono uppercase tracking-widest text-amber-700 dark:text-amber-400 mb-1">
            Certificate of Luminous Attainment
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-slate-100">
            Realms of Remembrance & Lore
          </h1>
          <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            This solemn document attests that the knowledge seeker
          </div>

          {/* Player Name Display & In-place Edit */}
          <div className="my-4">
            {isEditingName ? (
              <div className="flex items-center justify-center gap-2 max-w-xs mx-auto print:hidden">
                <input
                  type="text"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  className="px-3 py-1.5 text-center text-lg font-bold border border-amber-400 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none"
                  autoFocus
                />
                <button
                  onClick={handleSaveName}
                  className="px-3 py-1.5 text-xs bg-amber-600 text-white rounded-lg font-semibold"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="inline-block group cursor-pointer" onClick={() => setIsEditingName(true)}>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-amber-700 dark:text-amber-400 border-b-2 border-dashed border-amber-400/60 pb-0.5">
                  {result.playerName}
                </span>
                <span className="text-[10px] text-slate-400 block mt-1 group-hover:text-amber-600 print:hidden">
                  (Click to edit name)
                </span>
              </div>
            )}
          </div>

          <div className="text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
            has journeyed through the realm of <strong className="text-slate-800 dark:text-slate-200">{realmLabel}</strong> and proven mastery over the traditions, botanical science, and debunked folklore of the season.
          </div>
        </div>

        {/* Central Title Medal & Seal */}
        <div className="p-6 rounded-2xl border border-amber-200/80 dark:border-amber-900/60 bg-white/70 dark:bg-slate-900/70 text-center mb-8 max-w-xl mx-auto shadow-sm">
          <div className="text-xs uppercase tracking-wider text-slate-400 mb-1">
            Conferred Honorific Title
          </div>
          <div className="text-xl sm:text-2xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-1">
            {titleData.title}
          </div>
          <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 mb-3">
            Rank: {titleData.rank}
          </div>
          <p className="text-xs italic text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            "{titleData.loreQuote}"
          </p>
        </div>

        {/* Performance Metrics Table */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 text-center mb-8 font-mono">
          <div>
            <div className="text-[11px] text-slate-400 uppercase">Final Score</div>
            <div className="text-xl font-bold tabular-nums text-slate-800 dark:text-slate-200">
              {result.score} pts
            </div>
          </div>
          <div>
            <div className="text-[11px] text-slate-400 uppercase">Accuracy</div>
            <div className="text-xl font-bold tabular-nums text-emerald-600 dark:text-emerald-400">
              {result.accuracy}%
            </div>
          </div>
          <div>
            <div className="text-[11px] text-slate-400 uppercase">Max Combo</div>
            <div className="text-xl font-bold tabular-nums text-slate-800 dark:text-slate-200">
              {result.maxStreak}x
            </div>
          </div>
          <div>
            <div className="text-[11px] text-slate-400 uppercase">Survival Time</div>
            <div className="text-xl font-bold tabular-nums text-slate-800 dark:text-slate-200">
              {result.survivalSeconds}s
            </div>
          </div>
        </div>

        {/* Knowledge Digest: Verified Facts Mastered */}
        {result.learnedFacts.length > 0 && (
          <div className="mb-8 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-3 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-amber-500" />
              <span>Session Knowledge Digest (Facts & Debunkings)</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              {result.learnedFacts.slice(0, 4).map((factItem, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold shrink-0">✦</span>
                  <div>
                    <strong className="text-slate-800 dark:text-slate-200">{factItem.question}: </strong>
                    <span>{factItem.fact}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Certificate Signatures & Ceremonial Wax Seal */}
        <div className="flex items-end justify-between pt-6 border-t border-amber-200 dark:border-amber-900/60">
          <div className="text-left">
            <div className="font-serif italic text-sm text-slate-600 dark:text-slate-400">
              Mictecacihuatl & The Alchemist
            </div>
            <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">
              Preserving Guardians of Lore
            </div>
          </div>

          {/* Decorative Wax Seal */}
          <div className="w-16 h-16 rounded-full border-2 border-amber-600 bg-amber-500/20 flex flex-col items-center justify-center text-center shadow-inner">
            <span className="text-lg">{titleData.realmBadge}</span>
            <span className="text-[8px] font-mono font-bold tracking-tighter text-amber-700 dark:text-amber-300 uppercase">
              SEALED
            </span>
          </div>

          <div className="text-right">
            <div className="font-mono text-xs text-slate-600 dark:text-slate-400">
              {new Date(result.timestamp).toLocaleDateString()}
            </div>
            <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">
              Inscribed on this Date
            </div>
          </div>
        </div>

      </div>

      {/* Footer Navigation */}
      <div className="flex justify-center gap-4 mt-8 print:hidden">
        <button
          onClick={onOpenCodex}
          className="px-5 py-2.5 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-colors flex items-center gap-2 shadow-sm"
        >
          <BookOpen className="w-4 h-4 text-amber-500" />
          <span>Explore Entire Codex Library</span>
        </button>

        <button
          onClick={onPlayAgain}
          className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-amber-600 hover:bg-amber-500 transition-colors flex items-center gap-2 shadow-sm"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Launch New Survival Run</span>
        </button>
      </div>

    </div>
  );
};
