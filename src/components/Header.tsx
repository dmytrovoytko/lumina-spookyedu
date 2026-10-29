import React from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface HeaderProps {
  currentTab: 'realms' | 'game' | 'codex' | 'certificates';
  onSelectTab: (tab: 'realms' | 'game' | 'codex' | 'certificates') => void;
  isMuted: boolean;
  onToggleMute: () => void;
  onQuickStart: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  isMuted,
  onToggleMute,
  onQuickStart
}) => {
  const handleTabClick = (tab: 'realms' | 'game' | 'codex' | 'certificates') => {
    soundManager.playClick();
    onSelectTab(tab);
  };

  return (
    <header className="flex items-center justify-between gap-8 px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md sticky top-0 z-40">
      
      {/* Zone 1: Single text element wordmark */}
      <button 
        onClick={() => handleTabClick('realms')}
        className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100 whitespace-nowrap shrink-0 flex items-center gap-2 hover:opacity-80 transition-opacity"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
        <span>Lumina</span>
      </button>

      {/* Zone 2: 4 clean, single-line text navigation links */}
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
        <button
          onClick={() => handleTabClick('realms')}
          className={`hover:text-slate-900 dark:hover:text-slate-100 transition-colors whitespace-nowrap shrink-0 ${
            currentTab === 'realms' ? 'text-amber-600 dark:text-amber-400 font-semibold' : ''
          }`}
        >
          Realms
        </button>
        <button
          onClick={() => handleTabClick('game')}
          className={`hover:text-slate-900 dark:hover:text-slate-100 transition-colors whitespace-nowrap shrink-0 ${
            currentTab === 'game' ? 'text-amber-600 dark:text-amber-400 font-semibold' : ''
          }`}
        >
          Survival Arcade
        </button>
        <button
          onClick={() => handleTabClick('codex')}
          className={`hover:text-slate-900 dark:hover:text-slate-100 transition-colors whitespace-nowrap shrink-0 ${
            currentTab === 'codex' ? 'text-amber-600 dark:text-amber-400 font-semibold' : ''
          }`}
        >
          Codex & Science
        </button>
        <button
          onClick={() => handleTabClick('certificates')}
          className={`hover:text-slate-900 dark:hover:text-slate-100 transition-colors whitespace-nowrap shrink-0 ${
            currentTab === 'certificates' ? 'text-amber-600 dark:text-amber-400 font-semibold' : ''
          }`}
        >
          Certificates
        </button>
      </nav>

      {/* Zone 3: 1 primary action cluster */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          onClick={onToggleMute}
          aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>

        <button
          onClick={onQuickStart}
          className="px-4 py-2 text-xs font-medium text-white bg-amber-600 hover:bg-amber-500 dark:bg-amber-500 dark:hover:bg-amber-400 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
        >
          Play Survival
        </button>
      </div>

    </header>
  );
};
