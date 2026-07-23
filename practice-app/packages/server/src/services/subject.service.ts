import { prisma } from '../config/database.js';

/**
 * 获取所有学科列表（按排序字段升序）
 * @returns 学科数组
 */
export async function findAll() {
  return prisma.subject.findMany({
    orderBy: { sortOrder: 'asc' },
    select: {
      id: true,
      name: true,
      emoji: true,
      color: true,
      description: true,
      tags: true,
      gradeRange: true,
      sortOrder: true,
      // 包含每个学科下的教材版本数量
      _count: {
        select: { textbooks: true },
      },
    },
  });
}

/**
 * 根据ID获取学科详情（含教材版本和章节）
 * @param id 学科ID
 * @returns 学科详情，不存在返回 null
 */
export async function findById(id: string) {
  return prisma.subject.findUnique({
    where: { id },
    include: {
      textbooks: {
        orderBy: { createdAt: 'asc' },
        include: {
          chapters: {
            orderBy: { sortOrder: 'asc' },
            select: {
              id: true,
              grade: true,
              sortOrder: true,
              name: true,
              knowledgePoints: true,
              exercises: true,
              chapterKey: true,
            },
          },
        },
      },
    },
  });
}

/**
 * 获取学科下的教材版本列表
 * @param subjectId 学科ID
 * @returns 教材版本数组
 */
export async function getTextbooks(subjectId: string) {
  return prisma.textbook.findMany({
    where: { subjectId },
    orderBy: { createdAt: 'asc' },
    include: {
      chapters: {
        orderBy: { sortOrder: 'asc' },
        select: {
          id: true,
          grade: true,
          sortOrder: true,
          name: true,
          knowledgePoints: true,
          exercises: true,
          chapterKey: true,
        },
      },
    },
  });
}
