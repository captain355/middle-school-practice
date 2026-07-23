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

// 格式化题目数据，解析 JSON 字段
function formatQuestion(q: any) {
  if (!q) return q;
  return {
    ...q,
    options: parseJsonField<string[]>(q.options),
    pairs: parseJsonField<{ left: string; right: string }[]>(q.pairs),
    acceptableAnswers: parseJsonField<string[]>(q.acceptableAnswers),
  };
}

// 格式化错题数据（含题目详情和章节信息）
function formatWrongQuestion(wq: any) {
  if (!wq) return wq;
  return {
    ...wq,
    question: wq.question ? formatQuestion(wq.question) : wq.question,
  };
}

// 提交练习的参数类型
type SubmitPracticeData = {
  chapterId: string;
  subjectId: string;
  textbookId?: string;
  score: number;
  correct: number;
  total: number;
  duration?: number;
  wrongAnswers?: Array<{
    questionId: string;
    userAnswer: string;
  }>;
};

/**
 * 按章节获取题目列表（解析 JSON 字段）
 */
export async function getQuestionsByChapter(chapterId: string) {
  const questions = await prisma.question.findMany({
    where: { chapterId, isActive: true },
    orderBy: { createdAt: 'asc' },
  });
  return questions.map(formatQuestion);
}

/**
 * 按 chapterKey 获取题目列表
 */
export async function getQuestionsByChapterKey(chapterKey: string) {
  const chapter = await prisma.chapter.findUnique({
    where: { chapterKey },
  });
  if (!chapter) return [];
  return getQuestionsByChapter(chapter.id);
}

/**
 * 提交练习结果
 * 创建练习记录、更新学习进度、处理错题
 */
export async function submitPractice(userId: string, data: SubmitPracticeData) {
  return prisma.$transaction(async (tx) => {
    // 1. 创建练习记录
    const record = await tx.practiceRecord.create({
      data: {
        userId,
        chapterId: data.chapterId,
        subjectId: data.subjectId,
        textbookId: data.textbookId,
        score: data.score,
        correct: data.correct,
        total: data.total,
        duration: data.duration,
      },
    });

    // 2. 更新或创建学生进度
    const existingProgress = await tx.studentProgress.findUnique({
      where: {
        userId_chapterId: { userId, chapterId: data.chapterId },
      },
    });

    const prevCorrect = existingProgress?.correctQuestions ?? 0;
    const prevTotal = existingProgress?.totalQuestions ?? 0;
    const newCorrect = prevCorrect + data.correct;
    const newTotal = prevTotal + data.total;

    const currentBest = existingProgress?.bestScore ?? 0;
    const currentPercent = Math.round((data.correct / data.total) * 100);
    const bestScore = Math.max(currentBest, currentPercent);

    await tx.studentProgress.upsert({
      where: {
        userId_chapterId: { userId, chapterId: data.chapterId },
      },
      create: {
        userId,
        chapterId: data.chapterId,
        bestScore,
        totalQuestions: data.total,
        correctQuestions: data.correct,
        attempts: 1,
        lastPracticeAt: new Date(),
      },
      update: {
        bestScore,
        totalQuestions: newTotal,
        correctQuestions: newCorrect,
        attempts: { increment: 1 },
        lastPracticeAt: new Date(),
      },
    });

    // 3. 处理错题
    if (data.wrongAnswers && data.wrongAnswers.length > 0) {
      for (const item of data.wrongAnswers) {
        await tx.wrongQuestion.upsert({
          where: {
            userId_questionId: { userId, questionId: item.questionId },
          },
          create: {
            userId,
            questionId: item.questionId,
            userAnswer: item.userAnswer,
            wrongCount: 1,
            lastWrongAt: new Date(),
            isMastered: false,
          },
          update: {
            userAnswer: item.userAnswer,
            wrongCount: { increment: 1 },
            lastWrongAt: new Date(),
            isMastered: false,
            masteredAt: null,
          },
        });
      }
    }

    // 4. 全对题目更新错题记录为已掌握
    if (data.wrongAnswers && data.total > data.wrongAnswers.length) {
      const allQuestions = await tx.question.findMany({
        where: { chapterId: data.chapterId, isActive: true },
        select: { id: true },
      });
      const wrongQuestionIds = new Set(data.wrongAnswers.map((w) => w.questionId));
      const correctlyAnsweredIds = allQuestions
        .map((q) => q.id)
        .filter((id) => !wrongQuestionIds.has(id));

      if (correctlyAnsweredIds.length > 0) {
        await tx.wrongQuestion.updateMany({
          where: {
            userId,
            questionId: { in: correctlyAnsweredIds },
            isMastered: false,
          },
          data: {
            isMastered: true,
            masteredAt: new Date(),
          },
        });
      }
    }

    return record;
  });
}

