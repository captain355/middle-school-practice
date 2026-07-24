// 题目种子数据主入口脚本
// 导入所有学科的题目数据并写入数据库
// 运行方式: npx tsx prisma/seed-questions/index.ts

import { prisma } from '../../src/config/database.js';
import { seedMathRenjiaoQuestions } from './math-renjiao.js';
import { seedChineseRenjiaoQuestions } from './chinese-renjiao.js';
import { seedEnglishPepQuestions } from './english-pep.js';
import { seedPhysicsRenjiaoQuestions } from './physics-renjiao.js';
import { seedChemistryRenjiaoQuestions } from './chemistry-renjiao.js';
import { seedBiologyRenjiaoQuestions } from './biology-renjiao.js';
import { seedHistoryBubianQuestions } from './history-bubian.js';
import { seedGeographyRenjiaoQuestions } from './geography-renjiao.js';
import { seedPoliticsBubianQuestions } from './politics-bubian.js';

async function main() {
  console.log('=== 开始导入题目数据 ===\n');

  const tasks: Array<{ name: string; fn: () => Promise<number> }> = [
    { name: '数学-人教版', fn: seedMathRenjiaoQuestions },
    { name: '语文-人教版(部编版)', fn: seedChineseRenjiaoQuestions },
    { name: '英语-人教版(PEP)', fn: seedEnglishPepQuestions },
    { name: '物理-人教版', fn: seedPhysicsRenjiaoQuestions },
    { name: '化学-人教版', fn: seedChemistryRenjiaoQuestions },
    { name: '生物-人教版', fn: seedBiologyRenjiaoQuestions },
    { name: '历史-人教版(部编版)', fn: seedHistoryBubianQuestions },
    { name: '地理-人教版', fn: seedGeographyRenjiaoQuestions },
    { name: '道德与法治-人教版(部编版)', fn: seedPoliticsBubianQuestions },
  ];

  let totalQuestions = 0;

  for (const task of tasks) {
    try {
      console.log(`[导入中] ${task.name}...`);
      const count = await task.fn();
      console.log(`  ✓ ${task.name}: ${count} 道题`);
      totalQuestions += count;
    } catch (error) {
      console.error(`  ✗ ${task.name} 导入失败:`, error);
    }
  }

  console.log(`\n=== 题目导入完成 ===`);
  console.log(`  总计: ${totalQuestions} 道题`);
}

main()
  .catch((e) => {
    console.error('种子脚本执行失败:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
