// 题目导入脚本：从前端 sampleQuestions.js 导入所有题目到数据库
// 运行方式: npx tsx scripts/import-questions.ts

import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';

// 加载环境变量（从项目根目录）
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

import { prisma } from '../src/config/database.js';

// 题目数据接口
interface SampleQuestion {
  id: string;
  type: string;       // choice, fill, truefalse, matching, shortanswer
  question: string;
  answer: string;
  explanation?: string;
  difficulty?: number;
  options?: string[];
  pairs?: { left: string; right: string }[];
  acceptableAnswers?: string[];
}

interface SampleChapterData {
  chapterName: string;
  questions: SampleQuestion[];
}

/**
 * 动态加载前端 JS 数据文件
 * 使用文件读取 + Function 构造器解析 CommonJS 格式的 export const
 */
function loadSampleQuestions(): Record<string, SampleChapterData> {
  const filePath = path.resolve(__dirname, '../../client/src/data/sampleQuestions.js');
  console.log(`正在加载题目文件: ${filePath}`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`题目文件不存在: ${filePath}`);
  }

  const content = fs.readFileSync(filePath, 'utf-8');

  // 从 JS 文件中提取 export const sampleQuestions = {...} 的数据
  // 匹配整个对象字面量
  const match = content.match(/export\s+const\s+sampleQuestions\s*=\s*(\{[\s\S]*\})\s*;?\s*$/m);
  if (!match) {
    throw new Error('无法解析 sampleQuestions.js：未找到 export const sampleQuestions 定义');
  }

  // 使用 Function 构造器安全地解析对象
  try {
    const fn = new Function('return ' + match[1]);
    return fn() as Record<string, SampleChapterData>;
  } catch (e) {
    throw new Error(`解析 sampleQuestions 数据失败: ${e}`);
  }
}

/**
 * 解析题目键，提取 subjectId, textbookId, grade, chapterIndex
 * 键格式: 'subjectId-textbookId-grade-chapterIndex' (如 'math-renjiao-7-0')
 */
function parseQuestionKey(key: string): { subjectId: string; textbookId: string; grade: number; chapterIndex: number } | null {
  const parts = key.split('-');
  // subjectId 和 textbookId 可能包含连字符（但实际数据中不会）
  // 格式固定为 4 段: subjectId-textbookId-grade-chapterIndex
  if (parts.length < 4) {
    console.warn(`  [警告] 无法解析题目键: ${key}`);
    return null;
  }

  const chapterIndex = parseInt(parts[parts.length - 1], 10);
  const grade = parseInt(parts[parts.length - 2], 10);
  const textbookId = parts[parts.length - 3];
  // subjectId 是剩余部分（用连字符连接）
  const subjectId = parts.slice(0, parts.length - 3).join('-');

  if (isNaN(grade) || isNaN(chapterIndex)) {
    console.warn(`  [警告] 无法解析年级或章节索引: ${key}`);
    return null;
  }

  return { subjectId, textbookId, grade, chapterIndex };
}

/**
 * 主函数：导入所有题目
 */
async function main() {
  console.log('=== 开始导入题目数据 ===\n');

  // 加载前端题目数据
  const sampleQuestions = loadSampleQuestions();
  const keys = Object.keys(sampleQuestions);
  console.log(`共找到 ${keys.length} 个章节的题目数据\n`);

  // 统计变量
  let totalImported = 0;
  let totalSkipped = 0;
  let chapterProcessed = 0;

  // 用于批量插入的缓冲区
  const BATCH_SIZE = 100;

  for (const key of keys) {
    const data = sampleQuestions[key];
    const parsed = parseQuestionKey(key);

    if (!parsed) {
      console.log(`  [跳过] ${key} - 无法解析键`);
      continue;
    }

    const { subjectId, textbookId, grade, chapterIndex } = parsed;
    const chapterKey = `${subjectId}-${textbookId}-${grade}-${chapterIndex}`;

    // 查找对应的教材记录
    const textbook = await prisma.textbook.findFirst({
      where: {
        subjectId: subjectId,
        code: textbookId,
      },
    });

    if (!textbook) {
      console.log(`  [跳过] ${key} - 未找到教材 ${subjectId}/${textbookId}`);
      continue;
    }

    // 查找对应的章节记录
    const chapter = await prisma.chapter.findFirst({
      where: {
        textbookId: textbook.id,
        chapterKey: chapterKey,
      },
    });

    if (!chapter) {
      console.log(`  [跳过] ${key} - 未找到章节 ${chapterKey}`);
      continue;
    }

    // 获取已存在的题目键，用于去重
    const existingKeys = new Set(
      (await prisma.question.findMany({
        where: { chapterId: chapter.id },
        select: { questionKey: true },
      })).map(q => q.questionKey)
    );

    // 准备待插入的题目数据
    const toInsert: any[] = [];

    for (const q of data.questions) {
      // 跳过已存在的题目
      if (existingKeys.has(q.id)) {
        totalSkipped++;
        continue;
      }

      toInsert.push({
        chapterId: chapter.id,
        questionKey: q.id,
        type: q.type,
        questionText: q.question,
        answer: q.answer,
        explanation: q.explanation || null,
        difficulty: q.difficulty || 1,
        options: q.options ? JSON.stringify(q.options) : null,
        pairs: q.pairs ? JSON.stringify(q.pairs) : null,
        acceptableAnswers: q.acceptableAnswers ? JSON.stringify(q.acceptableAnswers) : null,
      });
    }

    // 分批插入
    for (let i = 0; i < toInsert.length; i += BATCH_SIZE) {
      const batch = toInsert.slice(i, i + BATCH_SIZE);
      const result = await prisma.question.createMany({
        data: batch,
        skipDuplicates: true,
      });
      totalImported += result.count;
    }

    const questionCount = data.questions.length;
    const newCount = toInsert.length;
    const skipCount = questionCount - newCount;
    console.log(`  [导入] ${key}: ${questionCount} 题目 (新增 ${newCount}, 跳过已存在 ${skipCount})`);
    chapterProcessed++;
  }

  console.log('\n=== 题目导入完成 ===');
  console.log(`  处理章节数: ${chapterProcessed}`);
  console.log(`  新增题目总数: ${totalImported}`);
  console.log(`  跳过已存在: ${totalSkipped}`);
}

// 执行主函数并处理错误
main()
  .catch((e) => {
    console.error('题目导入失败:', e);
    process.exit(1);
  })
  .finally(async () => {
    // 断开数据库连接
    await prisma.$disconnect();
  });
