/**
 * 练习相关 API 模块
 * 提供练习提交、练习记录、学习进度、错题管理、打卡、统计等接口
 */

import { get, post, del } from './client';

/**
 * 练习提交数据结构
 */
export interface PracticeSubmitData {
  subjectId: string;
  chapterId: string;
  textbookId?: string;
  score: number;
  correct: number;
  total: number;
  duration?: number;
  wrongAnswers?: Array<{ questionId: string; userAnswer: string }>;
}

/**
 * 练习记录数据结构
 */
export interface PracticeRecordItem {
  id: string;
  userId: string;
  chapterId?: string;
  subjectId?: string;
  textbookId?: string;
  score: number;
  correct: number;
  total: number;
  duration?: number;
  createdAt: string;
}

/**
 * 学习进度数据结构
 */
export interface ProgressItem {
  id: string;
  userId: string;
  chapterId: string;
  bestScore: number;
  totalQuestions: number;
  correctQuestions: number;
  attempts: number;
  lastPracticeAt?: string;
  updatedAt: string;
  // 关联信息
  chapter: { id: string; name: string; grade: number; chapterKey: string } | null;
  subject: { id: string; name: string; emoji: string; color: string } | null;
}

/**
 * 错题数据结构（从后端返回的平铺结构）
 */
export interface WrongQuestionItem {
  id: string;
  questionId: string;
  userAnswer: string;
  wrongCount: number;
  lastWrongAt: string;
  isMastered: boolean;
  createdAt: string;
  // 题目信息
  questionText: string;
  type: string;
  answer: string;
  explanation?: string;
  difficulty?: number;
  options?: string[];
  pairs?: { left: string; right: string }[];
  acceptableAnswers?: string[];
  // 学科和章节信息
  subjectId?: string;
  subjectName?: string;
  subjectEmoji?: string;
  subjectColor?: string;
  chapterName?: string;
  chapterGrade?: number;
}

/**
 * 题目数据结构（数据库中的题目）
 */
export interface QuestionItem {
  id: string;
  chapterId: string;
  questionKey: string;
  type: string;
  questionText: string;
  answer: string;
  explanation?: string;
  difficulty: number;
  options?: string[];
  pairs?: { left: string; right: string }[];
  acceptableAnswers?: string[];
  isActive: boolean;
  createdAt: string;
}

/**
 * 打卡信息数据结构
 */
export interface CheckinInfo {
  streakCount: number;
  totalDays: number;
  lastDate: string | null;
  checkedInToday: boolean;
}

/**
 * 练习统计数据结构
 */
export interface PracticeStats {
  totalPractice: number;
  totalQuestions: number;
  totalCorrect: number;
  accuracy: number;
  subjectStats: Array<{
    subjectId: string;
    name: string;
    emoji?: string;
    color?: string;
    count: number;
    total: number;
    correct: number;
    accuracy: number;
  }>;
}

/**
 * 练习 API 对象
 */
export const practiceApi = {
  /** 按章节ID获取题目列表 */
  questionsByChapter: (chapterId: string) =>
    get<QuestionItem[]>(`/practice/questions/chapter/${chapterId}`),

  /** 按 chapterKey 获取题目列表 */
  questionsByChapterKey: (chapterKey: string) =>
    get<QuestionItem[]>(`/practice/questions/key/${chapterKey}`),

  /** 提交练习结果 */
  submit: (data: PracticeSubmitData) =>
    post('/practice/submit', data),

  /** 获取练习记录列表（分页） */
  records: (page = 1, pageSize = 20) =>
    get<{ list: PracticeRecordItem[]; total: number; page: number; pageSize: number }>(
      `/practice/records?page=${page}&pageSize=${pageSize}`,
    ),

  /** 获取各章节的学习进度 */
  progress: () =>
    get<ProgressItem[]>('/practice/progress'),

  /** 获取错题列表 */
  wrongQuestions: () =>
    get<WrongQuestionItem[]>('/practice/wrong'),

  /** 移除指定错题 */
  removeWrong: (id: string) =>
    del(`/practice/wrong/${id}`),

  /** 执行每日打卡 */
  checkin: () =>
    post<CheckinInfo>('/practice/checkin'),

  /** 获取当前打卡信息 */
  getStreak: () =>
    get<CheckinInfo>('/practice/checkin'),

  /** 获取练习统计汇总 */
  stats: () =>
    get<PracticeStats>('/practice/stats'),
};
