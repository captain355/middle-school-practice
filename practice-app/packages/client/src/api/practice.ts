/**
 * 练习相关 API 模块
 * 提供练习提交、练习记录、学习进度、错题管理、打卡等接口
 */

import { get, post, put, del } from './client';

/**
 * 练习提交数据结构
 */
export interface PracticeSubmitData {
  /** 学科 ID（可选） */
  subjectId?: string;
  /** 教材 ID（可选） */
  textbookId?: string;
  /** 章节标识（可选） */
  chapterKey?: string;
  /** 得分 */
  score: number;
  /** 正确题数 */
  correct: number;
  /** 总题数 */
  total: number;
  /** 用时（秒，可选） */
  duration?: number;
  /** 用户答题记录：题目 ID -> 用户答案 */
  answers: Record<string, string>;
  /** 题目答案列表（用于错题检测） */
  questions: { id: string; answer: string }[];
}

/**
 * 练习记录数据结构
 */
export interface PracticeRecordItem {
  /** 记录唯一标识 */
  id: string;
  /** 学科 ID（可选） */
  subjectId?: string;
  /** 得分 */
  score: number;
  /** 正确题数 */
  correct: number;
  /** 总题数 */
  total: number;
  /** 用时（秒，可选） */
  duration?: number;
  /** 创建时间 */
  createdAt: string;
}

/**
 * 学习进度数据结构
 */
export interface ProgressItem {
  /** 章节 ID */
  chapterId: string;
  /** 最佳成绩 */
  bestScore: number;
  /** 总题数 */
  totalQuestions: number;
  /** 正确题数 */
  correctQuestions: number;
  /** 练习次数 */
  attempts: number;
  /** 最近一次练习时间（可选） */
  lastPracticeAt?: string;
}

/**
 * 错题数据结构
 */
export interface WrongQuestionItem {
  /** 错题记录唯一标识 */
  id: string;
  /** 题目 ID */
  questionId: string;
  /** 题目文本 */
  questionText: string;
  /** 题目类型 */
  questionType: string;
  /** 用户答案 */
  userAnswer: string;
  /** 正确答案 */
  correctAnswer: string;
  /** 解析说明（可选） */
  explanation?: string;
  /** 错误次数 */
  wrongCount: number;
  /** 是否已掌握 */
  isMastered: boolean;
  /** 所属章节名称（可选） */
  chapterName?: string;
  /** 创建时间 */
  createdAt: string;
}

/**
 * 打卡信息数据结构
 */
export interface CheckinInfo {
  /** 连续打卡天数 */
  streakCount: number;
  /** 最近一次打卡日期 */
  lastDate: string;
  /** 累计打卡总天数 */
  totalDays: number;
}

/**
 * 练习 API 对象
 * 封装所有与练习相关的远程调用
 */
export const practiceApi = {
  /**
   * 提交练习结果
   * @param data - 练习提交数据
   * @returns 提交结果
   */
  submit: (data: PracticeSubmitData) =>
    post('/practice/submit', data),

  /**
   * 获取练习记录列表（分页）
   * @param page - 页码，默认第 1 页
   * @param pageSize - 每页条数，默认 20
   * @returns 分页数据（包含记录列表和总数）
   */
  records: (page = 1, pageSize = 20) =>
    get<{ list: PracticeRecordItem[]; total: number }>(
      `/practice/records?page=${page}&pageSize=${pageSize}`,
    ),

  /**
   * 获取各章节的学习进度
   * @returns 进度数组
   */
  progress: () =>
    get<ProgressItem[]>('/practice/progress'),

  /**
   * 获取错题列表
   * @returns 错题数组
   */
  wrongQuestions: () =>
    get<WrongQuestionItem[]>('/practice/wrong'),

  /**
   * 移除指定错题
   * @param id - 错题记录 ID
   * @returns 操作结果
   */
  removeWrong: (id: string) =>
    del(`/practice/wrong/${id}`),

  /**
   * 执行每日打卡
   * @returns 打卡信息（连续天数、累计天数等）
   */
  checkin: () =>
    post<CheckinInfo>('/practice/checkin'),

  /**
   * 获取当前打卡信息（连续天数、累计天数等）
   * @returns 打卡信息
   */
  getStreak: () =>
    get<CheckinInfo>('/practice/checkin'),
};