/**
 * 获取练习记录（分页，含学科信息）
 */
export async function getRecords(userId: string, page: number, pageSize: number) {
  const where = { userId };
  const total = await prisma.practiceRecord.count({ where });

  const list = await prisma.practiceRecord.findMany({
    where,
    orderBy: { createdAt: 'desc' },
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  return { list, total };
}

/**
 * 获取用户各章节的学习进度（含章节和学科信息）
 */
export async function getProgress(userId: string) {
  const progressList = await prisma.studentProgress.findMany({
    where: { userId },
    orderBy: { updatedAt: 'desc' },
    include: {
      user: false,
    },
  });

  // 批量查询关联的章节信息
  const chapterIds = [...new Set(progressList.map(p => p.chapterId))];
  const chapters = chapterIds.length > 0 ? await prisma.chapter.findMany({
    where: { id: { in: chapterIds } },
    include: { textbook: { include: { subject: { select: { id: true, name: true, emoji: true, color: true } } } } },
  }) : [];

  const chapterMap = new Map(chapters.map(ch => [ch.id, ch]));

  return progressList.map(p => {
    const chapter = chapterMap.get(p.chapterId);
    return {
      ...p,
      chapter: chapter ? {
        id: chapter.id,
        name: chapter.name,
        grade: chapter.grade,
        chapterKey: chapter.chapterKey,
      } : null,
      subject: chapter?.textbook?.subject ? {
        id: chapter.textbook.subject.id,
        name: chapter.textbook.subject.name,
        emoji: chapter.textbook.subject.emoji,
        color: chapter.textbook.subject.color,
      } : null,
    };
  });
}

/**
 * 获取用户的错题列表（含题目详情和章节学科信息，解析 JSON 字段）
 */
export async function getWrongQuestions(userId: string) {
  const wrongList = await prisma.wrongQuestion.findMany({
    where: { userId },
    orderBy: { lastWrongAt: 'desc' },
    include: {
      question: {
        select: {
          id: true,
          questionKey: true,
          type: true,
          questionText: true,
          answer: true,
          explanation: true,
          difficulty: true,
          options: true,
          pairs: true,
          acceptableAnswers: true,
          chapter: {
            select: {
              id: true,
              name: true,
              grade: true,
              chapterKey: true,
              textbook: {
                select: {
                  subjectId: true,
                  subject: {
                    select: { id: true, name: true, emoji: true, color: true },
                  },
                },
              },
            },
          },
        },
      },
    },
  });

  return wrongList.map(wq => {
    const formatted = formatWrongQuestion(wq);
    // 提取平铺的字段方便前端使用
    const q = formatted.question;
    return {
      id: formatted.id,
      questionId: formatted.questionId,
      userAnswer: formatted.userAnswer,
      wrongCount: formatted.wrongCount,
      lastWrongAt: formatted.lastWrongAt,
      isMastered: formatted.isMastered,
      createdAt: formatted.createdAt,
      // 题目信息
      questionText: q?.questionText,
      type: q?.type,
      answer: q?.answer,
      explanation: q?.explanation,
      difficulty: q?.difficulty,
      options: q?.options,
      pairs: q?.pairs,
      acceptableAnswers: q?.acceptableAnswers,
      // 学科和章节信息（从嵌套关系提取）
      subjectId: q?.chapter?.textbook?.subjectId,
      subjectName: q?.chapter?.textbook?.subject?.name,
      subjectEmoji: q?.chapter?.textbook?.subject?.emoji,
      subjectColor: q?.chapter?.textbook?.subject?.color,
      chapterName: q?.chapter?.name,
      chapterGrade: q?.chapter?.grade,
    };
  });
}

/**
 * 从错题本中移除错题
 */
export async function removeWrongQuestion(userId: string, wrongId: string): Promise<void> {
  const wrongQuestion = await prisma.wrongQuestion.findUnique({ where: { id: wrongId } });
  if (!wrongQuestion) throw new Error('错题记录不存在');
  if (wrongQuestion.userId !== userId) throw new Error('无权删除此错题记录');
  await prisma.wrongQuestion.delete({ where: { id: wrongId } });
}

/**
 * 每日打卡
 */
export async function checkin(userId: string) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const existing = await prisma.checkinStreak.findUnique({ where: { userId } });

  if (!existing) {
    const streak = await prisma.checkinStreak.create({
      data: { userId, streakCount: 1, lastDate: today.toISOString().split('T')[0], totalDays: 1 },
    });
    return { streakCount: streak.streakCount, totalDays: streak.totalDays, lastDate: streak.lastDate, checkedInToday: true };
  }

  // SQLite 中 lastDate 存为字符串，直接比较
  const todayStr = today.toISOString().split('T')[0];
  if (existing.lastDate === todayStr) {
    return { streakCount: existing.streakCount, totalDays: existing.totalDays, lastDate: existing.lastDate, checkedInToday: true };
  }

  // 计算日期差
  const lastDate = new Date(existing.lastDate);
  lastDate.setHours(0, 0, 0, 0);
  const diffMs = today.getTime() - lastDate.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  let newStreakCount: number;
  if (diffDays === 1) {
    newStreakCount = existing.streakCount + 1;
  } else if (diffDays > 1) {
    newStreakCount = 1;
  } else {
    throw new Error('打卡时间异常');
  }

  const updated = await prisma.checkinStreak.update({
    where: { userId },
    data: { streakCount: newStreakCount, lastDate: todayStr, totalDays: { increment: 1 } },
  });

  return { streakCount: updated.streakCount, totalDays: updated.totalDays, lastDate: updated.lastDate, checkedInToday: true };
}

/**
 * 获取用户的打卡连续天数信息
 */
export async function getStreak(userId: string) {
  const streak = await prisma.checkinStreak.findUnique({ where: { userId } });

  if (!streak) {
    return { streakCount: 0, totalDays: 0, lastDate: null, checkedInToday: false };
  }

  const todayStr = new Date().toISOString().split('T')[0];
  const checkedInToday = streak.lastDate === todayStr;

  return {
    streakCount: streak.streakCount,
    totalDays: streak.totalDays,
    lastDate: streak.lastDate,
    checkedInToday,
  };
}

/**
 * 获取练习统计汇总（用于 StatsPage）
 */
export async function getStats(userId: string) {
  // 总练习次数和总答题数
  const aggregate = await prisma.practiceRecord.aggregate({
    where: { userId },
    _count: true,
    _sum: { correct: true, total: true },
  });

  // 各学科统计
  const subjectStatsRaw = await prisma.practiceRecord.groupBy({
    by: ['subjectId'],
    where: { userId },
    _count: true,
    _sum: { correct: true, total: true },
    orderBy: { subjectId: 'asc' },
  });

  // 获取学科信息
  const subjectIds = subjectStatsRaw.map(s => s.subjectId).filter(Boolean);
  const subjects = subjectIds.length > 0 ? await prisma.subject.findMany({
    where: { id: { in: subjectIds } },
    select: { id: true, name: true, emoji: true, color: true },
  }) : [];
  const subjectMap = new Map(subjects.map(s => [s.id, s]));

  const subjectStats = subjectStatsRaw.map(s => {
    const subj = subjectMap.get(s.subjectId);
    const total = s._sum.total ?? 0;
    const correct = s._sum.correct ?? 0;
    return {
      subjectId: s.subjectId,
      name: subj?.name || s.subjectId,
      emoji: subj?.emoji,
      color: subj?.color,
      count: s._count,
      total,
      correct,
      accuracy: total ? Math.round((correct / total) * 100) : 0,
    };
  });

  return {
    totalPractice: aggregate._count,
    totalQuestions: aggregate._sum.total ?? 0,
    totalCorrect: aggregate._sum.correct ?? 0,
    accuracy: (aggregate._sum.total ?? 0) ? Math.round(((aggregate._sum.correct ?? 0) / (aggregate._sum.total ?? 0)) * 100) : 0,
    subjectStats,
  };
}
