import React, { useState } from 'react';
import { TriviaQuestion, RealmType } from '../types';
import { Search, BookOpen, CheckCircle, HelpCircle, ArrowRight, Flower2, FlaskConical, Sparkles } from 'lucide-react';

interface CodexExplorerProps {
  questions: TriviaQuestion[];
  onStartWithQuestionRealm: (realm: RealmType) => void;
}

export const CodexExplorer: React.FC<CodexExplorerProps> = ({
  questions,
  onStartWithQuestionRealm
}) => {
  const [search, setSearch] = useState('');
  const [selectedRealm, setSelectedRealm] = useState<string>('all');
  const [selectedFormat, setSelectedFormat] = useState<string>('all');

  const filtered = questions.filter((q) => {
    const matchesRealm =
      selectedRealm === 'all' || q.realm === selectedRealm;
    const matchesFormat =
      selectedFormat === 'all' || q.format === selectedFormat;
    const matchesSearch =
      q.question.toLowerCase().includes(search.toLowerCase()) ||
      q.category.toLowerCase().includes(search.toLowerCase()) ||
      q.explanation.toLowerCase().includes(search.toLowerCase());

    return matchesRealm && matchesFormat && matchesSearch;
  });

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      {/* Editorial Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-2">
          Codex of Remembrance & Science
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Browse the complete compendium of verified cultural histories, nocturnal ecology, optical physics, and folklore debunkings.
        </p>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 p-3 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 backdrop-blur-sm">
        
        {/* Search Input */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search lore, science, or debunkings..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        {/* Filter Segmented Controls */}
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          {/* Realm Selector Tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-medium">
            <button
              onClick={() => setSelectedRealm('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                selectedRealm === 'all'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              All Realms
            </button>
            <button
              onClick={() => setSelectedRealm('dia_de_los_muertos')}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                selectedRealm === 'dia_de_los_muertos'
                  ? 'bg-amber-500 text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              Día de Muertos
            </button>
            <button
              onClick={() => setSelectedRealm('halloween_science')}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                selectedRealm === 'halloween_science'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              Halloween Science
            </button>
          </div>

          {/* Format Selector Tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-medium">
            <button
              onClick={() => setSelectedFormat('all')}
              className={`px-2.5 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                selectedFormat === 'all'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              All Types
            </button>
            <button
              onClick={() => setSelectedFormat('myth_vs_fact')}
              className={`px-2.5 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                selectedFormat === 'myth_vs_fact'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              Myth vs Fact
            </button>
          </div>
        </div>

      </div>

      {/* Results Count (Zero-Pill Unboxed Metadata) */}
      <div className="mb-4 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
        <span>Showing {filtered.length} entries in library</span>
        {search && (
          <button
            onClick={() => setSearch('')}
            className="text-amber-600 dark:text-amber-400 hover:underline"
          >
            Clear search
          </button>
        )}
      </div>

      {/* Question Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((item) => {
          const isDlm = item.realm === 'dia_de_los_muertos';
          const isMythFact = item.format === 'myth_vs_fact';

          return (
            <div
              key={item.id}
              className="p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Unboxed Metadata Header */}
                <div className="flex items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                  <div className="flex items-center gap-1.5">
                    {isDlm ? (
                      <Flower2 className="w-3.5 h-3.5 text-amber-500" />
                    ) : item.realm === 'halloween_science' ? (
                      <FlaskConical className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                    )}
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{item.category}</span>
                  </div>
                  <span>{isMythFact ? 'Myth vs Fact' : 'Deep Trivia'}</span>
                </div>

                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-3 leading-snug">
                  {item.question}
                </h3>

                {/* Multiple choice options preview */}
                {item.format === 'multiple_choice' && item.options && (
                  <div className="mb-3 space-y-1">
                    {item.options.map((opt) => (
                      <div
                        key={opt}
                        className={`text-xs px-2.5 py-1 rounded-lg border ${
                          opt === item.correctAnswer
                            ? 'border-emerald-300 bg-emerald-50/60 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-medium'
                            : 'border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        {opt} {opt === item.correctAnswer && '✓'}
                      </div>
                    ))}
                  </div>
                )}

                {/* Myth vs Fact result banner */}
                {isMythFact && (
                  <div className="mb-3">
                    <span
                      className={`inline-block text-xs font-bold px-2 py-0.5 rounded font-mono ${
                        item.correctAnswer === true
                          ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                          : 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300'
                      }`}
                    >
                      VERIFIED: {item.correctAnswer === true ? 'HISTORICAL / SCIENTIFIC FACT' : 'FOLKLORE MYTH (DEBUNKED)'}
                    </span>
                  </div>
                )}

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                  {item.explanation}
                </p>
              </div>

              {item.sourceOrContext && (
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 italic">
                  Ref: {item.sourceOrContext}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};
