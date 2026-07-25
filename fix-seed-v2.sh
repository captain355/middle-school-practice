#!/bin/bash
# =============================================
# 一键修复 english-pep.ts 并导入全部题目
# 步骤1: 从本地文件通过 base64 传输
# 步骤2: 语法检查
# 步骤3: 导入数据
# 步骤4: 验证结果
# =============================================

set -e

SEED_DIR="/opt/middle-school-practice/practice-app/packages/server/prisma/seed-questions"
SERVER_DIR="/opt/middle-school-practice/practice-app/packages/server"

echo "=== [1/5] 备份当前 english-pep.ts ==="
cp "$SEED_DIR/english-pep.ts" "$SEED_DIR/english-pep.ts.bak" 2>/dev/null || echo "无现有文件需要备份"

echo "=== [2/5] 查看当前第 27 行 ==="
echo "当前第 27 行: '$(sed -n '27p' "$SEED_DIR/english-pep.ts")'"

echo ""
echo "=== [3/5] 语法检查所有 seed 文件 ==="
cd "$SERVER_DIR"
ERRORS=0
ERROR_FILES=""
for f in prisma/seed-questions/*.ts; do
    echo -n "检查 $(basename $f) ... "
    ERR=$(npx esbuild "$f" --bundle --platform=node --format=esm --outfile=/dev/null --external:'*.js' --loglevel=error 2>&1) || true
    if [ -z "$ERR" ]; then
        echo "✓"
    else
        echo "✗"
        echo "  错误: $ERR"
        ERRORS=$((ERRORS + 1))
        ERROR_FILES="$ERROR_FILES $f"
    fi
done

if [ $ERRORS -gt 0 ]; then
    echo ""
    echo "⚠ 发现 $ERRORS 个文件有语法错误: $ERROR_FILES"
    echo ""
    echo "正在尝试自动修复常见语法问题..."

    # 修复1: interface 属性类型注解中的冒号被替换为分号
    for f in $ERROR_FILES; do
        echo "修复 $f ..."
        # 在 interface 定义块中，把属性名后面紧跟的分号改回冒号（但保留行尾分号）
        # 匹配模式: propertyName; -> propertyName:
        sed -i '/interface/,/}/ {
            s/^\(\s*[a-zA-Z_][a-zA-Z0-9_]*\);\(.*\)$/\1:\2/
        }' "$f"
    done

    # 重新检查
    echo ""
    echo "修复后重新检查..."
    ERRORS2=0
    for f in prisma/seed-questions/*.ts; do
        echo -n "检查 $(basename $f) ... "
        ERR=$(npx esbuild "$f" --bundle --platform=node --format=esm --outfile=/dev/null --external:'*.js' --loglevel=error 2>&1) || true
        if [ -z "$ERR" ]; then
            echo "✓"
        else
            echo "✗ 仍有错误: $ERR"
            ERRORS2=$((ERRORS2 + 1))
        fi
    done

    if [ $ERRORS2 -gt 0 ]; then
        echo ""
        echo "✗ 自动修复未能解决所有错误"
        echo "请手动检查上述文件，或从 Git 仓库重新拉取最新代码"
        exit 1
    fi
fi

echo ""
echo "=== [4/5] 导入全部题目数据 ==="
cd "$SERVER_DIR"
npx tsx prisma/seed-questions/index.ts

echo ""
echo "=== [5/5] 验证导入结果 ==="
cd "$SERVER_DIR"
npx tsx -e "
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function check() {
    const count = await prisma.question.count();
    console.log('');
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
echo "=== 全部完成 ==="
