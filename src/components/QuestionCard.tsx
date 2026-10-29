import React from 'react';
import { TriviaQuestion } from '../types';
import { soundManager } from '../utils/audio';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  BookOpen, 
  Flower2, 
  Flame, 
  FlaskConical, 
  Calendar, 
  Sparkles, 
  ShieldAlert, 
  EyeOff, 
  Cat, 
  Leaf, 
  Zap,
  HelpCircle
} from 'lucide-react';

interface QuestionCardProps {
  question: TriviaQuestion;
  selectedAnswer: string | boolean | null;
  isAnswered: boolean;
  onSelectAnswer: (answer: string | boolean) => void;
  onNextQuestion: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  isAnswered,
  onSelectAnswer,
  onNextQuestion
}) => {
  const handleAnswerClick = (ans: string | boolean) => {
    if (isAnswered) return;
    soundManager.playClick();
    onSelectAnswer(ans);
  };
  const isCorrect =
    isAnswered && selectedAnswer === question.correctAnswer;

  // Icon mapping
  const renderBadgeIcon = () => {
    switch (question.badgeIcon) {
      case 'flower':
        return <Flower2 className="w-5 h-5 text-amber-500" />;
      case 'flame':
        return <Flame className="w-5 h-5 text-orange-500" />;
      case 'flask-conical':
        return <FlaskConical className="w-5 h-5 text-emerald-500" />;
      case 'calendar':
        return <Calendar className="w-5 h-5 text-purple-500" />;
      case 'sparkles':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'shield-alert':
        return <ShieldAlert className="w-5 h-5 text-rose-500" />;
      case 'eye-off':
        return <EyeOff className="w-5 h-5 text-cyan-500" />;
      case 'cat':
        return <Cat className="w-5 h-5 text-indigo-400" />;
      case 'leaf':
        return <Leaf className="w-5 h-5 text-emerald-400" />;
      case 'zap':
        return <Zap className="w-5 h-5 text-yellow-500" />;
      default:
        return <BookOpen className="w-5 h-5 text-slate-400" />;
    }
  };

  const realmName =
    question.realm === 'dia_de_los_muertos'
      ? 'Día de los Muertos'
      : question.realm === 'halloween_science'
      ? 'Halloween Science & Lore'
      : 'Cross-Cultural Lore';

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <div className="bg-white/90 dark:bg-slate-900/90 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 backdrop-blur-md shadow-lg transition-all">
        
        {/* Unboxed Metadata Header (Zero-Pill Discipline) */}
        <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            {renderBadgeIcon()}
            <span className="font-semibold text-slate-800 dark:text-slate-200">{question.category}</span>
            <span aria-hidden="true">·</span>
            <span>{realmName}</span>
            <span aria-hidden="true">·</span>
            <span className="capitalize">{question.format.replace(/_/g, ' ')}</span>
            <span aria-hidden="true">·</span>
            <span className={`font-medium ${
              question.difficulty === 'spooky'
                ? 'text-purple-600 dark:text-purple-400'
                : question.difficulty === 'dark'
                ? 'text-amber-600 dark:text-amber-400'
                : 'text-emerald-600 dark:text-emerald-400'
            }`}>
              {question.difficulty === 'spooky' ? 'Spooky (Hard)' : question.difficulty === 'dark' ? 'Dark (Medium)' : 'Light (Easy)'}
            </span>
          </div>
          {question.isAiGenerated && (
            <span className="text-amber-500 font-mono text-[11px]">AI Generated Batch</span>
          )}
        </div>

        {/* Question Text */}
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-6 text-balance leading-snug">
          {question.question}
        </h2>

        {/* Answer Options */}
        {question.format === 'multiple_choice' && question.options && (
          <div className="grid grid-cols-1 gap-3 mb-6">
            {question.options.map((option, idx) => {
              const isSelected = selectedAnswer === option;
              const isTargetCorrect = option === question.correctAnswer;

              let btnStyle = 'border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-500/50 bg-slate-50/50 dark:bg-slate-800/40 text-slate-800 dark:text-slate-200';

              if (isAnswered) {
                if (isTargetCorrect) {
                  btnStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 shadow-sm';
                } else if (isSelected && !isTargetCorrect) {
                  btnStyle = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200';
                } else {
                  btnStyle = 'border-slate-200/50 dark:border-slate-800/50 opacity-40 text-slate-400';
                }
              }

              return (
                <button
                  key={option}
                  onClick={() => handleAnswerClick(option)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${btnStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-xs font-mono font-medium text-slate-500 dark:text-slate-400 group-hover:border-amber-500">
                      {idx + 1}
                    </span>
                    <span className="text-sm sm:text-base font-medium">{option}</span>
                  </div>
                  {isAnswered && isTargetCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  )}
                  {isAnswered && isSelected && !isTargetCorrect && (
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Myth vs Fact Dual-Toggle Cards */}
        {question.format === 'myth_vs_fact' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {/* Myth Button */}
            {(() => {
              const isSelected = selectedAnswer === false;
              const isTargetCorrect = question.correctAnswer === false;

              let style = 'border-slate-200 dark:border-slate-800 hover:border-rose-400 bg-slate-50 dark:bg-slate-800/40 text-slate-800 dark:text-slate-200';

              if (isAnswered) {
                if (isTargetCorrect) {
                  style = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 shadow-sm';
                } else if (isSelected && !isTargetCorrect) {
                  style = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200';
                } else {
                  style = 'opacity-40 border-slate-200 dark:border-slate-800 text-slate-400';
                }
              }

              return (
                <button
                  onClick={() => handleAnswerClick(false)}
                  disabled={isAnswered}
                  className={`p-6 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 ${style}`}
                >
                  <span className="text-2xl font-bold tracking-tight">MYTH</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">Folklore superstition or false claim</span>
                  {isAnswered && isTargetCorrect && (
                    <div className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
                      <CheckCircle2 className="w-4 h-4" /> Correct Assessment
                    </div>
                  )}
                </button>
              );
            })()}

            {/* Fact Button */}
            {(() => {
              const isSelected = selectedAnswer === true;
              const isTargetCorrect = question.correctAnswer === true;

              let style = 'border-slate-200 dark:border-slate-800 hover:border-emerald-400 bg-slate-50 dark:bg-slate-800/40 text-slate-800 dark:text-slate-200';

              if (isAnswered) {
                if (isTargetCorrect) {
                  style = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 shadow-sm';
                } else if (isSelected && !isTargetCorrect) {
                  style = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200';
                } else {
                  style = 'opacity-40 border-slate-200 dark:border-slate-800 text-slate-400';
                }
              }

              return (
                <button
                  onClick={() => handleAnswerClick(true)}
                  disabled={isAnswered}
                  className={`p-6 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${style}`}
                >
                  <span className="text-2xl font-bold tracking-tight">FACT</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">Scientifically or historically verified truth</span>
                  {isAnswered && isTargetCorrect && (
                    <div className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
                      <CheckCircle2 className="w-4 h-4" /> Correct Assessment
                    </div>
                  )}
                </button>
              );
            })()}
          </div>
        )}

        {/* Post-Answer Educational Explanation Drawer */}
        {isAnswered && (
          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className={`p-4 rounded-xl mb-4 ${
              isCorrect 
                ? 'bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900 text-emerald-900 dark:text-emerald-100'
                : 'bg-rose-50/80 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900 text-rose-900 dark:text-rose-100'
            }`}>
              <div className="flex items-center gap-2 font-semibold text-sm mb-1.5">
                {isCorrect ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Luminous Precision! (+Time & Streak Boost)</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                    <span>Flame Flickers! (-6s Penalty)</span>
                  </>
                )}
              </div>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {question.explanation}
              </p>
              {question.sourceOrContext && (
                <div className="mt-2 text-xs text-slate-500 dark:text-slate-400 italic">
                  Reference: {question.sourceOrContext}
                </div>
              )}
            </div>

            <div className="flex justify-end">
              <button
                onClick={onNextQuestion}
                className="px-6 py-2.5 rounded-xl font-medium text-sm text-white bg-amber-600 hover:bg-amber-500 dark:bg-amber-500 dark:hover:bg-amber-400 transition-colors flex items-center gap-2 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <span>Continue to Next Flame</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
