/**
 * 题目类型枚举
 * 包含应用中使用的五种题型
 */
export enum QuestionType {
  /** 选择题 */
  Choice = 'choice',
  /** 填空题 */
  Fill = 'fill',
  /** 判断题 */
  TrueFalse = 'truefalse',
  /** 匹配题 */
  Matching = 'matching',
  /** 简答题 */
  ShortAnswer = 'shortanswer',
}

/**
 * 难度等级
 */
export type Difficulty = 'easy' | 'medium' | 'hard';

/**
 * 题目基础接口
 * 包含所有题型共有的字段
 */
export interface BaseQuestion {
  /** 题目唯一标识 */
  id: string;
  /** 题目类型（用于判别联合类型） */
  type: QuestionType;
  /** 题目内容 */
  question: string;
  /** 标准答案 */
  answer: string;
  /** 答案解析 */
  explanation?: string;
  /** 难度等级 */
  difficulty: Difficulty;
  /** 所属科目ID */
  subjectId?: string;
  /** 所属章节ID */
  chapterId?: string;
  /** 知识点标签 */
  tags?: string[];
}

/**
 * 选择题
 * 包含多个选项供学生选择
 */
export interface ChoiceQuestion extends BaseQuestion {
  type: QuestionType.Choice;
  /** 选项列表 */
  options: string[];
}

/**
 * 填空题
 * 学生需要填写缺失的内容
 */
export interface FillQuestion extends BaseQuestion {
  type: QuestionType.Fill;
}

/**
 * 判断题
 * 学生需要判断对错
 */
export interface TrueFalseQuestion extends BaseQuestion {
  type: QuestionType.TrueFalse;
  /** 选项列表（通常为 ["正确", "错误"]） */
  options: string[];
}

/**
 * 匹配题
 * 学生需要将左右两列进行匹配
 */
export interface MatchingQuestion extends BaseQuestion {
  type: QuestionType.Matching;
  /** 匹配对列表 */
  pairs: { left: string; right: string }[];
}

/**
 * 简答题
 * 学生需要书写简要回答
 */
export interface ShortAnswerQuestion extends BaseQuestion {
  type: QuestionType.ShortAnswer;
  /** 可接受的答案列表（用于自动判分或参考） */
  acceptableAnswers: string[];
}

/**
 * 题目联合类型
 * 基于type字段进行判别的联合类型
 */
export type Question =
  | ChoiceQuestion
  | FillQuestion
  | TrueFalseQuestion
  | MatchingQuestion
  | ShortAnswerQuestion;

/**
 * 章节数据接口
 * 描述一个章节的基本信息
 */
export interface ChapterData {
  /** 章节唯一标识 */
  id: string;
  /** 章节名称 */
  name: string;
  /** 所属科目ID */
  subjectId: string;
  /** 知识点列表 */
  knowledgePoints: string[];
  /** 练习题数量 */
  exercises: number;
  /** 章节排序序号 */
  order?: number;
}
