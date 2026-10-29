export type RealmType = 'dia_de_los_muertos' | 'halloween_science' | 'hybrid';

export type QuestionFormat = 'multiple_choice' | 'myth_vs_fact';

export type DifficultyLevel = 'light' | 'dark' | 'spooky';

export interface TriviaQuestion {
  id: string;
  realm: RealmType;
  format: QuestionFormat;
  difficulty: DifficultyLevel;
  category: string;
  badgeIcon: string;
  question: string;
  options?: string[]; // 4 items if format === 'multiple_choice'
  correctAnswer: string | boolean; // string if multiple_choice, boolean (true=Fact, false=Myth) if myth_vs_fact
  explanation: string;
  sourceOrContext?: string;
  isAiGenerated?: boolean;
}

export interface GameSessionResult {
  id: string;
  timestamp: number;
  playerName: string;
  realm: RealmType;
  score: number;
  totalAnswered: number;
  correctAnswers: number;
  accuracy: number;
  maxStreak: number;
  survivalSeconds: number;
  earnedTitle: string;
  learnedFacts: {
    question: string;
    fact: string;
    wasCorrect: boolean;
  }[];
}

export interface SoundSettings {
  muted: boolean;
  volume: number;
}
