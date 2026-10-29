import React from 'react';
import { Flame, Clock, Zap } from 'lucide-react';
import { RealmType } from '../types';

interface CandleHUDProps {
  secondsLeft: number;
  maxSeconds: number;
  streak: number;
  score: number;
  realm: RealmType;
  isFlaring: boolean;
  isPenalty: boolean;
}

export const CandleHUD: React.FC<CandleHUDProps> = ({
  secondsLeft,
  maxSeconds,
  streak,
  score,
  realm,
  isFlaring,
  isPenalty
}) => {
  const percentage = Math.min(100, Math.max(0, (secondsLeft / maxSeconds) * 100));
  const isUrgent = secondsLeft <= 10;

  // Realm-specific color accents
  const flameColor =
    realm === 'dia_de_los_muertos'
      ? '#F59E0B' // Marigold Amber
      : realm === 'halloween_science'
      ? '#10B981' // Spectral Emerald
      : '#F97316'; // Blended Sunset Orange

  const waxColor =
    realm === 'dia_de_los_muertos'
      ? 'bg-amber-100 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800'
      : realm === 'halloween_science'
      ? 'bg-emerald-950/40 border-emerald-800 text-emerald-200'
      : 'bg-stone-900 border-stone-700 text-stone-200';

  return (
    <div className="w-full max-w-3xl mx-auto mb-6 px-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 backdrop-blur-md shadow-sm">
        
        {/* Left: Ticking Candle SVG Visualization */}
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-24 flex flex-col items-center justify-end">
            
            {/* Penalty smoke effect */}
            {isPenalty && (
              <div className="absolute -top-3 w-4 h-6 bg-slate-400/50 rounded-full blur-sm animate-ping pointer-events-none" />
            )}

            {/* Dynamic Animated Flame */}
            <div
              className={`relative flex items-center justify-center transition-all duration-300 ${
                isFlaring ? 'scale-150 filter drop-shadow-[0_0_16px_rgba(245,158,11,0.9)]' : ''
              } ${isUrgent ? 'animate-pulse' : ''}`}
            >
              {/* Outer halo */}
              <div
                className="w-8 h-10 rounded-full blur-md opacity-70 transition-colors"
                style={{ backgroundColor: flameColor }}
              />
              
              {/* Inner core flame */}
              <div className="absolute w-5 h-8 bg-amber-200 rounded-full blur-[1px] -translate-y-1 animate-bounce duration-700" />
              <div className="absolute w-2 h-4 bg-white rounded-full -translate-y-1" />

              {/* Wick */}
              <div className="absolute bottom-0 w-0.5 h-3 bg-stone-900 dark:bg-stone-100 rounded-t" />
            </div>

            {/* Candle Body (Height shrinks slightly with time) */}
            <div
              className={`w-8 rounded-t-sm rounded-b-md border transition-all duration-500 relative overflow-hidden ${waxColor}`}
              style={{
                height: `${Math.max(28, (percentage / 100) * 56)}px`
              }}
            >
              {/* Wax melt dripping detail */}
              <div className="absolute top-0 left-1 w-2 h-3 rounded-b-full bg-amber-200/40 dark:bg-white/10" />
              <div className="absolute top-0 right-1.5 w-1.5 h-4 rounded-b-full bg-amber-200/30 dark:bg-white/10" />
            </div>
          </div>

          {/* Time & Warning Gauge */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase text-slate-500 dark:text-slate-400">
              <Clock className="w-3.5 h-3.5" />
              <span>Ceremonial Flame</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span
                className={`text-3xl font-bold font-mono tabular-nums transition-colors ${
                  isUrgent ? 'text-red-600 dark:text-red-400 animate-pulse' : 'text-slate-900 dark:text-slate-100'
                }`}
              >
                {secondsLeft}s
              </span>
              <span className="text-xs text-slate-400">remaining</span>
            </div>
            {isUrgent && (
              <span className="text-xs text-red-500 font-medium">Flame flickering low!</span>
            )}
          </div>
        </div>

        {/* Center: Fluid Progress Bar */}
        <div className="w-full sm:w-48 flex flex-col gap-1.5">
          <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
            <span>Wax Reserve</span>
            <span>{Math.round(percentage)}%</span>
          </div>
          <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{
                width: `${percentage}%`,
                backgroundColor: isUrgent ? '#EF4444' : flameColor
              }}
            />
          </div>
        </div>

        {/* Right: Score & Multiplier Streak */}
        <div className="flex items-center gap-6">
          <div className="text-right">
            <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">
              Score
            </div>
            <div className="text-2xl font-bold font-mono tabular-nums text-slate-900 dark:text-slate-100">
              {score}
            </div>
          </div>

          <div className="flex items-center gap-2 pl-4 border-l border-slate-200 dark:border-slate-800">
            <div
              className={`p-2 rounded-xl transition-all duration-300 ${
                streak >= 3
                  ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 scale-110 shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
              }`}
            >
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                Combo
              </div>
              <div className="text-lg font-bold font-mono tabular-nums text-slate-800 dark:text-slate-200">
                {streak > 0 ? `${streak}x` : '—'}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
