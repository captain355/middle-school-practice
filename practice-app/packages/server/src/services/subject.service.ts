import { prisma } from '../config/database.js';

// 辅助函数：解析 JSON 字符串字段（兼容 SQLite）
function parseJsonField<T>(value: unknown): T | null {
  if (value === null || value === undefined) return null;
  if (typeof value === 'string') {
    try { return JSON.parse(value) as T; }
    catch { return null; }
  }
  return value as T;
}

function parseSubject(subject: any) {
  if (!subject) return subject;
  return {
    ...subject,
    tags: parseJsonField<string[]>(subject.tags) || [],
    gradeRange: parseJsonField<number[]>(subject.gradeRange) || [],
  };
}

/**
 * 获取所有学科列表（按排序字段升序）
 */
export async function findAll() {
  const subjects = await prisma.subject.findMany({
    orderBy: { sortOrder: 'asc' },
    include: {
      textbooks: {
        include: {
          chapters: {
            select: { knowledgePoints: true, questionCount: true },
          },
        },
      },
    },
  });
  return subjects.map(parseSubject);
}

/**
 * 根据ID获取学科详情（含教材版本和章节）
 */
export async function findById(id: string) {
  const subject = await prisma.subject.findUnique({
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
  return parseSubject(subject);
}

/**
 * 获取学科下的教材版本列表
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
