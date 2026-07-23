/**
 * 学科相关 API 模块
 * 提供学科列表、学科详情、教材列表等接口
 */

import { get } from './client';

/**
 * 学科数据结构
 */
export interface SubjectItem {
  /** 学科唯一标识 */
  id: string;
  /** 学科名称 */
  name: string;
  /** 学科对应的 Emoji 图标 */
  emoji: string;
  /** 学科主题色 */
  color: string;
  /** 学科描述 */
  description: string;
  /** 学科标签列表 */
  tags: string[];
  /** 适用的年级范围 */
  gradeRange: number[];
}

/**
 * 教材数据结构
 */
export interface TextbookItem {
  /** 教材唯一标识 */
  id: string;
  /** 所属学科 ID */
  subjectId: string;
  /** 教材编码 */
  code: string;
  /** 教材名称 */
  name: string;
  /** 出版社 */
  publisher: string;
  /** 创建时间 */
  createdAt: string;
}

/**
 * 学科 API 对象
 * 封装所有与学科和教材相关的远程调用
 */
export const subjectsApi = {
  /**
   * 获取所有学科列表
   * @returns 学科数组
   */
  list: () => get<SubjectItem[]>('/subjects'),

  /**
   * 获取学科详情（含关联教材列表）
   * @param id - 学科 ID
   * @returns 学科详情及关联教材
   */
  detail: (id: string) =>
    get<SubjectItem & { textbooks: TextbookItem[] }>(`/subjects/${id}`),

  /**
   * 获取指定学科下的教材列表
   * @param subjectId - 学科 ID
   * @returns 教材数组
   */
  textbooks: (subjectId: string) =>
    get<TextbookItem[]>(`/subjects/${subjectId}/textbooks`),
};
