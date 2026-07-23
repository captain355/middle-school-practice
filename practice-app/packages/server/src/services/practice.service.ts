import { prisma } from '../config/database.js';

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
 * 提交练习结果
 * 创建练习记录、更新学习进度、处理错题
 * @param userId 用户ID
 * @param data 练习数据
 * @returns 创建的练习记录
 */
export async function submitPractice(userId: string, data: SubmitPracticeData) {
  // 使用事务确保数据一致性
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

    // 2. 更新或创建学生进度（使用 upsert）
    const existingProgress = await tx.studentProgress.findUnique({
      where: {
        userId_chapterId: {
          userId,
          chapterId: data.chapterId,
        },
      },
    });

    // 计算新的累计正确数
    const prevCorrect = existingProgress?.correctQuestions ?? 0;
    const prevTotal = existingProgress?.totalQuestions ?? 0;
    const newCorrect = prevCorrect + data.correct;
    const newTotal = prevTotal + data.total;

    // 计算最佳分数（百分比）
    const currentBest = existingProgress?.bestScore ?? 0;
    const currentPercent = Math.round((data.correct / data.total) * 100);
    const bestScore = Math.max(currentBest, currentPercent);

    await tx.studentProgress.upsert({
      where: {
        userId_chapterId: {
          userId,
          chapterId: data.chapterId,
        },
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

    // 3. 处理错题：将本次做错的题目加入错题本
    if (data.wrongAnswers && data.wrongAnswers.length > 0) {
      for (const item of data.wrongAnswers) {
        // 使用 upsert 处理重复错题
        await tx.wrongQuestion.upsert({
          where: {
            userId_questionId: {
              userId,
              questionId: item.questionId,
            },
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
            // 如果之前已掌握，重新标记为未掌握
            isMastered: false,
            masteredAt: null,
          },
        });
      }
    }

    // 4. 如果有全对的题目，更新对应错题记录为已掌握
    // 查找本次练习章节中未做错的、且在错题本中的题目
    if (data.wrongAnswers && data.total > data.wrongAnswers.length) {
      // 获取本次练习章节的所有题目ID
      const allQuestions = await tx.question.findMany({
        where: { chapterId: data.chapterId, isActive: true },
        select: { id: true },
      });

      const wrongQuestionIds = new Set(data.wrongAnswers.map((w) => w.questionId));
      // 找出正确回答但之前在错题本中的题目
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
 * 获取练习记录（分页）
 * @param userId 用户ID
 * @param page 页码
 * @param pageSize 每页条数
 * @returns 分页结果
 */
export async function getRecords(
  userId: string,
  page: number,
  pageSize: number,
) {
  const where = { userId };

  // 查询总条数
  const total = await prisma.practiceRecord.count({ where });

  // 查询当前页数据
  const list = await prisma.practiceRecord.findMany({
    where,
    orderBy: { createdAt: 'desc' },
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  return { list, total };
}

/**
 * 获取用户所有章节的学习进度
 * @param userId 用户ID
 * @returns 进度数组
 */
export async function getProgress(userId: string) {
  return prisma.studentProgress.findMany({
    where: { userId },
    orderBy: { updatedAt: 'desc' },
    include: {
      // 关联章节信息，便于前端展示
      // 注意：StudentProgress 模型中没有直接关联 Chapter，需要通过 chapterId 查询
    },
  });
}

/**
 * 获取用户的错题列表（含题目详情）
 * @param userId 用户ID
 * @returns 错题数组
 */
export async function getWrongQuestions(userId: string) {
  return prisma.wrongQuestion.findMany({
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
            },
          },
        },
      },
    },
  });
}

/**
 * 从错题本中移除错题
 * @param userId 用户ID
 * @param wrongId 错题记录ID
 */
export async function removeWrongQuestion(userId: string, wrongId: string): Promise<void> {
  // 验证错题记录属于当前用户
  const wrongQuestion = await prisma.wrongQuestion.findUnique({
    where: { id: wrongId },
  });

  if (!wrongQuestion) {
    throw new Error('错题记录不存在');
  }

  if (wrongQuestion.userId !== userId) {
    throw new Error('无权删除此错题记录');
  }

  await prisma.wrongQuestion.delete({
    where: { id: wrongId },
  });
}

/**
 * 每日打卡
 * 计算连续打卡天数，支持跨天续签
 * @param userId 用户ID
 * @returns 打卡信息
 */
export async function checkin(userId: string) {
  const today = new Date();
  // 将时间归零到当天零点，用于日期比较
  today.setHours(0, 0, 0, 0);

  // 查找现有的打卡记录
  const existing = await prisma.checkinStreak.findUnique({
    where: { userId },
  });

  if (!existing) {
    // 首次打卡
    const streak = await prisma.checkinStreak.create({
      data: {
        userId,
        streakCount: 1,
        lastDate: today,
        totalDays: 1,
      },
    });
    return {
      streakCount: streak.streakCount,
      totalDays: streak.totalDays,
      lastDate: streak.lastDate,
      checkedInToday: true,
    };
  }

  // 将上次打卡日期也归零方便比较
  const lastDate = new Date(existing.lastDate);
  lastDate.setHours(0, 0, 0, 0);

  // 判断今天是否已打卡（同一天）
  if (lastDate.getTime() === today.getTime()) {
    return {
      streakCount: existing.streakCount,
      totalDays: existing.totalDays,
      lastDate: existing.lastDate,
      checkedInToday: true,
    };
  }

  // 计算日期差（毫秒转天）
  const diffMs = today.getTime() - lastDate.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  let newStreakCount: number;

  if (diffDays === 1) {
    // 连续打卡：天数+1
    newStreakCount = existing.streakCount + 1;
  } else if (diffDays > 1) {
    // 中断了：重新从1开始
    newStreakCount = 1;
  } else {
    // diffDays < 1 理论上不应该出现（未来时间）
    throw new Error('打卡时间异常');
  }

  // 更新打卡记录
  const updated = await prisma.checkinStreak.update({
    where: { userId },
    data: {
      streakCount: newStreakCount,
      lastDate: today,
      totalDays: { increment: 1 },
    },
  });

  return {
    streakCount: updated.streakCount,
    totalDays: updated.totalDays,
    lastDate: updated.lastDate,
    checkedInToday: true,
  };
}

/**
 * 获取用户的打卡连续天数信息
 * @param userId 用户ID
 * @returns 打卡信息，未打卡过返回默认值
 */
export async function getStreak(userId: string) {
 const streak = await prisma.checkinStreak.findUnique({
    where: { userId },
  });

  if (!streak) {
    return {
      streakCount: 0,
      totalDays: 0,
      lastDate: null,
      checkedInToday: false,
    };
  }

  // 检查今天是否已打卡
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const lastDate = new Date(streak.lastDate);
  lastDate.setHours(0, 0, 0, 0);
  const checkedInToday = lastDate.getTime() === today.getTime();

  return {
    streakCount: streak.streakCount,
    totalDays: streak.totalDays,
    lastDate: streak.lastDate,
    checkedInToday,
  };
}
