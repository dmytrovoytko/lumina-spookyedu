import React from 'react';
import { RealmType, DifficultyLevel } from '../types';
import { Flower2, FlaskConical, Sparkles, ArrowRight, BookOpen, Clock, Award, Flame, Skull, Sun } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface RealmSelectorProps {
  selectedDifficulty: DifficultyLevel;
  onSelectDifficulty: (diff: DifficultyLevel) => void;
  onSelectRealm: (realm: RealmType) => void;
  onOpenCodex: () => void;
}

export const RealmSelector: React.FC<RealmSelectorProps> = ({
  selectedDifficulty,
  onSelectDifficulty,
  onSelectRealm,
  onOpenCodex
}) => {
  const handleDifficultyClick = (diff: DifficultyLevel) => {
    soundManager.playClick();
    onSelectDifficulty(diff);
  };
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      {/* Editorial Title Section */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-3 text-balance">
          Realms of Remembrance & Lore
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
          Choose a sacred pathway or explore both traditions. Keep your ceremonial flame lit through knowledge of ancient roots, optical science, and folklore truths.
        </p>

        {/* Difficulty Selection Bar (Light, Dark, Spooky) */}
        <div className="p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm max-w-lg mx-auto shadow-sm">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5 text-center">
            Flame Difficulty Level
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {/* Light / Easy */}
            <button
              onClick={() => handleDifficultyClick('light')}
              className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all flex flex-col items-center gap-1 ${
                selectedDifficulty === 'light'
                  ? 'bg-amber-500 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center gap-1">
                <Sun className="w-3.5 h-3.5" />
                <span>Light</span>
              </div>
              <span className={`text-[10px] ${selectedDifficulty === 'light' ? 'text-amber-100' : 'text-slate-400'}`}>
                Easy (Gentle)
              </span>
            </button>

            {/* Dark / Medium */}
            <button
              onClick={() => handleDifficultyClick('dark')}
              className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all flex flex-col items-center gap-1 ${
                selectedDifficulty === 'dark'
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center gap-1">
                <Flame className="w-3.5 h-3.5" />
                <span>Dark</span>
              </div>
              <span className={`text-[10px] ${selectedDifficulty === 'dark' ? 'text-orange-100' : 'text-slate-400'}`}>
                Medium (Standard)
              </span>
            </button>

            {/* Spooky / Hard */}
            <button
              onClick={() => handleDifficultyClick('spooky')}
              className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all flex flex-col items-center gap-1 ${
                selectedDifficulty === 'spooky'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center gap-1">
                <Skull className="w-3.5 h-3.5" />
                <span>Spooky</span>
              </div>
              <span className={`text-[10px] ${selectedDifficulty === 'spooky' ? 'text-purple-200' : 'text-slate-400'}`}>
                Hard (Intense)
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Realm Portals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        
        {/* Portal 1: Día de los Muertos */}
        <div className="relative group p-6 sm:p-8 rounded-2xl border border-amber-200 dark:border-amber-900/60 bg-gradient-to-b from-amber-50/70 to-orange-50/30 dark:from-slate-900/90 dark:to-amber-950/20 backdrop-blur-sm shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <Flower2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400">
                Ancestral Memory
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              El Camino de los Recuerdos
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Explore the 3,000-year-old Nahua roots of Día de los Muertos. Discover the 7 tiers of traditional ofrendas, the spiritual science of the cempasúchil marigold, satirical calaveritas, and the welcoming of departed souls.
            </p>

            <div className="space-y-2 mb-6 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Nahua Underworld cosmology (Mictlán)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>The 4 elemental altar offerings (Salt, Water, Earth, Wind)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Posada & Diego Rivera’s iconic La Catrina satire</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onSelectRealm('dia_de_los_muertos')}
            className="w-full py-3 px-4 rounded-xl text-sm font-semibold text-white bg-amber-600 hover:bg-amber-500 dark:bg-amber-500 dark:hover:bg-amber-400 transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <span>Enter the Path of Petals</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Portal 2: Gothic Halloween & Science Lore */}
        <div className="relative group p-6 sm:p-8 rounded-2xl border border-emerald-200 dark:border-emerald-900/60 bg-gradient-to-b from-emerald-50/50 to-slate-50/30 dark:from-slate-900/90 dark:to-emerald-950/20 backdrop-blur-sm shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <FlaskConical className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                Science & Lore
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              The Alchemist’s Crypt
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Step into the world of Celtic Samhain and Victorian science. Debunk vampire and werewolf myths through medical history, examine Pepper’s Ghost optical ray-tracing, and discover the nocturnal biology of bats and bioluminescent fungi.
            </p>

            <div className="space-y-2 mb-6 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Optics of Pepper's Ghost specular reflections</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Bat echolocation, pollination, and predatory ecology</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Toxicology: ergot fungus, porphyria, and rabies origins</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onSelectRealm('halloween_science')}
            className="w-full py-3 px-4 rounded-xl text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <span>Enter the Crypt of Science</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Hybrid Portal Banner */}
      <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">
              The Liminal Crossroads (Hybrid Challenge)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Alternates between both realms in a continuous survival run at your chosen difficulty.
            </p>
          </div>
        </div>

        <button
          onClick={() => onSelectRealm('hybrid')}
          className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shrink-0"
        >
          Play Hybrid Mode
        </button>
      </div>

      {/* Feature Pillars: 50% Threshold & Certified Titles */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400">
        <div className="flex flex-col items-center gap-1.5">
          <Clock className="w-4 h-4 text-slate-400" />
          <span className="font-medium text-slate-700 dark:text-slate-300">Ticking Candle Survival</span>
          <span>Earn time on correct answers; error penalty reduces flame</span>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <Award className="w-4 h-4 text-slate-400" />
          <span className="font-medium text-slate-700 dark:text-slate-300">50% Mastery Threshold</span>
          <span>Score ≥50% accuracy to earn and inscribe your ceremonial certificate</span>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <BookOpen className="w-4 h-4 text-slate-400" />
          <span className="font-medium text-slate-700 dark:text-slate-300">Codex & Fact Explorer</span>
          <span>Review all facts, myths, and science at any time in the Codex</span>
        </div>
      </div>

    </div>
  );
};
