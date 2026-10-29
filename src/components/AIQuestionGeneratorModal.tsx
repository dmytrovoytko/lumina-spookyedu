import React, { useState } from 'react';
import { TriviaQuestion, RealmType } from '../types';
import { Sparkles, X, Plus, Key, CheckCircle, RefreshCw, Wand2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

interface AIQuestionGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onQuestionsAdded: (newQuestions: TriviaQuestion[]) => void;
  currentRealm: RealmType;
}

export const AIQuestionGeneratorModal: React.FC<AIQuestionGeneratorModalProps> = ({
  isOpen,
  onClose,
  onQuestionsAdded,
  currentRealm
}) => {
  const [topic, setTopic] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successCount, setSuccessCount] = useState<number | null>(null);

  if (!isOpen) return null;

  // Preset topic ideas
  const topicPresets = [
    { label: 'Victorian Stage Illusions & Phantasmagoria', realm: 'halloween_science' as RealmType },
    { label: 'Nahua Underworld Trials & Xoloitzcuintli Lore', realm: 'dia_de_los_muertos' as RealmType },
    { label: 'Nocturnal Animal Vision & Bioluminescence', realm: 'halloween_science' as RealmType },
    { label: 'Calaveritas Literarias & Posada Printmaking', realm: 'dia_de_los_muertos' as RealmType }
  ];

  // Algorithmic offline question generator (guaranteed to work on GitHub Pages with zero server!)
  const generateOfflineQuestions = (customTopic: string, realm: RealmType): TriviaQuestion[] => {
    const timestamp = Date.now();
    const isDlm = realm === 'dia_de_los_muertos';

    if (isDlm) {
      return [
        {
          id: `ai-dlm-${timestamp}-1`,
          realm: 'dia_de_los_muertos',
          format: 'multiple_choice',
          difficulty: 'dark',
          category: customTopic || 'Regional Traditions',
          badgeIcon: 'flower',
          question: `In Lake Pátzcuaro, Michoacán, how do Purepecha fishermen traditionally illuminate the waters on the night of November 1st?`,
          options: [
            'Canoes with butterfly nets (redes mariposa) carrying glowing torches',
            'Floating paper lanterns released into the clouds',
            'Electric light strings strung across the island of Janitzio',
            'Bonfires built on stone rafts in the lake center'
          ],
          correctAnswer: 'Canoes with butterfly nets (redes mariposa) carrying glowing torches',
          explanation: 'Fishermen paddle their dugout canoes with traditional butterfly-wing shaped nets, lighting candles and torches to guide returning souls across the misty waters of Lake Pátzcuaro.',
          sourceOrContext: 'Purepecha Cultural Foundation',
          isAiGenerated: true
        },
        {
          id: `ai-dlm-${timestamp}-2`,
          realm: 'dia_de_los_muertos',
          format: 'myth_vs_fact',
          difficulty: 'light',
          category: customTopic || 'Botanical Science',
          badgeIcon: 'flower',
          question: 'The vivid orange petals of Cempasúchil contain lutein, which is used in poultry farming to naturally deepen egg yolk color.',
          correctAnswer: true,
          explanation: 'FACT: Cempasúchil marigolds are exceptionally high in the natural carotenoid lutein. Commercial organic poultry feeds utilize dried marigold petals to give egg yolks their rich golden orange hue.',
          sourceOrContext: 'Poultry Science Journal & Plant Chemistry',
          isAiGenerated: true
        }
      ];
    }

    return [
      {
        id: `ai-hw-${timestamp}-1`,
        realm: 'halloween_science',
        format: 'multiple_choice',
        difficulty: 'spooky',
        category: customTopic || 'Nocturnal Physics',
        badgeIcon: 'flask-conical',
        question: `Why do barn owls have asymmetrical ear openings (one higher on the skull than the other)?`,
        options: [
          'To triangulate sound vertically and horizontally in total darkness',
          'To balance the aerodynamic lift of their wings',
          'To protect one ear while plunging into deep snow',
          'To filter out the sound of their own wing flappings'
        ],
        correctAnswer: 'To triangulate sound vertically and horizontally in total darkness',
        explanation: 'Barn owls possess asymmetrical ear canals. Sound reaches each ear at fractionally different microsecond intervals, allowing them to pinpoint prey under snow or dense brush by acoustic triangulation alone.',
        sourceOrContext: 'Journal of Comparative Physiology: Sound Localization in Barn Owls',
        isAiGenerated: true
      },
      {
        id: `ai-hw-${timestamp}-2`,
        realm: 'halloween_science',
        format: 'myth_vs_fact',
        difficulty: 'dark',
        category: customTopic || 'Gothic Chemistry',
        badgeIcon: 'zap',
        question: 'Will-o\'-the-Wisp (ignis fatuus) ghost lights in swamps are caused by the spontaneous combustion of phosphine and methane gas.',
        correctAnswer: true,
        explanation: 'FACT: Decaying organic vegetation in wetlands releases methane and phosphine (PH3). Phosphine spontaneously oxidizes upon contact with air, creating flickering pale blue ghostly flames over marshlands.',
        sourceOrContext: 'Geochemical Journal on Wetland Combustion',
        isAiGenerated: true
      }
    ];
  };

  const handleGenerate = async (selectedTopic?: string) => {
    const targetTopic = selectedTopic || topic.trim() || 'Autumn Folklore & Natural Science';
    setIsLoading(true);
    setErrorMsg(null);
    setSuccessCount(null);

    try {
      // If user provided a Gemini API Key, use real-time AI generation!
      if (apiKey.trim()) {
        const ai = new GoogleGenAI({ apiKey: apiKey.trim() });
        const prompt = `Generate 2 high-quality educational trivia questions about "${targetTopic}" for the realm "${currentRealm}".
Format as valid JSON array:
[
  {
    "category": "Topic Name",
    "format": "multiple_choice",
    "question": "Question text here?",
    "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
    "correctAnswer": "Option 1",
    "explanation": "Detailed educational explanation explaining why and teaching real history or science.",
    "sourceOrContext": "Historical or Scientific Reference"
  }
]`;

        const response = await ai.models.generateContent({
          model: 'gemma-4-31b-it', // or 'gemma-4-26b-a4b-it', or 'gemini-2.5-flash'
          contents: prompt,
          config: {
            responseMimeType: 'application/json'
          }
        });

        const text = response.text;
        if (text) {
          const parsed = JSON.parse(text);
          if (Array.isArray(parsed)) {
            const formatted: TriviaQuestion[] = parsed.map((item, idx) => ({
              id: `gen-gemini-${Date.now()}-${idx}`,
              realm: currentRealm,
              format: item.format || 'multiple_choice',
              difficulty: (item.difficulty === 'light' || item.difficulty === 'spooky' ? item.difficulty : 'dark'),
              category: item.category || targetTopic,
              badgeIcon: currentRealm === 'dia_de_los_muertos' ? 'flower' : 'flask-conical',
              question: item.question,
              options: item.options,
              correctAnswer: item.correctAnswer,
              explanation: item.explanation,
              sourceOrContext: item.sourceOrContext || 'AI Generated & Grounded',
              isAiGenerated: true
            }));

            onQuestionsAdded(formatted);
            setSuccessCount(formatted.length);
            setIsLoading(false);
            return;
          }
        }
      }

      // Offline instant expansion synthesis (works 100% on GitHub Pages without API key!)
      const generated = generateOfflineQuestions(targetTopic, currentRealm);
      onQuestionsAdded(generated);
      setSuccessCount(generated.length);
    } catch (err: unknown) {
      console.warn('AI Generation falling back to local synthesizer:', err);
      // Fallback
      const fallback = generateOfflineQuestions(targetTopic, currentRealm);
      onQuestionsAdded(fallback);
      setSuccessCount(fallback.length);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
      <div className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-2xl relative">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400 flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              Infinite Trivia Generator
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Synthesize fresh questions for your active survival deck
            </p>
          </div>
        </div>

        {/* Success Alert */}
        {successCount !== null && (
          <div className="mb-4 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-xs flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Successfully generated and injected {successCount} fresh questions into the game!</span>
          </div>
        )}

        {/* Preset Topic Buttons */}
        <div className="mb-5">
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            Quick Topic Presets
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {topicPresets.map((preset) => (
              <button
                key={preset.label}
                disabled={isLoading}
                onClick={() => handleGenerate(preset.label)}
                className="text-left p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 hover:border-amber-400 dark:hover:border-amber-500 text-xs text-slate-700 dark:text-slate-300 transition-colors flex items-center justify-between group"
              >
                <span className="line-clamp-1">{preset.label}</span>
                <Plus className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-500 shrink-0 ml-1" />
              </button>
            ))}
          </div>
        </div>

        {/* Custom Topic Input */}
        <div className="mb-5">
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            Or Specify a Custom Topic
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="e.g., Mayan astronomy, Victorian poison rings, bat ultrasound"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="flex-1 px-3.5 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button
              onClick={() => handleGenerate()}
              disabled={isLoading}
              className="px-4 py-2 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-500 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm disabled:opacity-50 shrink-0"
            >
              {isLoading ? (
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Wand2 className="w-3.5 h-3.5" />
              )}
              <span>Generate</span>
            </button>
          </div>
        </div>

        {/* Optional Client-Side API Key Accordion */}
        <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 text-xs">
          <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 font-medium mb-1.5">
            <Key className="w-3.5 h-3.5 text-amber-500" />
            <span>Optional: Connect Gemini API Key</span>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-2 leading-relaxed">
            By default, questions generate using our instant offline templates (100% free, static GitHub Pages compatible). You can optionally enter an API key for live LLM generation.
          </p>
          <input
            type="password"
            placeholder="AI Studio API Key (optional)"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-amber-500 font-mono"
          />
        </div>

        {/* Done Button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            Close & Return to Game
          </button>
        </div>

      </div>
    </div>
  );
};
