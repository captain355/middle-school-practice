// 数据库种子脚本：初始化学科、教材版本和章节数据
// 运行方式: npx tsx prisma/seed.ts

import { prisma } from '../src/config/database.js';
import { seedSubjects, seedChapterData } from './seed-data.js';

async function main() {
  console.log('=== 开始数据库种子操作 ===\n');

  // 统计变量
  let subjectCount = 0;
  let textbookCount = 0;
  let chapterCount = 0;

  // 使用事务保证数据一致性
  await prisma.$transaction(async (tx) => {
    for (const subject of seedSubjects) {
      // 创建或更新学科
      const upsertedSubject = await tx.subject.upsert({
        where: { id: subject.id },
        update: {
          name: subject.name,
          emoji: subject.emoji,
          color: subject.color,
          description: subject.description,
          tags: subject.tags,
          gradeRange: subject.gradeRange,
          sortOrder: subject.sortOrder,
        },
        create: {
          id: subject.id,
          name: subject.name,
          emoji: subject.emoji,
          color: subject.color,
          description: subject.description,
          tags: subject.tags,
          gradeRange: subject.gradeRange,
          sortOrder: subject.sortOrder,
        },
      });
      subjectCount++;
      console.log(`  [学科] ${upsertedSubject.name} (${subject.id})`);

      // 为该学科创建或更新教材版本
      for (const textbook of subject.textbooks) {
        const upsertedTextbook = await tx.textbook.upsert({
          where: {
            subjectId_code: {
              subjectId: subject.id,
              code: textbook.id,
            },
          },
          update: {
            name: textbook.name,
            publisher: textbook.publisher,
          },
          create: {
            subjectId: subject.id,
            code: textbook.id,
            name: textbook.name,
            publisher: textbook.publisher,
          },
        });
        textbookCount++;
        console.log(`    [教材] ${upsertedTextbook.name} (${textbook.id})`);

        // 查找该教材对应的章节数据
        const comboKey = `${subject.id}-${textbook.id}`;
        const chapterMap = seedChapterData[comboKey];

        if (!chapterMap) {
          console.log(`    [跳过] 未找到 ${comboKey} 的章节数据`);
          continue;
        }

        // 遍历各年级的章节
        for (const gradeStr of Object.keys(chapterMap)) {
          const grade = Number(gradeStr);
          const chapters = chapterMap[grade];

          for (let sortOrder = 0; sortOrder < chapters.length; sortOrder++) {
            const ch = chapters[sortOrder];
            // 使用 subjectId-textbookId-grade-index 作为全局唯一的 chapterKey
            // 因为数据库中 chapterKey 字段有 @unique 约束
            const uniqueChapterKey = `${subject.id}-${textbook.id}-${ch.key}`;

            const upsertedChapter = await tx.chapter.upsert({
              where: { chapterKey: uniqueChapterKey },
              update: {
                grade: grade,
                sortOrder: sortOrder,
                name: ch.name,
                knowledgePoints: ch.points,
                exercises: ch.exercises,
              },
              create: {
                textbookId: upsertedTextbook.id,
                grade: grade,
                sortOrder: sortOrder,
                name: ch.name,
                knowledgePoints: ch.points,
                exercises: ch.exercises,
                chapterKey: uniqueChapterKey,
              },
            });
            chapterCount++;
            console.log(`      [章节] ${grade}年级 - ${upsertedChapter.name} (${uniqueChapterKey})`);
          }
        }
      }
    }
  });

  console.log('\n=== 种子操作完成 ===');
  console.log(`  学科数量: ${subjectCount}`);
  console.log(`  教材版本数量: ${textbookCount}`);
  console.log(`  章节总数: ${chapterCount}`);
}

// 执行主函数并处理错误
main()
  .catch((e) => {
    console.error('种子脚本执行失败:', e);
    process.exit(1);
  })
  .finally(async () => {
    // 断开数据库连接
    await prisma.$disconnect();
  });
