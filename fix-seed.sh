#!/bin/bash
# =============================================
# 一键修复 seed 文件并导入全部题目
# 用法: bash fix-seed.sh
# =============================================

set -e
cd /opt/middle-school-practice/practice-app/packages/server

echo "=== [1/4] 检查 english-pep.ts 第 27 行 ==="
LINE27=$(sed -n '27p' prisma/seed-questions/english-pep.ts)
echo "当前第 27 行内容: $LINE27"

# 如果第 27 行不是正确的 "}"，说明文件损坏
if [ "$LINE27" != "}" ]; then
    echo "⚠ 第 27 行内容异常，尝试修复..."

    # 检查是否有多余的冒号或损坏的类型定义
    # 常见损坏模式：把 interface 的属性名后面的冒号改成分号
    sed -i '15,27s/acceptableAnswers\?;/acceptableAnswers?:/' prisma/seed-questions/english-pep.ts
    sed -i '15,27s/pairs\?;/pairs?:/' prisma/seed-questions/english-pep.ts
    sed -i '15,27s/options\?;/options?:/' prisma/seed-questions/english-pep.ts
    sed -i '15,27s/questionText;/questionText:/' prisma/seed-questions/english-pep.ts
    sed -i '15,27s/answer;/answer:/' prisma/seed-questions/english-pep.ts
    sed -i '15,27s/explanation;/explanation:/' prisma/seed-questions/english-pep.ts
    sed -i '15,27s/difficulty;/difficulty:/' prisma/seed-questions/english-pep.ts
    sed -i '15,27s/questionKey;/questionKey:/' prisma/seed-questions/english-pep.ts
    sed -i '15,27s/type;/type:/' prisma/seed-questions/english-pep.ts

    echo "已尝试修复"
    LINE27=$(sed -n '27p' prisma/seed-questions/english-pep.ts)
    echo "修复后第 27 行: $LINE27"
else
    echo "✓ 第 27 行正常"
fi

echo ""
echo "=== [2/4] 语法检查所有 seed 文件 ==="
cd /opt/middle-school-practice/practice-app/packages/server
ERRORS=0
for f in prisma/seed-questions/*.ts; do
    echo -n "检查 $f ... "
    if npx esbuild "$f" --bundle --platform=node --format=esm --outfile=/dev/null --external:'*.js' --loglevel=error 2>/dev/null; then
        echo "✓"
    else
        echo "✗ 有语法错误"
        ERRORS=$((ERRORS + 1))
    fi
done

if [ $ERRORS -gt 0 ]; then
    echo ""
    echo "⚠ 还有 $ERRORS 个文件有语法错误"
    echo "显示错误详情:"
    for f in prisma/seed-questions/*.ts; do
        npx esbuild "$f" --bundle --platform=node --format=esm --outfile=/dev/null --external:'*.js' --loglevel=warning 2>&1 | head -5 || true
    done
    echo ""
    echo "如果自动修复无法解决，请手动检查上述文件"
    exit 1
fi

echo ""
echo "=== [3/4] 导入全部题目数据 ==="
cd /opt/middle-school-practice/practice-app/packages/server
npx tsx prisma/seed-questions/index.ts

echo ""
echo "=== [4/4] 验证导入结果 ==="
cd /opt/middle-school-practice/practice-app/packages/server
npx tsx -e "
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function check() {
    const count = await prisma.question.count();
    console.log('数据库中题目总数: ' + count);
    const subjects = await prisma.question.groupBy({ by: ['subjectId'] });
    for (const s of subjects) {
        const subj = await prisma.subject.findUnique({ where: { id: s.subjectId } });
        console.log('  ' + (subj?.name || s.subjectId) + ': ' + s._count.question + ' 道');
    }
    await prisma.\$disconnect();
}
check().catch(e => { console.error(e); process.exit(1); });
"

echo ""
echo "=== 修复完成 ==="
