import React from 'react';
import { GameSessionResult } from '../types';
import { Award, Calendar, RotateCcw, Eye, Trash2 } from 'lucide-react';
import { computeEarnedTitle } from '../utils/titleGenerator';

interface CertificateHistoryProps {
  history: GameSessionResult[];
  onViewCertificate: (cert: GameSessionResult) => void;
  onClearHistory: () => void;
  onPlayNewGame: () => void;
}

export const CertificateHistory: React.FC<CertificateHistoryProps> = ({
  history,
  onViewCertificate,
  onClearHistory,
  onPlayNewGame
}) => {
  if (history.length === 0) {
    return (
      <div className="w-full max-w-3xl mx-auto px-4 py-16 text-center">
        <div className="w-16 h-16 rounded-3xl bg-amber-100 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400 mx-auto flex items-center justify-center mb-4">
          <Award className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
          No Inscribed Seals Yet
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-6">
          Complete a Ticking Candle Survival run in any realm to earn your first certified title and personalized knowledge digest!
        </p>
        <button
          onClick={onPlayNewGame}
          className="px-6 py-2.5 rounded-xl font-medium text-sm text-white bg-amber-600 hover:bg-amber-500 transition-colors shadow-sm"
        >
          Begin First Survival Run
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-1">
            Inscribed Certificates & Seals
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Archive of your survival runs, earned ranks, and acquired facts
          </p>
        </div>

        <button
          onClick={onClearHistory}
          className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors flex items-center gap-1.5"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Clear Archive</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {history.map((item) => {
          const titleInfo = computeEarnedTitle(
            item.realm,
            item.accuracy,
            item.maxStreak,
            item.score
          );

          const realmLabel =
            item.realm === 'dia_de_los_muertos'
              ? 'Día de los Muertos'
              : item.realm === 'halloween_science'
              ? 'Halloween Science'
              : 'Hybrid Challenge';

          return (
            <div
              key={item.id}
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="font-mono">{new Date(item.timestamp).toLocaleDateString()}</span>
                  <span>{realmLabel}</span>
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">{titleInfo.realmBadge}</span>
                  <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-slate-100">
                    {titleInfo.title}
                  </h3>
                </div>

                <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 mb-3">
                  Rank: {titleInfo.rank} · Player: {item.playerName}
                </div>

                {/* Score strip */}
                <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-center text-xs font-mono mb-4">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase">Score</div>
                    <div className="font-bold text-slate-800 dark:text-slate-200">{item.score}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase">Accuracy</div>
                    <div className="font-bold text-slate-800 dark:text-slate-200">{item.accuracy}%</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase">Max Streak</div>
                    <div className="font-bold text-slate-800 dark:text-slate-200">{item.maxStreak}x</div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onViewCertificate(item)}
                className="w-full py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-amber-500 text-xs font-semibold text-slate-800 dark:text-slate-200 transition-colors flex items-center justify-center gap-1.5"
              >
                <Eye className="w-3.5 h-3.5 text-amber-500" />
                <span>View Full Certificate</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
