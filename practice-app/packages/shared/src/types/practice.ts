export interface PracticeRecord {
  id: string;
  userId: string;
  chapterId?: string;
  subjectId?: string;
  score: number;
  correct: number;
  total: number;
  duration?: number;
  createdAt: string;
}

export interface StudentProgress {
  chapterId: string;
  bestScore: number;
  totalQuestions: number;
  correctQuestions: number;
  attempts: number;
  lastPracticeAt?: string;
}

export interface WrongQuestion {
  id: string;
  questionId: string;
  userAnswer: string;
  wrongCount: number;
  lastWrongAt: string;
  isMastered: boolean;
  masteredAt?: string;
}

export interface CheckinStreak {
  streakCount: number;
  lastDate: string;
  totalDays: number;
}
