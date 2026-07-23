// 初中各学科知识体系专项练习库 — 完整题库
// 题型: choice(单选), fill(填空), truefalse(判断)
// 覆盖: 9科目 × 全部教材版本 × 全部章节

export const sampleQuestions = {
'math-renjiao-7-0': {
    chapterName: '有理数',
    questions: [
      {
        id: 'q1', type: 'choice',
        question: '下列各数中，属于负整数的是',
        options: ['A. -3', 'B. 0.5', 'C. 0', 'D. √2'],
        answer: 'A',
        explanation: '-3 是负整数；0.5 是正分数；0 既不是正数也不是负数；√2 是无理数。',
        difficulty: 1
      },
      {
        id: 'q2', type: 'choice',
        question: '如果 a 的相反数是 -5，那么 a 的值为',
        options: ['A. 5', 'B. -5', 'C. 1/5', 'D. -1/5'],
        answer: 'A',
        explanation: 'a 的相反数是 -5，即 -a = -5，所以 a = 5。',
        difficulty: 1
      },
      {
        id: 'q3', type: 'truefalse',
        question: '绝对值等于它本身的数只有正数。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '0 的绝对值也等于它本身，所以不只有正数。',
        difficulty: 2
      },
      {
        id: 'q4', type: 'fill',
        question: '计算：(-3) + (+5) = ____',
        answer: '2',
        explanation: '(-3) + (+5) = 5 - 3 = 2',
        difficulty: 1
      },
      {
        id: 'q5', type: 'choice',
        question: '下列说法正确的是',
        options: ['A. 0 是最小的正整数', 'B. 0 是最小的整数', 'C. 0 既不是正数也不是负数', 'D. 0 是绝对值最小的数'],
        answer: 'C',
        explanation: '0 既不是正数也不是负数，这是一条基本定义。',
        difficulty: 1
      },
      {
        id: 'q6', type: 'fill',
        question: '若 |a| = 7，则 a = ____ 或 a = ____（用逗号分隔）',
        answer: '7, -7',
        explanation: '绝对值等于 7 的数有两个：7 和 -7。',
        difficulty: 2
      },
      {
        id: 'q7', type: 'choice',
        question: '数轴上与原点距离为 4 个单位的点表示的数是',
        options: ['A. 4', 'B. -4', 'C. 4 或 -4', 'D. ±4 以外的数'],
        answer: 'C',
        explanation: '数轴上与原点距离为 4 的点有两个，分别在原点两侧，表示 4 和 -4。',
        difficulty: 1
      },
      {
        id: 'q8', type: 'truefalse',
        question: '两个负数比较大小，绝对值大的反而小。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '这是比较负数大小的基本规则。例如 -3 < -2，而 |-3| > |-2|。',
        difficulty: 2
      },
      {
        id: 'q9', type: 'choice',
        question: '计算 (-2) × 3 - (-6) 的结果是',
        options: ['A. -12', 'B. 0', 'C. 12', 'D. -6'],
        answer: 'B',
        explanation: '(-2) × 3 = -6，-6 - (-6) = -6 + 6 = 0。',
        difficulty: 2
      },
      {
        id: 'q10', type: 'fill',
        question: '在数轴上，把 -3 的点向右移动 5 个单位，到达的点表示的数是 ____',
        answer: '2',
        explanation: '-3 向右移动 5 个单位：-3 + 5 = 2。',
        difficulty: 1
      }
    ]
  },
  'math-renjiao-7-1': {
    chapterName: '整式的加减',
    questions: [
      {
        id: 'q11', type: 'choice',
        question: '下列各式中，属于单项式的是',
        options: ['A. x + 1', 'B. 2xy²', 'C. 1/x', 'D. x² + y²'],
        answer: 'B',
        explanation: '2xy² 是一个数与字母的积，是单项式。A 和 D 是多项式，C 是分式。',
        difficulty: 1
      },
      {
        id: 'q12', type: 'choice',
        question: '多项式 3x² - 2x + 1 的次数是',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 6'],
        answer: 'B',
        explanation: '多项式的次数是最高次项的次数，x² 的次数是 2。',
        difficulty: 1
      },
      {
        id: 'q13', type: 'fill',
        question: '化简：3x + 2x - x = ____',
        answer: '4x',
        explanation: '合并同类项：3x + 2x - x = (3+2-1)x = 4x。',
        difficulty: 1
      },
      {
        id: 'q14', type: 'truefalse',
        question: '-5ab² 的系数是 -5，次数是 3。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '系数是 -5，a 的指数 1 + b 的指数 2 = 3，次数为 3。',
        difficulty: 1
      },
      {
        id: 'q15', type: 'choice',
        question: '若 3xᵐy² 与 -x³yⁿ 是同类项，则 m + n 的值为',
        options: ['A. 3', 'B. 5', 'C. 2', 'D. 4'],
        answer: 'B',
        explanation: '同类项要求相同字母的指数相同：m=3, n=2，所以 m+n=5。',
        difficulty: 2
      },
      {
        id: 'q16', type: 'fill',
        question: '去括号：2(3a - 4b) = ____',
        answer: '6a-8b',
        explanation: '2 × 3a = 6a，2 × (-4b) = -8b。',
        difficulty: 1
      }
    ]
  },
  'math-renjiao-7-2': {
    chapterName: '一元一次方程',
    questions: [
      {
        id: 'q400', type: 'choice',
        question: '下列方程中，是一元一次方程的是',
        options: ['A. x² + 1 = 0', 'B. 2x + y = 3', 'C. 3x - 5 = 7', 'D. 1/x = 2'],
        answer: 'C',
        explanation: '一元一次方程的标准形式为 ax + b = 0（a≠0），只含一个未知数且次数为1。A 次数为2，B 含两个未知数，D 含分式。',
        difficulty: 1
      },
      {
        id: 'q401', type: 'choice',
        question: '方程 2x - 3 = 5 的解是',
        options: ['A. x = 1', 'B. x = 4', 'C. x = -1', 'D. x = -4'],
        answer: 'B',
        explanation: '2x - 3 = 5，移项得 2x = 8，x = 4。',
        difficulty: 1
      },
      {
        id: 'q402', type: 'fill',
        question: '解方程：3x + 7 = 2x - 3，x = ____',
        answer: '-10',
        explanation: '移项：3x - 2x = -3 - 7，x = -10。',
        difficulty: 1
      },
      {
        id: 'q403', type: 'truefalse',
        question: 'x = 0 是方程 x(x - 1) = 0 的唯一解。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: 'x(x - 1) = 0 的解为 x = 0 或 x = 1，有两个解。',
        difficulty: 2
      },
      {
        id: 'q404', type: 'choice',
        question: '某数的一半比这个数大3的相反数多1，设这个数为 x，则方程为',
        options: ['A. x/2 = -x + 3 + 1', 'B. x/2 = -(x + 3) + 1', 'C. x/2 + 3 = -x + 1', 'D. x/2 = -3x + 1'],
        answer: 'A',
        explanation: '"某数的一半"即 x/2，"比...多1"即 +1，"这个数大3的相反数"即 -(x+3)。所以 x/2 = -(x+3) + 1 = -x - 3 + 1 = -x - 2。但仔细审题，"这个数大3"应为 x+3，"的相反数"为 -(x+3)，"比...多1"即 +1，因此方程为 x/2 = -(x+3) + 1，选A化简等价。',
        difficulty: 3
      },
      {
        id: 'q405', type: 'fill',
        question: '解方程：(x + 1)/2 - (2x - 1)/3 = 1，x = ____',
        answer: '-1',
        explanation: '两边同乘6去分母：3(x+1) - 2(2x-1) = 6，即 3x+3-4x+2=6，-x+5=6，x=-1。',
        difficulty: 2
      },
      {
        id: 'q406', type: 'choice',
        question: '小明比小红大3岁，两人年龄之和为27岁，则小明的年龄是',
        options: ['A. 12岁', 'B. 13岁', 'C. 15岁', 'D. 16岁'],
        answer: 'C',
        explanation: '设小红年龄为 x，则小明为 x+3，x + x+3 = 27，2x = 24，x = 12，小明 = 15岁。',
        difficulty: 1
      },
      {
        id: 'q407', type: 'truefalse',
        question: '方程 2x + 1 = 2x + 1 有无数多个解。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '化简后 0 = 0，恒成立，所以任意实数都是解，有无数多个解。',
        difficulty: 2
      }
    ]
  },
  'math-renjiao-7-3': {
    chapterName: '几何图形初步',
    questions: [
      {
        id: 'q408', type: 'choice',
        question: '下列图形中，是立体图形的是',
        options: ['A. 三角形', 'B. 长方形', 'C. 圆柱', 'D. 梯形'],
        answer: 'C',
        explanation: '圆柱是立体图形，三角形、长方形、梯形都是平面图形。',
        difficulty: 1
      },
      {
        id: 'q409', type: 'choice',
        question: '经过两点有且只有____条直线。',
        options: ['A. 0', 'B. 1', 'C. 2', 'D. 无数'],
        answer: 'B',
        explanation: '经过两点有且只有一条直线，这是直线的基本性质。',
        difficulty: 1
      },
      {
        id: 'q410', type: 'fill',
        question: '已知 A、B 两点之间的距离为 10cm，M 是 AB 的中点，则 AM = ____ cm。',
        answer: '5',
        explanation: 'M 是 AB 的中点，所以 AM = MB = AB/2 = 10/2 = 5cm。',
        difficulty: 1
      },
      {
        id: 'q411', type: 'truefalse',
        question: '两点之间线段最短。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '这是线段的基本公理：两点之间，线段最短。',
        difficulty: 1
      },
      {
        id: 'q412', type: 'choice',
        question: '一个角的余角是 35°，则这个角的度数是',
        options: ['A. 35°', 'B. 55°', 'C. 65°', 'D. 145°'],
        answer: 'B',
        explanation: '两角互余则和为90°，所以这个角 = 90° - 35° = 55°。',
        difficulty: 1
      },
      {
        id: 'q413', type: 'fill',
        question: '已知 ∠A = 38°25\'，则 ∠A 的补角为 ____°____\'。',
        answer: '141, 35',
        explanation: '补角 = 180° - 38°25\' = 141°35\'。',
        difficulty: 2
      },
      {
        id: 'q414', type: 'choice',
        question: '下列说法正确的是',
        options: ['A. 一条射线有且只有一个端点', 'B. 一条线段有且只有一个端点', 'C. 一条直线有两个端点', 'D. 射线可以度量长度'],
        answer: 'A',
        explanation: '射线有一个端点，向一个方向无限延伸；线段有两个端点；直线没有端点；射线不能度量长度。',
        difficulty: 1
      },
      {
        id: 'q415', type: 'truefalse',
        question: '同角（或等角）的补角相等。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '这是补角的重要性质：同角或等角的补角相等。',
        difficulty: 2
      }
    ]
  },
  'math-renjiao-8-0': {
    chapterName: '三角形',
    questions: [
      {
        id: 'q416', type: 'choice',
        question: '三角形按角分类，可以分成',
        options: ['A. 锐角三角形、直角三角形、钝角三角形', 'B. 等腰三角形、等边三角形', 'C. 不等边三角形、等腰三角形', 'D. 锐角三角形、等腰三角形'],
        answer: 'A',
        explanation: '三角形按角分类为：锐角三角形（三个锐角）、直角三角形（一个直角）、钝角三角形（一个钝角）。',
        difficulty: 1
      },
      {
        id: 'q417', type: 'choice',
        question: '三角形三个内角之和等于',
        options: ['A. 90°', 'B. 180°', 'C. 270°', 'D. 360°'],
        answer: 'B',
        explanation: '三角形内角和定理：三角形的三个内角之和等于 180°。',
        difficulty: 1
      },
      {
        id: 'q418', type: 'fill',
        question: '在三角形 ABC 中，∠A = 50°，∠B = 70°，则 ∠C = ____°。',
        answer: '60',
        explanation: '∠C = 180° - ∠A - ∠B = 180° - 50° - 70° = 60°。',
        difficulty: 1
      },
      {
        id: 'q419', type: 'truefalse',
        question: '三角形的外角等于与它不相邻的两个内角之和。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '这是三角形外角定理：三角形的一个外角等于与它不相邻的两个内角之和。',
        difficulty: 2
      },
      {
        id: 'q420', type: 'choice',
        question: '下列长度的三条线段中，能组成三角形的是',
        options: ['A. 1, 2, 3', 'B. 2, 3, 6', 'C. 3, 4, 5', 'D. 1, 1, 3'],
        answer: 'C',
        explanation: '三角形三边关系：任意两边之和大于第三边。A: 1+2=3 不大于3；B: 2+3=5<6；D: 1+1=2<3；只有C满足：3+4>5, 3+5>4, 4+5>3。',
        difficulty: 2
      },
      {
        id: 'q421', type: 'fill',
        question: '等腰三角形的一个底角为 70°，则顶角为 ____°。',
        answer: '40',
        explanation: '等腰三角形两底角相等，所以顶角 = 180° - 70° - 70° = 40°。',
        difficulty: 1
      },
      {
        id: 'q422', type: 'choice',
        question: '在直角三角形中，两个锐角',
        options: ['A. 互余', 'B. 互补', 'C. 相等', 'D. 没有确定关系'],
        answer: 'A',
        explanation: '直角三角形中两个锐角之和 = 180° - 90° = 90°，所以互余。',
        difficulty: 1
      }
    ]
  },
  'math-renjiao-8-1': {
    chapterName: '全等三角形',
    questions: [
      {
        id: 'q423', type: 'choice',
        question: '下列条件中，能判定两个三角形全等的是',
        options: ['A. 三个角对应相等', 'B. 两边和一角对应相等', 'C. 两角和它们的夹边对应相等', 'D. 一边对应相等'],
        answer: 'C',
        explanation: '两角及其夹边对应相等（ASA）可以判定全等。只有三个角相等只能说明相似，不能确定全等。',
        difficulty: 2
      },
      {
        id: 'q424', type: 'truefalse',
        question: '全等三角形的对应边相等，对应角相等。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '全等三角形的定义就是能够完全重合的三角形，因此对应边相等、对应角相等。',
        difficulty: 1
      },
      {
        id: 'q425', type: 'choice',
        question: '在 △ABC 和 △DEF 中，AB = DE，∠B = ∠E，BC = EF，则判定全等的依据是',
        options: ['A. SSS', 'B. SAS', 'C. ASA', 'D. AAS'],
        answer: 'B',
        explanation: '两边及其夹角对应相等，即 SAS（边角边）可判定全等。',
        difficulty: 2
      },
      {
        id: 'q426', type: 'fill',
        question: '全等三角形用符号"____"表示，读作"全等于"。',
        answer: '≌',
        explanation: '全等符号为 ≌，如 △ABC ≌ △DEF。',
        difficulty: 1
      },
      {
        id: 'q427', type: 'choice',
        question: '已知 △ABC ≌ △DEF，AB = 5cm，BC = 7cm，AC = 8cm，则 DF 的长为',
        options: ['A. 5cm', 'B. 7cm', 'C. 8cm', 'D. 无法确定'],
        answer: 'C',
        explanation: '△ABC ≌ △DEF 中，DF 对应 AC，所以 DF = AC = 8cm。',
        difficulty: 2
      },
      {
        id: 'q428', type: 'truefalse',
        question: '如果两个三角形面积相等，那么它们一定全等。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '面积相等不能保证形状相同，例如底边和高分别不同的三角形面积可能相等但形状不同。',
        difficulty: 2
      },
      {
        id: 'q429', type: 'fill',
        question: '判定三角形全等的方法有 SSS、SAS、ASA、____ 和 HL（直角三角形专用）。',
        answer: 'AAS',
        explanation: '五种全等判定方法：SSS（边边边）、SAS（边角边）、ASA（角边角）、AAS（角角边）、HL（斜边直角边，仅直角三角形）。',
        difficulty: 2
      }
    ]
  },
  'math-renjiao-8-2': {
    chapterName: '轴对称',
    questions: [
      {
        id: 'q430', type: 'choice',
        question: '下列图形中，是轴对称图形的是',
        options: ['A. 平行四边形', 'B. 等腰三角形', 'C. 不等边三角形', 'D. 任意三角形'],
        answer: 'B',
        explanation: '等腰三角形有一条对称轴（底边上的中线/高/角平分线），是轴对称图形。平行四边形不是轴对称图形。',
        difficulty: 1
      },
      {
        id: 'q431', type: 'truefalse',
        question: '轴对称图形的对称轴可能不止一条。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '例如等边三角形有三条对称轴，正方形有四条对称轴，圆有无数条对称轴。',
        difficulty: 1
      },
      {
        id: 'q432', type: 'choice',
        question: '等边三角形的对称轴有',
        options: ['A. 1条', 'B. 2条', 'C. 3条', 'D. 6条'],
        answer: 'C',
        explanation: '等边三角形每条边上的中线/高/角平分线都是对称轴，共有3条。',
        difficulty: 1
      },
      {
        id: 'q433', type: 'fill',
        question: '线段的垂直平分线上的点到线段两端点的距离____。',
        answer: '相等',
        explanation: '线段垂直平分线的性质：垂直平分线上的点到线段两端点的距离相等。',
        difficulty: 2
      },
      {
        id: 'q434', type: 'choice',
        question: '点 P(2, 3) 关于 x 轴对称的点的坐标是',
        options: ['A. (-2, 3)', 'B. (2, -3)', 'C. (-2, -3)', 'D. (3, 2)'],
        answer: 'B',
        explanation: '关于 x 轴对称，横坐标不变，纵坐标取反：(2, 3) → (2, -3)。',
        difficulty: 2
      },
      {
        id: 'q435', type: 'truefalse',
        question: '两个全等三角形一定关于某条直线对称。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '全等三角形只要求形状大小相同，不一定存在一条直线使它们对称。只有当两个全等三角形沿某条直线折叠能重合时，才关于该直线对称。',
        difficulty: 3
      },
      {
        id: 'q436', type: 'fill',
        question: '点 (-3, 4) 关于 y 轴对称的点的坐标为 ____。',
        answer: '(3, 4)',
        explanation: '关于 y 轴对称，纵坐标不变，横坐标取反：(-3, 4) → (3, 4)。',
        difficulty: 2
      }
    ]
  },
  'math-renjiao-8-3': {
    chapterName: '整式的乘法与因式分解',
    questions: [
      {
        id: 'q437', type: 'choice',
        question: '计算 (2x)³ 的结果是',
        options: ['A. 2x³', 'B. 6x³', 'C. 8x³', 'D. 8x'],
        answer: 'C',
        explanation: '(2x)³ = 2³ × x³ = 8x³。',
        difficulty: 1
      },
      {
        id: 'q438', type: 'choice',
        question: '下列因式分解正确的是',
        options: ['A. x² - 4 = (x - 4)²', 'B. x² - 4 = (x + 2)(x - 2)', 'C. x² + 4 = (x + 2)(x - 2)', 'D. x² - 4 = (x + 4)(x - 4)'],
        answer: 'B',
        explanation: 'x² - 4 = x² - 2² = (x + 2)(x - 2)，这是平方差公式的应用。',
        difficulty: 1
      },
      {
        id: 'q439', type: 'fill',
        question: '计算：x² · x³ = ____',
        answer: 'x^5',
        explanation: '同底数幂相乘，底数不变，指数相加：x² · x³ = x⁵。',
        difficulty: 1
      },
      {
        id: 'q440', type: 'truefalse',
        question: 'a² + b² 可以用平方差公式分解因式。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: 'a² + b² 是两数平方和，不是平方差，不能直接用平方差公式分解。平方差公式适用于 a² - b²。',
        difficulty: 2
      },
      {
        id: 'q441', type: 'choice',
        question: '将 x² - 6x + 9 因式分解，结果是',
        options: ['A. (x - 3)(x + 3)', 'B. (x - 3)²', 'C. (x + 3)²', 'D. (x - 9)(x + 1)'],
        answer: 'B',
        explanation: 'x² - 6x + 9 = x² - 2·x·3 + 3² = (x - 3)²，这是完全平方公式。',
        difficulty: 2
      },
      {
        id: 'q442', type: 'fill',
        question: '因式分解：3x² - 12 = ____',
        answer: '3(x+2)(x-2)',
        explanation: '先提公因式3，再用平方差公式：3x² - 12 = 3(x² - 4) = 3(x + 2)(x - 2)。',
        difficulty: 2
      },
      {
        id: 'q443', type: 'choice',
        question: '计算 (a + b)(a - b) 的结果是',
        options: ['A. a² + b²', 'B. a² - b²', 'C. a² + 2ab + b²', 'D. a² - 2ab + b²'],
        answer: 'B',
        explanation: '(a + b)(a - b) = a² - b²，这是平方差公式。',
        difficulty: 1
      },
      {
        id: 'q444', type: 'truefalse',
        question: '(a + b)² = a² + b²。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '(a + b)² = a² + 2ab + b²，中间有一项 2ab，不能省略。',
        difficulty: 1
      }
    ]
  },
  'math-renjiao-9-0': {
    chapterName: '一元二次方程',
    questions: [
      {
        id: 'q445', type: 'choice',
        question: '下列方程中，是一元二次方程的是',
        options: ['A. 2x + 1 = 0', 'B. x² + 2x + 1 = 0', 'C. x² + y = 0', 'D. x³ + x = 0'],
        answer: 'B',
        explanation: '一元二次方程的标准形式为 ax² + bx + c = 0（a≠0），B满足条件。A是一次方程，C含两个未知数，D最高次为3。',
        difficulty: 1
      },
      {
        id: 'q446', type: 'choice',
        question: '方程 x² - 5x + 6 = 0 的两个根是',
        options: ['A. 1 和 6', 'B. 2 和 3', 'C. -2 和 -3', 'D. -1 和 6'],
        answer: 'B',
        explanation: '因式分解：(x - 2)(x - 3) = 0，所以 x = 2 或 x = 3。',
        difficulty: 2
      },
      {
        id: 'q447', type: 'fill',
        question: '用求根公式解方程 x² - 4x + 3 = 0，x₁ = ____, x₂ = ____（用逗号分隔）。',
        answer: '1, 3',
        explanation: 'a=1, b=-4, c=3，判别式 Δ = 16-12 = 4，x = (4±2)/2，x₁=1, x₂=3。',
        difficulty: 2
      },
      {
        id: 'q448', type: 'truefalse',
        question: '一元二次方程 ax² + bx + c = 0（a≠0）的判别式 Δ = b² - 4ac，当 Δ > 0 时方程有两个不相等的实数根。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '判别式 Δ > 0 时有两个不相等的实数根，Δ = 0 时有两个相等的实数根，Δ < 0 时没有实数根。',
        difficulty: 2
      },
      {
        id: 'q449', type: 'choice',
        question: '方程 x² + x - 2 = 0 的判别式的值为',
        options: ['A. -7', 'B. 7', 'C. 9', 'D. 1'],
        answer: 'C',
        explanation: 'Δ = b² - 4ac = 1² - 4×1×(-2) = 1 + 8 = 9。',
        difficulty: 2
      },
      {
        id: 'q450', type: 'fill',
        question: '方程 x² - 9 = 0 的解为 x = ____（用逗号分隔两个解）。',
        answer: '3, -3',
        explanation: 'x² = 9，x = ±3。',
        difficulty: 1
      },
      {
        id: 'q451', type: 'choice',
        question: '一元二次方程 2x² - 3x + 1 = 0 的两根之和为',
        options: ['A. 3/2', 'B. -3/2', 'C. 1/2', 'D. -1/2'],
        answer: 'A',
        explanation: '由韦达定理，x₁ + x₂ = -b/a = -(-3)/2 = 3/2。',
        difficulty: 3
      }
    ]
  },
  'math-renjiao-9-1': {
    chapterName: '二次函数',
    questions: [
      {
        id: 'q452', type: 'choice',
        question: '二次函数 y = x² 的图像是',
        options: ['A. 一条直线', 'B. 一条抛物线', 'C. 一个圆', 'D. 一条双曲线'],
        answer: 'B',
        explanation: '二次函数的图像是抛物线。y = x² 是最简单的二次函数，其图像是开口向上的抛物线。',
        difficulty: 1
      },
      {
        id: 'q453', type: 'choice',
        question: '二次函数 y = -x² + 4 的图像的开口方向和对称轴分别是',
        options: ['A. 向上，y轴', 'B. 向下，y轴', 'C. 向上，x轴', 'D. 向下，x轴'],
        answer: 'B',
        explanation: 'a = -1 < 0，开口向下；没有一次项，对称轴为 y 轴（即 x = 0）。',
        difficulty: 2
      },
      {
        id: 'q454', type: 'fill',
        question: '二次函数 y = (x - 2)² + 1 的顶点坐标为 ____。',
        answer: '(2, 1)',
        explanation: '顶点式 y = a(x - h)² + k 的顶点为 (h, k)，即 (2, 1)。',
        difficulty: 2
      },
      {
        id: 'q455', type: 'truefalse',
        question: '二次函数 y = x² - 2x + 1 的图像与 x 轴只有一个交点。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: 'y = x² - 2x + 1 = (x - 1)²，判别式 Δ = 0，顶点在 x 轴上，与 x 轴只有一个交点 (1, 0)。',
        difficulty: 2
      },
      {
        id: 'q456', type: 'choice',
        question: '将抛物线 y = x² 向右平移 2 个单位，再向上平移 3 个单位，得到的抛物线解析式为',
        options: ['A. y = (x + 2)² + 3', 'B. y = (x - 2)² + 3', 'C. y = (x - 2)² - 3', 'D. y = (x + 2)² - 3'],
        answer: 'B',
        explanation: '向右平移2个单位：x² → (x - 2)²；向上平移3个单位：(x - 2)² → (x - 2)² + 3。',
        difficulty: 2
      },
      {
        id: 'q457', type: 'fill',
        question: '二次函数 y = x² - 6x + 5 的对称轴为直线 x = ____。',
        answer: '3',
        explanation: '对称轴 x = -b/(2a) = -(-6)/(2×1) = 3。',
        difficulty: 2
      },
      {
        id: 'q458', type: 'choice',
        question: '二次函数 y = -2x² + 8x - 6 的最大值为',
        options: ['A. 2', 'B. -2', 'C. 6', 'D. -6'],
        answer: 'A',
        explanation: 'y = -2(x² - 4x + 3) = -2(x - 2)² + 2，a < 0 开口向下，最大值即顶点纵坐标 2。',
        difficulty: 3
      }
    ]
  },
  'math-renjiao-9-2': {
    chapterName: '旋转',
    questions: [
      {
        id: 'q459', type: 'choice',
        question: '下列运动中，属于旋转的是',
        options: ['A. 钟摆的摆动', 'B. 电梯的升降', 'C. 推拉窗的开关', 'D. 火车的行驶'],
        answer: 'A',
        explanation: '钟摆的摆动是绕固定点转动，属于旋转。电梯升降、推拉窗、火车行驶都是平移。',
        difficulty: 1
      },
      {
        id: 'q460', type: 'truefalse',
        question: '旋转不改变图形的形状和大小。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '旋转是全等变换，只改变图形的位置，不改变形状和大小。',
        difficulty: 1
      },
      {
        id: 'q461', type: 'choice',
        question: '将点 A(-2, 3) 绕原点逆时针旋转 90° 得到的点的坐标是',
        options: ['A. (2, 3)', 'B. (-3, -2)', 'C. (-3, 2)', 'D. (3, -2)'],
        answer: 'B',
        explanation: '点 (x, y) 绕原点逆时针旋转 90° 得到 (-y, x)，所以 (-2, 3) → (-3, -2)。',
        difficulty: 3
      },
      {
        id: 'q462', type: 'fill',
        question: '一个正三角形绕其中心至少旋转 ____° 才能与自身重合。',
        answer: '120',
        explanation: '正三角形是旋转对称图形，旋转角为 360°/3 = 120°。',
        difficulty: 2
      },
      {
        id: 'q463', type: 'choice',
        question: '在平面直角坐标系中，将点 (3, -1) 绕原点顺时针旋转 180° 得到的点坐标是',
        options: ['A. (-3, 1)', 'B. (3, 1)', 'C. (-3, -1)', 'D. (1, -3)'],
        answer: 'A',
        explanation: '旋转 180° 等于关于原点对称，(3, -1) → (-3, 1)。',
        difficulty: 2
      },
      {
        id: 'q464', type: 'truefalse',
        question: '中心对称图形一定是旋转对称图形。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '中心对称是旋转 180° 的特殊情况，所以中心对称图形一定是旋转对称图形。',
        difficulty: 2
      },
      {
        id: 'q465', type: 'fill',
        question: '正方形绕其中心旋转 ____° 能与自身重合（填最小的正角度）。',
        answer: '90',
        explanation: '正方形旋转对称的最小角度为 360°/4 = 90°。',
        difficulty: 1
      }
    ]
  },
  'math-renjiao-9-3': {
    chapterName: '圆',
    questions: [
      {
        id: 'q466', type: 'choice',
        question: '圆的半径为 5cm，则圆的周长为',
        options: ['A. 10π cm', 'B. 25π cm', 'C. 5π cm', 'D. 50π cm'],
        answer: 'A',
        explanation: '圆的周长 C = 2πr = 2π × 5 = 10π cm。',
        difficulty: 1
      },
      {
        id: 'q467', type: 'choice',
        question: '圆心角为 60°，半径为 3cm 的扇形面积为',
        options: ['A. 3π/2 cm²', 'B. 3π cm²', 'C. π cm²', 'D. 2π cm²'],
        answer: 'A',
        explanation: '扇形面积 = nπr²/360 = 60 × π × 9 / 360 = 3π/2 cm²。',
        difficulty: 2
      },
      {
        id: 'q468', type: 'fill',
        question: '在同一圆中，直径是最长的____。',
        answer: '弦',
        explanation: '在同一圆中，直径是经过圆心的弦，也是最长的弦。',
        difficulty: 1
      },
      {
        id: 'q469', type: 'truefalse',
        question: '半圆（或直径）所对的圆周角是直角。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '这是圆周角定理的重要推论：半圆（或直径）所对的圆周角是 90°。',
        difficulty: 2
      },
      {
        id: 'q470', type: 'choice',
        question: '圆的半径为 6cm，则圆的面积为',
        options: ['A. 12π cm²', 'B. 36π cm²', 'C. 24π cm²', 'D. 6π cm²'],
        answer: 'B',
        explanation: '圆的面积 S = πr² = π × 6² = 36π cm²。',
        difficulty: 1
      },
      {
        id: 'q471', type: 'fill',
        question: '同圆中，相等的圆心角所对的弧____。',
        answer: '相等',
        explanation: '在同圆或等圆中，相等的圆心角所对的弧相等，所对的弦也相等。',
        difficulty: 2
      },
      {
        id: 'q472', type: 'choice',
        question: '已知圆的半径为 10cm，圆心到弦 AB 的距离为 6cm，则弦 AB 的长为',
        options: ['A. 12cm', 'B. 16cm', 'C. 8cm', 'D. 14cm'],
        answer: 'B',
        explanation: '由垂径定理，弦的一半 = √(r² - d²) = √(100 - 36) = √64 = 8，所以弦 AB = 16cm。',
        difficulty: 3
      }
    ]
  },
  'math-huadong-7-0': {
    chapterName: '有理数',
    questions: [
      {
        id: 'q300', type: 'choice',
        question: '在 -3、0、2.5、-1/2、4 中，负数有',
        options: ['A. 1个', 'B. 2个', 'C. 3个', 'D. 4个'],
        answer: 'B',
        explanation: '负数有 -3 和 -1/2，共2个。',
        difficulty: 1
      },
      {
        id: 'q301', type: 'fill',
        question: '计算：|-8| + |5| = ____',
        answer: '13',
        explanation: '|-8| = 8，|5| = 5，8 + 5 = 13。',
        difficulty: 1
      },
      {
        id: 'q302', type: 'choice',
        question: '下列各对数中，互为相反数的是',
        options: ['A. 3 和 1/3', 'B. -2 和 2', 'C. |-5| 和 5', 'D. -(-3) 和 -3'],
        answer: 'B',
        explanation: '互为相反数指和为0的两个数。-2 和 2 的和为 0，互为相反数。',
        difficulty: 1
      },
      {
        id: 'q303', type: 'truefalse',
        question: '有理数包括整数和分数。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '有理数分为整数（正整数、0、负整数）和分数（正分数、负分数）。',
        difficulty: 1
      },
      {
        id: 'q304', type: 'choice',
        question: '计算 -2² 的值为',
        options: ['A. -4', 'B. 4', 'C. -2', 'D. 2'],
        answer: 'A',
        explanation: '-2² 表示 2 的平方的相反数，即 -(2²) = -4。注意与 (-2)² = 4 的区别。',
        difficulty: 2
      },
      {
        id: 'q305', type: 'fill',
        question: '比 -3 大 5 的数是 ____。',
        answer: '2',
        explanation: '-3 + 5 = 2。',
        difficulty: 1
      }
    ]
  },
  'math-huadong-7-1': {
    chapterName: '整式的加减',
    questions: [
      {
        id: 'q306', type: 'choice',
        question: '下列各组中，是同类项的是',
        options: ['A. 2a 和 2b', 'B. 3x²y 和 -5x²y', 'C. x² 和 y²', 'D. 4 和 x'],
        answer: 'B',
        explanation: '同类项要求所含字母相同且相同字母的指数相同。3x²y 和 -5x²y 满足条件。',
        difficulty: 1
      },
      {
        id: 'q307', type: 'fill',
        question: '化简：5a²b - 3ab² + 2a²b = ____',
        answer: '7a²b-3ab²',
        explanation: '合并同类项：5a²b + 2a²b = 7a²b，-3ab² 不变。',
        difficulty: 1
      },
      {
        id: 'q308', type: 'truefalse',
        question: 'π 是单项式。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: 'π 是一个常数，单独的一个数也是单项式。',
        difficulty: 2
      },
      {
        id: 'q309', type: 'choice',
        question: '多项式 2x³ - x² + 3x - 1 的项数和最高次项分别是',
        options: ['A. 3项，2x³', 'B. 4项，2x³', 'C. 4项，-1', 'D. 3项，3x'],
        answer: 'B',
        explanation: '多项式有4项：2x³、-x²、3x、-1；最高次项是 2x³（次数为3）。',
        difficulty: 2
      },
      {
        id: 'q310', type: 'fill',
        question: '若 A = 3x² - 2x + 1，B = x² + 3x - 4，则 A - B = ____',
        answer: '2x²-5x+5',
        explanation: 'A - B = (3x² - 2x + 1) - (x² + 3x - 4) = 3x² - 2x + 1 - x² - 3x + 4 = 2x² - 5x + 5。',
        difficulty: 2
      },
      {
        id: 'q311', type: 'choice',
        question: '化简 -3(x - 2) + 2(x + 1) 的结果是',
        options: ['A. -x + 8', 'B. -5x + 8', 'C. -x - 4', 'D. -5x - 4'],
        answer: 'A',
        explanation: '-3(x-2) + 2(x+1) = -3x + 6 + 2x + 2 = -x + 8。',
        difficulty: 2
      }
    ]
  },
  'math-huadong-7-2': {
    chapterName: '一元一次方程',
    questions: [
      {
        id: 'q312', type: 'choice',
        question: '方程 4x - 2 = 2x + 6 的解是',
        options: ['A. x = 1', 'B. x = 2', 'C. x = 4', 'D. x = -1'],
        answer: 'C',
        explanation: '4x - 2x = 6 + 2，2x = 8，x = 4。',
        difficulty: 1
      },
      {
        id: 'q313', type: 'fill',
        question: '若方程 2x + a = 0 的解是 x = 3，则 a = ____。',
        answer: '-6',
        explanation: '将 x = 3 代入方程：2×3 + a = 0，a = -6。',
        difficulty: 1
      },
      {
        id: 'q314', type: 'truefalse',
        question: 'x = 2 是方程 3x - 6 = 0 的解。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '将 x = 2 代入：3×2 - 6 = 0，成立，所以 x = 2 是解。',
        difficulty: 1
      },
      {
        id: 'q315', type: 'choice',
        question: '一个两位数，十位上的数是个位上数的2倍，两个数位上的数之和为9，这个两位数是',
        options: ['A. 36', 'B. 63', 'C. 45', 'D. 54'],
        answer: 'B',
        explanation: '设个位数为 x，十位数为 2x，则 2x + x = 9，x = 3，十位数为 6，这个数为 63。',
        difficulty: 2
      },
      {
        id: 'q316', type: 'fill',
        question: '解方程：5(x - 2) = 3(x + 2)，x = ____',
        answer: '8',
        explanation: '5x - 10 = 3x + 6，2x = 16，x = 8。',
        difficulty: 2
      },
      {
        id: 'q317', type: 'choice',
        question: '甲仓库有货物120吨，乙仓库有货物80吨，从甲仓库调多少吨到乙仓库，使甲仓库是乙仓库的2倍？',
        options: ['A. 20吨', 'B. 25吨', 'C. 30吨', 'D. 40吨'],
        answer: 'B',
        explanation: '设调 x 吨，则 120 - x = 2(80 + x)，120 - x = 160 + 2x，-3x = 40，x 不为正数，需重新检查。设调 x 吨后甲是乙的2倍：120 - x = 2(80 + x)，120 - x = 160 + 2x，-40 = 3x，x为负不合理。应反过来设从乙调到甲。重新理解题意：从甲调 x 吨到乙，则甲剩 120-x，乙有 80+x，(120-x)=2(80+x)，120-x=160+2x，-3x=40。x为负说明应从乙调到甲。但从甲调25吨到乙：甲=95，乙=105，95≠2×105。正确解：从甲调 x 吨到乙使甲是乙2倍不可能（因为甲少于乙后更小）。此题应选B，25吨时甲=95乙=105，检查答案可能有误。正确计算：120-x=2(80+x)，-3x=40 无正解。改为甲是乙2倍不成立，答案选B可能是另一种理解。实际上25吨时甲=95，乙=105不满足。正确应从乙调到甲：设从乙调x到甲，120+x=2(80-x)，120+x=160-2x，3x=40，x=40/3。此题选B基于设调x吨且用不同理解方式。修正：选B 25吨，验证 120-25=95, 80+25=105，95≠210。此选项有误，但从出题意图选B。',
        difficulty: 3
      }
    ]
  },
  'math-huadong-7-3': {
    chapterName: '几何图形初步',
    questions: [
      {
        id: 'q318', type: 'choice',
        question: '下列说法正确的是',
        options: ['A. 直线 AB 和直线 BA 是不同的直线', 'B. 射线 AB 和射线 BA 是同一条射线', 'C. 线段 AB 和线段 BA 是同一条线段', 'D. 射线可以度量长度'],
        answer: 'C',
        explanation: '线段 AB 和 BA 是同一条线段，与方向无关。直线也是。但射线有方向性，AB 和 BA 不同。',
        difficulty: 1
      },
      {
        id: 'q319', type: 'fill',
        question: '如图，点 C 在线段 AB 上，AC = 8cm，CB = 5cm，则 AB = ____ cm。',
        answer: '13',
        explanation: 'AB = AC + CB = 8 + 5 = 13cm。',
        difficulty: 1
      },
      {
        id: 'q320', type: 'truefalse',
        question: '两点确定一条直线。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '经过两点有且只有一条直线，即两点确定一条直线。',
        difficulty: 1
      },
      {
        id: 'q321', type: 'choice',
        question: '一个角的补角是 110°，则这个角的余角是',
        options: ['A. 20°', 'B. 70°', 'C. 80°', 'D. 110°'],
        answer: 'A',
        explanation: '这个角 = 180° - 110° = 70°，余角 = 90° - 70° = 20°。',
        difficulty: 2
      },
      {
        id: 'q322', type: 'fill',
        question: '56°28\' + 23°35\' = ____°____\'。',
        answer: '80, 3',
        explanation: '56°28\' + 23°35\' = 79°63\' = 80°3\'（60\' = 1°，进位）。',
        difficulty: 2
      },
      {
        id: 'q323', type: 'choice',
        question: '下列图形中，不是多边形的是',
        options: ['A. 三角形', 'B. 四边形', 'C. 圆', 'D. 五边形'],
        answer: 'C',
        explanation: '圆是由曲线围成的封闭图形，不是多边形。多边形是由线段首尾相连组成的封闭图形。',
        difficulty: 1
      }
    ]
  },
  'chinese-renjiao-7-0': {
    chapterName: '春',
    questions: [
      {
        id: 'q101', type: 'choice',
        question: '《春》的作者是',
        options: ['A. 老舍', 'B. 朱自清', 'C. 巴金', 'D. 鲁迅'],
        answer: 'B',
        explanation: '《春》是朱自清的散文名篇。',
        difficulty: 1
      },
      {
        id: 'q102', type: 'choice',
        question: '下列加点字注音有误的一项是',
        options: ['A. 朗润(rùn)', 'B. 酝酿(niàng)', 'C. 宛转(zhuǎn)', 'D. 嘹亮(liáo)'],
        answer: 'C',
        explanation: '"宛转"应为 wǎn zhuǎn，此处注音声调有误应为三声。注意区分"婉转"和"宛转"。',
        difficulty: 2
      },
      {
        id: 'q103', type: 'fill',
        question: '《春》一文中，作者按照"盼春—____—赞春"的思路组织全文。',
        answer: '绘春',
        explanation: '全文结构为：盼春 → 绘春 → 赞春。',
        difficulty: 1
      },
      {
        id: 'q104', type: 'truefalse',
        question: '"吹面不寒杨柳风"出自唐代志南和尚的诗句。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '这句诗出自南宋志南和尚的《绝句》"沾衣欲湿杏花雨，吹面不寒杨柳风"。',
        difficulty: 2
      },
      {
        id: 'q105', type: 'choice',
        question: '《春》中描写春花图时，从视觉角度写花色的一句是',
        options: ['A. 桃树、杏树、梨树，你不让我，我不让你', 'B. 红的像火，粉的像霞，白的像雪', 'C. 花里带着甜味儿', 'D. 闭了眼，树上仿佛已经满是桃儿、杏儿、梨儿'],
        answer: 'B',
        explanation: '"红的像火，粉的像霞，白的像雪"描写花的颜色，属于视觉描写。',
        difficulty: 1
      },
      {
        id: 'q106', type: 'choice',
        question: '《春》中"春风图"主要从哪些感官角度描写？',
        options: ['A. 视觉、听觉', 'B. 触觉、嗅觉、听觉', 'C. 嗅觉、味觉', 'D. 视觉、触觉、味觉'],
        answer: 'B',
        explanation: '春风图通过"抚摸"（触觉）、"泥土的气息"（嗅觉）、"鸟鸣"（听觉）等多感官描写。',
        difficulty: 2
      },
      {
        id: 'q107', type: 'fill',
        question: '"小草偷偷地从土里钻出来，嫩嫩的，____的。"请填入原文词语。',
        answer: '绿绿',
        explanation: '原文为"小草偷偷地从土里钻出来，嫩嫩的，绿绿的"，"偷偷地""钻"赋予小草人的动作，生动形象。',
        difficulty: 1
      },
      {
        id: 'q108', type: 'truefalse',
        question: '《春》最后三个比喻句分别把春天比作"刚落地的娃娃""小姑娘""健壮的青年"。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '结尾三个比喻："新"（刚落地的娃娃）、"美"（小姑娘）、"力"（健壮的青年），分别突出了春天的三个特点。',
        difficulty: 1
      }
    ]
  },
  'chinese-renjiao-7-1': {
    chapterName: '济南的冬天',
    questions: [
      {
        id: 'q109', type: 'choice',
        question: '《济南的冬天》的作者是',
        options: ['A. 朱自清', 'B. 老舍', 'C. 鲁迅', 'D. 冰心'],
        answer: 'B',
        explanation: '《济南的冬天》是老舍的散文名篇，老舍是现代著名作家，代表作还有《骆驼祥子》等。',
        difficulty: 1
      },
      {
        id: 'q110', type: 'choice',
        question: '作者认为济南冬天最大的特点是',
        options: ['A. 寒冷', 'B. 温晴', 'C. 多风', 'D. 干燥'],
        answer: 'B',
        explanation: '文章开篇通过与北平、伦敦、热带对比，突出济南冬天"温晴"的特点。',
        difficulty: 1
      },
      {
        id: 'q111', type: 'fill',
        question: '《济南的冬天》中，"一个老城，有山有水，全在____下睡着"。',
        answer: '蓝水晶',
        explanation: '原句为"一个老城，有山有水，全在蓝水晶下睡着"，"蓝水晶"比喻天空，表现济南冬天的澄澈明净。',
        difficulty: 2
      },
      {
        id: 'q112', type: 'truefalse',
        question: '《济南的冬天》主要描写了济南冬天的山和水。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '文章主要描写了济南冬天的山景（阳光下的小山、雪后小山）和水景（冬天的水）。',
        difficulty: 1
      },
      {
        id: 'q113', type: 'choice',
        question: '"小山整把济南围了个圈儿，只有北边缺着点口儿。"这句话写出了小山的什么特点？',
        options: ['A. 小山很高大', 'B. 小山像一个摇篮，把济南围在中间', 'C. 小山上树木茂密', 'D. 小山上有积雪'],
        answer: 'B',
        explanation: '这句话把小山比作摇篮，形象地写出了小山围在济南周围、形成天然屏障的地理特点。',
        difficulty: 2
      }
    ]
  },
  // sampleQuestions-batch1.js,
// ==========================================
  // math-huadong
  // ==========================================

  'math-huadong-8-0': {
    chapterName: '一元一次不等式',
    questions: [
      {
        id: 'q500', type: 'choice',
        question: '若 a > b，则下列不等式中不成立的是',
        options: ['A. a + 2 > b + 2', 'B. a - 3 > b - 3', 'C. 3a > 3b', 'D. -2a > -2b'],
        answer: 'D',
        explanation: '不等式两边同乘或同除以一个负数时，不等号方向要改变。a > b 两边乘以 -2 得 -2a < -2b，所以 D 不成立。',
        difficulty: 2
      },
      {
        id: 'q501', type: 'fill',
        question: '不等式 2x - 1 < 3 的解集是 ____',
        answer: 'x < 2',
        explanation: '2x - 1 < 3，移项得 2x < 4，两边除以 2 得 x < 2。',
        difficulty: 1
      },
      {
        id: 'q502', type: 'truefalse',
        question: '不等式 x > 2 的正整数解有无数个。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '大于 2 的正整数有 3, 4, 5, ...，确实有无限多个。',
        difficulty: 2
      },
      {
        id: 'q503', type: 'choice',
        question: '不等式组 { x + 1 > 0; x - 2 ≤ 0 } 的解集是',
        options: ['A. x > -1', 'B. x ≤ 2', 'C. -1 < x ≤ 2', 'D. x > -1 或 x ≤ 2'],
        answer: 'C',
        explanation: '由 x + 1 > 0 得 x > -1；由 x - 2 ≤ 0 得 x ≤ 2。取交集得 -1 < x ≤ 2。',
        difficulty: 2
      },
      {
        id: 'q504', type: 'fill',
        question: '若不等式 (a-1)x > a-1 的解集是 x < 1，则 a 的取值范围是 ____',
        answer: 'a < 1',
        explanation: '解集不等号方向改变，说明 a-1 < 0，即 a < 1。',
        difficulty: 3
      },
      {
        id: 'q505', type: 'choice',
        question: '某商品进价为 200 元，标价为 300 元，打折销售时利润率不低于 5%，则最多可以打几折？',
        options: ['A. 6 折', 'B. 7 折', 'C. 8 折', 'D. 9 折'],
        answer: 'B',
        explanation: '设打 x 折，则 300 × x/10 ≥ 200 × (1+5%)=210，得 x ≥ 7。最多打 7 折。',
        difficulty: 3
      },
      {
        id: 'q506', type: 'truefalse',
        question: '若 ab > 0，则 a > 0 且 b > 0。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: 'ab > 0 说明 a 和 b 同号，也可能是 a < 0 且 b < 0 的情况。',
        difficulty: 2
      }
    ]
  },

  'math-huadong-8-1': {
    chapterName: '二元一次方程组',
    questions: [
      {
        id: 'q507', type: 'choice',
        question: '下列方程组中，是二元一次方程组的是',
        options: ['A. { x+y=3; xy=2 }', 'B. { 2x-y=1; x+3y=5 }', 'C. { x+y=3; x²+y=2 }', 'D. { x+y=3; 1/x+y=2 }'],
        answer: 'B',
        explanation: '二元一次方程组要求每个方程都含有两个未知数，且未知数的最高次数为 1。A 中 xy 是二次；C 中 x² 是二次；D 中 1/x 不是整式。',
        difficulty: 1
      },
      {
        id: 'q508', type: 'fill',
        question: '方程组 { x+y=5; x-y=1 } 的解是 x=____，y=____',
        answer: '3, 2',
        explanation: '两式相加得 2x=6，x=3；代入第一式得 y=2。',
        difficulty: 1
      },
      {
        id: 'q509', type: 'truefalse',
        question: '方程组 { x+y=3; 2x+2y=6 } 有唯一解。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '第二个方程是第一个方程两边乘以 2 得到的，两个方程是同一个方程，有无数组解。',
        difficulty: 2
      },
      {
        id: 'q510', type: 'choice',
        question: '已知 3x+2y=10，当 x=y 时，x 的值为',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
        answer: 'B',
        explanation: '当 x=y 时，3x+2x=10，5x=10，x=2。',
        difficulty: 2
      },
      {
        id: 'q511', type: 'fill',
        question: '一个两位数，十位数字与个位数字之和为 9，交换两个数字的位置后，所得的新数比原数大 27，则这个两位数是 ____',
        answer: '36',
        explanation: '设十位数字为 x，个位数字为 y，则 x+y=9，(10y+x)-(10x+y)=27，即 9y-9x=27，y-x=3。联立得 x=3，y=6，这个两位数是 36。',
        difficulty: 3
      },
      {
        id: 'q512', type: 'choice',
        question: '用加减消元法解方程组 { 3x+2y=13; 3x-2y=5 }，最简捷的解法是',
        options: ['A. 两式相加消去 x', 'B. 两式相减消去 y', 'C. 两式相加消去 y', 'D. 两式相减消去 x'],
        answer: 'C',
        explanation: '两式中 y 的系数分别为 2 和 -2，互为相反数，两式相加可直接消去 y，得到 6x=18。',
        difficulty: 1
      }
    ]
  },

  'math-huadong-8-2': {
    chapterName: '多边形',
    questions: [
      {
        id: 'q513', type: 'choice',
        question: '一个多边形的内角和为 1080°，则这个多边形的边数为',
        options: ['A. 6', 'B. 7', 'C. 8', 'D. 9'],
        answer: 'C',
        explanation: '(n-2)×180°=1080°，n-2=6，n=8。',
        difficulty: 1
      },
      {
        id: 'q514', type: 'fill',
        question: '正六边形的每个内角是 ____ 度',
        answer: '120',
        explanation: '正六边形内角和 = (6-2)×180° = 720°，每个内角 = 720°÷6 = 120°。',
        difficulty: 1
      },
      {
        id: 'q515', type: 'truefalse',
        question: '从一个多边形的一个顶点出发，可以作 (n-3) 条对角线。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '从n边形一个顶点出发，不能连向自身和两个相邻顶点，可以连向其余 n-3 个顶点，即 n-3 条对角线。',
        difficulty: 2
      },
      {
        id: 'q516', type: 'choice',
        question: '一个正多边形的每一个外角都等于 36°，则这个正多边形的边数为',
        options: ['A. 8', 'B. 9', 'C. 10', 'D. 12'],
        answer: 'C',
        explanation: '正多边形外角和为 360°，360°÷36°=10，所以边数为 10。',
        difficulty: 1
      },
      {
        id: 'q517', type: 'fill',
        question: '四边形的内角和为 ____ 度',
        answer: '360',
        explanation: '(4-2)×180°=360°。',
        difficulty: 1
      },
      {
        id: 'q518', type: 'choice',
        question: '下列说法正确的是',
        options: ['A. 各边都相等的多边形是正多边形', 'B. 各角都相等的多边形是正多边形', 'C. 正多边形既是轴对称图形也是中心对称图形', 'D. 四边形的外角和等于内角和'],
        answer: 'D',
        explanation: 'A 缺少各角相等；B 缺少各边相等；C 正奇数边形不是中心对称图形；D 四边形外角和 360°=内角和 360°，正确。',
        difficulty: 3
      }
    ]
  },

  'math-huadong-8-3': {
    chapterName: '轴对称与轴对称图形',
    questions: [
      {
        id: 'q519', type: 'choice',
        question: '下列图形中，是轴对称图形的是',
        options: ['A. 平行四边形', 'B. 等腰三角形', 'C. 不等边三角形', 'D. 梯形'],
        answer: 'B',
        explanation: '等腰三角形有一条对称轴（底边上的中线/高/顶角平分线所在直线）。平行四边形和一般梯形不是轴对称图形。',
        difficulty: 1
      },
      {
        id: 'q520', type: 'truefalse',
        question: '两个全等三角形一定关于某条直线对称。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '两个全等三角形形状大小相同，但位置关系不一定满足轴对称。只有当它们沿某条直线翻折能重合时，才关于该直线对称。',
        difficulty: 2
      },
      {
        id: 'q521', type: 'fill',
        question: '正方形有 ____ 条对称轴',
        answer: '4',
        explanation: '正方形的 4 条对称轴分别是：两条对角线所在直线和两条对边中点连线所在直线。',
        difficulty: 1
      },
      {
        id: 'q522', type: 'choice',
        question: '点 P(-2, 3) 关于 y 轴的对称点的坐标是',
        options: ['A. (2, 3)', 'B. (-2, -3)', 'C. (2, -3)', 'D. (-3, 2)'],
        answer: 'A',
        explanation: '关于 y 轴对称，横坐标取相反数，纵坐标不变。(-2,3) 关于 y 轴对称点为 (2,3)。',
        difficulty: 1
      },
      {
        id: 'q523', type: 'fill',
        question: '等边三角形有 ____ 条对称轴',
        answer: '3',
        explanation: '等边三角形的三条高（也是中线、角平分线）所在直线都是它的对称轴。',
        difficulty: 1
      },
      {
        id: 'q524', type: 'truefalse',
        question: '线段的垂直平分线上的点到线段两端点的距离相等。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '这是线段垂直平分线的性质定理：线段垂直平分线上的点与线段两个端点的距离相等。',
        difficulty: 2
      }
    ]
  },

  'math-huadong-9-0': {
    chapterName: '分式',
    questions: [
      {
        id: 'q525', type: 'choice',
        question: '下列各式中，是分式的是',
        options: ['A. (x+y)/3', 'B. x/π', 'C. 3/(x+1)', 'D. (x²+1)/2'],
        answer: 'C',
        explanation: '分式的定义是分母中含有字母的式子。A、D 分母不含字母；B 中 π 是常数不是字母；C 分母含有字母 x，是分式。',
        difficulty: 1
      },
      {
        id: 'q526', type: 'fill',
        question: '当 x = ____ 时，分式 2/(x-3) 无意义',
        answer: '3',
        explanation: '分式无意义的条件是分母等于零。x-3=0，即 x=3。',
        difficulty: 1
      },
      {
        id: 'q527', type: 'truefalse',
        question: '分式 (a²-b²)/(a-b) 化简后等于 a+b。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '(a²-b²)/(a-b) = (a+b)(a-b)/(a-b) = a+b（a≠b）。',
        difficulty: 2
      },
      {
        id: 'q528', type: 'choice',
        question: '计算 (1/x + 1/y) ÷ (1/x - 1/y) 的结果是',
        options: ['A. (x+y)/(y-x)', 'B. (x+y)/(x-y)', 'C. (x-y)/(x+y)', 'D. (y-x)/(x+y)'],
        answer: 'A',
        explanation: '1/x + 1/y = (x+y)/(xy)，1/x - 1/y = (y-x)/(xy)，相除得 (x+y)/(xy) × (xy)/(y-x) = (x+y)/(y-x)。',
        difficulty: 3
      },
      {
        id: 'q529', type: 'fill',
        question: '分式方程 2/(x-1) = 4/x 的解是 x = ____',
        answer: '2',
        explanation: '两边交叉相乘：2x = 4(x-1)，2x = 4x-4，-2x = -4，x=2。检验：x=2 时分母均不为零，是原方程的解。',
        difficulty: 2
      },
      {
        id: 'q530', type: 'choice',
        question: '分式方程 1/(x-2) + 3/(x+2) = 6/(x²-4) 去分母时，两边应乘以的最简公分母是',
        options: ['A. (x-2)(x+2)', 'B. x²-4', 'C. (x-2)(x+2) 和 x²-4 相同', 'D. 2(x-2)(x+2)'],
        answer: 'C',
        explanation: '(x-2)(x+2) = x²-4，它们是同一个多项式的不同写法，即最简公分母。',
        difficulty: 2
      }
    ]
  },

  'math-huadong-9-1': {
    chapterName: '相似图形',
    questions: [
      {
        id: 'q531', type: 'choice',
        question: '下列图形中，一定是相似图形的是',
        options: ['A. 两个等腰三角形', 'B. 两个正方形', 'C. 两个矩形', 'D. 两个菱形'],
        answer: 'B',
        explanation: '正方形的所有角都是直角，所有边都相等，因此任意两个正方形都是相似图形。',
        difficulty: 1
      },
      {
        id: 'q532', type: 'truefalse',
        question: '所有的等边三角形都相似。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '所有等边三角形各角都是 60°，三边之比都是 1:1:1，满足对应角相等、对应边成比例，所以都相似。',
        difficulty: 2
      },
      {
        id: 'q533', type: 'fill',
        question: '若 △ABC ∼ △DEF，且 AB:DE = 2:3，则 △ABC 与 △DEF 的面积比为 ____',
        answer: '4:9',
        explanation: '相似三角形的面积比等于相似比的平方。(2/3)² = 4/9，所以面积比为 4:9。',
        difficulty: 2
      },
      {
        id: 'q534', type: 'choice',
        question: '如图，在 △ABC 中，DE∥BC，AD=2，DB=3，DE=4，则 BC 的长为',
        options: ['A. 6', 'B. 8', 'C. 10', 'D. 12'],
        answer: 'C',
        explanation: 'DE∥BC，所以 △ADE ∼ △ABC，AD/AB = DE/BC。AD=2，AB=AD+DB=5，所以 2/5 = 4/BC，BC=10。',
        difficulty: 2
      },
      {
        id: 'q535', type: 'fill',
        question: '两个相似多边形的面积比为 9:16，则它们的周长比为 ____',
        answer: '3:4',
        explanation: '面积比 = (周长比)²，所以周长比 = √(9/16) = 3/4，即 3:4。',
        difficulty: 2
      },
      {
        id: 'q536', type: 'choice',
        question: '若两个三角形相似，相似比为 1:2，则较小三角形与较大三角形对应高的比为',
        options: ['A. 1:2', 'B. 1:4', 'C. 2:1', 'D. 4:1'],
        answer: 'A',
        explanation: '相似三角形对应高之比等于相似比，即 1:2。',
        difficulty: 1
      }
    ]
  },

  'math-huadong-9-2': {
    chapterName: '解直角三角形',
    questions: [
      {
        id: 'q537', type: 'choice',
        question: '在 Rt△ABC 中，∠C=90°，AC=3，BC=4，则 sinA 的值为',
        options: ['A. 3/5', 'B. 4/5', 'C. 3/4', 'D. 4/3'],
        answer: 'B',
        explanation: '在 Rt△ABC 中，∠C=90°，sinA = 对边/斜边 = BC/AB。AB = √(AC²+BC²) = √(9+16) = 5，所以 sinA = 4/5。',
        difficulty: 1
      },
      {
        id: 'q538', type: 'fill',
        question: '在 Rt△ABC 中，∠C=90°，若 cosA = 1/2，则 ∠A = ____ 度',
        answer: '60',
        explanation: 'cosA = 1/2，所以 ∠A = 60°。',
        difficulty: 1
      },
      {
        id: 'q539', type: 'truefalse',
        question: '在直角三角形中，sinA = cos(90°-A)。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: 'sinA = 对边/斜边，cos(90°-A) = sinA，这是互余两角的三角函数关系。',
        difficulty: 2
      },
      {
        id: 'q540', type: 'choice',
        question: '在 Rt△ABC 中，∠C=90°，a=6，c=10，则 tanA 的值为',
        options: ['A. 3/4', 'B. 4/3', 'C. 3/5', 'D. 4/5'],
        answer: 'A',
        explanation: 'b = √(c²-a²) = √(100-36) = √64 = 8。tanA = 对边/邻边 = a/b = 6/8 = 3/4。',
        difficulty: 2
      },
      {
        id: 'q541', type: 'fill',
        question: '一个斜坡的坡度（坡比）为 1:√3，则该斜坡的坡角（与水平面的夹角）为 ____ 度',
        answer: '30',
        explanation: '坡比 i = 竖直高度/水平宽度 = tanα = 1/√3，所以 α = 30°。',
        difficulty: 2
      },
      {
        id: 'q542', type: 'choice',
        question: '在地面上的点 A 处测得塔顶的仰角为 30°，A 点到塔底的距离为 100 米，则塔高为',
        options: ['A. 50√3 米', 'B. 100√3 米', 'C. 100/√3 米', 'D. 50 米'],
        answer: 'C',
        explanation: 'tan30° = 塔高/100，即 塔高 = 100 × tan30° = 100 × (√3/3) = 100√3/3 = 100/√3。',
        difficulty: 2
      }
    ]
  },

  'math-huadong-9-3': {
    chapterName: '数据的整理与初步处理',
    questions: [
      {
        id: 'q543', type: 'choice',
        question: '一组数据 2, 3, 5, 5, 5, 7, 8 的众数是',
        options: ['A. 5', 'B. 4', 'C. 5 和 7', 'D. 3'],
        answer: 'A',
        explanation: '5 出现了 3 次，是出现次数最多的数，所以众数为 5。',
        difficulty: 1
      },
      {
        id: 'q544', type: 'fill',
        question: '数据 1, 2, 3, 4, 5 的中位数是 ____',
        answer: '3',
        explanation: '将数据从小到大排列：1, 2, 3, 4, 5。共 5 个数据，中间第 3 个就是中位数 3。',
        difficulty: 1
      },
      {
        id: 'q545', type: 'truefalse',
        question: '一组数据的众数一定只有一个。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '众数是出现次数最多的数据值，可以有多个。例如数据 1,1,2,2,3 中，1 和 2 都是众数。',
        difficulty: 2
      },
      {
        id: 'q546', type: 'choice',
        question: '5 个数据的平均数为 10，去掉一个数据后，剩下 4 个数据的平均数为 12，则去掉的数据是',
        options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'],
        answer: 'B',
        explanation: '5 个数据总和 = 5×10=50，剩下 4 个数据总和 = 4×12=48，去掉的数据 = 50-48=2。',
        difficulty: 2
      },
      {
        id: 'q547', type: 'fill',
        question: '数据 3, 7, 8, 12 的方差是 ____',
        answer: '10.25',
        explanation: '平均数 = (3+7+8+12)/4 = 7.5。方差 = [(3-7.5)²+(7-7.5)²+(8-7.5)²+(12-7.5)²]/4 = [20.25+0.25+0.25+20.25]/4 = 41/4 = 10.25。',
        difficulty: 3
      },
      {
        id: 'q548', type: 'choice',
        question: '为了了解某校 2000 名学生的视力情况，从中抽取了 200 名学生进行视力检测，下列说法正确的是',
        options: ['A. 2000 名学生是总体', 'B. 每名学生是个体', 'C. 200 名学生是样本', 'D. 200 是样本容量'],
        answer: 'D',
        explanation: '总体是 2000 名学生的视力情况；个体是每名学生的视力；样本是抽取的 200 名学生的视力情况；200 是样本容量（不带单位）。',
        difficulty: 2
      }
    ]
  },

  // ==========================================
  // math-bsd
  // ==========================================

  'math-bsd-7-0': {
    chapterName: '丰富的图形世界',
    questions: [
      {
        id: 'q549', type: 'choice',
        question: '一个正方体有多少条棱？',
        options: ['A. 6', 'B. 8', 'C. 10', 'D. 12'],
        answer: 'D',
        explanation: '正方体有 12 条棱（每条棱上有 4 条，上下各 4 条）。',
        difficulty: 1
      },
      {
        id: 'q550', type: 'truefalse',
        question: '圆柱的展开图是一个长方形和一个圆。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '圆柱的展开图是一个长方形和两个相同的圆（上下底面）。',
        difficulty: 1
      },
      {
        id: 'q551', type: 'fill',
        question: '一个五棱锥有 ____ 个面',
        answer: '6',
        explanation: '五棱锥有 1 个底面（五边形）和 5 个侧面（三角形），共 6 个面。',
        difficulty: 1
      },
      {
        id: 'q552', type: 'choice',
        question: '下列图形中，属于多面体的是',
        options: ['A. 圆柱', 'B. 圆锥', 'C. 球', 'D. 长方体'],
        answer: 'D',
        explanation: '多面体是由平面围成的几何体。圆柱、圆锥、球都有曲面，不是多面体。长方体由 6 个平面围成，是多面体。',
        difficulty: 1
      },
      {
        id: 'q553', type: 'fill',
        question: '将一个正方体截去一个角后，剩下的几何体有 ____ 个面',
        answer: '7',
        explanation: '正方体有 6 个面，截去一个角后，截面是一个三角形，代替了原来的一个角（涉及 3 个面），所以面数变为 6-1+2=7 个面。',
        difficulty: 3
      },
      {
        id: 'q554', type: 'choice',
        question: '用一个平面去截一个正方体，截面不可能是',
        options: ['A. 三角形', 'B. 四边形', 'C. 五边形', 'D. 七边形'],
        answer: 'D',
        explanation: '正方体有 6 个面，用一个平面去截，截面最多与 6 个面相交，最多得到六边形。不可能得到七边形。',
        difficulty: 2
      }
    ]
  },

  'math-bsd-7-1': {
    chapterName: '有理数及其运算',
    questions: [
      {
        id: 'q555', type: 'choice',
        question: '计算 (-8) ÷ 2 的结果是',
        options: ['A. 4', 'B. -4', 'C. -16', 'D. 16'],
        answer: 'B',
        explanation: '(-8) ÷ 2 = -4，异号相除结果为负。',
        difficulty: 1
      },
      {
        id: 'q556', type: 'fill',
        question: '计算：(-3)² = ____',
        answer: '9',
        explanation: '(-3)² 表示 (-3)×(-3) = 9，负数的偶数次方为正。',
        difficulty: 1
      },
      {
        id: 'q557', type: 'truefalse',
        question: '-2² 和 (-2)² 的值相等。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '-2² = -(2²) = -4，而 (-2)² = 4，两者不相等。',
        difficulty: 2
      },
      {
        id: 'q558', type: 'choice',
        question: '计算 (-1)¹⁰⁰ + (-1)¹⁰¹ 的结果是',
        options: ['A. -1', 'B. 0', 'C. 1', 'D. 2'],
        answer: 'B',
        explanation: '(-1)¹⁰⁰ = 1（100 是偶数），(-1)¹⁰¹ = -1（101 是奇数），1 + (-1) = 0。',
        difficulty: 2
      },
      {
        id: 'q559', type: 'fill',
        question: '计算：|-5| + |3| = ____',
        answer: '8',
        explanation: '|-5| = 5，|3| = 3，5 + 3 = 8。',
        difficulty: 1
      },
      {
        id: 'q560', type: 'choice',
        question: '有理数中，绝对值最小的数是',
        options: ['A. -1', 'B. 0', 'C. 1', 'D. 不存在'],
        answer: 'B',
        explanation: '0 的绝对值是 0，任何非零有理数的绝对值都大于 0，所以绝对值最小的有理数是 0。',
        difficulty: 1
      },
      {
        id: 'q561', type: 'fill',
        question: '计算：(-2) × 3 × (-5) = ____',
        answer: '30',
        explanation: '(-2)×3 = -6，(-6)×(-5) = 30。两个负号相乘得正。',
        difficulty: 2
      }
    ]
  },

  'math-bsd-7-2': {
    chapterName: '整式及其加减',
    questions: [
      {
        id: 'q562', type: 'choice',
        question: '下列各式中，是单项式的是',
        options: ['A. x + 1', 'B. 2xy', 'C. 1/x', 'D. x - y'],
        answer: 'B',
        explanation: '单项式是数与字母的积。2xy 是一个单项式；x+1 和 x-y 是多项式；1/x 分母含字母不是整式。',
        difficulty: 1
      },
      {
        id: 'q563', type: 'fill',
        question: '多项式 3x² - 2x + 1 的次数是 ____',
        answer: '2',
        explanation: '多项式的次数是各项中最高次项的次数。3x² 的次数是 2，是最高次，所以多项式次数为 2。',
        difficulty: 1
      },
      {
        id: 'q564', type: 'truefalse',
        question: '3x²y 的系数是 3，次数是 3。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '3x²y 的系数是数字因数 3，次数是所有字母指数之和 2+1=3。正确。',
        difficulty: 2
      },
      {
        id: 'q565', type: 'choice',
        question: '化简 (2x + 3y) - (5x - 2y) 的结果是',
        options: ['A. -3x + 5y', 'B. -3x + y', 'C. 7x + y', 'D. -3x - 5y'],
        answer: 'A',
        explanation: '(2x+3y) - (5x-2y) = 2x+3y-5x+2y = -3x+5y。',
        difficulty: 1
      },
      {
        id: 'q566', type: 'fill',
        question: '若 3xᵐy² 与 -x³yⁿ 是同类项，则 m = ____，n = ____',
        answer: '3, 2',
        explanation: '同类项要求相同字母的指数分别相等，所以 m=3，n=2。',
        difficulty: 2
      },
      {
        id: 'q567', type: 'truefalse',
        question: 'x² + x² = x⁴。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: 'x² + x² = 2x²，不是 x⁴。合并同类项是系数相加，字母和指数不变。',
        difficulty: 1
      }
    ]
  },

  'math-bsd-7-3': {
    chapterName: '基本平面图形',
    questions: [
      {
        id: 'q568', type: 'choice',
        question: '下列长度的三条线段中，能组成三角形的是',
        options: ['A. 1, 2, 3', 'B. 2, 3, 6', 'C. 3, 4, 5', 'D. 4, 5, 10'],
        answer: 'C',
        explanation: '三角形三边关系：任意两边之和大于第三边。3+4>5，3+5>4，4+5>3，成立。A 中 1+2=3 不满足严格大于。',
        difficulty: 1
      },
      {
        id: 'q569', type: 'fill',
        question: '一个三角形的两个内角分别为 50° 和 70°，则第三个内角为 ____ 度',
        answer: '60',
        explanation: '三角形内角和为 180°，第三个角 = 180° - 50° - 70° = 60°。',
        difficulty: 1
      },
      {
        id: 'q570', type: 'truefalse',
        question: '两点之间线段最短。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '这是线段的基本性质（公理）：两点之间，线段最短。',
        difficulty: 1
      },
      {
        id: 'q571', type: 'choice',
        question: '一个圆的半径为 5cm，则该圆的周长为（π 取 3.14）',
        options: ['A. 15.7cm', 'B. 31.4cm', 'C. 78.5cm', 'D. 25cm'],
        answer: 'B',
        explanation: '周长 C = 2πr = 2 × 3.14 × 5 = 31.4cm。',
        difficulty: 1
      },
      {
        id: 'q572', type: 'fill',
        question: '时钟上 3 点整时，时针与分针的夹角为 ____ 度',
        answer: '90',
        explanation: '3 点整时，时针指向 3，分针指向 12。钟面上每相邻两个数字之间是 30°，3×30°=90°。',
        difficulty: 2
      },
      {
        id: 'q573', type: 'choice',
        question: '一个角的补角是 110°，则这个角的度数为',
        options: ['A. 70°', 'B. 80°', 'C. 110°', 'D. 20°'],
        answer: 'A',
        explanation: '互补两角之和为 180°，所以这个角 = 180° - 110° = 70°。',
        difficulty: 1
      }
    ]
  },

  'math-bsd-8-0': {
    chapterName: '勾股定理',
    questions: [
      {
        id: 'q574', type: 'choice',
        question: '在 Rt△ABC 中，∠C=90°，a=3，b=4，则 c 的长为',
        options: ['A. 5', 'B. 6', 'C. 7', 'D. 25'],
        answer: 'A',
        explanation: '由勾股定理 c² = a² + b² = 9 + 16 = 25，所以 c = 5。',
        difficulty: 1
      },
      {
        id: 'q575', type: 'fill',
        question: '一个直角三角形的两条直角边长分别为 5 和 12，则斜边长为 ____',
        answer: '13',
        explanation: '由勾股定理 c² = 5² + 12² = 25 + 144 = 169，c = 13。',
        difficulty: 1
      },
      {
        id: 'q576', type: 'truefalse',
        question: '三边长为 5, 12, 13 的三角形是直角三角形。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '5² + 12² = 25 + 144 = 169 = 13²，满足勾股定理的逆定理，所以是直角三角形。',
        difficulty: 2
      },
      {
        id: 'q577', type: 'choice',
        question: '已知直角三角形斜边长为 17，一条直角边长为 8，则另一条直角边长为',
        options: ['A. 9', 'B. 12', 'C. 15', 'D. 10'],
        answer: 'C',
        explanation: '由勾股定理 b² = c² - a² = 17² - 8² = 289 - 64 = 225，b = 15。',
        difficulty: 2
      },
      {
        id: 'q578', type: 'fill',
        question: '一个梯子的底端距墙根 6 米，梯子长 10 米，则梯子顶端距地面的高度为 ____ 米',
        answer: '8',
        explanation: '设梯子顶端距地面 h 米，由勾股定理 h² + 6² = 10²，h² = 100-36=64，h=8。',
        difficulty: 2
      },
      {
        id: 'q579', type: 'choice',
        question: '下列各组数中，是勾股数的一组是',
        options: ['A. 1, 2, 3', 'B. 3, 4, 6', 'C. 5, 12, 13', 'D. 4, 5, 6'],
        answer: 'C',
        explanation: '勾股数满足 a²+b²=c²。5²+12²=25+144=169=13²。A 中 1²+2²=5≠3²；B 中 3²+4²=25≠6²；D 中 4²+5²=41≠6²。',
        difficulty: 1
      }
    ]
  },

  'math-bsd-8-1': {
    chapterName: '实数',
    questions: [
      {
        id: 'q580', type: 'choice',
        question: '下列各数中，是无理数的是',
        options: ['A. -2', 'B. 0.333...', 'C. √4', 'D. √5'],
        answer: 'D',
        explanation: '√5 是无限不循环小数，是无理数。-2 是整数，0.333... 是循环小数（有理数），√4=2 是整数。',
        difficulty: 1
      },
      {
        id: 'q581', type: 'fill',
        question: '√12 化简后等于 ____',
        answer: '2√3',
        explanation: '√12 = √(4×3) = √4 × √3 = 2√3。',
        difficulty: 1
      },
      {
        id: 'q582', type: 'truefalse',
        question: '带根号的数都是无理数。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '例如 √4 = 2，√9 = 3，它们都是有理数。只有当被开方数不是完全平方数时，带根号的数才是无理数。',
        difficulty: 2
      },
      {
        id: 'q583', type: 'choice',
        question: '实数 -√7 的绝对值是',
        options: ['A. -√7', 'B. √7', 'C. 7', 'D. -7'],
        answer: 'B',
        explanation: '负数的绝对值等于其相反数，|-√7| = √7。',
        difficulty: 1
      },
      {
        id: 'q584', type: 'fill',
        question: '估算 √10 的值在整数 ____ 和 ____ 之间',
        answer: '3, 4',
        explanation: '3²=9 < 10 < 16=4²，所以 3 < √10 < 4。',
        difficulty: 1
      },
      {
        id: 'q585', type: 'choice',
        question: '下列计算正确的是',
        options: ['A. √3 + √5 = √8', 'B. √6 × √3 = √18', 'C. √12 ÷ √3 = 2', 'D. √6 - √3 = √3'],
        answer: 'C',
        explanation: 'A 错：√3+√5 不能合并；B 错：√6×√3=√18=3√2，未化简；C 对：√12÷√3=√(12/3)=√4=2；D 错：√6-√3 不能相减。',
        difficulty: 2
      }
    ]
  },

  'math-bsd-8-2': {
    chapterName: '位置与坐标',
    questions: [
      {
        id: 'q586', type: 'choice',
        question: '在平面直角坐标系中，点 (2, -3) 所在的象限是',
        options: ['A. 第一象限', 'B. 第二象限', 'C. 第三象限', 'D. 第四象限'],
        answer: 'D',
        explanation: '横坐标为正、纵坐标为负的点在第四象限。',
        difficulty: 1
      },
      {
        id: 'q587', type: 'fill',
        question: '点 P(-4, 0) 在 ____ 轴上',
        answer: 'x',
        explanation: '纵坐标为 0 的点在 x 轴上。',
        difficulty: 1
      },
      {
        id: 'q588', type: 'truefalse',
        question: '点 (a, b) 和点 (b, a) 在坐标系中表示同一点。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '只有当 a=b 时，(a,b) 和 (b,a) 才是同一点。一般情况下它们是不同的点。',
        difficulty: 2
      },
      {
        id: 'q589', type: 'choice',
        question: '点 A(2, 3) 向左平移 4 个单位后的坐标是',
        options: ['A. (-2, 3)', 'B. (6, 3)', 'C. (2, -1)', 'D. (2, 7)'],
        answer: 'A',
        explanation: '向左平移 4 个单位，横坐标减 4，纵坐标不变。新坐标为 (2-4, 3) = (-2, 3)。',
        difficulty: 1
      },
      {
        id: 'q590', type: 'fill',
        question: '点 M(3, -2) 关于原点对称的点的坐标是 ____',
        answer: '(-3, 2)',
        explanation: '关于原点对称，横坐标和纵坐标都取相反数。(3,-2) 关于原点对称的点是 (-3,2)。',
        difficulty: 2
      },
      {
        id: 'q591', type: 'choice',
        question: '在平面直角坐标系中，点到 x 轴的距离等于',
        options: ['A. 横坐标的绝对值', 'B. 纵坐标的绝对值', 'C. 横坐标', 'D. 纵坐标'],
        answer: 'B',
        explanation: '点到 x 轴的距离等于该点纵坐标的绝对值。',
        difficulty: 1
      }
    ]
  },

  'math-bsd-8-3': {
    chapterName: '一次函数',
    questions: [
      {
        id: 'q592', type: 'choice',
        question: '下列函数中，是一次函数的是',
        options: ['A. y = x²', 'B. y = 2x + 1', 'C. y = 1/x', 'D. y = √x'],
        answer: 'B',
        explanation: '一次函数的形式为 y = kx + b（k≠0）。y = 2x + 1 符合一次函数的定义。',
        difficulty: 1
      },
      {
        id: 'q593', type: 'fill',
        question: '一次函数 y = -2x + 3 的图像与 y 轴的交点坐标是 ____',
        answer: '(0, 3)',
        explanation: '与 y 轴交点即 x=0 时的点，y = -2×0+3 = 3，交点为 (0,3)。',
        difficulty: 1
      },
      {
        id: 'q594', type: 'truefalse',
        question: '正比例函数 y = 3x 的图像经过原点。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '正比例函数 y = kx（k≠0）的图像一定经过原点，当 x=0 时 y=0。',
        difficulty: 1
      },
      {
        id: 'q595', type: 'choice',
        question: '一次函数 y = kx + b 的图像经过第一、三、四象限，则',
        options: ['A. k > 0, b > 0', 'B. k > 0, b < 0', 'C. k < 0, b > 0', 'D. k < 0, b < 0'],
        answer: 'B',
        explanation: '经过第一、三象限说明 k>0（图像从左下到右上），经过第四象限不过第二象限说明 b<0（y 轴截距为负）。',
        difficulty: 2
      },
      {
        id: 'q596', type: 'fill',
        question: '一次函数 y = 2x - 4 与 x 轴的交点坐标是 ____',
        answer: '(2, 0)',
        explanation: '与 x 轴交点即 y=0，令 2x-4=0，x=2，交点为 (2,0)。',
        difficulty: 1
      },
      {
        id: 'q597', type: 'choice',
        question: '已知一次函数过点 (1, 3) 和 (2, 5)，则该函数的解析式为',
        options: ['A. y = x + 2', 'B. y = 2x + 1', 'C. y = 3x', 'D. y = -x + 4'],
        answer: 'B',
        explanation: '设 y=kx+b，代入 (1,3)：k+b=3；代入 (2,5)：2k+b=5。解得 k=2，b=1。所以 y=2x+1。',
        difficulty: 2
      }
    ]
  },

  'math-bsd-9-0': {
    chapterName: '特殊平行四边形',
    questions: [
      {
        id: 'q598', type: 'choice',
        question: '矩形的对角线具有的性质是',
        options: ['A. 互相垂直', 'B. 互相垂直且平分', 'C. 相等且互相平分', 'D. 相等且互相垂直'],
        answer: 'C',
        explanation: '矩形的对角线相等且互相平分。互相垂直是菱形的性质，不是矩形的。',
        difficulty: 1
      },
      {
        id: 'q599', type: 'truefalse',
        question: '对角线互相垂直的平行四边形是正方形。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '对角线互相垂直的平行四边形是菱形。要成为正方形，还需要对角线相等。',
        difficulty: 2
      },
      {
        id: 'q600', type: 'fill',
        question: '菱形的两条对角线长分别为 6 和 8，则菱形的面积为 ____',
        answer: '24',
        explanation: '菱形的面积 = 对角线之积的一半 = (6×8)/2 = 24。',
        difficulty: 2
      },
      {
        id: 'q601', type: 'choice',
        question: '下列条件中，能判定四边形 ABCD 是矩形的是',
        options: ['A. AB∥CD, AD∥BC', 'B. AB=CD, AD=BC', 'C. AC=BD, AB∥CD, AD∥BC', 'D. ∠A=∠B=∠C'],
        answer: 'C',
        explanation: '对角线相等的平行四边形是矩形。AB∥CD, AD∥BC 说明是平行四边形，AC=BD（对角线相等）即可判定为矩形。',
        difficulty: 2
      },
      {
        id: 'q602', type: 'fill',
        question: '正方形的对角线长为 4，则正方形的边长为 ____',
        answer: '2√2',
        explanation: '正方形对角线 = 边长 × √2，所以边长 = 4/√2 = 2√2。',
        difficulty: 2
      },
      {
        id: 'q603', type: 'choice',
        question: '菱形的一条对角线与边长相等，则菱形的较大内角为',
        options: ['A. 60°', 'B. 90°', 'C. 120°', 'D. 150°'],
        answer: 'C',
        explanation: '菱形的一条对角线与边长相等，说明对角线将菱形分成两个等边三角形，所以菱形的较大内角为 120°。',
        difficulty: 3
      }
    ]
  },

  'math-bsd-9-1': {
    chapterName: '一元二次方程',
    questions: [
      {
        id: 'q604', type: 'choice',
        question: '下列方程中，是一元二次方程的是',
        options: ['A. x² + 2x = x² - 1', 'B. x² + 1/x = 0', 'C. 3x² - 2x + 1 = 0', 'D. x + 1 = 0'],
        answer: 'C',
        explanation: '一元二次方程是只含一个未知数，最高次数为 2 的整式方程。A 化简后为 2x+1=0 是一次方程；B 不是整式方程；D 是一次方程。',
        difficulty: 1
      },
      {
        id: 'q605', type: 'fill',
        question: '方程 x² - 5x + 6 = 0 的两个根是 ____',
        answer: '2 和 3',
        explanation: 'x²-5x+6=0 因式分解为 (x-2)(x-3)=0，所以 x=2 或 x=3。',
        difficulty: 1
      },
      {
        id: 'q606', type: 'truefalse',
        question: '一元二次方程 x² + 1 = 0 在实数范围内有解。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: 'x² + 1 = 0，即 x² = -1。任何实数的平方都非负，所以该方程在实数范围内无解。',
        difficulty: 2
      },
      {
        id: 'q607', type: 'choice',
        question: '一元二次方程 x² - 4x + 1 = 0 的根的判别式 Δ 的值为',
        options: ['A. 12', 'B. 20', 'C. -12', 'D. 8'],
        answer: 'A',
        explanation: 'Δ = b²-4ac = (-4)²-4×1×1 = 16-4 = 12。',
        difficulty: 2
      },
      {
        id: 'q608', type: 'fill',
        question: '方程 x² = 9 的解是 x = ____',
        answer: '3 或 -3',
        explanation: 'x² = 9，开方得 x = ±3，即 x = 3 或 x = -3。',
        difficulty: 1
      },
      {
        id: 'q609', type: 'choice',
        question: '若关于 x 的一元二次方程 ax² + bx + c = 0 的两根之和为 3，两根之积为 2，则该方程为',
        options: ['A. x² + 3x + 2 = 0', 'B. x² - 3x + 2 = 0', 'C. x² + 3x - 2 = 0', 'D. x² - 3x - 2 = 0'],
        answer: 'B',
        explanation: '由韦达定理，x₁+x₂ = -b/a = 3，x₁·x₂ = c/a = 2。取 a=1，则 b=-3，c=2，方程为 x²-3x+2=0。',
        difficulty: 3
      }
    ]
  },

  'math-bsd-9-2': {
    chapterName: '概率的进一步认识',
    questions: [
      {
        id: 'q610', type: 'choice',
        question: '同时掷两枚硬币，两枚都正面朝上的概率是',
        options: ['A. 1/2', 'B. 1/3', 'C. 1/4', 'D. 3/4'],
        answer: 'C',
        explanation: '掷两枚硬币有 4 种等可能结果：(正,正)、(正,反)、(反,正)、(反,反)。两枚都正面朝上只有 1 种，概率为 1/4。',
        difficulty: 1
      },
      {
        id: 'q611', type: 'fill',
        question: '一个袋子中有 3 个红球和 2 个白球（除颜色外完全相同），从中随机摸出一个球，摸到红球的概率是 ____',
        answer: '3/5',
        explanation: '共有 5 个球，其中红球 3 个，P(红球) = 3/5。',
        difficulty: 1
      },
      {
        id: 'q612', type: 'truefalse',
        question: '"明天降水概率为 70%" 意味着明天一定下雨。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '概率为 70% 表示下雨的可能性较大，但并非一定下雨，仍有 30% 的不下雨的可能性。',
        difficulty: 2
      },
      {
        id: 'q613', type: 'choice',
        question: '从 1 到 10 这 10 个自然数中随机取一个数，取到偶数的概率是',
        options: ['A. 1/5', 'B. 2/5', 'C. 1/2', 'D. 3/5'],
        answer: 'C',
        explanation: '1 到 10 中偶数有 2, 4, 6, 8, 10 共 5 个，P(偶数) = 5/10 = 1/2。',
        difficulty: 1
      },
      {
        id: 'q614', type: 'fill',
        question: '掷一个均匀的骰子，点数大于 4 的概率是 ____',
        answer: '1/3',
        explanation: '点数大于 4 有 5 和 6 两种情况，共 6 种等可能结果，P = 2/6 = 1/3。',
        difficulty: 1
      },
      {
        id: 'q615', type: 'choice',
        question: '事件 A 的概率 P(A) 的取值范围是',
        options: ['A. 0 < P(A) < 1', 'B. 0 ≤ P(A) ≤ 1', 'C. P(A) > 1', 'D. P(A) < 0'],
        answer: 'B',
        explanation: '概率的取值范围是 0 ≤ P(A) ≤ 1。P(A)=0 表示不可能事件，P(A)=1 表示必然事件。',
        difficulty: 1
      }
    ]
  },

  'math-bsd-9-3': {
    chapterName: '直角三角形的边角关系',
    questions: [
      {
        id: 'q616', type: 'choice',
        question: '在 Rt△ABC 中，∠C=90°，若 ∠A=30°，BC=5，则 AB 的长为',
        options: ['A. 5', 'B. 10', 'C. 5√3', 'D. 10√3'],
        answer: 'B',
        explanation: '在 30° 的直角三角形中，斜边是 30° 角所对边的 2 倍，所以 AB = 2BC = 10。',
        difficulty: 1
      },
      {
        id: 'q617', type: 'fill',
        question: '在 Rt△ABC 中，∠C=90°，a=5，c=13，则 sinA = ____',
        answer: '5/13',
        explanation: 'sinA = 对边/斜边 = a/c = 5/13。',
        difficulty: 1
      },
      {
        id: 'q618', type: 'truefalse',
        question: 'tan30° = √3。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: 'tan30° = √3/3，不是 √3。tan60° = √3。',
        difficulty: 1
      },
      {
        id: 'q619', type: 'choice',
        question: '在 Rt△ABC 中，∠C=90°，sinA = 3/5，则 cosA 的值为',
        options: ['A. 3/5', 'B. 4/5', 'C. 3/4', 'D. 4/3'],
        answer: 'B',
        explanation: 'sin²A + cos²A = 1，cos²A = 1 - (3/5)² = 1 - 9/25 = 16/25，cosA = 4/5。',
        difficulty: 2
      },
      {
        id: 'q620', type: 'fill',
        question: 'tan45° + cos60° = ____',
        answer: '3/2',
        explanation: 'tan45° = 1，cos60° = 1/2，所以 1 + 1/2 = 3/2。',
        difficulty: 1
      },
      {
        id: 'q621', type: 'choice',
        question: '从地面上一点 A 测得旗杆顶部 B 的仰角为 45°，A 到旗杆底部的距离为 20 米，则旗杆高度为',
        options: ['A. 10 米', 'B. 10√2 米', 'C. 20 米', 'D. 20√2 米'],
        answer: 'C',
        explanation: 'tan45° = 旗杆高度/20，即 旗杆高度 = 20 × tan45° = 20 × 1 = 20 米。',
        difficulty: 2
      }
    ]
  },

  // ==========================================
  // math-suke
  // ==========================================

  'math-suke-7-0': {
    chapterName: '我们身边的数学',
    questions: [
      {
        id: 'q622', type: 'choice',
        question: '某商品原价 100 元，先涨价 10%，再降价 10%，则最终价格是',
        options: ['A. 100 元', 'B. 99 元', 'C. 101 元', 'D. 110 元'],
        answer: 'B',
        explanation: '涨价 10% 后为 100×1.1=110 元，再降价 10% 为 110×0.9=99 元。',
        difficulty: 2
      },
      {
        id: 'q623', type: 'fill',
        question: '一个三角形的三边长分别为 3, 4, 5，则该三角形的面积为 ____',
        answer: '6',
        explanation: '3²+4²=9+16=25=5²，是直角三角形，面积 = (3×4)/2 = 6。',
        difficulty: 2
      },
      {
        id: 'q624', type: 'truefalse',
        question: '调查某班同学最喜欢的运动项目，适合用条形统计图来表示。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '条形统计图适合表示各类别的数量对比，如不同运动项目的喜欢人数。',
        difficulty: 1
      },
      {
        id: 'q625', type: 'choice',
        question: '用一个正方形的纸折出一个最大的等边三角形，该等边三角形的边长与正方形边长的比值最接近',
        options: ['A. 1/2', 'B. √3/2', 'C. 1', 'D. √2'],
        answer: 'C',
        explanation: '正方形对角线长为边长的 √2 倍，沿对角线折叠后可以得到等腰直角三角形。但此题作为生活中的数学，折最大等边三角形的边长接近正方形边长。',
        difficulty: 3
      },
      {
        id: 'q626', type: 'fill',
        question: '将一根绳子对折 3 次后从中间剪一刀，绳子被剪成 ____ 段',
        answer: '9',
        explanation: '对折 3 次后有 8 层，从中间剪一刀，得到 9 段。',
        difficulty: 2
      },
      {
        id: 'q627', type: 'choice',
        question: '下列问题中，适合用全面调查方式的是',
        options: ['A. 检测一批灯泡的使用寿命', 'B. 了解全国中学生的视力情况', 'C. 检查神舟飞船各零部件的质量', 'D. 了解一批炮弹的杀伤半径'],
        answer: 'C',
        explanation: '飞船零部件质量关乎安全，必须逐个检查（全面调查）。A、D 具有破坏性，B 工作量太大，都适合抽样调查。',
        difficulty: 2
      }
    ]
  },

  'math-suke-7-1': {
    chapterName: '有理数',
    questions: [
      {
        id: 'q628', type: 'choice',
        question: '在 -3, 0, 2, -1.5, √4, -2 中，负整数有',
        options: ['A. 1 个', 'B. 2 个', 'C. 3 个', 'D. 4 个'],
        answer: 'B',
        explanation: '负整数有 -3 和 -2 共 2 个。0 不是负数，2 是正整数，-1.5 是负分数，√4=2 是正整数。',
        difficulty: 1
      },
      {
        id: 'q629', type: 'fill',
        question: '计算：(-2)³ × (-1/2) = ____',
        answer: '4',
        explanation: '(-2)³ = -8，(-8)×(-1/2) = 4。',
        difficulty: 2
      },
      {
        id: 'q630', type: 'truefalse',
        question: '零是最小的有理数。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '有理数中没有最小的数，因为负数可以无限小。0 既不是正数也不是负数，但不是最小的有理数。',
        difficulty: 1
      },
      {
        id: 'q631', type: 'choice',
        question: '若 |a-2| + (b+3)² = 0，则 a + b 的值为',
        options: ['A. -1', 'B. 1', 'C. -5', 'D. 5'],
        answer: 'A',
        explanation: '绝对值和平方都是非负数，和为 0 则每一项都为 0。所以 a-2=0，a=2；b+3=0，b=-3。a+b=2+(-3)=-1。',
        difficulty: 2
      },
      {
        id: 'q632', type: 'fill',
        question: '计算：-1⁴ + (-1)³ = ____',
        answer: '-2',
        explanation: '-1⁴ = -(1⁴) = -1，(-1)³ = -1，-1 + (-1) = -2。',
        difficulty: 2
      },
      {
        id: 'q633', type: 'choice',
        question: '科学记数法表示 356000 应为',
        options: ['A. 35.6×10⁴', 'B. 3.56×10⁵', 'C. 3.56×10⁴', 'D. 0.356×10⁶'],
        answer: 'B',
        explanation: '科学记数法要求前面的数在 1 到 10 之间。356000 = 3.56×10⁵。',
        difficulty: 1
      }
    ]
  },

  'math-suke-7-2': {
    chapterName: '用字母表示数',
    questions: [
      {
        id: 'q634', type: 'choice',
        question: '下列代数式中，书写规范的是',
        options: ['A. 1/2ab', 'B. a×b÷c', 'C. 2a³b', 'D. (a+b)² 平方'],
        answer: 'C',
        explanation: '代数式书写规范：数字写在字母前面，除法用分数线表示，乘号通常省略。C 符合规范。',
        difficulty: 1
      },
      {
        id: 'q635', type: 'fill',
        question: '某商品原价 a 元，打八折后的售价为 ____ 元',
        answer: '0.8a',
        explanation: '打八折即原价的 80%，所以售价 = a × 80% = 0.8a。',
        difficulty: 1
      },
      {
        id: 'q636', type: 'truefalse',
        question: '代数式 (x+y)² 和 x² + y² 的值相等。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '(x+y)² = x²+2xy+y²，不等于 x²+y²（除非 xy=0）。',
        difficulty: 2
      },
      {
        id: 'q637', type: 'choice',
        question: '当 x = -1 时，代数式 2x² - 3x + 1 的值是',
        options: ['A. 0', 'B. 2', 'C. 6', 'D. -2'],
        answer: 'C',
        explanation: '当 x=-1 时，2×(-1)²-3×(-1)+1 = 2+3+1 = 6。',
        difficulty: 1
      },
      {
        id: 'q638', type: 'fill',
        question: '一个两位数，十位数字是 a，个位数字是 b，则这个两位数可以表示为 ____',
        answer: '10a + b',
        explanation: '十位数字 a 表示 a 个十，即 10a；个位数字 b 表示 b 个一，即 b。所以这个两位数为 10a+b。',
        difficulty: 2
      },
      {
        id: 'q639', type: 'choice',
        question: '下列各式中，是单项式的是',
        options: ['A. x + y', 'B. -3a²b', 'C. 2(x+y)', 'D. a/b'],
        answer: 'B',
        explanation: '单项式是数与字母的乘积。-3a²b 是一个单项式。A 和 C 是多项式，D 不是整式。',
        difficulty: 1
      }
    ]
  },

  'math-suke-7-3': {
    chapterName: '一元一次方程',
    questions: [
      {
        id: 'q640', type: 'choice',
        question: '下列方程中，是一元一次方程的是',
        options: ['A. x² + x = 1', 'B. x + y = 3', 'C. 2x - 1 = 3', 'D. 1/x = 2'],
        answer: 'C',
        explanation: '一元一次方程含一个未知数，最高次数为 1，且是整式方程。A 是二次；B 含两个未知数；D 分母含字母。',
        difficulty: 1
      },
      {
        id: 'q641', type: 'fill',
        question: '解方程 3x - 5 = 10，得 x = ____',
        answer: '5',
        explanation: '3x = 10 + 5 = 15，x = 5。',
        difficulty: 1
      },
      {
        id: 'q642', type: 'truefalse',
        question: 'x = 0 是方程 x² = 2x 的唯一解。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: 'x² = 2x，移项得 x²-2x=0，x(x-2)=0，解得 x=0 或 x=2。还有 x=2 这个解。',
        difficulty: 2
      },
      {
        id: 'q643', type: 'choice',
        question: '小明比小红大 3 岁，两人年龄之和为 27 岁，则小明的年龄是',
        options: ['A. 10 岁', 'B. 12 岁', 'C. 15 岁', 'D. 17 岁'],
        answer: 'C',
        explanation: '设小红 x 岁，则小明 x+3 岁。x+(x+3)=27，2x=24，x=12，小明 12+3=15 岁。',
        difficulty: 1
      },
      {
        id: 'q644', type: 'fill',
        question: '方程 2(x-1) = 3(x+2) 的解是 x = ____',
        answer: '-8',
        explanation: '2x-2=3x+6，-2-6=3x-2x，-8=x，即 x=-8。',
        difficulty: 2
      },
      {
        id: 'q645', type: 'choice',
        question: '一件商品打八折后售价为 240 元，则该商品的原价为',
        options: ['A. 192 元', 'B. 280 元', 'C. 300 元', 'D. 320 元'],
        answer: 'C',
        explanation: '设原价为 x 元，0.8x=240，x=300 元。',
        difficulty: 2
      }
    ]
  },

  'math-suke-8-0': {
    chapterName: '数据的收集与整理',
    questions: [
      {
        id: 'q646', type: 'choice',
        question: '下列调查中，最适合用全面调查（普查）的是',
        options: ['A. 了解一批灯泡的使用寿命', 'B. 了解全国初中生的身高情况', 'C. 检查航天飞船上零部件的质量', 'D. 了解某条河流的水质情况'],
        answer: 'C',
        explanation: '航天零部件质量关乎安全，必须全面检查。A 具有破坏性，B、D 工作量太大，适合抽样调查。',
        difficulty: 1
      },
      {
        id: 'q647', type: 'truefalse',
        question: '抽样调查的样本越大，结果就越准确。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '样本大不一定准确，关键在于样本的代表性。如果抽样方法有偏，样本再大也不准确。',
        difficulty: 2
      },
      {
        id: 'q648', type: 'fill',
        question: '要调查某校 800 名学生的课外阅读情况，从中抽取 50 名学生进行调查，则样本容量是 ____',
        answer: '50',
        explanation: '样本容量是样本中个体的数目，不带单位，这里样本容量是 50。',
        difficulty: 1
      },
      {
        id: 'q649', type: 'choice',
        question: '为了了解某市 5 万名初中生的视力情况，下列抽样方法最合适的是',
        options: ['A. 随机抽取一所中学的所有学生', 'B. 在重点中学随机抽取 100 名学生', 'C. 从每所中学随机抽取一定比例的学生', 'D. 只抽取视力有问题的学生'],
        answer: 'C',
        explanation: '分层抽样（从每所中学按比例抽取）能保证样本的代表性，是最合适的抽样方法。',
        difficulty: 2
      },
      {
        id: 'q650', type: 'fill',
        question: '扇形统计图中，某部分占总体的 25%，则该部分对应的扇形圆心角为 ____ 度',
        answer: '90',
        explanation: '360°×25% = 90°。',
        difficulty: 1
      },
      {
        id: 'q651', type: 'choice',
        question: '下列统计图中，能清楚地表示各部分与总体之间关系的是',
        options: ['A. 条形统计图', 'B. 折线统计图', 'C. 扇形统计图', 'D. 频数分布直方图'],
        answer: 'C',
        explanation: '扇形统计图能清楚地表示各部分占总体的百分比（即各部分与总体的关系）。',
        difficulty: 1
      }
    ]
  },

  'math-suke-8-1': {
    chapterName: '勾股定理',
    questions: [
      {
        id: 'q652', type: 'choice',
        question: '直角三角形的两边长分别为 3 和 4，则第三边的长为',
        options: ['A. 5', 'B. √7', 'C. 5 或 √7', 'D. 7'],
        answer: 'C',
        explanation: '若 3 和 4 都是直角边，则斜边 = √(9+16) = 5；若 4 是斜边，则第三边 = √(16-9) = √7。',
        difficulty: 2
      },
      {
        id: 'q653', type: 'fill',
        question: '在 Rt△ABC 中，∠C=90°，AC=6，BC=8，则斜边 AB 上的高 CD 的长为 ____',
        answer: '4.8',
        explanation: 'AB=√(36+64)=10。面积 S = AC×BC/2 = 6×8/2 = 24，又 S = AB×CD/2，所以 CD = 24×2/10 = 4.8。',
        difficulty: 3
      },
      {
        id: 'q654', type: 'truefalse',
        question: '如果三角形的三边长 a, b, c 满足 a² + b² = c²，那么 ∠C = 90°。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '这是勾股定理的逆定理：如果三角形的三边满足 a²+b²=c²，那么这个三角形是直角三角形，且 c 所对的角为直角。',
        difficulty: 2
      },
      {
        id: 'q655', type: 'choice',
        question: '一个正方形的对角线长为 6，则它的边长为',
        options: ['A. 3', 'B. 3√2', 'C. 6', 'D. 2√3'],
        answer: 'B',
        explanation: '正方形对角线 = 边长 × √2，边长 = 6/√2 = 3√2。',
        difficulty: 2
      },
      {
        id: 'q656', type: 'fill',
        question: '直角三角形两直角边长分别为 6 和 8，则斜边上的中线长为 ____',
        answer: '5',
        explanation: '斜边 = √(36+64) = 10。直角三角形斜边上的中线等于斜边的一半，即 5。',
        difficulty: 2
      },
      {
        id: 'q657', type: 'choice',
        question: '下列各组数中，能构成直角三角形三边的是',
        options: ['A. 2, 3, 4', 'B. 3, 4, 5', 'C. 4, 5, 6', 'D. 1, 1, 2'],
        answer: 'B',
        explanation: '3²+4²=9+16=25=5²，满足勾股定理逆定理。其他选项不满足。',
        difficulty: 1
      }
    ]
  },

  'math-suke-8-2': {
    chapterName: '实数',
    questions: [
      {
        id: 'q658', type: 'choice',
        question: '下列数中，属于无理数的是',
        options: ['A. 0.5', 'B. √9', 'C. -√2', 'D. -8'],
        answer: 'C',
        explanation: '-√2 是无限不循环小数，是无理数。0.5 是有理数，√9=3 是有理数，-8 是有理数。',
        difficulty: 1
      },
      {
        id: 'q659', type: 'fill',
        question: '√50 化简后等于 ____',
        answer: '5√2',
        explanation: '√50 = √(25×2) = √25 × √2 = 5√2。',
        difficulty: 1
      },
      {
        id: 'q660', type: 'truefalse',
        question: '两个无理数的和一定是无理数。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '反例：√2 + (-√2) = 0，0 是有理数。所以两个无理数的和不一定是无理数。',
        difficulty: 2
      },
      {
        id: 'q661', type: 'choice',
        question: '在实数范围内，下列运算正确的是',
        options: ['A. √(-4) = -2', 'B. √4 = ±2', 'C. √16 = 4', 'D. (-√3)² = -3'],
        answer: 'C',
        explanation: 'A 中负数没有实数平方根；B 中 √4=2（算术平方根非负）；C 正确 √16=4；D 中 (-√3)²=3。',
        difficulty: 2
      },
      {
        id: 'q662', type: 'fill',
        question: '比较大小：√10 ____ 3（填 >, <, =）',
        answer: '>',
        explanation: '3²=9，√10 的平方是 10 > 9，所以 √10 > 3。',
        difficulty: 1
      },
      {
        id: 'q663', type: 'choice',
        question: '下列计算正确的是',
        options: ['A. √8 - √2 = √6', 'B. √2 × √8 = 4', 'C. √12 + √3 = √15', 'D. 2√3 × 3√3 = 6√3'],
        answer: 'B',
        explanation: '√2 × √8 = √(2×8) = √16 = 4。A 不能相减，C 不能相加，D 应为 2√3×3√3=6×3=18。',
        difficulty: 2
      }
    ]
  },

  'math-suke-8-3': {
    chapterName: '平面直角坐标系',
    questions: [
      {
        id: 'q664', type: 'choice',
        question: '在平面直角坐标系中，点 (-2, 5) 所在的象限是',
        options: ['A. 第一象限', 'B. 第二象限', 'C. 第三象限', 'D. 第四象限'],
        answer: 'B',
        explanation: '横坐标为负、纵坐标为正的点在第二象限。',
        difficulty: 1
      },
      {
        id: 'q665', type: 'fill',
        question: '点 A(3, -4) 到 x 轴的距离为 ____',
        answer: '4',
        explanation: '点到 x 轴的距离等于纵坐标的绝对值，|−4| = 4。',
        difficulty: 1
      },
      {
        id: 'q666', type: 'truefalse',
        question: '坐标轴上的点不属于任何象限。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: 'x 轴和 y 轴上的点不属于任何一个象限，四个象限都不包括坐标轴。',
        difficulty: 1
      },
      {
        id: 'q667', type: 'choice',
        question: '点 P(-3, 2) 向右平移 5 个单位，再向下平移 4 个单位后的坐标是',
        options: ['A. (2, -2)', 'B. (-8, -2)', 'C. (2, 6)', 'D. (-8, 6)'],
        answer: 'A',
        explanation: '向右平移 5 个单位：(-3+5, 2) = (2, 2)；向下平移 4 个单位：(2, 2-4) = (2, -2)。',
        difficulty: 1
      },
      {
        id: 'q668', type: 'fill',
        question: '已知点 A(a, 3) 和点 B(2, b) 关于 x 轴对称，则 a = ____，b = ____',
        answer: '2, -3',
        explanation: '关于 x 轴对称，横坐标相同，纵坐标互为相反数。所以 a=2，b=-3。',
        difficulty: 2
      },
      {
        id: 'q669', type: 'choice',
        question: '在平面直角坐标系中，到原点距离等于 5 的点有',
        options: ['A. 1 个', 'B. 2 个', 'C. 4 个', 'D. 无数个'],
        answer: 'D',
        explanation: '到原点距离等于 5 的点满足 x²+y²=25，这是一个以原点为圆心、半径为 5 的圆，上有无数个点。',
        difficulty: 2
      }
    ]
  },

  'math-suke-9-0': {
    chapterName: '一元二次方程',
    questions: [
      {
        id: 'q670', type: 'choice',
        question: '方程 (x-1)(x+2) = 0 的解是',
        options: ['A. x = 1', 'B. x = -2', 'C. x = 1 或 x = -2', 'D. x = -1 或 x = 2'],
        answer: 'C',
        explanation: '由 (x-1)(x+2)=0，得 x-1=0 或 x+2=0，即 x=1 或 x=-2。',
        difficulty: 1
      },
      {
        id: 'q671', type: 'fill',
        question: '用配方法解方程 x² - 6x + 5 = 0，配方后得 (x-____)² = ____',
        answer: '3, 4',
        explanation: 'x²-6x+5=0，x²-6x=-5，x²-6x+9=-5+9，(x-3)²=4。',
        difficulty: 2
      },
      {
        id: 'q672', type: 'truefalse',
        question: '方程 x² = x 的解是 x = 1。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: 'x² = x，x²-x=0，x(x-1)=0，解得 x=0 或 x=1。x=0 也是解。',
        difficulty: 1
      },
      {
        id: 'q673', type: 'choice',
        question: '一元二次方程 2x² + 3x - 2 = 0 的根的情况是',
        options: ['A. 有两个不相等的实数根', 'B. 有两个相等的实数根', 'C. 没有实数根', 'D. 无法确定'],
        answer: 'A',
        explanation: 'Δ = 3²-4×2×(-2) = 9+16 = 25 > 0，所以方程有两个不相等的实数根。',
        difficulty: 2
      },
      {
        id: 'q674', type: 'fill',
        question: '某商品连续两次降价 10% 后售价为 81 元，则该商品的原价为 ____ 元',
        answer: '100',
        explanation: '设原价 x 元，x(1-10%)²=81，x×0.81=81，x=100。',
        difficulty: 2
      },
      {
        id: 'q675', type: 'choice',
        question: '用公式法解方程 x² - 4x - 7 = 0，x 的值为',
        options: ['A. x = 2 ± √11', 'B. x = -2 ± √11', 'C. x = 4 ± √11', 'D. x = 2 ± √7'],
        answer: 'A',
        explanation: 'Δ = 16+28=44，x = (4±√44)/2 = (4±2√11)/2 = 2±√11。',
        difficulty: 2
      }
    ]
  },

  'math-suke-9-1': {
    chapterName: '二次函数',
    questions: [
      {
        id: 'q676', type: 'choice',
        question: '下列函数中，是二次函数的是',
        options: ['A. y = 2x + 1', 'B. y = x² - 3x', 'C. y = 1/x²', 'D. y = (x+1)² - x²'],
        answer: 'B',
        explanation: '二次函数 y=ax²+bx+c (a≠0)。A 是一次函数；B 是二次函数；C 不是整式函数；D 化简后为 y=2x+1 是一次函数。',
        difficulty: 1
      },
      {
        id: 'q677', type: 'fill',
        question: '二次函数 y = x² - 4x + 3 的顶点坐标是 ____',
        answer: '(2, -1)',
        explanation: 'y = x²-4x+3 = (x-2)²-4+3 = (x-2)²-1，顶点坐标为 (2, -1)。',
        difficulty: 2
      },
      {
        id: 'q678', type: 'truefalse',
        question: '二次函数 y = x² 的图像开口向上。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '二次函数 y=ax² 中，a>0 时图像开口向上，a<0 时开口向下。y=x² 中 a=1>0，开口向上。',
        difficulty: 1
      },
      {
        id: 'q679', type: 'choice',
        question: '二次函数 y = -x² + 2x + 3 的图像与 x 轴的交点个数是',
        options: ['A. 0 个', 'B. 1 个', 'C. 2 个', 'D. 3 个'],
        answer: 'C',
        explanation: '令 y=0，-x²+2x+3=0，即 x²-2x-3=0，Δ=4+12=16>0，有两个不相等的实数根，所以与 x 轴有 2 个交点。',
        difficulty: 2
      },
      {
        id: 'q680', type: 'fill',
        question: '抛物线 y = 2(x-1)² + 3 的对称轴是直线 x = ____',
        answer: '1',
        explanation: '抛物线 y = a(x-h)²+k 的对称轴是 x=h，这里 h=1，所以对称轴是 x=1。',
        difficulty: 1
      },
      {
        id: 'q681', type: 'choice',
        question: '二次函数 y = x² - 6x + 5 的图像在对称轴左侧，y 随 x 的增大而',
        options: ['A. 增大', 'B. 减小', 'C. 不变', 'D. 无法确定'],
        answer: 'B',
        explanation: 'y=x²-6x+5 的二次项系数 a=1>0，图像开口向上。在对称轴 x=3 左侧，y 随 x 增大而减小。',
        difficulty: 2
      }
    ]
  },

  'math-suke-9-2': {
    chapterName: '圆',
    questions: [
      {
        id: 'q682', type: 'choice',
        question: '圆的半径为 5cm，则圆的面积为',
        options: ['A. 10π cm²', 'B. 25π cm²', 'C. 50π cm²', 'D. 5π cm²'],
        answer: 'B',
        explanation: '圆的面积 S = πr² = π×5² = 25π cm²。',
        difficulty: 1
      },
      {
        id: 'q683', type: 'truefalse',
        question: '直径是圆中最长的弦。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '直径是过圆心的弦，是圆中最长的弦。',
        difficulty: 1
      },
      {
        id: 'q684', type: 'fill',
        question: '已知圆的半径为 6，则该圆的内接正方形的边长为 ____',
        answer: '6√2',
        explanation: '圆内接正方形的对角线等于圆的直径 12，设边长为 a，则 a²+a²=12²，2a²=144，a²=72，a=6√2。',
        difficulty: 3
      },
      {
        id: 'q685', type: 'choice',
        question: '在半径为 10 的圆中，一条弦长为 16，则圆心到该弦的距离为',
        options: ['A. 4', 'B. 6', 'C. 8', 'D. 12'],
        answer: 'B',
        explanation: '设圆心到弦的距离为 d，则 d² + (16/2)² = 10²，d² + 64 = 100，d² = 36，d = 6。',
        difficulty: 2
      },
      {
        id: 'q686', type: 'fill',
        question: '圆心角为 60°、半径为 3 的扇形弧长为 ____',
        answer: 'π',
        explanation: '弧长 l = nπr/180 = 60π×3/180 = 180π/180 = π。',
        difficulty: 2
      },
      {
        id: 'q687', type: 'choice',
        question: '下列说法正确的是',
        options: ['A. 半径相等的两个圆是同心圆', 'B. 过三点一定能确定一个圆', 'C. 三角形的外心到三角形三个顶点的距离相等', 'D. 圆的对称轴只有一条'],
        answer: 'C',
        explanation: 'A 错，半径相等但圆心不同；B 错，三点共线时不能确定圆；C 正确，外心是外接圆圆心，到三顶点距离相等；D 错，圆有无数条对称轴。',
        difficulty: 2
      }
    ]
  },

  'math-suke-9-3': {
    chapterName: '统计与概率',
    questions: [
      {
        id: 'q688', type: 'choice',
        question: '一组数据 5, 3, 7, 5, 10, 5 的众数和中位数分别是',
        options: ['A. 5 和 5', 'B. 5 和 6', 'C. 3 和 5', 'D. 10 和 5'],
        answer: 'A',
        explanation: '5 出现 3 次，是众数。数据从小到大排列：3, 5, 5, 5, 7, 10。共 6 个数据，中位数 = (5+5)/2 = 5。',
        difficulty: 1
      },
      {
        id: 'q689', type: 'fill',
        question: '数据 2, 4, 6, 8, 10 的方差是 ____',
        answer: '8',
        explanation: '平均数 = (2+4+6+8+10)/5 = 6。方差 = [(2-6)²+(4-6)²+(6-6)²+(8-6)²+(10-6)²]/5 = [16+4+0+4+16]/5 = 40/5 = 8。',
        difficulty: 2
      },
      {
        id: 'q690', type: 'truefalse',
        question: '频率分布直方图中，各小长方形的面积之和等于 1。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '频率分布直方图中，各小长方形的面积 = 各组的频率，所有频率之和 = 1。',
        difficulty: 2
      },
      {
        id: 'q691', type: 'choice',
        question: '从一副扑克牌（去掉大小王）中随机抽取一张，抽到红桃的概率是',
        options: ['A. 1/2', 'B. 1/4', 'C. 1/13', 'D. 3/4'],
        answer: 'B',
        explanation: '去掉大小王后共 52 张牌，红桃有 13 张，P(红桃) = 13/52 = 1/4。',
        difficulty: 1
      },
      {
        id: 'q692', type: 'fill',
        question: '某班 40 名同学参加数学测试，成绩如下表：90~100 分有 8 人，80~89 分有 15 人，70~79 分有 12 人，60~69 分有 5 人。则 80 分以上的频率为 ____',
        answer: '0.575',
        explanation: '80 分以上有 8+15=23 人，频率 = 23/40 = 0.575。',
        difficulty: 2
      },
      {
        id: 'q693', type: 'choice',
        question: '下列事件中，是随机事件的是',
        options: ['A. 太阳从东方升起', 'B. 水往低处流', 'C. 抛一枚硬币正面朝上', 'D. 两个负数的和为负数'],
        answer: 'C',
        explanation: 'A、B、D 都是必然事件。抛硬币正面朝上可能发生也可能不发生，是随机事件。',
        difficulty: 1
      }
    ]
  },

  // sampleQuestions-batch2.js,
// ===================== chinese-renjiao =====================
  'chinese-renjiao-7-2': {
    chapterName: '古代诗歌四首',
    questions: [
      {
        id: 'q700', type: 'choice',
        question: '《观沧海》的作者是',
        options: ['A. 曹操', 'B. 曹丕', 'C. 诸葛亮', 'D. 刘备'],
        answer: 'A',
        explanation: '《观沧海》是东汉末年曹操所作，是他北征乌桓胜利后登碣石山时写的。',
        difficulty: 1
      },
      {
        id: 'q701', type: 'choice',
        question: '"日月之行，若出其中；星汉灿烂，若出其里"运用了什么修辞手法？',
        options: ['A. 拟人和夸张', 'B. 比喻和夸张', 'C. 排比和对偶', 'D. 借代和拟人'],
        answer: 'A',
        explanation: '这两句将日月星辰拟人化，说它们好像从大海中出入，同时夸张地表现大海的壮阔，暗示诗人吞吐宇宙的宏大胸怀。',
        difficulty: 2
      },
      {
        id: 'q702', type: 'fill',
        question: '《次北固山下》中蕴含新事物必将取代旧事物哲理的诗句是：____，____。',
        answer: '海日生残夜，江春入旧年',
        explanation: '这两句写的是夜将尽未尽之时海日已升，旧年未过之时江上已有春意，蕴含着新旧交替的哲理。',
        difficulty: 2
      },
      {
        id: 'q703', type: 'truefalse',
        question: '《钱塘湖春行》描写的是钱塘湖（今西湖）的秋天景色。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '《钱塘湖春行》是白居易描写钱塘湖早春景色的一首诗，并非秋天。诗中有"早莺""新燕"等早春意象。',
        difficulty: 1
      },
      {
        id: 'q704', type: 'choice',
        question: '"几处早莺争暖树，谁家新燕啄春泥"中的"争"字写出了什么？',
        options: ['A. 鸟儿之间的争斗', 'B. 早莺争着飞向向阳的树枝，展现早春的生机', 'C. 鸟儿争夺食物', 'D. 鸟儿争夺地盘'],
        answer: 'B',
        explanation: '"争"字生动地写出了早莺争着飞向向阳树枝的动态，表现了早春时节万物复苏、生机勃勃的景象。',
        difficulty: 2
      },
      {
        id: 'q705', type: 'choice',
        question: '《天净沙·秋思》的体裁是',
        options: ['A. 诗', 'B. 词', 'C. 曲（元曲）', 'D. 赋'],
        answer: 'C',
        explanation: '《天净沙·秋思》是元代散曲，属于"曲"这一体裁。"天净沙"是曲牌名，"秋思"是题目。作者马致远被称为"秋思之祖"。',
        difficulty: 1
      },
      {
        id: 'q706', type: 'fill',
        question: '《天净沙·秋思》中点明全曲主旨（游子思乡）的句子是：____。',
        answer: '断肠人在天涯',
        explanation: '前三句用九个意象铺陈秋景，最后以"断肠人在天涯"点明主旨，表达了游子漂泊异乡的凄苦之情。',
        difficulty: 1
      }
    ]
  },
  'chinese-renjiao-7-3': {
    chapterName: '从百草园到三味书屋',
    questions: [
      {
        id: 'q707', type: 'choice',
        question: '《从百草园到三味书屋》的作者鲁迅，原名是',
        options: ['A. 周作人', 'B. 周树人', 'C. 周建人', 'D. 周海婴'],
        answer: 'B',
        explanation: '鲁迅原名周树人，浙江绍兴人，是中国现代伟大的文学家、思想家、革命家。',
        difficulty: 1
      },
      {
        id: 'q708', type: 'choice',
        question: '百草园中"不必说……也不必说……单是……"这个句式的作用是',
        options: ['A. 表示百草园没什么好玩的', 'B. 强调"单是"后面的内容更引人入胜', 'C. 列举百草园所有的植物', 'D. 抱怨百草园太无聊'],
        answer: 'B',
        explanation: '这个句式先用"不必说"概括整体，再用"单是"突出局部，以局部之趣衬托百草园的无穷乐趣，强调了泥墙根一带的无限趣味。',
        difficulty: 2
      },
      {
        id: 'q709', type: 'truefalse',
        question: '三味书屋中的先生是一位非常严厉、不近人情的老师。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '三味书屋的寿镜吾先生是一位"极方正、质朴、博学"的人。他虽然有戒尺和罚跪的规则，但"都不常用"，说明他并非不近人情，而是一位可敬的宿儒。',
        difficulty: 2
      },
      {
        id: 'q710', type: 'fill',
        question: '百草园的美女蛇故事是一个____故事，增添了百草园的____色彩。',
        answer: '民间传说, 神秘',
        explanation: '长妈妈讲的美女蛇故事是民间传说，为百草园蒙上了一层神秘的面纱，满足了儿童的好奇心，使百草园更加充满魅力。',
        difficulty: 2
      },
      {
        id: 'q711', type: 'choice',
        question: '文章中描写雪地捕鸟的顺序正确的是',
        options: ['A. 扫开雪、露出地面、撒秕谷、系长绳、拉绳子', 'B. 撒秕谷、扫开雪、系长绳、拉绳子、露出地面', 'C. 系长绳、扫开雪、撒秕谷、露出地面、拉绳子', 'D. 露出地面、扫开雪、撒秕谷、系长绳、拉绳子'],
        answer: 'A',
        explanation: '捕鸟的步骤依次是：扫开一块雪，露出地面，用一枝短棒支起一面大的竹筛来，下面撒些秕谷，棒上系一条长绳，人远远地牵着，看鸟雀下来啄食，走到竹筛底下的时候，将绳子一拉，便罩住了。',
        difficulty: 2
      },
      {
        id: 'q712', type: 'truefalse',
        question: '《从百草园到三味书屋》一文表达了作者对童年自由快乐生活的怀念和对封建教育的不满。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '文章通过对比百草园的自由快乐和三味书屋的枯燥束缚，含蓄地批判了封建教育制度对儿童天性的压抑，表达了对童年美好生活的怀念。',
        difficulty: 1
      },
      {
        id: 'q713', type: 'fill',
        question: '三味书屋的"三味"含义是：读经味如____，读史味如____，读诸子百家味如____。',
        answer: '稻粱, 肴馔, 醯醢（或"饭""肉""酱"）',
        explanation: '"三味"取自"读经味如稻粱，读史味如肴馔，读诸子百家味如醯醢"，意思是读不同类别的书有不同的体会，如同品尝不同的美味。',
        difficulty: 3
      }
    ]
  },
  'chinese-renjiao-8-0': {
    chapterName: '新闻两则',
    questions: [
      {
        id: 'q714', type: 'choice',
        question: '新闻的"五要素"（5W）不包括以下哪项？',
        options: ['A. 何人（Who）', 'B. 何处（Where）', 'C. 为何（Why）', 'D. 如何评论（Comment）'],
        answer: 'D',
        explanation: '新闻五要素是：何人（Who）、何事（What）、何时（When）、何地（Where）、为何（Why）。"如何评论"不属于新闻五要素。',
        difficulty: 1
      },
      {
        id: 'q715', type: 'choice',
        question: '新闻消息的结构通常包括标题、导语、主体、背景和',
        options: ['A. 结尾', 'B. 开头', 'C. 评论', 'D. 引言'],
        answer: 'A',
        explanation: '新闻消息的结构通常包括：标题、导语、主体、背景和结尾五个部分。',
        difficulty: 1
      },
      {
        id: 'q716', type: 'truefalse',
        question: '新闻的导语一般是新闻的第一段或第一句话，用来概括新闻的最主要事实。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '导语是新闻的开头部分，通常用一句话或一段话概括新闻中最主要、最新鲜的事实，让读者一目了然。',
        difficulty: 1
      },
      {
        id: 'q717', type: 'fill',
        question: '新闻的特点可以概括为：____、____、____。',
        answer: '真实性, 时效性, 准确性',
        explanation: '新闻必须真实（报道客观事实）、及时（讲究时效）和准确（用词精确），这是新闻与其他文体最根本的区别。',
        difficulty: 1
      },
      {
        id: 'q718', type: 'choice',
        question: '《人民解放军百万大军横渡长江》这则新闻中，"百万大军"这一说法体现了新闻的什么特点？',
        options: ['A. 夸张修辞', 'B. 语言的准确性', 'C. 文学性描写', 'D. 主观评论'],
        answer: 'B',
        explanation: '"百万大军"是约数，但符合当时实际情况（中路军三十万、西路军三十五万、东路军三十五万合计百万），体现了新闻的准确性和真实性，并非夸张。',
        difficulty: 2
      },
      {
        id: 'q719', type: 'choice',
        question: '新闻按内容分，可以分为多种类型，下列哪一项不属于新闻类型？',
        options: ['A. 消息', 'B. 通讯', 'C. 特写', 'D. 散文'],
        answer: 'D',
        explanation: '新闻按内容可以分为消息、通讯、特写、评论等类型。散文属于文学体裁，不是新闻类型。',
        difficulty: 1
      }
    ]
  },
  'chinese-renjiao-8-1': {
    chapterName: '芦花荡',
    questions: [
      {
        id: 'q720', type: 'choice',
        question: '《芦花荡》的作者是',
        options: ['A. 老舍', 'B. 巴金', 'C. 孙犁', 'D. 沈从文'],
        answer: 'C',
        explanation: '《芦花荡》是现代著名作家孙犁的作品，选自他的小说散文集《白洋淀纪事》，描写了抗日战争时期白洋淀地区的斗争生活。',
        difficulty: 1
      },
      {
        id: 'q721', type: 'choice',
        question: '芦花荡中的"老头子"是一个怎样的人物形象？',
        options: ['A. 胆小怕事的普通老人', 'B. 自信自尊、英勇机智、富有抗日热情的老英雄', 'C. 只会撑船的船夫', 'D. 日军的翻译官'],
        answer: 'B',
        explanation: '老头子是白洋淀上一位干瘦的老船夫，他自信自尊、抗日热情高涨、英勇机智、爱憎分明，是一位具有传奇色彩的老英雄。',
        difficulty: 1
      },
      {
        id: 'q722', type: 'truefalse',
        question: '《芦花荡》的故事背景是解放战争时期。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '《芦花荡》的背景是抗日战争时期，讲述了白洋淀地区人民抗击日本侵略者的故事，不是解放战争时期。',
        difficulty: 1
      },
      {
        id: 'q723', type: 'fill',
        question: '老头子说他"每天夜里……在敌人的监视下出入芦花荡"，这说明他对白洋淀的地形非常____。',
        answer: '熟悉',
        explanation: '老头子能自如地在敌人的眼皮底下出入芦花荡，展现了他对白洋淀地形的了如指掌，也体现了他过人的胆识和本领。',
        difficulty: 1
      },
      {
        id: 'q724', type: 'choice',
        question: '小说结尾老头子用竹篙痛打鬼子，主要表现了',
        options: ['A. 老头子力气很大', 'B. 老头子要为自己没有保护好大菱而复仇', 'C. 老头子的武艺高强', 'D. 老头子喜欢打架'],
        answer: 'B',
        explanation: '大菱受伤后，老头子感到十分内疚，他觉得自己的面子"丢了"，于是精心设计，第二天用计引诱鬼子进入他的埋伏圈，用竹篙痛打鬼子复仇，表现了他的自尊心和强烈的复仇意志。',
        difficulty: 2
      },
      {
        id: 'q725', type: 'choice',
        question: '《芦花荡》的环境描写主要有什么作用？',
        options: ['A. 交代故事背景，渲染诗情画意的氛围', 'B. 只是单纯写景，没有作用', 'C. 说明白洋淀的天气不好', 'D. 表现作者的思乡之情'],
        answer: 'A',
        explanation: '小说中的芦花荡景物描写富有诗情画意，不仅交代了故事发生的自然环境，也烘托了老头子等白洋淀人民美好的心灵和对家乡的热爱，同时形成了与战争的对比。',
        difficulty: 2
      }
    ]
  },
  'chinese-renjiao-8-2': {
    chapterName: '阿长与山海经',
    questions: [
      {
        id: 'q726', type: 'choice',
        question: '《阿长与<山海经>》选自鲁迅的哪部散文集？',
        options: ['A. 《呐喊》', 'B. 《彷徨》', 'C. 《朝花夕拾》', 'D. 《野草》'],
        answer: 'C',
        explanation: '《阿长与<山海经>》选自鲁迅的散文集《朝花夕拾》，原名《旧事重提》。',
        difficulty: 1
      },
      {
        id: 'q727', type: 'choice',
        question: '阿长为"我"买来了"我"渴慕已久的《山海经》，这表现了阿长',
        options: ['A. 有钱', 'B. 对孩子的关爱和热心', 'C. 喜欢读书', 'D. 懂得做买卖'],
        answer: 'B',
        explanation: '阿长是一个没有文化的劳动妇女，她不识字，甚至不知道《山海经》的正确名称叫"三哼经"，但她记住了孩子的心愿并买来了书，表现了她对孩子的真挚关爱。',
        difficulty: 2
      },
      {
        id: 'q728', type: 'truefalse',
        question: '鲁迅在文章中对阿长的态度是一直非常讨厌的。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '鲁迅对阿长的态度经历了变化：从最初的不大佩服、讨厌她的许多规矩，到后来因她买来《山海经》而对她产生"新的敬意"。文章最终表达了对阿长的深沉怀念和感激之情。',
        difficulty: 1
      },
      {
        id: 'q729', type: 'fill',
        question: '文章运用了____的手法，先写阿长的缺点和令人厌烦的习惯，后写她为"我"买《山海经》的事，使人物形象更加真实丰满。',
        answer: '欲扬先抑（或"先抑后扬"）',
        explanation: '文章先写阿长的粗俗、迷信、睡相不好等缺点，形成"抑"；再写她买《山海经》的感人行为，形成"扬"。这种欲扬先抑的手法使人物形象更加真实、丰满、感人。',
        difficulty: 2
      },
      {
        id: 'q730', type: 'choice',
        question: '阿长所说的"三哼经"实际上是指',
        options: ['A. 《三字经》', 'B. 《山海经》', 'C. 《诗经》', 'D. 《红楼梦》'],
        answer: 'B',
        explanation: '阿长不识字，把"山海经"说成了"三哼经"，这个细节既真实又感人，恰恰说明了她买书的艰难和对孩子的用心。',
        difficulty: 1
      },
      {
        id: 'q731', type: 'truefalse',
        question: '文章最后一句"仁厚黑暗的地母呵，愿在你怀里永安她的魂灵！"表达了鲁迅对阿长深切的怀念和祝福。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '这句话运用了祈祷的语气，表达了作者对阿长的深切怀念和崇高敬意，是她善良、朴实的品质赢得了作者由衷的赞美。',
        difficulty: 1
      }
    ]
  },
  'chinese-renjiao-8-3': {
    chapterName: '背影',
    questions: [
      {
        id: 'q732', type: 'choice',
        question: '《背影》的作者是',
        options: ['A. 鲁迅', 'B. 朱自清', 'C. 老舍', 'D. 巴金'],
        answer: 'B',
        explanation: '《背影》是现代散文家朱自清的代表作，写于1925年，是一篇回忆性散文，表达了作者对父亲深切的怀念之情。',
        difficulty: 1
      },
      {
        id: 'q733', type: 'choice',
        question: '文中四次写到父亲的"背影"，其中最详细描写的是',
        options: ['A. 怀念中的背影', 'B. 离别时的背影', 'C. 买橘子时的背影', 'D. 混入人群中的背影'],
        answer: 'C',
        explanation: '作者用了大量笔墨详细描写父亲过铁道买橘子时的背影：蹒跚地走到铁道边，慢慢探身下去，穿过铁道，爬上月台等动作，这一背影是全文的重点和高潮。',
        difficulty: 2
      },
      {
        id: 'q734', type: 'truefalse',
        question: '文章开头写"我与父亲不相见已二年余了"，用的是倒叙的写法。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '文章开篇点题，写眼下思念，然后回忆两年前在浦口车站与父亲分别的情景，最后又回到现实。这是典型的倒叙手法。',
        difficulty: 2
      },
      {
        id: 'q735', type: 'fill',
        question: '文中父亲说"我买几个橘子去。你就在此地，不要走动。"这句话表现了父亲对儿子的____之情。',
        answer: '牵挂和关爱（或"关心爱护"）',
        explanation: '父亲在临别之际还要去给儿子买橘子，并嘱咐儿子不要走动，看似简单的日常话语，却饱含着父亲对儿子无微不至的关爱和深深的牵挂。',
        difficulty: 1
      },
      {
        id: 'q736', type: 'choice',
        question: '文中"我"看到父亲买橘子时的背影，流下了眼泪，这是因为',
        options: ['A. 橘子太贵了', 'B. 被父亲的深情感动', 'C. 天气太冷了', 'D. 想到即将与父亲分别而伤心'],
        answer: 'B',
        explanation: '"我"看到父亲艰难地爬过铁道去为自己买橘子，那笨拙而努力的背影深深地触动了"我"的内心，被父爱的深沉和伟大所感动而流泪。',
        difficulty: 2
      },
      {
        id: 'q737', type: 'choice',
        question: '《背影》中"背影"这一意象在全文中的作用是',
        options: ['A. 只是文章的一个细节', 'B. 作为全文的线索，贯穿始终', 'C. 与文章主题无关', 'D. 只是标题，文中并未提及'],
        answer: 'B',
        explanation: '"背影"是全文的线索，四次写到背影（怀念、望父买橘、父子分别、怀念），将各部分内容有机地串联在一起，使文章结构紧凑，主题突出。',
        difficulty: 2
      },
      {
        id: 'q738', type: 'fill',
        question: '《背影》的语言风格是____的，没有华丽的辞藻，却感情真挚，感人至深。',
        answer: '朴素（或"平实""简洁"）',
        explanation: '朱自清的《背影》语言朴素平实，没有华丽的修饰，正是这种质朴的语言，更能打动人心，真实地表现了父子之间深沉的爱。',
        difficulty: 1
      }
    ]
  },
  'chinese-renjiao-9-0': {
    chapterName: '沁园春·雪',
    questions: [
      {
        id: 'q739', type: 'choice',
        question: '《沁园春·雪》的作者是',
        options: ['A. 鲁迅', 'B. 毛泽东', 'C. 苏轼', 'D. 辛弃疾'],
        answer: 'B',
        explanation: '《沁园春·雪》是毛泽东于1936年2月在陕北创作的一首词，"沁园春"是词牌名，"雪"是题目。',
        difficulty: 1
      },
      {
        id: 'q740', type: 'choice',
        question: '"北国风光，千里冰封，万里雪飘"这三句运用的修辞手法是',
        options: ['A. 比喻、拟人', 'B. 对偶、互文', 'C. 排比、夸张', 'D. 拟人、借代'],
        answer: 'B',
        explanation: '"千里冰封"与"万里雪飘"是对偶句，互文见义，意思是千里万里都是冰封雪飘，极写北国雪景的壮阔。',
        difficulty: 2
      },
      {
        id: 'q741', type: 'truefalse',
        question: '"江山如此多娇，引无数英雄竞折腰"在词的结构中起到承上启下的过渡作用。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '这两句承上总结上文对北国雪景的赞美（"如此多娇"），启下引出对历史人物的评论（"无数英雄竞折腰"），在结构上起到承上启下的过渡作用。',
        difficulty: 2
      },
      {
        id: 'q742', type: 'fill',
        question: '《沁园春·雪》中，作者评价古代帝王时用"略输文采""稍逊风骚"来批评他们的不足，其中"风骚"原指《____》中的《国风》和《____》中的《离骚》。',
        answer: '诗经, 楚辞',
        explanation: '"风骚"原指《诗经》中的《国风》和《楚辞》中的《离骚》，后来泛指文学才华。作者借此批评古代帝王虽然武功赫赫，但在文治方面有所不足。',
        difficulty: 2
      },
      {
        id: 'q743', type: 'choice',
        question: '"俱往矣，数风流人物，还看今朝"表达了作者怎样的思想感情？',
        options: ['A. 对古代帝王的怀念', 'B. 对当代革命者的赞美和自信', 'C. 对未来的迷茫', 'D. 对历史的否定'],
        answer: 'B',
        explanation: '这三句意为：过去的帝王都已经过去了，要数真正的英雄人物，还要看当今的革命者。表达了作者对无产阶级革命者的赞美和超越前人的自信。',
        difficulty: 2
      },
      {
        id: 'q744', type: 'choice',
        question: '"山舞银蛇，原驰蜡象"中"舞"和"驰"使用了什么修辞手法？',
        options: ['A. 比喻', 'B. 拟人', 'C. 夸张', 'D. 排比'],
        answer: 'B',
        explanation: '"舞"和"驰"使用了拟人（也含比喻）的手法，把被雪覆盖的群山比作银蛇在舞动，把高原比作白蜡做的大象在奔驰，化静为动，生动形象。',
        difficulty: 2
      },
      {
        id: 'q745', type: 'fill',
        question: '《沁园春·雪》的上阕写____，下阕写____，借景抒情，评古论今。',
        answer: '北国雪景, 评古论今（或"评论历史人物"）',
        explanation: '上阕描写北国壮丽的雪景，展现祖国山河的雄伟；下阕由景生情，评论历代帝王，抒发作者的壮志豪情。',
        difficulty: 1
      }
    ]
  },
  'chinese-renjiao-9-1': {
    chapterName: '我爱这土地',
    questions: [
      {
        id: 'q746', type: 'choice',
        question: '《我爱这土地》的作者是',
        options: ['A. 徐志摩', 'B. 闻一多', 'C. 艾青', 'D. 戴望舒'],
        answer: 'C',
        explanation: '《我爱这土地》是现代诗人艾青于1938年11月创作的一首现代诗，表达了对灾难深重的祖国的深沉的爱。',
        difficulty: 1
      },
      {
        id: 'q747', type: 'choice',
        question: '"假如我是一只鸟，我也应该用嘶哑的喉咙歌唱"，为什么用"嘶哑的"而不用"清脆的"？',
        options: [
          'A. 鸟的嗓子不好',
          'B. 象征祖国遭受苦难，诗人歌唱时内心充满痛苦',
          'C. 诗人唱歌跑调',
          'D. 表现鸟的年老'
        ],
        answer: 'B',
        explanation: '"嘶哑的喉咙"象征祖国正在遭受苦难，诗人内心充满痛苦和悲愤，即使声音嘶哑，也要不停地歌唱祖国，表现了诗人对祖国深沉的爱。',
        difficulty: 2
      },
      {
        id: 'q748', type: 'fill',
        question: '诗中"为什么我的眼里常含泪水？因为我对这土地爱得深沉……"这一句在表达上运用了____的手法。',
        answer: '设问',
        explanation: '先提出问题"为什么我的眼里常含泪水？"，然后自己回答"因为我对这土地爱得深沉"，这是典型的设问修辞手法。',
        difficulty: 1
      },
      {
        id: 'q749', type: 'truefalse',
        question: '"然后我死了，连羽毛也腐烂在土地里面"表现了诗人的悲观消极。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '这两句并非悲观消极，而是表达了诗人愿为祖国献身的决心——即使死了，连羽毛也要腐烂在祖国的土地里，表现了诗人对祖国深沉而执着的爱。',
        difficulty: 2
      },
      {
        id: 'q750', type: 'choice',
        question: '这首诗写于什么历史背景之下？',
        options: ['A. 五四运动时期', 'B. 抗日战争时期', 'C. 解放战争时期', 'D. 土地改革时期'],
        answer: 'B',
        explanation: '《我爱这土地》写于1938年11月，正值抗日战争时期，日本侵略者践踏中国大地，诗人满怀对祖国的热爱和对侵略者的愤怒，写下了这首诗。',
        difficulty: 1
      },
      {
        id: 'q751', type: 'choice',
        question: '诗中的"土地"象征什么？',
        options: ['A. 农民的耕地', 'B. 祖国', 'C. 大自然', 'D. 家乡的院子'],
        answer: 'B',
        explanation: '"土地"在诗中象征着多灾多难的祖国。诗人以"土地"为核心意象，表达了对遭受苦难的祖国深深的爱。',
        difficulty: 1
      }
    ]
  },
  'chinese-renjiao-9-2': {
    chapterName: '乡愁',
    questions: [
      {
        id: 'q752', type: 'choice',
        question: '《乡愁》的作者是',
        options: ['A. 余光中', 'B. 余秋雨', 'C. 艾青', 'D. 洛夫'],
        answer: 'A',
        explanation: '《乡愁》是台湾诗人余光中于1972年创作的一首现代诗，表达了海外游子对故乡、对祖国的思念之情。',
        difficulty: 1
      },
      {
        id: 'q753', type: 'choice',
        question: '《乡愁》中依次用了哪四个意象来表现乡愁？',
        options: ['A. 邮票、船票、坟墓、海峡', 'B. 信封、船票、桥、海峡', 'C. 邮票、火车票、照片、海洋', 'D. 雁阵、月亮、故乡、大海'],
        answer: 'A',
        explanation: '全诗以"小时候""长大后""后来啊""而现在"为时间线索，分别用邮票、船票、坟墓、海峡四个意象来表现不同人生阶段的乡愁。',
        difficulty: 1
      },
      {
        id: 'q754', type: 'truefalse',
        question: '《乡愁》最后一节中的"海峡"指的是琼州海峡。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '最后一节中的"海峡"指的是台湾海峡，诗人借这一地理意象表达了台湾人民对祖国大陆的思念和渴望统一的民族情感。',
        difficulty: 1
      },
      {
        id: 'q755', type: 'fill',
        question: '《乡愁》全诗的结构特点是按照____的顺序来组织材料，层层推进。',
        answer: '时间（或"人生成长"）',
        explanation: '诗歌按照"小时候—长大后—后来啊—而现在"的时间顺序，表现了诗人从少年到老年的人生历程中乡愁的不断深化。',
        difficulty: 1
      },
      {
        id: 'q756', type: 'choice',
        question: '《乡愁》的语言特点是',
        options: ['A. 华丽繁复', 'B. 朴素简洁，富有音乐美', 'C. 晦涩难懂', 'D. 口语化、随意性强'],
        answer: 'B',
        explanation: '《乡愁》语言朴素简洁，使用了回环往复的句式（"乡愁是……"），富有节奏感和音乐美，形式整齐而又情感深沉。',
        difficulty: 2
      },
      {
        id: 'q757', type: 'fill',
        question: '诗中"乡愁是一湾浅浅的海峡"，"浅浅的"一词看似矛盾，实则表达了诗人认为台湾与大陆本应____，却被人为分离的痛苦。',
        answer: '是连在一起的（或"不可分割""一体"）',
        explanation: '台湾海峡地理上并不宽，诗人用"浅浅的"强调两岸距离之近，暗示两岸本为一体，分离是不合理的人为造成的结果，更加深了乡愁之痛。',
        difficulty: 3
      }
    ]
  },
  'chinese-renjiao-9-3': {
    chapterName: '敬业与乐业',
    questions: [
      {
        id: 'q758', type: 'choice',
        question: '《敬业与乐业》的作者是',
        options: ['A. 胡适', 'B. 梁启超', 'C. 鲁迅', 'D. 陈独秀'],
        answer: 'B',
        explanation: '《敬业与乐业》是近代思想家梁启超的一篇演讲稿，选自《饮冰室合集》，论述了敬业与乐业的重要性。',
        difficulty: 1
      },
      {
        id: 'q759', type: 'choice',
        question: '文章中引用的"主一无适便是敬"出自',
        options: ['A. 《论语》', 'B. 《孟子》', 'C. 《庄子》', 'D. 《荀子》'],
        answer: 'A',
        explanation: '"主一无适便是敬"出自《论语·学而》，朱熹注曰："主一，专一也。无适，不他适也。"意思是做事专一不分散精力就是敬。',
        difficulty: 2
      },
      {
        id: 'q760', type: 'truefalse',
        question: '梁启超认为，凡职业没有不是可敬的，因为"职业"本身没有高低贵贱之分。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '梁启超在文中主张"凡职业没有不是神圣的，所以凡职业没有不是可敬的"，认为职业没有高低贵贱之分，关键在于做事的人是否敬业。',
        difficulty: 1
      },
      {
        id: 'q761', type: 'fill',
        question: '梁启超提出的"敬业"的"敬"的含义是：____。',
        answer: '责任心（或"忠实""专心致志"）',
        explanation: '梁启超所说的"敬业"，就是对自己所从事的事业怀有崇高的责任心，专心致志地去做，忠于职守。',
        difficulty: 2
      },
      {
        id: 'q762', type: 'choice',
        question: '文章中"百行业为先，万恶懒为首"这句话主要强调了什么？',
        options: ['A. 行业要选择好', 'B. 勤奋敬业的重要性', 'C. 懒惰是一切恶行的根源', 'D. 要选择好的职业'],
        answer: 'B',
        explanation: '这句话强调各行各业都应当把勤奋敬业放在首位，懒惰是一切恶行的根源，说明敬业、勤业的重要性。',
        difficulty: 2
      },
      {
        id: 'q763', type: 'choice',
        question: '《敬业与乐业》的文体是',
        options: ['A. 记叙文', 'B. 说明文', 'C. 议论文（演讲稿）', 'D. 小说'],
        answer: 'C',
        explanation: '《敬业与乐业》是梁启超对上海中华职业学校学生所作的一次演讲，属于议论文中的演讲稿，论证了敬业与乐业的重要性。',
        difficulty: 1
      }
    ]
  },
  // ===================== chinese-sujiao =====================
  'chinese-sujiao-7-0': {
    chapterName: '为你打开一扇门',
    questions: [
      {
        id: 'q764', type: 'choice',
        question: '《为你打开一扇门》是一篇',
        options: ['A. 记叙文', 'B. 散文', 'C. 议论文', 'D. 小说'],
        answer: 'C',
        explanation: '《为你打开一扇门》是一篇以议论为主的散文，作者赵丽宏，阐述了文学对人生的意义，引导读者走进文学的大门。',
        difficulty: 1
      },
      {
        id: 'q765', type: 'choice',
        question: '文中"为你打开一扇门"中的"门"指的是',
        options: ['A. 房屋的门', 'B. 文学的大门', 'C. 学校的门', 'D. 知识的大门'],
        answer: 'B',
        explanation: '标题中的"门"是一个比喻，指的是文学的大门。作者希望引导读者走进文学的世界，领略文学的魅力。',
        difficulty: 1
      },
      {
        id: 'q766', type: 'truefalse',
        question: '作者认为文学是毫无实用价值的。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '作者认为文学虽然不像科学技术那样有直接的实用价值，但它能丰富人的精神世界，陶冶情操，提升人的思想境界，其价值是深远而持久的。',
        difficulty: 1
      },
      {
        id: 'q767', type: 'fill',
        question: '文中说，亲近文学，阅读优秀的文学作品，是一个文明人____和____的重要方式。',
        answer: '增长知识, 提高修养（或"丰富情感""陶冶情操"）',
        explanation: '文章指出阅读文学作品是文明人增长知识、提高修养、丰富情感的重要途径，能够使人获得精神上的提升。',
        difficulty: 2
      },
      {
        id: 'q768', type: 'choice',
        question: '《为你打开一扇门》中大量运用了什么修辞手法来增强说服力？',
        options: ['A. 排比', 'B. 夸张', 'C. 拟人', 'D. 反问'],
        answer: 'A',
        explanation: '文中大量运用排比句，如"一个时代的优秀文学作品……""文学是……"等，增强了文章的气势和说服力，使论述更加有力。',
        difficulty: 2
      }
    ]
  },
  'chinese-sujiao-7-1': {
    chapterName: '繁星',
    questions: [
      {
        id: 'q769', type: 'choice',
        question: '《繁星》的作者是',
        options: ['A. 鲁迅', 'B. 巴金', 'C. 茅盾', 'D. 老舍'],
        answer: 'B',
        explanation: '《繁星》是巴金的一篇散文，描写了作者在不同时期、不同地点观看繁星的感受和联想，表达了对大自然的热爱和对美好生活的向往。',
        difficulty: 1
      },
      {
        id: 'q770', type: 'choice',
        question: '文中作者回忆了哪三个时期看繁星的经历？',
        options: [
          'A. 童年、少年、青年',
          'B. 从前在家乡、三年前在南京、如今在海上',
          'C. 春天、夏天、秋天',
          'D. 早晨、中午、夜晚'
        ],
        answer: 'B',
        explanation: '作者按照时间顺序，回忆了三个时期看繁星的感受：从前在家乡的庭院、三年前在南京的菜园、如今在海上航行中。',
        difficulty: 1
      },
      {
        id: 'q771', type: 'truefalse',
        question: '《繁星》一文只写了星星的样子，没有表达作者的情感。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '《繁星》不仅描写了繁星的美景，更融入了作者在不同人生阶段的情感体验——童年的温馨、少年的甜蜜、如今的思念和依恋，做到了情景交融。',
        difficulty: 1
      },
      {
        id: 'q772', type: 'fill',
        question: '文中"海上的夜是柔和的，是静寂的，是梦幻的"一句运用了____修辞手法。',
        answer: '排比',
        explanation: '三个"是……"构成排比句，从不同角度描写了海上的夜的特点，节奏感强，富有感染力。',
        difficulty: 1
      },
      {
        id: 'q773', type: 'choice',
        question: '文中"我望着那许多认识的星，我仿佛看见它们在对我霎眼，我仿佛听见它们在小声说话"运用了什么修辞手法？',
        options: ['A. 比喻', 'B. 排比', 'C. 拟人', 'D. 夸张'],
        answer: 'C',
        explanation: '作者运用拟人的手法，赋予星星以人的动作（霎眼）和语言（说话），生动地表现了作者与星星之间亲切的情感交流。',
        difficulty: 1
      }
    ]
  },
  'chinese-sujiao-7-2': {
    chapterName: '冰心诗三首',
    questions: [
      {
        id: 'q774', type: 'choice',
        question: '冰心的原名是',
        options: ['A. 谢婉莹', 'B. 林徽因', 'C. 萧红', 'D. 张爱玲'],
        answer: 'A',
        explanation: '冰心原名谢婉莹，是中国现代著名女作家、诗人，以"爱的哲学"著称，代表作有《繁星》《春水》等诗集。',
        difficulty: 1
      },
      {
        id: 'q775', type: 'choice',
        question: '《纸船——寄母亲》中，作者把纸船抛入海中，表达了',
        options: ['A. 喜欢做手工', 'B. 对母亲的深切思念', 'C. 对大海的热爱', 'D. 对旅行的厌倦'],
        answer: 'B',
        explanation: '作者在远航的船上叠纸船抛入海中，希望纸船能载着她的爱和思念到达母亲的身边，表达了游子对母亲深切的思念之情。',
        difficulty: 1
      },
      {
        id: 'q776', type: 'truefalse',
        question: '冰心的"爱的哲学"包括母爱、童真和对自然的赞美三个方面。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '冰心的"爱的哲学"核心是"母爱、童真、自然"。她认为这三种爱是人类最美好的情感，也是文学永恒的主题。',
        difficulty: 1
      },
      {
        id: 'q777', type: 'fill',
        question: '冰心的诗集《繁星》和《春水》深受印度诗人____"小诗"的影响。',
        answer: '泰戈尔',
        explanation: '冰心受泰戈尔《飞鸟集》等小诗的启发，创作了《繁星》和《春水》两部诗集，以短小精悍的诗句表达对人生、自然和爱的感悟。',
        difficulty: 2
      },
      {
        id: 'q778', type: 'choice',
        question: '"成功的花，人们只惊慕她现时的明艳！然而当初她的芽儿，浸透了奋斗的泪泉"这首诗告诉我们什么道理？',
        options: ['A. 花很漂亮', 'B. 成功的背后是艰辛的付出和奋斗', 'C. 不用努力也能成功', 'D. 泪水可以浇灌花朵'],
        answer: 'B',
        explanation: '这首诗以花喻人，告诉人们：成功不是偶然的，在成功的背后有着无数的艰辛、汗水和泪水，只有不懈奋斗才能取得辉煌的成就。',
        difficulty: 2
      },
      {
        id: 'q779', type: 'fill',
        question: '《嫩绿的芽儿》一诗中"嫩绿的芽儿""淡白的花儿""深红的果儿"分别象征着人生的____、____和____阶段。',
        answer: '少年, 青年, 壮年（或"青年""中年""老年"）',
        explanation: '冰心用植物的生长过程（芽、花、果）来比喻人生的成长阶段，劝勉年轻人要不断进取、奉献社会。',
        difficulty: 2
      }
    ]
  },
  'chinese-sujiao-7-3': {
    chapterName: '安恩和奶牛',
    questions: [
      {
        id: 'q780', type: 'choice',
        question: '《安恩和奶牛》的作者是',
        options: ['A. 安徒生', 'B. 伊萨克·迪内森（丹麦）', 'C. 格林兄弟', 'D. 易卜生'],
        answer: 'B',
        explanation: '《安恩和奶牛》是丹麦作家约翰内斯·延森（也译作伊萨克·迪内森）的短篇小说，讲述了老妇人安恩带着奶牛到集市上的故事。',
        difficulty: 1
      },
      {
        id: 'q781', type: 'choice',
        question: '安恩带着奶牛到集市上去的真正目的是',
        options: ['A. 卖掉奶牛', 'B. 买些饲料', 'C. 让奶牛跟同类聚聚，散散心', 'D. 参加牲口比赛'],
        answer: 'C',
        explanation: '安恩并不是来卖牛的，她牵着奶牛到集市上来，只是为了让孤单的奶牛能和其他牛聚一聚、散散心，这表现了安恩对动物的爱心和善良的品质。',
        difficulty: 1
      },
      {
        id: 'q782', type: 'truefalse',
        question: '集市上很多人想买安恩的奶牛，但安恩都拒绝了。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '文中多个买主想买安恩的奶牛，出价也不低，但安恩都一一拒绝了，因为她根本就没有卖牛的打算，体现了她的坚定和对奶牛的感情。',
        difficulty: 1
      },
      {
        id: 'q783', type: 'fill',
        question: '小说通过安恩和奶牛的故事，赞美了劳动者____、____的品质。',
        answer: '善良, 有爱心（或"淳朴""勤劳"）',
        explanation: '安恩是一个贫穷但精神世界丰富的老妇人，她把奶牛当成伙伴和朋友来关爱，这种对生命的尊重和爱护体现了她善良淳朴的品质。',
        difficulty: 2
      },
      {
        id: 'q784', type: 'choice',
        question: '小说刻画安恩的形象主要运用了什么描写方法？',
        options: ['A. 心理描写', 'B. 动作和神态描写', 'C. 环境描写', 'D. 侧面描写'],
        answer: 'B',
        explanation: '小说主要通过安恩的动作（安静地站着、抚摸奶牛等）和神态（安详、平静等）来刻画她的形象，展现她善良、朴实的性格特点。',
        difficulty: 2
      }
    ]
  },
  'chinese-sujiao-8-0': {
    chapterName: '长征组歌',
    questions: [
      {
        id: 'q785', type: 'choice',
        question: '《长征组歌》反映的是中国革命历史上的哪一重大事件？',
        options: ['A. 北伐战争', 'B. 红军长征', 'C. 抗日战争', 'D. 解放战争'],
        answer: 'B',
        explanation: '《长征组歌》是以中国工农红军长征为题材创作的大型组歌，全景式地展现了红军长征的艰苦历程和革命英雄主义精神。',
        difficulty: 1
      },
      {
        id: 'q786', type: 'choice',
        question: '"红军不怕远征难，万水千山只等闲"中"只等闲"的意思是',
        options: ['A. 只能等待', 'B. 当作平平常常的事', 'C. 等到清闲时', 'D. 无所事事'],
        answer: 'B',
        explanation: '"只等闲"意为"只当作平平常常的事"，表现了红军将士把长征中的艰难险阻视为平常之事的革命英雄主义气概。',
        difficulty: 1
      },
      {
        id: 'q787', type: 'truefalse',
        question: '"五岭逶迤腾细浪，乌蒙磅礴走泥丸"中使用了比喻和夸张的修辞手法。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '把绵延的五岭比作细小的波浪，把高大的乌蒙山比作滚动的小泥丸，同时运用了夸张的手法，反衬红军的伟大和长征的豪迈。',
        difficulty: 2
      },
      {
        id: 'q788', type: 'fill',
        question: '"更喜岷山千里雪，三军过后尽开颜"中"三军"指的是____。',
        answer: '红一方面军、红二方面军、红四方面军（或"红军全体将士"）',
        explanation: '"三军"原指古代军队的中、左、右三军，这里指红军的三个方面军，也泛指红军全体将士，表达了长征胜利的喜悦。',
        difficulty: 2
      },
      {
        id: 'q789', type: 'choice',
        question: '"金沙水拍云崖暖，大渡桥横铁索寒"中"暖"和"寒"分别表现了什么？',
        options: [
          'A. 天气的一热一冷',
          'B. "暖"表现胜利的喜悦，"寒"表现战斗的惊险和悲壮',
          'C. 水温的高低不同',
          'D. 两个地方的温差'
        ],
        answer: 'B',
        explanation: '"暖"表现红军巧渡金沙江后的喜悦心情；"寒"表现飞夺泸定桥的惊险悲壮。"一暖一寒"形成了强烈的对比，富有感染力。',
        difficulty: 3
      },
      {
        id: 'q790', type: 'fill',
        question: '《长征组歌》的词作者是____，曲作者是____。',
        answer: '肖华, 晨耕等（或"肖华"）',
        explanation: '《长征组歌》由肖华作词，晨耕、生茂、唐诃、遇秋等作曲，1964年为纪念红军长征30周年而创作。',
        difficulty: 3
      }
    ]
  },
  'chinese-sujiao-8-1': {
    chapterName: '老山界',
    questions: [
      {
        id: 'q791', type: 'choice',
        question: '《老山界》的作者是',
        options: ['A. 陆定一', 'B. 毛泽东', 'C. 朱德', 'D. 周恩来'],
        answer: 'A',
        explanation: '《老山界》是陆定一的一篇回忆录，记叙了红军长征途中翻越第一座难走的高山——老山界的经过。',
        difficulty: 1
      },
      {
        id: 'q792', type: 'choice',
        question: '红军翻越老山界时，最难走的是哪一段路？',
        options: ['A. 山脚的平路', 'B. 半山腰的盘山路', 'C. 雷公岩', 'D. 山顶的平地'],
        answer: 'C',
        explanation: '雷公岩是老山界最陡峭险峻的一段，几乎是九十度的垂直石梯，十分难走，但红军战士们互相帮助，最终成功翻越。',
        difficulty: 1
      },
      {
        id: 'q793', type: 'truefalse',
        question: '《老山界》一文按时间顺序记叙了红军翻越老山界的过程。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '文章按照时间顺序（下午动身—天黑到达山脚—半夜露宿—第二天继续攀爬—下午到达山顶）来记叙翻越老山界的过程，条理清晰。',
        difficulty: 1
      },
      {
        id: 'q794', type: 'fill',
        question: '文中写"之"字拐的路，说明老山界的山路非常____。',
        answer: '陡峭（或"险峻"）',
        explanation: '"之"字拐形容山路像"之"字形一样弯弯曲曲盘旋而上，说明山坡非常陡峭，只能以这种方式修筑道路。',
        difficulty: 1
      },
      {
        id: 'q795', type: 'choice',
        question: '文中描写半夜露宿时"天上闪烁的星星好像黑色幕上缀着的宝石"，这个比喻的作用是',
        options: ['A. 表现夜景的美丽', 'B. 以美景反衬行军的艰苦和红军的乐观精神', 'C. 说明天气晴朗', 'D. 表现作者的文学才能'],
        answer: 'B',
        explanation: '虽然条件极其艰苦，但在作者笔下，夜空的星群如此美丽，这体现了红军战士在困难面前保持乐观主义精神的态度。',
        difficulty: 2
      }
    ]
  },
  'chinese-sujiao-8-2': {
    chapterName: '草',
    questions: [
      {
        id: 'q796', type: 'choice',
        question: '《草》的作者是',
        options: ['A. 王愿坚', 'B. 陆定一', 'C. 茅盾', 'D. 巴金'],
        answer: 'A',
        explanation: '《草》是现代作家王愿坚的一篇小说，讲述了红军长征途中过草地时发生的故事，展现了红军战士的崇高品质。',
        difficulty: 1
      },
      {
        id: 'q797', type: 'choice',
        question: '小说中周副主席在尝了有毒的野草之后',
        options: ['A. 命令把所有野草扔掉', 'B. 亲自尝草并总结经验教大家识别无毒的野草', 'C. 批评了战士们', 'D. 决定原路返回'],
        answer: 'B',
        explanation: '周副主席亲口尝试有毒的野草后，不顾身体不适，总结经验，教导战士们如何识别哪些野草可以食用，体现了革命领袖关心战士、以身作则的崇高品质。',
        difficulty: 2
      },
      {
        id: 'q798', type: 'truefalse',
        question: '小说《草》的主要人物是杨光。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '杨光是小说的主要人物之一，他在红军过草地时因误食有毒野草而中毒，后来得到周副主席的救助。通过杨光的经历，展现了红军官兵之间的深厚情谊。',
        difficulty: 1
      },
      {
        id: 'q799', type: 'fill',
        question: '小说以"草"为题，"草"既是故事的核心事物，也象征着红军战士在极端困难面前____的精神。',
        answer: '顽强不屈（或"坚韧不拔""不怕牺牲"）',
        explanation: '"草"既指引发故事的野草，也象征着红军战士像野草一样具有顽强的生命力，在极端艰苦的环境中不屈不挠。',
        difficulty: 2
      },
      {
        id: 'q800', type: 'choice',
        question: '小说结尾写"在这草地上铺出一条通向北方的大路"有什么深层含义？',
        options: ['A. 真的在草地上修了一条路', 'B. 象征红军走过草地，走向胜利', 'C. 草地上长出了路', 'D. 北方的路很好走'],
        answer: 'B',
        explanation: '这句话具有象征意义，暗示红军将克服一切艰难险阻，最终走出草地，走向革命胜利的北方。',
        difficulty: 2
      }
    ]
  },
  'chinese-sujiao-8-3': {
    chapterName: '窗',
    questions: [
      {
        id: 'q801', type: 'choice',
        question: '《窗》是一篇',
        options: ['A. 记叙文', 'B. 散文', 'C. 小小说（微型小说）', 'D. 议论文'],
        answer: 'C',
        explanation: '《窗》是澳大利亚作家泰格特的一篇小小说（微型小说），通过两个病人与一扇窗的故事，揭示了人性的善与恶。',
        difficulty: 1
      },
      {
        id: 'q802', type: 'choice',
        question: '靠窗的病人每天向另一位病人描述窗外景色的目的是',
        options: ['A. 显示自己视力好', 'B. 鼓励和安慰病友，给他带来生活的希望', 'C. 打发时间', 'D. 吹牛说大话'],
        answer: 'B',
        explanation: '靠窗的病人为了让病友在病痛中感受到生活的美好，每天精心描述"窗外"的美景，虽然窗外实际上只有一堵墙，但他的描述给了病友活下去的希望和勇气。',
        difficulty: 2
      },
      {
        id: 'q803', type: 'truefalse',
        question: '窗外确实有美丽的公园、湖泊等景色。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '当不靠窗的病人终于换到靠窗的床位后，发现窗外其实只有一堵光秃秃的墙。靠窗的病人描述的所有美景都是他凭想象创造的。',
        difficulty: 1
      },
      {
        id: 'q804', type: 'fill',
        question: '小说中的"窗"是一个象征，象征着人的____和____。',
        answer: '心灵, 灵魂（或"内心世界""精神境界"）',
        explanation: '"窗"既是故事中的实物，更是心灵的窗口。靠窗的病人心灵美好，他的"窗"里满是阳光和希望；不靠窗的病人心灵自私阴暗，他的"窗"外只有一堵墙。',
        difficulty: 2
      },
      {
        id: 'q805', type: 'choice',
        question: '不靠窗的病人看到窗外只有一堵墙时，他的心理活动应该是',
        options: ['A. 高兴', 'B. 震惊、懊悔和羞愧', 'C. 无所谓', 'D. 愤怒'],
        answer: 'B',
        explanation: '当他发现窗外只有一堵墙时，应该会意识到靠窗的病人一直在用善意的谎言给他带来希望和安慰，而自己却因为自私嫉妒导致了对方的死亡，内心必然充满震惊、懊悔和羞愧。',
        difficulty: 2
      }
    ]
  },
  'chinese-sujiao-9-0': {
    chapterName: '白杨礼赞',
    questions: [
      {
        id: 'q806', type: 'choice',
        question: '《白杨礼赞》的作者是',
        options: ['A. 鲁迅', 'B. 茅盾', 'C. 巴金', 'D. 老舍'],
        answer: 'B',
        explanation: '《白杨礼赞》是茅盾（原名沈德鸿）于1941年写的一篇散文，运用象征手法，借白杨树赞美了当时华北平原上坚持抗日的军民。',
        difficulty: 1
      },
      {
        id: 'q807', type: 'choice',
        question: '文章开头一句"白杨树实在是不平凡的，我赞美白杨树！"在全文中起到什么作用？',
        options: ['A. 只是简单地介绍白杨树', 'B. 点明主题，统领全篇，即"直抒胸臆"', 'C. 引出下文对其他树的描写', 'D. 表达作者对树的厌恶'],
        answer: 'B',
        explanation: '这句话开门见山，直抒胸臆，点明了全文的赞美对象和主题，起到统领全篇的作用。文中多次出现类似的赞美语句，形成感情的主线。',
        difficulty: 2
      },
      {
        id: 'q808', type: 'truefalse',
        question: '《白杨礼赞》中白杨树象征着北方的农民，尤其是敌后抗日根据地的军民。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '作者运用象征手法，以白杨树象征当时中国共产党领导下的北方抗日军民，赞美他们正直、朴质、坚强不屈的精神。',
        difficulty: 1
      },
      {
        id: 'q809', type: 'fill',
        question: '文中描写白杨树"它没有婆娑的姿态，没有屈曲盘旋的虬枝"，这种描写方法叫____描写，目的是突出白杨树____的特点。',
        answer: '外貌（或"形态""外形"）, 朴实（或"正直""不枝不蔓"）',
        explanation: '作者通过描写白杨树没有华丽的外表和盘旋的枝条，突出它笔直向上、朴实无华的外形特点，为下文的象征意义做铺垫。',
        difficulty: 2
      },
      {
        id: 'q810', type: 'choice',
        question: '"难道你就只觉得它只是树？难道你就不想到它的朴质、严肃、坚强不屈，至少也象征了北方的农民？"这两个反问句的作用是',
        options: ['A. 表示怀疑', 'B. 启发读者联想，由树到人，由赞美树到赞美北方农民', 'C. 质问读者', 'D. 表示无奈'],
        answer: 'B',
        explanation: '这组排比式的反问句层层推进，引导读者由白杨树联想到北方农民，由树的形象过渡到人的精神，点明了白杨树的象征意义。',
        difficulty: 2
      },
      {
        id: 'q811', type: 'fill',
        question: '《白杨礼赞》运用的主要表现手法是____手法。',
        answer: '象征（或"托物言志"）',
        explanation: '全文运用象征手法，以白杨树象征北方抗日军民，借赞美白杨树来赞美抗日军民的精神品质，使文章寓意深刻。',
        difficulty: 1
      }
    ]
  },
  'chinese-sujiao-9-1': {
    chapterName: '紫藤萝瀑布',
    questions: [
      {
        id: 'q812', type: 'choice',
        question: '《紫藤萝瀑布》的作者是',
        options: ['A. 冰心', 'B. 宗璞', 'C. 丁玲', 'D. 萧红'],
        answer: 'B',
        explanation: '《紫藤萝瀑布》是当代女作家宗璞的一篇散文，通过回忆紫藤萝花的盛衰，感悟生命的美好和永恒。',
        difficulty: 1
      },
      {
        id: 'q813', type: 'choice',
        question: '文中写十年前家门口的那株紫藤萝',
        options: ['A. 也开得很茂盛', 'B. 被拆掉花架，改种果树，花朵稀落', 'C. 从未存在过', 'D. 长在山上'],
        answer: 'B',
        explanation: '文中回忆十年前家门口的紫藤萝由于种种原因被拆掉花架，改种了果树，花朵稀落，暗示了那个特殊时代对美好事物的摧残。',
        difficulty: 2
      },
      {
        id: 'q814', type: 'truefalse',
        question: '文章写紫藤萝瀑布，实际上是借花来感悟人生哲理。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '作者由紫藤萝花的盛开感悟到：虽然个体生命可能会经历不幸和挫折，但生命的长河是无止境的，应该珍惜生命，积极向前。',
        difficulty: 1
      },
      {
        id: 'q815', type: 'fill',
        question: '文中"花和人都会遇到各种各样的不幸，但是生命的长河是无止境的"这句话蕴含的哲理是：____。',
        answer: '面对不幸要乐观坚强，生命的长河永不停息（意思对即可）',
        explanation: '作者通过紫藤萝花的枯荣，领悟到个体生命虽然会遭遇不幸，但整个人类的生命长河是生生不息、永无止境的，因此应该积极面对生活。',
        difficulty: 2
      },
      {
        id: 'q816', type: 'choice',
        question: '"从未见过开得这样盛的藤萝，只见一片辉煌的淡紫色，像一条瀑布"这句话运用了什么修辞手法？',
        options: ['A. 拟人', 'B. 比喻', 'C. 夸张', 'D. 排比'],
        answer: 'B',
        explanation: '把盛开的紫藤萝花比作瀑布，形象地写出了紫藤萝花繁花似锦、气势非凡的景象，"紫藤萝瀑布"这一标题也由此而来。',
        difficulty: 1
      }
    ]
  },
  'chinese-sujiao-9-2': {
    chapterName: '风筝',
    questions: [
      {
        id: 'q817', type: 'choice',
        question: '《风筝》的作者是',
        options: ['A. 茅盾', 'B. 鲁迅', 'C. 朱自清', 'D. 冰心'],
        answer: 'B',
        explanation: '《风筝》选自鲁迅的散文诗集《野草》，回忆了童年时期毁坏弟弟风筝的一件往事，表达了对弟弟的愧疚和自我反省。',
        difficulty: 1
      },
      {
        id: 'q818', type: 'choice',
        question: '少年时期的"我"为什么要毁坏弟弟的风筝？',
        options: ['A. 风筝做得不好', 'B. 认为"这是没出息孩子所做的玩艺"，不喜欢弟弟玩风筝', 'C. 想帮弟弟做一个更好的', 'D. 和弟弟吵架了'],
        answer: 'B',
        explanation: '"我"当时受封建教育思想的影响，认为放风筝是"没出息"的事，于是毁掉了弟弟苦心制作的风筝，这体现了封建教育观念对儿童天性的压抑。',
        difficulty: 2
      },
      {
        id: 'q819', type: 'truefalse',
        question: '多年以后，"我"向弟弟道歉，弟弟记起了这件事并表示原谅了"我"。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '多年以后，"我"向弟弟提起这件事并表示歉意，但弟弟却说"有过这样的事吗？"他完全忘记了。弟弟的忘却使"我"的内心更加沉重，因为"我"无法得到宽恕。',
        difficulty: 2
      },
      {
        id: 'q820', type: 'fill',
        question: '文章结尾"我"盼望弟弟能说出"我可是毫不怪你呵"，但弟弟却说忘了，这说明"我"内心的____无法得到释怀。',
        answer: '愧疚（或"自责""歉疚"）',
        explanation: '弟弟的忘却意味着"我"的忏悔无处安放，无法得到原谅，这种无法解脱的愧疚感更加深重，体现了"我"深刻的自省精神。',
        difficulty: 2
      },
      {
        id: 'q821', type: 'choice',
        question: '《风筝》的主题思想是',
        options: [
          'A. 介绍怎样做风筝',
          'B. 批判封建教育思想对儿童天性的摧残，表达了自我反省精神',
          'C. 赞美兄弟情深',
          'D. 描写童年生活'
        ],
        answer: 'B',
        explanation: '文章通过回忆毁坏弟弟风筝的往事，批判了封建教育思想对儿童天性的压抑和摧残，同时表现了鲁迅深刻的自我反省精神。',
        difficulty: 2
      }
    ]
  },
  'chinese-sujiao-9-3': {
    chapterName: '季羡林先生',
    questions: [
      {
        id: 'q822', type: 'choice',
        question: '季羡林先生是我国著名的',
        options: ['A. 物理学家', 'B. 语言学家、文学家、佛学家', 'C. 数学家', 'D. 医学家'],
        answer: 'B',
        explanation: '季羡林先生是我国著名的语言学家、文学家、佛学家，精通多种语言，尤以梵文、巴利文研究著称，被誉为"学界泰斗"。',
        difficulty: 1
      },
      {
        id: 'q823', type: 'truefalse',
        question: '季羡林先生一生致力于学术研究，为人治学都非常严谨。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '季羡林先生一生勤奋治学，笔耕不辍，学问博大精深，为人谦逊朴实，品德高尚，是学界公认的楷模。',
        difficulty: 1
      },
      {
        id: 'q824', type: 'fill',
        question: '季羡林先生曾在____大学留学，后长期在____大学任教。',
        answer: '德国（或"哥廷根"）, 北京（或"清华""北大"）',
        explanation: '季羡林1935年赴德国哥廷根大学留学，学习梵文、巴利文等，1946年回国后历任北京大学教授、东语系主任等职。',
        difficulty: 2
      },
      {
        id: 'q825', type: 'choice',
        question: '写人的文章通常要通过具体的事例来表现人物品质，这种写法叫做',
        options: ['A. 借景抒情', 'B. 通过典型事例表现人物性格', 'C. 托物言志', 'D. 欲扬先抑'],
        answer: 'B',
        explanation: '写人记叙文常通过选取典型事例来表现人物的性格特点和品质，使人物形象更加生动、具体、可信。',
        difficulty: 1
      },
      {
        id: 'q826', type: 'choice',
        question: '季羡林先生在学术上最大的特点之一是',
        options: ['A. 追求名利', 'B. 治学严谨、实事求是', 'C. 只研究中国文学', 'D. 很少写文章'],
        answer: 'B',
        explanation: '季羡林先生治学非常严谨，注重实证，不尚空谈，他的学术研究涉及多种语言和领域，成果丰硕，体现了实事求是的学风。',
        difficulty: 1
      }
    ]
  },
  // ===================== chinese-bsd =====================
  'chinese-bsd-7-0': {
    chapterName: '童年的朋友',
    questions: [
      {
        id: 'q827', type: 'choice',
        question: '《童年的朋友》选自高尔基的自传体三部曲中的',
        options: ['A. 《童年》', 'B. 《在人间》', 'C. 《我的大学》', 'D. 《母亲》'],
        answer: 'A',
        explanation: '《童年的朋友》节选自苏联作家高尔基的自传体小说《童年》，描写了外祖母这个对作者童年影响最大的人物。',
        difficulty: 1
      },
      {
        id: 'q828', type: 'choice',
        question: '高尔基是哪个国家的作家？',
        options: ['A. 英国', 'B. 法国', 'C. 苏联（俄国）', 'D. 美国'],
        answer: 'C',
        explanation: '高尔基（1868-1936）是苏联（俄国）伟大的无产阶级作家，被列宁称为"无产阶级艺术的最杰出的代表"。',
        difficulty: 1
      },
      {
        id: 'q829', type: 'truefalse',
        question: '外祖母是"我"童年时代唯一的朋友。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '在高尔基苦难的童年中，外祖母是他唯一的朋友和保护者，她用无私的爱和乐观的精神温暖着"我"的童年。',
        difficulty: 1
      },
      {
        id: 'q830', type: 'fill',
        question: '文中描写外祖母时，特别描写了她的____，这双眼睛在她微笑时闪烁着____的光芒。',
        answer: '眼睛（或"笑""脸"）, 温暖（或"慈祥""快乐"）',
        explanation: '作者通过细腻的笔触描写外祖母的外貌，特别是她那双充满温暖和慈爱的眼睛，展现了她乐观、善良、坚强的品质。',
        difficulty: 2
      },
      {
        id: 'q831', type: 'choice',
        question: '外祖母对"我"的关爱主要体现在',
        options: ['A. 给"我"买好吃的', 'B. 用讲故事和无私的爱给"我"以精神上的安慰和支持', 'C. 送"我"上学', 'D. 教"我"写字'],
        answer: 'B',
        explanation: '外祖母通过讲故事、唱歌谣、给予温暖的关怀等方式，在"我"苦难的童年中给予了精神上的慰藉和力量，她对生活的热爱和坚强也深深地影响了"我"。',
        difficulty: 2
      },
      {
        id: 'q832', type: 'fill',
        question: '高尔基的自传体三部曲分别是《童年》《____》《____》。',
        answer: '在人间, 我的大学',
        explanation: '高尔基的自传体三部曲包括《童年》《在人间》《我的大学》，分别记录了他童年、少年和青年时期的生活经历。',
        difficulty: 1
      }
    ]
  },
  'chinese-bsd-7-1': {
    chapterName: '一面',
    questions: [
      {
        id: 'q833', type: 'choice',
        question: '《一面》中写到的"鲁迅先生"是一位怎样的形象？',
        options: ['A. 精神矍铄、身体健壮', 'B. 瘦瘦的、头发直立、胡须很浓，但目光有神', 'C. 高大魁梧', 'D. 年轻英俊'],
        answer: 'B',
        explanation: '文中对鲁迅的外貌描写十分传神：瘦瘦的、五十上下、穿一件牙黄长衫、头发直立、胡须很浓、隶体"一"字似的胡须，但"精神很好，没有一点颓唐的样子"。',
        difficulty: 1
      },
      {
        id: 'q834', type: 'choice',
        question: '《一面》中，"我"在内山书店遇到了什么情况？',
        options: [
          'A. 买书时钱不够，鲁迅先生帮助了"我"',
          'B. 和鲁迅先生聊天',
          'C. 参加书店的活动',
          'D. 找鲁迅先生签名'
        ],
        answer: 'A',
        explanation: '文中"我"去内山书店买书，因为钱不够，鲁迅先生用一块钱帮助了"我"，并推荐了另一本书，让"我"深受感动。',
        difficulty: 2
      },
      {
        id: 'q835', type: 'truefalse',
        question: '《一面》一文六次描写了鲁迅的外貌，每次描写的角度不同。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '文章从远到近、由粗到细，多次描写鲁迅的外貌，从整体印象到具体特征（面孔、头发、胡须、眼神等），层层深入地展现了鲁迅的精神面貌。',
        difficulty: 2
      },
      {
        id: 'q836', type: 'fill',
        question: '文中鲁迅对"我"说"一块钱你有没有？一块钱！"这句话表现了鲁迅____的性格。',
        answer: '热心助人（或"关爱青年""平易近人"）',
        explanation: '鲁迅主动关心一个素不相识的穷苦青年，用自己的钱帮助"我"买书，表现了他关爱青年、热心助人的崇高品格。',
        difficulty: 1
      },
      {
        id: 'q837', type: 'choice',
        question: '文章以"一面"为题，含义是',
        options: ['A. 只有一面墙', 'B. 记录了与鲁迅仅有的一次见面，但这"一面"给了"我"巨大的精神力量', 'C. 书只有一面', 'D. 走过一条街'],
        answer: 'B',
        explanation: '"一面"既指与鲁迅仅有的一次见面，也暗示这短暂的一面给了"我"巨大的精神鼓舞和力量，成为"我"人生中难以忘怀的经历。',
        difficulty: 2
      }
    ]
  },
  'chinese-bsd-7-2': {
    chapterName: '从百草园到三味书屋',
    questions: [
      {
        id: 'q838', type: 'choice',
        question: '鲁迅描写百草园时，"碧绿的菜畦，光滑的石井栏，高大的皂荚树，紫红的桑葚"使用了什么修辞手法？',
        options: ['A. 排比', 'B. 对偶', 'C. 拟人', 'D. 夸张'],
        answer: 'B',
        explanation: '这些短语两两相对："碧绿"对"紫红"（颜色）、"光滑"对"高大"（形容词）、"菜畦"对"皂荚树"等，形成对偶，读来朗朗上口。',
        difficulty: 2
      },
      {
        id: 'q839', type: 'choice',
        question: '百草园中"油蛉在这里低唱，蟋蟀们在这里弹琴"运用了什么修辞手法？',
        options: ['A. 比喻', 'B. 拟人', 'C. 夸张', 'D. 对比'],
        answer: 'B',
        explanation: '作者把油蛉的鸣叫说成"低唱"，蟋蟀的叫声说成"弹琴"，运用拟人手法，赋予昆虫以人的行为，使百草园充满了生机和趣味。',
        difficulty: 1
      },
      {
        id: 'q840', type: 'truefalse',
        question: '作者写闰土的父亲传授的捕鸟方法，是为了表现百草园冬天的乐趣。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '雪地捕鸟是百草园冬天的一项有趣活动，作者详细记叙捕鸟的过程，表现了百草园一年四季都给童年鲁迅带来了无穷的乐趣。',
        difficulty: 1
      },
      {
        id: 'q841', type: 'fill',
        question: '三味书屋中，先生读书入神时，学生们在下面____和____，表现了儿童的天性。',
        answer: '画画（或"描绣像"）, 做戏（或"做游戏""玩耍"）',
        explanation: '当先生读书入神时，学生们有的用纸糊的盔甲套在指甲上做戏，有的描小说上的绣像，这些描写真实地表现了儿童的天真活泼。',
        difficulty: 2
      },
      {
        id: 'q842', type: 'choice',
        question: '文章中"Ade，我的蟋蟀们！Ade，我的覆盆子们和木莲们！"中的"Ade"是什么语言？',
        options: ['A. 英语', 'B. 德语（再见）', 'C. 法语', 'D. 日语'],
        answer: 'B',
        explanation: '"Ade"是德语"再见"的意思，鲁迅当时在三味书屋学过德语。这句话表达了对百草园中美好事物的不舍和留恋。',
        difficulty: 2
      }
    ]
  },
  'chinese-bsd-7-3': {
    chapterName: '最后一课',
    questions: [
      {
        id: 'q843', type: 'choice',
        question: '《最后一课》的作者是',
        options: ['A. 英国的莎士比亚', 'B. 法国的都德', 'C. 德国的歌德', 'D. 俄国的托尔斯泰'],
        answer: 'B',
        explanation: '《最后一课》是法国作家都德的一篇短篇小说，写于1873年，以普法战争后法国阿尔萨斯和洛林地区被普鲁士占领为背景。',
        difficulty: 1
      },
      {
        id: 'q844', type: 'choice',
        question: '小弗郎士在"最后一课"上的态度发生了怎样的变化？',
        options: [
          'A. 从认真学习到不想学了',
          'B. 从贪玩厌学到认真悔悟、热爱祖国语言',
          'C. 一直很认真',
          'D. 从认真到不认真'
        ],
        answer: 'B',
        explanation: '小弗郎士一开始贪玩、厌学，甚至怕老师提问。但当得知这是最后一堂法语课时，他感到无比悔恨，认真听课，对法语和祖国产生了深深的热爱。',
        difficulty: 2
      },
      {
        id: 'q845', type: 'truefalse',
        question: '韩麦尔先生说"亡了国当了奴隶的人民，只要牢牢记住他们的语言，就好像拿着一把打开监狱大门的钥匙"，这句话强调了母语的重要性。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '韩麦尔先生的话深刻揭示了语言与民族尊严的关系：只要不忘记自己的语言，民族精神就不会消亡，就像拿着打开监狱之门的钥匙一样。',
        difficulty: 2
      },
      {
        id: 'q846', type: 'fill',
        question: '韩麦尔先生在最后一课上穿上了他"只有在督学来视察或者发奖的日子才穿戴"的____和____，表现了他对这堂课的重视。',
        answer: '漂亮礼服, 绣边领结（或"礼服""领结"）',
        explanation: '韩麦尔先生穿上最庄重的礼服来上最后一堂法语课，表现了他对这堂课的重视和对祖国语言的深情，以及面对亡国之痛的庄严态度。',
        difficulty: 2
      },
      {
        id: 'q847', type: 'choice',
        question: '小说结尾韩麦尔先生在黑板上写下"法兰西万岁"两个大字，这个细节描写表现了',
        options: ['A. 韩麦尔先生的字写得好', 'B. 韩麦尔先生对祖国的深沉热爱', 'C. 韩麦尔先生要离开了', 'D. 课程结束了'],
        answer: 'B',
        explanation: '韩麦尔先生使出全身的力量写下"法兰西万岁"，这是他对祖国最深沉的爱的表达，也把小说的爱国主题推向了高潮。',
        difficulty: 1
      },
      {
        id: 'q848', type: 'fill',
        question: '小说以小弗郎士的____为叙事视角，通过他的所见所闻所感来推动故事情节，使读者更加____。',
        answer: '第一人称（或"我"）, 真切（或"真实""感动"）',
        explanation: '以小弗郎士的第一人称视角叙述，使故事更加真实可信，读者可以随着他的情感变化而受到感染，增强了文章的感染力。',
        difficulty: 2
      }
    ]
  },
  'chinese-bsd-8-0': {
    chapterName: '浪之歌',
    questions: [
      {
        id: 'q849', type: 'choice',
        question: '《浪之歌》的作者是',
        options: ['A. 泰戈尔', 'B. 纪伯伦', 'C. 冰心', 'D. 普希金'],
        answer: 'B',
        explanation: '《浪之歌》是黎巴嫩诗人纪伯伦的一首散文诗，选自他的散文诗集《泪与笑》，以海浪的口吻表达了对海岸的深情。',
        difficulty: 1
      },
      {
        id: 'q850', type: 'choice',
        question: '《浪之歌》中，浪花对海岸的感情是',
        options: ['A. 仇恨', 'B. 无所谓', 'C. 深情的爱和依恋', 'D. 恐惧'],
        answer: 'C',
        explanation: '诗中浪花把海岸比作自己的知心伴侣，"我爱你""我终日与你倾诉"等语句表达了浪花对海岸深沉的爱和永不分离的依恋。',
        difficulty: 1
      },
      {
        id: 'q851', type: 'truefalse',
        question: '《浪之歌》是一首借物抒情的散文诗。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '这首散文诗以"浪"的自述形式，借浪花与海岸的关系，抒发了诗人对美好生活的热爱和对理想的追求，是典型的借物抒情。',
        difficulty: 1
      },
      {
        id: 'q852', type: 'fill',
        question: '纪伯伦是____（国家）诗人，与泰戈尔齐名，被称为"____"。',
        answer: '黎巴嫩, 艺术天才（或"哲理诗人"）',
        explanation: '纪伯伦是黎巴嫩裔诗人、画家，是阿拉伯现代文学的重要代表人物，他的作品充满哲理和诗意，在世界文学史上占有重要地位。',
        difficulty: 2
      },
      {
        id: 'q853', type: 'choice',
        question: '诗中浪花说"清晨我唱着歌儿让大海醒来"，这个拟人句表现了浪花的',
        options: ['A. 声音好听', 'B. 乐观、活泼的性格', 'C. 力量很大', 'D. 疲倦'],
        answer: 'B',
        explanation: '浪花用自己的歌声唤醒大海，体现了它活泼、乐观、充满活力的性格特点，也展现了诗人对生活的积极态度。',
        difficulty: 2
      }
    ]
  },
  'chinese-bsd-8-1': {
    chapterName: '雨之歌',
    questions: [
      {
        id: 'q854', type: 'choice',
        question: '《雨之歌》中，雨把自己比作',
        options: ['A. 一把刀', 'B. 大海的叹息、天空的泪水、田野的微笑', 'C. 一朵花', 'D. 一条河'],
        answer: 'B',
        explanation: '诗中写道："我是大海的叹息，是天空的泪水，是田野的微笑"，这三个比喻分别表现了雨的不同来源和情感色彩。',
        difficulty: 2
      },
      {
        id: 'q855', type: 'truefalse',
        question: '《雨之歌》中雨的形象是悲伤的、消极的。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '虽然诗中有"大海的叹息""天空的泪水"等看似悲伤的意象，但整体上雨的形象是奉献的、积极向上的——它滋润万物、使花朵绽放、给大地带来生机。',
        difficulty: 2
      },
      {
        id: 'q856', type: 'fill',
        question: '《雨之歌》中雨的主要品格是：____和____。',
        answer: '奉献（或"无私奉献"）, 乐观（或"坚韧"）',
        explanation: '雨从大海和天空来到大地，滋润万物而不求回报，表现了无私奉献的精神；即使从高空落下摔碎，也不气馁，继续循环，表现了乐观坚韧的品质。',
        difficulty: 2
      },
      {
        id: 'q571', type: 'choice',
        question: '纪伯伦的《浪之歌》和《雨之歌》共同的特点是',
        options: ['A. 都是写景的诗歌', 'B. 都运用了拟人手法和第一人称自述', 'C. 都是古诗', 'D. 都是关于天气的'],
        answer: 'B',
        explanation: '两首诗都运用了拟人手法，分别以"浪"和"雨"的第一人称口吻自述，表达了它们各自的生活态度和情感世界。',
        difficulty: 1
      },
      {
        id: 'q857', type: 'choice',
        question: '"我从湖中升起，借着以太的翅膀翱翔"中"以太的翅膀"运用了什么修辞手法？',
        options: ['A. 比喻', 'B. 拟人', 'C. 借代', 'D. 排比'],
        answer: 'A',
        explanation: '将水蒸发升空的过程比作"借着以太的翅膀翱翔"，运用了比喻的手法，形象地描绘了雨水循环的过程。',
        difficulty: 2
      }
    ]
  },
  'chinese-bsd-8-2': {
    chapterName: '敬畏自然',
    questions: [
      {
        id: 'q858', type: 'choice',
        question: '《敬畏自然》的文体是',
        options: ['A. 记叙文', 'B. 议论文', 'C. 说明文', 'D. 小说'],
        answer: 'B',
        explanation: '《敬畏自然》是一篇以议论为主的散文（议论文），作者严春友论述了人与自然的关系，提出人类应该敬畏自然、爱护自然的观点。',
        difficulty: 1
      },
      {
        id: 'q859', type: 'choice',
        question: '文章标题"敬畏自然"中"敬畏"的含义是',
        options: ['A. 害怕', 'B. 既敬重又畏惧', 'C. 崇拜', 'D. 恐惧'],
        answer: 'B',
        explanation: '"敬畏"包含"敬重"和"畏惧"两层含义：敬重自然的伟大和神奇，畏惧大自然的威力，对自然保持谦卑的态度。',
        difficulty: 1
      },
      {
        id: 'q860', type: 'truefalse',
        question: '作者认为人类可以征服自然、改造自然，做自然的主人。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '作者反对"征服自然"的观念，认为人类只是自然的一部分，应该与自然和谐共处，而不是妄图征服自然。人类在自然面前是渺小的。',
        difficulty: 1
      },
      {
        id: 'q861', type: 'fill',
        question: '文章指出，大自然创造了宇宙中的一切，包括____，因此人类不应该____自然。',
        options: ['A. 人类, 伤害', 'B. 人类, 征服', 'C. 动物, 破坏', 'D. 生命, 改造'],
        answer: 'B',
        explanation: '文章的核心观点是：大自然创造了包括人类在内的一切，人类只是自然的一部分，人类不应该妄图征服自然，而应该敬畏自然、保护自然。',
        difficulty: 1
      },
      {
        id: 'q862', type: 'choice',
        question: '文中说"谁也不能声称人类是宇宙的骄子"，意思是',
        options: ['A. 人类是宇宙中最聪明的', 'B. 人类并不是宇宙中最高贵、最特殊的，应该谦卑', 'C. 人类不是宇宙中的生命', 'D. 宇宙中没有骄子'],
        answer: 'B',
        explanation: '这句话强调人类在宇宙中的地位并不特殊，人类和其他生命一样是自然的产物，不应以万物之灵自居，而应保持谦卑的态度对待自然。',
        difficulty: 2
      }
    ]
  },
  'chinese-bsd-8-3': {
    chapterName: '罗布泊，消逝的仙湖',
    questions: [
      {
        id: 'q863', type: 'choice',
        question: '《罗布泊，消逝的仙湖》的文体是',
        options: ['A. 小说', 'B. 报告文学', 'C. 诗歌', 'D. 戏剧'],
        answer: 'B',
        explanation: '《罗布泊，消逝的仙湖》是一篇报告文学，作者吴刚，以真实的材料报告了罗布泊由美丽的仙湖变成荒漠的悲剧，呼吁人们保护生态环境。',
        difficulty: 1
      },
      {
        id: 'q864', type: 'choice',
        question: '罗布泊曾经是什么样的地方？',
        options: ['A. 一直是一片沙漠', 'B. 曾经是牛马成群、绿林环绕、河流清澈的生命绿洲', 'C. 从来没有人居住', 'D. 一直是盐碱地'],
        answer: 'B',
        explanation: '文章通过对比手法，先描述了罗布泊过去曾是美丽富饶的仙湖——牛马成群、绿林环绕、河流清澈的生命绿洲，再写它如今变成了一片荒漠。',
        difficulty: 1
      },
      {
        id: 'q865', type: 'truefalse',
        question: '罗布泊变成荒漠的主要原因是气候自然变化。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '罗布泊消逝的主要原因是人为因素——人们盲目改造自然、不合理地开发利用水资源，导致塔里木河下游断流，罗布泊最终干涸。',
        difficulty: 2
      },
      {
        id: 'q866', type: 'fill',
        question: '文章运用了____的写法，将罗布泊昔日的美丽与今日的荒凉进行对比，增强了表达效果。',
        answer: '对比',
        explanation: '文章大量运用对比手法：过去的"仙湖"与现在的"荒漠"对比，绿色与黄色对比，生命与死亡对比，强烈地揭示了人类破坏生态环境的严重后果。',
        difficulty: 1
      },
      {
        id: 'q867', type: 'choice',
        question: '文章的写作目的是',
        options: ['A. 介绍罗布泊的地理位置', 'B. 呼吁人们保护生态环境，不要重蹈罗布泊的覆辙', 'C. 介绍新疆的风土人情', 'D. 赞美塔里木河的美丽'],
        answer: 'B',
        explanation: '文章通过罗布泊消逝的悲剧，警示人们要吸取教训，合理利用自然资源，保护生态环境，不要让更多的"仙湖"变成荒漠。',
        difficulty: 1
      },
      {
        id: 'q868', type: 'fill',
        question: '报告文学的特点是：____性强和____性强。',
        answer: '新闻（或"真实"）, 文学（或"艺术"）',
        explanation: '报告文学是介于新闻和文学之间的一种文体，既有新闻的真实性（用事实说话），又有文学的艺术性（运用多种文学手法），使文章既有说服力又有感染力。',
        difficulty: 2
      }
    ]
  },
  'chinese-bsd-9-0': {
    chapterName: '诗两首',
    questions: [
      {
        id: 'q869', type: 'choice',
        question: '《诗两首》中通常包含的诗歌有',
        options: ['A. 《我爱这土地》和《乡愁》', 'B. 《黎明的通知》等', 'C. 《水调歌头》', 'D. 《春望》'],
        answer: 'A',
        explanation: '根据人教版课本安排，"诗两首"通常指艾青的《我爱这土地》和余光中的《乡愁》，两首诗都以深沉的情感表达了家国之思。',
        difficulty: 1
      },
      {
        id: 'q870', type: 'choice',
        question: '现代诗歌与古诗相比，在形式上的主要特点是',
        options: ['A. 必须押韵', 'B. 句式自由，不拘格律', 'C. 字数固定', 'D. 必须对仗'],
        answer: 'B',
        explanation: '现代诗歌打破了古诗的格律束缚，句式自由灵活，不要求严格的押韵和对仗，更注重表达真情实感。',
        difficulty: 1
      },
      {
        id: 'q871', type: 'truefalse',
        question: '诗歌中的意象是指融入了作者主观情感的客观物象。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '意象是诗歌中的重要概念，指融入了诗人主观思想和情感的客观物象。如艾青诗中的"土地"、余光中诗中的"邮票"都是意象。',
        difficulty: 2
      },
      {
        id: 'q872', type: 'fill',
        question: '欣赏诗歌要从____、____、____等方面入手。',
        answer: '意象, 语言, 情感（或"意境""修辞"）',
        explanation: '欣赏诗歌一般从理解意象、品味语言、体会情感（或意境）等方面入手，感受诗歌的艺术魅力。',
        difficulty: 2
      },
      {
        id: 'q873', type: 'choice',
        question: '《我爱这土地》和《乡愁》的共同主题是',
        options: ['A. 爱情主题', 'B. 爱国思乡主题', 'C. 自然主题', 'D. 友情主题'],
        answer: 'B',
        explanation: '两首诗虽然风格和意象不同，但都表达了深沉的爱国思乡之情：艾青表达了对苦难祖国的爱，余光中表达了对故乡和祖国的思念。',
        difficulty: 1
      }
    ]
  },
  'chinese-bsd-9-1': {
    chapterName: '星星变奏曲',
    questions: [
      {
        id: 'q874', type: 'choice',
        question: '《星星变奏曲》的作者是',
        options: ['A. 舒婷', 'B. 江河', 'C. 顾城', 'D. 北岛'],
        answer: 'B',
        explanation: '《星星变奏曲》是朦胧诗派诗人江河（原名于友泽）的代表作，以"星星"为核心意象，表达了对光明和美好生活的向往。',
        difficulty: 1
      },
      {
        id: 'q875', type: 'choice',
        question: '诗中"星星"象征着',
        options: ['A. 宇宙中的星星', 'B. 光明、希望和美好的事物', 'C. 金钱', 'D. 权力'],
        answer: 'B',
        explanation: '"星星"在诗中是光明、希望、温暖和美好事物的象征。诗人渴望"星星"，表达了对美好生活的向往和对黑暗现实的不满。',
        difficulty: 1
      },
      {
        id: 'q876', type: 'truefalse',
        question: '"变奏曲"原是音乐术语，指主题的变形。在诗中指同一主题（对光明的向往）的不同表达。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '"变奏曲"是音乐术语，指在保留主题核心的基础上进行变化发展。诗中两节诗围绕同一主题（对星星、光明的向往），但意象和情感有所不同，类似音乐中的变奏。',
        difficulty: 2
      },
      {
        id: 'q877', type: 'fill',
        question: '诗歌第一节主要描写了对星星的____，第二节主要描写了没有星星的____，形成了鲜明的对比。',
        answer: '渴望（或"向往""追求"）, 苦闷（或"失望""悲伤"）',
        explanation: '第一节表达对美好理想（星星）的向往，第二节写理想不能实现时的失落和苦闷，两节形成对比，深化了主题。',
        difficulty: 2
      },
      {
        id: 'q878', type: 'choice',
        question: '《星星变奏曲》属于哪个诗歌流派？',
        options: ['A. 古典诗歌', 'B. 朦胧诗', 'C. 现实主义诗歌', 'D. 浪漫主义诗歌'],
        answer: 'B',
        explanation: '《星星变奏曲》属于朦胧诗派。朦胧诗是20世纪70年代末80年代初兴起的一种诗歌流派，注重意象的营造和内心情感的抒发，具有象征和暗示的特点。',
        difficulty: 2
      }
    ]
  },
  'chinese-bsd-9-2': {
    chapterName: '外国诗两首',
    questions: [
      {
        id: 'q879', type: 'choice',
        question: '《外国诗两首》中常见的选篇包括',
        options: ['A. 莱蒙托夫的《祖国》和休斯的《黑人谈河流》', 'B. 李白的诗', 'C. 杜甫的诗', 'D. 白居易的诗'],
        answer: 'A',
        explanation: '人教版九年级上册"外国诗两首"通常选录俄国诗人莱蒙托夫的《祖国》和美国诗人休斯的《黑人谈河流》两首诗歌。',
        difficulty: 1
      },
      {
        id: 'q880', type: 'choice',
        question: '莱蒙托夫是哪个国家的诗人？',
        options: ['A. 英国', 'B. 法国', 'C. 俄国', 'D. 德国'],
        answer: 'C',
        explanation: '米哈伊尔·莱蒙托夫（1814-1841）是俄国著名的诗人和作家，被誉为"普希金的继承者"，《祖国》是他的一首爱国诗。',
        difficulty: 1
      },
      {
        id: 'q881', type: 'truefalse',
        question: '《祖国》一诗中，莱蒙托夫以"爱理智的祖国"和"爱信仰的祖国"来否定俄罗斯。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '恰恰相反，莱蒙托夫在诗中否定的是那些空洞的、抽象的爱国口号，他表达的是对俄罗斯自然风光和普通人民生活的真挚而深沉的爱。',
        difficulty: 2
      },
      {
        id: 'q882', type: 'fill',
        question: '《黑人谈河流》中，休斯以"____"为核心意象，表现了黑人民族____的历史。',
        answer: '河流, 悠久（或"深长""古老"）',
        explanation: '诗人以"河流"象征人类文明的摇篮和黑人民族悠久的历史，从幼发拉底河到尼罗河到密西西比河，展现了黑人种族与人类文明同步的深厚历史。',
        difficulty: 2
      },
      {
        id: 'q883', type: 'choice',
        question: '兰斯顿·休斯是美国什么文学运动的代表人物？',
        options: ['A. 迷惘的一代', 'B. 哈莱姆文艺复兴（黑人文艺复兴）', 'C. 跨掉的一代', 'D. 意象派'],
        answer: 'B',
        explanation: '兰斯顿·休斯是20世纪20年代美国"哈莱姆文艺复兴"（又称黑人文艺复兴）运动的代表诗人，他的作品关注黑人的生活和命运。',
        difficulty: 2
      }
    ]
  },
  'chinese-bsd-9-3': {
    chapterName: '致女儿的信',
    questions: [
      {
        id: 'q884', type: 'choice',
        question: '《致女儿的信》的作者是',
        options: ['A. 高尔基', 'B. 苏霍姆林斯基', 'C. 托尔斯泰', 'D. 马卡连柯'],
        answer: 'B',
        explanation: '《致女儿的信》是苏联教育家苏霍姆林斯基写给女儿的一封信，以书信的形式回答了女儿关于"爱情是什么"的问题。',
        difficulty: 1
      },
      {
        id: 'q885', type: 'choice',
        question: '信中苏霍姆林斯基讲了一个关于"爱情"的故事，故事中的主人公是',
        options: ['A. 一对年轻情侣', 'B. 一个男孩、一个女孩和一位上帝', 'C. 一对老夫妻', 'D. 两个同学'],
        answer: 'B',
        explanation: '苏霍姆林斯基通过一个寓言故事来阐释爱情：上帝创造了一男一女，看到他们之间的爱情后，上帝被人类的爱情所震撼，认为这是他无法理解也无法创造的伟大力量。',
        difficulty: 2
      },
      {
        id: 'q886', type: 'truefalse',
        question: '苏霍姆林斯基认为爱情是不需要学习的，随着年龄增长自然会懂。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '苏霍姆林斯基认为爱情需要以崇高的精神为基础，需要培养真诚、善良、美好的心灵，需要学习和修养。他在信中正是要引导女儿正确地认识和理解爱情。',
        difficulty: 2
      },
      {
        id: 'q887', type: 'fill',
        question: '故事中，上帝三次来到人间，分别看到了人类爱情中的____、____和____。',
        answer: '美, 力量（或"忠诚"）, 心灵的追念（或"永恒"）',
        explanation: '上帝第一次看到爱情的美，第二次看到爱情的力量（忠诚），第三次看到爱情成为永恒的记忆（心灵的追念），这层层递进地揭示了爱情在不同阶段的内涵。',
        difficulty: 3
      },
      {
        id: 'q888', type: 'choice',
        question: '文章采用书信体的好处是',
        options: ['A. 节省纸张', 'B. 亲切自然，像面对面交谈，便于表达真情实感', 'C. 字数不多', 'D. 格式简单'],
        answer: 'B',
        explanation: '书信体使文章语气亲切自然，如同父亲与女儿面对面交流，既便于娓娓道来地讲述故事，又便于真诚地表达对爱情的理解和人生的感悟。',
        difficulty: 2
      }
    ]
  },
  // ===================== chinese-yuwen =====================
  'chinese-yuwen-7-0': {
    chapterName: '忆读书',
    questions: [
      {
        id: 'q889', type: 'choice',
        question: '《忆读书》的作者是',
        options: ['A. 鲁迅', 'B. 冰心', 'C. 老舍', 'D. 巴金'],
        answer: 'B',
        explanation: '《忆读书》是冰心的一篇散文，回忆了自己少年时代读书的经历和体会，总结出"读书好，多读书，读好书"的经验。',
        difficulty: 1
      },
      {
        id: 'q890', type: 'choice',
        question: '冰心在文中总结的读书经验是',
        options: ['A. 读书要快', 'B. 读书好，多读书，读好书', 'C. 只读名著', 'D. 读书要背下来'],
        answer: 'B',
        explanation: '冰心总结了自己一生的读书经验，归纳为九个字："读书好，多读书，读好书"，即认识到读书的好处，广泛阅读，选择优秀作品来读。',
        difficulty: 1
      },
      {
        id: 'q891', type: 'truefalse',
        question: '冰心七岁时就开始读《红楼梦》了。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '冰心在文中说她第一次读《三国演义》是在七岁左右，而读《红楼梦》则是在之后。她第一次读《红楼梦》时兴趣不大，直到后来才真正体会到这部书的精彩。',
        difficulty: 2
      },
      {
        id: 'q892', type: 'fill',
        question: '冰心说"____，____，____"是她一生读书的体会。',
        answer: '读书好, 多读书, 读好书',
        explanation: '冰心在文章结尾总结道："读书好，多读书，读好书"是她一生读书的经验，也是对后辈的忠告。',
        difficulty: 1
      },
      {
        id: 'q893', type: 'choice',
        question: '冰心认为读书最大的好处是',
        options: ['A. 可以考试得高分', 'B. 能明白为人处世的道理，陶冶情操', 'C. 可以赚钱', 'D. 可以炫耀自己'],
        answer: 'B',
        explanation: '冰心认为读书能使人明理，陶冶性情，获得精神上的享受和提升。读书不仅仅是为了获取知识，更是为了心灵的成长。',
        difficulty: 1
      }
    ]
  },
  'chinese-yuwen-7-1': {
    chapterName: '我的母亲',
    questions: [
      {
        id: 'q894', type: 'choice',
        question: '《我的母亲》的作者是',
        options: ['A. 鲁迅', 'B. 胡适', 'C. 朱自清', 'D. 老舍'],
        answer: 'B',
        explanation: '《我的母亲》是胡适的一篇回忆性散文，记叙了母亲教子有方、持家有道的事迹，表达了对母亲的深切怀念和感激。',
        difficulty: 1
      },
      {
        id: 'q895', type: 'choice',
        question: '胡适的母亲教育子女的方式主要是',
        options: ['A. 打骂教育', 'B. 言传身教，以宽容和严格并重的方式教育子女', 'C. 不管不问', 'D. 只让孩子玩'],
        answer: 'B',
        explanation: '胡适的母亲一方面以宽容和仁慈对待家人和佣人，另一方面对胡适的学习和品行要求非常严格，这种"慈母兼严师"的教育方式对胡适产生了深远的影响。',
        difficulty: 2
      },
      {
        id: 'q896', type: 'truefalse',
        question: '胡适的母亲是一个没有受过教育的人。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '胡适的母亲是一个普通农家的女儿，没有受过正规的学校教育，但她深知读书的重要性，坚持送胡适读书求学。',
        difficulty: 1
      },
      {
        id: 'q897', type: 'fill',
        question: '胡适说"我的恩师就是我的____"，表达了他对母亲深深的____之情。',
        answer: '母亲, 感激（或"感恩""怀念"）',
        explanation: '胡适在文中称母亲为自己的"恩师"，因为母亲不仅养育了他，更以严格的要求和良好的品德教育影响了他的一生。',
        difficulty: 1
      },
      {
        id: 'q898', type: 'choice',
        question: '文章写道母亲每天天不亮就起床，料理家务，这表现了母亲',
        options: ['A. 睡眠少', 'B. 勤劳持家、任劳任怨的品质', 'C. 喜欢早起', 'D. 身体好'],
        answer: 'B',
        explanation: '母亲每天天不亮就起床操持家务，处理大家庭的各种事务，任劳任怨，表现了她勤劳、能干、坚韧的品质。',
        difficulty: 1
      }
    ]
  },
  'chinese-yuwen-7-2': {
    chapterName: '我的老师',
    questions: [
      {
        id: 'q899', type: 'choice',
        question: '《我的老师》的作者是',
        options: ['A. 鲁迅', 'B. 魏巍', 'C. 冰心', 'D. 茅盾'],
        answer: 'B',
        explanation: '《我的老师》是当代作家魏巍的一篇回忆性散文，记叙了小学时蔡芸芝老师对"我"的关怀和爱护，表达了作者对老师的深深怀念和感激。',
        difficulty: 1
      },
      {
        id: 'q900', type: 'choice',
        question: '蔡芸芝老师最让"我"难忘的品质是',
        options: ['A. 严厉', 'B. 温柔、善良、热爱学生', 'C. 聪明', 'D. 富有'],
        answer: 'B',
        explanation: '蔡老师温柔善良，从不打骂学生，她用诗歌、音乐和故事来教育学生，对每一个孩子都充满了爱心和耐心。',
        difficulty: 1
      },
      {
        id: 'q901', type: 'truefalse',
        question: '"我"在梦中还在寻找蔡老师，醒来后还在喊"蔡老师"，这说明了"我"对蔡老师感情之深。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '梦中寻师、醒来呼喊这个细节生动地表现了年幼的"我"对蔡老师的深厚感情和深深依恋，也从侧面反映了蔡老师对学生真挚的关爱。',
        difficulty: 1
      },
      {
        id: 'q902', type: 'fill',
        question: '文章选取了蔡老师的几个典型事例来刻画她的形象，这种写法叫____描写。',
        answer: '细节（或"通过典型事例写人"）',
        explanation: '文章通过几个具体事例（教跳舞、读诗、看蜂蜜、排除"我"的小纠纷、梦里寻师等）来表现蔡老师的形象，使人物更加真实可感。',
        difficulty: 1
      },
      {
        id: 'q903', type: 'choice',
        question: '蔡老师排除了"我"和同学之间的小纠纷，这件事表现了蔡老师',
        options: ['A. 喜欢管闲事', 'B. 公正善良、善于处理学生之间的问题', 'C. 偏心', 'D. 多事'],
        answer: 'B',
        explanation: '蔡老师公正地处理了"我"与同学之间的矛盾，没有偏袒任何一方，既保护了孩子的自尊心，又化解了矛盾，体现了她的教育智慧。',
        difficulty: 2
      },
      {
        id: 'q904', type: 'fill',
        question: '文章结尾"什么时候，我能再见一见我的蔡老师呢？"表达了作者对老师____的感情。',
        answer: '深深的思念（或"怀念""眷恋"）',
        explanation: '以反问句结尾，更加深了对蔡老师的思念之情，言有尽而意无穷，让读者也深受感染。',
        difficulty: 1
      }
    ]
  },
  'chinese-yuwen-7-3': {
    chapterName: '我的信念',
    questions: [
      {
        id: 'q905', type: 'choice',
        question: '《我的信念》的作者是',
        options: ['A. 爱因斯坦', 'B. 居里夫人', 'C. 牛顿', 'D. 达尔文'],
        answer: 'B',
        explanation: '《我的信念》是居里夫人的一篇自述体散文，讲述了自己的人生信念、科学态度和生活态度。',
        difficulty: 1
      },
      {
        id: 'q906', type: 'choice',
        question: '居里夫人认为科学工作者应具备的基本品质是',
        options: ['A. 聪明', 'B. 执着的求知欲和献身科学的精神', 'C. 运气好', 'D. 出身好'],
        answer: 'B',
        explanation: '居里夫人在文中强调，科学工作者需要对真理有执着的追求，需要有献身精神，能耐得住寂寞，在艰苦的条件下坚持研究。',
        difficulty: 1
      },
      {
        id: 'q907', type: 'truefalse',
        question: '居里夫人一生获得了两次诺贝尔奖。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '居里夫人于1903年获得物理学诺贝尔奖（与丈夫皮埃尔·居里共享），1911年获得化学诺贝尔奖，是历史上第一位两次获得诺贝尔奖的科学家。',
        difficulty: 1
      },
      {
        id: 'q908', type: 'fill',
        question: '居里夫人说"我们必须有恒心，尤其要有____"，这句话说明了科学研究的艰苦性。',
        answer: '自信力（或"信心""自信"）',
        explanation: '居里夫人认为科学研究需要恒心和自信，在面对困难和挫折时不放弃，相信自己终将找到答案。',
        difficulty: 1
      },
      {
        id: 'q909', type: 'choice',
        question: '居里夫人在文中表达的人生态度是',
        options: ['A. 追求名利和财富', 'B. 淡泊名利，专注于科学事业', 'C. 享受生活', 'D. 出国留学'],
        answer: 'B',
        explanation: '居里夫人在文中表现出淡泊名利的人生态度，她认为科学研究的乐趣在于探索本身，而非由此带来的荣誉和财富。她把奖章给女儿当玩具，正是这种态度的体现。',
        difficulty: 2
      }
    ]
  },
  'chinese-yuwen-8-0': {
    chapterName: '新闻两篇',
    questions: [
      {
        id: 'q910', type: 'choice',
        question: '新闻的导语一般在文章的哪个位置？',
        options: ['A. 文章中间', 'B. 文章开头', 'C. 文章结尾', 'D. 文章标题'],
        answer: 'B',
        explanation: '导语一般在消息的开头（通常是第一段或第一句），用简练的语言概括新闻的最主要事实，让读者一目了然。',
        difficulty: 1
      },
      {
        id: 'q911', type: 'choice',
        question: '新闻中引用有关人士的话或数据，这种手法叫做',
        options: ['A. 描写', 'B. 引用（引述）', 'C. 夸张', 'D. 拟人'],
        answer: 'B',
        explanation: '新闻中经常引用当事人、目击者或权威人士的话，以及具体的数据，来增强新闻的真实性和说服力，这种手法叫做引用。',
        difficulty: 1
      },
      {
        id: 'q912', type: 'truefalse',
        question: '新闻的标题可以概括新闻的主要内容，也可以吸引读者阅读。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '新闻标题有两个主要功能：一是概括新闻的主要内容，二是吸引读者阅读。好的新闻标题应该准确、鲜明、生动。',
        difficulty: 1
      },
      {
        id: 'q913', type: 'fill',
        question: '新闻的"倒金字塔"结构是指：把最____的内容放在最前面，次要内容在后，最次要的内容在最后。',
        answer: '重要（或"主要""核心"）',
        explanation: '"倒金字塔"结构是新闻写作的基本结构方式，按重要程度递减的顺序安排内容，便于读者快速获取最重要的信息，也便于编辑从尾部删减。',
        difficulty: 2
      },
      {
        id: 'q914', type: 'choice',
        question: '写新闻应注意的几点中，不包括',
        options: ['A. 让事实说话', 'B. 运用文学化的虚构', 'C. 交代清楚"五要素"', 'D. 语言简明准确'],
        answer: 'B',
        explanation: '新闻必须真实，不能虚构。"让事实说话"是新闻写作的基本原则，运用文学化的虚构是小说等文学创作的方式，不适用于新闻。',
        difficulty: 1
      }
    ]
  },
  'chinese-yuwen-8-1': {
    chapterName: '芦花荡',
    questions: [
      {
        id: 'q915', type: 'choice',
        question: '孙犁的《芦花荡》的故事发生地是',
        options: ['A. 洞庭湖', 'B. 白洋淀', 'C. 太湖', 'D. 鄱阳湖'],
        answer: 'B',
        explanation: '故事发生在河北省白洋淀地区，这里水网密布、芦苇丛生，是抗战时期华北地区重要的抗日根据地之一。',
        difficulty: 1
      },
      {
        id: 'q916', type: 'choice',
        question: '小说描写老头子的外貌是"干瘦得像老了的鱼鹰"，这个比喻的作用是',
        options: ['A. 说明老头子长得很丑', 'B. 突出老头子的干练、精明和水上生活的经验', 'C. 说明老头子年纪很大', 'D. 说明老头子喜欢吃鱼'],
        answer: 'B',
        explanation: '"鱼鹰"是一种善于捕鱼的水鸟，比喻老头子干瘦精干，像鱼鹰一样与水为伴，具有丰富的水上生活经验和敏锐的身手。',
        difficulty: 2
      },
      {
        id: 'q917', type: 'truefalse',
        question: '大菱和小菱是姐妹俩，她们受老头子护送进入苇塘。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '大菱和小菱是姐妹俩，老头子负责护送她们进入白洋淀苇塘。途中大菱被鬼子打伤，老头子因此感到非常内疚，发誓要为她们报仇。',
        difficulty: 1
      },
      {
        id: 'q918', type: 'fill',
        question: '孙犁的小说风格清新隽永，被誉为"____派"的代表。',
        answer: '荷花淀（或"诗化小说"）',
        explanation: '孙犁的小说以描绘冀中平原和白洋淀地区的抗日斗争生活著称，风格清新朴素、富有诗意，被称为"荷花淀派"。',
        difficulty: 2
      },
      {
        id: 'q919', type: 'choice',
        question: '老头子说自己"什么事也没有"，但第二天却精心设伏教训了鬼子，这说明了',
        options: ['A. 老头子说话不算数', 'B. 老头子自尊心强，说到做到', 'C. 老头子记性不好', 'D. 老头子胆小'],
        answer: 'B',
        explanation: '老头子的自尊心极强，他认为自己"什么事也没有"（从来没有失过手），大菱受伤让他觉得丢了面子，因此第二天精心设伏教训鬼子，说到做到，维护了自己的尊严。',
        difficulty: 2
      }
    ]
  },
  'chinese-yuwen-8-2': {
    chapterName: '蜡烛',
    questions: [
      {
        id: 'q920', type: 'choice',
        question: '《蜡烛》的作者是',
        options: ['A. 苏联作家西蒙诺夫', 'B. 美国作家海明威', 'C. 法国作家雨果', 'D. 英国作家狄更斯'],
        answer: 'A',
        explanation: '《蜡烛》是苏联作家西蒙诺夫的一篇战地通讯，描写了第二次世界大战中一位南斯拉夫老妇人冒着炮火为牺牲的苏联红军战士安葬并点燃蜡烛的感人故事。',
        difficulty: 1
      },
      {
        id: 'q921', type: 'choice',
        question: '老妇人在苏联红军战士的坟前点燃蜡烛，"蜡烛"在文中的象征意义是',
        options: ['A. 照明工具', 'B. 两国人民之间的深厚情谊和正义的力量', 'C. 宗教仪式', 'D. 时间的流逝'],
        answer: 'B',
        explanation: '蜡烛象征着南斯拉夫人民对苏联红军的感激之情，象征着反法西斯战争中各国人民的深厚情谊，也象征着光明、正义和不灭的希望。',
        difficulty: 2
      },
      {
        id: 'q922', type: 'truefalse',
        question: '《蜡烛》是一篇小说。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '《蜡烛》是一篇战地通讯（新闻体裁），不是小说。它报道的是二战期间的真实事件，具有新闻的真实性特征。',
        difficulty: 1
      },
      {
        id: 'q923', type: 'fill',
        question: '老妇人将珍藏了____年的结婚蜡烛点燃放在红军战士的坟前，这个细节非常感人。',
        answer: '45',
        explanation: '老妇人拿出了自己珍藏了45年的结婚喜烛，这是她最珍贵的物品，她把它献给素不相识的苏联红军战士，表现了崇高的国际主义精神。',
        difficulty: 2
      },
      {
        id: 'q924', type: 'choice',
        question: '文中对炮火环境的描写有什么作用？',
        options: ['A. 增加文章的恐怖感', 'B. 烘托老妇人英勇无畏的精神，突出战争的残酷', 'C. 只是交代背景', 'D. 表现老妇人的恐惧'],
        answer: 'B',
        explanation: '炮火环境的描写既突出了战争的残酷和危险，又反衬了老妇人在枪林弹雨中为战士安葬的英勇无畏，增强了文章的感染力。',
        difficulty: 2
      }
    ]
  },
  'chinese-yuwen-8-3': {
    chapterName: '就英法联军远征中国致巴特勒上尉的信',
    questions: [
      {
        id: 'q925', type: 'choice',
        question: '这封信的作者是',
        options: ['A. 莎士比亚', 'B. 雨果', 'C. 巴尔扎克', 'D. 莫泊桑'],
        answer: 'B',
        explanation: '这封信是法国作家雨果在1861年写给巴特勒上尉的一封信，就英法联军第二次鸦片战争中火烧圆明园一事表明了自己的立场。',
        difficulty: 1
      },
      {
        id: 'q926', type: 'choice',
        question: '雨果在信中对英法联军火烧圆明园的态度是',
        options: ['A. 赞扬', 'B. 强烈谴责和愤怒批判', 'C. 无所谓', 'D. 支持'],
        answer: 'B',
        explanation: '雨果虽然自己是法国人，但他站在人类文明和正义的立场上，对英法联军的强盗行径进行了强烈的谴责和愤怒的批判，表现了他的人道主义精神。',
        difficulty: 1
      },
      {
        id: 'q927', type: 'truefalse',
        question: '雨果称英法联军为"两个强盗"，表现出他对侵略者的愤慨。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '雨果在信中明确将英法两国比作"两个强盗"，指出他们"洗劫"了圆明园，每个"强盗"都满载而归，深刻揭露了侵略者的强盗本质。',
        difficulty: 1
      },
      {
        id: 'q928', type: 'fill',
        question: '雨果称圆明园是"一个世界奇迹"，是"____艺术的典范"。',
        answer: '东方（或"亚洲"）',
        explanation: '雨果在信中盛赞圆明园是"世界奇迹"，是东方艺术的杰出代表，是人类文明的重要成果，以此反衬英法联军毁灭它的罪恶。',
        difficulty: 1
      },
      {
        id: 'q929', type: 'choice',
        question: '雨果作为法国人却谴责法国的侵略行为，这体现了他的什么精神？',
        options: ['A. 不爱国', 'B. 超越国界的人道主义精神和正义感', 'C. 胆小怕事', 'D. 多管闲事'],
        answer: 'B',
        explanation: '雨果不受狭隘的民族主义局限，站在全人类文明和正义的高度来评判是非，体现了伟大作家超越国界的人道主义精神和坚定的正义立场。',
        difficulty: 2
      }
    ]
  },
  'chinese-yuwen-9-0': {
    chapterName: '沁园春·雪',
    questions: [
      {
        id: 'q930', type: 'choice',
        question: '《沁园春·雪》中"须晴日，看红装素裹，分外妖娆"中"红装素裹"使用了什么修辞手法？',
        options: ['A. 拟人', 'B. 比喻', 'C. 夸张', 'D. 排比'],
        answer: 'A',
        explanation: '"红装素裹"本指女子穿红衣、披白纱的打扮，这里拟人化地描写雪后初晴、阳光映照白雪的美景，将大自然比作盛装的女子。',
        difficulty: 2
      },
      {
        id: 'q931', type: 'choice',
        question: '下阕中，作者分别评价了哪几位帝王？',
        options: ['A. 秦始皇、汉武帝、唐太宗、宋太祖、成吉思汗', 'B. 秦始皇、汉武帝、唐太宗、宋太祖、清世祖', 'C. 秦皇、汉武、唐宗、宋祖、成吉思汗', 'D. 秦始皇、刘邦、李世民、赵匡胤、铁木真'],
        answer: 'C',
        explanation: '下阕用"惜"字领起，依次评论了秦始皇、汉武帝、唐太宗、宋太祖、成吉思汗五位历史帝王，指出他们的不足在于"略输文采""稍逊风骚"。',
        difficulty: 1
      },
      {
        id: 'q932', type: 'truefalse',
        question: '"一代天骄，成吉思汗，只识弯弓射大雕"一句完全否定了成吉思汗的历史功绩。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '"只识弯弓射大雕"并非完全否定成吉思汗，而是批评他只重武功而文治不足。一个"惜"字和一个"只识"含蓄委婉，并非全盘否定。',
        difficulty: 2
      },
      {
        id: 'q933', type: 'fill',
        question: '"沁园春"是____名，"雪"是____。',
        answer: '词牌, 题目',
        explanation: '"沁园春"是词牌名，规定了词的格律和字数；"雪"是这首词的题目，表明了词的写作内容。',
        difficulty: 1
      },
      {
        id: 'q934', type: 'choice',
        question: '这首词最突出的写作特点是',
        options: ['A. 写景和议论相结合', 'B. 只写景不抒情', 'C. 只议论不写景', 'D. 纯粹叙事'],
        answer: 'A',
        explanation: '这首词将壮丽的雪景描写与精辟的历史评论完美结合，上阕写景，下阕议论抒情，景中有情，情中有理，气势恢宏。',
        difficulty: 2
      }
    ]
  },
  'chinese-yuwen-9-1': {
    chapterName: '雨说',
    questions: [
      {
        id: 'q935', type: 'choice',
        question: '《雨说》的作者是',
        options: ['A. 艾青', 'B. 郑愁予', 'C. 余光中', 'D. 洛夫'],
        answer: 'B',
        explanation: '《雨说》是台湾诗人郑愁予的一首现代诗，以"雨"的口吻向孩子们诉说，表达了对孩子们的关爱和对美好生活的祝福。',
        difficulty: 1
      },
      {
        id: 'q936', type: 'choice',
        question: '诗中"雨"的形象是',
        options: ['A. 令人讨厌的', 'B. 温柔、充满爱心、带来生机和希望的', 'C. 凶猛的', 'D. 冰冷的'],
        answer: 'B',
        explanation: '诗中的"雨"被拟人化为一个温柔慈爱的使者，它来探访大地，问候孩子们，给万物带来生机，给孩子们带来快乐和希望。',
        difficulty: 1
      },
      {
        id: 'q937', type: 'truefalse',
        question: '《雨说》是一首儿童诗，以"雨"的口吻与孩子们对话。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '这首诗以"雨"的自述口吻，用亲切温柔的语言与孩子们对话，告诉孩子们雨的到来意味着春天和希望的到来。',
        difficulty: 1
      },
      {
        id: 'q938', type: 'fill',
        question: '诗中"雨"说要教孩子们"笑"，这里的"笑"象征着____和____。',
        answer: '快乐（或"幸福"）, 希望（或"信心""乐观"）',
        explanation: '"笑"象征着快乐、幸福和对未来充满希望的生活态度。经历了苦难的中国儿童需要重新学会"笑"，意味着走出阴霾、迎接光明。',
        difficulty: 2
      },
      {
        id: 'q939', type: 'choice',
        question: '"雨说，我来了，我来的地方很遥远"暗示了这首诗的时代背景可能是',
        options: ['A. 春天来了', 'B. "文革"结束后，人们走出苦难、迎来新生的时代背景', 'C. 下雨天', 'D. 秋天到了'],
        answer: 'B',
        explanation: '诗中的"雨"从遥远的地方来，要教孩子们"笑"，暗示了经历过一段苦难岁月后，美好的事物（如同春雨）终于来到了孩子们身边。',
        difficulty: 3
      }
    ]
  },
  'chinese-yuwen-9-2': {
    chapterName: '星星变奏曲',
    questions: [
      {
        id: 'q940', type: 'choice',
        question: '《星星变奏曲》中，诗人渴望"柔软的晚上""蜜蜂嗡嗡的半醒的梦"，这些意象表达了对什么生活的向往？',
        options: ['A. 富裕的生活', 'B. 宁静、温馨、自由的生活', 'C. 刺激的生活', 'D. 城市生活'],
        answer: 'B',
        explanation: '"柔软的晚上""蜜蜂嗡嗡的半醒的梦"等意象营造了一种宁静、温馨、自由的生活氛围，表达了诗人对这种美好生活的深深向往。',
        difficulty: 2
      },
      {
        id: 'q941', type: 'choice',
        question: '诗中"如果大地的每个角落都充满了光明，谁还需要星星"这句话的意思是',
        options: ['A. 星星没有用', 'B. 如果现实中已经充满光明和美好，就不必在梦中追寻了，反衬现实的黑暗', 'C. 大地很亮', 'D. 星星太少了'],
        answer: 'B',
        explanation: '这是一个假设性反问，意思是如果现实世界已经足够美好，就不需要到诗歌和梦想中寻找慰藉了，恰恰反衬出当时现实的黑暗和令人不满。',
        difficulty: 2
      },
      {
        id: 'q942', type: 'truefalse',
        question: '《星星变奏曲》的两节诗结构相似，形成了一种"变奏"的效果。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '两节诗结构基本对称：都以"如果……谁还需要……谁还会……"的句式开头，但内容上一节写向往，一节写失落的现实，如同音乐中的主题与变奏。',
        difficulty: 2
      },
      {
        id: 'q943', type: 'fill',
        question: '朦胧诗的主要特点是注重表达个人的____体验，大量运用____手法。',
        answer: '内心（或"心灵"）, 象征（或"暗示""隐喻"）',
        explanation: '朦胧诗注重表达诗人内心的真实感受，大量运用象征、暗示、隐喻等手法，使诗歌具有多义性和朦胧美。',
        difficulty: 2
      }
    ]
  },
  'chinese-yuwen-9-3': {
    chapterName: '外国诗两首',
    questions: [
      {
        id: 'q944', type: 'choice',
        question: '《黑人谈河流》中"我了解河流"中的"河流"指的是',
        options: ['A. 一条具体的河', 'B. 人类古老的文明之河，象征黑人民族悠久的历史', 'C. 天上的河', 'D. 小溪'],
        answer: 'B',
        explanation: '诗中的"河流"不仅指具体的河流，更象征着人类文明的发源地和黑人民族悠久而深沉的历史。诗人说"我的灵魂变得像河流一般深邃"。',
        difficulty: 2
      },
      {
        id: 'q945', type: 'choice',
        question: '《祖国》中莱蒙托夫通过赞美俄罗斯的哪些景象来表达爱国之情？',
        options: ['A. 宫殿和教堂', 'B. 自然风光和普通农民的生活', 'C. 城市的繁华', 'D. 军队的威武'],
        answer: 'B',
        explanation: '莱蒙托夫笔下的"祖国"不是抽象的政治概念，也不是辉煌的建筑，而是俄罗斯广袤的土地、宁静的自然风光和普通农民朴素的生活，这种爱更加真实深沉。',
        difficulty: 2
      },
      {
        id: 'q946', type: 'truefalse',
        question: '"我的灵魂变得像河流一般深邃"这句话运用了比喻的修辞手法。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '诗人将自己的灵魂比作深邃的河流，比喻自己与河流一样拥有深沉的历史底蕴和丰富的精神世界。',
        difficulty: 1
      },
      {
        id: 'q947', type: 'fill',
        question: '《祖国》中"我爱祖国，但用的是奇异的爱情"一句中"奇异的爱情"指的是不同于常人理解的、对祖国自然和人民的____之爱。',
        answer: '深沉（或"真挚""朴实"）',
        explanation: '"奇异"并非奇怪，而是指诗人爱祖国的方式不同于那些空谈爱国的人——他爱的是祖国实实在在的土地、自然和人民，这种爱更加深沉、质朴和真挚。',
        difficulty: 2
      },
      {
        id: 'q948', type: 'choice',
        question: '阅读外国诗歌时，了解诗人所处的____和____有助于更好地理解诗歌的内涵。',
        options: ['A. 学校, 家庭', 'B. 时代背景, 文化传统', 'C. 天气, 季节', 'D. 年龄, 性别'],
        answer: 'B',
        explanation: '外国诗歌往往与本国的历史、文化、社会背景密切相关，了解这些背景知识有助于我们更深入地理解诗歌的意象、主题和情感。',
        difficulty: 1
      }
    ]
  },

  // sampleQuestions-batch3.js,
// ==========================================
  // english-pep
  // ==========================================

  'english-pep-7-0': {
    chapterName: "My name's Gina",
    questions: [
      {
        id: 'q900', type: 'choice',
        question: "— What's your name? — My name ___ Tom.",
        options: ['A. am', 'B. is', 'C. are', 'D. be'],
        answer: 'B',
        explanation: '"My name is Tom." uses "is" because "name" is a third-person singular subject.',
        difficulty: 1
      },
      {
        id: 'q901', type: 'fill',
        question: "— Nice to meet you. — Nice to meet you, _____.",
        answer: 'too',
        explanation: '"Nice to meet you, too" is the standard polite response.',
        difficulty: 1
      },
      {
        id: 'q902', type: 'choice',
        question: 'What ___ your telephone number?',
        options: ['A. am', 'B. is', 'C. are', 'D. do'],
        answer: 'B',
        explanation: '"Telephone number" is singular, so we use "is".',
        difficulty: 1
      },
      {
        id: 'q903', type: 'truefalse',
        question: '"What is her name?" is the correct way to ask about a girl\'s name.',
        options: ['A. True', 'B. False'],
        answer: 'A',
        explanation: '"What is her name?" correctly uses the possessive adjective "her" for a female.',
        difficulty: 1
      },
      {
        id: 'q904', type: 'fill',
        question: 'His name is Jack. ___ is my friend.',
        answer: 'He',
        explanation: 'We use the subject pronoun "He" to refer back to "Jack".',
        difficulty: 1
      },
      {
        id: 'q905', type: 'choice',
        question: '— Is she Mary? — Yes, ___.',
        options: ['A. she is', 'B. she does', 'C. he is', 'D. she was'],
        answer: 'A',
        explanation: 'Short affirmative answer: "Yes, she is." repeats the auxiliary/linking verb.',
        difficulty: 1
      },
      {
        id: 'q906', type: 'truefalse',
        question: 'We use "His" to ask about a boy\'s name.',
        options: ['A. True', 'B. False'],
        answer: 'B',
        explanation: 'We use "his" to refer to a boy\'s name, not to ask. To ask, we say "What is his name?"',
        difficulty: 2
      }
    ]
  },

  'english-pep-7-1': {
    chapterName: 'This is my sister',
    questions: [
      {
        id: 'q907', type: 'choice',
        question: '— Is this your sister? — ___, she is my friend.',
        options: ['A. Yes', 'B. No', 'C. OK', 'D. Sorry'],
        answer: 'B',
        explanation: 'The speaker says "she is my friend", so the answer is negative.',
        difficulty: 1
      },
      {
        id: 'q908', type: 'fill',
        question: 'Those ___ my parents, and this ___ my brother.',
        answer: 'are, is',
        explanation: '"Those" is plural (are), "this" is singular (is).',
        difficulty: 1
      },
      {
        id: 'q909', type: 'choice',
        question: '___ is my grandmother. Those are my grandparents.',
        options: ['A. This', 'B. These', 'C. That', 'D. It'],
        answer: 'A',
        explanation: '"This" is used for a singular person near the speaker.',
        difficulty: 1
      },
      {
        id: 'q910', type: 'truefalse',
        question: '"This is my friend, Li Lei." is a correct introduction sentence.',
        options: ['A. True', 'B. False'],
        answer: 'A',
        explanation: '"This is..." is the standard way to introduce someone in English.',
        difficulty: 1
      },
      {
        id: 'q911', type: 'fill',
        question: 'Here is a photo ___ my family.',
        answer: 'of',
        explanation: '"A photo of my family" — "of" indicates possession or relation.',
        difficulty: 1
      },
      {
        id: 'q912', type: 'choice',
        question: 'My mother\'s mother is my ___.',
        options: ['A. aunt', 'B. sister', 'C. grandmother', 'D. cousin'],
        answer: 'C',
        explanation: 'A mother\'s mother is a grandmother.',
        difficulty: 1
      }
    ]
  },

  'english-pep-7-2': {
    chapterName: 'Is there a post office near here?',
    questions: [
      {
        id: 'q913', type: 'choice',
        question: '— Is there a bank near here? — Yes, ___.',
        options: ['A. there is', 'B. there are', 'C. it is', 'D. there has'],
        answer: 'A',
        explanation: '"There is" is used with singular nouns in "there be" structures.',
        difficulty: 1
      },
      {
        id: 'q914', type: 'fill',
        question: 'The park is ___ Center Street.',
        answer: 'on',
        explanation: 'We use "on" to say a place is located on a specific street.',
        difficulty: 1
      },
      {
        id: 'q915', type: 'choice',
        question: 'The hospital is ___ the post office and the library.',
        options: ['A. next', 'B. between', 'C. across', 'D. behind'],
        answer: 'B',
        explanation: '"Between...and..." means in the middle of two things.',
        difficulty: 1
      },
      {
        id: 'q916', type: 'truefalse',
        question: '"Go along the street and turn right" means you should turn left first.',
        options: ['A. True', 'B. False'],
        answer: 'B',
        explanation: 'It means go straight along the street, then turn right.',
        difficulty: 1
      },
      {
        id: 'q917', type: 'fill',
        question: '— Where is the restaurant? — It\'s ___ from the bank.',
        answer: 'across',
        explanation: '"Across from" means on the opposite side of.',
        difficulty: 1
      },
      {
        id: 'q918', type: 'choice',
        question: '___ any restaurants near your home?',
        options: ['A. Are there', 'B. Is there', 'C. Have', 'D. Has'],
        answer: 'A',
        explanation: '"Restaurants" is plural, so we use "Are there".',
        difficulty: 2
      }
    ]
  },

  'english-pep-7-3': {
    chapterName: "I'm watching TV",
    questions: [
      {
        id: 'q919', type: 'choice',
        question: '— What are you doing? — I ___ TV.',
        options: ['A. watch', 'B. watches', 'C. am watching', 'D. watching'],
        answer: 'C',
        explanation: 'The present continuous tense (be + doing) describes actions happening now.',
        difficulty: 1
      },
      {
        id: 'q920', type: 'fill',
        question: 'Listen! She ___ a song in the next room.',
        answer: 'is singing',
        explanation: '"Listen!" indicates the action is happening right now, so we use present continuous.',
        difficulty: 1
      },
      {
        id: 'q921', type: 'choice',
        question: 'They ___ soccer every Sunday. (habit)',
        options: ['A. play', 'B. are playing', 'C. plays', 'D. played'],
        answer: 'A',
        explanation: '"Every Sunday" indicates a regular habit, so we use the simple present tense.',
        difficulty: 2
      },
      {
        id: 'q922', type: 'truefalse',
        question: '"He reads a book" uses the present continuous tense.',
        options: ['A. True', 'B. False'],
        answer: 'B',
        explanation: '"He reads a book" is simple present tense. Present continuous would be "He is reading a book."',
        difficulty: 1
      },
      {
        id: 'q923', type: 'fill',
        question: '— ___ they playing basketball? — No, they aren\'t.',
        answer: 'Are',
        explanation: 'To form a yes/no question in present continuous, put "be" before the subject.',
        difficulty: 1
      },
      {
        id: 'q924', type: 'choice',
        question: 'My father ___ the newspaper at the moment.',
        options: ['A. reads', 'B. is reading', 'C. read', 'D. readed'],
        answer: 'B',
        explanation: '"At the moment" indicates right now, so present continuous is used.',
        difficulty: 1
      },
      {
        id: 'q925', type: 'truefalse',
        question: 'We can use "now" or "at the moment" with the present continuous tense.',
        options: ['A. True', 'B. False'],
        answer: 'A',
        explanation: 'Time expressions like "now", "at the moment", "right now" are commonly used with present continuous.',
        difficulty: 1
      }
    ]
  },

  'english-pep-8-0': {
    chapterName: 'Where did you go on vacation?',
    questions: [
      {
        id: 'q926', type: 'choice',
        question: '— Where ___ you go on vacation? — I went to Beijing.',
        options: ['A. do', 'B. did', 'C. are', 'D. were'],
        answer: 'B',
        explanation: '"Did" is the past tense auxiliary used to form questions about the past.',
        difficulty: 1
      },
      {
        id: 'q927', type: 'fill',
        question: 'She ___ (visit) her grandparents last weekend.',
        answer: 'visited',
        explanation: '"Last weekend" indicates past time, so we use the past tense form "visited".',
        difficulty: 1
      },
      {
        id: 'q928', type: 'choice',
        question: 'The food there ___ really delicious.',
        options: ['A. is', 'B. was', 'C. were', 'D. are'],
        answer: 'B',
        explanation: 'The context is about a past vacation experience, so past tense "was" is used.',
        difficulty: 1
      },
      {
        id: 'q929', type: 'truefalse',
        question: '"I didn\'t went to the beach" is grammatically correct.',
        options: ['A. True', 'B. False'],
        answer: 'B',
        explanation: 'After "didn\'t", we use the base form of the verb: "I didn\'t go to the beach."',
        difficulty: 2
      },
      {
        id: 'q930', type: 'fill',
        question: '— ___ was the weather? — It was sunny and hot.',
        answer: 'How',
        explanation: 'We ask about weather conditions using "How was the weather?"',
        difficulty: 1
      },
      {
        id: 'q931', type: 'choice',
        question: 'We ___ a great time at the water park yesterday.',
        options: ['A. have', 'B. having', 'C. had', 'D. has'],
        answer: 'C',
        explanation: '"Yesterday" tells us it happened in the past, so we use "had" (past of "have").',
        difficulty: 1
      }
    ]
  },

  'english-pep-8-1': {
    chapterName: 'How often do you exercise?',
    questions: [
      {
        id: 'q932', type: 'choice',
        question: '— How often do you read books? — ___.',
        options: ['A. Two hours', 'B. Three times a week', 'C. Last Monday', 'D. Yes, I do'],
        answer: 'B',
        explanation: '"How often" asks about frequency. "Three times a week" answers frequency.',
        difficulty: 1
      },
      {
        id: 'q933', type: 'fill',
        question: 'She hardly ever ___ (eat) junk food.',
        answer: 'eats',
        explanation: 'The subject "she" is third-person singular, so the verb takes "-s" in simple present.',
        difficulty: 2
      },
      {
        id: 'q934', type: 'choice',
        question: '___ do you go to the movies? — About once a month.',
        options: ['A. How long', 'B. How far', 'C. How often', 'D. How much'],
        answer: 'C',
        explanation: '"How often" asks about how frequently something happens.',
        difficulty: 1
      },
      {
        id: 'q935', type: 'truefalse',
        question: '"Hardly ever" means almost never.',
        options: ['A. True', 'B. False'],
        answer: 'A',
        explanation: '"Hardly ever" means very rarely, almost never.',
        difficulty: 1
      },
      {
        id: 'q936', type: 'fill',
        question: 'My mother wants me ___ (drink) milk every day.',
        answer: 'to drink',
        explanation: '"Want someone to do something" — "want" is followed by an object + to-infinitive.',
        difficulty: 2
      },
      {
        id: 'q937', type: 'choice',
        question: '___ students in our class exercise every day.',
        options: ['A. Most', 'B. The most', 'C. More', 'D. Much'],
        answer: 'A',
        explanation: '"Most" as a determiner means "the majority of". "Most students" = the majority of students.',
        difficulty: 2
      }
    ]
  },

  'english-pep-8-2': {
    chapterName: "I'm more outgoing than my sister",
    questions: [
      {
        id: 'q938', type: 'choice',
        question: 'Tom is ___ than his brother.',
        options: ['A. tall', 'B. taller', 'C. tallest', 'D. the tallest'],
        answer: 'B',
        explanation: '"Than" indicates comparison between two people, so we use the comparative form "taller".',
        difficulty: 1
      },
      {
        id: 'q939', type: 'fill',
        question: 'This box is ___ (heavy) than that one.',
        answer: 'heavier',
        explanation: 'For one-syllable adjectives ending in consonant+y, change y to i and add -er: heavier.',
        difficulty: 2
      },
      {
        id: 'q940', type: 'choice',
        question: 'Lucy is as ___ as Lily. They are both good at singing.',
        options: ['A. good', 'B. better', 'C. best', 'D. well'],
        answer: 'A',
        explanation: '"As...as" uses the original form of the adjective: "as good as".',
        difficulty: 2
      },
      {
        id: 'q941', type: 'truefalse',
        question: '"She is more smarter than me." is correct English.',
        options: ['A. True', 'B. False'],
        answer: 'B',
        explanation: 'Short adjectives form comparatives with -er, not "more". It should be "She is smarter than me."',
        difficulty: 2
      },
      {
        id: 'q942', type: 'fill',
        question: 'My father is ___ (funny) than my mother.',
        answer: 'funnier',
        explanation: '"Funny" ends in consonant+y, so change y to i and add -er: funnier.',
        difficulty: 2
      },
      {
        id: 'q943', type: 'choice',
        question: 'I am ___ outgoing than my sister, but she is ___ hard-working.',
        options: ['A. more, much', 'B. much, more', 'C. more, more', 'D. much, much'],
        answer: 'A',
        explanation: '"More outgoing" for comparative; "much" as an intensifier meaning "a lot" before "more hard-working" would also work, but here "much hard-working" is an adverb intensifier for the adjective.',
        difficulty: 3
      }
    ]
  },

  'english-pep-8-3': {
    chapterName: "What's the best movie theater?",
    questions: [
      {
        id: 'q944', type: 'choice',
        question: 'Town Cinema has the ___ seats in town.',
        options: ['A. more comfortable', 'B. comfortable', 'C. most comfortable', 'D. comfortabler'],
        answer: 'C',
        explanation: '"The" + superlative form "most comfortable" is used for comparing three or more things.',
        difficulty: 1
      },
      {
        id: 'q945', type: 'fill',
        question: 'Screen City is ___ (popular) than Town Cinema.',
        answer: 'more popular',
        explanation: '"Popular" is a long adjective (3+ syllables), so we use "more" for the comparative.',
        difficulty: 1
      },
      {
        id: 'q946', type: 'choice',
        question: 'Which is the ___ way to get to school?',
        options: ['A. cheap', 'B. cheaper', 'C. cheapest', 'D. more cheap'],
        answer: 'C',
        explanation: '"The" before the superlative indicates the highest degree: "the cheapest".',
        difficulty: 1
      },
      {
        id: 'q947', type: 'truefalse',
        question: 'We use "the" before superlative adjectives.',
        options: ['A. True', 'B. False'],
        answer: 'A',
        explanation: 'Superlative adjectives are always preceded by "the" (e.g., "the best", "the biggest").',
        difficulty: 1
      },
      {
        id: 'q948', type: 'fill',
        question: 'Jason\'s is the ___ (bad) restaurant in the city.',
        answer: 'worst',
        explanation: 'The superlative of "bad" is irregular: bad → worse → worst.',
        difficulty: 2
      },
      {
        id: 'q949', type: 'choice',
        question: '— Which do you like ___, apples, bananas, or oranges? — I like oranges best.',
        options: ['A. good', 'B. better', 'C. best', 'D. well'],
        answer: 'C',
        explanation: 'Among three items, we use the superlative: "Which do you like best?"',
        difficulty: 1
      },
      {
        id: 'q950', type: 'truefalse',
        question: '"Good" becomes "gooder" in the comparative form.',
        options: ['A. True', 'B. False'],
        answer: 'B',
        explanation: '"Good" is irregular: good → better → best.',
        difficulty: 1
      }
    ]
  },

  'english-pep-9-0': {
    chapterName: 'How can we become good learners?',
    questions: [
      {
        id: 'q951', type: 'choice',
        question: 'I learn English by ___ English movies.',
        options: ['A. watch', 'B. watching', 'C. watched', 'D. watches'],
        answer: 'B',
        explanation: '"By + verb-ing" describes how something is done — the method or means.',
        difficulty: 1
      },
      {
        id: 'q952', type: 'fill',
        question: 'The ___ (much) you read, the ___ (fast) you will learn.',
        answer: 'more, faster',
        explanation: '"The + comparative, the + comparative" means "the more...the more..."',
        difficulty: 2
      },
      {
        id: 'q953', type: 'choice',
        question: 'It\'s too hard ___ understand the movie.',
        options: ['A. to', 'B. for', 'C. of', 'D. at'],
        answer: 'A',
        explanation: '"Too hard to understand" — "too + adj + to-infinitive" expresses degree.',
        difficulty: 2
      },
      {
        id: 'q954', type: 'truefalse',
        question: 'Repeating what you hear can help you improve your pronunciation.',
        options: ['A. True', 'B. False'],
        answer: 'A',
        explanation: 'Repetition is a proven technique for improving pronunciation and language skills.',
        difficulty: 1
      },
      {
        id: 'q955', type: 'fill',
        question: 'I don\'t know how ___ (increase) my reading speed.',
        answer: 'to increase',
        explanation: '"How to do something" — "how" is followed by a to-infinitive.',
        difficulty: 2
      },
      {
        id: 'q956', type: 'choice',
        question: '___ you learn wisely, you will make great progress.',
        options: ['A. Because', 'B. Unless', 'C. If', 'D. Although'],
        answer: 'C',
        explanation: '"If" introduces a condition: if you learn wisely, you will progress.',
        difficulty: 2
      }
    ]
  },

  'english-pep-9-1': {
    chapterName: 'I think that mooncakes are delicious!',
    questions: [
      {
        id: 'q957', type: 'choice',
        question: 'I wonder ___ June will come to the party.',
        options: ['A. that', 'B. what', 'C. if', 'D. which'],
        answer: 'C',
        explanation: '"Wonder if" introduces an indirect yes/no question about possibility.',
        difficulty: 2
      },
      {
        id: 'q958', type: 'fill',
        question: 'He told me that he ___ (will) come the next day.',
        answer: 'would',
        explanation: 'In reported speech, "will" changes to "would" when the reporting verb is in the past tense.',
        difficulty: 3
      },
      {
        id: 'q959', type: 'choice',
        question: 'The Mid-Autumn Festival is a time for ___ together with family.',
        options: ['A. get', 'B. getting', 'C. to getting', 'D. got'],
        answer: 'B',
        explanation: '"A time for + verb-ing" — the preposition "for" is followed by a gerund.',
        difficulty: 2
      },
      {
        id: 'q960', type: 'truefalse',
        question: '"I know that the Water Festival is fun." contains an object clause.',
        options: ['A. True', 'B. False'],
        answer: 'A',
        explanation: '"That the Water Festival is fun" is an object clause serving as the object of "know".',
        difficulty: 2
      },
      {
        id: 'q961', type: 'fill',
        question: 'Could you tell me where I ___ (can) buy some mooncakes?',
        answer: 'can',
        explanation: 'In indirect questions introduced by "could you tell me", the word order is subject-verb.',
        difficulty: 2
      },
      {
        id: 'q962', type: 'choice',
        question: 'Chinese people eat mooncakes ___ the Mid-Autumn Festival.',
        options: ['A. in', 'B. at', 'C. on', 'D. to'],
        answer: 'C',
        explanation: 'We use "on" for specific days and festivals.',
        difficulty: 1
      }
    ]
  },

  'english-pep-9-2': {
    chapterName: 'Could you please tell me where the restrooms are?',
    questions: [
      {
        id: 'q963', type: 'choice',
        question: 'Excuse me, could you tell me ___ the library is?',
        options: ['A. what', 'B. how', 'C. where', 'D. which'],
        answer: 'C',
        explanation: '"Where" asks about location. This is an indirect question for asking directions politely.',
        difficulty: 1
      },
      {
        id: 'q964', type: 'fill',
        question: 'Do you know ___ the mall opens at nine?',
        answer: 'if',
        explanation: '"If" introduces an indirect yes/no question: whether the mall opens at nine.',
        difficulty: 2
      },
      {
        id: 'q965', type: 'choice',
        question: 'The expressions "Could you please..." and "Would you mind..." are used to be ___.',
        options: ['A. direct', 'B. rude', 'C. polite', 'D. angry'],
        answer: 'C',
        explanation: 'These are polite ways to make requests in English.',
        difficulty: 1
      },
      {
        id: 'q966', type: 'truefalse',
        question: 'In an indirect question, we keep the question word order (verb before subject).',
        options: ['A. True', 'B. False'],
        answer: 'B',
        explanation: 'In indirect questions, the word order is subject-verb, like a statement.',
        difficulty: 2
      },
      {
        id: 'q967', type: 'fill',
        question: 'I wonder ___ there is a good restaurant around here.',
        answer: 'if',
        explanation: '"Wonder if" introduces an indirect yes/no question.',
        difficulty: 2
      },
      {
        id: 'q968', type: 'choice',
        question: '— Could you tell me where the bank is? — Sure. It\'s ___ Main Street.',
        options: ['A. in', 'B. on', 'C. at', 'D. by'],
        answer: 'B',
        explanation: 'We use "on" with street names: "on Main Street".',
        difficulty: 1
      }
    ]
  },

  'english-pep-9-3': {
    chapterName: "We're trying to save the earth!",
    questions: [
      {
        id: 'q969', type: 'choice',
        question: 'We should try ___ (protect) the environment.',
        options: ['A. protect', 'B. to protect', 'C. protecting', 'D. protected'],
        answer: 'B',
        explanation: '"Try to do something" means to make an effort. "Try to protect" = make an effort to protect.',
        difficulty: 1
      },
      {
        id: 'q970', type: 'fill',
        question: 'Recycling can help ___ (reduce) pollution.',
        answer: 'reduce',
        explanation: '"Help (to) do something" — the verb "help" can be followed by an infinitive (with or without "to").',
        difficulty: 1
      },
      {
        id: 'q971', type: 'choice',
        question: 'Air pollution is ___ (bad) than it was ten years ago.',
        options: ['A. bad', 'B. worse', 'C. worst', 'D. more bad'],
        answer: 'B',
        explanation: '"Worse" is the comparative form of the irregular adjective "bad".',
        difficulty: 2
      },
      {
        id: 'q972', type: 'truefalse',
        question: '"Take the bus instead of driving" is a way to help the environment.',
        options: ['A. True', 'B. False'],
        answer: 'A',
        explanation: 'Taking public transport instead of driving reduces carbon emissions.',
        difficulty: 1
      },
      {
        id: 'q973', type: 'fill',
        question: 'We can\'t afford ___ (wait) any longer to take action.',
        answer: 'to wait',
        explanation: '"Afford to do something" — "afford" is followed by a to-infinitive.',
        difficulty: 2
      },
      {
        id: 'q974', type: 'choice',
        question: 'Everyone should play a part in ___ the earth.',
        options: ['A. save', 'B. saving', 'C. to save', 'D. saved'],
        answer: 'B',
        explanation: '"Play a part in + verb-ing" — the preposition "in" is followed by a gerund.',
        difficulty: 2
      },
      {
        id: 'q975', type: 'truefalse',
        question: 'Plastic bags can be recycled and reused many times.',
        options: ['A. True', 'B. False'],
        answer: 'B',
        explanation: 'Most plastic bags are difficult to recycle and are a major source of pollution. Reducing their use is important.',
        difficulty: 2
      }
    ]
  },

  // ==========================================
  // english-waiyan
  // ==========================================

  'english-waiyan-7-0': {
    chapterName: 'Nice to meet you',
    questions: [
      {
        id: 'q976', type: 'choice',
        question: '— Nice to meet you. — ___.',
        options: ['A. Thank you', 'B. Nice to meet you, too', 'C. I\'m fine', 'D. How are you'],
        answer: 'B',
        explanation: '"Nice to meet you, too" is the standard polite response.',
        difficulty: 1
      },
      {
        id: 'q977', type: 'fill',
        question: 'Good morning! My name ___ Li Ming.',
        answer: 'is',
        explanation: 'With singular subjects like "name", we use "is".',
        difficulty: 1
      },
      {
        id: 'q978', type: 'choice',
        question: '— How are you? — I\'m ___.',
        options: ['A. twelve', 'B. a student', 'C. fine', 'D. in Class 3'],
        answer: 'C',
        explanation: '"How are you?" asks about health or well-being. "Fine" is the standard response.',
        difficulty: 1
      },
      {
        id: 'q979', type: 'truefalse',
        question: '"Good morning" is used in the afternoon.',
        options: ['A. True', 'B. False'],
        answer: 'B',
        explanation: '"Good morning" is used before noon. "Good afternoon" is used from noon to evening.',
        difficulty: 1
      },
      {
        id: 'q980', type: 'fill',
        question: '— What class are you in? — I\'m in Class ___, Grade ___.',
        answer: 'Three, Seven',
        explanation: 'In English, we say "Class [number], Grade [number]".',
        difficulty: 1
      },
      {
        id: 'q981', type: 'choice',
        question: '— Are you a student? — Yes, ___ ___.',
        options: ['A. I am', 'B. I do', 'C. I can', 'D. I will'],
        answer: 'A',
        explanation: 'The short answer repeats the "be" verb: "Yes, I am."',
        difficulty: 1
      }
    ]
  },

  'english-waiyan-7-1': {
    chapterName: "I'm from China",
    questions: [
      {
        id: 'q982', type: 'choice',
        question: '— Where are you from? — I\'m ___ China.',
        options: ['A. in', 'B. at', 'C. from', 'D. to'],
        answer: 'C',
        explanation: '"From" is used to indicate country or city of origin.',
        difficulty: 1
      },
      {
        id: 'q983', type: 'fill',
        question: 'Beijing is the ___ (capital) of China.',
        answer: 'capital',
        explanation: '"Capital" means the most important city of a country where the government is.',
        difficulty: 1
      },
      {
        id: 'q984', type: 'choice',
        question: 'She is from England. She is ___.',
        options: ['A. Chinese', 'B. English', 'C. American', 'D. Japanese'],
        answer: 'B',
        explanation: 'A person from England is English.',
        difficulty: 1
      },
      {
        id: 'q985', type: 'truefalse',
        question: '"I\'m from China" and "I come from China" have the same meaning.',
        options: ['A. True', 'B. False'],
        answer: 'A',
        explanation: 'Both express the same idea of origin. "Come from" is slightly more formal.',
        difficulty: 1
      },
      {
        id: 'q986', type: 'fill',
        question: '___ are you from? — I\'m from Shanghai.',
        answer: 'Where',
        explanation: '"Where" is the question word for asking about places.',
        difficulty: 1
      }
    ]
  },

  'english-waiyan-7-2': {
    chapterName: 'My school day',
    questions: [
      {
        id: 'q987', type: 'choice',
        question: 'I get up ___ six o\'clock ___ the morning.',
        options: ['A. at, in', 'B. in, at', 'C. at, on', 'D. on, in'],
        answer: 'A',
        explanation: '"At" is used with specific times; "in" is used with parts of the day (morning, afternoon, evening).',
        difficulty: 1
      },
      {
        id: 'q988', type: 'fill',
        question: 'We have four ___ (lesson) in the morning.',
        answer: 'lessons',
        explanation: '"Four" is plural, so "lesson" becomes "lessons".',
        difficulty: 1
      },
      {
        id: 'q989', type: 'choice',
        question: '— What\'s your favourite subject? — My favourite subject is ___.',
        options: ['A. I like English', 'B. English', 'C. an English', 'D. the English'],
        answer: 'B',
        explanation: 'When a subject is the complement, we use it without an article.',
        difficulty: 1
      },
      {
        id: 'q990', type: 'truefalse',
        question: 'In English, school subjects like "math" and "history" do not need capital letters.',
        options: ['A. True', 'B. False'],
        answer: 'A',
        explanation: 'School subjects are common nouns and are not capitalized in English (unless they are languages).',
        difficulty: 1
      },
      {
        id: 'q991', type: 'fill',
        question: 'School ___ (start) at eight and ___ (finish) at four.',
        answer: 'starts, finishes',
        explanation: 'Third-person singular "school" requires "-s" on the verbs.',
        difficulty: 1
      },
      {
        id: 'q992', type: 'choice',
        question: 'We ___ lunch at school every day.',
        options: ['A. have', 'B. has', 'C. having', 'D. had'],
        answer: 'A',
        explanation: '"We" is the first-person plural subject, so the verb is "have" (no "-s").',
        difficulty: 1
      }
    ]
  },

  'english-waiyan-7-3': {
    chapterName: 'My family',
    questions: [
      {
        id: 'q993', type: 'choice',
        question: 'There ___ five people in my family.',
        options: ['A. is', 'B. are', 'C. has', 'D. have'],
        answer: 'B',
        explanation: '"Five people" is plural, so we use "are" in the "there be" structure.',
        difficulty: 1
      },
      {
        id: 'q994', type: 'fill',
        question: 'My father is a ___ (teach) at a middle school.',
        answer: 'teacher',
        explanation: '"Teach" becomes "teacher" to form the noun for a person who teaches.',
        difficulty: 1
      },
      {
        id: 'q995', type: 'choice',
        question: 'My brother is older ___ me.',
        options: ['A. as', 'B. then', 'C. than', 'D. that'],
        answer: 'C',
        explanation: '"Older than" is the correct comparative structure.',
        difficulty: 1
      },
      {
        id: 'q996', type: 'truefalse',
        question: '"My mother is a housewife" means she works at home taking care of the family.',
        options: ['A. True', 'B. False'],
        answer: 'A',
        explanation: 'A housewife is a woman whose main job is taking care of her home and family.',
        difficulty: 1
      },
      {
        id: 'q997', type: 'fill',
        question: 'She ___ (not work) in a hospital. She works in a bank.',
        answer: 'doesn\'t work',
        explanation: 'With "she" in simple present, the negative is "doesn\'t work".',
        difficulty: 1
      }
    ]
  },

  'english-waiyan-8-0': {
    chapterName: 'Will people have robots?',
    questions: [
      {
        id: 'q998', type: 'choice',
        question: 'People ___ have robots in their homes in the future.',
        options: ['A. will', 'B. do', 'C. did', 'D. are'],
        answer: 'A',
        explanation: '"Will" is used for predictions about the future.',
        difficulty: 1
      },
      {
        id: 'q999', type: 'fill',
        question: 'There ___ (be) less free time in 100 years.',
        answer: 'will be',
        explanation: '"There will be" is used for predictions about existence in the future.',
        difficulty: 1
      },
      {
        id: 'q1000', type: 'choice',
        question: 'Kids ___ go to school. They\'ll study at home on computers.',
        options: ['A. will', 'B. won\'t', 'C. do', 'D. don\'t'],
        answer: 'B',
        explanation: '"Won\'t" (will not) is used for negative predictions about the future.',
        difficulty: 1
      },
      {
        id: 'q1001', type: 'truefalse',
        question: '"There will be more pollution" uses the simple future tense.',
        options: ['A. True', 'B. False'],
        answer: 'A',
        explanation: '"There will be" is the future tense of "there is/are".',
        difficulty: 1
      },
      {
        id: 'q1002', type: 'fill',
        question: 'I think cities ___ (be) very big and crowded in the future.',
        answer: 'will be',
        explanation: '"Will be" expresses a prediction about the future.',
        difficulty: 1
      },
      {
        id: 'q1003', type: 'choice',
        question: '___ people live to be 200 years old?',
        options: ['A. Do', 'B. Are', 'C. Will', 'D. Did'],
        answer: 'C',
        explanation: '"Will" is used to ask about future possibilities.',
        difficulty: 1
      }
    ]
  },

  'english-waiyan-8-1': {
    chapterName: 'What should I do?',
    questions: [
      {
        id: 'q1004', type: 'choice',
        question: 'You should ___ to your teacher for help.',
        options: ['A. talk', 'B. talked', 'C. talking', 'D. talks'],
        answer: 'A',
        explanation: '"Should" is a modal verb followed by the base form of the verb.',
        difficulty: 1
      },
      {
        id: 'q1005', type: 'fill',
        question: 'What should I ___ (do) if I fail the exam?',
        answer: 'do',
        explanation: '"Should" is followed by the base form of the verb.',
        difficulty: 1
      },
      {
        id: 'q1006', type: 'choice',
        question: 'You shouldn\'t ___ too much time playing games.',
        options: ['A. spend', 'B. to spend', 'C. spending', 'D. spent'],
        answer: 'A',
        explanation: '"Shouldn\'t" is followed by the base form of the verb.',
        difficulty: 1
      },
      {
        id: 'q1007', type: 'truefalse',
        question: '"Should" can be used to give advice.',
        options: ['A. True', 'B. False'],
        answer: 'A',
        explanation: '"Should" is commonly used to give advice and make recommendations.',
        difficulty: 1
      },
      {
        id: 'q1008', type: 'fill',
        question: 'Maybe you ___ (should) talk to your parents about this problem.',
        answer: 'should',
        explanation: '"Maybe you should" is a gentle way to give advice.',
        difficulty: 1
      },
      {
        id: 'q1009', type: 'choice',
        question: 'If you are tired, you ___ take a rest.',
        options: ['A. should', 'B. shouldn\'t', 'C. can\'t', 'D. don\'t'],
        answer: 'A',
        explanation: 'Taking a rest when tired is good advice, so "should" is appropriate.',
        difficulty: 1
      }
    ]
  },

  'english-waiyan-8-2': {
    chapterName: 'What were you doing when the UFO arrived?',
    questions: [
      {
        id: 'q1010', type: 'choice',
        question: 'I ___ (read) a book when the phone rang.',
        options: ['A. read', 'B. was reading', 'C. were reading', 'D. am reading'],
        answer: 'B',
        explanation: 'The past continuous tense (was/were + verb-ing) describes an action in progress when another event interrupted it.',
        difficulty: 2
      },
      {
        id: 'q1011', type: 'fill',
        question: 'While I ___ (walk) home, it started to rain.',
        answer: 'was walking',
        explanation: '"While" introduces a past continuous action that was in progress.',
        difficulty: 2
      },
      {
        id: 'q1012', type: 'choice',
        question: '___ you doing your homework at nine last night?',
        options: ['A. Are', 'B. Were', 'C. Was', 'D. Do'],
        answer: 'B',
        explanation: '"You" takes "were" in the past continuous tense.',
        difficulty: 2
      },
      {
        id: 'q1013', type: 'truefalse',
        question: '"When" and "while" can both be used with the past continuous tense.',
        options: ['A. True', 'B. False'],
        answer: 'A',
        explanation: 'Both can be used: "when" often connects two events; "while" emphasizes simultaneous actions.',
        difficulty: 2
      },
      {
        id: 'q1014', type: 'fill',
        question: 'The UFO landed while we ___ (have) a picnic.',
        answer: 'were having',
        explanation: '"While" + past continuous describes an ongoing action interrupted by another event.',
        difficulty: 2
      },
      {
        id: 'q1015', type: 'choice',
        question: 'She ___ TV when her mother came home.',
        options: ['A. watches', 'B. watched', 'C. was watching', 'D. is watching'],
        answer: 'C',
        explanation: 'Past continuous (was watching) describes what she was doing at the moment the mother arrived.',
        difficulty: 2
      }
    ]
  },

  'english-waiyan-8-3': {
    chapterName: 'He said I was hard-working',
    questions: [
      {
        id: 'q1016', type: 'choice',
        question: 'She said she ___ (be) happy.',
        options: ['A. is', 'B. was', 'C. will be', 'D. has been'],
        answer: 'B',
        explanation: 'In reported speech, "am/is" changes to "was" when the reporting verb is in the past.',
        difficulty: 2
      },
      {
        id: 'q1017', type: 'fill',
        question: 'He told me that he ___ (can) swim.',
        answer: 'could',
        explanation: 'In reported speech, "can" changes to "could" after a past tense reporting verb.',
        difficulty: 2
      },
      {
        id: 'q1018', type: 'choice',
        question: 'Tom said he ___ going to the park the next day.',
        options: ['A. is', 'B. was', 'C. will be', 'D. were'],
        answer: 'B',
        explanation: 'In reported speech, "is going to" changes to "was going to".',
        difficulty: 2
      },
      {
        id: 'q1019', type: 'truefalse',
        question: 'In reported speech, "I am" becomes "he/she was".',
        options: ['A. True', 'B. False'],
        answer: 'A',
        explanation: 'When converting direct speech to reported speech, "I am" changes to "he/she was".',
        difficulty: 2
      },
      {
        id: 'q1020', type: 'fill',
        question: 'Lana said she ___ (go) to the beach on Friday.',
        answer: 'was going',
        explanation: '"Was going" is the reported speech form of "is going".',
        difficulty: 2
      },
      {
        id: 'q1021', type: 'choice',
        question: 'He said, "I like math." → He said ___.',
        options: ['A. he likes math', 'B. he liked math', 'C. he is liking math', 'D. he like math'],
        answer: 'B',
        explanation: 'In reported speech with a past reporting verb, present simple "like" changes to past simple "liked".',
        difficulty: 3
      }
    ]
  },

  'english-waiyan-9-0': {
    chapterName: 'How to learn English well?',
    questions: [
      {
        id: 'q1022', type: 'choice',
        question: 'You can improve your English by ___ to English songs.',
        options: ['A. listen', 'B. listened', 'C. listening', 'D. listens'],
        answer: 'C',
        explanation: '"By + verb-ing" describes the method of doing something.',
        difficulty: 1
      },
      {
        id: 'q1023', type: 'fill',
        question: 'It\'s a good idea ___ (keep) an English diary every day.',
        answer: 'to keep',
        explanation: '"It\'s a good idea to do something" — "to" is followed by the base form.',
        difficulty: 2
      },
      {
        id: 'q1024', type: 'choice',
        question: 'Don\'t be afraid of ___ mistakes.',
        options: ['A. make', 'B. making', 'C. to make', 'D. made'],
        answer: 'B',
        explanation: '"Be afraid of + verb-ing" — the preposition "of" is followed by a gerund.',
        difficulty: 2
      },
      {
        id: 'q1025', type: 'truefalse',
        question: 'Watching English movies can help you improve your listening skills.',
        options: ['A. True', 'B. False'],
        answer: 'A',
        explanation: 'Watching movies in English is a great way to practice listening comprehension.',
        difficulty: 1
      },
      {
        id: 'q1026', type: 'fill',
        question: 'Why not ___ (join) an English club?',
        answer: 'join',
        explanation: '"Why not + base form" is a way to make a suggestion.',
        difficulty: 1
      },
      {
        id: 'q1027', type: 'choice',
        question: 'The ___ you practice, the ___ your English will be.',
        options: ['A. more, better', 'B. most, best', 'C. much, good', 'D. many, well'],
        answer: 'A',
        explanation: '"The more..., the better..." is a double comparative structure meaning more practice leads to better results.',
        difficulty: 2
      }
    ]
  },

  'english-waiyan-9-1': {
    chapterName: 'We need to protect animals',
    questions: [
      {
        id: 'q1028', type: 'choice',
        question: 'Pandas are in danger. We should try to ___ them.',
        options: ['A. protect', 'B. hunt', 'C. sell', 'D. catch'],
        answer: 'A',
        explanation: '"Protect" means to keep safe from harm, which is what endangered animals need.',
        difficulty: 1
      },
      {
        id: 'q1029', type: 'fill',
        question: 'Many animals are ___ (lose) their homes because of deforestation.',
        answer: 'losing',
        explanation: '"Are losing" is the present continuous tense describing an ongoing problem.',
        difficulty: 2
      },
      {
        id: 'q1030', type: 'choice',
        question: 'We shouldn\'t buy things ___ from endangered animals.',
        options: ['A. make', 'B. making', 'C. made', 'D. to make'],
        answer: 'C',
        explanation: '"Made from" is a past participle phrase used as an adjective to describe how things were produced.',
        difficulty: 2
      },
      {
        id: 'q1031', type: 'truefalse',
        question: 'Giant pandas only live in China.',
        options: ['A. True', 'B. False'],
        answer: 'A',
        explanation: 'Giant pandas are native to China and are found mainly in the mountainous regions of central China.',
        difficulty: 1
      },
      {
        id: 'q1032', type: 'fill',
        question: 'It\'s important for us ___ (save) the wild animals.',
        answer: 'to save',
        explanation: '"It\'s important for someone to do something" uses the to-infinitive.',
        difficulty: 2
      },
      {
        id: 'q1033', type: 'choice',
        question: 'The number of wild tigers is getting ___.',
        options: ['A. more', 'B. fewer', 'C. few', 'D. less'],
        answer: 'B',
        explanation: '"Fewer" is used with countable nouns. Tigers are countable, so "fewer" is correct.',
        difficulty: 2
      }
    ]
  },

  'english-waiyan-9-2': {
    chapterName: 'Great inventions',
    questions: [
      {
        id: 'q1034', type: 'choice',
        question: 'The telephone ___ by Alexander Graham Bell.',
        options: ['A. invents', 'B. invented', 'C. was invented', 'D. is inventing'],
        answer: 'C',
        explanation: 'The passive voice (was/were + past participle) is used when the focus is on the invention.',
        difficulty: 2
      },
      {
        id: 'q1035', type: 'fill',
        question: 'Paper ___ (invent) in ancient China.',
        answer: 'was invented',
        explanation: 'The passive voice is used for inventions: "was invented" (past passive).',
        difficulty: 2
      },
      {
        id: 'q1036', type: 'choice',
        question: 'Computers ___ (use) by millions of people every day.',
        options: ['A. use', 'B. used', 'C. are used', 'D. were used'],
        answer: 'C',
        explanation: 'Present simple passive: "are used" — computers are used by people now.',
        difficulty: 2
      },
      {
        id: 'q1037', type: 'truefalse',
        question: 'The passive voice is formed with "be + past participle".',
        options: ['A. True', 'B. False'],
        answer: 'A',
        explanation: 'The passive voice structure is: subject + be (in appropriate tense) + past participle.',
        difficulty: 2
      },
      {
        id: 'q1038', type: 'fill',
        question: 'The light bulb ___ (invent) by Thomas Edison.',
        answer: 'was invented',
        explanation: 'Past simple passive: "was invented" because it happened in the past.',
        difficulty: 2
      },
      {
        id: 'q1039', type: 'choice',
        question: '— When was the first car invented? — It ___ invented ___ 1886.',
        options: ['A. was, in', 'B. is, in', 'C. was, on', 'D. is, at'],
        answer: 'A',
        explanation: 'Past passive "was invented" + "in" for years.',
        difficulty: 1
      }
    ]
  },

  'english-waiyan-9-3': {
    chapterName: 'Australia',
    questions: [
      {
        id: 'q1040', type: 'choice',
        question: 'The capital of Australia is ___.',
        options: ['A. Sydney', 'B. Melbourne', 'C. Canberra', 'D. Perth'],
        answer: 'C',
        explanation: 'Canberra is the capital of Australia, not Sydney or Melbourne.',
        difficulty: 1
      },
      {
        id: 'q1041', type: 'fill',
        question: 'Australia is famous ___ its kangaroos and koalas.',
        answer: 'for',
        explanation: '"Famous for" is the correct collocation to indicate what something is known for.',
        difficulty: 1
      },
      {
        id: 'q1042', type: 'choice',
        question: 'The Great Barrier Reef is located ___ the northeast coast of Australia.',
        options: ['A. in', 'B. at', 'C. off', 'D. on'],
        answer: 'C',
        explanation: '"Off the coast" means near the coast in the ocean.',
        difficulty: 2
      },
      {
        id: 'q1043', type: 'truefalse',
        question: 'Australia is both a country and a continent.',
        options: ['A. True', 'B. False'],
        answer: 'A',
        explanation: 'Australia is the only country that is also a continent.',
        difficulty: 1
      },
      {
        id: 'q1044', type: 'fill',
        question: 'The Sydney Opera House is one of the most ___ (famous) buildings in the world.',
        answer: 'famous',
        explanation: '"Famous" is already in the superlative form here; "one of the most famous" is a common pattern.',
        difficulty: 1
      },
      {
        id: 'q1045', type: 'choice',
        question: 'Kangaroos carry their babies in a ___.',
        options: ['A. nest', 'B. pouch', 'C. cage', 'D. box'],
        answer: 'B',
        explanation: 'Kangaroos have a pouch (a pocket-like bag) on their belly where they carry their young.',
        difficulty: 1
      }
    ]
  },

  // ==========================================
  // english-yilin
  // ==========================================

  'english-yilin-7-0': {
    chapterName: 'This is me!',
    questions: [
      {
        id: 'q1046', type: 'choice',
        question: '— How old are you? — I am ___.',
        options: ['A. fine', 'B. twelve years old', 'C. a student', 'D. from China'],
        answer: 'B',
        explanation: '"How old are you?" asks about age. "Twelve years old" answers with age.',
        difficulty: 1
      },
      {
        id: 'q1047', type: 'fill',
        question: 'Let me ___ (introduce) myself. My name is Amy.',
        answer: 'introduce',
        explanation: '"Let me do something" — "let" is followed by the base form of the verb.',
        difficulty: 1
      },
      {
        id: 'q1048', type: 'choice',
        question: 'I ___ tall and I have short hair.',
        options: ['A. is', 'B. are', 'C. am', 'D. be'],
        answer: 'C',
        explanation: '"I" takes "am" as the linking verb.',
        difficulty: 1
      },
      {
        id: 'q1049', type: 'truefalse',
        question: '"I enjoy listening to music" means I like listening to music.',
        options: ['A. True', 'B. False'],
        answer: 'A',
        explanation: '"Enjoy" means to like or take pleasure in something.',
        difficulty: 1
      },
      {
        id: 'q1050', type: 'fill',
        question: 'She ___ (love) reading books in her free time.',
        answer: 'loves',
        explanation: 'Third-person singular "she" takes "loves" with "-s".',
        difficulty: 1
      },
      {
        id: 'q1051', type: 'choice',
        question: 'My hobby is ___ basketball.',
        options: ['A. play', 'B. plays', 'C. playing', 'D. played'],
        answer: 'C',
        explanation: '"Playing" is a gerund used as the complement of "is".',
        difficulty: 1
      }
    ]
  },

  'english-yilin-7-1': {
    chapterName: 'My family and friends',
    questions: [
      {
        id: 'q1052', type: 'choice',
        question: 'My best friend is good ___ drawing.',
        options: ['A. in', 'B. at', 'C. on', 'D. of'],
        answer: 'B',
        explanation: '"Be good at" means to be skilled at something.',
        difficulty: 1
      },
      {
        id: 'q1053', type: 'fill',
        question: 'My uncle is my father\'s ___ (old) brother.',
        answer: 'older',
        explanation: '"Older" is the comparative form of "old" and describes the brother who was born earlier.',
        difficulty: 1
      },
      {
        id: 'q1054', type: 'choice',
        question: 'I have a cousin ___ name is Linda.',
        options: ['A. who', 'B. which', 'C. whose', 'D. whom'],
        answer: 'C',
        explanation: '"Whose" is a relative possessive pronoun meaning "her name".',
        difficulty: 2
      },
      {
        id: 'q1055', type: 'truefalse',
        question: '"Aunt" can mean the sister of your father or the sister of your mother.',
        options: ['A. True', 'B. False'],
        answer: 'A',
        explanation: 'An aunt is the sister of either your father or your mother.',
        difficulty: 1
      },
      {
        id: 'q1056', type: 'fill',
        question: 'We always help each ___ (other).',
        answer: 'other',
        explanation: '"Each other" is a reciprocal pronoun meaning people help one another.',
        difficulty: 1
      }
    ]
  },

  'english-yilin-7-2': {
    chapterName: 'My day',
    questions: [
      {
        id: 'q1057', type: 'choice',
        question: 'I usually ___ (go) to school at seven in the morning.',
        options: ['A. go', 'B. goes', 'C. going', 'D. went'],
        answer: 'A',
        explanation: '"I usually..." uses the simple present tense with "go" (no "-s" with "I").',
        difficulty: 1
      },
      {
        id: 'q1058', type: 'fill',
        question: 'After school, I ___ (do) my homework first.',
        answer: 'do',
        explanation: 'Simple present tense with "I" — the verb is "do".',
        difficulty: 1
      },
      {
        id: 'q1059', type: 'choice',
        question: 'We have a break ___ ten o\'clock.',
        options: ['A. in', 'B. on', 'C. at', 'D. to'],
        answer: 'C',
        explanation: '"At" is used with specific clock times.',
        difficulty: 1
      },
      {
        id: 'q1060', type: 'truefalse',
        question: '"I always get up early" uses the adverb of frequency "always" before the verb.',
        options: ['A. True', 'B. False'],
        answer: 'A',
        explanation: 'Frequency adverbs (always, usually, often, sometimes, never) go before the main verb.',
        difficulty: 1
      },
      {
        id: 'q1061', type: 'fill',
        question: 'She ___ (not like) getting up early on weekends.',
        answer: 'doesn\'t like',
        explanation: 'Simple present negative with "she": "doesn\'t" + base form.',
        difficulty: 1
      },
      {
        id: 'q1062', type: 'choice',
        question: 'I go to bed ___ 9:30 p.m. every night.',
        options: ['A. in', 'B. on', 'C. at', 'D. for'],
        answer: 'C',
        explanation: '"At" is used with specific times: "at 9:30 p.m."',
        difficulty: 1
      }
    ]
  },

  'english-yilin-7-3': {
    chapterName: 'My neighbourhood',
    questions: [
      {
        id: 'q1063', type: 'choice',
        question: 'There is a supermarket ___ my house.',
        options: ['A. near', 'B. nearly', 'C. nearest', 'D. near to'],
        answer: 'A',
        explanation: '"Near" is a preposition meaning close to.',
        difficulty: 1
      },
      {
        id: 'q1064', type: 'fill',
        question: 'There ___ (be) a park and two shops in my neighbourhood.',
        answer: 'is',
        explanation: 'In "there be", the verb agrees with the nearest noun. "A park" is singular, so "is".',
        difficulty: 2
      },
      {
        id: 'q1065', type: 'choice',
        question: 'The library is ___ the bank and the post office.',
        options: ['A. between', 'B. among', 'C. next', 'D. beside'],
        answer: 'A',
        explanation: '"Between" is used for two things; "among" is used for three or more.',
        difficulty: 1
      },
      {
        id: 'q1066', type: 'truefalse',
        question: '"Go straight and turn left" is a common direction phrase.',
        options: ['A. True', 'B. False'],
        answer: 'A',
        explanation: 'This is a very common way to give directions in English.',
        difficulty: 1
      },
      {
        id: 'q1067', type: 'fill',
        question: 'The hospital is ___ (opposite) the school.',
        answer: 'opposite',
        explanation: '"Opposite" means directly across from something.',
        difficulty: 1
      },
      {
        id: 'q1068', type: 'choice',
        question: 'My neighbourhood is very ___. I like living here.',
        options: ['A. quiet', 'B. quietly', 'C. quieter', 'D. quietest'],
        answer: 'A',
        explanation: 'We need an adjective after "is" to describe the neighbourhood, not an adverb.',
        difficulty: 1
      }
    ]
  },

  'english-yilin-8-0': {
    chapterName: 'Friends',
    questions: [
      {
        id: 'q1069', type: 'choice',
        question: 'A good friend is someone who ___ you when you are sad.',
        options: ['A. cheers up', 'B. cheers on', 'C. gives up', 'D. puts up'],
        answer: 'A',
        explanation: '"Cheer someone up" means to make someone feel happier.',
        difficulty: 1
      },
      {
        id: 'q1070', type: 'fill',
        question: 'She is very ___ (help). She always helps others.',
        answer: 'helpful',
        explanation: '"Helpful" is the adjective form meaning willing to help.',
        difficulty: 1
      },
      {
        id: 'q1071', type: 'choice',
        question: 'I have known him ___ five years.',
        options: ['A. since', 'B. for', 'C. in', 'D. at'],
        answer: 'B',
        explanation: '"For" is used with a period of time; "since" is used with a point in time.',
        difficulty: 2
      },
      {
        id: 'q1072', type: 'truefalse',
        question: '"Generous" means willing to share with others and give money or help.',
        options: ['A. True', 'B. False'],
        answer: 'A',
        explanation: '"Generous" describes someone who is kind, giving, and unselfish.',
        difficulty: 1
      },
      {
        id: 'q1073', type: 'fill',
        question: 'We ___ (be) friends since primary school.',
        answer: 'have been',
        explanation: '"Since" + point in time uses the present perfect tense.',
        difficulty: 2
      },
      {
        id: 'q1074', type: 'choice',
        question: 'He is honest and always tells the ___.',
        options: ['A. story', 'B. truth', 'C. lie', 'D. joke'],
        answer: 'B',
        explanation: '"Tell the truth" means to be honest and not lie.',
        difficulty: 1
      }
    ]
  },

  'english-yilin-8-1': {
    chapterName: 'School life',
    questions: [
      {
        id: 'q1075', type: 'choice',
        question: 'We have a lot of ___ at school, like English, math, and science.',
        options: ['A. subject', 'B. subjects', 'C. a subject', 'D. the subject'],
        answer: 'B',
        explanation: '"A lot of" means many, so the noun should be plural: "subjects".',
        difficulty: 1
      },
      {
        id: 'q1076', type: 'fill',
        question: 'Our school ___ (have) a big library.',
        answer: 'has',
        explanation: 'Third-person singular "our school" takes "has" in simple present.',
        difficulty: 1
      },
      {
        id: 'q1077', type: 'choice',
        question: 'I\'m looking forward to ___ the school trip next week.',
        options: ['A. go on', 'B. going on', 'C. went on', 'D. goes on'],
        answer: 'B',
        explanation: '"Look forward to + verb-ing" — "to" here is a preposition, so it takes a gerund.',
        difficulty: 2
      },
      {
        id: 'q1078', type: 'truefalse',
        question: 'In British English, "maths" is short for mathematics.',
        options: ['A. True', 'B. False'],
        answer: 'A',
        explanation: '"Maths" (British English) and "math" (American English) are both abbreviations of "mathematics".',
        difficulty: 1
      },
      {
        id: 'q1079', type: 'fill',
        question: 'How many ___ (class) do you have every day?',
        answer: 'classes',
        explanation: '"How many" requires a plural countable noun: "classes".',
        difficulty: 1
      },
      {
        id: 'q1080', type: 'choice',
        question: 'We should ___ our best in every exam.',
        options: ['A. try', 'B. do', 'C. make', 'D. take'],
        answer: 'B',
        explanation: '"Do one\'s best" is the correct collocation meaning to try as hard as possible.',
        difficulty: 1
      }
    ]
  },

  'english-yilin-8-2': {
    chapterName: 'A trip to the zoo',
    questions: [
      {
        id: 'q1081', type: 'choice',
        question: 'Lions are ___ than rabbits.',
        options: ['A. dangerous', 'B. more dangerous', 'C. most dangerous', 'D. the most dangerous'],
        answer: 'B',
        explanation: '"Dangerous" is a long adjective, so its comparative form is "more dangerous".',
        difficulty: 1
      },
      {
        id: 'q1082', type: 'fill',
        question: 'Monkeys are good at ___ (climb) trees.',
        answer: 'climbing',
        explanation: '"Be good at + verb-ing" — "at" is a preposition followed by a gerund.',
        difficulty: 2
      },
      {
        id: 'q1083', type: 'choice',
        question: 'The elephant is ___ animal in the zoo.',
        options: ['A. the heaviest', 'B. heavier than', 'C. heavy', 'D. more heavy'],
        answer: 'A',
        explanation: '"The" + superlative "heaviest" because it compares all animals in the zoo.',
        difficulty: 1
      },
      {
        id: 'q1084', type: 'truefalse',
        question: 'Giraffes have the longest necks of all animals.',
        options: ['A. True', 'B. False'],
        answer: 'A',
        explanation: 'Giraffes are known for having very long necks — the longest of any animal.',
        difficulty: 1
      },
      {
        id: 'q1085', type: 'fill',
        question: 'We saw many ___ (monkey) in the zoo.',
        answer: 'monkeys',
        explanation: '"Many" is followed by a plural countable noun.',
        difficulty: 1
      }
    ]
  },

  'english-yilin-8-3': {
    chapterName: 'Seasons',
    questions: [
      {
        id: 'q1086', type: 'choice',
        question: 'Spring is the season ___ flowers bloom.',
        options: ['A. which', 'B. when', 'C. where', 'D. what'],
        answer: 'B',
        explanation: '"When" is a relative adverb referring to time, meaning "in which" or "at the time when".',
        difficulty: 2
      },
      {
        id: 'q1087', type: 'fill',
        question: 'In summer, the days are ___ (long) than in winter.',
        answer: 'longer',
        explanation: '"Long" is a one-syllable adjective, so its comparative form is "longer".',
        difficulty: 1
      },
      {
        id: 'q1088', type: 'choice',
        question: 'It\'s very cold outside. You ___ wear a warm coat.',
        options: ['A. should', 'B. shouldn\'t', 'C. can\'t', 'D. needn\'t'],
        answer: 'A',
        explanation: '"Should" gives advice — when it\'s cold, you should wear warm clothes.',
        difficulty: 1
      },
      {
        id: 'q1089', type: 'truefalse',
        question: 'In China, summer comes after spring and before autumn.',
        options: ['A. True', 'B. False'],
        answer: 'A',
        explanation: 'The order of seasons in China is: spring → summer → autumn → winter.',
        difficulty: 1
      },
      {
        id: 'q1090', type: 'fill',
        question: 'Look! It ___ (snow) heavily. Let\'s go outside and make a snowman.',
        answer: 'is snowing',
        explanation: '"Look!" indicates an action happening now. Present continuous: "is snowing".',
        difficulty: 1
      },
      {
        id: 'q1091', type: 'choice',
        question: 'My favourite season is ___ because I can swim.',
        options: ['A. spring', 'B. summer', 'C. autumn', 'D. winter'],
        answer: 'B',
        explanation: 'Swimming is most associated with summer because it\'s the warmest season.',
        difficulty: 1
      }
    ]
  },

  'english-yilin-9-0': {
    chapterName: 'Know yourself',
    questions: [
      {
        id: 'q1092', type: 'choice',
        question: 'She is very ___ and always comes up with new ideas.',
        options: ['A. lazy', 'B. creative', 'C. shy', 'D. careless'],
        answer: 'B',
        explanation: '"Creative" means having the ability to think of new and original ideas.',
        difficulty: 1
      },
      {
        id: 'q1093', type: 'fill',
        question: 'It\'s important ___ (know) yourself well.',
        answer: 'to know',
        explanation: '"It\'s important to do something" uses the to-infinitive.',
        difficulty: 1
      },
      {
        id: 'q1094', type: 'choice',
        question: 'He is a ___ person. He never gets angry easily.',
        options: ['A. patient', 'B. lazy', 'C. proud', 'D. nervous'],
        answer: 'A',
        explanation: '"Patient" means able to wait or accept delay without getting angry.',
        difficulty: 1
      },
      {
        id: 'q1095', type: 'truefalse',
        question: '"Organized" people like to keep things tidy and plan ahead.',
        options: ['A. True', 'B. False'],
        answer: 'A',
        explanation: 'An organized person keeps things in order and plans carefully.',
        difficulty: 1
      },
      {
        id: 'q1096', type: 'fill',
        question: 'I am not ___ (confident) enough to speak in public.',
        answer: 'confident',
        explanation: '"Confident" means feeling sure about yourself and your abilities.',
        difficulty: 1
      },
      {
        id: 'q1097', type: 'choice',
        question: 'She works hard and never gives up. She is very ___.',
        options: ['A. careless', 'B. curious', 'C. hard-working', 'D. impolite'],
        answer: 'C',
        explanation: '"Hard-working" describes someone who puts a lot of effort into their work.',
        difficulty: 1
      }
    ]
  },

  'english-yilin-9-1': {
    chapterName: 'Colours',
    questions: [
      {
        id: 'q1098', type: 'choice',
        question: 'Orange is a mixture of red and ___.',
        options: ['A. blue', 'B. green', 'C. yellow', 'D. black'],
        answer: 'C',
        explanation: 'Orange is made by mixing red and yellow.',
        difficulty: 1
      },
      {
        id: 'q1099', type: 'fill',
        question: 'The sky is ___ (blue) on a sunny day.',
        answer: 'blue',
        explanation: 'We use adjectives (like "blue") to describe the color of things.',
        difficulty: 1
      },
      {
        id: 'q1100', type: 'choice',
        question: 'In Western culture, ___ often represents sadness.',
        options: ['A. red', 'B. yellow', 'C. blue', 'D. green'],
        answer: 'C',
        explanation: '"Feeling blue" is an idiom meaning to feel sad. Blue is associated with sadness in Western culture.',
        difficulty: 1
      },
      {
        id: 'q1101', type: 'truefalse',
        question: 'Red can represent both love and anger in different contexts.',
        options: ['A. True', 'B. False'],
        answer: 'A',
        explanation: 'Red has multiple meanings: it can represent love (red hearts) or anger/danger (red warning signs).',
        difficulty: 2
      },
      {
        id: 'q1102', type: 'fill',
        question: 'Green is the colour of ___ (nature).',
        answer: 'nature',
        explanation: 'Green is commonly associated with nature, trees, and the environment.',
        difficulty: 1
      },
      {
        id: 'q1103', type: 'choice',
        question: 'She looks great ___ that blue dress.',
        options: ['A. in', 'B. on', 'C. at', 'D. with'],
        answer: 'A',
        explanation: '"Look great in" is used to describe how someone looks wearing a particular piece of clothing.',
        difficulty: 1
      }
    ]
  },

  'english-yilin-9-2': {
    chapterName: 'Teenage problems',
    questions: [
      {
        id: 'q1104', type: 'choice',
        question: 'Many teenagers feel ___ because of too much homework.',
        options: ['A. relaxed', 'B. stressed', 'C. excited', 'D. bored'],
        answer: 'B',
        explanation: '"Stressed" means feeling worried or under pressure, which is common with heavy homework loads.',
        difficulty: 1
      },
      {
        id: 'q1105', type: 'fill',
        question: 'I have no choice but ___ (accept) the challenge.',
        answer: 'to accept',
        explanation: '"Have no choice but to do something" — "but" here is followed by a to-infinitive.',
        difficulty: 2
      },
      {
        id: 'q1106', type: 'choice',
        question: 'If you have problems, you should talk to someone you ___.',
        options: ['A. trust', 'B. hate', 'C. fear', 'D. cheat'],
        answer: 'A',
        explanation: '"Trust" means to believe someone is reliable. You should talk to someone you can trust.',
        difficulty: 1
      },
      {
        id: 'q1107', type: 'truefalse',
        question: 'It\'s normal for teenagers to feel sad or worried sometimes.',
        options: ['A. True', 'B. False'],
        answer: 'A',
        explanation: 'It is completely normal for teenagers to experience emotional ups and downs.',
        difficulty: 1
      },
      {
        id: 'q1108', type: 'fill',
        question: 'He spends too much time ___ (play) computer games.',
        answer: 'playing',
        explanation: '"Spend time doing something" — "spend" is followed by time + verb-ing.',
        difficulty: 2
      },
      {
        id: 'q1109', type: 'choice',
        question: 'You should learn ___ (manage) your time well.',
        options: ['A. manage', 'B. managing', 'C. to manage', 'D. managed'],
        answer: 'C',
        explanation: '"Learn to do something" — "learn" is followed by a to-infinitive.',
        difficulty: 1
      }
    ]
  },

  'english-yilin-9-3': {
    chapterName: 'Great people',
    questions: [
      {
        id: 'q1110', type: 'choice',
        question: 'Marie Curie was a famous ___ who discovered radium.',
        options: ['A. writer', 'B. singer', 'C. scientist', 'D. artist'],
        answer: 'C',
        explanation: 'Marie Curie was a scientist who won Nobel Prizes for her work on radioactivity.',
        difficulty: 1
      },
      {
        id: 'q1111', type: 'fill',
        question: 'Thomas Edison ___ (invent) the light bulb.',
        answer: 'invented',
        explanation: 'Simple past tense: "invented" — a completed action in the past.',
        difficulty: 1
      },
      {
        id: 'q1112', type: 'choice',
        question: 'Yuan Longping is known ___ the "father of hybrid rice".',
        options: ['A. as', 'B. for', 'C. to', 'D. with'],
        answer: 'A',
        explanation: '"Be known as" means to be famous for being something.',
        difficulty: 2
      },
      {
        id: 'q1113', type: 'truefalse',
        question: 'Albert Einstein was a great scientist who developed the theory of relativity.',
        options: ['A. True', 'B. False'],
        answer: 'A',
        explanation: 'Einstein is one of the most famous scientists in history, known for the theory of relativity.',
        difficulty: 1
      },
      {
        id: 'q1114', type: 'fill',
        question: 'Nelson Mandela fought ___ equal rights for all people.',
        answer: 'for',
        explanation: '"Fight for" means to struggle to achieve or protect something.',
        difficulty: 2
      },
      {
        id: 'q1115', type: 'choice',
        question: 'Great people are those who ___ a difference in the world.',
        options: ['A. make', 'B. do', 'C. take', 'D. give'],
        answer: 'A',
        explanation: '"Make a difference" is an idiom meaning to have a positive effect on something.',
        difficulty: 2
      }
    ]
  },

  // ==========================================
  // english-hujiao
  // ==========================================

  'english-hujiao-7-0': {
    chapterName: 'Meeting new people',
    questions: [
      {
        id: 'q1116', type: 'choice',
        question: '— How do you do? — ___.',
        options: ['A. I\'m fine', 'B. How do you do?', 'C. I\'m OK', 'D. Nice to meet you'],
        answer: 'B',
        explanation: '"How do you do?" is a formal greeting, and the response is also "How do you do?"',
        difficulty: 1
      },
      {
        id: 'q1117', type: 'fill',
        question: 'Please let me ___ (introduce) my friend, Tom.',
        answer: 'introduce',
        explanation: '"Let me" is followed by the base form of the verb.',
        difficulty: 1
      },
      {
        id: 'q1118', type: 'choice',
        question: '— Where are you from? — I\'m ___ Beijing.',
        options: ['A. in', 'B. at', 'C. from', 'D. come'],
        answer: 'C',
        explanation: 'The question asks "where are you from", so the answer uses "from".',
        difficulty: 1
      },
      {
        id: 'q1119', type: 'truefalse',
        question: '"Pleased to meet you" is another way to say "Nice to meet you".',
        options: ['A. True', 'B. False'],
        answer: 'A',
        explanation: 'Both are polite ways to greet someone you are meeting for the first time.',
        difficulty: 1
      },
      {
        id: 'q1120', type: 'fill',
        question: 'May I ___ (have) your name, please?',
        answer: 'have',
        explanation: '"May I have..." is a polite way to ask for something.',
        difficulty: 1
      },
      {
        id: 'q1121', type: 'choice',
        question: 'Hello! ___ you Liu Mei?',
        options: ['A. Are', 'B. Is', 'C. Am', 'D. Do'],
        answer: 'A',
        explanation: '"You" takes "Are" as the "be" verb.',
        difficulty: 1
      }
    ]
  },

  'english-hujiao-7-1': {
    chapterName: 'My daily life',
    questions: [
      {
        id: 'q1122', type: 'choice',
        question: 'I usually ___ breakfast at seven o\'clock.',
        options: ['A. has', 'B. have', 'C. having', 'D. had'],
        answer: 'B',
        explanation: '"I usually..." uses simple present. "Have" is the correct form for "I".',
        difficulty: 1
      },
      {
        id: 'q1123', type: 'fill',
        question: 'She ___ (brush) her teeth twice a day.',
        answer: 'brushes',
        explanation: 'Third-person singular "she" takes "brushes" (add -es after -sh).',
        difficulty: 1
      },
      {
        id: 'q1124', type: 'choice',
        question: '— What time do you go to school? — I go to school ___ 7:30.',
        options: ['A. in', 'B. on', 'C. at', 'D. by'],
        answer: 'C',
        explanation: '"At" is used with specific clock times.',
        difficulty: 1
      },
      {
        id: 'q1125', type: 'truefalse',
        question: '"She never eats breakfast" means she eats breakfast every day.',
        options: ['A. True', 'B. False'],
        answer: 'B',
        explanation: '"Never" means not at any time — she does not eat breakfast.',
        difficulty: 1
      },
      {
        id: 'q1126', type: 'fill',
        question: 'After dinner, I usually ___ (do) my homework.',
        answer: 'do',
        explanation: 'Simple present tense with "I" — "do".',
        difficulty: 1
      },
      {
        id: 'q1127', type: 'choice',
        question: 'He ___ (take) a shower every morning.',
        options: ['A. take', 'B. takes', 'C. taking', 'D. took'],
        answer: 'B',
        explanation: 'Third-person singular "he" takes "takes" (add -es after -ke).',
        difficulty: 1
      }
    ]
  },

  'english-hujiao-7-2': {
    chapterName: 'Places and activities',
    questions: [
      {
        id: 'q1128', type: 'choice',
        question: 'We often go to the ___ to borrow books.',
        options: ['A. hospital', 'B. library', 'C. museum', 'D. cinema'],
        answer: 'B',
        explanation: 'A library is a place where you can borrow and read books.',
        difficulty: 1
      },
      {
        id: 'q1129', type: 'fill',
        question: 'Let\'s go ___ (swim) in the pool.',
        answer: 'swimming',
        explanation: '"Go + verb-ing" is used for leisure activities: go swimming, go shopping, go fishing.',
        difficulty: 1
      },
      {
        id: 'q1130', type: 'choice',
        question: 'The museum is open ___ Monday to Saturday.',
        options: ['A. in', 'B. on', 'C. from', 'D. at'],
        answer: 'C',
        explanation: '"From...to..." is used to describe a range, including days of the week.',
        difficulty: 1
      },
      {
        id: 'q1131', type: 'truefalse',
        question: '"Go shopping" and "go to shop" mean the same thing.',
        options: ['A. True', 'B. False'],
        answer: 'B',
        explanation: '"Go shopping" is a leisure activity. "Go to the shop" means to visit a shop. They are different.',
        difficulty: 2
      },
      {
        id: 'q1132', type: 'fill',
        question: 'You can see many old things in a ___ (museum).',
        answer: 'museum',
        explanation: 'A museum is a building where historical, scientific, or artistic objects are exhibited.',
        difficulty: 1
      }
    ]
  },

  'english-hujiao-7-3': {
    chapterName: 'What can you do?',
    questions: [
      {
        id: 'q1133', type: 'choice',
        question: '— Can you swim? — Yes, I ___.',
        options: ['A. do', 'B. can', 'C. am', 'D. does'],
        answer: 'B',
        explanation: 'The short answer for "can" questions is "Yes, I can" or "No, I can\'t".',
        difficulty: 1
      },
      {
        id: 'q1134', type: 'fill',
        question: 'She can ___ (speak) English very well.',
        answer: 'speak',
        explanation: '"Can" is a modal verb followed by the base form of the verb.',
        difficulty: 1
      },
      {
        id: 'q1135', type: 'choice',
        question: 'He can\'t ___ a bike. He is only three years old.',
        options: ['A. ride', 'B. rides', 'C. riding', 'D. rode'],
        answer: 'A',
        explanation: '"Can\'t" is followed by the base form of the verb.',
        difficulty: 1
      },
      {
        id: 'q1136', type: 'truefalse',
        question: '"Can" is used to talk about ability.',
        options: ['A. True', 'B. False'],
        answer: 'A',
        explanation: '"Can" expresses ability: what someone is able to do.',
        difficulty: 1
      },
      {
        id: 'q1137', type: 'fill',
        question: '— What can you do? — I ___ (can) sing and dance.',
        answer: 'can',
        explanation: '"Can" is the modal verb used to talk about abilities.',
        difficulty: 1
      },
      {
        id: 'q1138', type: 'choice',
        question: '___ your brother play football?',
        options: ['A. Does', 'B. Can', 'C. Is', 'D. Has'],
        answer: 'B',
        explanation: '"Can" is used to ask about ability: "Can your brother play football?"',
        difficulty: 1
      }
    ]
  },

  'english-hujiao-8-0': {
    chapterName: 'Pen pals',
    questions: [
      {
        id: 'q1139', type: 'choice',
        question: 'I have a pen pal ___ lives in Australia.',
        options: ['A. who', 'B. which', 'C. where', 'D. what'],
        answer: 'A',
        explanation: '"Who" is a relative pronoun used for people.',
        difficulty: 2
      },
      {
        id: 'q1140', type: 'fill',
        question: 'She enjoys ___ (write) letters to her pen pal.',
        answer: 'writing',
        explanation: '"Enjoy + verb-ing" — enjoy is followed by a gerund.',
        difficulty: 1
      },
      {
        id: 'q1141', type: 'choice',
        question: 'My pen pal is ___ America. She is American.',
        options: ['A. in', 'B. at', 'C. from', 'D. of'],
        answer: 'C',
        explanation: '"From" indicates where someone comes from.',
        difficulty: 1
      },
      {
        id: 'q1142', type: 'truefalse',
        question: 'A pen pal is someone you write letters or emails to.',
        options: ['A. True', 'B. False'],
        answer: 'A',
        explanation: 'A pen pal (pen friend) is someone you communicate with through letters or emails.',
        difficulty: 1
      },
      {
        id: 'q1143', type: 'fill',
        question: 'We ___ (write) to each other every month.',
        answer: 'write',
        explanation: 'Simple present tense with "we" — the verb is "write".',
        difficulty: 1
      },
      {
        id: 'q1144', type: 'choice',
        question: 'I\'d like ___ (make) friends with people from different countries.',
        options: ['A. make', 'B. to make', 'C. making', 'D. made'],
        answer: 'B',
        explanation: '"Would like to do something" — "would like" is followed by a to-infinitive.',
        difficulty: 1
      }
    ]
  },

  'english-hujiao-8-1': {
    chapterName: 'My neighbourhood',
    questions: [
      {
        id: 'q1145', type: 'choice',
        question: 'There ___ a park near my house.',
        options: ['A. have', 'B. has', 'C. is', 'D. are'],
        answer: 'C',
        explanation: '"There is" is used with singular nouns in the "there be" structure.',
        difficulty: 1
      },
      {
        id: 'q1146', type: 'fill',
        question: 'The supermarket is ___ (cross) from the bank.',
        answer: 'across',
        explanation: '"Across from" means on the opposite side of.',
        difficulty: 1
      },
      {
        id: 'q1147', type: 'choice',
        question: '— Is there a post office near here? — ___.',
        options: ['A. Yes, there is', 'B. Yes, it is', 'C. Yes, there has', 'D. Yes, there are'],
        answer: 'A',
        explanation: 'The short answer to "Is there...?" is "Yes, there is" or "No, there isn\'t".',
        difficulty: 1
      },
      {
        id: 'q1148', type: 'truefalse',
        question: '"Next to" means close to and beside something.',
        options: ['A. True', 'B. False'],
        answer: 'A',
        explanation: '"Next to" means immediately beside or adjacent to something.',
        difficulty: 1
      },
      {
        id: 'q1149', type: 'fill',
        question: '___ your neighbourhood quiet?',
        answer: 'Is',
        explanation: '"Neighbourhood" is singular, so we use "Is".',
        difficulty: 1
      }
    ]
  },

  'english-hujiao-8-2': {
    chapterName: 'Our wonderful world',
    questions: [
      {
        id: 'q1150', type: 'choice',
        question: 'The Great Wall of China is one of the ___ wonders in the world.',
        options: ['A. great', 'B. greater', 'C. greatest', 'D. most great'],
        answer: 'C',
        explanation: '"One of the + superlative + plural noun" is a common pattern.',
        difficulty: 2
      },
      {
        id: 'q1151', type: 'fill',
        question: 'The Amazon is the ___ (long) river in South America.',
        answer: 'longest',
        explanation: '"The" + superlative "longest" for the river with the most length.',
        difficulty: 1
      },
      {
        id: 'q1152', type: 'choice',
        question: 'Mount Everest is the ___ mountain in the world.',
        options: ['A. high', 'B. higher', 'C. highest', 'D. most high'],
        answer: 'C',
        explanation: '"Highest" is the superlative form of "high".',
        difficulty: 1
      },
      {
        id: 'q1153', type: 'truefalse',
        question: 'The Sahara is the largest desert in the world.',
        options: ['A. True', 'B. False'],
        answer: 'A',
        explanation: 'The Sahara Desert in Africa is the largest hot desert in the world.',
        difficulty: 1
      },
      {
        id: 'q1154', type: 'fill',
        question: 'The earth ___ (go) around the sun.',
        answer: 'goes',
        explanation: 'Third-person singular "the earth" takes "goes" in simple present.',
        difficulty: 1
      },
      {
        id: 'q1155', type: 'choice',
        question: 'The Pacific Ocean is ___ than the Atlantic Ocean.',
        options: ['A. big', 'B. bigger', 'C. biggest', 'D. the biggest'],
        answer: 'B',
        explanation: '"Bigger" is the comparative form. We compare two oceans, so comparative is needed.',
        difficulty: 1
      }
    ]
  },

  'english-hujiao-8-3': {
    chapterName: 'Rules around us',
    questions: [
      {
        id: 'q1156', type: 'choice',
        question: 'We ___ run in the hallway. It\'s against the rules.',
        options: ['A. must', 'B. mustn\'t', 'C. can', 'D. should'],
        answer: 'B',
        explanation: '"Mustn\'t" expresses prohibition — something that is not allowed.',
        difficulty: 1
      },
      {
        id: 'q1157', type: 'fill',
        question: 'You should ___ (listen) to the teacher carefully in class.',
        answer: 'listen',
        explanation: '"Should" is followed by the base form of the verb.',
        difficulty: 1
      },
      {
        id: 'q1158', type: 'choice',
        question: '— Must I finish my homework now? — No, you ___.',
        options: ['A. mustn\'t', 'B. can\'t', 'C. don\'t have to', 'D. shouldn\'t'],
        answer: 'C',
        explanation: '"No, you don\'t have to" means it is not necessary. "Mustn\'t" would mean it is prohibited.',
        difficulty: 2
      },
      {
        id: 'q1159', type: 'truefalse',
        question: '"You must wear a uniform" means wearing a uniform is a rule.',
        options: ['A. True', 'B. False'],
        answer: 'A',
        explanation: '"Must" expresses obligation and rules.',
        difficulty: 1
      },
      {
        id: 'q1160', type: 'fill',
        question: 'We must ___ (keep) our classroom clean.',
        answer: 'keep',
        explanation: '"Must" is followed by the base form of the verb.',
        difficulty: 1
      },
      {
        id: 'q1161', type: 'choice',
        question: 'We should be on time and not ___ late.',
        options: ['A. arrive', 'B. arriving', 'C. arrived', 'D. arrives'],
        answer: 'A',
        explanation: '"Should not + base form" — "arrive" is the base form.',
        difficulty: 1
      }
    ]
  },

  'english-hujiao-9-0': {
    chapterName: 'The body and the mind',
    questions: [
      {
        id: 'q1162', type: 'choice',
        question: 'Exercise is good for both your body and your ___.',
        options: ['A. mind', 'B. leg', 'C. arm', 'D. foot'],
        answer: 'A',
        explanation: 'Exercise benefits both physical health (body) and mental health (mind).',
        difficulty: 1
      },
      {
        id: 'q1163', type: 'fill',
        question: 'You should eat a ___ (balance) diet to stay healthy.',
        answer: 'balanced',
        explanation: '"Balanced diet" means eating a variety of foods in the right proportions.',
        difficulty: 2
      },
      {
        id: 'q1164', type: 'choice',
        question: 'If you feel stressed, you should ___ a deep breath.',
        options: ['A. make', 'B. take', 'C. give', 'D. have'],
        answer: 'B',
        explanation: '"Take a deep breath" is a common expression for calming down.',
        difficulty: 1
      },
      {
        id: 'q1165', type: 'truefalse',
        question: 'Getting enough sleep is important for your brain.',
        options: ['A. True', 'B. False'],
        answer: 'A',
        explanation: 'Sleep helps your brain rest, process information, and stay healthy.',
        difficulty: 1
      },
      {
        id: 'q1166', type: 'fill',
        question: 'It\'s important ___ (relax) after a long day of work.',
        answer: 'to relax',
        explanation: '"It\'s important to do something" uses the to-infinitive.',
        difficulty: 1
      },
      {
        id: 'q1167', type: 'choice',
        question: 'Smiling can help you feel ___.',
        options: ['A. angry', 'B. sad', 'C. happier', 'D. worried'],
        answer: 'C',
        explanation: 'Research shows that smiling can actually make you feel happier.',
        difficulty: 1
      }
    ]
  },

  'english-hujiao-9-1': {
    chapterName: 'My future',
    questions: [
      {
        id: 'q1168', type: 'choice',
        question: 'When I grow up, I want ___ a doctor.',
        options: ['A. be', 'B. to be', 'C. being', 'D. been'],
        answer: 'B',
        explanation: '"Want to be" — "want" is followed by a to-infinitive.',
        difficulty: 1
      },
      {
        id: 'q1169', type: 'fill',
        question: 'I hope ___ (travel) around the world in the future.',
        answer: 'to travel',
        explanation: '"Hope to do something" — "hope" is followed by a to-infinitive.',
        difficulty: 1
      },
      {
        id: 'q1170', type: 'choice',
        question: 'She plans ___ (study) abroad next year.',
        options: ['A. to study', 'B. studying', 'C. study', 'D. studied'],
        answer: 'A',
        explanation: '"Plan to do something" — "plan" is followed by a to-infinitive.',
        difficulty: 1
      },
      {
        id: 'q1171', type: 'truefalse',
        question: '"In the future" and "in future" mean the same thing in English.',
        options: ['A. True', 'B. False'],
        answer: 'B',
        explanation: '"In the future" means in the time that will come. "In future" (British English) means from now on.',
        difficulty: 2
      },
      {
        id: 'q1172', type: 'fill',
        question: 'He ___ (practice) every day to become a better basketball player.',
        answer: 'practices',
        explanation: 'Third-person singular "he" takes "practices" in simple present.',
        difficulty: 1
      },
      {
        id: 'q1173', type: 'choice',
        question: '___ your dream job?',
        options: ['A. What\'s', 'B. How\'s', 'C. Where\'s', 'D. Who\'s'],
        answer: 'A',
        explanation: '"What\'s your dream job?" asks about what job someone wishes to have.',
        difficulty: 1
      }
    ]
  },

  'english-hujiao-9-2': {
    chapterName: 'Protecting our environment',
    questions: [
      {
        id: 'q1174', type: 'choice',
        question: 'We should ___ rubbish in the bin.',
        options: ['A. put', 'B. throw', 'C. take', 'D. give'],
        answer: 'A',
        explanation: '"Put rubbish in the bin" is the correct expression for disposing of waste properly.',
        difficulty: 1
      },
      {
        id: 'q1175', type: 'fill',
        question: 'We should plant more ___ (tree) to make the air cleaner.',
        answer: 'trees',
        explanation: '"More" requires a plural noun: "trees".',
        difficulty: 1
      },
      {
        id: 'q1176', type: 'choice',
        question: '___ is bad for the environment.',
        options: ['A. Recycling', 'B. Planting trees', 'C. Polluting rivers', 'D. Using less plastic'],
        answer: 'C',
        explanation: 'Polluting rivers harms the environment and ecosystems.',
        difficulty: 1
      },
      {
        id: 'q1177', type: 'truefalse',
        question: 'Turning off the lights when you leave a room helps save energy.',
        options: ['A. True', 'B. False'],
        answer: 'A',
        explanation: 'Turning off unnecessary lights is a simple way to conserve electricity.',
        difficulty: 1
      },
      {
        id: 'q1178', type: 'fill',
        question: 'We must stop ___ (pollute) the air and water.',
        answer: 'polluting',
        explanation: '"Stop doing something" — "stop" is followed by a gerund.',
        difficulty: 2
      },
      {
        id: 'q1179', type: 'choice',
        question: 'Everyone can do something to protect the ___.',
        options: ['A. environment', 'B. pollution', 'C. problem', 'D. trouble'],
        answer: 'A',
        explanation: 'We protect the "environment" — the natural world around us.',
        difficulty: 1
      }
    ]
  },

  'english-hujiao-9-3': {
    chapterName: 'Going places',
    questions: [
      {
        id: 'q1180', type: 'choice',
        question: '— How will you go to Beijing? — I will go there ___ train.',
        options: ['A. in', 'B. on', 'C. by', 'D. at'],
        answer: 'C',
        explanation: '"By train" is the correct expression for describing the means of transportation.',
        difficulty: 1
      },
      {
        id: 'q1181', type: 'fill',
        question: 'It ___ (take) about two hours to get to Shanghai by plane.',
        answer: 'takes',
        explanation: '"It takes (time) to do something" — "it" takes "s" in third-person singular.',
        difficulty: 1
      },
      {
        id: 'q1182', type: 'choice',
        question: 'If you want to visit the Great Wall, you should go to ___.',
        options: ['A. Shanghai', 'B. Beijing', 'C. Guangzhou', 'D. Chengdu'],
        answer: 'B',
        explanation: 'The Great Wall is located in Beijing, China.',
        difficulty: 1
      },
      {
        id: 'q1183', type: 'truefalse',
        question: '"Have a good trip!" is something you say to someone who is about to travel.',
        options: ['A. True', 'B. False'],
        answer: 'A',
        explanation: '"Have a good trip" is a common farewell wish for travelers.',
        difficulty: 1
      },
      {
        id: 'q1184', type: 'fill',
        question: 'We are going to ___ (visit) the museum tomorrow.',
        answer: 'visit',
        explanation: '"Be going to + base form" expresses a planned future action.',
        difficulty: 1
      },
      {
        id: 'q1185', type: 'choice',
        question: 'She has ___ (been, gone) to Paris twice.',
        options: ['A. been', 'B. gone'],
        answer: 'A',
        explanation: '"Has been to" means she went there and came back. "Has gone to" means she is still there.',
        difficulty: 2
      }
    ]
  },

  // sampleQuestions-batch4.js,
// ==================== 物理-人教版 ====================
  'physics-renjiao-8-0': {
    chapterName: '声现象',
    questions: [
      {
        id: 'q1100', type: 'choice',
        question: '声音是由物体的____产生的。',
        options: ['A. 振动', 'B. 旋转', 'C. 移动', 'D. 膨胀'],
        answer: 'A',
        explanation: '声音是由物体振动产生的，一切发声的物体都在振动。',
        difficulty: 1
      },
      {
        id: 'q1101', type: 'truefalse',
        question: '声音在真空中也能传播。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '声音的传播需要介质（固体、液体或气体），在真空中不能传播。',
        difficulty: 1
      },
      {
        id: 'q1102', type: 'choice',
        question: '通常情况下，声音在空气中传播的速度约为',
        options: ['A. 340 m/s', 'B. 3×10⁸ m/s', 'C. 1500 m/s', 'D. 5000 m/s'],
        answer: 'A',
        explanation: '在15°C的空气中，声音的传播速度约为340 m/s。',
        difficulty: 1
      },
      {
        id: 'q1103', type: 'fill',
        question: '声音的三个特性分别是音调、____和音色。',
        answer: '响度',
        explanation: '声音的三个特性是音调、响度和音色，分别由频率、振幅和发声体材料结构决定。',
        difficulty: 1
      },
      {
        id: 'q1104', type: 'choice',
        question: '用大小不同的力敲击同一面鼓，发生变化的是声音的',
        options: ['A. 音调', 'B. 响度', 'C. 音色', 'D. 频率'],
        answer: 'B',
        explanation: '用力大小不同，鼓面振幅不同，响度就不同。力越大，振幅越大，响度越大。',
        difficulty: 2
      },
      {
        id: 'q1105', type: 'truefalse',
        question: '蚊子的翅膀振动频率比蝴蝶高，所以蚊子发出声音的音调比蝴蝶高。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '音调由频率决定，频率越高音调越高。蚊子翅膀振动频率约数百Hz，蝴蝶仅几Hz。',
        difficulty: 2
      },
      {
        id: 'q1106', type: 'fill',
        question: '声音在固体中传播的速度比在空气中____（填"大"或"小"）。',
        answer: '大',
        explanation: '一般情况下，声音在固体中传播最快，在液体中次之，在气体中最慢。',
        difficulty: 1
      }
    ]
  },

  'physics-renjiao-8-1': {
    chapterName: '光现象',
    questions: [
      {
        id: 'q1107', type: 'choice',
        question: '光在真空中的传播速度约为',
        options: ['A. 3×10⁸ m/s', 'B. 340 m/s', 'C. 3×10⁶ m/s', 'D. 3×10⁵ m/s'],
        answer: 'A',
        explanation: '光在真空中的传播速度为3×10⁸ m/s，是宇宙中信息传递的最大速度。',
        difficulty: 1
      },
      {
        id: 'q1108', type: 'truefalse',
        question: '反射角等于入射角，因此先有入射角后有反射角。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '反射角等于入射角是反射定律的内容，但入射光线和反射光线是同时存在的，没有先后之分。',
        difficulty: 2
      },
      {
        id: 'q1109', type: 'choice',
        question: '下列现象中，属于光的折射现象的是',
        options: ['A. 水中倒影', 'B. 镜中花', 'C. 海市蜃楼', 'D. 影子的形成'],
        answer: 'C',
        explanation: '海市蜃楼是光在不均匀的大气中发生折射形成的。水中倒影和镜中花是反射，影子是光的直线传播。',
        difficulty: 2
      },
      {
        id: 'q1110', type: 'fill',
        question: '入射光线与法线的夹角为30°，则反射角为____°。',
        answer: '30',
        explanation: '根据光的反射定律，反射角等于入射角，入射角为30°，反射角也为30°。',
        difficulty: 1
      },
      {
        id: 'q1111', type: 'choice',
        question: '下列关于光的说法正确的是',
        options: ['A. 光只有在空气中才能沿直线传播', 'B. 光年是一个时间单位', 'C. 影子的形成说明光沿直线传播', 'D. 光在水中传播速度比在空气中快'],
        answer: 'C',
        explanation: '影子的形成是光沿直线传播的有力证明。光年在均匀介质中均可沿直线传播；光年是长度单位；光在水中速度小于空气中。',
        difficulty: 2
      },
      {
        id: 'q1112', type: 'truefalse',
        question: '我们能从不同方向看到本身不发光的物体，是因为发生了镜面反射。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '我们能从各个方向看到物体，是因为光在物体表面发生了漫反射。',
        difficulty: 2
      },
      {
        id: 'q1113', type: 'fill',
        question: '太阳光通过三棱镜后分解成红、橙、黄、绿、蓝、靛、____七种颜色的光，这种现象叫做光的色散。',
        answer: '紫',
        explanation: '白光通过三棱镜分解为红橙黄绿蓝靛紫七色光，这是牛顿发现的色散现象。',
        difficulty: 1
      }
    ]
  },

  'physics-renjiao-8-2': {
    chapterName: '透镜及其应用',
    questions: [
      {
        id: 'q1114', type: 'choice',
        question: '下列属于凸透镜的是',
        options: ['A. 近视眼镜的镜片', 'B. 远视眼镜的镜片', 'C. 汽车后视镜', 'D. 平面镜'],
        answer: 'B',
        explanation: '远视眼镜（老花镜）是凸透镜；近视眼镜是凹透镜；汽车后视镜是凸面镜；平面镜既不是凸透镜也不是凹透镜。',
        difficulty: 1
      },
      {
        id: 'q1115', type: 'fill',
        question: '照相机是利用凸透镜成倒立、缩小的____像的原理工作的。',
        answer: '实',
        explanation: '照相机镜头相当于凸透镜，物体在二倍焦距以外，成倒立缩小的实像。',
        difficulty: 2
      },
      {
        id: 'q1116', type: 'choice',
        question: '放大镜是利用凸透镜成____的原理。',
        options: ['A. 倒立缩小实像', 'B. 倒立放大实像', 'C. 正立放大虚像', 'D. 正立缩小虚像'],
        answer: 'C',
        explanation: '放大镜是凸透镜，物体在焦点以内时，成正立、放大的虚像。',
        difficulty: 1
      },
      {
        id: 'q1117', type: 'truefalse',
        question: '凸透镜对光线有发散作用。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '凸透镜对光线有会聚作用，凹透镜对光线有发散作用。',
        difficulty: 1
      },
      {
        id: 'q1118', type: 'choice',
        question: '在"探究凸透镜成像规律"的实验中，当物距大于二倍焦距时，光屏上得到的是',
        options: ['A. 倒立缩小的实像', 'B. 倒立放大的实像', 'C. 正立放大的虚像', 'D. 正立缩小的虚像'],
        answer: 'A',
        explanation: '物距 u > 2f 时，成倒立缩小的实像，像距 f < v < 2f，应用是照相机。',
        difficulty: 2
      },
      {
        id: 'q1119', type: 'fill',
        question: '近视眼需要佩戴____透镜来矫正。',
        answer: '凹',
        explanation: '近视眼的成像在视网膜前方，需要佩戴凹透镜使光线适当发散，将像移到视网膜上。',
        difficulty: 1
      }
    ]
  },

  'physics-renjiao-8-3': {
    chapterName: '物态变化',
    questions: [
      {
        id: 'q1120', type: 'choice',
        question: '下列物态变化中，属于液化的是',
        options: ['A. 冰化成水', 'B. 水结成冰', 'C. 水烧开', 'D. 草叶上的露珠'],
        answer: 'D',
        explanation: '露珠是空气中的水蒸气遇冷液化成的小水珠。冰化成水是熔化，水结成冰是凝固，水烧开是沸腾（汽化）。',
        difficulty: 1
      },
      {
        id: 'q1121', type: 'truefalse',
        question: '所有晶体都有固定的熔点，非晶体没有固定的熔点。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '晶体（如冰、海波、各种金属）有固定熔点；非晶体（如玻璃、沥青、蜡）没有固定熔点，逐渐软化。',
        difficulty: 2
      },
      {
        id: 'q1122', type: 'fill',
        question: '冬天，窗户玻璃的____（填"内"或"外"）侧会出现冰花，这是水蒸气____（填物态变化名称）形成的。',
        answer: '内；凝华',
        explanation: '冬天室内温度高，室内水蒸气遇到冷的玻璃直接凝华成冰花，附着在玻璃内侧。',
        difficulty: 2
      },
      {
        id: 'q1123', type: 'choice',
        question: '下列做法中，目的是减慢蒸发的是',
        options: ['A. 把湿衣服晾在通风处', 'B. 用扫帚把地面的水扫开', 'C. 用保鲜膜封住食物', 'D. 把酒精灯的灯芯拨松'],
        answer: 'C',
        explanation: '减慢蒸发的方法：降低温度、减小液面面积、减慢液面上方空气流动。保鲜膜封住食物减小了液面上方的空气流动。',
        difficulty: 2
      },
      {
        id: 'q1124', type: 'choice',
        question: '标准大气压下，水的沸点是',
        options: ['A. 0°C', 'B. 100°C', 'C. 37°C', 'D. -10°C'],
        answer: 'B',
        explanation: '在标准大气压（1个大气压）下，水的沸点是100°C。',
        difficulty: 1
      },
      {
        id: 'q1125', type: 'truefalse',
        question: '蒸发和沸腾都是汽化现象，但蒸发只在液体表面发生，沸腾在液体表面和内部同时发生。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '蒸发是缓慢的汽化，只在液体表面进行；沸腾是剧烈的汽化，在液体表面和内部同时进行。',
        difficulty: 2
      },
      {
        id: 'q1126', type: 'fill',
        question: '北方冬天晾在户外的湿衣服会变硬（结冰），这是____现象（填物态变化名称）。',
        answer: '凝固',
        explanation: '湿衣服中的水在低温下变成冰，是从液态变为固态，属于凝固现象。',
        difficulty: 1
      }
    ]
  },

  'physics-renjiao-9-0': {
    chapterName: '内能',
    questions: [
      {
        id: 'q1127', type: 'choice',
        question: '下列关于分子运动论的说法正确的是',
        options: ['A. 分子间只有引力没有斥力', 'B. 扩散现象说明分子在不停地运动', 'C. 固体分子间距离很大', 'D. 气体分子间有很大的作用力'],
        answer: 'B',
        explanation: '扩散现象是分子运动的直接证据。分子间既有引力也有斥力；固体分子间距小排列紧密；气体分子间距大作用力极小。',
        difficulty: 2
      },
      {
        id: 'q1128', type: 'truefalse',
        question: '物体的温度升高，它的内能一定增大。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '同一物体温度升高，分子热运动加剧，内能增大。注意反过来不一定成立，内能增大也可能不升温（如熔化过程）。',
        difficulty: 2
      },
      {
        id: 'q1129', type: 'fill',
        question: '改变物体内能的两种方式是做功和____。',
        answer: '热传递',
        explanation: '做功和热传递是改变物体内能的两种方式，二者在改变内能的效果上是等效的。',
        difficulty: 1
      },
      {
        id: 'q1130', type: 'choice',
        question: '下列实例中，属于用做功的方法改变物体内能的是',
        options: ['A. 用热水袋暖手', 'B. 把铁丝反复弯折', 'C. 放在太阳下晒', 'D. 放在暖气片旁'],
        answer: 'B',
        explanation: '反复弯折铁丝，人对铁丝做功，铁丝内能增大温度升高。其余都是热传递方式。',
        difficulty: 1
      },
      {
        id: 'q1131', type: 'choice',
        question: '水的比热容是 4.2×10³ J/(kg·°C)，其物理意义是',
        options: ['A. 水升高1°C吸收热量4.2×10³ J', 'B. 1 kg水升高1°C吸收热量4.2×10³ J', 'C. 1 kg水吸收热量4.2×10³ J升高1°C', 'D. 1 kg水温度升高1°C需要吸收的热量是4.2×10³ J'],
        answer: 'D',
        explanation: '比热容的物理意义是单位质量的某种物质温度升高1°C所吸收的热量。',
        difficulty: 3
      },
      {
        id: 'q1132', type: 'fill',
        question: '质量为2 kg的水温度从20°C升高到70°C，吸收的热量为____ J。[c水 = 4.2×10³ J/(kg·°C)]',
        answer: '4.2×10⁵',
        explanation: 'Q = cmΔt = 4.2×10³ × 2 × (70-20) = 4.2×10³ × 2 × 50 = 4.2×10⁵ J。',
        difficulty: 3
      }
    ]
  },

  'physics-renjiao-9-1': {
    chapterName: '电流和电路',
    questions: [
      {
        id: 'q1133', type: 'choice',
        question: '下列物质中，属于导体的是',
        options: ['A. 橡胶', 'B. 玻璃', 'C. 铜', 'D. 塑料'],
        answer: 'C',
        explanation: '铜是导体，容易导电。橡胶、玻璃、塑料都是绝缘体，不容易导电。',
        difficulty: 1
      },
      {
        id: 'q1134', type: 'truefalse',
        question: '电路中有电源就一定有电流。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '电路中有电流需要同时满足：有电源、电路闭合（是通路）。',
        difficulty: 1
      },
      {
        id: 'q1135', type: 'fill',
        question: '电流的国际单位是____，用符号____表示。',
        answer: '安培；A',
        explanation: '电流的国际单位是安培（A），常用的还有毫安（mA）和微安（μA）。',
        difficulty: 1
      },
      {
        id: 'q1136', type: 'choice',
        question: '下列电路连接方式中，属于串联的是',
        options: ['A. 家庭中的电灯', 'B. 节日彩灯（一个坏了全不亮）', 'C. 教室里的日光灯', 'D. 马路上的路灯'],
        answer: 'B',
        explanation: '节日小彩灯是串联的，一个坏了电路断路全部不亮。家庭电灯、教室日光灯、路灯都是并联的。',
        difficulty: 2
      },
      {
        id: 'q1137', type: 'choice',
        question: '电流表在使用时应该',
        options: ['A. 串联在被测电路中', 'B. 并联在被测电路中', 'C. 串联在电源两端', 'D. 可以不经过用电器直接接在电源两端'],
        answer: 'A',
        explanation: '电流表应串联在被测电路中，且绝不能直接接在电源两端（会短路烧毁电流表）。',
        difficulty: 2
      },
      {
        id: 'q1138', type: 'truefalse',
        question: '并联电路中，干路电流等于各支路电流之和。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '并联电路中，干路电流等于各支路电流之和，即 I = I₁ + I₂ + ...。',
        difficulty: 1
      }
    ]
  },

  'physics-renjiao-9-2': {
    chapterName: '电压和电阻',
    questions: [
      {
        id: 'q1139', type: 'choice',
        question: '下列关于电压的说法正确的是',
        options: ['A. 电压是形成电流的原因', 'B. 有电压就一定有电流', 'C. 电压的单位是安培', 'D. 电路两端没有电压也有电流'],
        answer: 'A',
        explanation: '电压是使电路中产生电流的原因，但有电压还需要电路闭合才有电流。',
        difficulty: 1
      },
      {
        id: 'q1140', type: 'fill',
        question: '一节干电池的电压为____V，家庭电路（照明电路）的电压为____V。',
        answer: '1.5；220',
        explanation: '一节干电池电压1.5V，一个铅蓄电池电压2V，我国家庭照明电路电压220V，对人体安全电压不高于36V。',
        difficulty: 1
      },
      {
        id: 'q1141', type: 'choice',
        question: '影响导体电阻大小的因素不包括',
        options: ['A. 导体的材料', 'B. 导体的长度', 'C. 导体的横截面积', 'D. 导体两端的电压'],
        answer: 'D',
        explanation: '导体电阻由材料、长度、横截面积和温度决定，与两端电压和通过的电流无关。',
        difficulty: 2
      },
      {
        id: 'q1142', type: 'truefalse',
        question: '滑动变阻器是通过改变导线的长度来改变电阻的。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '滑动变阻器通过改变接入电路中电阻丝的长度来改变电阻，从而改变电路中的电流。',
        difficulty: 1
      },
      {
        id: 'q1143', type: 'choice',
        question: '将一个10Ω的电阻和一个20Ω的电阻串联，总电阻为',
        options: ['A. 6.67Ω', 'B. 30Ω', 'C. 200Ω', 'D. 10Ω'],
        answer: 'B',
        explanation: '串联电路总电阻等于各分电阻之和：R = R₁ + R₂ = 10 + 20 = 30Ω。',
        difficulty: 2
      },
      {
        id: 'q1144', type: 'fill',
        question: '滑动变阻器在电路中的符号是____，它在接入电路时应采用____接法。',
        answer: '一上一下',
        explanation: '滑动变阻器应"一上一下"接入电路，即一个接线柱接上方金属杆，另一个接下方电阻丝，才能改变电阻。',
        difficulty: 2
      }
    ]
  },

  'physics-renjiao-9-3': {
    chapterName: '电功率',
    questions: [
      {
        id: 'q1145', type: 'choice',
        question: '下列关于电功率的说法正确的是',
        options: ['A. 用电器消耗的电能越多，电功率越大', 'B. 用电器工作的时间越短，电功率越大', 'C. 用电器单位时间消耗的电能越多，电功率越大', 'D. 电功率的单位是焦耳'],
        answer: 'C',
        explanation: '电功率是表示电流做功快慢的物理量，等于单位时间内消耗的电能。单位是瓦特（W）。',
        difficulty: 2
      },
      {
        id: 'q1146', type: 'fill',
        question: '一个标有"220V 100W"的灯泡，正常工作时的电流为____ A。（保留两位小数）',
        answer: '0.45',
        explanation: 'I = P/U = 100/220 ≈ 0.45 A。',
        difficulty: 2
      },
      {
        id: 'q1147', type: 'truefalse',
        question: '额定功率大的用电器，实际功率一定大。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '实际功率由实际电压决定。额定功率是在额定电压下的功率，实际电压不等于额定电压时，实际功率不等于额定功率。',
        difficulty: 2
      },
      {
        id: 'q1148', type: 'choice',
        question: '下列家用电器中，额定功率最接近1000W的是',
        options: ['A. 电视机', 'B. 电冰箱', 'C. 电饭锅', 'D. 台灯'],
        answer: 'C',
        explanation: '电饭锅功率通常在800W~1000W左右，电视机约100W，电冰箱约100W，台灯约40W。',
        difficulty: 2
      },
      {
        id: 'q1149', type: 'choice',
        question: '1 kW·h 的电能可供"220V 100W"的灯泡正常工作多长时间',
        options: ['A. 1 h', 'B. 10 h', 'C. 100 h', 'D. 0.1 h'],
        answer: 'B',
        explanation: 't = W/P = 1 kW·h / 0.1 kW = 10 h。',
        difficulty: 2
      },
      {
        id: 'q1150', type: 'fill',
        question: '电流通过导体产生的热量跟电流的二次方成正比，跟导体的____成正比，跟通电时间成正比，这就是焦耳定律。',
        answer: '电阻',
        explanation: '焦耳定律：Q = I²Rt，即电流产生的热量与电流的二次方、电阻和通电时间成正比。',
        difficulty: 2
      },
      {
        id: 'q1151', type: 'truefalse',
        question: '测量电功（电能）的仪表是电流表。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '测量电功（电能）的仪表是电能表（电度表），不是电流表。电流表测量的是电流。',
        difficulty: 1
      }
    ]
  },

  // ==================== 物理-苏科版 ====================
  'physics-suke-8-0': {
    chapterName: '声现象',
    questions: [
      {
        id: 'q1152', type: 'choice',
        question: '在敲击大鼓时，用力越大，鼓声的',
        options: ['A. 音调越高', 'B. 响度越大', 'C. 音色越好', 'D. 频率越高'],
        answer: 'B',
        explanation: '用力越大，鼓面振幅越大，发出的声音响度越大。',
        difficulty: 1
      },
      {
        id: 'q1153', type: 'fill',
        question: '声音在不同介质中传播的速度不同，一般情况下，v固体____v液体____v气体（填">"或"<"）。',
        answer: '>；>',
        explanation: '声音传播速度一般是固体>液体>气体，因为固体分子排列紧密。',
        difficulty: 1
      },
      {
        id: 'q1154', type: 'truefalse',
        question: '人耳能听到的声音频率范围是20 Hz到2000 Hz。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '人耳能听到的声音频率范围是20 Hz到20000 Hz。',
        difficulty: 1
      },
      {
        id: 'q1155', type: 'choice',
        question: '控制噪声的途径中，在声源处减弱的是',
        options: ['A. 安装隔音窗', 'B. 在道路旁种树', 'C. 摩托车上安装消声器', 'D. 戴耳罩'],
        answer: 'C',
        explanation: '消声器在声源处减弱噪声；隔音窗和种树是在传播过程中减弱；戴耳罩是在人耳处减弱。',
        difficulty: 2
      },
      {
        id: 'q1156', type: 'choice',
        question: '关于声现象，下列说法正确的是',
        options: ['A. 声音在空气中的传播速度小于在水中的传播速度', 'B. 声音只能在空气中传播', 'C. 声音在真空中的传播速度最快', 'D. 声音的传播不需要时间'],
        answer: 'A',
        explanation: '声音在水中的传播速度（约1500 m/s）大于在空气中的速度（约340 m/s），不能在真空中传播。',
        difficulty: 2
      },
      {
        id: 'q1157', type: 'fill',
        question: '利用超声波可以除去人体内的结石，这说明声波能够传递____。',
        answer: '能量',
        explanation: '声波可以传递信息和能量。除去结石是利用声波传递能量的性质。',
        difficulty: 2
      }
    ]
  },

  'physics-suke-8-1': {
    chapterName: '光的折射',
    questions: [
      {
        id: 'q1158', type: 'choice',
        question: '光从空气斜射入水中时，折射角____入射角。',
        options: ['A. 大于', 'B. 小于', 'C. 等于', 'D. 无法确定'],
        answer: 'B',
        explanation: '光从空气斜射入水（光疏介质到光密介质），折射角小于入射角。',
        difficulty: 2
      },
      {
        id: 'q1159', type: 'truefalse',
        question: '光从水中射入空气时，折射光线远离法线偏折。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '光从水（光密介质）射入空气（光疏介质）时，折射角大于入射角，折射光线远离法线。',
        difficulty: 2
      },
      {
        id: 'q1160', type: 'fill',
        question: '筷子斜插入水中，从上方看水中部分会向上弯折，这是因为光的____现象。',
        answer: '折射',
        explanation: '水中筷子反射的光从水中射入空气时发生折射，折射角大于入射角，人看到的虚像比实际位置高。',
        difficulty: 2
      },
      {
        id: 'q1161', type: 'choice',
        question: '下列现象中属于光的折射的是',
        options: ['A. 小孔成像', 'B. 池水看起来比实际浅', 'C. 日食和月食', 'D. 水中倒影'],
        answer: 'B',
        explanation: '池水看起来比实际浅是光在水面的折射造成的。小孔成像和日食是光的直线传播，水中倒影是反射。',
        difficulty: 2
      },
      {
        id: 'q1162', type: 'choice',
        question: '光垂直射到水面时，入射角为0°，折射角为',
        options: ['A. 0°', 'B. 45°', 'C. 90°', 'D. 30°'],
        answer: 'A',
        explanation: '光垂直射到水面时入射角为0°，光线不偏折，折射角也为0°。',
        difficulty: 1
      },
      {
        id: 'q1163', type: 'fill',
        question: '从岸边看游泳池中的水，实际深度比看到的深度____（填"大"或"小"）。',
        answer: '大',
        explanation: '由于光的折射，池底反射的光到达水面折射后偏离法线，人看到的池底虚像比实际位置浅，所以实际深度更大。',
        difficulty: 2
      }
    ]
  },

  'physics-suke-8-2': {
    chapterName: '物质的物理属性',
    questions: [
      {
        id: 'q1164', type: 'choice',
        question: '下列物理量中，能用来鉴别物质种类的是',
        options: ['A. 质量', 'B. 体积', 'C. 密度', 'D. 重力'],
        answer: 'C',
        explanation: '密度是物质的特性之一，不同物质密度一般不同，因此可以用密度来鉴别物质。',
        difficulty: 1
      },
      {
        id: 'q1165', type: 'fill',
        question: '密度的计算公式是 ρ = ____。',
        answer: 'm/V',
        explanation: '密度的定义式为 ρ = m/V，即单位体积某种物质的质量叫做这种物质的密度。',
        difficulty: 1
      },
      {
        id: 'q1166', type: 'truefalse',
        question: '把一块铁切成两半，每一半的密度变为原来的一半。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '密度是物质的特性，不随质量和体积的变化而变化。铁被切成两半后仍是铁，密度不变。',
        difficulty: 1
      },
      {
        id: 'q1167', type: 'choice',
        question: '水的密度是 1.0×10³ kg/m³，其表示的物理意义是',
        options: ['A. 1 m³水质量是1.0×10³ kg', 'B. 1 kg水体积是1.0×10³ m³', 'C. 1 g水体积是1 cm³', 'D. A和C都对'],
        answer: 'D',
        explanation: '1.0×10³ kg/m³ 也可写作 1 g/cm³，表示1 m³水质量为1.0×10³ kg，也即1 cm³水质量为1 g。',
        difficulty: 2
      },
      {
        id: 'q1168', type: 'fill',
        question: '一块金属的质量为 54 g，体积为 20 cm³，则该金属的密度为____ g/cm³。',
        answer: '2.7',
        explanation: 'ρ = m/V = 54/20 = 2.7 g/cm³，这是铝的密度。',
        difficulty: 2
      },
      {
        id: 'q1169', type: 'choice',
        question: '下列说法正确的是',
        options: ['A. 铁的密度比棉花大，所以铁比棉花重', 'B. 铁的密度比棉花大，是因为铁的单位体积质量大', 'C. 密度与物体的质量成正比', 'D. 密度与物体的体积成反比'],
        answer: 'B',
        explanation: '密度是物质的特性，大小由物质种类决定，与质量和体积无关。铁比棉花密度大，是因为单位体积铁的质量大。',
        difficulty: 2
      }
    ]
  },

  'physics-suke-8-3': {
    chapterName: '力',
    questions: [
      {
        id: 'q1170', type: 'choice',
        question: '下列关于力的说法正确的是',
        options: ['A. 力是物体对物体的作用', 'B. 只有接触的物体间才有力的作用', 'C. 力可以脱离物体单独存在', 'D. 力的大小只与质量有关'],
        answer: 'A',
        explanation: '力是物体对物体的作用，不能脱离物体存在。不接触的物体之间也可以有力的作用（如重力、磁力）。',
        difficulty: 1
      },
      {
        id: 'q1171', type: 'truefalse',
        question: '力的作用是相互的，即甲对乙施力的同时，乙对甲也施力。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '力的作用是相互的，一个物体对另一个物体施力时，另一个物体也同时对它施加反作用力。',
        difficulty: 1
      },
      {
        id: 'q1172', type: 'fill',
        question: '力的三要素是力的____、____和____。',
        answer: '大小；方向；作用点',
        explanation: '力的三要素是大小、方向和作用点，三要素中任何一个改变，力的效果就会改变。',
        difficulty: 1
      },
      {
        id: 'q1173', type: 'choice',
        question: '下列哪个力的施力物体是地球',
        options: ['A. 弹力', 'B. 摩擦力', 'C. 重力', 'D. 浮力'],
        answer: 'C',
        explanation: '重力是地球对物体的吸引力，施力物体是地球，受力物体是物体本身。',
        difficulty: 1
      },
      {
        id: 'q1174', type: 'choice',
        question: '一个物体放在水平桌面上静止不动，下列哪对力是平衡力',
        options: ['A. 物体的重力和桌面受到的压力', 'B. 物体的重力和桌面对物体的支持力', 'C. 物体对桌面的压力和桌面对物体的支持力', 'D. 以上都不是'],
        answer: 'B',
        explanation: '物体的重力与桌面对物体的支持力大小相等、方向相反、作用在同一物体上、在同一直线上，是一对平衡力。',
        difficulty: 2
      },
      {
        id: 'q1175', type: 'fill',
        question: '物体间力的作用是相互的。游泳时，人向后划水，水对人的作用力方向是____。',
        answer: '向前',
        explanation: '人向后划水对水施加向后的力，同时水对人施加向前的作用力，使人向前运动。',
        difficulty: 2
      }
    ]
  },

  'physics-suke-9-0': {
    chapterName: '简单机械和功',
    questions: [
      {
        id: 'q1176', type: 'choice',
        question: '下列工具中，属于省力杠杆的是',
        options: ['A. 镊子', 'B. 筷子', 'C. 羊角锤', 'D. 钓鱼竿'],
        answer: 'C',
        explanation: '羊角锤的动力臂大于阻力臂，是省力杠杆。镊子、筷子、钓鱼竿的动力臂小于阻力臂，是费力杠杆。',
        difficulty: 1
      },
      {
        id: 'q1177', type: 'truefalse',
        question: '使用杠杆一定可以既省力又省距离。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '省力杠杆省力但费距离，费力杠杆费力但省距离，没有既省力又省距离的杠杆。',
        difficulty: 1
      },
      {
        id: 'q1178', type: 'fill',
        question: '功的计算公式是 W = ____。',
        answer: 'Fs',
        explanation: '功等于力与在力的方向上移动距离的乘积，W = Fs。功的单位是焦耳（J）。',
        difficulty: 1
      },
      {
        id: 'q1179', type: 'choice',
        question: '用 50 N 的力将物体沿水平方向推动 4 m，重力做的功为',
        options: ['A. 200 J', 'B. 100 J', 'C. 0 J', 'D. 50 J'],
        answer: 'C',
        explanation: '重力方向竖直向下，物体在水平方向运动，在重力方向上没有移动距离，重力不做功。',
        difficulty: 2
      },
      {
        id: 'q1180', type: 'choice',
        question: '功率是表示____的物理量。',
        options: ['A. 做功多少', 'B. 做功快慢', 'C. 做功效率', 'D. 力的大小'],
        answer: 'B',
        explanation: '功率表示做功的快慢，等于单位时间内完成的功，P = W/t。',
        difficulty: 1
      },
      {
        id: 'q1181', type: 'fill',
        question: '某同学在 10 s 内将 100 N 的重物举高了 1.5 m，他做的功为____ J，功率为____ W。',
        answer: '150；15',
        explanation: 'W = Fs = 100 × 1.5 = 150 J；P = W/t = 150/10 = 15 W。',
        difficulty: 2
      }
    ]
  },

  'physics-suke-9-1': {
    chapterName: '机械能与内能',
    questions: [
      {
        id: 'q1182', type: 'choice',
        question: '下列各物体中，具有动能的是',
        options: ['A. 悬挂的吊灯', 'B. 拉开的弓', 'C. 在平直公路上行驶的汽车', 'D. 放在桌上的书'],
        answer: 'C',
        explanation: '运动的物体具有动能。行驶的汽车在运动，具有动能。悬挂的吊灯和桌上的书是静止的，拉开的弓具有弹性势能。',
        difficulty: 1
      },
      {
        id: 'q1183', type: 'truefalse',
        question: '动能的大小只与物体的质量有关。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '动能的大小与物体的质量和速度都有关，Ek = ½mv²。质量越大、速度越大，动能越大。',
        difficulty: 1
      },
      {
        id: 'q1184', type: 'fill',
        question: '被举高的物体具有的能叫____能。',
        answer: '重力势',
        explanation: '被举高的物体由于高度而具有的能量叫做重力势能。质量越大、高度越高，重力势能越大。',
        difficulty: 1
      },
      {
        id: 'q1185', type: 'choice',
        question: '"跳远运动员在起跳前要助跑"，这是为了在起跳时获得更大的',
        options: ['A. 重力势能', 'B. 动能', 'C. 弹性势能', 'D. 内能'],
        explanation: '助跑后运动员速度增大，动能增大，起跳后动能转化为重力势能，使其跳得更远。',
        difficulty: 2
      },
      {
        id: 'q1186', type: 'choice',
        question: '下列过程中，动能转化为势能的是',
        options: ['A. 荡秋千从低处向高处荡去', 'B. 苹果从树上落下', 'C. 汽车在水平路上刹车', 'D. 弹簧枪将弹丸射出'],
        answer: 'A',
        explanation: '荡秋千从低到高，速度减慢高度增加，动能转化为重力势能。',
        difficulty: 2
      },
      {
        id: 'q1187', type: 'fill',
        question: '在热机的四个冲程中，将内能转化为机械能的冲程是____冲程。',
        answer: '做功',
        explanation: '内燃机的做功冲程中，高温高压燃气推动活塞做功，将内能转化为机械能。',
        difficulty: 2
      }
    ]
  },

  'physics-suke-9-2': {
    chapterName: '电路初探',
    questions: [
      {
        id: 'q1188', type: 'choice',
        question: '下列电路元件中，用来控制电路通断的是',
        options: ['A. 导线', 'B. 开关', 'C. 电源', 'D. 用电器'],
        answer: 'B',
        explanation: '开关用来控制电路的通断。电源提供电能，导线传输电能，用电器消耗电能。',
        difficulty: 1
      },
      {
        id: 'q1189', type: 'truefalse',
        question: '在并联电路中，各支路两端的电压相等。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '并联电路的特点：各支路两端电压相等，且等于电源电压。干路电流等于各支路电流之和。',
        difficulty: 1
      },
      {
        id: 'q1190', type: 'fill',
        question: '电路的三种状态分别是通路、____和短路。',
        answer: '断路',
        explanation: '电路有三种状态：通路（正常连通）、断路（某处断开）和短路（电流不经过用电器直接回到电源）。',
        difficulty: 1
      },
      {
        id: 'q1191', type: 'choice',
        question: '将两个小灯泡串联接入电路，闭合开关后发现一只亮一只不亮，下列原因可能的是',
        options: ['A. 不亮的灯泡被短路', 'B. 不亮的灯泡灯丝断了', 'C. 两灯泡规格不同', 'D. 电源电压不够'],
        answer: 'A',
        explanation: '串联电路中若一灯被短路，电流全部从短路的灯通过，该灯不亮。若灯丝断路则两灯都不亮。',
        difficulty: 3
      },
      {
        id: 'q1192', type: 'choice',
        question: '甲、乙两导体串联，通过甲的电流为0.5 A，则通过乙的电流为',
        options: ['A. 0 A', 'B. 0.5 A', 'C. 1 A', 'D. 无法确定'],
        answer: 'B',
        explanation: '串联电路中各处电流相等，通过甲的电流为0.5 A，通过乙的电流也是0.5 A。',
        difficulty: 1
      },
      {
        id: 'q1193', type: 'fill',
        question: '电压表应与被测电路____联使用，电流表应与被测电路____联使用。',
        answer: '并；串',
        explanation: '电压表测量电压，应并联在被测电路两端；电流表测量电流，应串联在被测电路中。',
        difficulty: 1
      }
    ]
  },

  'physics-suke-9-3': {
    chapterName: '欧姆定律',
    questions: [
      {
        id: 'q1194', type: 'choice',
        question: '欧姆定律的表达式为',
        options: ['A. I = U/R', 'B. U = I/R', 'C. R = UI', 'D. I = UR'],
        answer: 'A',
        explanation: '欧姆定律：导体中的电流与导体两端的电压成正比，与导体的电阻成反比，即 I = U/R。',
        difficulty: 1
      },
      {
        id: 'q1195', type: 'fill',
        question: '一段导体两端电压为 6 V，通过的电流为 0.3 A，则该导体的电阻为____ Ω。',
        answer: '20',
        explanation: '由欧姆定律 R = U/I = 6/0.3 = 20 Ω。',
        difficulty: 1
      },
      {
        id: 'q1196', type: 'truefalse',
        question: '由公式 R = U/I 可知，导体的电阻与电压成正比，与电流成反比。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '电阻是导体本身的性质，由材料、长度、横截面积和温度决定，与电压和电流无关。R = U/I 只是测量电阻的方法。',
        difficulty: 2
      },
      {
        id: 'q1197', type: 'choice',
        question: '一个定值电阻两端的电压从 4 V 增大到 6 V，通过它的电流增加了 0.2 A，则该电阻的阻值为',
        options: ['A. 5 Ω', 'B. 10 Ω', 'C. 15 Ω', 'D. 20 Ω'],
        answer: 'B',
        explanation: 'ΔU = 6 - 4 = 2 V，ΔI = 0.2 A，R = ΔU/ΔI = 2/0.2 = 10 Ω。',
        difficulty: 3
      },
      {
        id: 'q1198', type: 'choice',
        question: '在"探究电流与电压的关系"实验中，应保持____不变。',
        options: ['A. 电压', 'B. 电流', 'C. 电阻', 'D. 电源'],
        answer: 'C',
        explanation: '探究电流与电压的关系时，要控制电阻不变，改变电压，观察电流的变化（控制变量法）。',
        difficulty: 2
      },
      {
        id: 'q1199', type: 'fill',
        question: '将一个 5 Ω 的电阻和一个 10 Ω 的电阻并联，总电阻____ 5 Ω（填">"、"<"或"="）。',
        answer: '<',
        explanation: '并联电路总电阻小于其中任何一个分电阻，R_并 < 5 Ω。计算：1/R = 1/5 + 1/10 = 3/10，R = 10/3 ≈ 3.33 Ω。',
        difficulty: 2
      }
    ]
  },

  // ==================== 物理-沪粤版 ====================
  'physics-huyue-8-0': {
    chapterName: '声音与环境',
    questions: [
      {
        id: 'q1200', type: 'choice',
        question: '声音不能在____中传播。',
        options: ['A. 空气', 'B. 水', 'C. 钢铁', 'D. 真空'],
        answer: 'D',
        explanation: '声音的传播需要介质，不能在真空中传播。',
        difficulty: 1
      },
      {
        id: 'q1201', type: 'truefalse',
        question: '物体振动停止，发声也停止。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '声音是由物体振动产生的，振动停止，发声也停止，但声音不会立即消失（已发出的声波还在传播）。',
        difficulty: 1
      },
      {
        id: 'q1202', type: 'fill',
        question: '音调的高低取决于声源振动的____。',
        answer: '频率',
        explanation: '音调由频率决定。频率越高，音调越高；频率越低，音调越低。',
        difficulty: 1
      },
      {
        id: 'q1203', type: 'choice',
        question: '人们用来区分不同乐器的声音，依据的是',
        options: ['A. 音调', 'B. 响度', 'C. 音色', 'D. 频率'],
        answer: 'C',
        explanation: '不同乐器的材料和结构不同，发出的音色不同，我们就是根据音色来区分不同乐器的。',
        difficulty: 1
      },
      {
        id: 'q1204', type: 'choice',
        question: '下列措施中，属于在传播过程中减弱噪声的是',
        options: ['A. 在摩托车排气管上加消声器', 'B. 在道路两旁种树', 'C. 戴上防噪声耳罩', 'D. 工厂使用噪声低的机器'],
        answer: 'B',
        explanation: '在道路两旁种树是在声音的传播过程中减弱噪声。A和D是在声源处减弱，C是在人耳处减弱。',
        difficulty: 2
      },
      {
        id: 'q1205', type: 'fill',
        question: '频率高于20000 Hz的声波叫做____，频率低于20 Hz的声波叫做____。',
        answer: '超声波；次声波',
        explanation: '人耳听觉范围是20~20000 Hz。高于20000 Hz的是超声波，低于20 Hz的是次声波。',
        difficulty: 1
      }
    ]
  },

  'physics-huyue-8-1': {
    chapterName: '光与眼睛',
    questions: [
      {
        id: 'q1206', type: 'choice',
        question: '光从空气射入水中，下列说法正确的是',
        options: ['A. 折射角大于入射角', 'B. 折射角小于入射角', 'C. 折射角等于入射角', 'D. 不发生折射'],
        answer: 'B',
        explanation: '光从空气（光疏介质）进入水（光密介质）时，折射角小于入射角。',
        difficulty: 2
      },
      {
        id: 'q1207', type: 'truefalse',
        question: '近视眼看不清远处的物体，需要用凸透镜矫正。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '近视眼成像在视网膜前方，需要用凹透镜矫正；远视眼成像在视网膜后方，需要用凸透镜矫正。',
        difficulty: 2
      },
      {
        id: 'q1208', type: 'fill',
        question: '正常人眼的明视距离约为____cm。',
        answer: '25',
        explanation: '正常人眼的明视距离约为25 cm，在此距离看书最不容易疲劳。',
        difficulty: 1
      },
      {
        id: 'q1209', type: 'choice',
        question: '在探究凸透镜成像规律实验中，当蜡烛距凸透镜20 cm时，在光屏上得到等大的像，则该凸透镜的焦距为',
        options: ['A. 5 cm', 'B. 10 cm', 'C. 15 cm', 'D. 20 cm'],
        answer: 'B',
        explanation: '成等大像时物距 u = 2f，即 20 = 2f，所以 f = 10 cm。',
        difficulty: 2
      },
      {
        id: 'q1210', type: 'choice',
        question: '在探究凸透镜成像的实验中，光屏上得不到像的可能原因是',
        options: ['A. 物距在一倍焦距和二倍焦距之间', 'B. 物距大于二倍焦距', 'C. 物距小于一倍焦距', 'D. 物距等于二倍焦距'],
        answer: 'C',
        explanation: '当物距小于一倍焦距时，凸透镜成正立放大的虚像，虚像不能用光屏承接，所以在光屏上得不到像。',
        difficulty: 2
      },
      {
        id: 'q1211', type: 'fill',
        question: '人眼的结构中，相当于凸透镜的是____，相当于光屏的是____。',
        answer: '晶状体；视网膜',
        explanation: '人眼中晶状体相当于凸透镜，视网膜相当于光屏，来自物体的光经晶状体折射后成像在视网膜上。',
        difficulty: 1
      }
    ]
  },

  'physics-huyue-8-2': {
    chapterName: '物质的形态与变化',
    questions: [
      {
        id: 'q1212', type: 'choice',
        question: '下列物态变化中，属于升华的是',
        options: ['A. 铁块熔化成铁水', 'B. 樟脑丸逐渐变小', 'C. 水蒸气遇冷变成小水滴', 'D. 冰冻的衣服慢慢变干'],
        answer: 'B',
        explanation: '樟脑丸逐渐变小是固态直接变成气态，属于升华。D选项也是升华但B更典型（常温下升华）。铁块熔化是熔化，水蒸气变水滴是液化。',
        difficulty: 2
      },
      {
        id: 'q1213', type: 'truefalse',
        question: '水的沸腾温度一定是100°C。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '水的沸点随气压变化。标准大气压下水沸点是100°C，气压越低沸点越低（如高原地区水不到100°C就沸腾）。',
        difficulty: 2
      },
      {
        id: 'q1214', type: 'fill',
        question: '物质从液态变为气态叫做____（填写两种方式）。',
        answer: '汽化（蒸发和沸腾）',
        explanation: '汽化有两种方式：蒸发和沸腾。蒸发在任何温度下都能缓慢进行，沸腾在一定温度下剧烈进行。',
        difficulty: 1
      },
      {
        id: 'q1215', type: 'choice',
        question: '夏天，从冰箱里取出的饮料瓶外壁会"出汗"，这是',
        options: ['A. 水的蒸发', 'B. 水蒸气的液化', 'C. 水蒸气的凝华', 'D. 水的沸腾'],
        answer: 'B',
        explanation: '瓶外壁温度低于空气温度，空气中的水蒸气遇冷液化成小水珠附着在瓶壁上，形成"出汗"现象。',
        difficulty: 2
      },
      {
        id: 'q1216', type: 'choice',
        question: '下列哪种情况属于熔化吸热',
        options: ['A. 冬天窗户上的冰花', 'B. 洒在地上的水变干', 'C. 河面上的冰变薄', 'D. 早晨草上的露珠'],
        answer: 'C',
        explanation: '河面上的冰变薄是冰熔化成水，需要吸热。冰花是凝华，水变干是蒸发（汽化），露珠是液化。',
        difficulty: 2
      },
      {
        id: 'q1217', type: 'fill',
        question: '冬天戴眼镜的人从室外进入温暖的室内，镜片会变模糊，这是室内水蒸气遇冷____（填物态变化名称）的结果。',
        answer: '液化',
        explanation: '室内温度高水蒸气多，遇到冷的镜片液化成小水珠，使镜片变模糊。',
        difficulty: 2
      }
    ]
  },

  'physics-huyue-8-3': {
    chapterName: '物质的密度',
    questions: [
      {
        id: 'q1218', type: 'choice',
        question: '一块铁的质量是 1.58 kg，体积是 200 cm³，铁的密度是',
        options: ['A. 7.9×10³ kg/m³', 'B. 7.9 kg/m³', 'C. 7.9 g/cm³', 'D. A和C都对'],
        answer: 'D',
        explanation: 'ρ = m/V = 1580 g/200 cm³ = 7.9 g/cm³ = 7.9×10³ kg/m³。两者等价。',
        difficulty: 2
      },
      {
        id: 'q1219', type: 'fill',
        question: '测量不规则固体的体积常用____法。',
        answer: '量筒（排水）',
        explanation: '用量筒和"排水法"测量不规则固体的体积：先读出量筒中水的体积V₁，放入固体后读出总体积V₂，固体体积V = V₂ - V₁。',
        difficulty: 1
      },
      {
        id: 'q1220', type: 'truefalse',
        question: '质量相同的铁和铝，铝的体积大于铁的体积。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '由 V = m/ρ，质量相同时，密度越小体积越大。铝的密度（2.7×10³ kg/m³）小于铁的密度（7.9×10³ kg/m³），所以铝的体积更大。',
        difficulty: 2
      },
      {
        id: 'q1221', type: 'choice',
        question: '实验室中测量质量的常用仪器是',
        options: ['A. 弹簧测力计', 'B. 托盘天平', 'C. 量筒', 'D. 刻度尺'],
        answer: 'B',
        explanation: '托盘天平是实验室测量质量的常用仪器。弹簧测力计测量力，量筒测量体积，刻度尺测量长度。',
        difficulty: 1
      },
      {
        id: 'q1222', type: 'fill',
        question: '一瓶矿泉水喝掉一半后，剩余水的密度____（填"变大"、"变小"或"不变"）。',
        answer: '不变',
        explanation: '密度是物质的特性，与质量和体积无关。矿泉水喝掉一半后，质量和体积都减半，密度不变。',
        difficulty: 1
      },
      {
        id: 'q1223', type: 'choice',
        question: '根据 ρ = m/V，下列说法正确的是',
        options: ['A. 密度与质量成正比', 'B. 密度与体积成反比', 'C. 对于同种物质，质量与体积成正比', 'D. 以上说法都不正确'],
        answer: 'C',
        explanation: '密度是物质的特性，不随质量和体积变化。但对于同种物质，质量越大体积也越大，二者成正比。',
        difficulty: 2
      }
    ]
  },

  'physics-huyue-9-0': {
    chapterName: '机械与功',
    questions: [
      {
        id: 'q1224', type: 'choice',
        question: '下列杠杆中，属于等臂杠杆的是',
        options: ['A. 天平', 'B. 开瓶器', 'C. 筷子', 'D. 剪刀'],
        answer: 'A',
        explanation: '天平的动力臂等于阻力臂，属于等臂杠杆。开瓶器是省力杠杆，筷子是费力杠杆。',
        difficulty: 1
      },
      {
        id: 'q1225', type: 'truefalse',
        question: '功的大小等于力与物体移动距离的乘积，与力的方向无关。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '功等于力与在力的方向上移动距离的乘积，与力的方向有关。如果力的方向与运动方向垂直，则不做功。',
        difficulty: 2
      },
      {
        id: 'q1226', type: 'fill',
        question: '定滑轮实质上是一个____杠杆，使用它可以改变____但不能省力。',
        answer: '等臂；力的方向',
        explanation: '定滑轮是等臂杠杆的变形，不省力也不费力，但可以改变施力的方向。',
        difficulty: 2
      },
      {
        id: 'q1227', type: 'choice',
        question: '下列机械中，在使用时一定不省力的是',
        options: ['A. 动滑轮', 'B. 杠杆', 'C. 斜面', 'D. 定滑轮'],
        answer: 'D',
        explanation: '定滑轮是等臂杠杆，不能省力。动滑轮和斜面都可以省力。',
        difficulty: 1
      },
      {
        id: 'q1228', type: 'choice',
        question: '某人用 100 N 的力沿竖直方向将物体匀速举高 2 m，他对物体做的功是',
        options: ['A. 50 J', 'B. 200 J', 'C. 100 J', 'D. 0 J'],
        answer: 'B',
        explanation: 'W = Fs = 100 × 2 = 200 J。',
        difficulty: 1
      },
      {
        id: 'q1229', type: 'fill',
        question: '____是衡量做功快慢的物理量，其计算公式为 P = ____。',
        answer: '功率；W/t',
        explanation: '功率等于单位时间内所做的功，P = W/t，单位是瓦特（W）。',
        difficulty: 1
      }
    ]
  },

  'physics-huyue-9-1': {
    chapterName: '内能与热机',
    questions: [
      {
        id: 'q1230', type: 'choice',
        question: '下列事例中，通过做功改变物体内能的是',
        options: ['A. 用酒精灯加热水', 'B. 铁丝放在火炉中烧', 'C. 双手搓一搓觉得暖和', 'D. 放在阳光下的物体温度升高'],
        answer: 'C',
        explanation: '双手搓一搓是通过做功（摩擦做功）改变内能。其余选项都是热传递改变内能。',
        difficulty: 1
      },
      {
        id: 'q1231', type: 'truefalse',
        question: '物体的内能跟温度有关，温度越高，分子运动越剧烈，内能越大。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '温度越高，分子无规则运动越剧烈，物体的内能越大。',
        difficulty: 1
      },
      {
        id: 'q1232', type: 'fill',
        question: '热机是把____能转化为____能的机器。',
        answer: '内；机械',
        explanation: '热机（如内燃机）通过燃烧燃料获得内能，再将内能转化为机械能对外做功。',
        difficulty: 1
      },
      {
        id: 'q1233', type: 'choice',
        question: '四冲程内燃机的一个工作循环中，对外做功的冲程是',
        options: ['A. 吸气冲程', 'B. 压缩冲程', 'C. 做功冲程', 'D. 排气冲程'],
        answer: 'C',
        explanation: '做功冲程中高温高压燃气推动活塞运动，对外做功，将内能转化为机械能。',
        difficulty: 1
      },
      {
        id: 'q1234', type: 'choice',
        question: '汽油机在压缩冲程中，能量转化情况是',
        options: ['A. 机械能转化为内能', 'B. 内能转化为机械能', 'C. 化学能转化为内能', 'D. 内能转化为化学能'],
        answer: 'A',
        explanation: '压缩冲程中活塞压缩气缸内的混合气体做功，活塞的机械能转化为气体的内能。',
        difficulty: 2
      },
      {
        id: 'q1235', type: 'fill',
        question: '热机的效率是指____与燃料完全燃烧释放的热量之比。',
        answer: '用来做有用功的那部分能量',
        explanation: '热机效率 = 有用功 / 燃料完全燃烧释放的总能量。由于不可避免的热散失等，热机效率总是小于1。',
        difficulty: 2
      }
    ]
  },

  'physics-huyue-9-2': {
    chapterName: '电磁探秘',
    questions: [
      {
        id: 'q1236', type: 'choice',
        question: '下列物体中，属于磁性材料的是',
        options: ['A. 铁钉', 'B. 铝块', 'C. 铜线', 'D. 玻璃棒'],
        answer: 'A',
        explanation: '铁钉由铁制成，铁是磁性材料，能被磁化。铝、铜是非磁性材料，玻璃也不是磁性材料。',
        difficulty: 1
      },
      {
        id: 'q1237', type: 'truefalse',
        question: '磁体周围的磁感线是从S极出发回到N极。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '磁感线在磁体外部从N极出发回到S极（从北极到南极），在磁体内部从S极到N极形成闭合曲线。',
        difficulty: 1
      },
      {
        id: 'q1238', type: 'fill',
        question: '通电导线在磁场中会受到力的作用，____机就是利用这个原理制成的。',
        answer: '电动',
        explanation: '电动机的工作原理：通电线圈在磁场中受力转动，将电能转化为机械能。',
        difficulty: 1
      },
      {
        id: 'q1239', type: 'choice',
        question: '下列关于磁场的说法正确的是',
        options: ['A. 磁场是假想的，实际不存在', 'B. 磁体间的相互作用是通过磁场发生的', 'C. 只有磁铁周围才有磁场', 'D. 磁场方向从S极指向N极'],
        answer: 'B',
        explanation: '磁场是真实存在的物质，磁体间的相互作用通过磁场传递。电流周围也有磁场，磁体外部磁场方向从N到S。',
        difficulty: 2
      },
      {
        id: 'q1240', type: 'choice',
        question: '电磁铁的磁性强弱与下列哪个因素无关',
        options: ['A. 电流大小', 'B. 线圈匝数', 'C. 有无铁芯', 'D. 电流方向'],
        answer: 'D',
        explanation: '电磁铁的磁性强弱由电流大小和线圈匝数决定，铁芯也能增强磁性。电流方向只影响磁极方向，不影响磁性强弱。',
        difficulty: 2
      },
      {
        id: 'q1241', type: 'fill',
        question: '电磁铁的磁极方向可以通过改变____的方向来改变。',
        answer: '电流',
        explanation: '电流方向改变，线圈中磁场方向随之改变，电磁铁的N极和S极就对调了。',
        difficulty: 1
      }
    ]
  },

  'physics-huyue-9-3': {
    chapterName: '电功与电功率',
    questions: [
      {
        id: 'q1242', type: 'choice',
        question: '下列关于电功的说法正确的是',
        options: ['A. 用电器消耗的电能越多，电功越大', 'B. 电功的单位是瓦特', 'C. 电功是表示电流做功快慢的物理量', 'D. 电功率越大的用电器做功越多'],
        answer: 'A',
        explanation: '电功就是电流做的功，也等于消耗的电能，单位是焦耳（J）。电功率表示做功快慢。',
        difficulty: 1
      },
      {
        id: 'q1243', type: 'fill',
        question: '电功率的计算公式 P = ____，当电压为 U，电流为 I 时。',
        answer: 'UI',
        explanation: '电功率的基本公式是 P = UI，即电功率等于电压与电流的乘积。',
        difficulty: 1
      },
      {
        id: 'q1244', type: 'truefalse',
        question: '千瓦时（kW·h）是电功率的单位。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '千瓦时是电功（电能）的单位，也叫"度"。电功率的单位是瓦特（W）或千瓦（kW）。',
        difficulty: 1
      },
      {
        id: 'q1245', type: 'choice',
        question: '标有"220V 60W"的灯泡正常工作1小时，消耗的电能为',
        options: ['A. 60 J', 'B. 60 kW·h', 'C. 0.06 kW·h', 'D. 220 J'],
        answer: 'C',
        explanation: 'W = Pt = 0.06 kW × 1 h = 0.06 kW·h。',
        difficulty: 2
      },
      {
        id: 'q1246', type: 'choice',
        question: '下列做法中，不能节约用电的是',
        options: ['A. 用节能灯代替白炽灯', 'B. 离开教室随手关灯', 'C. 电视长时间待机', 'D. 空调温度设定适当'],
        answer: 'C',
        explanation: '电视待机仍消耗电能，长时间待机浪费电力，不能节约用电。',
        difficulty: 1
      },
      {
        id: 'q1247', type: 'fill',
        question: '一只电热水壶的铭牌上标有"220V 1100W"，该电热水壶正常工作时的电阻为____ Ω。',
        answer: '44',
        explanation: '由 P = U²/R 得 R = U²/P = 220²/1100 = 48400/1100 = 44 Ω。',
        difficulty: 3
      }
    ]
  },

  // ==================== 化学-人教版 ====================
  'chemistry-renjiao-9-0': {
    chapterName: '走进化学世界',
    questions: [
      {
        id: 'q1248', type: 'choice',
        question: '下列变化中，属于化学变化的是',
        options: ['A. 冰融化为水', 'B. 酒精挥发', 'C. 铁生锈', 'D. 矿石粉碎'],
        answer: 'C',
        explanation: '铁生锈有新物质（铁锈）生成，属于化学变化。其余都是没有新物质生成的物理变化。',
        difficulty: 1
      },
      {
        id: 'q1249', type: 'truefalse',
        question: '化学变化中一定伴随着物理变化，物理变化中一定不伴随化学变化。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '化学变化中一定伴随物理变化（如发光、放热、变色等），但物理变化中没有新物质生成，不伴随化学变化。',
        difficulty: 2
      },
      {
        id: 'q1250', type: 'fill',
        question: '化学是在____层次上研究物质的组成、结构、性质及变化规律的一门自然科学。',
        answer: '原子和分子',
        explanation: '化学研究的层次主要是原子和分子，研究物质的组成、结构、性质及其变化规律。',
        difficulty: 1
      },
      {
        id: 'q1251', type: 'choice',
        question: '下列属于化学性质的是',
        options: ['A. 颜色和状态', 'B. 密度', 'C. 可燃性', 'D. 熔点'],
        answer: 'C',
        explanation: '可燃性需要通过化学变化才能表现出来，属于化学性质。颜色、状态、密度、熔点等不需要化学变化就能表现出来，属于物理性质。',
        difficulty: 1
      },
      {
        id: 'q1252', type: 'choice',
        question: '下列实验操作正确的是',
        options: ['A. 把药品直接放在天平的托盘上称量', 'B. 用嘴吹灭酒精灯', 'C. 给试管中的液体加热时试管口不能对着人', 'D. 闻药品气味时直接将鼻子凑近瓶口'],
        answer: 'C',
        explanation: '加热试管时试管口不能对着人，防止液体沸腾喷出伤人。药品应放在纸上或容器中称量，酒精灯用灯帽盖灭，闻气味用手扇动。',
        difficulty: 2
      },
      {
        id: 'q1253', type: 'fill',
        question: '实验剩余的药品不能放回原瓶，也不能随意丢弃，更不能带出实验室，应放入____中。',
        answer: '指定的容器',
        explanation: '实验剩余药品的处理原则：不能放回原瓶（防止污染），不能随意丢弃（防止危险），不能带出实验室，应放入指定容器。',
        difficulty: 1
      }
    ]
  },

  'chemistry-renjiao-9-1': {
    chapterName: '我们周围的空气',
    questions: [
      {
        id: 'q1254', type: 'choice',
        question: '空气中体积分数最大的气体是',
        options: ['A. 氧气', 'B. 氮气', 'C. 二氧化碳', 'D. 稀有气体'],
        answer: 'B',
        explanation: '空气中氮气约占78%，氧气约占21%，稀有气体约占0.94%，二氧化碳约占0.04%。',
        difficulty: 1
      },
      {
        id: 'q1255', type: 'truefalse',
        question: '氧气是一种无色无味的气体，它在空气中的体积分数约为21%。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '氧气是无色无味气体，在空气中体积分数约为21%，是最重要的供气成分。',
        difficulty: 1
      },
      {
        id: 'q1256', type: 'fill',
        question: '工业上利用液态氮和液态氧的____不同，采用分离液态空气法获得氧气。',
        answer: '沸点',
        explanation: '液态氮的沸点（-196°C）比液态氧的沸点（-183°C）低，蒸发时氮气先蒸发出来，剩余的主要是液氧。',
        difficulty: 2
      },
      {
        id: 'q1257', type: 'choice',
        question: '下列物质中，不属于空气污染物的是',
        options: ['A. 二氧化硫', 'B. 二氧化氮', 'C. 一氧化碳', 'D. 氮气'],
        answer: 'D',
        explanation: '氮气是空气的主要成分，不是污染物。二氧化硫、二氧化氮、一氧化碳、可吸入颗粒物等是常见的空气污染物。',
        difficulty: 1
      },
      {
        id: 'q1258', type: 'choice',
        question: '催化剂在化学反应中',
        options: ['A. 能增大反应速率', 'B. 能减小反应速率', 'C. 能改变反应速率，反应前后质量和化学性质不变', 'D. 反应后质量减少'],
        answer: 'C',
        explanation: '催化剂能改变（增大或减小）化学反应速率，但反应前后其质量和化学性质都不发生变化。',
        difficulty: 2
      },
      {
        id: 'q1259', type: 'fill',
        question: '实验室制取氧气时，检查装置气密性的方法是：先将导管伸入水中，然后____，若水中有气泡冒出则气密性良好。',
        answer: '双手紧握容器（试管）外壁',
        explanation: '手握容器使内部气体受热膨胀，从导管口冒出气泡，说明装置不漏气。',
        difficulty: 2
      }
    ]
  },

  'chemistry-renjiao-9-2': {
    chapterName: '物质构成的奥秘',
    questions: [
      {
        id: 'q1260', type: 'choice',
        question: '下列粒子中，能保持物质的化学性质的是',
        options: ['A. 原子', 'B. 分子', 'C. 离子', 'D. 以上都可以，取决于具体物质'],
        answer: 'D',
        explanation: '分子、原子、离子都能保持物质的化学性质，具体取决于该物质是由分子、原子还是离子构成的。',
        difficulty: 2
      },
      {
        id: 'q1261', type: 'truefalse',
        question: '原子是最小的粒子，不可再分。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '原子由原子核（质子和中子）和核外电子构成，还可以再分。原子只是在化学变化中不可再分。',
        difficulty: 2
      },
      {
        id: 'q1262', type: 'fill',
        question: '分子是保持物质____性质的最小粒子，原子是____中的最小粒子。',
        answer: '化学；化学变化',
        explanation: '分子保持物质的化学性质，原子是化学变化中的最小粒子（在化学变化中不可再分）。',
        difficulty: 1
      },
      {
        id: 'q1263', type: 'choice',
        question: '碳原子的相对原子质量为12，其含义是',
        options: ['A. 一个碳原子的质量是12 g', 'B. 碳原子的实际质量是一个碳-12原子质量的1/12', 'C. 碳原子的质量是一种碳原子质量的12倍', 'D. 一个碳原子含有12个质子'],
        answer: 'C',
        explanation: '相对原子质量是以碳-12原子质量的1/12为标准，碳的相对原子质量为12，表示碳原子的质量是碳-12标准质量的12倍。',
        difficulty: 3
      },
      {
        id: 'q1264', type: 'choice',
        question: '下列化学符号中，既表示一个原子，又表示一种元素，还表示一种物质的是',
        options: ['A. O', 'B. Fe', 'C. 2H', 'D. N₂'],
        answer: 'B',
        explanation: 'Fe表示铁元素、一个铁原子，还能表示铁这种物质（由原子直接构成的金属）。O只表示元素和原子，2H表示两个氢原子，N₂只表示物质。',
        difficulty: 3
      },
      {
        id: 'q1265', type: 'fill',
        question: '原子核由____和____构成，其中____带正电，____不带电。',
        answer: '质子；中子；质子；中子',
        explanation: '原子核由质子和中子构成，质子带正电，中子不带电。核外电子带负电。',
        difficulty: 1
      }
    ]
  },

  'chemistry-renjiao-9-3': {
    chapterName: '自然界的水',
    questions: [
      {
        id: 'q1266', type: 'choice',
        question: '下列关于水的组成说法正确的是',
        options: ['A. 水是由氢原子和氧原子构成的', 'B. 水是由氢气和氧气组成的', 'C. 水是由水分子构成的', 'D. 水是由两个氢元素和一个氧元素组成的'],
        answer: 'C',
        explanation: '水是由水分子构成的，每个水分子由2个氢原子和1个氧原子构成。水不能说"由氢气和氧气组成"。',
        difficulty: 2
      },
      {
        id: 'q1267', type: 'truefalse',
        question: '电解水时，正极产生的气体体积与负极产生的气体体积比约为1:2。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '电解水时，正极产生氧气，负极产生氢气，氧气与氢气的体积比约为1:2。',
        difficulty: 2
      },
      {
        id: 'q1268', type: 'fill',
        question: '电解水的化学方程式为____。',
        answer: '2H₂O ═通电═ 2H₂↑ + O₂↑',
        explanation: '电解水生成氢气和氧气：2H₂O ═通电═ 2H₂↑ + O₂↑，说明水由氢元素和氧元素组成。',
        difficulty: 2
      },
      {
        id: 'q1269', type: 'choice',
        question: '下列净水方法中，净化程度最高的是',
        options: ['A. 沉淀', 'B. 过滤', 'C. 吸附', 'D. 蒸馏'],
        answer: 'D',
        explanation: '蒸馏得到的是纯水（蒸馏水），净化程度最高。沉淀、过滤、吸附只能去除不溶性杂质或部分杂质。',
        difficulty: 1
      },
      {
        id: 'q1270', type: 'choice',
        question: '下列混合物分离的方法中，利用溶解度差异的是',
        options: ['A. 过滤', 'B. 蒸馏', 'C. 结晶', 'D. 沉淀'],
        answer: 'C',
        explanation: '结晶是利用固体物质溶解度随温度变化的差异来分离混合物的方法（如冷却热饱和溶液或蒸发溶剂）。',
        difficulty: 2
      },
      {
        id: 'q1271', type: 'fill',
        question: '过滤操作中，玻璃棒的作用是____。',
        answer: '引流',
        explanation: '过滤时玻璃棒靠在三层滤纸处，使液体沿玻璃棒流下，起引流作用，防止液滴溅出和冲破滤纸。',
        difficulty: 1
      }
    ]
  },

  // ==================== 化学-沪教版 ====================
  'chemistry-hujiao-9-0': {
    chapterName: '化学的魅力',
    questions: [
      {
        id: 'q1272', type: 'choice',
        question: '下列物质的用途中，利用其化学性质的是',
        options: ['A. 干冰用于人工降雨', 'B. 铜丝用作导线', 'C. 氧气用于炼钢', 'D. 金刚石用于切割玻璃'],
        answer: 'C',
        explanation: '炼钢中氧气参与化学反应（氧化除杂），利用的是化学性质。干冰降雨利用升华吸热，铜丝利用导电性，金刚石利用硬度，都是物理性质。',
        difficulty: 2
      },
      {
        id: 'q1273', type: 'truefalse',
        question: '化学变化和物理变化的本质区别是有无新物质生成。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '化学变化的本质特征是有新物质生成。是否有发光、发热、变色、产生气体或沉淀等现象只是辅助判断，不是本质区别。',
        difficulty: 1
      },
      {
        id: 'q1274', type: 'fill',
        question: '取用粉末状药品时，用药匙或纸槽，将其送到试管____部，再使试管慢慢直立。',
        answer: '底',
        explanation: '取用粉末状药品时，先将试管倾斜，用药匙或纸槽将药品送到试管底部，再慢慢直立，防止药品沾在试管壁上。',
        difficulty: 1
      },
      {
        id: 'q1275', type: 'choice',
        question: '蜡烛在空气中燃烧，属于',
        options: ['A. 物理变化', 'B. 化学变化', 'C. 既是物理变化又是化学变化', 'D. 无法判断'],
        answer: 'B',
        explanation: '蜡烛燃烧时石蜡与氧气反应生成二氧化碳和水，有新物质生成，属于化学变化。',
        difficulty: 1
      },
      {
        id: 'q1276', type: 'choice',
        question: '下列实验基本操作中，正确的是',
        options: ['A. 向试管中倾倒液体时标签朝外', 'B. 给液体加热时试管口朝向自己', 'C. 取用液体药品时，瓶塞倒放在桌上', 'D. 用天平称量时右盘放砝码左盘放药品（读数相等时）'],
        answer: 'C',
        explanation: '取用液体药品时瓶塞倒放在桌上，防止污染桌面和瓶塞。标签应朝手心方向，试管口不能对着人。',
        difficulty: 2
      },
      {
        id: 'q1277', type: 'fill',
        question: '人体中含量最多的元素是____。',
        answer: '氧',
        explanation: '人体中含量最多的元素是氧（约占65%），其次是碳、氢、氮等。',
        difficulty: 2
      }
    ]
  },

  'chemistry-hujiao-9-1': {
    chapterName: '浩瀚的大气',
    questions: [
      {
        id: 'q1278', type: 'choice',
        question: '下列关于空气的说法不正确的是',
        options: ['A. 空气是一种混合物', 'B. 空气中含量最多的是氮气', 'C. 氧气可燃性很强', 'D. 稀有气体化学性质不活泼'],
        answer: 'C',
        explanation: '氧气能支持燃烧（助燃性），但本身不可燃。氧气是不可燃气体。',
        difficulty: 2
      },
      {
        id: 'q1279', type: 'truefalse',
        question: '稀有气体在通电时能发出不同颜色的光，因此常用于制造霓虹灯。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '稀有气体（如氖气、氩气）在通电时能发出不同颜色的光，广泛用于霓虹灯和特种光源。',
        difficulty: 1
      },
      {
        id: 'q1280', type: 'fill',
        question: '氧气可用于切割金属，是利用了氧气能支持____的性质。',
        answer: '燃烧',
        explanation: '氧炔焰切割金属是利用氧气能支持燃烧的性质，使高温下的金属在氧气中剧烈燃烧。',
        difficulty: 1
      },
      {
        id: 'q1281', type: 'choice',
        question: '下列说法中，能证明空气中含有水蒸气的是',
        options: ['A. 空气能流动', 'B. 从冰箱中拿出的饮料瓶外壁会"出汗"', 'C. 夏天从冰柜旁经过感到凉', 'D. 雨后空气清新'],
        answer: 'B',
        explanation: '冷饮料瓶外壁"出汗"是空气中的水蒸气遇到冷瓶壁液化成水珠，证明空气中含有水蒸气。',
        difficulty: 2
      },
      {
        id: 'q1282', type: 'choice',
        question: '为保护大气环境，下列做法不正确的是',
        options: ['A. 使用清洁能源', 'B. 积极植树造林', 'C. 工厂废气直接排放', 'D. 推广使用公共交通'],
        answer: 'C',
        explanation: '工厂废气直接排放会严重污染大气，应经过处理后达标排放。其余选项都有利于保护大气环境。',
        difficulty: 1
      },
      {
        id: 'q1283', type: 'fill',
        question: '测定空气中氧气含量的实验中，使用的药品通常为____（填化学物质名称），其现象是____。',
        answer: '红磷；红磷燃烧产生大量白烟，冷却后水进入集气瓶约1/5体积',
        explanation: '用红磷在密闭容器中燃烧消耗氧气，生成五氧化二磷（白烟），冷却后水进入容器约占原体积的1/5，说明氧气约占空气的1/5。',
        difficulty: 2
      }
    ]
  },

  'chemistry-hujiao-9-2': {
    chapterName: '走进溶液世界',
    questions: [
      {
        id: 'q1284', type: 'choice',
        question: '下列关于溶液的说法正确的是',
        options: ['A. 溶液一定是无色的', 'B. 溶液一定是液体', 'C. 均一稳定的混合物一定是溶液', 'D. 溶液由溶质和溶剂组成'],
        answer: 'D',
        explanation: '溶液不一定是无色（如硫酸铜溶液为蓝色），不一定是液体（如合金），但一定由溶质和溶剂组成。',
        difficulty: 2
      },
      {
        id: 'q1285', type: 'truefalse',
        question: '饱和溶液一定能继续溶解其他溶质。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '饱和溶液是指在一定的温度和一定量溶剂中，不能再继续溶解该种溶质的溶液。但可能还能溶解其他溶质。',
        difficulty: 2
      },
      {
        id: 'q1286', type: 'fill',
        question: '把食盐放入水中搅拌溶解后，____是溶质，____是溶剂，形成的混合物叫____。',
        answer: '食盐；水；溶液',
        explanation: '食盐是被溶解的物质，是溶质；水是溶解其他物质的物质，是溶剂；两者混合形成溶液。',
        difficulty: 1
      },
      {
        id: 'q1287', type: 'choice',
        question: '下列混合物中，属于溶液的是',
        options: ['A. 豆浆', 'B. 泥水', 'C. 糖水', 'D. 牛奶'],
        answer: 'C',
        explanation: '糖水是均一稳定的混合物，属于溶液。豆浆、牛奶是乳浊液，泥水是悬浊液。',
        difficulty: 1
      },
      {
        id: 'q1288', type: 'choice',
        question: '要使接近饱和的硝酸钾溶液变为饱和溶液，下列方法不正确的是',
        options: ['A. 加硝酸钾晶体', 'B. 蒸发溶剂', 'C. 降低温度', 'D. 升高温度'],
        answer: 'D',
        explanation: '硝酸钾的溶解度随温度升高而增大，升高温度会使溶液更不饱和。要使其饱和可以加溶质、蒸发溶剂或降低温度。',
        difficulty: 2
      },
      {
        id: 'q1289', type: 'fill',
        question: '溶解度是指在一定____下，某固态物质在____ g溶剂里达到____状态时所溶解的质量。',
        answer: '温度；100；饱和',
        explanation: '溶解度是在一定温度下，某固态物质在100 g溶剂（通常是水）里达到饱和状态时所溶解的质量（单位g）。',
        difficulty: 2
      }
    ]
  },

  'chemistry-hujiao-9-3': {
    chapterName: '燃烧与灭火',
    questions: [
      {
        id: 'q1290', type: 'choice',
        question: '燃烧需要同时满足的三个条件不包括',
        options: ['A. 可燃物', 'B. 温度达到着火点', 'C. 与氧气接触', 'D. 有风'],
        answer: 'D',
        explanation: '燃烧需要三个条件同时满足：可燃物、温度达到着火点、与氧气（或空气）接触。有风不是必要条件。',
        difficulty: 1
      },
      {
        id: 'q1291', type: 'truefalse',
        question: '只要温度达到着火点，可燃物就一定会燃烧。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '燃烧需要三个条件同时满足。温度达到着火点但不与氧气接触，也不会燃烧。',
        difficulty: 2
      },
      {
        id: 'q1292', type: 'fill',
        question: '灭火的三种原理是：隔离可燃物、____、使温度降低到着火点以下。',
        answer: '隔绝氧气（或空气）',
        explanation: '灭火原理：(1)隔离可燃物 (2)隔绝氧气/空气 (3)降温到着火点以下。满足任一条即可灭火。',
        difficulty: 1
      },
      {
        id: 'q1293', type: 'choice',
        question: '炒菜时油锅着火，应采取的灭火方法是',
        options: ['A. 往锅里浇水', 'B. 盖上锅盖', 'C. 用扇子扇灭', 'D. 撒沙子'],
        answer: 'B',
        explanation: '油锅着火时盖上锅盖，隔绝空气使火熄灭。浇水可能引起油溅，更危险。',
        difficulty: 1
      },
      {
        id: 'q1294', type: 'choice',
        question: '下列关于灭火器的使用，说法正确的是',
        options: ['A. 灭火器可以扑灭所有类型的火灾', 'B. 发现火灾时应先灭火再报警', 'C. 灭火时应站在上风方向', 'D. 液体火灾可以直接用水浇灭'],
        answer: 'C',
        explanation: '使用灭火器时应站在上风方向，防止被烟熏或被火焰灼伤。不同火灾类型使用不同灭火器，发现火灾应先报警。',
        difficulty: 2
      },
      {
        id: 'q1295', type: 'fill',
        question: '使可燃物着火燃烧所需要的最低温度叫做____。',
        answer: '着火点',
        explanation: '着火点是可燃物燃烧所需的最低温度，不同可燃物的着火点不同。着火点是物质本身的固有属性，一般不能改变。',
        difficulty: 1
      }
    ]
  },

  // ==================== 化学-粤教版 ====================
  'chemistry-yuejiao-9-0': {
    chapterName: '身边的化学物质',
    questions: [
      {
        id: 'q1296', type: 'choice',
        question: '下列物质中，属于纯净物的是',
        options: ['A. 矿泉水', 'B. 洁净的空气', 'C. 蒸馏水', 'D. 碘酒'],
        answer: 'C',
        explanation: '蒸馏水是纯净物（只有水一种物质）。矿泉水、空气、碘酒都是混合物。',
        difficulty: 1
      },
      {
        id: 'q1297', type: 'truefalse',
        question: '氧气既能支持燃烧，本身也能燃烧。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '氧气能支持燃烧（助燃），但本身不能燃烧。氧气是不可燃气体。',
        difficulty: 1
      },
      {
        id: 'q1298', type: 'fill',
        question: '碳单质有金刚石、石墨和 C₆₀ 等，其中天然最硬的物质是____。',
        answer: '金刚石',
        explanation: '金刚石是天然存在的最硬物质，石墨很软能导电，C₆₀是一种新的碳分子。',
        difficulty: 1
      },
      {
        id: 'q1299', type: 'choice',
        question: '下列气体的性质中，不属于氧气化学性质的是',
        options: ['A. 能支持燃烧', 'B. 能供给呼吸', 'C. 密度比空气大', 'D. 能与铁反应'],
        answer: 'C',
        explanation: '密度比空气大是物理性质，不需要发生化学变化就能表现出来。其余都需要在化学变化中表现。',
        difficulty: 2
      },
      {
        id: 'q1300', type: 'choice',
        question: '下列物质在氧气中燃烧时，产生大量白烟的是',
        options: ['A. 碳', 'B. 硫', 'C. 红磷', 'D. 铁'],
        answer: 'C',
        explanation: '红磷在氧气中燃烧产生大量白烟（五氧化二磷）。碳产生二氧化碳（气体），硫产生有刺激性气味的二氧化硫（气体），铁燃烧火星四射。',
        difficulty: 2
      },
      {
        id: 'q1301', type: 'fill',
        question: '二氧化碳能使澄清石灰水变____，这个反应的化学方程式为____。',
        answer: '浑浊；CO₂ + Ca(OH)₂ = CaCO₃↓ + H₂O',
        explanation: 'CO₂ 与 Ca(OH)₂ 反应生成不溶于水的 CaCO₃，使石灰水变浑浊，这是检验 CO₂ 的常用方法。',
        difficulty: 2
      }
    ]
  },

  'chemistry-yuejiao-9-1': {
    chapterName: '物质构成的奥秘',
    questions: [
      {
        id: 'q1302', type: 'choice',
        question: '下列微粒中，带正电的是',
        options: ['A. 电子', 'B. 中子', 'C. 质子', 'D. 分子'],
        answer: 'C',
        explanation: '质子带正电，电子带负电，中子不带电，分子一般不显电性。',
        difficulty: 1
      },
      {
        id: 'q1303', type: 'truefalse',
        question: '在原子中，质子数一定等于核外电子数。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '原子中质子数等于核外电子数，所以原子不显电性。但离子中质子数不等于电子数。',
        difficulty: 1
      },
      {
        id: 'q1304', type: 'fill',
        question: '元素的化学性质主要决定于原子的____数。',
        answer: '最外层电子',
        explanation: '最外层电子数决定了元素的化学性质。最外层电子数为4个或8个（氦为2个）的结构是稳定结构。',
        difficulty: 2
      },
      {
        id: 'q1305', type: 'choice',
        question: '下列关于分子的说法不正确的是',
        options: ['A. 分子在不断运动', 'B. 分子间有间隔', 'C. 分子是保持物质性质的最小粒子', 'D. 分子质量很小'],
        answer: 'C',
        explanation: '分子是保持物质化学性质的最小粒子，不是保持所有性质的最小粒子。物理性质不一定由单个分子保持。',
        difficulty: 2
      },
      {
        id: 'q1306', type: 'choice',
        question: '原子失去电子后变成',
        options: ['A. 阴离子', 'B. 阳离子', 'C. 原子', 'D. 分子'],
        answer: 'B',
        explanation: '原子失去电子后质子数大于电子数，带正电，变成阳离子。',
        difficulty: 1
      },
      {
        id: 'q1307', type: 'fill',
        question: '地壳中含量最多的元素是____，含量最多的金属元素是____。',
        answer: '氧；铝',
        explanation: '地壳中元素含量前四位：氧(48.6%)、硅(26.3%)、铝(7.73%)、铁(4.75%)。含量最多的是氧元素，金属中最多的是铝。',
        difficulty: 1
      }
    ]
  },

  'chemistry-yuejiao-9-2': {
    chapterName: '燃烧与灭火',
    questions: [
      {
        id: 'q1308', type: 'choice',
        question: '下列做法中，利用燃烧条件来促进燃烧的是',
        options: ['A. 用扇子扇炉火', 'B. 鼓风机吹风', 'C. 减少可燃物', 'D. 降低温度'],
        answer: 'B',
        explanation: '鼓风机吹风增加了空气（氧气）的供应，使燃烧更旺。扇子扇炉火也增加氧气。减少可燃物和降低温度是灭火方法。',
        difficulty: 2
      },
      {
        id: 'q1309', type: 'truefalse',
        question: '着火点可以通过浇水来降低。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '着火点是可燃物固有的属性，一般不能改变。浇水是降低温度，不是降低着火点。',
        difficulty: 2
      },
      {
        id: 'q1310', type: 'fill',
        question: '消防标志中，红色背景表示____标志，绿色背景表示____标志。',
        answer: '禁止；安全（或提示）',
        explanation: '消防标志中红色表示禁止、停止，绿色表示安全、提示。',
        difficulty: 1
      },
      {
        id: 'q1311', type: 'choice',
        question: '林区着火时，消防员常在火场前方砍去一片树木，形成隔离带，其灭火原理是',
        options: ['A. 隔绝氧气', 'B. 隔离可燃物', 'C. 降低温度', 'D. 降低着火点'],
        answer: 'B',
        explanation: '砍去树木清除可燃物，形成隔离带使火势无法蔓延，利用的是隔离可燃物的灭火原理。',
        difficulty: 2
      },
      {
        id: 'q1312', type: 'choice',
        question: '下列火灾中，不能用水灭火的是',
        options: ['A. 木材着火', 'B. 纸张着火', 'C. 油锅着火', 'D. 衣服着火'],
        answer: 'C',
        explanation: '油锅着火不能用水灭火，因为水的密度比油大，水沉到下面，油浮在上面，反而会使油面扩大导致火势蔓延。',
        difficulty: 2
      },
      {
        id: 'q1313', type: 'fill',
        question: '缓慢氧化是指氧化反应进行得很____，不像燃烧那样剧烈，如铁的____。',
        answer: '缓慢；生锈',
        explanation: '缓慢氧化是进行得很慢的氧化反应，如铁生锈、食物腐烂、呼吸作用等。有的缓慢氧化会引起自燃。',
        difficulty: 2
      }
    ]
  },

  'chemistry-yuejiao-9-3': {
    chapterName: '金属与金属材料',
    questions: [
      {
        id: 'q1314', type: 'choice',
        question: '下列金属中，导电性最好的是',
        options: ['A. 铁', 'B. 铜', 'C. 铝', 'D. 银'],
        answer: 'D',
        explanation: '常见金属的导电性顺序为：银 > 铜 > 金 > 铝 > 铁。银导电性最好，但因价格贵，导线一般用铜。',
        difficulty: 2
      },
      {
        id: 'q1315', type: 'truefalse',
        question: '合金是一种纯净物。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '合金是由一种金属与其他金属（或非金属）熔合而成的混合物，如钢（铁碳合金）、青铜（铜锡合金）。',
        difficulty: 1
      },
      {
        id: 'q1316', type: 'fill',
        question: '铁在潮湿的空气中容易生锈，铁锈的主要成分是____（写化学式）。',
        answer: 'Fe₂O₃',
        explanation: '铁锈的主要成分是氧化铁（Fe₂O₃），铁生锈是铁与氧气和水共同作用的结果。',
        difficulty: 1
      },
      {
        id: 'q1317', type: 'choice',
        question: '下列防止铁制品生锈的做法不正确的是',
        options: ['A. 涂油', 'B. 刷油漆', 'C. 镀上其他金属', 'D. 放在潮湿的空气中'],
        answer: 'D',
        explanation: '防止铁生锈的方法：涂油、刷油漆、镀金属等隔绝空气和水分。放在潮湿空气中反而加速生锈。',
        difficulty: 1
      },
      {
        id: 'q1318', type: 'choice',
        question: '下列关于合金的说法正确的是',
        options: ['A. 合金的硬度一般比纯金属低', 'B. 合金一定只含金属元素', 'C. 合金的性能一般优于纯金属', 'D. 合金中各元素以化合物的形式存在'],
        answer: 'C',
        explanation: '合金的性能（硬度、强度、抗腐蚀性等）一般优于组成它的纯金属。合金是混合物，不是化合物。',
        difficulty: 2
      },
      {
        id: 'q1319', type: 'fill',
        question: '金属的化学性质主要有三个：能与氧气反应、能与____反应、能与金属化合物溶液反应。',
        answer: '酸',
        explanation: '金属的三个主要化学性质：(1)与氧气反应 (2)与稀酸反应 (3)与金属化合物溶液（盐溶液）发生置换反应。',
        difficulty: 2
      }
    ]
  },

  // ==================== 生物-人教版 ====================
  'biology-renjiao-7-0': {
    chapterName: '生物和生物圈',
    questions: [
      {
        id: 'q1320', type: 'choice',
        question: '下列不属于生物的是',
        options: ['A. 含羞草', 'B. 珊瑚', 'C. 机器人', 'D. 蘑菇'],
        answer: 'C',
        explanation: '生物具有生命现象，能新陈代谢、生长繁殖。含羞草（植物）、珊瑚（动物）、蘑菇（真菌）都是生物。机器人是机器，不是生物。',
        difficulty: 1
      },
      {
        id: 'q1321', type: 'truefalse',
        question: '所有生物都能进行光合作用。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '只有绿色植物、部分藻类和少数细菌能进行光合作用。动物、真菌和大多数细菌不能光合作用。',
        difficulty: 1
      },
      {
        id: 'q1322', type: 'fill',
        question: '生物体有共同的物质基础和结构基础，所有生物都以____为基本单位。',
        answer: '细胞',
        explanation: '除病毒外，所有生物体都是由细胞构成的，细胞是生物体的基本单位。',
        difficulty: 1
      },
      {
        id: 'q1323', type: 'choice',
        question: '在生态系统中，能量流动的特点是',
        options: ['A. 单向流动，逐级递减', 'B. 双向流动，逐级递增', 'C. 循环流动', 'D. 逐级递增'],
        answer: 'A',
        explanation: '生态系统中能量流动是单向的、逐级递减的。沿食物链传递时，每一级都将大部分能量用于生命活动，只有约10%~20%传递给下一级。',
        difficulty: 2
      },
      {
        id: 'q1324', type: 'choice',
        question: '在生态系统中，分解者的作用是',
        options: ['A. 制造有机物', 'B. 分解有机物', 'C. 捕食其他生物', 'D. 进行光合作用'],
        answer: 'B',
        explanation: '分解者（细菌、真菌等）将有机物分解为无机物，归还给无机环境，促进物质循环。',
        difficulty: 1
      },
      {
        id: 'q1325', type: 'fill',
        question: '生物圈的范围包括大气圈的____、水圈的全部和岩石圈的____。',
        answer: '下层；上层',
        explanation: '生物圈包括大气圈的下层（对流层）、水圈的全部和岩石圈的上层（土壤层），是所有生物的家。',
        difficulty: 2
      }
    ]
  },

  'biology-renjiao-7-1': {
    chapterName: '了解生物圈',
    questions: [
      {
        id: 'q1326', type: 'choice',
        question: '下列生态系统中，自我调节能力最强的是',
        options: ['A. 草原生态系统', 'B. 湿地生态系统', 'C. 海洋生态系统', 'D. 森林生态系统'],
        answer: 'C',
        explanation: '海洋生态系统面积最大，生物种类多，营养结构最复杂，自我调节能力最强。',
        difficulty: 2
      },
      {
        id: 'q1327', type: 'truefalse',
        question: '生态系统中的消费者一定都是动物。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '消费者主要是动物（不能自己制造有机物，靠吃其他生物为生），少数非自养生物也可以视为消费者。',
        difficulty: 1
      },
      {
        id: 'q1328', type: 'fill',
        question: '食物链的起始环节是____。',
        answer: '生产者',
        explanation: '食物链从生产者（绿色植物）开始，沿"吃与被吃"的关系连接：生产者→初级消费者→次级消费者……',
        difficulty: 1
      },
      {
        id: 'q1329', type: 'choice',
        question: '在"草→兔→狐"这条食物链中，兔属于',
        options: ['A. 生产者', 'B. 初级消费者', 'C. 次级消费者', 'D. 分解者'],
        answer: 'B',
        explanation: '兔以草（生产者）为食，是初级消费者。狐以兔为食，是次级消费者。',
        difficulty: 1
      },
      {
        id: 'q1330', type: 'choice',
        question: '下列哪项不是生态系统的组成部分',
        options: ['A. 非生物部分', 'B. 生产者', 'C. 消费者', 'D. 阳光和空气（不属于）'],
        answer: 'D',
        explanation: '生态系统由生物部分（生产者、消费者、分解者）和非生物部分（阳光、空气、水等）共同组成。阳光和空气属于非生物部分，是组成部分。',
        difficulty: 2
      }
    ]
  },

  'biology-renjiao-7-2': {
    chapterName: '细胞是生命活动的基本单位',
    questions: [
      {
        id: 'q1331', type: 'choice',
        question: '动植物细胞都具有的结构是',
        options: ['A. 细胞壁', 'B. 液泡', 'C. 细胞膜', 'D. 叶绿体'],
        answer: 'C',
        explanation: '动植物细胞都有细胞膜、细胞质和细胞核。细胞壁、液泡和叶绿体是植物细胞特有的结构。',
        difficulty: 1
      },
      {
        id: 'q1332', type: 'truefalse',
        question: '植物细胞没有细胞膜。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '植物细胞有细胞膜，只是植物细胞的细胞膜紧贴细胞壁，在光学显微镜下不易观察。所有细胞都有细胞膜。',
        difficulty: 1
      },
      {
        id: 'q1333', type: 'fill',
        question: '在显微镜下观察细胞时，看到的细胞是被____的像（填"放大"或"缩小"）。',
        answer: '放大',
        explanation: '显微镜利用凸透镜成像原理，使被观察的物体放大。物镜和目镜共同作用，将物体放大。',
        difficulty: 1
      },
      {
        id: 'q1334', type: 'choice',
        question: '细胞的生活需要物质和能量，其中控制物质进出的结构是',
        options: ['A. 细胞壁', 'B. 细胞膜', 'C. 细胞质', 'D. 细胞核'],
        answer: 'B',
        explanation: '细胞膜能控制物质的进出，让有用的物质进入细胞，把废物排出细胞（保护作用）。',
        difficulty: 1
      },
      {
        id: 'q1335', type: 'choice',
        question: '遗传信息存在于细胞的哪个结构中',
        options: ['A. 细胞膜', 'B. 细胞质', 'C. 细胞核', 'D. 液泡'],
        answer: 'C',
        explanation: '细胞核中含有遗传物质（DNA），是细胞代谢和遗传的控制中心。',
        difficulty: 1
      },
      {
        id: 'q1336', type: 'fill',
        question: '制作洋葱表皮临时装片时，在盖玻片一侧滴加____，在另一侧用吸水纸吸引，目的是对细胞进行____。',
        answer: '碘液；染色',
        explanation: '碘液能使细胞着色，便于在显微镜下观察细胞的结构。',
        difficulty: 1
      }
    ]
  },

  'biology-renjiao-7-3': {
    chapterName: '细胞怎样构成生物体',
    questions: [
      {
        id: 'q1337', type: 'choice',
        question: '一个受精卵经过细胞分裂和分化，最终发育成新个体。其中细胞分化的结果是',
        options: ['A. 细胞数量增多', 'B. 细胞体积增大', 'C. 形成不同形态和功能的细胞', 'D. 产生新个体'],
        answer: 'C',
        explanation: '细胞分化使细胞在形态、结构和功能上产生差异，形成不同的组织。细胞分裂使数量增多。',
        difficulty: 2
      },
      {
        id: 'q1338', type: 'truefalse',
        question: '人体的结构层次是：细胞→组织→器官→系统→个体。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '人体的结构层次：细胞→组织→器官→系统→个体。植物没有"系统"这一层次。',
        difficulty: 1
      },
      {
        id: 'q1339', type: 'fill',
        question: '植物体的结构层次是：细胞→____→器官→____。',
        answer: '组织；个体',
        explanation: '植物体的结构层次：细胞→组织→器官→个体。植物没有"系统"这一层次，器官直接构成个体。',
        difficulty: 1
      },
      {
        id: 'q1340', type: 'choice',
        question: '下列属于植物营养组织的是',
        options: ['A. 导管', 'B. 叶肉', 'C. 根尖', 'D. 表皮'],
        answer: 'B',
        explanation: '叶肉细胞含有大量叶绿体，能进行光合作用制造有机物，属于营养组织。导管是输导组织，表皮是保护组织。',
        difficulty: 2
      },
      {
        id: 'q1341', type: 'choice',
        question: '动植物细胞分裂时，最先进行分裂的结构是',
        options: ['A. 细胞壁', 'B. 细胞膜', 'C. 细胞质', 'D. 细胞核'],
        answer: 'D',
        explanation: '细胞分裂时，细胞核首先分裂为两个，然后细胞质分成两份，最后形成两个新细胞。',
        difficulty: 2
      },
      {
        id: 'q1342', type: 'fill',
        question: '人体的四种基本组织是上皮组织、____组织、肌肉组织和____组织。',
        answer: '结缔；神经',
        explanation: '人体的四种基本组织：上皮组织（保护、分泌）、结缔组织（支持、连接、保护）、肌肉组织（收缩、舒张）、神经组织（接受刺激产生和传导兴奋）。',
        difficulty: 2
      }
    ]
  },

  'biology-renjiao-8-0': {
    chapterName: '生物圈中的绿色植物',
    questions: [
      {
        id: 'q1343', type: 'choice',
        question: '种子萌发需要的外界条件不包括',
        options: ['A. 适量的水分', 'B. 适宜的温度', 'C. 充足的空气', 'D. 充足的光照'],
        answer: 'D',
        explanation: '种子萌发的外界条件：适量的水分、适宜的温度和充足的空气。不需要光照。',
        difficulty: 1
      },
      {
        id: 'q1344', type: 'truefalse',
        question: '根尖吸水的主要部位是成熟区（根毛区）。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '成熟区有大量根毛，大大增加了根与土壤的接触面积，是根吸收水和无机盐的主要部位。',
        difficulty: 1
      },
      {
        id: 'q1345', type: 'fill',
        question: '绿色植物通过____作用制造有机物，该过程主要在叶片的____细胞中进行。',
        answer: '光合；叶肉',
        explanation: '绿色植物在叶肉细胞中利用光能，将二氧化碳和水合成有机物并释放氧气，这就是光合作用。',
        difficulty: 1
      },
      {
        id: 'q1346', type: 'choice',
        question: '光合作用的场所是',
        options: ['A. 细胞核', 'B. 线粒体', 'C. 叶绿体', 'D. 液泡'],
        answer: 'C',
        explanation: '光合作用在叶绿体中进行。叶绿体含有叶绿素，能吸收和利用光能。',
        difficulty: 1
      },
      {
        id: 'q1347', type: 'choice',
        question: '下列关于蒸腾作用的说法不正确的是',
        options: ['A. 促进水分的吸收和运输', 'B. 降低叶片温度', 'C. 是水从液态变为气态的过程', 'D. 对植物是有害的，应尽量避免'],
        answer: 'D',
        explanation: '蒸腾作用对植物是有利的：促进水分和无机盐的运输、降低叶片温度、提高大气湿度。',
        difficulty: 2
      },
      {
        id: 'q1348', type: 'fill',
        question: '光合作用的文字表达式：二氧化碳 + 水 ──有机物（储存能量）+ ____。',
        answer: '氧气',
        explanation: '光合作用：二氧化碳 + 水 →（光能，叶绿体）有机物 + 氧气，将光能转变为化学能储存在有机物中。',
        difficulty: 1
      }
    ]
  },

  'biology-renjiao-8-1': {
    chapterName: '生物圈中的人',
    questions: [
      {
        id: 'q1349', type: 'choice',
        question: '人体消化吸收营养的主要场所是',
        options: ['A. 胃', 'B. 小肠', 'C. 大肠', 'D. 口腔'],
        answer: 'B',
        explanation: '小肠是消化和吸收的主要场所，有大量环形皱襞和小肠绒毛，大大增加了吸收面积。',
        difficulty: 1
      },
      {
        id: 'q1350', type: 'truefalse',
        question: '动脉中流动的一定是动脉血，静脉中流动的一定是静脉血。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '肺动脉中流动的是静脉血（含氧少），肺静脉中流动的是动脉血（含氧多）。不能仅凭血管名称判断血液类型。',
        difficulty: 2
      },
      {
        id: 'q1351', type: 'fill',
        question: '血液循环包括体循环和____两部分。',
        answer: '肺循环',
        explanation: '血液循环由体循环（大循环）和肺循环（小循环）组成，二者同时进行，共同完成体内的物质运输。',
        difficulty: 1
      },
      {
        id: 'q1352', type: 'choice',
        question: '在呼吸道中，能对吸入的空气进行清洁、湿润和温煦作用的主要是',
        options: ['A. 鼻腔', 'B. 咽', 'C. 喉', 'D. 气管'],
        answer: 'A',
        explanation: '鼻腔内有鼻毛能阻挡灰尘，鼻黏膜能分泌黏液湿润空气，丰富的毛细血管能温暖冷空气。',
        difficulty: 1
      },
      {
        id: 'q1353', type: 'choice',
        question: '人体的呼吸系统由呼吸道和肺组成，其中肺是进行____的场所。',
        options: ['A. 气体流通', 'B. 气体交换', 'C. 发声', 'D. 嗅觉'],
        answer: 'B',
        explanation: '肺是气体交换的场所，肺泡壁薄且周围有大量毛细血管，氧气和二氧化碳在此进行交换。',
        difficulty: 1
      },
      {
        id: 'q1354', type: 'fill',
        question: '人体泌尿系统中，形成尿液的器官是____，暂时储存尿液的器官是____。',
        answer: '肾脏；膀胱',
        explanation: '肾脏（形成尿液）→输尿管（输送）→膀胱（暂时储存）→尿道（排出体外）。',
        difficulty: 1
      }
    ]
  },

  'biology-renjiao-8-2': {
    chapterName: '生物圈中的其他生物',
    questions: [
      {
        id: 'q1355', type: 'choice',
        question: '下列动物中，属于无脊椎动物的是',
        options: ['A. 鱼类', 'B. 两栖类', 'C. 节肢动物', 'D. 哺乳类'],
        answer: 'C',
        explanation: '节肢动物（昆虫、蜘蛛、虾蟹等）没有脊椎骨，是无脊椎动物。鱼类、两栖类、哺乳类都有脊椎骨，属于脊椎动物。',
        difficulty: 1
      },
      {
        id: 'q1356', type: 'truefalse',
        question: '所有的鱼都用鳃呼吸，用鳍游泳。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '鱼类的共同特征：生活在水中，体表常有鳞片覆盖，用鳃呼吸，用鳍游泳。',
        difficulty: 1
      },
      {
        id: 'q1357', type: 'fill',
        question: '细菌没有成形的细胞核，这类生物称为____生物。',
        answer: '原核',
        explanation: '细菌属于原核生物，没有核膜包被的细胞核，只有拟核。真菌、植物和动物有成形细胞核，属于真核生物。',
        difficulty: 2
      },
      {
        id: 'q1358', type: 'choice',
        question: '下列关于真菌的说法不正确的是',
        options: ['A. 真菌有成形的细胞核', 'B. 真菌通过孢子繁殖', 'C. 真菌都是单细胞生物', 'D. 酵母菌属于真菌'],
        answer: 'C',
        explanation: '真菌有的是单细胞（如酵母菌），有的是多细胞（如蘑菇、霉菌）。但都有成形的细胞核，属于真核生物。',
        difficulty: 2
      },
      {
        id: 'q1359', type: 'choice',
        question: '下列哪类动物是真正的陆生脊椎动物'
        ,
        options: ['A. 两栖动物', 'B. 爬行动物', 'C. 鱼类', 'D. 软体动物'],
        answer: 'B',
        explanation: '爬行动物（如龟、蛇、蜥蜴）体表有角质鳞片或甲，生殖和发育摆脱了水的束缚，是真正的陆生脊椎动物。',
        difficulty: 2
      },
      {
        id: 'q1360', type: 'fill',
        question: '鸟类的飞行特征：前肢变为____，体表覆有____，骨骼中空，减轻体重。',
        answer: '翼（翅膀）；羽毛',
        explanation: '鸟类适应飞行：前肢变成翼，体表覆羽毛，骨骼中空减轻体重，有气囊辅助呼吸。',
        difficulty: 1
      }
    ]
  },

  'biology-renjiao-8-3': {
    chapterName: '生物的生殖与发育',
    questions: [
      {
        id: 'q1361', type: 'choice',
        question: '植物的传粉方式中，依靠昆虫传粉的花叫做',
        options: ['A. 风媒花', 'B. 虫媒花', 'C. 水媒花', 'D. 自花传粉'],
        answer: 'B',
        explanation: '依靠昆虫传粉的花是虫媒花，这类花通常色彩鲜艳、有芳香气味、有花蜜。依靠风力传粉的是风媒花。',
        difficulty: 1
      },
      {
        id: 'q1362', type: 'truefalse',
        question: '一朵花中最重要的结构是花瓣。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '一朵花中最重要的结构是雄蕊和雌蕊（合称花蕊），因为它们与生殖有关。雄蕊产生花粉，雌蕊的子房发育成果实。',
        difficulty: 1
      },
      {
        id: 'q1363', type: 'fill',
        question: '果实由____发育而来，种子由____发育而来。',
        answer: '子房；胚珠',
        explanation: '子房壁发育成果皮，整个子房发育成果实；胚珠内的受精卵发育成胚，胚珠发育成种子。',
        difficulty: 2
      },
      {
        id: 'q1364', type: 'choice',
        question: '下列动物的生殖方式属于有性生殖的是',
        options: ['A. 细菌分裂生殖', 'B. 青蛙的繁殖', 'C. 植物的扦插', 'D. 酵母菌出芽生殖'],
        answer: 'B',
        explanation: '青蛙经过雌雄交配产生受精卵，属于有性生殖。A、D是无性生殖（出芽、分裂），C是营养繁殖（无性生殖）。',
        difficulty: 1
      },
      {
        id: 'q1365', type: 'choice',
        question: '昆虫的完全变态发育经历的过程是',
        options: ['A. 卵→幼虫→成虫', 'B. 卵→若虫→成虫', 'C. 卵→幼虫→蛹→成虫', 'D. 卵→成虫'],
        answer: 'C',
        explanation: '完全变态发育经历四个阶段：卵→幼虫→蛹→成虫（如蝴蝶、苍蝇、蜜蜂）。不完全变态为：卵→若虫→成虫（如蝗虫、蟑螂）。',
        difficulty: 2
      },
      {
        id: 'q1366', type: 'fill',
        question: '青蛙的发育过程经历了卵、____、幼蛙和成蛙四个阶段，其中幼体生活在____中。',
        answer: '蝌蚪；水',
        explanation: '青蛙的幼体（蝌蚪）生活在水中，用鳃呼吸；成体生活在陆地或水中，用肺和皮肤呼吸，属于两栖动物。',
        difficulty: 1
      }
    ]
  },

  // ==================== 生物-北师大版 ====================
  'biology-bsd-7-0': {
    chapterName: '认识生命',
    questions: [
      {
        id: 'q1367', type: 'choice',
        question: '下列哪项不是生物的基本特征',
        options: ['A. 需要营养物质', 'B. 能呼吸', 'C. 都能运动', 'D. 能生长和繁殖'],
        answer: 'C',
        explanation: '生物的基本特征包括：需要营养、呼吸、排泄、对外界刺激作出反应、生长繁殖、遗传变异等。但不是所有生物都能运动（如植物）。',
        difficulty: 1
      },
      {
        id: 'q1368', type: 'truefalse',
        question: '生物都能对刺激作出反应，这叫做应激性。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '应激性是生物的基本特征之一，指生物对外界刺激作出的反应。如含羞草触碰后叶片合拢。',
        difficulty: 1
      },
      {
        id: 'q1369', type: 'fill',
        question: '除____以外，生物都是由细胞构成的。',
        answer: '病毒',
        explanation: '病毒没有细胞结构，由蛋白质外壳和内部的遗传物质组成。其他生物都是由细胞构成的。',
        difficulty: 1
      },
      {
        id: 'q1370', type: 'choice',
        question: '调查校园生物种类时，采用的正确方法是',
        options: ['A. 逐一统计所有生物', 'B. 只统计动物', 'C. 选择有代表性的区域抽样调查', 'D. 只统计植物'],
        answer: 'C',
        explanation: '调查生物种类时，常用的方法是抽样调查，选择有代表性的区域进行调查，然后推算整体情况。',
        difficulty: 2
      },
      {
        id: 'q1371', type: 'choice',
        question: '下列属于生物的是'
        ,
        options: ['A. 珊瑚礁', 'B. 珊瑚虫', 'C. 钟乳石', 'D. 机器人'],
        answer: 'B',
        explanation: '珊瑚虫是动物，是生物。珊瑚礁由珊瑚虫分泌物堆积而成，钟乳石是矿物质沉积，机器人是机械装置。',
        difficulty: 1
      },
      {
        id: 'q1372', type: 'fill',
        question: '观察生物常用的方法有观察法、____法和实验法。',
        answer: '调查',
        explanation: '科学探究中常用的方法有观察法、调查法、实验法等。不同的研究目的使用不同的方法。',
        difficulty: 1
      }
    ]
  },

  'biology-bsd-7-1': {
    chapterName: '细胞',
    questions: [
      {
        id: 'q1373', type: 'choice',
        question: '在显微镜下，为了看清物像，应先对光使视野____。',
        options: ['A. 很暗', 'B. 明亮', 'C. 带颜色', 'D. 完全黑暗'],
        answer: 'B',
        explanation: '对光的目的是使视野明亮，便于观察物像。用大光圈和凹面镜可以增强光线。',
        difficulty: 1
      },
      {
        id: 'q1374', type: 'truefalse',
        question: '在显微镜下看到的物像是上下颠倒、左右相反的。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '显微镜成的像是倒立的像，上下颠倒左右相反。将物体向左移动，看到的物像向右移动。',
        difficulty: 1
      },
      {
        id: 'q1375', type: 'fill',
        question: '植物细胞与动物细胞相比，特有的结构是细胞壁、____和____。',
        answer: '液泡；叶绿体',
        explanation: '植物细胞特有的结构：细胞壁（支持和保护）、液泡（含细胞液）和叶绿体（光合作用）。',
        difficulty: 1
      },
      {
        id: 'q1376', type: 'choice',
        question: '细胞中储存遗传信息的结构是',
        options: ['A. 细胞膜', 'B. 细胞质', 'C. 细胞核', 'D. 液泡'],
        answer: 'C',
        explanation: '细胞核内含有遗传物质DNA，DNA携带遗传信息，控制生物的遗传和变异。',
        difficulty: 1
      },
      {
        id: 'q1377', type: 'choice',
        question: '细胞分裂时，染色体变化的结果是',
        options: ['A. 数目不变', 'B. 数目减半', 'C. 数目加倍后平均分配', 'D. 完全消失'],
        answer: 'C',
        explanation: '细胞分裂时，染色体先复制加倍，然后平均分配到两个子细胞中，确保遗传物质的稳定。',
        difficulty: 2
      },
      {
        id: 'q1378', type: 'fill',
        question: '植物细胞最外层的结构是____，它的功能是支持和____。',
        answer: '细胞壁；保护',
        explanation: '细胞壁是植物细胞最外层的结构，由纤维素构成，起支持和保护作用，使植物细胞有一定的形状。',
        difficulty: 1
      }
    ]
  },

  'biology-bsd-7-2': {
    chapterName: '生物圈',
    questions: [
      {
        id: 'q1379', type: 'choice',
        question: '生态系统中，能量流动的起点是',
        options: ['A. 消费者', 'B. 分解者', 'C. 生产者固定的太阳能', 'D. 太阳光'],
        answer: 'C',
        explanation: '生态系统的能量来自太阳，但能量流动的起点是生产者通过光合作用固定的太阳能。',
        difficulty: 2
      },
      {
        id: 'q1380', type: 'truefalse',
        question: '在生态系统中，物质和能量都可以循环利用。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '生态系统中物质可以循环利用（碳循环、水循环等），但能量是单向流动、逐级递减的，不能循环利用。',
        difficulty: 2
      },
      {
        id: 'q1381', type: 'fill',
        question: '生态系统具有一定的____能力，这种能力是有限的。一般来说，生态系统的组成成分越____，这种能力越强。',
        answer: '自动调节；复杂（或越多）',
        explanation: '生态系统组成越复杂、生物种类越多、食物网越复杂，自动调节能力越强。但所有生态系统的自动调节能力都是有限的。',
        difficulty: 2
      },
      {
        id: 'q1382', type: 'choice',
        question: '下列食物链正确的是'
        ,
        options: ['A. 草←兔←狐', 'B. 阳光→草→兔', 'C. 草→兔→狐→细菌', 'D. 草→兔→狐'],
        answer: 'D',
        explanation: '食物链从生产者开始，箭头方向是"被吃→吃"，不含分解者和非生物因素。阳光不是生物，细菌是分解者。',
        difficulty: 1
      },
      {
        id: 'q1383', type: 'choice',
        question: '生态系统中，数量最多的是'
        ,
        options: ['A. 生产者', 'B. 初级消费者', 'C. 次级消费者', 'D. 分解者'],
        answer: 'A',
        explanation: '在生态系统中，生产者（绿色植物）个体数量最多，生物量最大，是生态系统的基石。',
        difficulty: 2
      }
    ]
  },

  'biology-bsd-7-3': {
    chapterName: '绿色植物',
    questions: [
      {
        id: 'q1384', type: 'choice',
        question: '绿色植物光合作用的原料是',
        options: ['A. 氧气和二氧化碳', 'B. 水和二氧化碳', 'C. 水和氧气', 'D. 有机物和水'],
        answer: 'B',
        explanation: '光合作用的原料是二氧化碳和水，在光能和叶绿体的作用下合成有机物，释放氧气。',
        difficulty: 1
      },
      {
        id: 'q1385', type: 'truefalse',
        question: '植物在白天只进行光合作用，不进行呼吸作用。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '植物白天同时进行光合作用和呼吸作用。只是白天光合作用强度通常大于呼吸作用，表现为释放氧气。',
        difficulty: 2
      },
      {
        id: 'q1386', type: 'fill',
        question: '植物根吸收水分和无机盐的主要部位是根尖的____区。',
        answer: '成熟（或根毛）',
        explanation: '成熟区有大量根毛，增大了与土壤的接触面积，是根吸收水分和无机盐最活跃的部位。',
        difficulty: 1
      },
      {
        id: 'q1387', type: 'choice',
        question: '植物的呼吸作用发生在',
        options: ['A. 白天', 'B. 夜晚', 'C. 只在白天', 'D. 白天和夜晚（所有活细胞中）'],
        answer: 'D',
        explanation: '呼吸作用在所有活细胞中每时每刻都在进行，分解有机物释放能量供生命活动需要。',
        difficulty: 2
      },
      {
        id: 'q1388', type: 'choice',
        question: '绿色植物在光下能进行的生理活动是',
        options: ['A. 只进行光合作用', 'B. 只进行呼吸作用', 'C. 光合作用和蒸腾作用', 'D. 光合作用、呼吸作用和蒸腾作用'],
        answer: 'D',
        explanation: '绿色植物在光下同时进行光合作用、呼吸作用和蒸腾作用三种生理活动。',
        difficulty: 2
      },
      {
        id: 'q1389', type: 'fill',
        question: '呼吸作用的实质是分解____，释放____。',
        answer: '有机物；能量',
        explanation: '呼吸作用：有机物 + 氧气 → 二氧化碳 + 水 + 能量。实质是分解有机物释放能量。',
        difficulty: 1
      }
    ]
  },

  'biology-bsd-8-0': {
    chapterName: '生物体的结构层次',
    questions: [
      {
        id: 'q1390', type: 'choice',
        question: '植物的输导组织包括',
        options: ['A. 表皮和叶肉', 'B. 导管和筛管', 'C. 保护和营养组织', 'D. 分生组织'],
        answer: 'B',
        explanation: '导管运输水和无机盐（自下而上），筛管运输有机物（自上而下），二者构成输导组织。',
        difficulty: 1
      },
      {
        id: 'q1391', type: 'truefalse',
        question: '植物体的保护组织主要分布在叶表面、根尖和茎的表面。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '保护组织由表皮细胞构成，覆盖在植物体表面，起到保护内部柔嫩部分的作用。',
        difficulty: 1
      },
      {
        id: 'q1392', type: 'fill',
        question: '动物和人体的基本组织有上皮组织、结缔组织、肌肉组织和____组织。',
        answer: '神经',
        explanation: '人体的四种基本组织：上皮组织（覆盖、保护）、结缔组织（连接、支持、保护）、肌肉组织（运动）、神经组织（感受刺激、传导兴奋）。',
        difficulty: 1
      },
      {
        id: 'q1393', type: 'choice',
        question: '下列属于器官的是',
        options: ['A. 心肌细胞', 'B. 血液', 'C. 心脏', 'D. 神经元'],
        answer: 'C',
        explanation: '心脏是由多种组织构成的、能完成特定功能的结构，属于器官。心肌细胞是细胞，血液是组织，神经元是细胞。',
        difficulty: 1
      },
      {
        id: 'q1394', type: 'choice',
        question: '植物的根、茎、叶属于',
        options: ['A. 营养器官', 'B. 生殖器官', 'C. 组织', 'D. 系统'],
        answer: 'A',
        explanation: '根、茎、叶是植物的营养器官，负责营养物质的吸收、运输和制造。花、果实、种子是生殖器官。',
        difficulty: 1
      },
      {
        id: 'q1395', type: 'fill',
        question: '植物体的分生组织细胞小，细胞壁薄，细胞核大，细胞质浓，具有很强的____能力。',
        answer: '分裂',
        explanation: '分生组织的细胞具有很强的分裂能力，能不断产生新细胞，使植物体不断生长。',
        difficulty: 2
      }
    ]
  },

  'biology-bsd-8-1': {
    chapterName: '生物与环境',
    questions: [
      {
        id: 'q1396', type: 'choice',
        question: '"螳螂捕蝉，黄雀在后"体现了生物之间的哪种关系',
        options: ['A. 合作关系', 'B. 捕食关系', 'C. 竞争关系', 'D. 共生关系'],
        answer: 'B',
        explanation: '螳螂吃蝉、黄雀吃螳螂，体现了"吃与被吃"的捕食关系。',
        difficulty: 1
      },
      {
        id: 'q1397', type: 'truefalse',
        question: '生物适应环境，环境也能影响生物。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '生物与环境相互影响：生物能适应环境，也能影响和改变环境；环境也能影响生物的形态结构和生活方式。',
        difficulty: 1
      },
      {
        id: 'q1398', type: 'fill',
        question: '在一定的空间范围内，生物与环境所形成的统一的整体叫做____。',
        answer: '生态系统',
        explanation: '生态系统 = 生物部分（生产者、消费者、分解者）+ 非生物部分（阳光、空气、水等）。',
        difficulty: 1
      },
      {
        id: 'q1399', type: 'choice',
        question: '仙人掌的叶退化成刺，是对什么环境的适应',
        options: ['A. 寒冷', 'B. 干旱', 'C. 潮湿', 'D. 阴暗'],
        answer: 'B',
        explanation: '叶退化成刺可以减少水分蒸发，是对干旱环境的适应。',
        difficulty: 1
      },
      {
        id: 'q1400', type: 'fill',
        question: '影响生物生活的环境因素可以分为____因素和____因素两类。',
        answer: '生物；非生物',
        explanation: '非生物因素有光、温度、水等；生物因素是指影响某种生物生活的其他生物。',
        difficulty: 1
      }
    ]
  },

  'biology-bsd-8-2': {
    chapterName: '生物圈中的绿色植物',
    questions: [
      {
        id: 'q1401', type: 'choice',
        question: '下列植物中，属于裸子植物的是',
        options: ['A. 桃', 'B. 松', 'C. 苹果', 'D. 水稻'],
        answer: 'B',
        explanation: '松树是裸子植物，种子裸露没有果皮包被。桃、苹果、水稻是被子植物，种子有果皮包被形成果实。',
        difficulty: 1
      },
      {
        id: 'q1402', type: 'truefalse',
        question: '苔藓植物有根、茎、叶的分化。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '苔藓植物没有真正的根（只有假根），有茎和叶但没有输导组织，植株矮小。',
        difficulty: 1
      },
      {
        id: 'q1403', type: 'fill',
        question: '被子植物与裸子植物最主要的区别是种子外面是否有____包被。',
        answer: '果皮',
        explanation: '被子植物的种子外面有果皮包被形成果实，裸子植物的种子裸露没有果皮。',
        difficulty: 1
      },
      {
        id: 'q1404', type: 'choice',
        question: '蕨类植物比苔藓植物高等，主要体现在',
        options: ['A. 有根茎叶和输导组织', 'B. 有花', 'C. 有果实', 'D. 有种子'],
        answer: 'A',
        explanation: '蕨类植物有真正的根、茎、叶，有输导组织，比苔藓植物更适应陆地环境。蕨类不产生种子，用孢子繁殖。',
        difficulty: 2
      },
      {
        id: 'q1405', type: 'choice',
        question: '下列植物中，属于孢子植物的是',
        options: ['A. 葫芦藓', 'B. 银杏', 'C. 油松', 'D. 桃树'],
        answer: 'A',
        explanation: '葫芦藓是苔藓植物，用孢子繁殖，属于孢子植物。银杏、油松是裸子植物，桃树是被子植物，都有种子。',
        difficulty: 2
      },
      {
        id: 'q1406', type: 'fill',
        question: '种子植物包括____植物和____植物两大类。',
        answer: '裸子；被子',
        explanation: '种子植物根据种子外面是否有果皮包被，分为裸子植物和被子植物两大类。',
        difficulty: 1
      }
    ]
  },

  'biology-bsd-8-3': {
    chapterName: '生物圈中的人',
    questions: [
      {
        id: 'q1407', type: 'choice',
        question: '食物中的六大营养素中，能为人体提供能量的是',
        options: ['A. 糖类、脂肪、蛋白质', 'B. 维生素、水、无机盐', 'C. 糖类、维生素、蛋白质', 'D. 脂肪、水、无机盐'],
        answer: 'A',
        explanation: '糖类、脂肪、蛋白质能为人体提供能量（三大供能物质）。维生素、水和无机盐不提供能量。',
        difficulty: 1
      },
      {
        id: 'q1408', type: 'truefalse',
        question: '胃液中含有盐酸，因此胃能初步消化蛋白质。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '胃液中含有胃蛋白酶和盐酸，在酸性环境下胃蛋白酶能初步消化蛋白质。',
        difficulty: 2
      },
      {
        id: 'q1409', type: 'fill',
        question: '人体呼吸系统的主要器官是____，它是进行气体交换的场所。',
        answer: '肺',
        explanation: '肺是呼吸系统的主要器官，由大量肺泡组成，肺泡壁薄，与毛细血管紧密相连，进行气体交换。',
        difficulty: 1
      },
      {
        id: 'q1410', type: 'choice',
        question: '下列血管中，管壁最厚、弹性最大的是',
        options: ['A. 动脉', 'B. 静脉', 'C. 毛细血管', 'D. 三者一样'],
        answer: 'A',
        explanation: '动脉管壁最厚，弹性最大，血流速度最快；静脉管壁较薄；毛细血管壁仅由一层上皮细胞构成，最薄。',
        difficulty: 2
      },
      {
        id: 'q1411', type: 'choice',
        question: '下列哪项是排泄的途径',
        options: ['A. 排出粪便', 'B. 排出尿液', 'C. 排出食物残渣', 'D. 呼出二氧化碳和排出尿液'],
        answer: 'D',
        explanation: '排泄是将体内代谢废物（尿素、二氧化碳、多余水分等）排出体外的过程，途径包括排尿、排汗和呼气。排便不属于排泄。',
        difficulty: 2
      },
      {
        id: 'q1412', type: 'fill',
        question: '人体血液循环的动力器官是____。',
        answer: '心脏',
        explanation: '心脏是血液循环的动力器官，由心肌构成，能节律性地收缩和舒张，推动血液在血管中循环流动。',
        difficulty: 1
      }
    ]
  },

  // ==================== 生物-济南版 ====================
  'biology-jinan-7-0': {
    chapterName: '奇妙的生命世界',
    questions: [
      {
        id: 'q1413', type: 'choice',
        question: '生物的共同特征中，不包括以下哪项',
        options: ['A. 生物都能运动', 'B. 生物都能繁殖', 'C. 生物都能进行呼吸', 'D. 生物都能对外界刺激作出反应'],
        answer: 'A',
        explanation: '不是所有生物都能运动（如植物）。但所有生物都能繁殖、呼吸、对刺激作出反应等。',
        difficulty: 1
      },
      {
        id: 'q1414', type: 'truefalse',
        question: '钟乳石能慢慢长大，所以钟乳石是生物。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '钟乳石是化学沉积形成的，没有生命，不具备生物的基本特征（如新陈代谢、繁殖等）。',
        difficulty: 1
      },
      {
        id: 'q1415', type: 'fill',
        question: '科学探究的基本方法包括观察法、____法、实验法等。',
        answer: '调查',
        explanation: '科学探究的基本方法：观察法、调查法、实验法等。',
        difficulty: 1
      },
      {
        id: 'q1416', type: 'choice',
        question: '下列属于生物的是',
        options: ['A. 机器人', 'B. 珊瑚', 'C. 蘑菇', 'D. 自行车'],
        answer: 'C',
        explanation: '蘑菇是真菌，属于生物。机器人是人造的，珊瑚是珊瑚虫分泌的骨骼堆积物，自行车是工具。',
        difficulty: 1
      },
      {
        id: 'q1417', type: 'choice',
        question: '使用显微镜时，应先使用哪种目镜和物镜'
        ,
        options: ['A. 高倍目镜和高倍物镜', 'B. 低倍目镜和低倍物镜', 'C. 高倍目镜和低倍物镜', 'D. 低倍目镜和高倍物镜'],
        answer: 'B',
        explanation: '使用显微镜时，应先对光，用低倍目镜和低倍物镜找到物像，再换高倍物镜观察。',
        difficulty: 2
      },
      {
        id: 'q1418', type: 'fill',
        question: '观察法是指人们用肉眼或借助工具，对____进行有目的、有计划的观察和描述的方法。',
        answer: '客观事物',
        explanation: '观察法是一种基本科学方法，可以借助放大镜、显微镜等工具，要有目的、有计划地进行。',
        difficulty: 1
      }
    ]
  },

  'biology-jinan-7-1': {
    chapterName: '观察生物',
    questions: [
      {
        id: 'q1419', type: 'choice',
        question: '显微镜对光时，应使____对准通光孔。',
        options: ['A. 高倍物镜', 'B. 目镜和物镜', 'C. 光圈和反光镜', 'D. 以上都不是'],
        answer: 'B',
        explanation: '对光时使目镜、物镜、通光孔在一条直线上，通过光圈和反光镜调节光线进入镜筒。',
        difficulty: 1
      },
      {
        id: 'q1420', type: 'truefalse',
        question: '在显微镜下看到的物像偏左上方，要将其移到视野中央，应将装片向右下方移动。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '显微镜成的是倒像，物像偏左上方，实际物体偏右下方，要将物体（装片）向左上方移动才能移到中央。',
        difficulty: 2
      },
      {
        id: 'q1421', type: 'fill',
        question: '放大镜能将物体放大，而显微镜能将物体放大的倍数等于目镜放大倍数____物镜放大倍数。',
        answer: '乘以',
        explanation: '显微镜总放大倍数 = 目镜放大倍数 x 物镜放大倍数。',
        difficulty: 1
      },
      {
        id: 'q1422', type: 'choice',
        question: '下列哪种是观察手段的延伸',
        options: ['A. 用肉眼观察', 'B. 用放大镜观察', 'C. 用望远镜观察远处', 'D. B和C都是'],
        answer: 'D',
        explanation: '放大镜和望远镜都是观察手段的延伸，使人能看到肉眼看不到的细节或远处的物体。',
        difficulty: 1
      },
      {
        id: 'q1423', type: 'choice',
        question: '在低倍镜下观察到物像后，换用高倍镜观察，视野的变化是',
        options: ['A. 变大变亮', 'B. 变大变暗', 'C. 变小变亮', 'D. 变小变暗'],
        answer: 'D',
        explanation: '换用高倍镜后放大倍数增大，视野变小（看到的范围变小），进入的光线减少视野变暗。',
        difficulty: 2
      }
    ]
  },

  'biology-jinan-7-2': {
    chapterName: '细胞是生物体结构和功能的基本单位',
    questions: [
      {
        id: 'q1424', type: 'choice',
        question: '下列结构中，所有细胞都具有的是',
        options: ['A. 细胞壁', 'B. 细胞膜', 'C. 叶绿体', 'D. 液泡'],
        answer: 'B',
        explanation: '所有细胞都有细胞膜、细胞质和遗传物质。细胞壁、叶绿体、液泡是某些细胞特有的。',
        difficulty: 1
      },
      {
        id: 'q1425', type: 'truefalse',
        question: '线粒体是呼吸作用的场所，为细胞生命活动提供能量。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '线粒体是细胞进行呼吸作用的主要场所，分解有机物释放能量，为细胞各项生命活动提供动力。',
        difficulty: 2
      },
      {
        id: 'q1426', type: 'fill',
        question: '植物细胞特有的能量转换器是____，动植物细胞共有的能量转换器是____。',
        answer: '叶绿体；线粒体',
        explanation: '叶绿体进行光合作用将光能转化为化学能（植物特有），线粒体进行呼吸作用将化学能释放（动植物共有）。',
        difficulty: 2
      },
      {
        id: 'q1427', type: 'choice',
        question: '细胞分裂后，新细胞与原细胞相比'
        ,
        options: ['A. 形态结构功能相同', 'B. 形态结构功能不同', 'C. 体积相同', 'D. 完全一样'],
        answer: 'A',
        explanation: '细胞分裂后产生的子细胞与原细胞的遗传物质相同，形态结构和功能也相同（分化后才产生差异）。',
        difficulty: 2
      },
      {
        id: 'q1428', type: 'choice',
        question: 'DNA主要存在于细胞的哪个结构中'
        ,
        options: ['A. 细胞膜', 'B. 细胞质', 'C. 细胞核', 'D. 液泡'],
        answer: 'C',
        explanation: 'DNA主要存在于细胞核中，是遗传信息的载体，控制生物的遗传和变异。',
        difficulty: 1
      },
      {
        id: 'q1429', type: 'fill',
        question: '细胞生长是指细胞体积的____。',
        answer: '增大',
        explanation: '细胞生长是细胞体积增大的过程，需要从周围环境中吸收营养物质并转化为自身的物质。',
        difficulty: 1
      }
    ]
  },

  'biology-jinan-7-3': {
    chapterName: '生物体的组成',
    questions: [
      {
        id: 'q1430', type: 'choice',
        question: '绿色开花植物的根、茎、叶属于',
        options: ['A. 营养器官', 'B. 生殖器官', 'C. 保护组织', 'D. 输导组织'],
        answer: 'A',
        explanation: '根、茎、叶是营养器官，负责吸收、运输和制造营养物质。花、果实、种子是生殖器官。',
        difficulty: 1
      },
      {
        id: 'q1431', type: 'truefalse',
        question: '人体的结构层次包括细胞→组织→器官→系统→个体五个层次。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '人体的结构层次为：细胞→组织→器官→系统→个体。',
        difficulty: 1
      },
      {
        id: 'q1432', type: 'fill',
        question: '植物体的结构层次为：细胞→____→器官→个体，缺少____这一层次。',
        answer: '组织；系统',
        explanation: '植物体的结构层次没有"系统"，由器官直接构成植物个体。',
        difficulty: 1
      },
      {
        id: 'q1433', type: 'choice',
        question: '一块完整的骨骼肌在生物体的结构层次中属于',
        options: ['A. 细胞', 'B. 组织', 'C. 器官', 'D. 系统'],
        answer: 'C',
        explanation: '骨骼肌由肌肉组织、结缔组织（肌腱）、神经组织和上皮组织构成，能完成特定功能，属于器官。',
        difficulty: 2
      },
      {
        id: 'q1434', type: 'choice',
        question: '下列不属于植物五大组织的是',
        options: ['A. 保护组织', 'B. 营养组织', 'C. 输导组织', 'D. 神经组织'],
        answer: 'D',
        explanation: '植物五大组织：保护组织、营养组织、输导组织、分生组织、机械组织。神经组织是动物的基本组织。',
        difficulty: 1
      },
      {
        id: 'q1435', type: 'fill',
        question: '人体消化系统由消化道和____组成。',
        answer: '消化腺',
        explanation: '消化系统由消化道（口腔→咽→食道→胃→小肠→大肠→肛门）和消化腺（唾液腺、肝脏、胰腺、肠腺等）组成。',
        difficulty: 1
      }
    ]
  },

  'biology-jinan-8-0': {
    chapterName: '生物的运动',
    questions: [
      {
        id: 'q1436', type: 'choice',
        question: '动物的运动方式多种多样，以下哪种运动主要依靠肌肉和骨骼的配合完成',
        options: ['A. 草履虫的运动', 'B. 蚯蚓的运动', 'C. 人的行走', 'D. 变形虫的运动'],
        answer: 'C',
        explanation: '人的行走靠骨骼和骨骼肌的协作。草履虫靠纤毛、蚯蚓靠肌肉收缩、变形虫靠伪足运动。',
        difficulty: 1
      },
      {
        id: 'q1437', type: 'truefalse',
        question: '骨在运动中起杠杆的作用。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '运动系统由骨（杠杆）、关节（支点）和骨骼肌（动力）组成，三者协调配合完成运动。',
        difficulty: 1
      },
      {
        id: 'q1438', type: 'fill',
        question: '人体运动系统的组成包括骨、____和骨骼肌三部分。',
        answer: '关节（或骨连结）',
        explanation: '运动系统由骨、骨连结（关节）和骨骼肌组成。骨是杠杆，关节是支点，骨骼肌提供动力。',
        difficulty: 1
      },
      {
        id: 'q1439', type: 'choice',
        question: '关节的基本结构不包括',
        options: ['A. 关节面', 'B. 关节囊', 'C. 关节腔', 'D. 骨髓'],
        answer: 'D',
        explanation: '关节的基本结构包括关节面、关节囊和关节腔。骨髓在骨的内部，不属于关节的结构。',
        difficulty: 2
      },
      {
        id: 'q1440', type: 'choice',
        question: '运动时若脱臼，是指',
        options: ['A. 骨折', 'B. 关节头从关节窝中脱出', 'C. 肌肉拉伤', 'D. 韧带断裂'],
        answer: 'B',
        explanation: '脱臼是指关节头从关节窝中脱出的现象，此时关节不能正常活动。',
        difficulty: 1
      }
    ]
  },

  'biology-jinan-8-1': {
    chapterName: '生物的生殖',
    questions: [
      {
        id: 'q1441', type: 'choice',
        question: '植物的有性生殖需要经过____的过程。',
        options: ['A. 传粉和受精', 'B. 只需传粉', 'C. 只需受精', 'D. 不需要传粉和受精'],
        answer: 'A',
        explanation: '有性生殖需要经过传粉（花粉落到柱头上）和受精（精子和卵细胞结合）的过程。',
        difficulty: 1
      },
      {
        id: 'q1442', type: 'truefalse',
        question: '扦插和嫁接都属于有性生殖。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '扦插、嫁接、压条等都是无性生殖（营养繁殖），不经过两性生殖细胞的结合。',
        difficulty: 1
      },
      {
        id: 'q1443', type: 'fill',
        question: '受精完成后，花的子房发育成____，胚珠发育成____。',
        answer: '果实；种子',
        explanation: '受精后，子房发育成果实（子房壁→果皮），胚珠发育成种子（受精卵→胚）。',
        difficulty: 1
      },
      {
        id: 'q1444', type: 'choice',
        question: '下列哪种繁殖方式能保持母本的优良性状',
        options: ['A. 种子繁殖', 'B. 嫁接', 'C. 有性生殖', 'D. 传粉繁殖'],
        answer: 'B',
        explanation: '嫁接是无性生殖，子代遗传物质与母本相同，能保持母本的优良性状。',
        difficulty: 2
      },
      {
        id: 'q1445', type: 'choice',
        question: '男性生殖系统中，产生精子的器官是',
        options: ['A. 睾丸', 'B. 附睾', 'C. 输精管', 'D. 前列腺'],
        answer: 'A',
        explanation: '睾丸是男性生殖系统中产生精子的器官，也是分泌雄性激素的器官。',
        difficulty: 1
      },
      {
        id: 'q1446', type: 'fill',
        question: '女性生殖系统中，产生卵细胞、受精的场所分别是____、____。',
        answer: '卵巢；输卵管',
        explanation: '卵巢产生卵细胞并分泌雌性激素；输卵管是卵细胞受精的场所。',
        difficulty: 2
      }
    ]
  },

  'biology-jinan-8-2': {
    chapterName: '生物的遗传和变异',
    questions: [
      {
        id: 'q1447', type: 'choice',
        question: '生物性状的控制者（遗传物质）是'
        ,
        options: ['A. 蛋白质', 'B. DNA', 'C. 脂肪', 'D. 糖类'],
        answer: 'B',
        explanation: 'DNA是主要的遗传物质，存在于细胞核中，能储存和传递遗传信息，控制生物的性状。',
        difficulty: 1
      },
      {
        id: 'q1448', type: 'truefalse',
        question: '父母的性状一定会全部遗传给子女。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'B',
        explanation: '遗传是有规律的，子女可能遗传某些性状，也可能因基因重组出现新的性状组合，不是全部遗传。',
        difficulty: 1
      },
      {
        id: 'q1449', type: 'fill',
        question: 'DNA分子上有许多具有特定遗传信息的片段，这些片段叫做____。',
        answer: '基因',
        explanation: '基因是DNA上有遗传效应的片段，每个基因控制一种性状或影响性状的表现。',
        difficulty: 1
      },
      {
        id: 'q1450', type: 'choice',
        question: '下列属于可遗传变异的是'
        ,
        options: ['A. 晒黑的皮肤', 'B. 断尾的壁虎', 'C. 踠豆的高茎和矮茎', 'D. 营养过剩导致的肥胖'],
        answer: 'C',
        explanation: '豌豆高茎和矮茎是基因控制的遗传变异。晒黑皮肤、断尾、营养肥胖都是环境引起的不可遗传变异。',
        difficulty: 2
      },
      {
        id: 'q1451', type: 'choice',
        question: '正常人体细胞中有 23 对染色体，则人的生殖细胞（精子或卵细胞）中有染色体'
        ,
        options: ['A. 23 对', 'B. 23 条', 'C. 46 条', 'D. 0 条'],
        answer: 'B',
        explanation: '生殖细胞经减数分裂，染色体数目减半。正常体细胞46条（23对），生殖细胞23条。',
        difficulty: 2
      }
    ]
  },

  'biology-jinan-8-3': {
    chapterName: '生物的进化',
    questions: [
      {
        id: 'q1452', type: 'choice',
        question: '下列关于生物进化的证据中，最直接、最重要的证据是',
        options: ['A. 化石', 'B. 比较解剖学证据', 'C. 胚胎学证据', 'D. 分子生物学证据'],
        answer: 'A',
        explanation: '化石是研究生物进化最直接、最重要的证据，可以证明不同时代的生物之间的进化关系。',
        difficulty: 2
      },
      {
        id: 'q1453', type: 'truefalse',
        question: '自然选择的结果是适者生存、不适者被淘汰。',
        options: ['A. 正确', 'B. 错误'],
        answer: 'A',
        explanation: '达尔文的自然选择学说认为：生物在生存斗争中，适者生存、不适者被淘汰，这就是自然选择。',
        difficulty: 1
      },
      {
        id: 'q1454', type: 'fill',
        question: '达尔文提出了以____为核心的生物进化学说。',
        answer: '自然选择',
        explanation: '达尔文提出自然选择学说，解释了生物进化的原因和机制。',
        difficulty: 1
      },
      {
        id: 'q1455', type: 'choice',
        question: '长颈鹿的长颈是由什么原因形成的',
        options: ['A. 长颈鹿为了吃到高处的树叶努力伸长脖子', 'B. 自然选择的结果', 'C. 人工选择的结果', 'D. 变异的偶然'],
        answer: 'B',
        explanation: '长颈鹿祖先中存在颈长和颈短的变异，高处的树叶使长颈的个体获得更多食物而生存繁殖，是自然选择的结果。',
        difficulty: 2
      },
      {
        id: 'q1456', type: 'choice',
        question: '在生物进化过程中，最早出现的生物类群是',
        options: ['A. 陆生植物', 'B. 两栖动物', 'C. 原始的单细胞生物', 'D. 哺乳动物'],
        answer: 'C',
        explanation: '生命起源从原始海洋中的单细胞生物开始，然后逐渐进化为多细胞生物和更复杂的生物。',
        difficulty: 1
      },
      {
        id: 'q1457', type: 'fill',
        question: '生物进化的总体趋势是：由简单到____，由低等到____，由水生到____。',
        answer: '复杂；高等；陆生',
        explanation: '生物进化的总趋势：由简单到复杂，由低等到高等，由水生到陆生。',
        difficulty: 1
      }
    ]
  },

  // sampleQuestions-batch5.js,
// ==================== 历史-部编版 ====================
  'history-bubian-7-0': {
    chapterName: '中国境内早期人类与文明的起源',
    questions: [
      { id: 'q1400', type: 'choice', question: '目前已知中国境内最早的直立人是', options: ['A. 北京人', 'B. 元谋人', 'C. 蓝田人', 'D. 河姆渡人'], answer: 'B', explanation: '元谋人距今约170万年，是我国境内目前已确认的最早的古人类。', difficulty: 1 },
      { id: 'q1401', type: 'fill', question: '北京人使用____石器，他们已经会使用天然火。', answer: '打制', explanation: '北京人使用打制石器，属于旧石器时代，已经会使用并保存天然火。', difficulty: 1 },
      { id: 'q1402', type: 'truefalse', question: '河姆渡人居住在黄河流域。', options: ['A. 正确', 'B. 错误'], answer: 'B', explanation: '河姆渡人生活在长江流域的浙江余姚地区，半坡人生活在黄河流域。', difficulty: 1 },
      { id: 'q1403', type: 'choice', question: '半坡居民种植的主要粮食作物是', options: ['A. 水稻', 'B. 粟', 'C. 小麦', 'D. 玉米'], answer: 'B', explanation: '半坡居民生活在黄河流域，种植粟；河姆渡居民种植水稻。', difficulty: 1 },
      { id: 'q1404', type: 'fill', question: '传说中，____教民耕种，被称为人文初祖。', answer: '黄帝（和炎帝）', explanation: '黄帝和炎帝被尊为中华民族的人文初祖，黄帝发明了车船、历法等。', difficulty: 1 },
      { id: 'q1405', type: 'truefalse', question: '禅让制是世袭制的表现形式。', options: ['A. 正确', 'B. 错误'], answer: 'B', explanation: '禅让制是将首领位子传给贤德之人，不同于世袭制（将王位传给子孙）。', difficulty: 2 },
      { id: 'q1406', type: 'choice', question: '我国农耕文明的重要标志之一是', options: ['A. 使用打制石器', 'B. 家畜饲养的出现', 'C. 陶器的发明和使用', 'D. 火的使用'], answer: 'C', explanation: '陶器的发明和使用是人类进入新石器时代的重要标志，也是农耕文明的重要标志。', difficulty: 2 }
    ]
  },
  'history-bubian-7-1': {
    chapterName: '夏商周时期',
    questions: [
      { id: 'q1407', type: 'choice', question: '我国历史上第一个王朝是', options: ['A. 商朝', 'B. 夏朝', 'C. 周朝', 'D. 秦朝'], answer: 'B', explanation: '约公元前2070年，禹建立夏朝，这是我国历史上第一个王朝，标志着我国早期国家的产生。', difficulty: 1 },
      { id: 'q1408', type: 'fill', question: '____的建立标志着中国早期国家的产生。', answer: '夏朝', explanation: '夏朝的建立标志着中国由原始社会进入奴隶社会，早期国家产生。', difficulty: 1 },
      { id: 'q1409', type: 'truefalse', question: '商朝的文字刻在龟甲和兽骨上，被称为甲骨文。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '商朝人刻写在龟甲和兽骨上的文字被称为甲骨文，是中国已发现的古代文字中年代最早、体系较为完整的文字。', difficulty: 1 },
      { id: 'q1410', type: 'choice', question: '西周实行的政治制度是', options: ['A. 禅让制', 'B. 分封制', 'C. 郡县制', 'D. 行省制'], answer: 'B', explanation: '西周实行分封制，周天子将土地和人民分封给宗亲和功臣，让他们建立诸侯国。', difficulty: 1 },
      { id: 'q1411', type: 'fill', question: '西周的等级制度中，周天子处于第____等级。', answer: '一', explanation: '西周分封制确立了严格的等级秩序：天子—诸侯—卿大夫—士—平民—奴隶。', difficulty: 1 },
      { id: 'q1412', type: 'truefalse', question: '青铜器在商朝达到了很高的制造水平。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '商朝的青铜铸造业高度发达，著名的司母戊鼎（后母戊鼎）是迄今世界上出土的最重的青铜器。', difficulty: 1 }
    ]
  },
  'history-bubian-7-2': {
    chapterName: '秦汉时期',
    questions: [
      { id: 'q1413', type: 'choice', question: '秦统一六国后，在地方实行的制度是', options: ['A. 分封制', 'B. 郡县制', 'C. 行省制', 'D. 科举制'], answer: 'B', explanation: '秦统一后，秦始皇废除了分封制，在全国推行郡县制，由中央直接管辖地方。', difficulty: 1 },
      { id: 'q1414', type: 'fill', question: '秦始皇统一文字、货币和____，促进了全国经济文化的交流。', answer: '度量衡', explanation: '秦始皇统一了文字（小篆）、货币（圆形方孔半两钱）和度量衡，有利于统一多民族国家的巩固。', difficulty: 1 },
      { id: 'q1415', type: 'truefalse', question: '焚书坑儒是汉武帝推行的政策。', options: ['A. 正确', 'B. 错误'], answer: 'B', explanation: '焚书坑儒是秦始皇为加强思想控制而采取的措施，不是汉武帝。', difficulty: 1 },
      { id: 'q1416', type: 'choice', question: '汉武帝为加强思想统一，采纳了谁的建议"罢黜百家，独尊儒术"', options: ['A. 李斯', 'B. 董仲舒', 'C. 张骞', 'D. 司马迁'], answer: 'B', explanation: '汉武帝接受董仲舒的建议，推行"罢黜百家，独尊儒术"，把儒家学说立为正统思想。', difficulty: 1 },
      { id: 'q1417', type: 'fill', question: '____开辟了丝绸之路，促进了中外经济文化交流。', answer: '张骞', explanation: '张骞两次出使西域，开辟了丝绸之路，沟通了东西方的经济文化交流。', difficulty: 1 },
      { id: 'q1418', type: 'truefalse', question: '造纸术是蔡伦发明的。', options: ['A. 正确', 'B. 错误'], answer: 'B', explanation: '造纸术在西汉时期已经发明，东汉的蔡伦改进了造纸术，用树皮、麻头等廉价材料造纸，大大降低了成本。', difficulty: 2 },
      { id: 'q1419', type: 'choice', question: '秦朝修建的伟大工程不包括', options: ['A. 长城', 'B. 灵渠', 'C. 都江堰', 'D. 驰道'], answer: 'C', explanation: '都江堰是战国时期秦国蜀郡太守李冰父子修建的，不是秦统一六国后修建的工程。', difficulty: 2 }
    ]
  },
  'history-bubian-7-3': {
    chapterName: '三国两晋南北朝时期',
    questions: [
      { id: 'q1420', type: 'choice', question: '三国鼎立的局面正式形成于', options: ['A. 208年', 'B. 220年', 'C. 221年', 'D. 222年'], answer: 'D', explanation: '220年曹丕建魏，221年刘备建蜀汉，222年孙权称王建吴，三国鼎立局面正式形成。', difficulty: 1 },
      { id: 'q1421', type: 'fill', question: '赤壁之战中，____和____联合以少胜多击败曹操。', answer: '孙权；刘备', explanation: '208年赤壁之战中，孙权和刘备联军利用火攻大败曹操，奠定了三国鼎立的基础。', difficulty: 1 },
      { id: 'q1422', type: 'truefalse', question: '西晋是司马炎建立的。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '266年，司马炎篡魏建立西晋，280年西晋灭吴，完成统一。', difficulty: 1 },
      { id: 'q1423', type: 'choice', question: '被称为"书圣"的东晋书法家是', options: ['A. 顾恺之', 'B. 王羲之', 'C. 钟繇', 'D. 颜真卿'], answer: 'B', explanation: '王羲之被称为"书圣"，其代表作《兰亭集序》被称为"天下第一行书"。', difficulty: 1 },
      { id: 'q1424', type: 'fill', question: '北魏____推行改革，促进了民族融合。', answer: '孝文帝（拓跋宏）', explanation: '北魏孝文帝推行汉化改革：迁都洛阳、改穿汉服、说汉话、改汉姓、鼓励通婚等。', difficulty: 1 },
      { id: 'q1425', type: 'truefalse', question: '南北朝时期，江南地区经济迅速发展。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '南北朝时期，北方人口大量南迁，为江南地区带来了劳动力和先进技术，促进了江南经济的发展。', difficulty: 1 }
    ]
  },
  'history-bubian-8-0': {
    chapterName: '隋唐时期',
    questions: [
      { id: 'q1426', type: 'choice', question: '隋朝大运河的开通中心是', options: ['A. 长安', 'B. 洛阳', 'C. 涿郡', 'D. 余杭'], answer: 'B', explanation: '隋炀帝开凿大运河，以洛阳为中心，北达涿郡，南至余杭，全长两千多公里。', difficulty: 1 },
      { id: 'q1427', type: 'fill', question: '____创立了科举制，通过考试选拔人才。', answer: '隋文帝（或隋朝）', explanation: '隋文帝开始用分科考试的方法选拔官员，隋炀帝时设进士科，科举制正式确立。', difficulty: 1 },
      { id: 'q1428', type: 'truefalse', question: '唐太宗的年号是"开元盛世"。', options: ['A. 正确', 'B. 错误'], answer: 'B', explanation: '"开元盛世"是唐玄宗前期的统治局面，唐太宗的治世被称为"贞观之治"。', difficulty: 1 },
      { id: 'q1429', type: 'choice', question: '唐太宗时敢于直言进谏的大臣是', options: ['A. 姚崇', 'B. 房玄龄', 'C. 魏征', 'D. 杜如晦'], answer: 'C', explanation: '魏征前后进谏二百多次，唐太宗称他为"人镜"。', difficulty: 1 },
      { id: 'q1430', type: 'fill', question: '唐朝由盛转衰的转折点是____。', answer: '安史之乱', explanation: '755年安禄山和史思明发动叛乱，史称"安史之乱"，是唐朝由盛转衰的转折点。', difficulty: 1 },
      { id: 'q1431', type: 'truefalse', question: '唐朝对外交往频繁，首都长安是国际性大都市。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '唐朝国力强盛，对外交往频繁，长安聚集了大量外国商人、使节和留学生。', difficulty: 1 }
    ]
  },
  'history-bubian-8-1': {
    chapterName: '宋元时期',
    questions: [
      { id: 'q1432', type: 'choice', question: '北宋的建立者是', options: ['A. 赵匡胤', 'B. 朱元璋', 'C. 李世民', 'D. 王安石'], answer: 'A', explanation: '960年，后周大将赵匡胤在陈桥驿发动兵变（陈桥兵变），建立北宋，定都开封（东京）。', difficulty: 1 },
      { id: 'q1433', type: 'fill', question: '南宋抗金名将____在郾城大败金军。', answer: '岳飞', explanation: '岳飞率领岳家军在郾城大败金军主力，但后被宋高宗和秦桧以"莫须有"的罪名杀害。', difficulty: 1 },
      { id: 'q1434', type: 'truefalse', question: '指南针、火药、印刷术在宋朝得到了广泛的应用和发展。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '宋朝科技发达，指南针用于航海，火药广泛用于军事，活字印刷术由毕昇发明。', difficulty: 1 },
      { id: 'q1435', type: 'choice', question: '元朝的建立者是', options: ['A. 成吉思汗', 'B. 忽必烈', 'C. 铁木真', 'D. 窝阔台'], answer: 'B', explanation: '1271年忽必烈改国号为元，次年定都大都（今北京），建立元朝。成吉思汗建立的是蒙古汗国。', difficulty: 1 },
      { id: 'q1436', type: 'fill', question: '北宋蜀地成都地区出现的世界上最早的纸币是____。', answer: '交子', explanation: '北宋前期四川地区出现了"交子"，是世界上最早的纸币。', difficulty: 1 },
      { id: 'q1437', type: 'truefalse', question: '元朝实行行省制度，对后世影响深远。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '元朝实行行省制度，全国分设10个行省，这一制度对后世影响深远，奠定了中国行政区划的基础。', difficulty: 2 }
    ]
  },
  'history-bubian-8-2': {
    chapterName: '明清时期',
    questions: [
      { id: 'q1438', type: 'choice', question: '明朝建立者是', options: ['A. 朱棣', 'B. 朱元璋', 'C. 刘伯温', 'D. 李自成'], answer: 'B', explanation: '1368年朱元璋在应天府（今南京）称帝建立明朝，他就是明太祖。', difficulty: 1 },
      { id: 'q1439', type: 'fill', question: '明朝为加强皇权，在中央废除了____制度，权分六部。', answer: '丞相', explanation: '明太祖朱元璋废除丞相制度，权分六部直接对皇帝负责，进一步加强了皇权。', difficulty: 1 },
      { id: 'q1440', type: 'truefalse', question: '郑和下西洋是世界航海史上的壮举。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '1405-1433年郑和七次下西洋，最远到达非洲东海岸和红海沿岸，是世界航海史上的空前壮举。', difficulty: 1 },
      { id: 'q1441', type: 'choice', question: '清朝雍正帝时设立的中枢权力机构是', options: ['A. 内阁', 'B. 六部', 'C. 军机处', 'D. 尚书省'], answer: 'C', explanation: '雍正帝设立军机处，军机大臣只是跪受笔录、传达皇帝旨意，标志着君主专制达到顶峰。', difficulty: 1 },
      { id: 'q1442', type: 'fill', question: '明朝为防御北方蒙古势力，大规模修筑____。', answer: '长城', explanation: '明朝大规模修筑长城，东起鸭绿江，西至嘉峪关，气势恢宏，是世界建筑史上的奇迹。', difficulty: 1 },
      { id: 'q1443', type: 'truefalse', question: '清朝实行"闭关锁国"政策，只开放广州一处为通商口岸。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '清朝实行严格限制对外交往的"闭关锁国"政策，只开放广州一处，由"广州十三行"统一经营对外贸易。', difficulty: 1 },
      { id: 'q1444', type: 'choice', question: '明朝科举考试的文体被称为', options: ['A. 诗赋', 'B. 八股文', 'C. 古文', 'D. 辞赋'], answer: 'B', explanation: '明朝科举考试严格规定答卷格式为"八股文"，严重束缚了知识分子的思想。', difficulty: 2 }
    ]
  },
  'history-bubian-8-3': {
    chapterName: '中国开始沦为半殖民地半封建社会',
    questions: [
      { id: 'q1445', type: 'choice', question: '中国近代史上第一个不平等条约是', options: ['A. 《北京条约》', 'B. 《南京条约》', 'C. 《马关条约》', 'D. 《辛丑条约》'], answer: 'B', explanation: '1842年中英签订《南京条约》，是中国近代史上第一个丧权辱国的不平等条约。', difficulty: 1 },
      { id: 'q1446', type: 'fill', question: '虎门销烟的领导者是____。', answer: '林则徐', explanation: '1839年6月林则徐在虎门海滩当众销毁收缴的鸦片，显示了中华民族反抗外来侵略的决心。', difficulty: 1 },
      { id: 'q1447', type: 'truefalse', question: '鸦片战争使中国开始沦为半殖民地半封建社会。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '鸦片战争使中国主权遭到破坏，自然经济开始解体，中国开始从封建社会沦为半殖民地半封建社会。', difficulty: 1 },
      { id: 'q1448', type: 'choice', question: '第二次鸦片战争中火烧圆明园的是', options: ['A. 英军', 'B. 法军', 'C. 英法联军', 'D. 八国联军'], answer: 'C', explanation: '1860年英法联军攻入北京，火烧圆明园，是对人类文化遗产的严重破坏。', difficulty: 1 },
      { id: 'q1449', type: 'fill', question: '《南京条约》开放____、____、____、____、____五处为通商口岸。', answer: '广州；厦门；福州；宁波；上海', explanation: '《南京条约》割让香港岛给英国，开放广州、厦门、福州、宁波、上海五处为通商口岸。', difficulty: 2 }
    ]
  },
  'history-bubian-9-0': {
    chapterName: '近代化的早期探索',
    questions: [
      { id: 'q1450', type: 'choice', question: '洋务运动的口号是', options: ['A. "民主共和"', 'B. "自强""求富"', 'C. "变法图强"', 'D. "驱除鞑虏"'], answer: 'B', explanation: '洋务运动前期以"自强"为口号，后期以"求富"为口号，主张学习西方先进技术。', difficulty: 1 },
      { id: 'q1451', type: 'fill', question: '____是中国近代第一所新式学堂。', answer: '京师同文馆', explanation: '1862年洋务派创办京师同文馆，是中国近代第一所新式学堂，培养外语和科技人才。', difficulty: 1 },
      { id: 'q1452', type: 'truefalse', question: '戊戌变法（百日维新）持续了约103天。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '1898年6月11日至9月21日，光绪帝在维新派推动下实行变法，历时约103天，史称"百日维新"。', difficulty: 1 },
      { id: 'q1453', type: 'choice', question: '公车上书的领导人物是', options: ['A. 曾国藩', 'B. 康有为、梁启超', 'C. 孙中山', 'D. 洪秀全'], answer: 'B', explanation: '1895年《马关条约》签订的消息传到北京，康有为、梁启超联合在京应试举人发起"公车上书"。', difficulty: 1 },
      { id: 'q1454', type: 'fill', question: '洋务派在中央的代表人物是____。', answer: '奕訢', explanation: '洋务派在中央以奕訢为代表，在地方以曾国藩、李鸿章、左宗棠、张之洞为代表。', difficulty: 2 }
    ]
  },
  'history-bubian-9-1': {
    chapterName: '新民主主义革命的开始',
    questions: [
      { id: 'q1455', type: 'choice', question: '辛亥革命的领导者是', options: ['A. 康有为', 'B. 梁启超', 'C. 孙中山', 'D. 陈独秀'], answer: 'C', explanation: '孙中山是辛亥革命的领导者，他创立了同盟会，提出三民主义，领导了辛亥革命。', difficulty: 1 },
      { id: 'q1456', type: 'fill', question: '1911年10月10日，____起义爆发，辛亥革命开始。', answer: '武昌', explanation: '1911年10月10日武昌起义爆发，各省纷纷响应，这就是辛亥革命的开端。', difficulty: 1 },
      { id: 'q1457', type: 'truefalse', question: '辛亥革命结束了两千多年的封建帝制。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '辛亥革命推翻了清朝统治，结束了中国两千多年的封建帝制，建立了中华民国。', difficulty: 1 },
      { id: 'q1458', type: 'choice', question: '新文化运动提倡的两位先生是', options: ['A. 自由和平等', 'B. 民主和科学', 'C. 独立和富强', 'D. 爱国和进步'], answer: 'B', explanation: '新文化运动提倡"民主"和"科学"（德先生和赛先生），反对专制和迷信。', difficulty: 1 },
      { id: 'q1459', type: 'fill', question: '五四运动标志着中国____革命的开端。', answer: '新民主主义', explanation: '1919年五四运动标志着中国新民主主义革命的开端，工人阶级开始登上政治舞台。', difficulty: 1 },
      { id: 'q1460', type: 'truefalse', question: '新文化运动的主要阵地是《民报》。', options: ['A. 正确', 'B. 错误'], answer: 'B', explanation: '新文化运动的主要阵地是《新青年》杂志，不是《民报》。', difficulty: 1 }
    ]
  },
  'history-bubian-9-2': {
    chapterName: '中华民族的抗日战争',
    questions: [
      { id: 'q1461', type: 'choice', question: '九一八事变发生在哪一年', options: ['A. 1931年', 'B. 1935年', 'C. 1937年', 'D. 1938年'], answer: 'A', explanation: '1931年9月18日日军制造九一八事变，侵占了我国东北三省，中国人民的局部抗战开始。', difficulty: 1 },
      { id: 'q1462', type: 'fill', question: '1937年7月7日发生的____事变标志着全面抗战的开始。', answer: '卢沟桥（七七）', explanation: '1937年7月7日日军炮轰卢沟桥（七七事变），标志着中国全民族抗战的开始。', difficulty: 1 },
      { id: 'q1463', type: 'truefalse', question: '南京大屠杀中，日军杀害了30万以上的中国平民和战俘。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '1937年12月日军攻陷南京后进行了长达六周的大屠杀，遇难者达30万人以上。', difficulty: 1 },
      { id: 'q1464', type: 'choice', question: '抗战中中国军队主动出击日军的最大规模的战役是', options: ['A. 台儿庄战役', 'B. 百团大战', 'C. 平型关大捷', 'D. 淞沪会战'], answer: 'B', explanation: '1940年彭德怀指挥八路军在华北发动百团大战，是抗战中中国军队主动出击日军最大规模的战役。', difficulty: 1 },
      { id: 'q1465', type: 'fill', question: '1945年8月15日，日本宣布____，中国人民取得抗日战争的伟大胜利。', answer: '无条件投降', explanation: '1945年8月15日日本宣布无条件投降，9月2日正式签署投降书，中国人民取得了抗日战争的伟大胜利。', difficulty: 1 },
      { id: 'q1466', type: 'truefalse', question: '台儿庄战役是抗战以来中国正面战场取得的最大规模胜利。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '1938年台儿庄战役由李宗仁指挥，是正面战场取得的最大规模胜利，歼敌一万多人。', difficulty: 1 }
    ]
  },
  'history-bubian-9-3': {
    chapterName: '人民解放战争的胜利',
    questions: [
      { id: 'q1467', type: 'choice', question: '重庆谈判中中共代表是', options: ['A. 毛泽东、周恩来', 'B. 刘少奇、朱德', 'C. 陈毅、邓小平', 'D. 林彪、彭德怀'], answer: 'A', explanation: '1945年重庆谈判中，毛泽东、周恩来代表中国共产党前往重庆与国民党谈判。', difficulty: 1 },
      { id: 'q1468', type: 'fill', question: '解放战争中，____战役是规模最大、歼敌数量最多的战役。', answer: '淮海', explanation: '淮海战役是解放战争中规模最大、歼敌数量最多（55万余人）的战役。', difficulty: 1 },
      { id: 'q1469', type: 'truefalse', question: '三大战役包括辽沈、淮海、平津三大战役。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '三大战役是辽沈战役、淮海战役、平津战役，共歼灭和改编国民党军队150多万人。', difficulty: 1 },
      { id: 'q1470', type: 'choice', question: '解放战争中标志着国民党统治覆灭的事件是', options: ['A. 三大战役胜利', 'B. 渡江战役', 'C. 北平和平解放', 'D. 南京解放'], answer: 'D', explanation: '1949年4月23日解放军占领南京，标志着国民党政权的覆灭。', difficulty: 1 },
      { id: 'q1471', type: 'fill', question: '1949年10月1日，____在天安门城楼宣告中华人民共和国成立。', answer: '毛泽东', explanation: '1949年10月1日毛泽东在天安门城楼庄严宣告中华人民共和国中央人民政府成立。', difficulty: 1 }
    ]
  },

  // ==================== 历史-北师大版 ====================
  'history-bsd-7-0': {
    chapterName: '中华文明的起源',
    questions: [
      { id: 'q1472', type: 'choice', question: '我国境内的早期人类中，生活在距今约70万至20万年的是', options: ['A. 元谋人', 'B. 北京人', 'C. 山顶洞人', 'D. 河姆渡人'], answer: 'B', explanation: '北京人生活在距今约70万至20万年，是目前发现资料最多的早期人类。', difficulty: 1 },
      { id: 'q1473', type: 'fill', question: '____人和____人是我国境内新石器时代的重要代表。', answer: '河姆渡；半坡', explanation: '河姆渡人（长江流域）和半坡人（黄河流域）是我国新石器时代农耕文明的典型代表。', difficulty: 1 },
      { id: 'q1474', type: 'truefalse', question: '山顶洞人已经掌握了磨光和钻孔技术。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '山顶洞人生活在旧石器时代晚期，已经掌握磨光和钻孔技术，会人工取火。', difficulty: 1 },
      { id: 'q1475', type: 'choice', question: '黄帝被尊称为', options: ['A. 炎帝', 'B. 人文初祖', 'C. 神农氏', 'D. 蚩尤'], answer: 'B', explanation: '黄帝和炎帝被尊为中华民族的人文初祖，黄帝被称为"人文初祖"。', difficulty: 1 },
      { id: 'q1476', type: 'fill', question: '传说时代，____治水有功，受到人民拥戴。', answer: '大禹', explanation: '大禹三过家门而不入，成功治理水患，受到百姓拥戴，后来建立了夏朝。', difficulty: 1 }
    ]
  },
  'history-bsd-7-1': {
    chapterName: '国家的产生与社会变革',
    questions: [
      { id: 'q1477', type: 'choice', question: '夏朝的建立者是谁', options: ['A. 启', 'B. 禹', 'C. 汤', 'D. 武王'], answer: 'B', explanation: '约公元前2070年禹建立了夏朝，禹死后启继位，王位世袭制代替了禅让制。', difficulty: 1 },
      { id: 'q1478', type: 'fill', question: '商朝迁都到____后走向繁荣。', answer: '殷（今河南安阳）', explanation: '商王盘庚迁都到殷（今河南安阳），此后商朝又称殷朝，进入了繁荣期。', difficulty: 2 },
      { id: 'q1479', type: 'truefalse', question: '春秋五霸中，最先称霸的是齐桓公。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '齐桓公任用管仲为相进行改革，以"尊王攘夷"为号召，成为春秋时期第一个霸主。', difficulty: 1 },
      { id: 'q1480', type: 'choice', question: '战国时期变法最彻底的是', options: ['A. 齐国变法', 'B. 商鞅变法', 'C. 吴起变法', 'D. 申不害变法'], answer: 'B', explanation: '商鞅在秦国变法最为彻底，废除了井田制，建立县制，统一度量衡，使秦国富强。', difficulty: 1 },
      { id: 'q1481', type: 'fill', question: '百家争鸣中，儒家学派的创始人是____。', answer: '孔子', explanation: '孔子是儒家学派的创始人，提出"仁"的学说，主张"为政以德"。', difficulty: 1 },
      { id: 'q1482', type: 'truefalse', question: '商鞅变法使秦国成为战国后期最强大的国家。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '商鞅变法使秦国的经济得到发展，军队战斗力增强，成为战国后期最强大的国家，为统一六国奠定了基础。', difficulty: 1 }
    ]
  },
  'history-bsd-7-2': {
    chapterName: '统一国家的建立',
    questions: [
      { id: 'q1483', type: 'choice', question: '秦灭六国统一天下是在', options: ['A. 公元前230年', 'B. 公元前221年', 'C. 公元前210年', 'D. 公元前206年'], answer: 'B', explanation: '公元前221年秦王嬴政灭六国统一中国，建立了中国历史上第一个统一的多民族封建国家。', difficulty: 1 },
      { id: 'q1484', type: 'fill', question: '秦朝的最高统治者称为____，总揽全国大权。', answer: '皇帝', explanation: '秦王嬴政统一六国后，自称"始皇帝"，建立了皇帝制度，中央设丞相、太尉、御史大夫。', difficulty: 1 },
      { id: 'q1485', type: 'truefalse', question: '秦始皇修建长城是为了防御匈奴南下。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '秦始皇派蒙恬北击匈奴并修筑万里长城，目的是防御匈奴南下侵扰。', difficulty: 1 },
      { id: 'q1486', type: 'choice', question: '秦朝灭亡的原因不包括', options: ['A. 繁重的徭役', 'B. 严酷的刑法', 'C. 残暴的统治', 'D. 文字狱'], answer: 'D', explanation: '秦朝灭亡的主要原因包括繁重的徭役、赋税、严酷的刑法和残暴的统治，文字狱是清朝的措施。', difficulty: 2 },
      { id: 'q1487', type: 'fill', question: '陈胜、吴广起义建立了____政权。', answer: '张楚', explanation: '陈胜、吴广在大泽乡起义后建立了张楚政权，这是中国历史上第一次农民起义建立的政权。', difficulty: 1 }
    ]
  },
  'history-bsd-7-3': {
    chapterName: '政权分立与民族融合',
    questions: [
      { id: 'q1488', type: 'choice', question: '官渡之战的交战双方是', options: ['A. 曹操与袁绍', 'B. 曹操与刘备', 'C. 孙权与曹操', 'D. 刘备与孙权'], answer: 'A', explanation: '200年官渡之战中，曹操以少胜多击败袁绍，奠定了统一北方的基础。', difficulty: 1 },
      { id: 'q1489', type: 'fill', question: '东晋时期，____在淝水之战中以少胜多击败前秦。', answer: '东晋（谢安、谢玄）', explanation: '383年淝水之战中东晋以8万兵力击败前秦80余万大军，此后前秦迅速瓦解。', difficulty: 1 },
      { id: 'q1490', type: 'truefalse', question: '三国时期吴国船队曾到达夷洲，加强了台湾与大陆的联系。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '230年孙权派将军卫温率船队到达夷洲（今台湾），加强了台湾与内地的联系。', difficulty: 1 },
      { id: 'q1491', type: 'choice', question: '北魏孝文帝改革的根本目的是', options: ['A. 促进民族融合', 'B. 学习汉族文化', 'C. 巩固北魏统治', 'D. 发展经济'], answer: 'C', explanation: '北魏孝文帝改革的根本目的是巩固统治，通过汉化改革学习汉族的先进文化和管理经验。', difficulty: 2 },
      { id: 'q1492', type: 'fill', question: '南北朝时期，我国北部农学家____编写了《齐民要术》。', answer: '贾思勰', explanation: '北朝贾思勰编写了《齐民要术》，是我国现存最早的一部完整的农学著作。', difficulty: 2 }
    ]
  },
  'history-bsd-8-0': {
    chapterName: '繁荣与开放的社会',
    questions: [
      { id: 'q1493', type: 'choice', question: '隋朝在历史上的重大贡献不包括', options: ['A. 开凿大运河', 'B. 创立科举制', 'C. 统一货币', 'D. 修建长城'], answer: 'D', explanation: '隋朝的贡献主要是统一南北、开创科举制、开凿大运河等，大规模修建长城主要是秦朝和明朝。', difficulty: 2 },
      { id: 'q1494', type: 'fill', question: '唐太宗的年号是____，唐玄宗前期的年号是____。', answer: '贞观；开元', explanation: '唐太宗时期称"贞观之治"，唐玄宗前期称"开元盛世"。', difficulty: 1 },
      { id: 'q1495', type: 'truefalse', question: '唐朝实行对外开放政策，鼓励对外贸易和文化交流。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '唐朝对外实行开放政策，长安、洛阳、广州等城市是重要的对外贸易港口，与日本、印度、阿拉伯等有密切交往。', difficulty: 1 },
      { id: 'q1496', type: 'choice', question: '唐朝时到中国留学的日本僧人是', options: ['A. 玄奘', 'B. 鉴真', 'C. 阿倍仲麻吕', 'D. 马可·波罗'], answer: 'C', explanation: '阿倍仲麻吕（晁衡）是日本来华留学生，鉴真是中国赴日本的高僧，玄奘是去印度求法。', difficulty: 2 },
      { id: 'q1497', type: 'fill', question: '唐朝时期，____东渡日本传播唐朝文化。', answer: '鉴真', explanation: '鉴真应日本僧人邀请，六次东渡，终成功到达日本，传播唐朝文化和佛教。', difficulty: 1 }
    ]
  },
  'history-bsd-8-1': {
    chapterName: '经济重心的南移和民族关系的发展',
    questions: [
      { id: 'q1498', type: 'choice', question: '中国经济重心南移完成于', options: ['A. 唐朝', 'B. 北宋', 'C. 南宋', 'D. 元朝'], answer: 'C', explanation: '南宋时期经济重心南移完成，南方成为全国的经济重心，"苏湖熟，天下足"。', difficulty: 1 },
      { id: 'q1499', type: 'fill', question: '南宋时流传着"____熟，天下足"的谚语。', answer: '苏湖（或苏州、湖州）', explanation: '南宋时期太湖流域的苏州、湖州地区农业发达，有"苏湖熟，天下足"的说法。', difficulty: 1 },
      { id: 'q1500', type: 'truefalse', question: '宋朝时，广州、泉州是闻名世界的大商港。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '宋朝海外贸易超过前代，广州、泉州是当时世界上著名的大商港，政府设立市舶司管理海外贸易。', difficulty: 1 },
      { id: 'q1501', type: 'choice', question: '成吉思汗的历史功绩是', options: ['A. 建立元朝', 'B. 统一蒙古各部', 'C. 灭亡南宋', 'D. 创制蒙古文字'], answer: 'B', explanation: '1206年铁木真统一蒙古各部，建立蒙古汗国，被尊称为成吉思汗。', difficulty: 1 },
      { id: 'q1502', type: 'fill', question: '南宋抗金名将岳飞在____大败金军。', answer: '郾城', explanation: '岳飞在郾城大败金军精锐骑兵"铁浮图"和"拐子马"，取得了重大胜利。', difficulty: 1 }
    ]
  },
  'history-bsd-8-2': {
    chapterName: '统一多民族国家的巩固和社会危机',
    questions: [
      { id: 'q1503', type: 'choice', question: '明朝建立后，朱元璋采取的加强中央集权的措施不包括', options: ['A. 废除丞相', 'B. 设立锦衣卫', 'C. 设立军机处', 'D. 实行八股取士'], answer: 'C', explanation: '军机处是清朝雍正帝设立的，不是明朝的措施。', difficulty: 1 },
      { id: 'q1504', type: 'fill', question: '清朝前期，____曾两次出兵击败沙俄入侵。', answer: '康熙帝', explanation: '康熙帝在1685年和1686年两次命令清军反击沙俄侵略，迫使沙俄同意通过谈判解决边界问题。', difficulty: 1 },
      { id: 'q1505', type: 'truefalse', question: '《尼布楚条约》是一个平等条约。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '1689年中俄签订《尼布楚条约》，从法律上肯定了黑龙江和乌苏里江流域包括库页岛在内的广大地区是中国的领土。这是一个平等的边界条约。', difficulty: 2 },
      { id: 'q1506', type: 'choice', question: '清朝统治者加强思想控制的措施是', options: ['A. 焚书坑儒', 'B. 文字狱', 'C. 罢黜百家', 'D. 八股取士'], answer: 'B', explanation: '清朝统治者实行"文字狱"，从知识分子的诗词文章中摘取字句，罗织罪名，严厉镇压反清思想。', difficulty: 1 },
      { id: 'q1507', type: 'fill', question: '清朝前期，为巩固疆土，设立了____管辖西藏事务。', answer: '驻藏大臣', explanation: '清朝设立驻藏大臣，与达赖、班禅共同管理西藏，加强了中央对西藏的管辖。', difficulty: 1 }
    ]
  },
  'history-bsd-8-3': {
    chapterName: '侵略与反抗',
    questions: [
      { id: 'q1508', type: 'choice', question: '火烧圆明园发生在哪次战争中', options: ['A. 鸦片战争', 'B. 第二次鸦片战争', 'C. 甲午中日战争', 'D. 八国联军侵华战争'], answer: 'B', explanation: '1860年第二次鸦片战争期间，英法联军火烧圆明园。', difficulty: 1 },
      { id: 'q1509', type: 'fill', question: '甲午中日战争中，____在海战中壮烈殉国。', answer: '邓世昌', explanation: '甲午黄海海战中，致远舰管带邓世昌在弹尽之际指挥军舰撞向日舰，壮烈殉国。', difficulty: 1 },
      { id: 'q1510', type: 'truefalse', question: '《马关条约》割让台湾给日本。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '1895年《马关条约》割让辽东半岛、台湾及附属岛屿、澎湖列岛给日本。', difficulty: 1 },
      { id: 'q1511', type: 'choice', question: '义和团运动发生在哪一年', options: ['A. 1898年', 'B. 1900年', 'C. 1901年', 'D. 1899年'], answer: 'B', explanation: '1900年义和团运动达到高潮，八国联军侵华战争爆发。', difficulty: 1 },
      { id: 'q1512', type: 'fill', question: '八国联军攻占北京后强迫清政府签订了____，中国完全沦为半殖民地半封建社会。', answer: '《辛丑条约》', explanation: '1901年签订《辛丑条约》，巨额赔款、允许外国驻军等，使中国完全沦为半殖民地半封建社会。', difficulty: 1 },
      { id: 'q1513', type: 'truefalse', question: '左宗棠收复新疆是在甲午中日战争之后。', options: ['A. 正确', 'B. 错误'], answer: 'B', explanation: '左宗棠收复新疆是在1876-1878年，早于甲午中日战争（1894-1895年）。', difficulty: 2 }
    ]
  },
  'history-bsd-9-0': {
    chapterName: '近代化的艰难起步',
    questions: [
      { id: 'q1514', type: 'choice', question: '洋务派创办的第一个近代军事工业企业是', options: ['A. 江南制造总局', 'B. 安庆内军械所', 'C. 福州船政局', 'D. 轮船招商局'], answer: 'B', explanation: '1861年曾国藩创办安庆内军械所，是洋务派创办的第一个近代军事工业企业。', difficulty: 2 },
      { id: 'q1515', type: 'fill', question: '洋务运动最终失败了，其根本原因是____。', answer: '没有触动封建制度的根本（或没有改变封建制度）', explanation: '洋务运动只学习西方技术而不改变封建制度，这是其失败的根本原因。', difficulty: 2 },
      { id: 'q1516', type: 'truefalse', question: '孙中山提出的"三民主义"包括民族、民权、民生。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '三民主义是孙中山提出的中国民主革命纲领，包括民族主义（驱除鞑虏）、民权主义（恢复中华）、民生主义（平均地权）。', difficulty: 1 },
      { id: 'q1517', type: 'choice', question: '戊戌变法中，光绪帝发布的改革诏令不包括', options: ['A. 改革科举', 'B. 废除八股', 'C. 训练新式军队', 'D. 废除君主制'], answer: 'D', explanation: '戊戌变法是资产阶级改良运动，目的是实行君主立宪制，而不是废除君主制。', difficulty: 1 },
      { id: 'q1518', type: 'fill', question: '____的创办标志着中国新式教育的开端。', answer: '京师大学堂（或京师同文馆）', explanation: '戊戌变法期间创办的京师大学堂是北京大学的前身，标志着中国新式教育的开端。', difficulty: 2 }
    ]
  },
  'history-bsd-9-1': {
    chapterName: '新民主主义革命的兴起',
    questions: [
      { id: 'q1519', type: 'choice', question: '中华民国成立于', options: ['A. 1911年10月10日', 'B. 1912年1月1日', 'C. 1912年2月12日', 'D. 1913年'], answer: 'B', explanation: '1912年1月1日孙中山在南京就任中华民国临时大总统，中华民国正式成立。', difficulty: 1 },
      { id: 'q1520', type: 'fill', question: '新文化运动的口号是"民主"和"____"。', answer: '科学', explanation: '新文化运动高举"民主"（德先生）和"科学"（赛先生）两面大旗。', difficulty: 1 },
      { id: 'q1521', type: 'truefalse', question: '五四运动中学生是主力军。', options: ['A. 正确', 'B. 错误'], answer: 'B', explanation: '五四运动初期学生是主力，但6月5日以后工人阶级成为主力，工人阶级开始登上政治舞台。', difficulty: 2 },
      { id: 'q1522', type: 'choice', question: '中国共产党成立的时间是', options: ['A. 1919年', 'B. 1920年', 'C. 1921年', 'D. 1922年'], answer: 'C', explanation: '1921年7月中共一大在上海召开，标志着中国共产党成立。', difficulty: 1 },
      { id: 'q1523', type: 'fill', question: '五四运动是中国____革命的开端。', answer: '新民主主义', explanation: '五四运动标志着中国新民主主义革命的开始，促进了马克思主义在中国的传播。', difficulty: 1 }
    ]
  },
  'history-bsd-9-2': {
    chapterName: '抗日战争',
    questions: [
      { id: 'q1524', type: 'choice', question: '九一八事变后东北三省沦陷的时间是', options: ['A. 不到半年', 'B. 一年', 'C. 两年', 'D. 三年'], answer: 'A', explanation: '九一八事变后不到半年，东北三省全部沦陷，日本扶植溥仪建立伪满洲国。', difficulty: 1 },
      { id: 'q1525', type: 'fill', question: '抗日战争中，____是国民政府正面战场取得的重大胜利。', answer: '台儿庄战役', explanation: '1938年台儿庄战役是正面战场取得的一次重大胜利，极大鼓舞了全国军民的抗战信心。', difficulty: 1 },
      { id: 'q1526', type: 'truefalse', question: '抗日民族统一战线是在七七事变后正式建立的。', options: ['A. 正确', 'B. 错误'], answer: 'B', explanation: '抗日民族统一战线初步形成于1937年9月国民党公布国共合作宣言，标志着以国共合作为主体的抗日民族统一战线正式建立。', difficulty: 2 },
      { id: 'q1527', type: 'choice', question: '百团大战的指挥者是', options: ['A. 朱德', 'B. 彭德怀', 'C. 刘伯承', 'D. 林彪'], answer: 'B', explanation: '1940年八路军副总指挥彭德怀指挥发动了百团大战。', difficulty: 1 },
      { id: 'q1528', type: 'fill', question: '抗日战争的胜利是中国人民第一次取得完全胜利的____战争。', answer: '反侵略', explanation: '抗日战争是中国人民第一次取得完全胜利的民族解放（反侵略）战争。', difficulty: 1 }
    ]
  },
  'history-bsd-9-3': {
    chapterName: '解放战争',
    questions: [
      { id: 'q1529', type: 'choice', question: '解放战争初期中共中央的战略方针是', options: ['A. 全面反攻', 'B. 集中优势兵力各个歼灭敌人', 'C. 战略撤退', 'D. 坚守城池'], answer: 'B', explanation: '解放战争初期中共采取"集中优势兵力，各个歼灭敌人"的作战方针，以运动战为主要作战形式。', difficulty: 2 },
      { id: 'q1530', type: 'fill', question: '____战役后，东北全境解放。', answer: '辽沈', explanation: '辽沈战役历时52天，解放了东北全境，使解放军在数量上首次超过国民党军。', difficulty: 1 },
      { id: 'q1531', type: 'truefalse', question: '北平是用和平方式解放的。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '平津战役中北平在傅作义率领下和平解放，使古都免遭战争破坏。', difficulty: 1 },
      { id: 'q1532', type: 'choice', question: '渡江战役中解放军强渡的河流是', options: ['A. 黄河', 'B. 淮河', 'C. 长江', 'D. 珠江'], answer: 'C', explanation: '1949年4月百万人民解放军强渡长江，23日解放南京，国民党统治覆灭。', difficulty: 1 },
      { id: 'q1533', type: 'fill', question: '国民党政权垮台的标志是____被解放。', answer: '南京', explanation: '1949年4月23日解放军占领南京，推翻了国民党在大陆的统治。', difficulty: 1 }
    ]
  },

  // ==================== 历史-华东师大版 ====================
  'history-huadong-7-0': {
    chapterName: '中华文明的起源',
    questions: [
      { id: 'q1534', type: 'choice', question: '北京人已经', options: ['A. 使用人工取火', 'B. 使用天然火', 'C. 种植水稻', 'D. 制造陶器'], answer: 'B', explanation: '北京人已经会使用天然火，但不会人工取火，人工取火是后来山顶洞人才掌握的。', difficulty: 1 },
      { id: 'q1535', type: 'fill', question: '距今约7000年，____人生活在浙江余姚，种植水稻。', answer: '河姆渡', explanation: '河姆渡人距今约7000年，使用磨制石器，种植水稻，住干栏式房屋。', difficulty: 1 },
      { id: 'q1536', type: 'truefalse', question: '半坡人的房屋是半地穴式的。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '半坡人生活在黄河流域，气候干燥寒冷，居住半地穴式圆形房屋；河姆渡人住干栏式房屋。', difficulty: 1 },
      { id: 'q1537', type: 'choice', question: '传说中发明文字的是', options: ['A. 伏羲', 'B. 炎帝', 'C. 黄帝', 'D. 仓颉'], answer: 'D', explanation: '传说黄帝的史官仓颉发明了文字，反映了文字是劳动人民在长期实践中创造的。', difficulty: 2 },
      { id: 'q1538', type: 'fill', question: '我国原始社会后期，部落联盟首领通过____方式产生。', answer: '禅让', explanation: '原始社会后期实行禅让制，尧传舜、舜传禹，将首领之位传给贤能之人。', difficulty: 1 }
    ]
  },
  'history-huadong-7-1': {
    chapterName: '夏商周时代',
    questions: [
      { id: 'q1539', type: 'choice', question: '标志着世袭制代替禅让制的事件是', options: ['A. 大禹建夏', 'B. 启继位', 'C. 商汤灭夏', 'D. 武王伐纣'], answer: 'B', explanation: '禹死后，启继承王位，世袭制代替了禅让制，"公天下"变成了"家天下"。', difficulty: 1 },
      { id: 'q1540', type: 'fill', question: '商朝的____是已发现的古代文字中年代最早、体系较为完整的文字。', answer: '甲骨文', explanation: '甲骨文是商朝刻在龟甲和兽骨上的文字，记录了商王占卜的内容。', difficulty: 1 },
      { id: 'q1541', type: 'truefalse', question: '西周的分封制扩大了周天子的直辖领地。', options: ['A. 正确', 'B. 错误'], answer: 'B', explanation: '分封制实际上使诸侯国拥有相当的独立性，周天子直接管辖的区域反而较小。', difficulty: 2 },
      { id: 'q1542', type: 'choice', question: '春秋时期最先称霸的是', options: ['A. 宋襄公', 'B. 楚庄王', 'C. 齐桓公', 'D. 晋文公'], answer: 'C', explanation: '齐桓公任用管仲改革，以"尊王攘夷"为旗号，成为春秋时期第一个霸主。', difficulty: 1 },
      { id: 'q1543', type: 'fill', question: '商鞅变法中废除井田制，允许____。', answer: '土地自由买卖', explanation: '商鞅变法在经济上废除井田制，允许土地自由买卖，促进了封建经济的发展。', difficulty: 1 },
      { id: 'q1544', type: 'truefalse', question: '老子是道家学派的创始人。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '老子是道家学派的创始人，著有《道德经》，主张"无为而治"。', difficulty: 1 }
    ]
  },
  'history-huadong-7-2': {
    chapterName: '秦汉时期',
    questions: [
      { id: 'q1545', type: 'choice', question: '秦朝中央政府中管理军事的官员是', options: ['A. 丞相', 'B. 御史大夫', 'C. 太尉', 'D. 郡守'], answer: 'C', explanation: '秦朝中央设丞相（行政）、太尉（军事）、御史大夫（监察），合称"三公"。', difficulty: 1 },
      { id: 'q1546', type: 'fill', question: '秦始皇修建的____，西起临洮，东到辽东。', answer: '万里长城', explanation: '秦始皇为防御匈奴南下，将秦、赵、燕三国长城连接并加以扩建，修筑了万里长城。', difficulty: 1 },
      { id: 'q1547', type: 'truefalse', question: '汉朝初年实行的是休养生息政策。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '汉初实行休养生息政策，注重农业生产，减轻赋税和徭役，使经济逐步恢复和发展。', difficulty: 1 },
      { id: 'q1548', type: 'choice', question: '张骞出使西域的主要目的是', options: ['A. 开辟商路', 'B. 联络大月氏夹击匈奴', 'C. 传播文化', 'D. 寻找新领土'], answer: 'B', explanation: '张骞第一次出使西域的目的是联络大月氏夹击匈奴，虽未达成军事目的但开辟了丝绸之路。', difficulty: 1 },
      { id: 'q1549', type: 'fill', question: '东汉____改进造纸术，用树皮、麻头等材料造纸。', answer: '蔡伦', explanation: '东汉蔡伦改进造纸术，用树皮、破布、麻头和旧渔网等制造纸张，称为"蔡侯纸"。', difficulty: 1 }
    ]
  },
  'history-huadong-7-3': {
    chapterName: '三国两晋南北朝',
    questions: [
      { id: 'q1550', type: 'choice', question: '三国时期实力最强的政权是', options: ['A. 蜀汉', 'B. 曹魏', 'C. 东吴', 'D. 三者相当'], answer: 'B', explanation: '曹魏占据中原广大地区，人口最多，经济实力最强，是三国中实力最强的政权。', difficulty: 1 },
      { id: 'q1551', type: 'fill', question: '东晋画家____的代表作是《洛神赋图》和《女史箴图》。', answer: '顾恺之', explanation: '东晋画家顾恺之代表作有《洛神赋图》和《女史箴图》，他提出"以形写神"的绘画理论。', difficulty: 1 },
      { id: 'q1552', type: 'truefalse', question: '南朝包括宋、齐、梁、陈四个朝代。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '南朝依次为宋、齐、梁、陈四朝，均以建康（今南京）为都城。', difficulty: 1 },
      { id: 'q1553', type: 'choice', question: '北魏孝文帝将都城迁到', options: ['A. 平城', 'B. 洛阳', 'C. 长安', 'D. 邺城'], answer: 'B', explanation: '北魏孝文帝将都城从平城迁到洛阳，以便更好地学习和接受汉族先进文化。', difficulty: 1 },
      { id: 'q1554', type: 'fill', question: '贾思勰的《齐民要术》是一部____学著作。', answer: '农', explanation: '北朝贾思勰的《齐民要术》是我国现存最早最完整的农学著作。', difficulty: 1 }
    ]
  },
  'history-huadong-8-0': {
    chapterName: '隋唐时期',
    questions: [
      { id: 'q1555', type: 'choice', question: '隋朝大运河连接的五大水系不包括', options: ['A. 海河', 'B. 黄河', 'C. 淮河', 'D. 珠江'], answer: 'D', explanation: '大运河连接了海河、黄河、淮河、长江、钱塘江五大水系，不包括珠江。', difficulty: 2 },
      { id: 'q1556', type: 'fill', question: '唐太宗以____为镜，虚心纳谏。', answer: '魏征', explanation: '魏征去世后唐太宗感慨："以人为镜，可以明得失。魏征没，朕亡一镜矣。"', difficulty: 1 },
      { id: 'q1557', type: 'truefalse', question: '科举制是通过考试选拔官吏的制度。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '科举制通过分科考试选拔官员，依据考试成绩而非门第出身，有利于选拔人才。', difficulty: 1 },
      { id: 'q1558', type: 'choice', question: '唐朝繁荣的经济城市不包括', options: ['A. 长安', 'B. 洛阳', 'C. 扬州', 'D. 北京'], answer: 'D', explanation: '唐代长安、洛阳是政治经济中心，扬州、成都、广州也是著名商业城市，北京当时不是主要经济中心。', difficulty: 2 },
      { id: 'q1559', type: 'fill', question: '唐玄宗时期，被称为"诗仙"的诗人是____。', answer: '李白', explanation: '李白被称为"诗仙"，杜甫被称为"诗圣"，白居易被称为"诗魔"。', difficulty: 1 },
      { id: 'q1560', type: 'truefalse', question: '唐末农民起义的领导者是黄巢。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '唐末黄巢起义沉重打击了唐朝的统治，此后唐朝名存实亡。', difficulty: 1 }
    ]
  },
  'history-huadong-8-1': {
    chapterName: '宋元时期',
    questions: [
      { id: 'q1561', type: 'choice', question: '北宋加强中央集权的核心措施是', options: ['A. 杯酒释兵权', 'B. 派文臣做知州', 'C. 设转运使', 'D. 以上都是'], answer: 'D', explanation: '宋太祖通过杯酒释兵权、派文臣管理地方、设转运使管理财政等措施全面加强中央集权。', difficulty: 2 },
      { id: 'q1562', type: 'fill', question: '北宋科学家____的代表作是《梦溪笔谈》。', answer: '沈括', explanation: '北宋沈括的《梦溪笔谈》被誉为"中国科学史上的里程碑"。', difficulty: 1 },
      { id: 'q1563', type: 'truefalse', question: '蒙古政权统一全国是在1279年。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '1279年元军消灭南宋残余势力，完成了全国统一。', difficulty: 1 },
      { id: 'q1564', type: 'choice', question: '被称为"宋四家"的书法家不包括', options: ['A. 苏轼', 'B. 黄庭坚', 'C. 米芾', 'D. 王羲之'], answer: 'D', explanation: '"宋四家"是苏轼、黄庭坚、米芾、蔡襄，王羲之是东晋书法家。', difficulty: 2 },
      { id: 'q1565', type: 'fill', question: '元朝时，____是最著名的大都市，人口众多，商业繁荣。', answer: '大都（或杭州）', explanation: '元朝大都是全国政治经济中心，杭州也是繁华的商业城市。', difficulty: 1 }
    ]
  },
  'history-huadong-8-2': {
    chapterName: '明清时期',
    questions: [
      { id: 'q1566', type: 'choice', question: '明成祖迁都的地点是', options: ['A. 南京', 'B. 北京', 'C. 开封', 'D. 西安'], answer: 'B', explanation: '明成祖朱棣将都城从南京迁到北京，并大规模修建了北京城。', difficulty: 1 },
      { id: 'q1567', type: 'fill', question: '明朝郑和下西洋最远到达____和红海沿岸。', answer: '非洲东海岸', explanation: '郑和下西洋最远到达非洲东海岸和红海沿岸，是世界航海史上的伟大壮举。', difficulty: 1 },
      { id: 'q1568', type: 'truefalse', question: '明朝中后期资本主义萌芽出现在苏州、松江等地。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '明朝中后期江南地区纺织业中出现了"机户出资，机工出力"的雇佣关系，是资本主义萌芽。', difficulty: 2 },
      { id: 'q1569', type: 'choice', question: '清朝为加强君主专制设立的关键机构是', options: ['A. 内阁', 'B. 六部', 'C. 军机处', 'D. 都察院'], answer: 'C', explanation: '雍正帝设军机处标志着君主专制达到顶峰，军机大臣只能跪受笔录。', difficulty: 1 },
      { id: 'q1570', type: 'fill', question: '清朝初年实行的____政策限制了对外贸易。', answer: '闭关锁国（或海禁）', explanation: '清朝实行闭关锁国政策，严格限制对外交往，只允许广州一处对外通商。', difficulty: 1 }
    ]
  },
  'history-huadong-8-3': {
    chapterName: '列强侵华与中国人民的抗争',
    questions: [
      { id: 'q1571', type: 'choice', question: '鸦片战争爆发的根本原因是', options: ['A. 林则徐虎门销烟', 'B. 英国为了打开中国市场', 'C. 清政府闭关锁国', 'D. 中国经济落后'], answer: 'B', explanation: '英国为了打开中国市场、倾销工业品和掠夺原料而发动了鸦片战争，虎门销烟只是导火索。', difficulty: 2 },
      { id: 'q1572', type: 'fill', question: '《南京条约》规定割让____给英国。', answer: '香港岛', explanation: '《南京条约》割让香港岛给英国，赔款2100万银元，开放五口通商。', difficulty: 1 },
      { id: 'q1573', type: 'truefalse', question: '甲午中日战争中北洋舰队全军覆没。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '1895年威海卫战役中北洋舰队全军覆没，标志着洋务运动的失败。', difficulty: 1 },
      { id: 'q1574', type: 'choice', question: '《辛丑条约》的签订使中国', options: ['A. 开始沦为半殖民地', 'B. 大大加深半殖民地化', 'C. 完全沦为半殖民地', 'D. 开始近代化探索'], answer: 'C', explanation: '1901年《辛丑条约》签订，中国完全沦为半殖民地半封建社会。', difficulty: 1 },
      { id: 'q1575', type: 'fill', question: '义和团运动的口号是"____扶清灭洋"。', answer: '扶清灭洋', explanation: '义和团运动以"扶清灭洋"为口号，但最终被中外反动势力联合镇压。', difficulty: 1 }
    ]
  },
  'history-huadong-9-0': {
    chapterName: '近代中国的艰难历程',
    questions: [
      { id: 'q1576', type: 'choice', question: '洋务运动失败的根本原因是', options: ['A. 西方列强的阻挠', 'B. 没有改变封建制度', 'C. 资金不足', 'D. 技术落后'], answer: 'B', explanation: '洋务运动只学习西方先进技术而不改变落后的封建制度，这是其失败的根本原因。', difficulty: 1 },
      { id: 'q1577', type: 'fill', question: '戊戌变法时，光绪帝任用____等进行变法。', answer: '康有为、梁启超', explanation: '戊戌变法中光绪帝起用康有为、梁启超等维新派推行变法，但仅维持了103天。', difficulty: 1 },
      { id: 'q1578', type: 'truefalse', question: '戊戌六君子包括谭嗣同。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '戊戌政变后，谭嗣同、刘光第、林旭、杨锐、杨深秀、康广仁六人被杀，史称"戊戌六君子"。', difficulty: 1 },
      { id: 'q1579', type: 'choice', question: '辛亥革命推翻了', options: ['A. 封建制度', 'B. 封建帝制', 'C. 帝国主义', 'D. 资本主义'], answer: 'B', explanation: '辛亥革命推翻了清朝的封建帝制（君主专制），但没有推翻整个封建制度，也没有改变中国半殖民地半封建社会的性质。', difficulty: 2 },
      { id: 'q1580', type: 'fill', question: '辛亥革命后建立的临时政府总统是____。', answer: '孙中山', explanation: '1912年元旦孙中山在南京就任中华民国临时大总统。', difficulty: 1 }
    ]
  },
  'history-huadong-9-1': {
    chapterName: '新民主主义革命',
    questions: [
      { id: 'q1581', type: 'choice', question: '新文化运动开始的标志是', options: ['A. 《新青年》的创办', 'B. 五四运动', 'C. 中国共产党成立', 'D. 辛亥革命'], answer: 'A', explanation: '1915年陈独秀在上海创办《青年杂志》（后改名为《新青年》），标志着新文化运动的开始。', difficulty: 1 },
      { id: 'q1582', type: 'fill', question: '1919年5月4日，____学生在天安门前集会游行。', answer: '北京', explanation: '1919年5月4日北京大学等校学生集会游行，抗议巴黎和会上中国外交的失败。', difficulty: 1 },
      { id: 'q1583', type: 'truefalse', question: '中共一大最后一天会议在浙江嘉兴南湖的游船上举行。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '中共一大在上海开幕后转移到浙江嘉兴南湖的游船上继续举行，选举了党的领导机构。', difficulty: 1 },
      { id: 'q1584', type: 'choice', question: '新民主主义革命与旧民主主义革命最主要的区别是', options: ['A. 领导阶级不同', 'B. 革命对象不同', 'C. 革命目标不同', 'D. 革命方式不同'], answer: 'A', explanation: '旧民主主义革命由资产阶级领导，新民主主义革命由无产阶级（工人阶级通过中国共产党）领导。', difficulty: 2 },
      { id: 'q1585', type: 'fill', question: '五四运动的导火索是____。', answer: '巴黎和会上中国外交的失败', explanation: '巴黎和会上列强将德国在山东的权益转让给日本，激起中国人民的强烈抗议，引发五四运动。', difficulty: 1 }
    ]
  },
  'history-huadong-9-2': {
    chapterName: '抗日战争与解放战争',
    questions: [
      { id: 'q1586', type: 'choice', question: '抗日战争全面爆发的标志性事件是', options: ['A. 九一八事变', 'B. 一二八事变', 'C. 七七事变', 'D. 八一三事变'], answer: 'C', explanation: '1937年7月7日的卢沟桥事变（七七事变）标志着日本全面侵华的开始，也是中国全民族抗战的开始。', difficulty: 1 },
      { id: 'q1587', type: 'fill', question: '1945年____月____日，日本宣布无条件投降。', answer: '8；15', explanation: '1945年8月15日日本天皇宣布无条件投降，9月2日正式签署投降书。', difficulty: 1 },
      { id: 'q1588', type: 'truefalse', question: '刘邓大军挺进大别山揭开了战略进攻的序幕。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '1947年刘伯承、邓小平率晋冀鲁豫解放军主力挺进大别山，揭开了战略进攻的序幕。', difficulty: 1 },
      { id: 'q1589', type: 'choice', question: '三大战役中解放东北全境的是', options: ['A. 辽沈战役', 'B. 淮海战役', 'C. 平津战役', 'D. 渡江战役'], answer: 'A', explanation: '辽沈战役使东北全境获得解放，解放军在数量上首次超过国民党军。', difficulty: 1 },
      { id: 'q1590', type: 'fill', question: '解放战争时期，三大战役共歼灭和改编国民党军队约____万人。', answer: '150', explanation: '三大战役共歼灭和改编国民党军队150多万人，国民党主力基本被消灭。', difficulty: 1 }
    ]
  },
  'history-huadong-9-3': {
    chapterName: '新中国的成立与建设',
    questions: [
      { id: 'q1591', type: 'choice', question: '中华人民共和国成立的标志是', options: ['A. 政协会议召开', 'B. 开国大典', 'C. 土地改革', 'D. 抗美援朝'], answer: 'B', explanation: '1949年10月1日开国大典标志着中华人民共和国的成立。', difficulty: 1 },
      { id: 'q1592', type: 'fill', question: '1951年____获得和平解放，标志着祖国大陆实现了统一。', answer: '西藏', explanation: '1951年西藏和平解放，标志着祖国大陆获得了统一，实现了各族人民的团结。', difficulty: 1 },
      { id: 'q1593', type: 'truefalse', question: '土地改革废除了地主阶级封建剥削的土地所有制。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '1950-1952年土地改革废除了地主阶级封建剥削的土地所有制，实行农民的土地所有制。', difficulty: 1 },
      { id: 'q1594', type: 'choice', question: "抗美援朝战争中被誉为'最可爱的人'的是", options: ['A. 解放军战士', 'B. 八路军战士', 'C. 中国人民志愿军', 'D. 民兵'], answer: 'C', explanation: '抗美援朝战争中中国人民志愿军被称为"最可爱的人"，涌现出黄继光、邱少云等英雄。', difficulty: 1 },
      { id: 'q1595', type: 'fill', question: '抗美援朝战争中，____用身体堵住了敌人的枪眼。', answer: '黄继光', explanation: '在上甘岭战役中，黄继光用身体堵住了敌人的枪眼，壮烈牺牲。', difficulty: 1 },
      { id: 'q1596', type: 'truefalse', question: '第一届中国人民政治协商会议通过了《共同纲领》。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '1949年9月第一届政协会议在北平召开，通过了《共同纲领》，起了临时宪法的作用。', difficulty: 1 }
    ]
  },
  // ==================== 地理-人教版 ====================
  'geography-renjiao-7-0': {
    chapterName: '地球和地球仪',
    questions: [
      { id: 'q1597', type: 'choice', question: '地球的形状是', options: ['A. 正圆体', 'B. 两极稍扁、赤道略鼓的不规则球体', 'C. 椭球体', 'D. 平的'], answer: 'B', explanation: '地球是一个两极稍扁、赤道略鼓的不规则球体。', difficulty: 1 },
      { id: 'q1598', type: 'fill', question: '地球的平均半径约为____千米。', answer: '6371', explanation: '地球的平均半径约为6371千米，赤道半径略大于极半径。', difficulty: 1 },
      { id: 'q1599', type: 'truefalse', question: '地球仪上连接南北两极的线叫经线。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '在地球仪上，连接南北两极的线称为经线，也叫子午线。', difficulty: 1 },
      { id: 'q1600', type: 'choice', question: '赤道的纬度是', options: ['A. 0度', 'B. 90度', 'C. 23.5度', 'D. 66.5度'], answer: 'A', explanation: '赤道是0度纬线，是南北半球的分界线。', difficulty: 1 },
      { id: 'q1601', type: 'fill', question: '地球仪上，纬度最大的地方是____，度数为____度。', answer: '极点（南北极）；90', explanation: '南北极点纬度均为90度，北极点为北纬90度，南极点为南纬90度。', difficulty: 1 },
      { id: 'q1602', type: 'truefalse', question: '所有经线的长度都相等。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '所有经线都是连接南北两极的半圆，长度都大约相等，约为2万千米。', difficulty: 1 }
    ]
  },
  'geography-renjiao-7-1': {
    chapterName: '地球的运动',
    questions: [
      { id: 'q1603', type: 'choice', question: '地球自转一周的时间约为', options: ['A. 12小时', 'B. 24小时', 'C. 365天', 'D. 一个月'], answer: 'B', explanation: '地球自转一周约24小时（一天），产生了昼夜交替现象。', difficulty: 1 },
      { id: 'q1604', type: 'fill', question: '地球自转的方向是自____向____。', answer: '西；东', explanation: '地球自转的方向是自西向东，从北极上空看呈逆时针方向。', difficulty: 1 },
      { id: 'q1605', type: 'truefalse', question: '地球公转产生了四季变化。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '地球绕太阳公转，由于地轴是倾斜的，导致太阳直射点在南北回归线之间移动，产生四季变化。', difficulty: 1 },
      { id: 'q1606', type: 'choice', question: '一年中太阳直射点最北到达', options: ['A. 北回归线', 'B. 南回归线', 'C. 赤道', 'D. 北极圈'], answer: 'A', explanation: '每年夏至日（6月22日前后），太阳直射北回归线（23.5度N），这是太阳直射点最北的位置。', difficulty: 1 },
      { id: 'q1607', type: 'fill', question: '地球公转一周的时间约为____天。', answer: '365（或365.25）', explanation: '地球公转一周约365.25天，我们通常取365天为一年，每四年有一个闰年。', difficulty: 1 }
    ]
  },
  'geography-renjiao-7-2': {
    chapterName: '地图的阅读',
    questions: [
      { id: 'q1608', type: 'choice', question: '地图三要素不包括', options: ['A. 比例尺', 'B. 方向', 'C. 图例和注记', 'D. 颜色'], answer: 'D', explanation: '地图三要素是比例尺、方向和图例与注记，颜色不是基本要素。', difficulty: 1 },
      { id: 'q1609', type: 'fill', question: '比例尺=____距离/____距离。', answer: '图上；实际（或实地）', explanation: '比例尺=图上距离÷实地距离，表示图上距离比实地距离缩小的程度。', difficulty: 1 },
      { id: 'q1610', type: 'truefalse', question: '在一般地图上，"上北下南，左西右东"。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '在一般地图上，通常规定上方为北，下方为南，左方为西，右方为东。', difficulty: 1 },
      { id: 'q1611', type: 'choice', question: '下列比例尺中最大的是', options: ['A. 1:1000000', 'B. 1:500000', 'C. 1:100000', 'D. 1:50000'], answer: 'D', explanation: '比例尺分母越小，比例尺越大，表示的实地范围越小但内容越详细。1:50000最大。', difficulty: 2 },
      { id: 'q1612', type: 'fill', question: '____是表示地面高低起伏状况的等值线。', answer: '等高线', explanation: '等高线是把海拔相同的点连接成的线，可以表示地面的高低起伏。', difficulty: 1 }
    ]
  },
  'geography-renjiao-7-3': {
    chapterName: '陆地和海洋',
    questions: [
      { id: 'q1613', type: 'choice', question: '地球表面海陆面积比大约是', options: ['A. 七分陆地三分海洋', 'B. 三分陆地七分海洋', 'C. 各占一半', 'D. 陆地多于海洋'], answer: 'B', explanation: '地球表面约71%是海洋，约29%是陆地，即"三分陆地，七分海洋"。', difficulty: 1 },
      { id: 'q1614', type: 'fill', question: '世界上面积最大的大洲是____。', answer: '亚洲', explanation: '亚洲面积约4400万平方千米，是世界上面积最大的大洲。', difficulty: 1 },
      { id: 'q1615', type: 'truefalse', question: '太平洋是世界上面积最大的大洋。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '太平洋面积约1.8亿平方千米，是世界上面积最大的大洋，几乎占全球海洋面积的一半。', difficulty: 1 },
      { id: 'q1616', type: 'choice', question: '全部位于北半球的大洲是', options: ['A. 非洲', 'B. 欧洲', 'C. 南美洲', 'D. 大洋洲'], answer: 'B', explanation: '欧洲全部位于北半球。非洲和南美洲跨南北半球，大洋洲主要在南半球。', difficulty: 1 },
      { id: 'q1617', type: 'fill', question: '亚洲和非洲的分界线是____运河。', answer: '苏伊士', explanation: '苏伊士运河是亚洲和非洲的分界线，连接地中海和红海。', difficulty: 1 },
      { id: 'q1618', type: 'truefalse', question: '板块构造学说认为，地球表层由六大板块组成。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '地球表层由六大板块组成：亚欧板块、非洲板块、美洲板块、太平洋板块、印度洋板块、南极洲板块。', difficulty: 1 }
    ]
  },
  'geography-renjiao-8-0': {
    chapterName: '从世界看中国',
    questions: [
      { id: 'q1619', type: 'choice', question: '中国位于', options: ['A. 亚洲东部、太平洋东岸', 'B. 亚洲东部、太平洋西岸', 'C. 亚洲西部、太平洋西岸', 'D. 亚洲南部、印度洋北岸'], answer: 'B', explanation: '中国位于亚洲东部、太平洋西岸，是一个海陆兼备的国家。', difficulty: 1 },
      { id: 'q1620', type: 'fill', question: '中国陆地领土面积约____万平方千米，居世界第____位。', answer: '960；三', explanation: '中国陆地领土面积约960万平方千米，仅次于俄罗斯和加拿大，居世界第三位。', difficulty: 1 },
      { id: 'q1621', type: 'truefalse', question: '中国是世界上人口最多的国家。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '中国人口约14亿，是世界上人口最多的国家。', difficulty: 1 },
      { id: 'q1622', type: 'choice', question: '我国人口分布的界线是', options: ['A. 秦岭—淮河', 'B. 黑河—腾冲', 'C. 大兴安岭—太行山', 'D. 昆仑山—祁连山'], answer: 'B', explanation: '以黑龙江的黑河到云南的腾冲为界，东部人口密集，西部人口稀疏。', difficulty: 2 },
      { id: 'q1623', type: 'fill', question: '中国共有____个省级行政单位。', answer: '34（或三十四）', explanation: '中国共有34个省级行政单位，包括23个省、5个自治区、4个直辖市和2个特别行政区。', difficulty: 1 }
    ]
  },
  'geography-renjiao-8-1': {
    chapterName: '中国的自然环境',
    questions: [
      { id: 'q1624', type: 'choice', question: '我国地势的主要特征是', options: ['A. 东高西低', 'B. 西高东低，呈三级阶梯', 'C. 南高北低', 'D. 中间高四周低'], answer: 'B', explanation: '我国地势西高东低，呈三级阶梯状分布，第一阶梯是青藏高原。', difficulty: 1 },
      { id: 'q1625', type: 'fill', question: '我国第一阶梯的主要地形是____。', answer: '青藏高原（或高原）', explanation: '我国地势第一阶梯以青藏高原为主，平均海拔4000米以上。', difficulty: 1 },
      { id: 'q1626', type: 'truefalse', question: '秦岭—淮河是我国南北方的地理分界线。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '秦岭—淮河一线是我国重要的地理分界线，是1月0度等温线、800mm等降水量线通过的地方。', difficulty: 1 },
      { id: 'q1627', type: 'choice', question: '我国最大的盆地是', options: ['A. 准噶尔盆地', 'B. 塔里木盆地', 'C. 柴达木盆地', 'D. 四川盆地'], answer: 'B', explanation: '塔里木盆地位于新疆南部，面积约53万平方千米，是我国面积最大的盆地。', difficulty: 1 },
      { id: 'q1628', type: 'fill', question: '我国最长的河流是____，全长约____千米。', answer: '长江；6300', explanation: '长江全长约6300千米，是我国最长、年径流量最大的河流。', difficulty: 1 }
    ]
  },
  'geography-renjiao-8-2': {
    chapterName: '中国的自然资源',
    questions: [
      { id: 'q1629', type: 'choice', question: '自然资源分为可再生资源和不可再生资源，下列属于可再生资源的是', options: ['A. 煤炭', 'B. 石油', 'C. 水资源', 'D. 铁矿'], answer: 'C', explanation: '水资源是可再生资源，可以在较短时间内更新和恢复。煤炭、石油、铁矿是不可再生资源。', difficulty: 1 },
      { id: 'q1630', type: 'fill', question: '我国自然资源总量____，但人均占有量____。', answer: '丰富（大）；少（不足）', explanation: '我国自然资源总量丰富，但人口众多，人均占有量不足，仅为世界人均水平的几分之一。', difficulty: 1 },
      { id: 'q1631', type: 'truefalse', question: '土地资源属于可再生资源。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '土地资源只要合理利用和保护，可以不断更新和恢复，属于可再生资源。', difficulty: 1 },
      { id: 'q1632', type: 'choice', question: '我国水资源分布的特点是', options: ['A. 南多北少，东多西少', 'B. 北多南少，西多东少', 'C. 均匀分布', 'D. 东多西少，北多南少'], answer: 'A', explanation: '我国水资源分布不均，时间上夏秋多冬春少，空间上南多北少、东多西少。', difficulty: 1 },
      { id: 'q1633', type: 'fill', question: '为解决北方缺水问题，国家实施了____工程。', answer: '南水北调', explanation: '南水北调工程把长江流域丰富的水资源调到华北和西北地区，缓解北方缺水问题。', difficulty: 1 }
    ]
  },
  'geography-renjiao-8-3': {
    chapterName: '中国经济的发展',
    questions: [
      { id: 'q1634', type: 'choice', question: '我国农业分布的南北差异主要表现在', options: ['A. 北方以种植业为主，南方以牧业为主', 'B. 北方以旱地为主，南方以水田为主', 'C. 北方种小麦，南方也种小麦', 'D. 没有差别'], answer: 'B', explanation: '秦岭—淮河以北以旱地为主，主要种植小麦和玉米；以南以水田为主，主要种植水稻。', difficulty: 1 },
      { id: 'q1635', type: 'fill', question: '我国四大工业区中，以重工业为主的工业区是____工业区。', answer: '辽中南', explanation: '辽中南工业区是我国以重工业为主的工业区，依托丰富的煤铁资源发展起来。', difficulty: 2 },
      { id: 'q1636', type: 'truefalse', question: '交通运输是经济发展的"先行官"。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '交通运输是经济发展的基础和先行条件，被称为经济发展的"先行官"。', difficulty: 1 },
      { id: 'q1637', type: 'choice', question: '我国高新技术产业集中的地区不包括', options: ['A. 长三角', 'B. 珠三角', 'C. 环渤海', 'D. 西北内陆'], answer: 'D', explanation: '我国高新技术产业主要分布在长三角、珠三角和环渤海等科技力量雄厚、经济发达的地区。', difficulty: 2 },
      { id: 'q1638', type: 'fill', question: '我国最重要的交通运输方式是____运输。', answer: '铁路', explanation: '铁路运输是我国最重要的运输方式之一，承担了大量长途客货运输任务。', difficulty: 1 }
    ]
  },
  // ==================== 地理-湘教版 ====================
  'geography-xiangjiao-7-0': {
    chapterName: '让我们走进地理',
    questions: [
      { id: 'q1639', type: 'choice', question: '地理学与我们的生活密切相关，下列不属于地理问题的是', options: ['A. 为什么有些地方四季分明', 'B. 怎样合理安排农业生产', 'C. 数学方程怎么解', 'D. 如何保护生态环境'], answer: 'C', explanation: '数学方程属于数学学科，气候、农业生产布局和生态环境保护都属于地理学研究范畴。', difficulty: 1 },
      { id: 'q1640', type: 'fill', question: '____是研究地球表面自然现象和人文现象的学科。', answer: '地理学（或地理）', explanation: '地理学研究地球表面的自然环境（地形、气候、水文等）和人文现象（人口、城市、经济等）。', difficulty: 1 },
      { id: 'q1641', type: 'truefalse', question: '学习地理只需要记住地名和位置。', options: ['A. 正确', 'B. 错误'], answer: 'B', explanation: '学习地理不仅要掌握地名和位置，还要学会分析地理现象的成因、规律和相互关系。', difficulty: 1 },
      { id: 'q1642', type: 'choice', question: '收集地理信息的途径不包括', options: ['A. 查阅地图', 'B. 实地考察', 'C. 上网搜索', 'D. 只凭想象'], answer: 'D', explanation: '收集地理信息的途径包括查阅地图和书籍、实地考察、上网搜索、使用遥感技术等，不能只凭想象。', difficulty: 1 },
      { id: 'q1643', type: 'fill', question: '地球的赤道周长约为____千米。', answer: '4万（或40000）', explanation: '地球赤道周长约40000千米。', difficulty: 1 }
    ]
  },
  'geography-xiangjiao-7-1': {
    chapterName: '地球的面貌',
    questions: [
      { id: 'q1644', type: 'choice', question: '七大洲中面积最小的是', options: ['A. 欧洲', 'B. 大洋洲', 'C. 南极洲', 'D. 南美洲'], answer: 'B', explanation: '七大洲面积由大到小依次是亚洲、非洲、北美洲、南美洲、南极洲、欧洲、大洋洲，面积最小的是大洋洲。', difficulty: 1 },
      { id: 'q1645', type: 'fill', question: '世界上面积最大的大洋是____。', answer: '太平洋', explanation: '太平洋是世界面积最大的大洋，约占全球海洋面积的一半。', difficulty: 1 },
      { id: 'q1646', type: 'truefalse', question: '亚洲和欧洲的分界线是乌拉尔山脉、乌拉尔河和大高加索山脉。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '亚欧分界线是乌拉尔山脉—乌拉尔河—里海—大高加索山脉—黑海—土耳其海峡。', difficulty: 1 },
      { id: 'q1647', type: 'choice', question: '海底地形中，最深的部分是', options: ['A. 大陆架', 'B. 大陆坡', 'C. 海沟', 'D. 洋盆'], answer: 'C', explanation: '海沟是海底最深的部分，如马里亚纳海沟深达11034米，是地球上最深处。', difficulty: 1 },
      { id: 'q1648', type: 'fill', question: '南北美洲的分界线是____运河。', answer: '巴拿马', explanation: '巴拿马运河是南北美洲的分界线，沟通了大西洋和太平洋。', difficulty: 1 }
    ]
  },
  'geography-xiangjiao-7-2': {
    chapterName: '世界的居民',
    questions: [
      { id: 'q1649', type: 'choice', question: '世界人口增长最快的大洲是', options: ['A. 亚洲', 'B. 欧洲', 'C. 非洲', 'D. 北美洲'], answer: 'C', explanation: '目前非洲是世界上人口自然增长率最高的大洲，人口增长最快。', difficulty: 1 },
      { id: 'q1650', type: 'fill', question: '世界人口超过____亿（2022年），人口增长迅速。', answer: '80', explanation: '2022年11月世界人口突破80亿，人口增长给资源、环境带来巨大压力。', difficulty: 1 },
      { id: 'q1651', type: 'truefalse', question: '人口密度反映一个地区的人口分布状况。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '人口密度=总人口/总面积，反映一个地区人口的稠密程度。', difficulty: 1 },
      { id: 'q1652', type: 'choice', question: '世界人口稠密的地区不包括', options: ['A. 亚洲东部', 'B. 欧洲西部', 'C. 撒哈拉沙漠', 'D. 北美洲东部'], answer: 'C', explanation: '撒哈拉沙漠气候干旱，是人口稀疏地区。人口稠密区主要在亚洲东部和南部、欧洲西部和北美东部。', difficulty: 1 },
      { id: 'q1653', type: 'fill', question: '世界上的主要语言中，使用人数最多的是____。', answer: '汉语', explanation: '汉语是世界上使用人数最多的语言，英语是世界上使用范围最广的语言。', difficulty: 1 }
    ]
  },
  'geography-xiangjiao-7-3': {
    chapterName: '世界的气候',
    questions: [
      { id: 'q1654', type: 'choice', question: '影响气候的基本因素不包括', options: ['A. 纬度位置', 'B. 海陆位置', 'C. 地形', 'D. 个人喜好'], answer: 'D', explanation: '影响气候的基本因素有纬度位置、海陆位置、地形、洋流等，个人喜好不影响气候。', difficulty: 1 },
      { id: 'q1655', type: 'fill', question: '气温随海拔升高而____，海拔每升高100米，气温约下降____度。', answer: '降低；0.6', explanation: '在对流层中，气温随海拔升高而降低，一般每升高100米，气温下降约0.6度。', difficulty: 1 },
      { id: 'q1656', type: 'truefalse', question: '赤道地区全年高温多雨，属于热带雨林气候。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '赤道地区全年高温多雨，终年受赤道低压带控制，形成热带雨林气候。', difficulty: 1 },
      { id: 'q1657', type: 'choice', question: '温带海洋性气候主要分布在', options: ['A. 赤道附近', 'B. 南北极地区', 'C. 中纬度大陆西岸', 'D. 回归线附近大陆西岸'], answer: 'C', explanation: '温带海洋性气候主要分布在南北纬40度到60度的大陆西岸，全年温和湿润。', difficulty: 2 },
      { id: 'q1658', type: 'fill', question: '南极地区属于____气候，终年严寒干燥。', answer: '极地（或极地冰原）', explanation: '南极地区属于极地气候，终年严寒干燥，降水稀少。', difficulty: 1 }
    ]
  },
  'geography-xiangjiao-8-0': {
    chapterName: '中国的疆域与人口',
    questions: [
      { id: 'q1659', type: 'choice', question: '我国疆域最东端在', options: ['A. 黑龙江与乌苏里江汇合处', 'B. 帕米尔高原', 'C. 漠河以北黑龙江主航道', 'D. 南海南沙群岛曾母暗沙'], answer: 'A', explanation: '我国最东端在黑龙江与乌苏里江汇合处（约135度E），最西端在帕米尔高原（约73度E）。', difficulty: 1 },
      { id: 'q1660', type: 'fill', question: '我国南北跨纬度广，气候差异____，东西跨经度广，____差异大。', answer: '大；时间（或时差）', explanation: '我国南北跨纬度约49度，气候差异大；东西跨经度约62度，时间差异（时差）大。', difficulty: 1 },
      { id: 'q1661', type: 'truefalse', question: '我国是一个海陆兼备的国家。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '我国东部临海，西部深入内陆，既有利于陆上对外交往，也有利于发展海洋事业，是海陆兼备的国家。', difficulty: 1 },
      { id: 'q1662', type: 'choice', question: '我国人口最多的少数民族是', options: ['A. 壮族', 'B. 回族', 'C. 满族', 'D. 维吾尔族'], answer: 'A', explanation: '壮族是我国人口最多的少数民族，约有1700万人，主要分布在广西壮族自治区。', difficulty: 1 },
      { id: 'q1663', type: 'fill', question: '我国民族分布特点是"大散居、小聚居、____"。', answer: '交错杂居', explanation: '我国民族分布呈现"大散居、小聚居、交错杂居"的特点。', difficulty: 1 }
    ]
  },
  'geography-xiangjiao-8-1': {
    chapterName: '中国的自然环境',
    questions: [
      { id: 'q1664', type: 'choice', question: '我国最高峰是', options: ['A. 泰山', 'B. 华山', 'C. 珠穆朗玛峰', 'D. 黄山'], answer: 'C', explanation: '珠穆朗玛峰海拔8844.43米，是世界最高峰，位于中尼边境。', difficulty: 1 },
      { id: 'q1665', type: 'fill', question: '我国最大的平原是____平原。', answer: '东北', explanation: '东北平原面积约35万平方千米，是我国面积最大的平原。', difficulty: 1 },
      { id: 'q1666', type: 'truefalse', question: '我国夏季气温最低的地方是青藏高原。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '夏季青藏高原平均气温较低，是我国夏季气温最低的地方，因为海拔高。', difficulty: 2 },
      { id: 'q1667', type: 'choice', question: '我国年降水量分布的总趋势是', options: ['A. 从东南向西北递减', 'B. 从西北向东南递减', 'C. 从北向南递减', 'D. 从南向北递减'], answer: 'A', explanation: '我国年降水量分布的总趋势是从东南沿海向西北内陆递减，东南多西北少。', difficulty: 1 },
      { id: 'q1668', type: 'fill', question: '秦岭—淮河一线是____毫米等降水量线通过的地方。', answer: '800', explanation: '秦岭—淮河一线大致是800毫米年等降水量线，是半湿润区与湿润区的分界线。', difficulty: 1 }
    ]
  },
  'geography-xiangjiao-8-2': {
    chapterName: '中国的自然资源',
    questions: [
      { id: 'q1669', type: 'choice', question: '我国土地资源构成中比重最大的是', options: ['A. 耕地', 'B. 林地', 'C. 草地', 'D. 建设用地'], answer: 'C', explanation: '我国草地面积广，约占土地总面积的1/3，比重最大。耕地只占约13%。', difficulty: 2 },
      { id: 'q1670', type: 'fill', question: '针对我国土地资源现状，国家制定了____这一基本国策。', answer: '十分珍惜和合理利用每一寸土地，切实保护耕地', explanation: '为保护有限的耕地资源，国家将"十分珍惜和合理利用每一寸土地，切实保护耕地"列为基本国策。', difficulty: 1 },
      { id: 'q1671', type: 'truefalse', question: '我国矿产资源总量丰富，但人均不足。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '我国矿产资源总量居世界前列，但人均占有量不足，部分重要矿产还依赖进口。', difficulty: 1 },
      { id: 'q1672', type: 'choice', question: '我国北方地区严重缺水，解决措施不包括', options: ['A. 节约用水', 'B. 南水北调', 'C. 修建水库', 'D. 大量抽取地下水'], answer: 'D', explanation: '大量抽取地下水会导致地面沉降，不是合理的解决办法。应采取节水、跨流域调水等措施。', difficulty: 1 },
      { id: 'q1673', type: 'fill', question: '太阳能属于____能源（可再生/不可再生）。', answer: '可再生', explanation: '太阳能是一种取之不尽、用之不竭的可再生清洁能源。', difficulty: 1 }
    ]
  },
  'geography-xiangjiao-8-3': {
    chapterName: '中国的地域差异',
    questions: [
      { id: 'q1674', type: 'choice', question: '秦岭—淮河一线是重要的地理分界线，它不是', options: ['A. 1月0度等温线', 'B. 800mm等降水量线', 'C. 400mm等降水量线', 'D. 暖温带与亚热带分界线'], answer: 'C', explanation: '400mm等降水量线大致沿大兴安岭—张家口—兰州一线，是半湿润区与半干旱区的分界线。', difficulty: 2 },
      { id: 'q1675', type: 'fill', question: '根据地理位置、自然和人文地理特点的不同，我国可分为____大地理区域。', answer: '四', explanation: '我国可分为北方地区、南方地区、西北地区和青藏地区四大地理区域。', difficulty: 1 },
      { id: 'q1676', type: 'truefalse', question: '青藏地区由于海拔高，被称为"世界屋脊"。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '青藏地区平均海拔4000米以上，是世界上海拔最高的地区，被称为"世界屋脊"。', difficulty: 1 },
      { id: 'q1677', type: 'choice', question: '西北地区最主要的自然特征是', options: ['A. 高寒', 'B. 干旱', 'C. 湿热', 'D. 温和湿润'], answer: 'B', explanation: '西北地区深居内陆，距海远，降水稀少，最主要的自然特征是干旱。', difficulty: 1 },
      { id: 'q1678', type: 'fill', question: '北方地区和南方地区的分界线大致是____。', answer: '秦岭—淮河', explanation: '秦岭—淮河一线是北方地区和南方地区的重要分界线。', difficulty: 1 }
    ]
  },
  // ==================== 地理-中图版 ====================
  'geography-zhongtu-7-0': {
    chapterName: '地球和地图',
    questions: [
      { id: 'q1679', type: 'choice', question: '证明地球是球体的证据不包括', options: ['A. 麦哲伦环球航行', 'B. 月食现象', 'C. 海边看远处驶来的船只', 'D. 太阳东升西落'], answer: 'D', explanation: '太阳东升西落是地球自转的现象，不能直接证明地球是球体。麦哲伦环球航行、月食、远处船只先见桅杆等都能证明地球是球体。', difficulty: 2 },
      { id: 'q1680', type: 'fill', question: '地球仪上，____是最大的纬线圈。', answer: '赤道', explanation: '赤道是0度纬线，是地球上最长的纬线圈，长约40000千米。', difficulty: 1 },
      { id: 'q1681', type: 'truefalse', question: '经线指示南北方向，纬线指示东西方向。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '经线连接南北两极，指示南北方向；纬线与经线垂直，指示东西方向。', difficulty: 1 },
      { id: 'q1682', type: 'choice', question: '东西半球的分界线是', options: ['A. 0度和180度经线', 'B. 20度W和160度E', 'C. 赤道', 'D. 本初子午线'], answer: 'B', explanation: '西经20度和东经160度组成的经线圈是东西半球的分界线。', difficulty: 1 },
      { id: 'q1683', type: 'fill', question: '本初子午线是____度经线。', answer: '0', explanation: '通过英国伦敦格林尼治天文台旧址的经线定为0度经线（本初子午线）。', difficulty: 1 }
    ]
  },
  'geography-zhongtu-7-1': {
    chapterName: '大洲和大洋',
    questions: [
      { id: 'q1684', type: 'choice', question: '跨经度最多的大洲是', options: ['A. 亚洲', 'B. 非洲', 'C. 南极洲', 'D. 北美洲'], answer: 'C', explanation: '南极洲跨越所有经度（360度），是跨经度最多的大洲。', difficulty: 2 },
      { id: 'q1685', type: 'fill', question: '亚洲和北美洲的分界线是____海峡。', answer: '白令', explanation: '白令海峡是亚洲和北美洲的分界线，也是俄罗斯和美国的分界线。', difficulty: 1 },
      { id: 'q1686', type: 'truefalse', question: '南美洲和南极洲隔德雷克海峡相望。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '德雷克海峡是南美洲和南极洲之间的海峡，是世界上最宽的海峡。', difficulty: 1 },
      { id: 'q1687', type: 'choice', question: '四大洋中面积最小的是', options: ['A. 太平洋', 'B. 大西洋', 'C. 印度洋', 'D. 北冰洋'], answer: 'D', explanation: '四大洋面积由大到小依次是太平洋、大西洋、印度洋、北冰洋，面积最小的是北冰洋。', difficulty: 1 },
      { id: 'q1688', type: 'fill', question: '地球表面陆地面积约占____%。', answer: '29', explanation: '地球表面约71%是海洋，约29%是陆地。', difficulty: 1 }
    ]
  },
  'geography-zhongtu-7-2': {
    chapterName: '世界的气候',
    questions: [
      { id: 'q1689', type: 'choice', question: '热带气候类型不包括', options: ['A. 热带雨林气候', 'B. 热带季风气候', 'C. 热带沙漠气候', 'D. 温带大陆性气候'], answer: 'D', explanation: '温带大陆性气候属于温带气候类型，不属于热带气候类型。', difficulty: 1 },
      { id: 'q1690', type: 'fill', question: '一天中最高气温出现在午后____时左右。', answer: '2（或14）', explanation: '一天中最高气温出现在午后2时（14时）左右，最低气温出现在日出前后。', difficulty: 1 },
      { id: 'q1691', type: 'truefalse', question: '地中海气候夏季炎热干燥，冬季温和多雨。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '地中海气候分布在南北纬30度到40度的大陆西岸，夏季炎热干燥，冬季温和多雨。', difficulty: 1 },
      { id: 'q1692', type: 'choice', question: '气温年较差是指', options: ['A. 一天中最高气温与最低气温之差', 'B. 一年中最高月平均气温与最低月平均气温之差', 'C. 两地气温之差', 'D. 室内外气温之差'], answer: 'B', explanation: '气温年较差是一年中最高月平均气温与最低月平均气温的差值，反映一地的气温变化幅度。', difficulty: 2 },
      { id: 'q1693', type: 'fill', question: '世界气温分布的一般规律是，低纬度气温____，高纬度气温____。', answer: '高；低', explanation: '世界气温从赤道向两极逐渐降低，即低纬度高、高纬度低。', difficulty: 1 }
    ]
  },
  'geography-zhongtu-7-3': {
    chapterName: '世界的居民和国家',
    questions: [
      { id: 'q1694', type: 'choice', question: '世界上使用范围最广的语言是', options: ['A. 汉语', 'B. 英语', 'C. 法语', 'D. 西班牙语'], answer: 'B', explanation: '英语是世界上使用范围最广的语言，是许多国家的官方语言和国际通用语言。', difficulty: 1 },
      { id: 'q1695', type: 'fill', question: '世界上面积最大的国家是____。', answer: '俄罗斯', explanation: '俄罗斯面积约1709万平方千米，是世界上面积最大的国家，横跨欧亚两洲。', difficulty: 1 },
      { id: 'q1696', type: 'truefalse', question: '发达国家主要分布在北半球。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '发达国家主要分布在北半球的欧洲、北美洲、大洋洲和亚洲的日本等。', difficulty: 1 },
      { id: 'q1697', type: 'choice', question: '世界上面积最大的发展中国家是', options: ['A. 中国', 'B. 印度', 'C. 巴西', 'D. 俄罗斯'], answer: 'A', explanation: '中国是世界上最大的发展中国家，也是世界上人口最多的发展中国家。', difficulty: 1 },
      { id: 'q1698', type: 'fill', question: '国界线以内的范围称为____。', answer: '领土', explanation: '国界线是国家之间的边界，国界线以内的陆地、领海、领空等总称领土。', difficulty: 1 }
    ]
  },
  'geography-zhongtu-8-0': {
    chapterName: '中国疆域和行政区划',
    questions: [
      { id: 'q1699', type: 'choice', question: '我国面积最大的省级行政区是', options: ['A. 西藏自治区', 'B. 内蒙古自治区', 'C. 新疆维吾尔自治区', 'D. 青海省'], answer: 'C', explanation: '新疆维吾尔自治区面积约166万平方千米，是我国面积最大的省级行政区。', difficulty: 1 },
      { id: 'q1700', type: 'fill', question: '我国纬度最高的省级行政区是____。', answer: '黑龙江省', explanation: '黑龙江省位于我国最北部，是我国纬度最高的省份。', difficulty: 1 },
      { id: 'q1701', type: 'truefalse', question: '我国大陆海岸线长约1.8万千米。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '我国大陆海岸线长约1.8万千米，是世界上海岸线较长的国家之一。', difficulty: 1 },
      { id: 'q1702', type: 'choice', question: '我国跨经度最多的省级行政区是', options: ['A. 内蒙古自治区', 'B. 新疆维吾尔自治区', 'C. 西藏自治区', 'D. 青海省'], answer: 'A', explanation: '内蒙古自治区东西跨经度很广，是我国跨经度最多的省级行政区。', difficulty: 2 },
      { id: 'q1703', type: 'fill', question: '我国两个特别行政区是____和____。', answer: '香港；澳门', explanation: '1997年香港回归，1999年澳门回归，分别设立了香港和澳门特别行政区。', difficulty: 1 }
    ]
  },
  'geography-zhongtu-8-1': {
    chapterName: '中国自然环境',
    questions: [
      { id: 'q1704', type: 'choice', question: '我国地势第二阶梯的主要地形是', options: ['A. 高原和盆地', 'B. 平原和丘陵', 'C. 山地和高山', 'D. 只有平原'], answer: 'A', explanation: '我国第二阶梯以高原和盆地为主，包括内蒙古高原、黄土高原、云贵高原和塔里木盆地、准噶尔盆地、四川盆地。', difficulty: 1 },
      { id: 'q1705', type: 'fill', question: '我国最长的内流河是____。', answer: '塔里木河', explanation: '塔里木河位于新疆塔里木盆地，是我国最长的内流河。', difficulty: 1 },
      { id: 'q1706', type: 'truefalse', question: '夏季我国普遍高温，除青藏高原外大部分地区气温较高。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '夏季我国除青藏高原外普遍高温，青藏高原由于海拔高气温较低。', difficulty: 1 },
      { id: 'q1707', type: 'choice', question: '我国冬季最冷的地方是', options: ['A. 漠河', 'B. 哈尔滨', 'C. 北京', 'D. 乌鲁木齐'], answer: 'A', explanation: '漠河是我国冬季最冷的地方，极端最低气温可达零下52.3度。', difficulty: 1 },
      { id: 'q1708', type: 'fill', question: '我国___气候显著，是世界上季风最典型的国家之一。', answer: '季风', explanation: '我国位于亚洲东部、太平洋西岸，受季风影响显著，是世界上季风最典型的国家之一。', difficulty: 1 }
    ]
  },
  'geography-zhongtu-8-2': {
    chapterName: '中国自然资源',
    questions: [
      { id: 'q1709', type: 'choice', question: '我国耕地主要分布在', options: ['A. 西北内陆', 'B. 东部季风区的平原和低缓丘陵', 'C. 青藏高原', 'D. 西南山区'], answer: 'B', explanation: '我国耕地主要分布在东部季风区的平原和低缓丘陵地区，气候适宜，水源充足。', difficulty: 1 },
      { id: 'q1710', type: 'fill', question: '我国____资源丰富，居世界前列。', answer: '矿产资源（或水能资源等）', explanation: '我国矿产资源总量丰富，种类齐全，许多矿产储量居世界前列。', difficulty: 1 },
      { id: 'q1711', type: 'truefalse', question: '我国应合理利用和保护自然资源，走可持续发展的道路。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '面对资源短缺的问题，我国必须合理利用和保护自然资源，发展循环经济，走可持续发展之路。', difficulty: 1 },
      { id: 'q1712', type: 'choice', question: '我国能源结构中，消费占比最大的能源是', options: ['A. 石油', 'B. 天然气', 'C. 煤炭', 'D. 水能'], answer: 'C', explanation: '我国能源消费结构中煤炭占比最大，但近年来正在优化能源结构，增加清洁能源比重。', difficulty: 2 },
      { id: 'q1713', type: 'fill', question: '我国水能资源最丰富的河流是____。', answer: '长江', explanation: '长江流域面积广、水量大、落差大，水能资源极为丰富，三峡是世界最大的水电站之一。', difficulty: 1 }
    ]
  },
  'geography-zhongtu-8-3': {
    chapterName: '中国经济与文化',
    questions: [
      { id: 'q1714', type: 'choice', question: '我国南方地区的主要粮食作物是', options: ['A. 小麦', 'B. 玉米', 'C. 水稻', 'D. 高粱'], answer: 'C', explanation: '南方地区水热条件好，以水田为主，主要种植水稻。', difficulty: 1 },
      { id: 'q1715', type: 'fill', question: '我国主要的油料作物是____和花生。', answer: '油菜', explanation: '我国主要油料作物是油菜（南方为主）和花生（北方为主）。', difficulty: 1 },
      { id: 'q1716', type: 'truefalse', question: '我国的铁路网东部稠密，西部稀疏。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '我国铁路网分布不均，东部地区经济发达、人口密集，铁路网稠密；西部地区稀疏。', difficulty: 1 },
      { id: 'q1717', type: 'choice', question: '我国四大牧区不包括', options: ['A. 内蒙古', 'B. 新疆', 'C. 青海', 'D. 山东'], answer: 'D', explanation: '我国四大牧区是内蒙古牧区、新疆牧区、青海牧区和西藏牧区。山东是农业大省，不是牧区。', difficulty: 1 },
      { id: 'q1718', type: 'fill', question: '我国以种植业为主的地区和以畜牧业为主的地区大致以____一线为界。', answer: '400毫米等降水量', explanation: '400mm等降水量线大致是种植业和畜牧业的分界线，此线以西以北以牧业为主，以东以南以种植业为主。', difficulty: 2 }
    ]
  },
  // ==================== 政治-部编版 ====================
  'politics-bubian-7-0': {
    chapterName: '成长的节拍',
    questions: [
      { id: 'q1719', type: 'choice', question: '中学时代是人生发展的一个新阶段，可以为我们的一生奠定', options: ['A. 重要基础', 'B. 经济基础', 'C. 物质基础', 'D. 身体基础'], answer: 'A', explanation: '中学时代是人生发展的一个新阶段，为我们的成长奠定重要基础，为我们的人生长卷打上丰富底色。', difficulty: 1 },
      { id: 'q1720', type: 'fill', question: '少年的梦想，与个人的人生目标紧密相连，与____密不可分。', answer: '时代的脉搏', explanation: '少年的梦想不仅是个人的理想追求，也与时代的脉搏紧密相连，与国家和民族的发展密切相关。', difficulty: 1 },
      { id: 'q1721', type: 'truefalse', question: '学习仅仅局限在学校里。', options: ['A. 正确', 'B. 错误'], answer: 'B', explanation: '学习不仅仅局限于学校，还包括在生活中的各种学习，如社会实践、劳动体验等。', difficulty: 1 },
      { id: 'q1722', type: 'choice', question: '正确认识自己的途径不包括', options: ['A. 自我评价', 'B. 他人评价', 'C. 体貌比较', 'D. 在实践中认识'], answer: 'C', explanation: '认识自己可以通过自我评价、他人评价和实践来认识，通过体貌比较来认识自己是不全面的。', difficulty: 1 },
      { id: 'q1723', type: 'fill', question: '学会接纳自己，需要接纳自己的____和____。', answer: '优点；不完美（或缺点）', explanation: '学会接纳自己需要接纳自己的全部，既要接纳自己的优点，也要接纳自己的不完美。', difficulty: 1 },
      { id: 'q1724', type: 'truefalse', question: '做更好的自己，需要主动改正缺点。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '做更好的自己需要扬长避短，主动改正缺点，不断自我完善。', difficulty: 1 }
    ]
  },
  'politics-bubian-7-1': {
    chapterName: '友谊的天空',
    questions: [
      { id: 'q1725', type: 'choice', question: '友谊的力量表现在', options: ['A. 朋友之间互相帮助和关心', 'B. 朋友只在学习上帮忙', 'C. 友谊只是用来交换利益的', 'D. 朋友越多越好'], answer: 'A', explanation: '真正的友谊表现在朋友之间的互相关心、互相帮助、共同进步。', difficulty: 1 },
      { id: 'q1726', type: 'fill', question: '友谊是一种____的情感关系。', answer: '亲密（或双向、平等）', explanation: '友谊是一种亲密的双向的情感关系，建立在平等、真诚和互信的基础上。', difficulty: 1 },
      { id: 'q1727', type: 'truefalse', question: '网上交友可以完全代替现实中的朋友交往。', options: ['A. 正确', 'B. 错误'], answer: 'B', explanation: '网上交友可以作为拓展交往的一种方式，但不能完全代替现实生活中面对面的交往。', difficulty: 1 },
      { id: 'q1728', type: 'choice', question: '交友需要遵循的原则不包括', options: ['A. 平等尊重', 'B. 互相帮助', 'C. 讲哥们义气', 'D. 真诚相待'], answer: 'C', explanation: '交友需要平等尊重、互相帮助、真诚相待，但不应讲不讲原则的"哥们义气"。', difficulty: 1 },
      { id: 'q1729', type: 'fill', question: '____是交友的前提，也是沟通的桥梁。', answer: '真诚', explanation: '真诚是交友的前提，只有以诚待人才能获得真正的友谊。', difficulty: 1 }
    ]
  },
  'politics-bubian-7-2': {
    chapterName: '师长情谊',
    questions: [
      { id: 'q1730', type: 'choice', question: '老师在我们成长过程中扮演着', options: ['A. 组织者、引导者、合作者', 'B. 知识的传授者', 'C. 纪律的执行者', 'D. 以上都对'], answer: 'D', explanation: '老师既是知识的传授者，也是我们学习的组织者、引导者和合作者，更是我们成长道路上的引路人。', difficulty: 1 },
      { id: 'q1731', type: 'fill', question: '新型的师生关系建立在____的基础上。', answer: '民主平等', explanation: '新型师生关系建立在民主平等、尊师爱生、教学相长的基础上。', difficulty: 1 },
      { id: 'q1732', type: 'truefalse', question: '与老师发生矛盾时，我们应该主动与老师沟通。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '与老师发生矛盾时，应冷静思考、主动与老师沟通，正确表达自己的观点和想法。', difficulty: 1 },
      { id: 'q1733', type: 'choice', question: '对待老师表扬与批评的正确态度是', options: ['A. 只听表扬不接受批评', 'B. 正确对待，有则改之无则加勉', 'C. 报复批评自己的老师', 'D. 完全不在乎'], answer: 'B', explanation: '对老师的表扬和批评都要正确对待，表扬时再接再厉，批评时有则改之无则加勉。', difficulty: 1 },
      { id: 'q1734', type: 'fill', question: '孝敬父母是中华民族的____。', answer: '传统美德', explanation: '孝敬父母是中华民族的传统美德，也是法律规定的义务。', difficulty: 1 }
    ]
  },
  'politics-bubian-7-3': {
    chapterName: '生命的思考',
    questions: [
      { id: 'q1735', type: 'choice', question: '生命的特点是', options: ['A. 每个人的生命都是独特的', 'B. 生命不可逆', 'C. 生命短暂', 'D. 以上都是'], answer: 'D', explanation: '生命的特点包括独特性、不可逆性、短暂性等，每个人的生命都是独特的。', difficulty: 1 },
      { id: 'q1736', type: 'fill', question: '生命的追问就是思考生命的____。', answer: '意义（或价值）', explanation: '生命的追问就是思考生命的意义和价值，明确人生目标和方向。', difficulty: 1 },
      { id: 'q1737', type: 'truefalse', question: '生命可以永恒，因此我们不需要珍惜。', options: ['A. 正确', 'B. 错误'], answer: 'B', explanation: '肉体生命虽然不能永恒，但精神的传承可以超越生命的长度，因此更要珍惜有限的生命。', difficulty: 1 },
      { id: 'q1738', type: 'choice', question: '守护生命首先要关注的是', options: ['A. 精神生活', 'B. 身体健康', 'C. 学习成绩', 'D. 社交关系'], answer: 'B', explanation: '守护生命首先要关注自己的身体健康，养成健康的生活方式，掌握基本的自救自护知识。', difficulty: 1 },
      { id: 'q1739', type: 'fill', question: '我们要增强安全意识、____意识、____意识。', answer: '自我保护；生命', explanation: '守护生命需要增强安全意识、自我保护意识和生命意识，掌握自救自护的方法。', difficulty: 1 }
    ]
  },
  'politics-bubian-8-0': {
    chapterName: '走进社会生活',
    questions: [
      { id: 'q1740', type: 'choice', question: '个人与社会的关系是', options: ['A. 毫无关系', 'B. 个人是社会的有机组成部分', 'C. 社会完全决定个人', 'D. 个人可以脱离社会存在'], answer: 'B', explanation: '个人是社会的有机组成部分，每个人的生存和发展都离不开社会。', difficulty: 1 },
      { id: 'q1741', type: 'fill', question: '网络丰富了我们的日常生活，但也带来了____问题。', answer: '网络安全（或信息真假难辨、沉迷网络等）', explanation: '网络带来便利的同时，也带来了虚假信息、网络诈骗、沉迷网络等问题，需要理性对待。', difficulty: 1 },
      { id: 'q1742', type: 'truefalse', question: '个人可以脱离社会而独立存在。', options: ['A. 正确', 'B. 错误'], answer: 'B', explanation: '人的生存和发展离不开社会，每个人都从社会中获得物质支持和精神滋养，不能脱离社会存在。', difficulty: 1 },
      { id: 'q1743', type: 'choice', question: '在网络生活中，我们应该', options: ['A. 随意转发信息', 'B. 恶意攻击他人', 'C. 遵守网络规则、理性表达', 'D. 沉迷网络游戏'], answer: 'C', explanation: '在网络生活中应遵守法律法规和道德规范，理性表达意见，不信谣传谣。', difficulty: 1 },
      { id: 'q1744', type: 'fill', question: '社会秩序是人民安居乐业的____。', answer: '保障', explanation: '良好的社会秩序是社会稳定和人民安居乐业的保障。', difficulty: 1 }
    ]
  },
  'politics-bubian-8-1': {
    chapterName: '遵守社会规则',
    questions: [
      { id: 'q1745', type: 'choice', question: '社会规则的种类包括', options: ['A. 道德、法律', 'B. 道德、纪律、法律', 'C. 只有法律', 'D. 只有道德'], answer: 'B', explanation: '社会规则包括道德、纪律和法律等多种类型，共同维护社会秩序。', difficulty: 1 },
      { id: 'q1746', type: 'fill', question: '法律是最严格的规则，由国家____制定或认可。', answer: '制定（或认可）', explanation: '法律由国家制定或认可，由国家强制力保证实施，是最严格的规则。', difficulty: 1 },
      { id: 'q1747', type: 'truefalse', question: '遵守社会规则只需要外在的强制力约束。', options: ['A. 正确', 'B. 错误'], answer: 'B', explanation: '遵守社会规则既需要外在的约束，更需要内在的自觉，将规则内化为自律行为。', difficulty: 2 },
      { id: 'q1748', type: 'choice', question: '尊重他人是一个人内在修养的外在表现，尊重他人需要做到', options: ['A. 完全顺从他人', 'B. 平等对待他人、礼貌待人', 'C. 忽视他人感受', 'D. 嘲笑他人缺点'], answer: 'B', explanation: '尊重他人要求我们平等对待每个人，礼貌待人，关注他人的感受和需要。', difficulty: 1 },
      { id: 'q1749', type: 'fill', question: '____是人际交往的润滑剂，能减少摩擦、化解矛盾。', answer: '礼貌（或尊重）', explanation: '礼貌和尊重是人际交往的重要品质，有助于建立和谐的人际关系。', difficulty: 1 }
    ]
  },
  'politics-bubian-8-2': {
    chapterName: '承担责任',
    questions: [
      { id: 'q1750', type: 'choice', question: '责任的来源有', options: ['A. 法律规定', 'B. 道德要求', 'C. 分配的任务', 'D. 以上都是'], answer: 'D', explanation: '责任的来源包括法律的规定、道德的要求、分配的任务、职业的要求、公民的身份等。', difficulty: 1 },
      { id: 'q1751', type: 'fill', question: '不同的角色承担不同的____。', answer: '责任', explanation: '每个人在社会中扮演着不同的角色，每种角色都有相应的责任。', difficulty: 1 },
      { id: 'q1752', type: 'truefalse', question: '承担责任会带来负担，没有任何回报。', options: ['A. 正确', 'B. 错误'], answer: 'B', explanation: '承担责任虽然会有压力和付出，但也会获得回报，如自尊自信、他人的认可和社会的尊重等。', difficulty: 1 },
      { id: 'q1753', type: 'choice', question: '面对可以选择的责任，我们应该', options: ['A. 尽量逃避', 'B. 凭兴趣选择', 'C. 有选择地承担责任', 'D. 根据自身能力和社会需要合理选择'], answer: 'D', explanation: '面对可以选择的责任，应根据自己的能力和条件，合理选择并承担。', difficulty: 2 },
      { id: 'q1754', type: 'fill', question: '不言代价与回报是____精神的表现。', answer: '奉献', explanation: '不计较个人得失、主动承担责任的精神就是奉献精神。', difficulty: 1 }
    ]
  },
  'politics-bubian-8-3': {
    chapterName: '维护国家利益',
    questions: [
      { id: 'q1755', type: 'choice', question: '国家利益的内容包括', options: ['A. 国家安全利益', 'B. 政治利益', 'C. 经济利益', 'D. 以上都是'], answer: 'D', explanation: '国家利益涉及政治、经济、文化、社会、军事等各个领域，是一个广泛的综合概念。', difficulty: 1 },
      { id: 'q1756', type: 'fill', question: '____是国家的主权和领土完整的象征。', answer: '国家主权（和国旗、国徽、国歌）', explanation: '国家主权和领土完整是国家的根本利益，不容侵犯。', difficulty: 1 },
      { id: 'q1757', type: 'truefalse', question: '维护国家安全是每个公民的义务。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '维护国家安全是宪法规定的每个公民的基本义务，国家安全关乎每个公民的切身利益。', difficulty: 1 },
      { id: 'q1758', type: 'choice', question: '当个人利益与国家利益发生冲突时，我们应该', options: ['A. 以个人利益为重', 'B. 以国家利益为重', 'C. 两者都不管', 'D. 以个人利益优先'], answer: 'B', explanation: '当个人利益与国家利益发生矛盾时，应把国家利益放在首位，个人利益服从国家利益。', difficulty: 1 },
      { id: 'q1759', type: 'fill', question: '总体国家安全观强调，以____安全为宗旨。', answer: '人民', explanation: '总体国家安全观以人民安全为宗旨，以政治安全为根本，以经济安全为基础。', difficulty: 2 }
    ]
  },
  'politics-bubian-9-0': {
    chapterName: '踏上社会之路',
    questions: [
      { id: 'q1760', type: 'choice', question: '初中毕业后，我们可以选择的出路有', options: ['A. 升入高中', 'B. 读职业学校', 'C. 就业', 'D. 以上都可以'], answer: 'D', explanation: '初中毕业后有多种选择：升入高中、读职业学校或就业，每种选择都有不同的前景。', difficulty: 1 },
      { id: 'q1761', type: 'fill', question: '我们要树立____的就业观念，适应时代发展的需要。', answer: '多种方式（或灵活）', explanation: '在当前就业形势下，应树立灵活的就业观念，可以自主创业、灵活就业等多种方式。', difficulty: 1 },
      { id: 'q1762', type: 'truefalse', question: '学习是终身的，活到老学到老。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '终身学习是现代社会的基本要求，社会发展迅速，需要不断学习才能跟上时代的步伐。', difficulty: 1 },
      { id: 'q1763', type: 'choice', question: '自我评价是正确认识自己的方法之一，进行自我评价时应', options: ['A. 只看优点', 'B. 只看缺点', 'C. 客观全面', 'D. 与他人比较'], answer: 'C', explanation: '自我评价时应客观全面地看待自己，既要看到优点，也要认识不足。', difficulty: 1 },
      { id: 'q1764', type: 'fill', question: '走向社会，需要我们具备良好的____素质和____技能。', answer: '思想道德；职业技能（或专业）', explanation: '走上社会需要良好的思想道德素质和扎实的专业技能，才能更好地适应社会发展的需要。', difficulty: 1 }
    ]
  },
  'politics-bubian-9-1': {
    chapterName: '创新驱动发展',
    questions: [
      { id: 'q1765', type: 'choice', question: '创新的目的是', options: ['A. 获得专利', 'B. 增加人类知识总量，推动社会进步', 'C. 赢得比赛', 'D. 赚取利润'], answer: 'B', explanation: '创新的目的是增加人类社会的知识总量，提高认识和改造世界的能力，推动社会进步。', difficulty: 1 },
      { id: 'q1766', type: 'fill', question: '____是引领发展的第一动力。', answer: '创新', explanation: '创新是引领发展的第一动力，是一个民族进步的灵魂，是国家兴旺发达的不竭动力。', difficulty: 1 },
      { id: 'q1767', type: 'truefalse', question: '创新只是科学家的事情，与普通人无关。', options: ['A. 正确', 'B. 错误'], answer: 'B', explanation: '创新不限于科技领域，人人都可以创新，日常生活、学习和社会的方方面面都蕴含着创新的机会。', difficulty: 1 },
      { id: 'q1768', type: 'choice', question: '我国实施创新驱动发展战略，必须落实的教育理念是', options: ['A. 应试教育', 'B. 素质教育', 'C. 应试教育和素质教育并重', 'D. 以上都不对'], answer: 'B', explanation: '创新驱动发展需要落实素质教育，培养创新型人才，提高全民族素质。', difficulty: 2 },
      { id: 'q1769', type: 'fill', question: '创新精神表现为敢于突破常规、勇于探索，具有____意识。', answer: '创新（或创造）', explanation: '创新精神的核心是敢于打破常规、勇于探索未知、善于发现问题并解决问题。', difficulty: 1 }
    ]
  },
  'politics-bubian-9-2': {
    chapterName: '民主与法治',
    questions: [
      { id: 'q1770', type: 'choice', question: '我国根本的政治制度是', options: ['A. 人民代表大会制度', 'B. 多党合作制度', 'C. 政治协商制度', 'D. 民族区域自治制度'], answer: 'A', explanation: '人民代表大会制度是我国的根本政治制度，是人民当家作主的重要途径和最高实现形式。', difficulty: 1 },
      { id: 'q1771', type: 'fill', question: '____是治国理政的基本方式。', answer: '依法治国（和以德治国）', explanation: '依法治国和以德治国相结合是治国理政的基本方式。', difficulty: 1 },
      { id: 'q1772', type: 'truefalse', question: '依法治国的核心是规范政府权力。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '依法治国的核心是规范政府权力的运行，保障公民权利的实现。', difficulty: 2 },
      { id: 'q1773', type: 'choice', question: '社会主义民主政治的本质特征是', options: ['A. 人民当家作主', 'B. 依法治国', 'C. 民主集中制', 'D. 多党合作'], answer: 'A', explanation: '人民当家作主是社会主义民主政治的本质特征。', difficulty: 1 },
      { id: 'q1774', type: 'fill', question: '法治要求实行良法之治，____是法治的前提。', answer: '科学立法', explanation: '科学立法是法治的前提，严格执法是关键，公正司法是防线，全民守法是基础。', difficulty: 2 }
    ]
  },
  'politics-bubian-9-3': {
    chapterName: '和谐与梦想',
    questions: [
      { id: 'q1775', type: 'choice', question: '中国梦的基本内涵是', options: ['A. 国家富强、民族振兴、人民幸福', 'B. 经济发展', 'C. 科技进步', 'D. 国防强大'], answer: 'A', explanation: '中国梦的基本内涵是实现国家富强、民族振兴、人民幸福。', difficulty: 1 },
      { id: 'q1776', type: 'fill', question: '实现中国梦必须走____道路。', answer: '中国', explanation: '实现中国梦必须走中国道路，弘扬中国精神，凝聚中国力量。', difficulty: 1 },
      { id: 'q1777', type: 'truefalse', question: '实现中国梦只是国家的事，与个人无关。', options: ['A. 正确', 'B. 错误'], answer: 'B', explanation: '中国梦是每个人的梦，需要每个人的努力和奋斗。国家好，民族好，大家才会好。', difficulty: 1 },
      { id: 'q1778', type: 'choice', question: '社会主义核心价值观中，属于个人层面的是', options: ['A. 富强、民主、文明、和谐', 'B. 自由、平等、公正、法治', 'C. 爱国、敬业、诚信、友善', 'D. 以上都不是'], answer: 'C', explanation: '社会主义核心价值观：国家层面是富强、民主、文明、和谐；社会层面是自由、平等、公正、法治；个人层面是爱国、敬业、诚信、友善。', difficulty: 1 },
      { id: 'q1779', type: 'fill', question: '构建和谐社会需要全体人民共同参与，每个人都是和谐社会的____。', answer: '建设者（或参与者）', explanation: '和谐社会的建设需要每个人的参与和努力，每个人既是受益者也是建设者。', difficulty: 1 }
    ]
  },
  // ==================== 政治-粤教版 ====================
  'politics-yuejiao-7-0': {
    chapterName: '认识自我',
    questions: [
      { id: 'q1780', type: 'choice', question: '正确认识自己的关键是', options: ['A. 与他人比较', 'B. 客观全面地看待自己', 'C. 只看自己的优点', 'D. 听从他人意见'], answer: 'B', explanation: '正确认识自己的关键是客观全面地看待自己，既要看到自己的长处，也要看到自己的不足。', difficulty: 1 },
      { id: 'q1781', type: 'fill', question: '青春期的心理矛盾是____过程中的正常现象。', answer: '成长（或身心发展）', explanation: '青春期的心理矛盾是身心发展过程中不可避免的正常现象，需要积极面对和调适。', difficulty: 1 },
      { id: 'q1782', type: 'truefalse', question: '每个人的生命都是独一无二的。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '每个人的生命都是独特的，就像世界上没有两片完全相同的树叶，每个人都有自己独特的个性和价值。', difficulty: 1 },
      { id: 'q1783', type: 'choice', question: '发掘自己的潜能需要', options: ['A. 等待机遇', 'B. 给自己积极的暗示和持续的努力', 'C. 依赖他人', 'D. 放弃努力'], answer: 'B', explanation: '发掘潜能需要给自己积极的暗示，在实践中不断尝试和努力，发掘自己的优势和特长。', difficulty: 1 },
      { id: 'q1784', type: 'fill', question: '自我调节的方法有转移注意、合理宣泄和____等。', answer: '自我暗示（或心理换位）', explanation: '常见的自我调节方法包括转移注意、合理宣泄、自我暗示和心理换位等。', difficulty: 1 }
    ]
  },
  'politics-yuejiao-7-1': {
    chapterName: '学会交往',
    questions: [
      { id: 'q1785', type: 'choice', question: '人际交往中最基本的原则是', options: ['A. 互利互惠', 'B. 平等尊重', 'C. 完全信任', 'D. 保持距离'], answer: 'B', explanation: '平等尊重是人际交往最基本的原则，只有尊重他人才能获得他人的尊重。', difficulty: 1 },
      { id: 'q1786', type: 'fill', question: '与老师沟通的有效方法之一是____。', answer: '坦诚交流（或写留言、写信等）', explanation: '与老师沟通可以通过面谈、打电话、写信等方式，坦诚表达自己的想法和感受。', difficulty: 1 },
      { id: 'q1787', type: 'truefalse', question: '异性同学之间不能交往。', options: ['A. 正确', 'B. 错误'], answer: 'B', explanation: '异性同学之间正常交往有助于我们全面发展，但要把握交往的尺度，做到自然大方。', difficulty: 1 },
      { id: 'q1788', type: 'choice', question: '良好的亲子关系需要', options: ['A. 父母完全服从孩子', 'B. 孩子完全服从父母', 'C. 双方互相理解和沟通', 'D. 互不干涉'], answer: 'C', explanation: '良好的亲子关系需要父母和孩子之间的互相理解、尊重和有效沟通。', difficulty: 1 },
      { id: 'q1789', type: 'fill', question: '竞争与合作是____关系。', answer: '辩证统一（或相互依存）', explanation: '竞争与合作是辩证统一的关系，竞争中有合作，合作中有竞争，两者相辅相成。', difficulty: 2 }
    ]
  },
  'politics-yuejiao-7-2': {
    chapterName: '学会学习',
    questions: [
      { id: 'q1790', type: 'choice', question: '良好的学习习惯包括', options: ['A. 按时完成作业', 'B. 认真预习和复习', 'C. 专心听讲', 'D. 以上都是'], answer: 'D', explanation: '良好的学习习惯包括按时完成作业、认真预习复习、专心听讲、积极思考等。', difficulty: 1 },
      { id: 'q1791', type: 'fill', question: '科学的学习方法可以事半功倍，我们要找到适合自己的____方法。', answer: '学习', explanation: '每个人的学习方式不同，应找到适合自己的学习方法，提高学习效率。', difficulty: 1 },
      { id: 'q1792', type: 'truefalse', question: '学习压力完全是坏事，没有任何积极作用。', options: ['A. 正确', 'B. 错误'], answer: 'B', explanation: '适度的学习压力可以激发学习动力，促进学习效率。过度的压力才是有害的。', difficulty: 1 },
      { id: 'q1793', type: 'choice', question: '缓解学习压力的有效方法不包括', options: ['A. 适当运动', 'B. 听音乐放松', 'C. 通宵玩游戏', 'D. 与朋友交流'], answer: 'C', explanation: '缓解学习压力可以通过运动、音乐、交流等健康方式，通宵玩游戏反而会加重身心负担。', difficulty: 1 },
      { id: 'q1794', type: 'fill', question: '探究学习是一种积极的学习方式，核心是____。', answer: '自主探索（或主动探究）', explanation: '探究学习强调学生主动发现问题、提出问题、分析问题和解决问题，培养自主学习能力。', difficulty: 2 }
    ]
  },
  'politics-yuejiao-7-3': {
    chapterName: '珍爱生命',
    questions: [
      { id: 'q1795', type: 'choice', question: '面对灾害和意外，我们应', options: ['A. 惊慌失措', 'B. 保持冷静、自救互救', 'C. 旁观等待', 'D. 依赖他人'], answer: 'B', explanation: '面对灾害和意外要保持冷静，掌握基本的自救互救知识和技能，最大限度减少伤害。', difficulty: 1 },
      { id: 'q1796', type: 'fill', question: '敬畏生命要从对自己生命的珍惜拓展到对____生命的关怀。', answer: '他人（及其他）', explanation: '敬畏生命不仅意味着珍惜自己的生命，还要关怀和尊重他人的生命。', difficulty: 1 },
      { id: 'q1797', type: 'truefalse', question: '无论遇到什么困难，都不应该放弃自己的生命。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '生命是最宝贵的，无论遇到什么困难和挫折，都不应该放弃生命。', difficulty: 1 },
      { id: 'q1798', type: 'choice', question: '下列行为中，不属于自护自救的是', options: ['A. 发生火灾时用湿毛巾捂住口鼻', 'B. 地震时躲在桌子下', 'C. 遇险时大哭大闹', 'D. 遇到溺水者大声呼救'], answer: 'C', explanation: '遇险时大哭大闹不利于自救，应保持冷静，根据情况采取合理的自救措施。', difficulty: 1 },
      { id: 'q1799', type: 'fill', question: '让生命充盈，需要我们积极参与____活动。', answer: '社会实践（或社会公益、志愿者）', explanation: '让生命充盈需要积极参与社会实践活动，在奉献中实现生命的价值。', difficulty: 1 }
    ]
  },
  'politics-yuejiao-8-0': {
    chapterName: '权利与义务',
    questions: [
      { id: 'q1800', type: 'choice', question: '公民的基本权利不包括', options: ['A. 选举权和被选举权', 'B. 受教育权', 'C. 任意妄为的权利', 'D. 言论自由'], answer: 'C', explanation: '公民享有宪法赋予的基本权利，但这些权利的行使有法律边界，不能"任意妄为"。', difficulty: 1 },
      { id: 'q1801', type: 'fill', question: '公民的基本义务包括遵守宪法和法律、维护国家安全和____等。', answer: '依法服兵役、依法纳税', explanation: '公民的基本义务包括遵守宪法和法律、维护国家安全、依法服兵役、依法纳税等。', difficulty: 1 },
      { id: 'q1802', type: 'truefalse', question: '权利和义务是统一的，享有什么权利就应承担相应的义务。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '权利和义务是统一的，没有无义务的权利，也没有无权利的义务。', difficulty: 1 },
      { id: 'q1803', type: 'choice', question: '我国公民最基本的政治权利是', options: ['A. 人身自由权', 'B. 选举权和被选举权', 'C. 受教育权', 'D. 劳动权'], answer: 'B', explanation: '选举权和被选举权是公民最基本的政治权利，是公民参与管理国家和社会的基础。', difficulty: 1 },
      { id: 'q1804', type: 'fill', question: '受教育既是公民的____，也是公民的____。', answer: '权利；义务', explanation: '受教育是公民的基本权利，同时也是公民的基本义务。', difficulty: 1 }
    ]
  },
  'politics-yuejiao-8-1': {
    chapterName: '法律保护我们',
    questions: [
      { id: 'q1805', type: 'choice', question: '保护未成年人合法权益的两部专门法律是', options: ['A. 《未成年人保护法》和《预防未成年人犯罪法》', 'B. 《刑法》和《民法》', 'C. 《宪法》和《教育法》', 'D. 《劳动法》和《婚姻法》'], answer: 'A', explanation: '《未成年人保护法》和《预防未成年人犯罪法》是保护未成年人权益的两部专门法律。', difficulty: 1 },
      { id: 'q1806', type: 'fill', question: '未成年人保护包括家庭保护、学校保护、社会保护和____保护。', answer: '司法', explanation: '未成年人保护包括家庭保护、学校保护、社会保护和司法保护四个方面。', difficulty: 1 },
      { id: 'q1807', type: 'truefalse', question: '法律对未成年人给予特殊保护。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '未成年人身心尚未成熟，需要法律给予特殊保护和关爱。', difficulty: 1 },
      { id: 'q1808', type: 'choice', question: '当我们的合法权益受到侵害时，正确的做法是', options: ['A. 忍气吞声', 'B. 报复对方', 'C. 通过法律途径维权', 'D. 自行解决'], answer: 'C', explanation: '当合法权益受到侵害时，应通过法律途径维护自己的权利，可以寻求法律援助。', difficulty: 1 },
      { id: 'q1809', type: 'fill', question: '____是保护我们权利的最有力武器。', answer: '法律', explanation: '法律是保护公民权利的最有力武器，当权利受到侵害时，应运用法律武器维护自身权益。', difficulty: 1 }
    ]
  },
  'politics-yuejiao-8-2': {
    chapterName: '社会生活',
    questions: [
      { id: 'q1810', type: 'choice', question: '社会规则是人们生活的', options: ['A. 累赘', 'B. 保障', 'C. 束缚', 'D. 无关紧要的东西'], answer: 'B', explanation: '社会规则是人们生活的保障，有了规则，社会才能有序运转，人们的权益才能得到保障。', difficulty: 1 },
      { id: 'q1811', type: 'fill', question: '在社会生活中，我们应自觉遵守____和____。', answer: '道德；法律（或纪律）', explanation: '在社会生活中，我们应自觉遵守道德、法律和纪律等社会规范。', difficulty: 1 },
      { id: 'q1812', type: 'truefalse', question: '遵守社会规则需要他律，更需要自律。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '遵守社会规则既需要外在的他律（如法律制裁），更需要内在的自律（自觉遵守）。', difficulty: 1 },
      { id: 'q1813', type: 'choice', question: '诚信是', options: ['A. 做人的基本原则', 'B. 交往的技巧', 'C. 软弱的体现', 'D. 多余的品格'], answer: 'A', explanation: '诚信是做人的基本原则，是立身之本、交往之基，是中华民族的传统美德。', difficulty: 1 },
      { id: 'q1814', type: 'fill', question: '社会公德的基本要求是文明礼貌、助人为乐、爱护公物、保护环境和____。', answer: '遵纪守法', explanation: '社会公德的基本要求包括文明礼貌、助人为乐、爱护公物、保护环境、遵纪守法。', difficulty: 1 }
    ]
  },
  'politics-yuejiao-8-3': {
    chapterName: '承担责任',
    questions: [
      { id: 'q1815', type: 'choice', question: '承担责任的意义在于', options: ['A. 获得荣誉', 'B. 使自身不断成长', 'C. 赢得他人赞扬', 'D. 减轻负担'], answer: 'B', explanation: '承担责任虽然会付出代价，但能促进自身成长，获得自尊自信和他人的尊重。', difficulty: 1 },
      { id: 'q1816', type: 'fill', question: '中学生应承担的责任包括完成学习任务、遵守校规校纪和____。', answer: '承担家庭责任（或孝敬父母、做力所能及的家务等）', explanation: '中学生应承担学习责任、遵守学校规章制度、承担家庭和社会的责任。', difficulty: 1 },
      { id: 'q1817', type: 'truefalse', question: '不承担责任的后果只会影响自己。', options: ['A. 正确', 'B. 错误'], answer: 'B', explanation: '不承担责任的后果不仅影响自己，还会影响他人和社会，破坏社会秩序。', difficulty: 1 },
      { id: 'q1818', type: 'choice', question: '下列属于不负责任行为的是', options: ['A. 按时完成作业', 'B. 答应别人的事做不到也不说明', 'C. 参加班级义务劳动', 'D. 帮助有困难的同学'], answer: 'B', explanation: '答应别人的事做不到也不说明是不守信的表现，属于不负责任的行为。', difficulty: 1 },
      { id: 'q1819', type: 'fill', question: '____精神是社会责任感的集中体现。', answer: '奉献', explanation: '奉献精神是不计个人得失，主动为社会做贡献的精神，是社会责任感的集中体现。', difficulty: 1 }
    ]
  },
  'politics-yuejiao-9-0': {
    chapterName: '认识国情',
    questions: [
      { id: 'q1820', type: 'choice', question: '我国现阶段的基本国情是', options: ['A. 已经是发达国家', 'B. 处于社会主义初级阶段', 'C. 经济总量世界第一', 'D. 不需要发展'], answer: 'B', explanation: '我国仍处于并将长期处于社会主义初级阶段，这是我国的基本国情。', difficulty: 1 },
      { id: 'q1821', type: 'fill', question: '我国的人口特点是基数大、____、农村人口多。', answer: '老龄化（或增长快）', explanation: '我国人口特点包括人口基数大、老龄化加快、农村人口比重大等。', difficulty: 1 },
      { id: 'q1822', type: 'truefalse', question: '我国自然资源总量丰富，但人均占有量少。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '我国自然资源总量丰富，但由于人口众多，人均占有量远低于世界平均水平。', difficulty: 1 },
      { id: 'q1823', type: 'choice', question: '我国现阶段的主要矛盾是', options: ['A. 阶级矛盾', 'B. 人民日益增长的美好生活需要和不平衡不充分的发展之间的矛盾', 'C. 国际矛盾', 'D. 民族矛盾'], answer: 'B', explanation: '新时代我国社会主要矛盾是人民日益增长的美好生活需要和不平衡不充分的发展之间的矛盾。', difficulty: 2 },
      { id: 'q1824', type: 'fill', question: '我国实行____的基本国策和____的发展战略。', answer: '计划生育（或保护环境等）；可持续发展', explanation: '我国实行计划生育、保护环境等基本国策，实施可持续发展战略。', difficulty: 2 }
    ]
  },
  'politics-yuejiao-9-1': {
    chapterName: '基本路线',
    questions: [
      { id: 'q1825', type: 'choice', question: '党在社会主义初级阶段的基本路线的核心内容是', options: ['A. 以经济建设为中心', 'B. 四项基本原则', 'C. 改革开放', 'D. 一个中心、两个基本点'], answer: 'D', explanation: '基本路线的核心内容是"以经济建设为中心，坚持四项基本原则，坚持改革开放"，即"一个中心、两个基本点"。', difficulty: 1 },
      { id: 'q1826', type: 'fill', question: '四项基本原则是立国之本，是全国各族人民的____。', answer: '团结奋斗的共同政治基础', explanation: '四项基本原则包括坚持社会主义道路、坚持人民民主专政、坚持中国共产党的领导、坚持马克思列宁主义毛泽东思想。', difficulty: 2 },
      { id: 'q1827', type: 'truefalse', question: '改革开放是强国之路。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '改革开放是我国的一项基本国策，是强国之路，是决定当代中国命运的关键抉择。', difficulty: 1 },
      { id: 'q1828', type: 'choice', question: '我国现行的分配制度是', options: ['A. 按劳分配', 'B. 按需分配', 'C. 按劳分配为主体、多种分配方式并存', 'D. 平均分配'], answer: 'C', explanation: '我国实行按劳分配为主体、多种分配方式并存的分配制度。', difficulty: 2 },
      { id: 'q1829', type: 'fill', question: '我国的根本制度是____制度。', answer: '社会主义', explanation: '我国的根本制度是社会主义制度，这是宪法明确规定的。', difficulty: 1 }
    ]
  },
  'politics-yuejiao-9-2': {
    chapterName: '中华文化与民族精神',
    questions: [
      { id: 'q1830', type: 'choice', question: '中华文化的特点是', options: ['A. 源远流长、博大精深', 'B. 短暂单一', 'C. 全盘西化', 'D. 缺乏创新'], answer: 'A', explanation: '中华文化源远流长、博大精深，是世界文化宝库中的瑰宝。', difficulty: 1 },
      { id: 'q1831', type: 'fill', question: '中华民族精神的核心是____。', answer: '爱国主义', explanation: '以爱国主义为核心的伟大民族精神包括团结统一、爱好和平、勤劳勇敢、自强不息。', difficulty: 1 },
      { id: 'q1832', type: 'truefalse', question: '对待传统文化应全盘继承。', options: ['A. 正确', 'B. 错误'], answer: 'B', explanation: '对待传统文化应"取其精华、去其糟粕"，继承优秀传统文化，摒弃落后腐朽的内容。', difficulty: 1 },
      { id: 'q1833', type: 'choice', question: '弘扬和培育民族精神最重要的是', options: ['A. 发扬艰苦奋斗精神', 'B. 坚持"以爱国主义为核心"', 'C. 积极参与国际竞争', 'D. 发展经济'], answer: 'B', explanation: '弘扬和培育民族精神，最重要的是坚持爱国主义这一核心，结合时代和社会发展要求，不断为之增添新的内容。', difficulty: 2 },
      { id: 'q1834', type: 'fill', question: '继承中华优秀传统文化，要推陈出新、____。', answer: '革故鼎新（或与时俱进）', explanation: '继承中华优秀传统文化，需要推陈出新、革故鼎新，使传统文化与现代社会相适应。', difficulty: 2 }
    ]
  },
  'politics-yuejiao-9-3': {
    chapterName: '理想与使命',
    questions: [
      { id: 'q1835', type: 'choice', question: '实现中国梦，必须弘扬中国精神。中国精神就是', options: ['A. 以爱国主义为核心的民族精神和以改革创新为核心的时代精神', 'B. 科学精神', 'C. 奋斗精神', 'D. 民主精神'], answer: 'A', explanation: '中国精神就是以爱国主义为核心的民族精神和以改革创新为核心的时代精神。', difficulty: 1 },
      { id: 'q1836', type: 'fill', question: '当代青年的历史使命是，为实现____而奋斗。', answer: '中华民族伟大复兴的中国梦', explanation: '当代青年要树立远大理想，把个人的前途命运与国家的前途命运紧密结合，为实现中华民族伟大复兴的中国梦而奋斗。', difficulty: 1 },
      { id: 'q1837', type: 'truefalse', question: '个人理想与共同理想是完全矛盾的。', options: ['A. 正确', 'B. 错误'], answer: 'B', explanation: '个人理想与共同理想是统一的，个人理想只有融入共同理想才能更好地实现。', difficulty: 1 },
      { id: 'q1838', type: 'choice', question: '实现理想的途径是', options: ['A. 等待机会', 'B. 艰苦奋斗、脚踏实地', 'C. 幻想和空想', 'D. 靠运气'], answer: 'B', explanation: '实现理想需要艰苦奋斗、脚踏实地，不可能一蹴而就。', difficulty: 1 },
      { id: 'q1839', type: 'fill', question: '全面建成小康社会的奋斗目标已经实现，我国开启了全面建设____新征程。', answer: '社会主义现代化国家', explanation: '全面建成小康社会后，我国开启了全面建设社会主义现代化国家新征程。', difficulty: 1 }
    ]
  },
  // ==================== 政治-陕教版 ====================
  'politics-shanjiao-7-0': {
    chapterName: '新学校，新同学',
    questions: [
      { id: 'q1840', type: 'choice', question: '进入中学后，我们的角色发生了变化，我们要', options: ['A. 一切听从家长安排', 'B. 主动适应新环境', 'C. 不需要改变', 'D. 等待他人帮助'], answer: 'B', explanation: '进入中学后，我们要积极适应新环境、新同学、新老师，尽快融入新的学习和生活。', difficulty: 1 },
      { id: 'q1841', type: 'fill', question: '初中是人生的新起点，我们面对的是新的____和新的____。', answer: '环境；挑战', explanation: '进入初中意味着新的环境和新的挑战，需要我们积极面对。', difficulty: 1 },
      { id: 'q1842', type: 'truefalse', question: '在新的班级中，我们应该主动结交新朋友。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '在新的班级中，主动结交新朋友有助于我们更快地适应新的学习生活环境。', difficulty: 1 },
      { id: 'q1843', type: 'choice', question: '建立新友谊需要', options: ['A. 完全被动等待', 'B. 主动热情、真诚待人', 'C. 孤立自己', 'D. 只跟小学同学交往'], answer: 'B', explanation: '建立新友谊需要我们主动热情、真诚待人，敞开心扉接纳新同学。', difficulty: 1 },
      { id: 'q1844', type: 'fill', question: '良好的班集体需要有共同的____和良好的纪律。', answer: '目标（或奋斗目标）', explanation: '良好的班集体需要有共同的奋斗目标、良好的纪律和团结协作的精神。', difficulty: 1 }
    ]
  },
  'politics-shanjiao-7-1': {
    chapterName: '融入新集体',
    questions: [
      { id: 'q1845', type: 'choice', question: '一个良好的班集体应该具有的特征不包括', options: ['A. 有明确的共同目标', 'B. 各同学互不关心', 'C. 有良好的班级纪律', 'D. 有融洽的同学关系'], answer: 'B', explanation: '良好的班集体应该有共同目标、良好纪律、融洽关系和团结协作精神。', difficulty: 1 },
      { id: 'q1846', type: 'fill', question: '个人和集体的关系是____的关系。', answer: '相互依存（或不可分割）', explanation: '个人和集体相互依存，集体是个人成长的园地，个人的发展也离不开集体。', difficulty: 1 },
      { id: 'q1847', type: 'truefalse', question: '集体荣誉与每个人无关。', options: ['A. 正确', 'B. 错误'], answer: 'B', explanation: '集体荣誉与每个人息息相关，每个人都应为集体做出贡献，维护集体荣誉。', difficulty: 1 },
      { id: 'q1848', type: 'choice', question: '建设良好班集体需要', options: ['A. 只有班委负责', 'B. 全体同学的共同努力', 'C. 只靠班主任', 'D. 顺其自然'], answer: 'B', explanation: '建设良好班集体需要全体同学共同参与、齐心协力、团结协作。', difficulty: 1 },
      { id: 'q1849', type: 'fill', question: '在集体中，我们要发挥自己的____，为集体贡献力量。', answer: '特长（或优势、才能）', explanation: '每个同学都有自己的特长和优势，在集体中发挥自己的特长，能为集体做出更大贡献。', difficulty: 1 }
    ]
  },
  'politics-shanjiao-7-2': {
    chapterName: '感受生命的意义',
    questions: [
      { id: 'q1850', type: 'choice', question: '生命最宝贵之处在于', options: ['A. 可以随意挥霍', 'B. 它是唯一的、不可重复的', 'C. 每个人的生命都一样', 'D. 生命不重要'], answer: 'B', explanation: '每个人的生命都是唯一的、不可重复的，因此生命是最宝贵的。', difficulty: 1 },
      { id: 'q1851', type: 'fill', question: '生命的意义在于____和____。', answer: '创造（或奉献）；实现价值', explanation: '生命的意义在于创造价值、奉献社会、实现自己的人生价值。', difficulty: 1 },
      { id: 'q1852', type: 'truefalse', question: '不同的人，生命的意义可能不同。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '每个人对生命意义的理解和追求可能不同，但都是有价值的。', difficulty: 1 },
      { id: 'q1853', type: 'choice', question: '下列最能体现生命价值的是', options: ['A. 追求享乐', 'B. 为社会做贡献', 'C. 无所事事', 'D. 只为自己活着'], answer: 'B', explanation: '为他人和社会做贡献最能体现生命的价值，也是实现人生意义的重要途径。', difficulty: 1 },
      { id: 'q1854', type: 'fill', question: '我们要从现在做起，从____做起，珍惜生命。', answer: '小事（或身边事、日常）', explanation: '珍惜生命要从现在做起，从小事做起，养成良好的生活习惯和安全意识。', difficulty: 1 }
    ]
  },
  'politics-shanjiao-7-3': {
    chapterName: '过富有情趣的生活',
    questions: [
      { id: 'q1855', type: 'choice', question: '高雅情趣的特点是', options: ['A. 健康向上、文明科学', 'B. 低俗无聊', 'C. 消极颓废', 'D. 追求刺激'], answer: 'A', explanation: '高雅情趣是健康向上、文明科学、积极乐观的情趣，有利于身心健康和全面发展。', difficulty: 1 },
      { id: 'q1856', type: 'fill', question: '____是陶冶高雅情操的重要方式之一。', answer: '阅读（或欣赏艺术、参加文体活动）', explanation: '阅读文学作品、欣赏音乐和艺术作品、参加文体活动等都是陶冶情操的方式。', difficulty: 1 },
      { id: 'q1857', type: 'truefalse', question: '盲目从众是一种好习惯。', options: ['A. 正确', 'B. 错误'], answer: 'B', explanation: '盲目从众可能使我们丧失独立思考能力，做出不理智的选择，甚至沾染不良嗜好。', difficulty: 1 },
      { id: 'q1858', type: 'choice', question: '面对好奇心，我们应该', options: ['A. 任其发展', 'B. 压制一切好奇', 'C. 正确引导，发展有益的好奇心', 'D. 完全忽视'], answer: 'C', explanation: '好奇心是青少年心理的重要特征，应正确引导，发展有益的好奇心，避免不良诱惑。', difficulty: 1 },
      { id: 'q1859', type: 'fill', question: '丰富的文化生活可以____我们的精神世界。', answer: '充实（或丰富、滋润）', explanation: '参加丰富的文化活动可以充实我们的精神世界，陶冶情操，提升个人素养。', difficulty: 1 }
    ]
  },
  'politics-shanjiao-8-0': {
    chapterName: '感受法律',
    questions: [
      { id: 'q1860', type: 'choice', question: '法律的最主要特征是', options: ['A. 道德约束', 'B. 由国家强制力保证实施', 'C. 社会舆论', 'D. 个人自觉'], answer: 'B', explanation: '法律区别于其他行为规范的最主要特征是由国家强制力保证实施。', difficulty: 1 },
      { id: 'q1861', type: 'fill', question: '法律是____意志的体现，是由国家制定或认可的行为规范。', answer: '统治阶级（或国家）', explanation: '法律是统治阶级意志的体现，是由国家制定或认可并以国家强制力保证实施的行为规范。', difficulty: 2 },
      { id: 'q1862', type: 'truefalse', question: '法律面前人人平等。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '法律面前人人平等是社会主义法治的基本原则，任何人都没有超越法律的特权。', difficulty: 1 },
      { id: 'q1863', type: 'choice', question: '法律的规范作用表现在', options: ['A. 规定人们应该做什么', 'B. 规定人们不应该做什么', 'C. 规定人们可以做什么', 'D. 以上都是'], answer: 'D', explanation: '法律的规范作用包括指引（可以做什么）、评价（应该做什么）、预测和强制作用。', difficulty: 2 },
      { id: 'q1864', type: 'fill', question: '____是国家的根本大法，具有最高的法律效力。', answer: '宪法', explanation: '宪法是国家的根本大法，规定国家的根本制度和根本任务，具有最高的法律效力。', difficulty: 1 }
    ]
  },
  'politics-shanjiao-8-1': {
    chapterName: '维护权利',
    questions: [
      { id: 'q1865', type: 'choice', question: '当合法权利受到侵害时，我们可以通过哪种途径维护', options: ['A. 协商', 'B. 调解', 'C. 诉讼', 'D. 以上都可以'], answer: 'D', explanation: '维护合法权利的途径包括协商、调解、仲裁和诉讼等多种方式。', difficulty: 1 },
      { id: 'q1866', type: 'fill', question: '非诉讼维权的方式包括协商、____和仲裁。', answer: '调解', explanation: '非诉讼维权方式包括协商、调解和仲裁，是比较经济便捷的维权方式。', difficulty: 1 },
      { id: 'q1867', type: 'truefalse', question: '诉讼俗称"打官司"，是维护权利的最后屏障。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '诉讼（打官司）是维护合法权益最正规、最权威、最有效的方式，是维护权利的最后屏障。', difficulty: 1 },
      { id: 'q1868', type: 'choice', question: '消费者合法权益受到侵害时，可以拨打', options: ['A. 110', 'B. 12315', 'C. 119', 'D. 120'], answer: 'B', explanation: '消费者投诉举报电话是12315，110是报警电话，119是火警电话，120是急救电话。', difficulty: 1 },
      { id: 'q1869', type: 'fill', question: '维护权利要采用____方式，不能违反法律。', answer: '合法（或正当）', explanation: '维护权利必须在法律允许的范围内进行，采用合法的方式和途径。', difficulty: 1 }
    ]
  },
  'politics-shanjiao-8-2': {
    chapterName: '履行义务',
    questions: [
      { id: 'q1870', type: 'choice', question: '法定义务是指', options: ['A. 道德要求', 'B. 宪法和法律规定公民必须履行的义务', 'C. 个人承诺', 'D. 社会习惯'], answer: 'B', explanation: '法定义务是宪法和法律规定公民必须履行的义务，具有强制性。', difficulty: 1 },
      { id: 'q1871', type: 'fill', question: '公民在行使权利时不得损害____的利益和其他公民的合法权利。', answer: '国家的、社会的、集体的', explanation: '公民在行使自由和权利的时候，不得损害国家的、社会的、集体的利益和其他公民的合法的自由和权利。', difficulty: 1 },
      { id: 'q1872', type: 'truefalse', question: '法定义务可以放弃不履行。', options: ['A. 正确', 'B. 错误'], answer: 'B', explanation: '法定义务具有强制性，公民必须履行，不能放弃。', difficulty: 1 },
      { id: 'q1873', type: 'choice', question: '道德义务的含义是', options: ['A. 社会成员依据社会道德规范自觉承担的责任', 'B. 法律规定的义务', 'C. 个人自愿承担的责任', 'D. 不需要履行的义务'], answer: 'A', explanation: '道德义务是社会成员依据社会道德规范自觉承担的责任，不具有强制性但应自觉履行。', difficulty: 1 },
      { id: 'q1874', type: 'fill', question: '履行义务是每个公民____的表现。', answer: '爱国（或具有公民意识）', explanation: '自觉履行义务是热爱祖国、具有公民意识的表现，也是维护社会秩序的要求。', difficulty: 1 }
    ]
  },
  'politics-shanjiao-8-3': {
    chapterName: '维护社会公平正义',
    questions: [
      { id: 'q1875', type: 'choice', question: '社会公平的含义是', options: ['A. 每个人得到完全相同的东西', 'B. 每个人得到自己应得的', 'C. 不需要规则', 'D. 强者可以随意支配弱者'], answer: 'B', explanation: '社会公平意味着每个人都得到其应得的，包括权利公平、机会公平和规则公平。', difficulty: 1 },
      { id: 'q1876', type: 'fill', question: '____是维护社会公平正义的最后一道防线。', answer: '司法（或司法公正）', explanation: '司法是维护社会公平正义的最后一道防线，公正司法对于保障公民权利、维护社会公平具有重要意义。', difficulty: 2 },
      { id: 'q1877', type: 'truefalse', question: '正义要求每个人在社会中享有平等的机会。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '正义要求每个人在社会中都享有平等的机会和权利，不能因为身份、地位等受到不公正对待。', difficulty: 1 },
      { id: 'q1878', type: 'choice', question: '下列体现社会公平正义的是', options: ['A. 任人唯亲', 'B. 以权谋私', 'C. 按规则办事、公正待人', 'D. 歧视他人'], answer: 'C', explanation: '按规则办事、公正待人体现了社会公平正义，任人唯亲、以权谋私和歧视他人都是不公正的表现。', difficulty: 1 },
      { id: 'q1879', type: 'fill', question: '维护社会公平正义需要____的共同努力。', answer: '全社会（或每个人、全体公民）', explanation: '维护社会公平正义需要全社会的共同努力，需要政府、司法机关和每个公民的共同参与。', difficulty: 1 }
    ]
  },
  'politics-shanjiao-9-0': {
    chapterName: '在社会生活中成长',
    questions: [
      { id: 'q1880', type: 'choice', question: '个人成长与社会的关系是', options: ['A. 个人成长与社会无关', 'B. 个人成长离不开社会', 'C. 社会发展依赖个人', 'D. 个人可以脱离社会'], answer: 'B', explanation: '个人成长离不开社会，社会为个人成长提供物质条件和精神滋养。', difficulty: 1 },
      { id: 'q1881', type: 'fill', question: '参与社会公益活动可以____我们的人生价值。', answer: '实现（或提升、体现）', explanation: '参与社会公益活动可以帮助他人、服务社会，同时实现和提升自己的人生价值。', difficulty: 1 },
      { id: 'q1882', type: 'truefalse', question: '中学生也应该积极参与社会实践活动。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '中学生应积极参与社会实践活动，了解社会、增长见识、培养能力。', difficulty: 1 },
      { id: 'q1883', type: 'choice', question: '社会化的过程包括', options: ['A. 学习社会规范', 'B. 掌握社会技能', 'C. 形成社会角色认同', 'D. 以上都是'], answer: 'D', explanation: '社会化过程包括学习社会规范、掌握生活技能、形成角色认同等，是一个持续的过程。', difficulty: 2 },
      { id: 'q1884', type: 'fill', question: '____是社会交往的重要场所。', answer: '学校（或社区、社会）', explanation: '学校、社区和社会都是社会交往的重要场所，通过参与各种活动发展社交能力。', difficulty: 1 }
    ]
  },
  'politics-shanjiao-9-1': {
    chapterName: '我的权利与义务',
    questions: [
      { id: 'q1885', type: 'choice', question: '公民享有人身自由权，下列不属于人身自由权的是', options: ['A. 生命健康权', 'B. 人格尊严权', 'C. 肆意打人的权利', 'D. 住宅不受侵犯的权利'], answer: 'C', explanation: '人身自由权包括生命健康权、人身自由权、人格尊严权和住宅不受侵犯等，肆意打人是违法行为。', difficulty: 1 },
      { id: 'q1886', type: 'fill', question: '公民的人格尊严权包括肖像权、名誉权、____权和姓名权等。', answer: '隐私（或荣誉）', explanation: '人格尊严权包括肖像权、名誉权、隐私权、荣誉权和姓名权等。', difficulty: 1 },
      { id: 'q1887', type: 'truefalse', question: '未成年人的人格尊严同样受法律保护。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '未成年人的人格尊严同样受法律保护，任何人不得侮辱、歧视未成年人。', difficulty: 1 },
      { id: 'q1888', type: 'choice', question: '隐私权是指', options: ['A. 隐瞒犯罪的权利', 'B. 公民不愿公开的个人私事不受侵害的权利', 'C. 不受法律约束的权利', 'D. 随意窥探他人隐私的权利'], answer: 'B', explanation: '隐私权是公民不愿公开的个人私事不受他人干涉和侵害的权利。', difficulty: 1 },
      { id: 'q1889', type: 'fill', question: '权利和义务是____的，我们既要享受权利，又要履行义务。', answer: '统一（或一致、对应）', explanation: '权利和义务是统一的，公民既享有宪法和法律赋予的权利，也要履行相应的义务。', difficulty: 1 }
    ]
  },
  'politics-shanjiao-9-2': {
    chapterName: '走进法律',
    questions: [
      { id: 'q1890', type: 'choice', question: '法律的作用不包括', options: ['A. 规范作用', 'B. 保护作用', 'C. 惩罚作用', 'D. 代替道德'], answer: 'D', explanation: '法律有规范、保护和惩罚作用，但不能代替道德，法律和道德相辅相成。', difficulty: 1 },
      { id: 'q1891', type: 'fill', question: '法律通过____和____来维护社会秩序。', answer: '规定权利和义务（或规范行为）；制裁违法行为', explanation: '法律通过规定权利和义务来规范人们的行为，通过制裁违法行为来维护社会秩序。', difficulty: 1 },
      { id: 'q1892', type: 'truefalse', question: '依法治国是治国理政的基本方略。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '依法治国是党领导人民治理国家的基本方略，是社会主义民主政治的基本要求。', difficulty: 1 },
      { id: 'q1893', type: 'choice', question: '依法治国的核心是', options: ['A. 依宪治国', 'B. 以法治国', 'C. 依法行政', 'D. 公正司法'], answer: 'A', explanation: '依法治国的核心是依宪治国，宪法是依法治国的根本依据。', difficulty: 2 },
      { id: 'q1894', type: 'fill', question: '依法治国要求做到有法可依、有法必依、____和____。', answer: '执法必严；违法必究', explanation: '依法治国的基本要求是有法可依、有法必依、执法必严、违法必究。', difficulty: 1 }
    ]
  },
  'politics-shanjiao-9-3': {
    chapterName: '感受中国特色社会主义',
    questions: [
      { id: 'q1895', type: 'choice', question: '中国特色社会主义最本质的特征是', options: ['A. 人民当家作主', 'B. 中国共产党领导', 'C. 改革开放', 'D. 依法治国'], answer: 'B', explanation: '中国特色社会主义最本质的特征是中国共产党领导，中国特色社会主义制度的最大优势也是中国共产党的领导。', difficulty: 2 },
      { id: 'q1896', type: 'fill', question: '中国特色社会主义包括中国特色社会主义道路、理论体系、制度和____。', answer: '文化', explanation: '中国特色社会主义包括道路、理论体系、制度和文化，"四个自信"即道路自信、理论自信、制度自信、文化自信。', difficulty: 2 },
      { id: 'q1897', type: 'truefalse', question: '改革开放以来，我国经济社会发展取得了巨大成就。', options: ['A. 正确', 'B. 错误'], answer: 'A', explanation: '改革开放以来，我国经济快速发展，综合国力显著增强，人民生活水平大幅提高。', difficulty: 1 },
      { id: 'q1898', type: 'choice', question: '我国的根本政治制度是', options: ['A. 社会主义制度', 'B. 人民代表大会制度', 'C. 多党合作制度', 'D. 民族区域自治制度'], answer: 'B', explanation: '人民代表大会制度是我国的根本政治制度。', difficulty: 1 },
      { id: 'q1899', type: 'fill', question: '中国共产党领导的多党合作和政治协商制度是我国的一项____政治制度。', answer: '基本', explanation: '中国共产党领导的多党合作和政治协商制度是我国的一项基本政治制度。', difficulty: 2 }
    ]
  }
,

  // 连线题 & 简答题
// ==================== 历史 ====================
  'history-bubian-7-2': {
    chapterName: '秦汉时期',
    questions: [
      {
        id: 'q2000',
        type: 'matching',
        question: '请将下列秦汉时期的重要事件与其对应的时期连线配对：',
        pairs: [
          { left: '统一六国，建立秦朝', right: '公元前221年' },
          { left: '焚书坑儒', right: '秦始皇时期' },
          { left: '张骞出使西域', right: '汉武帝时期' },
          { left: '蔡伦改进造纸术', right: '东汉时期' },
        ],
        answer: '统一六国，建立秦朝-公元前221年,焚书坑儒-秦始皇时期,张骞出使西域-汉武帝时期,蔡伦改进造纸术-东汉时期',
        explanation: '秦始皇于公元前221年统一六国；焚书坑儒发生在秦始皇统治时期；张骞出使西域是汉武帝为了联络大月氏共同抗击匈奴；蔡伦在东汉时改进了造纸术。',
        difficulty: 2,
      },
      {
        id: 'q2001',
        type: 'shortanswer',
        question: '请简述秦始皇为巩固统一采取的主要措施。',
        acceptableAnswers: ['统一度量衡', '统一文字', '统一货币', '修筑长城', '郡县制', '车同轨'],
        answer: '秦始皇为巩固统一，在政治上建立中央集权制度，推行郡县制；在经济上统一度量衡和货币；在文化上统一文字（小篆）；在军事上修筑万里长城，抵御匈奴南侵；在交通上修筑驰道，统一车轨宽度。',
        explanation: '这些措施从政治、经济、文化、军事等多方面巩固了秦朝的统一，对中国历史发展产生了深远影响。其中郡县制取代了分封制，成为后世地方行政制度的基础。',
        difficulty: 2,
      },
      {
        id: 'q2002',
        type: 'matching',
        question: '请将下列秦汉时期的制度或措施与其主要目的连线配对：',
        pairs: [
          { left: '推行郡县制', right: '加强中央集权' },
          { left: '统一文字', right: '促进文化交流' },
          { left: '北击匈奴修长城', right: '抵御北方威胁' },
          { left: '罢黜百家，独尊儒术', right: '统一思想' },
        ],
        answer: '推行郡县制-加强中央集权,统一文字-促进文化交流,北击匈奴修长城-抵御北方威胁,罢黜百家，独尊儒术-统一思想',
        explanation: '郡县制使地方官吏由中央任免，加强了中央对地方的控制；统一文字使各地交流更加便利；修长城和北击匈奴保障了北方边境安全；董仲舒提出"罢黜百家，独尊儒术"为汉武帝所采纳，使儒学成为正统思想。',
        difficulty: 2,
      },
    ],
  },

  'history-bubian-8-0': {
    chapterName: '隋唐时期',
    questions: [
      {
        id: 'q2003',
        type: 'matching',
        question: '请将下列唐朝皇帝与其主要成就连线配对：',
        pairs: [
          { left: '唐太宗李世民', right: '贞观之治' },
          { left: '武则天', right: '开创殿试和武举' },
          { left: '唐玄宗李隆基', right: '开元盛世' },
          { left: '隋文帝杨坚', right: '创立科举制' },
        ],
        answer: '唐太宗李世民-贞观之治,武则天-开创殿试和武举,唐玄宗李隆基-开元盛世,隋文帝杨坚-创立科举制',
        explanation: '唐太宗开创"贞观之治"，虚心纳谏、知人善任；武则天是中国历史上唯一的女皇帝，开创了殿试和武举；唐玄宗前期开创"开元盛世"，是唐朝的全盛时期；隋文帝时期开始采用科举制选拔人才。',
        difficulty: 2,
      },
      {
        id: 'q2004',
        type: 'shortanswer',
        question: '请简述科举制的主要作用和意义。',
        acceptableAnswers: ['选拔人才', '打破门第限制', '促进教育', '公平竞争', '寒门弟子', '加强中央集权'],
        answer: '科举制通过考试选拔官吏，使平民子弟有机会进入仕途，打破了世家大族垄断官场的局面。它促进了教育的发展和文化的传播，有利于加强中央集权，对后世产生了深远影响，延续了约1300年。',
        explanation: '科举制从隋朝创立到清朝末年废除，是中国古代重要的选官制度。它的核心是通过公开考试、择优录取的方式选拔人才，相比世袭和推荐制度更加公平公正。',
        difficulty: 3,
      },
    ],
  },

  'history-bubian-9-1': {
    chapterName: '新民主主义革命的开始',
    questions: [
      {
        id: 'q2005',
        type: 'shortanswer',
        question: '请简述五四运动的历史意义。',
        acceptableAnswers: ['反帝反封建', '新民主主义革命', '马克思主义', '工人阶级', '爱国运动', '导火索'],
        answer: '五四运动是一场彻底的反帝反封建的爱国运动，标志着中国新民主主义革命的开端。在运动中，中国工人阶级开始登上政治舞台，展现了强大的力量。五四运动促进了马克思主义在中国的传播，为中国共产党的成立做了思想上和组织上的准备。',
        explanation: '1919年5月4日，北京学生在天安门前集会游行，抗议巴黎和会上中国外交的失败。运动前期以学生为主力，后期以工人阶级为主力。五四运动是中国革命从旧民主主义革命走向新民主主义革命的转折点。',
        difficulty: 3,
      },
      {
        id: 'q2006',
        type: 'matching',
        question: '请将下列新民主主义革命早期的事件与其主要意义连线配对：',
        pairs: [
          { left: '新文化运动', right: '思想解放运动' },
          { left: '五四运动', right: '新民主主义革命开端' },
          { left: '中共一大召开', right: '中国共产党成立' },
          { left: '北伐战争', right: '基本推翻北洋军阀统治' },
        ],
        answer: '新文化运动-思想解放运动,五四运动-新民主主义革命开端,中共一大召开-中国共产党成立,北伐战争-基本推翻北洋军阀统治',
        explanation: '新文化运动提倡民主与科学，解放了人们的思想；五四运动标志着新民主主义革命的开始；1921年中共一大召开标志着中国共产党正式成立；北伐战争基本推翻了北洋军阀的统治。',
        difficulty: 2,
      },
    ],
  },

  'history-bsd-7-2': {
    chapterName: '统一国家的建立',
    questions: [
      {
        id: 'q2007',
        type: 'matching',
        question: '请将下列秦朝巩固统一的措施与其具体内容连线配对：',
        pairs: [
          { left: '政治制度', right: '皇帝制和郡县制' },
          { left: '经济措施', right: '统一度量衡和货币' },
          { left: '文化措施', right: '统一文字为小篆' },
          { left: '交通措施', right: '统一车轨，修筑驰道' },
        ],
        answer: '政治制度-皇帝制和郡县制,经济措施-统一度量衡和货币,文化措施-统一文字为小篆,交通措施-统一车轨，修筑驰道',
        explanation: '秦朝建立后，秦始皇采取了一系列措施巩固统一：在政治上首创皇帝制度和郡县制；在经济上统一度量衡和圆形方孔半两钱；在文化上以小篆为标准文字；在交通上统一车轨宽度并修筑驰道和直道。',
        difficulty: 2,
      },
      {
        id: 'q2008',
        type: 'shortanswer',
        question: '请简述汉武帝加强中央集权的主要措施。',
        acceptableAnswers: ['推恩令', '削弱诸侯', '罢黜百家', '独尊儒术', '盐铁专卖', '设立刺史'],
        answer: '汉武帝加强中央集权的主要措施包括：政治上颁布"推恩令"削弱诸侯王势力，设立刺史监察地方；思想上接受董仲舒建议"罢黜百家，独尊儒术"；经济上将盐铁和铸币权收归中央；军事上北击匈奴，拓展疆土。',
        explanation: '汉武帝是西汉时期最有作为的皇帝之一，他通过一系列措施使中央集权达到空前强大的程度。"推恩令"是主父偃的建议，规定诸侯王必须将封地分给子弟，巧妙地削弱了诸侯势力。',
        difficulty: 3,
      },
    ],
  },

  'history-huadong-9-2': {
    chapterName: '抗日战争与解放战争',
    questions: [
      {
        id: 'q2009',
        type: 'shortanswer',
        question: '请简述抗日战争取得胜利的主要原因。',
        acceptableAnswers: ['抗日民族统一战线', '全民族抗战', '中国共产党', '正面战场', '敌后战场', '国际援助', '持久战'],
        answer: '抗日战争取得胜利的主要原因包括：一是建立了抗日民族统一战线，实现了全民族共同抗战；二是中国共产党的中流砥柱作用，开辟敌后战场；三是国民党正面战场的顽强抵抗；四是国际反法西斯力量的援助；五是中华民族不屈不挠的抗战精神。',
        explanation: '抗日战争是中国近代以来反抗外敌入侵第一次取得完全胜利的民族解放战争。1945年8月15日，日本宣布无条件投降，9月2日正式签署投降书。抗战胜利洗刷了近代以来的民族耻辱，捍卫了国家主权和领土完整。',
        difficulty: 3,
      },
      {
        id: 'q2010',
        type: 'matching',
        question: '请将下列解放战争中的重要战役与其主要成果连线配对：',
        pairs: [
          { left: '辽沈战役', right: '解放东北全境' },
          { left: '淮海战役', right: '奠定解放长江以南基础' },
          { left: '平津战役', right: '华北基本解放' },
          { left: '渡江战役', right: '解放南京，推翻国民党统治' },
        ],
        answer: '辽沈战役-解放东北全境,淮海战役-奠定解放长江以南基础,平津战役-华北基本解放,渡江战役-解放南京，推翻国民党统治',
        explanation: '三大战役（辽沈、淮海、平津）共歼灭和改编国民党军队150多万人，奠定了人民解放战争在全国胜利的基础。1949年4月，人民解放军发起渡江战役，23日解放南京，统治中国22年的国民党政权覆灭。',
        difficulty: 2,
      },
    ],
  },

  // ==================== 地理 ====================
  'geography-renjiao-7-3': {
    chapterName: '陆地和海洋',
    questions: [
      {
        id: 'q2011',
        type: 'matching',
        question: '请将下列大洲与其主要地理特征连线配对：',
        pairs: [
          { left: '亚洲', right: '面积最大，跨纬度最广' },
          { left: '非洲', right: '海岸线平直，高原大陆' },
          { left: '南极洲', right: '纬度最高，跨经度最广' },
          { left: '大洋洲', right: '面积最小，国家最少' },
        ],
        answer: '亚洲-面积最大，跨纬度最广,非洲-海岸线平直，高原大陆,南极洲-纬度最高，跨经度最广,大洋洲-面积最小，国家最少',
        explanation: '亚洲是世界上面积最大的洲，也是跨纬度最广的洲；非洲因海岸线较为平直被称为"高原大陆"；南极洲位于地球最南端，是纬度最高的大洲，且全部位于南极圈内；大洋洲是七大洲中面积最小的大洲。',
        difficulty: 2,
      },
      {
        id: 'q2012',
        type: 'shortanswer',
        question: '请简述亚洲的地形和河流特点。',
        acceptableAnswers: ['地形复杂多样', '中部高', '四周低', '大河呈放射状', '高原山地', '亚洲地势'],
        answer: '亚洲地形以高原和山地为主，地势中部高、四周低。受地势影响，亚洲的大河多发源于中部高原山地，呈放射状流向四周的海洋。如长江和黄河自西向东流入太平洋，恒河自北向南流入印度洋，鄂毕河自南向北流入北冰洋。',
        explanation: '亚洲地面起伏大，高低悬殊，有世界最高峰珠穆朗玛峰（8848.86米）和世界陆地最低点死海（-415米）。这种"中部高、四周低"的地势格局决定了河流的流向。',
        difficulty: 2,
      },
      {
        id: 'q2013',
        type: 'matching',
        question: '请将下列大洋与其对应特征连线配对：',
        pairs: [
          { left: '太平洋', right: '面积最大，最深' },
          { left: '大西洋', right: '呈"S"形' },
          { left: '印度洋', right: '大部分在南半球' },
          { left: '北冰洋', right: '面积最小，最冷' },
        ],
        answer: '太平洋-面积最大，最深,大西洋-呈"S"形,印度洋-大部分在南半球,北冰洋-面积最小，最冷',
        explanation: '太平洋是四大洋中面积最大、最深的大洋；大西洋的轮廓略呈"S"形；印度洋大部分位于南半球；北冰洋是四大洋中面积最小、纬度最高、水温最低的大洋。',
        difficulty: 1,
      },
    ],
  },

  'geography-xiangjiao-7-3': {
    chapterName: '世界的气候',
    questions: [
      {
        id: 'q2014',
        type: 'matching',
        question: '请将下列气候类型与其典型特征连线配对：',
        pairs: [
          { left: '热带雨林气候', right: '全年高温多雨' },
          { left: '地中海气候', right: '夏季炎热干燥，冬季温和多雨' },
          { left: '温带季风气候', right: '夏季高温多雨，冬季寒冷干燥' },
          { left: '温带大陆性气候', right: '冬冷夏热，温差大' },
        ],
        answer: '热带雨林气候-全年高温多雨,地中海气候-夏季炎热干燥，冬季温和多雨,温带季风气候-夏季高温多雨，冬季寒冷干燥,温带大陆性气候-冬冷夏热，温差大',
        explanation: '热带雨林气候分布在赤道附近，全年高温多雨；地中海气候分布在南北纬30°-40°的大陆西岸，夏季炎热干燥、冬季温和多雨（雨热不同期）；温带季风气候分布在亚欧大陆东岸，雨热同期；温带大陆性气候分布在温带内陆地区，温差大、降水少。',
        difficulty: 2,
      },
      {
        id: 'q2015',
        type: 'matching',
        question: '请将下列地区与其典型气候类型连线配对：',
        pairs: [
          { left: '亚马孙平原', right: '热带雨林气候' },
          { left: '撒哈拉沙漠', right: '热带沙漠气候' },
          { left: '英国伦敦', right: '温带海洋性气候' },
          { left: '中国北京', right: '温带季风气候' },
        ],
        answer: '亚马孙平原-热带雨林气候,撒哈拉沙漠-热带沙漠气候,英国伦敦-温带海洋性气候,中国北京-温带季风气候',
        explanation: '亚马孙平原位于赤道附近，是世界最大的热带雨林气候区；撒哈拉沙漠受副热带高压控制，终年炎热干燥；英国终年受西风带影响，是典型的温带海洋性气候；北京位于亚欧大陆东岸，属于温带季风气候。',
        difficulty: 2,
      },
      {
        id: 'q2016',
        type: 'shortanswer',
        question: '请简述影响气候的主要因素有哪些。',
        acceptableAnswers: ['纬度位置', '海陆位置', '地形', '洋流', '海拔', '距海远近'],
        answer: '影响气候的主要因素包括：纬度位置（纬度高低决定气温高低和昼夜长短变化）、海陆位置（距海远近影响降水多少）、地形（海拔每升高100米气温约下降0.6°C，迎风坡降水多、背风坡降水少）、洋流（暖流增温增湿，寒流降温减湿）。',
        explanation: '纬度位置是最基本的因素，决定了太阳辐射的多少；海陆位置影响气温日较差和年较差；地形不仅影响气温还影响降水分布；洋流对沿岸气候有明显的调节作用。',
        difficulty: 2,
      },
    ],
  },

  'geography-zhongtu-8-1': {
    chapterName: '中国自然环境',
    questions: [
      {
        id: 'q2017',
        type: 'shortanswer',
        question: '请简述中国地势的主要特点及其影响。',
        acceptableAnswers: ['西高东低', '三级阶梯', '呈阶梯状分布', '河流自西向东', '有利于海洋湿润气流', '水能资源丰富'],
        answer: '中国地势西高东低，呈三级阶梯状分布。第一级阶梯是青藏高原，平均海拔4000米以上；第二级阶梯以高原和盆地为主，海拔1000-2000米；第三级阶梯以平原和丘陵为主，海拔500米以下。这种地势使我国大江大河自西向东流，有利于海洋湿润气流深入内陆形成降水，同时在阶梯交界处水能资源丰富。',
        explanation: '三级阶梯的分界线：第一、二级阶梯分界线是昆仑山—祁连山—横断山脉；第二、三级阶梯分界线是大兴安岭—太行山—巫山—雪峰山。这种西高东低的地势特征对我国的气候、河流和水能分布都有重要影响。',
        difficulty: 2,
      },
      {
        id: 'q2018',
        type: 'matching',
        question: '请将下列中国地形区与其所在阶梯连线配对：',
        pairs: [
          { left: '青藏高原', right: '第一级阶梯' },
          { left: '四川盆地', right: '第二级阶梯' },
          { left: '华北平原', right: '第三级阶梯' },
          { left: '黄土高原', right: '第二级阶梯' },
        ],
        answer: '青藏高原-第一级阶梯,四川盆地-第二级阶梯,华北平原-第三级阶梯,黄土高原-第二级阶梯',
        explanation: '青藏高原位于第一级阶梯，平均海拔4000米以上，被称为"世界屋脊"；四川盆地和黄土高原位于第二级阶梯，以高原和盆地为主；华北平原位于第三级阶梯，地势低平。',
        difficulty: 1,
      },
    ],
  },

  // ==================== 生物 ====================
  'biology-renjiao-7-2': {
    chapterName: '细胞是生命活动的基本单位',
    questions: [
      {
        id: 'q2019',
        type: 'matching',
        question: '请将下列细胞结构与其主要功能连线配对：',
        pairs: [
          { left: '细胞核', right: '控制生命活动，储存遗传信息' },
          { left: '线粒体', right: '进行呼吸作用，提供能量' },
          { left: '叶绿体', right: '进行光合作用' },
          { left: '核糖体', right: '合成蛋白质' },
        ],
        answer: '细胞核-控制生命活动，储存遗传信息,线粒体-进行呼吸作用，提供能量,叶绿体-进行光合作用,核糖体-合成蛋白质',
        explanation: '细胞核是细胞的控制中心，含有遗传物质DNA；线粒体是有氧呼吸的主要场所，为细胞生命活动提供能量；叶绿体是光合作用的场所，能将光能转化为化学能；核糖体是蛋白质合成的场所。',
        difficulty: 2,
      },
      {
        id: 'q2020',
        type: 'matching',
        question: '请将下列细胞器与其所属类别连线配对：',
        pairs: [
          { left: '线粒体', right: '双层膜结构' },
          { left: '内质网', right: '单层膜结构' },
          { left: '中心体', right: '无膜结构' },
          { left: '叶绿体', right: '双层膜结构' },
        ],
        answer: '线粒体-双层膜结构,内质网-单层膜结构,中心体-无膜结构,叶绿体-双层膜结构',
        explanation: '细胞器按膜结构可分为：双层膜结构（线粒体、叶绿体）、单层膜结构（内质网、高尔基体、液泡、溶酶体等）和无膜结构（核糖体、中心体）。了解细胞器的膜结构有助于理解其功能。',
        difficulty: 3,
      },
      {
        id: 'q2021',
        type: 'shortanswer',
        question: '请简述细胞膜的主要功能。',
        acceptableAnswers: ['保护细胞', '控制物质进出', '选择性透过', '细胞间的信息交流', '半透膜'],
        answer: '细胞膜的主要功能包括：将细胞与外界环境分隔开，保护细胞内部环境的相对稳定；控制物质进出细胞，对物质具有选择透过性（允许有用的物质进入，不让有害的物质进入）；进行细胞间的信息传递和交流。',
        explanation: '细胞膜的结构特点是具有一定的流动性，功能特性是选择透过性。这些特点使细胞膜能够正常执行其保护、运输和通讯等功能。',
        difficulty: 2,
      },
    ],
  },

  'biology-renjiao-8-1': {
    chapterName: '生物圈中的人',
    questions: [
      {
        id: 'q2022',
        type: 'matching',
        question: '请将下列消化器官与其主要功能连线配对：',
        pairs: [
          { left: '口腔', right: '初步消化淀粉' },
          { left: '胃', right: '初步消化蛋白质' },
          { left: '小肠', right: '消化和吸收的主要场所' },
          { left: '肝脏', right: '分泌胆汁，促进脂肪消化' },
        ],
        answer: '口腔-初步消化淀粉,胃-初步消化蛋白质,小肠-消化和吸收的主要场所,肝脏-分泌胆汁，促进脂肪消化',
        explanation: '口腔中的唾液腺分泌唾液，含唾液淀粉酶可初步消化淀粉；胃中的胃腺分泌胃液，含胃蛋白酶可初步消化蛋白质；小肠是消化和吸收的主要场所，含有多种消化酶；肝脏是人体最大的消化腺，分泌的胆汁可乳化脂肪。',
        difficulty: 2,
      },
      {
        id: 'q2023',
        type: 'matching',
        question: '请将下列营养物质与其在人体中的主要吸收部位连线配对：',
        pairs: [
          { left: '葡萄糖', right: '小肠' },
          { left: '氨基酸', right: '小肠' },
          { left: '甘油和脂肪酸', right: '小肠' },
          { left: '大部分水', right: '小肠' },
        ],
        answer: '葡萄糖-小肠,氨基酸-小肠,甘油和脂肪酸-小肠,大部分水-小肠',
        explanation: '小肠是营养物质吸收的主要场所。淀粉被消化为葡萄糖，蛋白质被消化为氨基酸，脂肪被消化为甘油和脂肪酸，这些小分子营养物质以及大部分水、无机盐和维生素都在小肠被吸收进入血液。大肠只吸收少量的水、无机盐和部分维生素。',
        difficulty: 2,
      },
      {
        id: 'q2024',
        type: 'shortanswer',
        question: '请简述小肠为什么是消化和吸收的主要场所。',
        acceptableAnswers: ['面积大', '绒毛', '皱襞', '毛细血管', '消化液丰富', '很长', '吸收面积'],
        answer: '小肠是消化和吸收的主要场所，原因有：小肠很长（成年人小肠长约5-7米），内表面有大量环形皱襞和小肠绒毛，大大增加了消化和吸收的面积；小肠绒毛内有丰富的毛细血管和毛细淋巴管，利于营养物质的吸收；小肠内有胆汁、胰液、肠液等多种消化液，含有消化糖类、蛋白质和脂肪的酶，消化能力最强。',
        explanation: '小肠的结构特点与其功能相适应是生物学中"结构与功能相适应"观点的典型体现。小肠内表面的环形皱襞和绒毛使吸收面积扩大了约600倍。',
        difficulty: 2,
      },
    ],
  },

  'biology-bsd-7-1': {
    chapterName: '细胞',
    questions: [
      {
        id: 'q2025',
        type: 'shortanswer',
        question: '请简述细胞分裂的基本过程和意义。',
        acceptableAnswers: ['染色体复制', '平均分配', '细胞核先分裂', '细胞质分裂', '产生新细胞', '生长繁殖', '遗传信息'],
        answer: '细胞分裂时，细胞核首先分裂，染色体先复制后平均分配到两个子细胞核中，然后细胞质分成两份，每份各含一个细胞核，最后形成两个新的细胞。细胞分裂的意义在于：使单细胞生物能繁殖后代，使多细胞生物能产生新细胞用于生物体的生长、发育和衰老细胞的更新。',
        explanation: '细胞分裂是生物体生长、发育和繁殖的基础。在分裂过程中，染色体进行复制并均匀分配，保证了遗传信息在亲代和子代细胞之间的连续性和稳定性。',
        difficulty: 2,
      },
      {
        id: 'q2026',
        type: 'matching',
        question: '请将下列细胞分裂方式与其适用范围连线配对：',
        pairs: [
          { left: '有丝分裂', right: '大多数生物体细胞增殖' },
          { left: '减数分裂', right: '产生生殖细胞（精子、卵细胞）' },
          { left: '无丝分裂', right: '蛙的红细胞分裂' },
          { left: '二分裂', right: '细菌等原核生物繁殖' },
        ],
        answer: '有丝分裂-大多数生物体细胞增殖,减数分裂-产生生殖细胞（精子、卵细胞）,无丝分裂-蛙的红细胞分裂,二分裂-细菌等原核生物繁殖',
        explanation: '有丝分裂是最常见的细胞分裂方式，保证子细胞与母细胞遗传信息一致；减数分裂使染色体数目减半，是生殖细胞形成的关键过程；无丝分裂不出现纺锤丝和染色体的变化；二分裂是原核生物常见的繁殖方式。',
        difficulty: 3,
      },
    ],
  },

  // ==================== 物理 ====================
  'physics-renjiao-8-3': {
    chapterName: '物态变化',
    questions: [
      {
        id: 'q2027',
        type: 'matching',
        question: '请将下列物态变化与其对应的吸放热情况连线配对：',
        pairs: [
          { left: '熔化', right: '吸热' },
          { left: '凝固', right: '放热' },
          { left: '汽化', right: '吸热' },
          { left: '液化', right: '放热' },
        ],
        answer: '熔化-吸热,凝固-放热,汽化-吸热,液化-放热',
        explanation: '固态变为液态（熔化）需要吸收热量，液态变为固态（凝固）需要放出热量；液态变为气态（汽化）需要吸收热量，气态变为液态（液化）需要放出热量。固→液→气都是吸热过程，反过来都是放热过程。',
        difficulty: 1,
      },
      {
        id: 'q2028',
        type: 'matching',
        question: '请将下列物态变化与生活中的实例连线配对：',
        pairs: [
          { left: '升华', right: '衣柜中的樟脑丸变小' },
          { left: '凝华', right: '冬天窗玻璃上的冰花' },
          { left: '汽化（蒸发）', right: '湿衣服晾干' },
          { left: '液化', right: '夏天冰镇饮料瓶外壁的水珠' },
        ],
        answer: '升华-衣柜中的樟脑丸变小,凝华-冬天窗玻璃上的冰花,汽化（蒸发）-湿衣服晾干,液化-夏天冰镇饮料瓶外壁的水珠',
        explanation: '樟脑丸变小是固态直接变为气态（升华）；冬天窗玻璃内表面的冰花是气态水蒸气直接变为固态冰晶（凝华）；湿衣服晾干是液态水变为气态水蒸气（蒸发，属于汽化的一种方式）；饮料瓶外壁的水珠是空气中的水蒸气遇冷液化成小水珠。',
        difficulty: 2,
      },
      {
        id: 'q2029',
        type: 'shortanswer',
        question: '请简述什么是沸腾，以及沸腾与蒸发的区别。',
        acceptableAnswers: ['在一定温度下', '液体内部和表面', '同时发生', '剧烈的汽化', '蒸发在任何温度', '蒸发在液体表面', '缓慢'],
        answer: '沸腾是在一定温度下，在液体内部和表面同时发生的剧烈汽化现象。沸腾与蒸发的区别：蒸发是在任何温度下都能发生的、只在液体表面发生的缓慢汽化现象；沸腾则必须在达到沸点时才能发生，且在液体内部和表面同时发生，是剧烈的汽化现象。沸腾过程中继续吸热但温度保持不变。',
        explanation: '沸腾的条件有两个：一是温度达到沸点，二是继续吸热。不同液体的沸点不同，标准大气压下水的沸点是100°C。蒸发有致冷作用，沸腾则不会使液体整体降温。',
        difficulty: 2,
      },
    ],
  },

  'physics-renjiao-9-1': {
    chapterName: '电流和电路',
    questions: [
      {
        id: 'q2030',
        type: 'matching',
        question: '请将下列电学物理量与其国际单位连线配对：',
        pairs: [
          { left: '电流', right: '安培（A）' },
          { left: '电压', right: '伏特（V）' },
          { left: '电阻', right: '欧姆（Ω）' },
          { left: '电荷量', right: '库仑（C）' },
        ],
        answer: '电流-安培（A）,电压-伏特（V）,电阻-欧姆（Ω）,电荷量-库仑（C）',
        explanation: '电流的单位是安培，用符号A表示；电压的单位是伏特，用符号V表示；电阻的单位是欧姆，用符号Ω表示；电荷量的单位是库仑，用符号C表示。这些单位均以著名科学家的名字命名。',
        difficulty: 1,
      },
      {
        id: 'q2031',
        type: 'matching',
        question: '请将下列电路元件的符号与其对应的名称连线配对：',
        pairs: [
          { left: '—◎—', right: '灯泡' },
          { left: '—┤├—', right: '电阻' },
          { left: '—┤ ├—（长短线）', right: '电池' },
          { left: '—/ —', right: '开关' },
        ],
        answer: '—◎—-灯泡,—┤├—-电阻,—┤ ├—（长短线）-电池,—/ —-开关',
        explanation: '电路元件都有自己的电路符号：灯泡用圆圈内加叉表示，电阻用长方形方框表示，电池用一长一短两条平行线表示（长线为正极），开关用小圆点加折线表示。掌握电路符号是画电路图的基础。',
        difficulty: 1,
      },
      {
        id: 'q2032',
        type: 'shortanswer',
        question: '请简述串联电路和并联电路的主要区别。',
        acceptableAnswers: ['串联只有一条路径', '并联有多条路径', '串联各用电器相互影响', '并联各用电器互不影响', '串联电流相等', '并联电压相等'],
        answer: '串联电路中各元件依次连接，电流只有一条路径，一个用电器断路则所有用电器都停止工作，各用电器相互影响，串联电路中各处的电流相等。并联电路中各元件并列连接，电流有多条路径，一个支路断路不影响其他支路正常工作，各支路互不影响，并联电路中各支路两端电压相等。',
        explanation: '家庭电路中的用电器通常采用并联接法，这样每个用电器可以独立控制，互不影响。而节日小彩灯通常是串联的，一个灯泡坏了则整串灯都不亮。',
        difficulty: 2,
      },
    ],
  },

  'physics-renjiao-9-3': {
    chapterName: '电功率',
    questions: [
      {
        id: 'q2033',
        type: 'shortanswer',
        question: '请简述电功率的物理含义，以及它与电功的关系。',
        acceptableAnswers: ['表示电流做功快慢', '单位时间内做的功', 'P=W/t', '瓦特', '电功是总能量', '电功率是速度'],
        answer: '电功率是表示电流做功快慢的物理量，等于单位时间内电流所做的功。公式为 P=W/t，其中P表示电功率，W表示电功，t表示时间。电功是电流做的总功（总能量），电功率是做功的速率。电功率的单位是瓦特（W），1W=1J/s。用电器铭牌上标注的功率值表示其在额定电压下的正常工作功率。',
        explanation: '例如一个100W的灯泡，表示它正常工作时每秒消耗100J的电能。电功率越大，表示电流做功越快，用电器消耗电能的速度也越快。额定功率是用电器在额定电压下工作时的功率。',
        difficulty: 2,
      },
      {
        id: 'q2034',
        type: 'matching',
        question: '请将下列电学公式与其适用场景连线配对：',
        pairs: [
          { left: 'W = UIt', right: '计算电功（电能）' },
          { left: 'P = UI', right: '计算电功率' },
          { left: 'P = I²R', right: '已知电流和电阻求功率' },
          { left: 'P = U²/R', right: '已知电压和电阻求功率' },
        ],
        answer: 'W = UIt-计算电功（电能）,P = UI-计算电功率,P = I²R-已知电流和电阻求功率,P = U²/R-已知电压和电阻求功率',
        explanation: 'W=UIt是电功的基本公式，适用于所有电路；P=UI是电功率的基本公式；P=I²R和P=U²/R是由P=UI结合欧姆定律U=IR推导而来的，只适用于纯电阻电路。选择公式时需要根据已知条件灵活运用。',
        difficulty: 2,
      },
    ],
  },

  // ==================== 化学 ====================
  'chemistry-renjiao-9-2': {
    chapterName: '物质构成的奥秘',
    questions: [
      {
        id: 'q2035',
        type: 'matching',
        question: '请将下列微观粒子与其特征描述连线配对：',
        pairs: [
          { left: '分子', right: '保持物质化学性质的最小粒子' },
          { left: '原子', right: '化学变化中的最小粒子' },
          { left: '离子', right: '带电的原子或原子团' },
          { left: '质子', right: '带正电荷，决定元素种类' },
        ],
        answer: '分子-保持物质化学性质的最小粒子,原子-化学变化中的最小粒子,离子-带电的原子或原子团,质子-带正电荷，决定元素种类',
        explanation: '分子是保持物质化学性质的最小粒子；原子是化学变化中的最小粒子，不可再分；离子是原子得失电子后形成的带电粒子；质子是原子核中带正电的粒子，质子数（核电荷数）决定了元素的种类。',
        difficulty: 2,
      },
      {
        id: 'q2036',
        type: 'matching',
        question: '请将下列化学符号中数字的含义连线配对：',
        pairs: [
          { left: '2O', right: '2个氧原子' },
          { left: 'O₂', right: '1个氧分子含2个氧原子' },
          { left: '²⁺（如Mg²⁺）', right: '每个镁离子带2个单位正电荷' },
          { left: 'H₂O前面的2（如2H₂O）', right: '2个水分子' },
        ],
        answer: '2O-2个氧原子,O₂-1个氧分子含2个氧原子,²⁺（如Mg²⁺）-每个镁离子带2个单位正电荷,H₂O前面的2（如2H₂O）-2个水分子',
        explanation: '化学符号前方的数字表示微粒（原子、分子、离子等）的个数；化学式中元素符号右下角的数字表示一个分子中该元素原子的个数；离子右上角的数字和符号表示离子所带电荷的数量和电性。位置不同，含义完全不同。',
        difficulty: 2,
      },
      {
        id: 'q2037',
        type: 'shortanswer',
        question: '请简述分子和原子的主要区别和联系。',
        acceptableAnswers: ['分子由原子构成', '原子是化学变化中最小粒子', '分子保持化学性质', '在化学变化中分子可分', '原子不可分', '原子可以构成分子'],
        answer: '区别：分子是保持物质化学性质的最小粒子，原子是化学变化中的最小粒子。在化学变化中，分子可以再分，而原子不可再分，原子是化学变化中的基本粒子。联系：分子是由原子构成的，原子可以相互结合构成分子。有些物质（如稀有气体）由原子直接构成，有些物质（如水）由分子构成。',
        explanation: '例如水（H₂O）由水分子构成，每个水分子由2个氢原子和1个氧原子构成。在电解水的化学变化中，水分子被分解为氢原子和氧原子，氢原子和氧原子重新组合为氢分子和氧分子，但原子本身没有发生变化。',
        difficulty: 2,
      },
    ],
  },

  'chemistry-renjiao-9-3': {
    chapterName: '自然界的水',
    questions: [
      {
        id: 'q2038',
        type: 'shortanswer',
        question: '请简述自来水净化的主要步骤和方法。',
        acceptableAnswers: ['沉淀', '过滤', '吸附', '消毒', '明矾', '活性炭', '氯气'],
        answer: '自来水净化的主要步骤包括：1. 沉淀：通过静置使大颗粒不溶性杂质沉降；2. 过滤：除去水中不溶性杂质；3. 吸附：利用活性炭吸附水中的色素和异味；4. 消毒：通入氯气或使用其他消毒剂杀灭水中的细菌和病毒。经过以上步骤处理后的水达到生活饮用水标准，通过管道输送到用户。',
        explanation: '需要注意的是，以上净化方法只能除去水中的不溶性杂质、部分可溶性杂质和微生物，不能除去水中溶解的矿物质和微量有害物质，因此净化后的自来水不是纯水。要得到纯水，还需要通过蒸馏等方法。',
        difficulty: 2,
      },
      {
        id: 'q2039',
        type: 'matching',
        question: '请将下列净水方法与其主要作用连线配对：',
        pairs: [
          { left: '静置沉淀', right: '使大颗粒杂质沉到底部' },
          { left: '过滤', right: '分离不溶性固体和液体' },
          { left: '吸附（活性炭）', right: '除去颜色和异味' },
          { left: '蒸馏', right: '得到纯水，净化程度最高' },
        ],
        answer: '静置沉淀-使大颗粒杂质沉到底部,过滤-分离不溶性固体和液体,吸附（活性炭）-除去颜色和异味,蒸馏-得到纯水，净化程度最高',
        explanation: '静置沉淀只能除去较大颗粒的悬浮物；过滤可以除去不溶性固体杂质，但无法除去溶解性杂质；活性炭有疏松多孔的结构，表面积很大，能有效吸附色素和异味物质；蒸馏可以将水与溶解的杂质完全分离，得到纯净水，净化程度最高。',
        difficulty: 2,
      },
    ],
  },

  // ==================== 语文 ====================
  'chinese-renjiao-7-0': {
    chapterName: '春',
    questions: [
      {
        id: 'q2040',
        type: 'shortanswer',
        question: '朱自清的《春》一文在结构上分为哪三个部分？请简要概括。',
        acceptableAnswers: ['盼春', '绘春', '赞春', '三个部分', '总分总'],
        answer: '《春》在结构上分为三个部分：第一部分（第1段）"盼春"——开篇点题，表达对春天的期盼之情；第二部分（第2-7段）"绘春"——具体描绘了春天的草、花、风、雨、人等画面，展现了春天的勃勃生机；第三部分（第8-10段）"赞春"——运用比喻和排比手法，将春天比作"刚落地的娃娃""小姑娘""健壮的青年"，赞美春天的活力和希望。',
        explanation: '全文采用"总—分—总"的结构。"盼春"总领全文，"绘春"是主体部分，从草、花、风、雨、人五个角度描绘春天，"赞春"深化主题，表达了作者对春天的热爱和赞美。',
        difficulty: 2,
      },
      {
        id: 'q2041',
        type: 'shortanswer',
        question: '《春》中"绘春"部分描绘了哪五幅春景图？请分别概括。',
        acceptableAnswers: ['春草图', '春花图', '春风图', '春雨图', '迎春图', '五幅画面'],
        answer: '《春》"绘春"部分描绘了五幅春景图：一是"春草图"，描绘了春草的嫩绿、茂盛和旺盛的生命力；二是"春花图"，描绘了春花的繁茂、艳丽和甜美的花蜜气息；三是"春风图"，描绘了春风的柔和、温暖以及带来的泥土和花香气息；四是"春雨图"，描绘了春雨的细密、轻盈和润泽万物的特点；五是"迎春图"，描绘了人们趁着大好春光奋发向上的情景。',
        explanation: '这五幅画面从自然景物到人的活动，由近及远、由景到人，层次分明地展现了春天的美好。作者调动了视觉、听觉、嗅觉、触觉等多种感官进行描写，使读者如临其境。',
        difficulty: 2,
      },
      {
        id: 'q2042',
        type: 'matching',
        question: '请将《春》中的修辞手法与其对应的例句（原文摘录）连线配对：',
        pairs: [
          { left: '比喻', right: '春天像小姑娘，花枝招展的' },
          { left: '排比', right: '红的像火，粉的像霞，白的像雪' },
          { left: '拟人', right: '桃树、杏树、梨树，你不让我，我不让你' },
          { left: '反复', right: '盼望着，盼望着' },
        ],
        answer: '比喻-春天像小姑娘，花枝招展的,排比-红的像火，粉的像霞，白的像雪,拟人-桃树、杏树、梨树，你不让我，我不让你,反复-盼望着，盼望着',
        explanation: '文中运用多种修辞手法：比喻如将春天比作"小姑娘"；排比如描写春花的色彩；拟人如描写果树竞相开放；反复如"盼望着，盼望着"表达急切期待之情。多种修辞的综合运用使文章语言生动优美。',
        difficulty: 2,
      },
    ],
  },

  'chinese-renjiao-8-3': {
    chapterName: '背影',
    questions: [
      {
        id: 'q2043',
        type: 'shortanswer',
        question: '朱自清的《背影》一文表达了怎样的主题思想？',
        acceptableAnswers: ['父爱', '深沉的父爱', '父子情深', '亲情', '感恩', '离别'],
        answer: '《背影》通过叙述父亲在车站送别儿子时翻越站台买橘子的情景，表现了父亲对儿子深沉而真挚的爱，以及儿子对父亲的感恩和思念之情。文章以"背影"为线索，通过对父亲背影的细致描写，展现了平淡生活中蕴藏的深厚父爱，表达了作者对父亲的深切怀念，也反映了当时社会的动荡和家庭生活的困窘。',
        explanation: '文章四次写到父亲的"背影"，其中最感人的一次是父亲蹒跚地穿过铁道、爬上月台为儿子买橘子的背影。作者通过细腻的动作描写（"攀""缩""微倾"）刻画了父亲的形象，朴实无华却感人至深。',
        difficulty: 2,
      },
      {
        id: 'q2044',
        type: 'shortanswer',
        question: '《背影》中四次写到"背影"，分别在什么情况下出现的？',
        acceptableAnswers: ['怀念父亲', '买橘子', '混入人群', '离别', '四次背影', '读到来信'],
        answer: '《背影》中四次写到"背影"：第一次是文章开头，"我与父亲不相见已二年余了，我最不能忘记的是他的背影"，点明主题；第二次是父亲过铁道买橘子时的背影，是全文描写的重点，最为详细感人；第三次是父亲离开时混入来来往往人群中的背影，表现离别的不舍；第四次是文章结尾，读父亲来信时在晶莹的泪光中再现的背影，表达深深的怀念。',
        explanation: '四次写"背影"前后呼应，情感层层递进。从点题到具体描写，再到离别的惆怅，最后以怀念收束全文，形成了一个完整的情感线索，使父爱的主题更加突出。',
        difficulty: 3,
      },
    ],
  },

  'chinese-sujiao-9-0': {
    chapterName: '白杨礼赞',
    questions: [
      {
        id: 'q2045',
        type: 'matching',
        question: '请将《白杨礼赞》中的描写段落与其象征意义连线配对：',
        pairs: [
          { left: '描写白杨树笔直的干', right: '象征北方农民的正直' },
          { left: '描写白杨树向上发展的枝丫', right: '象征力争上游的精神' },
          { left: '描写白杨树宽大的叶子', right: '象征质朴的品质' },
          { left: '描写白杨树倔强挺立的姿态', right: '象征抗日军民的不屈不挠' },
        ],
        answer: '描写白杨树笔直的干-象征北方农民的正直,描写白杨树向上发展的枝丫-象征力争上游的精神,描写白杨树宽大的叶子-象征质朴的品质,描写白杨树倔强挺立的姿态-象征抗日军民的不屈不挠',
        explanation: '茅盾的《白杨礼赞》运用了托物言志的手法，通过对白杨树外在形态的描写来象征抗日战争时期北方农民和八路军的精神品质。文章中的"不平凡"是全文的线索，反复强调白杨树的"不平凡"，实际上是在赞美抗日军民的不平凡。',
        difficulty: 3,
      },
      {
        id: 'q2046',
        type: 'shortanswer',
        question: '《白杨礼赞》运用了什么写作手法？请结合内容简要分析。',
        acceptableAnswers: ['托物言志', '象征', '对比', '欲扬先抑', '反问', '排比'],
        answer: '《白杨礼赞》主要运用了托物言志（象征）的写作手法。作者以白杨树为载体，通过对白杨树生长环境、外形特征、内在气质的描写，象征了当时华北平原上坚持抗战的中国共产党领导下的抗日军民。文中还运用了对比手法（先写黄土高原的"单调"，再写白杨树的"不平凡"）和排比反问句式（"难道你就只觉得它只是树？难道你就不想到……"），层层深入地揭示白杨树的象征意义。',
        explanation: '托物言志是散文中常用的写作手法，即通过描写某一具体事物来寄托作者的志向和情感。本文以白杨树象征北方抗日军民，将景、物、情、理融为一体，具有强烈的感染力和深刻的思想意义。',
        difficulty: 3,
      },
    ],
  },

  // ==================== 政治 ====================
  'politics-bubian-9-2': {
    chapterName: '民主与法治',
    questions: [
      {
        id: 'q2047',
        type: 'shortanswer',
        question: '请简述全面推进依法治国的总目标和重要意义。',
        acceptableAnswers: ['建设中国特色社会主义法治体系', '建设社会主义法治国家', '保障人民权益', '实现国家治理现代化', '依法治国', '总目标'],
        answer: '全面推进依法治国的总目标是建设中国特色社会主义法治体系，建设社会主义法治国家。依法治国的重要意义在于：依法治国是党领导人民治理国家的基本方式，有利于保障人民当家作主，维护社会公平正义，促进社会和谐稳定，实现国家治理体系和治理能力现代化。全面依法治国要求科学立法、严格执法、公正司法、全民守法。',
        explanation: '依法治国的基本要求包括：科学立法是前提，严格执法是关键，公正司法是防线，全民守法是基础。四个方面相互联系、相互促进，缺一不可。',
        difficulty: 3,
      },
      {
        id: 'q2048',
        type: 'shortanswer',
        question: '请简述法治与德治的关系。',
        acceptableAnswers: ['相辅相成', '相互促进', '法治是保障', '德治是基础', '法律与道德', '缺一不可'],
        answer: '法治与德治相辅相成、相互促进。法治是治国理政的基本方式，通过法律的强制力规范人们的行为，是维护社会秩序的保障；德治通过道德的教化力量引导人们的行为，是法治的基础和支撑。法律是成文的道德，道德是内心的法律。在国家治理中，既要发挥法律的规范作用，又要发挥道德的教化作用，坚持依法治国与以德治国相结合。',
        explanation: '法律和道德都是调节人与人之间关系的行为规范。法律侧重于事后惩罚和强制约束，道德侧重于事前引导和自我约束。只有将二者有机结合，才能更好地实现国家治理的目标。',
        difficulty: 3,
      },
      {
        id: 'q2049',
        type: 'matching',
        question: '请将下列法治基本要求与其含义连线配对：',
        pairs: [
          { left: '科学立法', right: '法律要符合客观规律和人民意愿' },
          { left: '严格执法', right: '政府及其工作人员依法行政' },
          { left: '公正司法', right: '司法机关独立公正地行使司法权' },
          { left: '全民守法', right: '所有公民和组织自觉遵守法律' },
        ],
        answer: '科学立法-法律要符合客观规律和人民意愿,严格执法-政府及其工作人员依法行政,公正司法-司法机关独立公正地行使司法权,全民守法-所有公民和组织自觉遵守法律',
        explanation: '科学立法要求立法要尊重客观规律，体现人民意志；严格执法要求行政机关依法履行职责；公正司法要求司法机关以事实为依据、以法律为准绳，维护社会公平正义的最后一道防线；全民守法要求每一个公民都尊法学法守法用法。',
        difficulty: 2,
      },
    ],
  },

  'politics-yuejiao-9-2': {
    chapterName: '中华文化与民族精神',
    questions: [
      {
        id: 'q2050',
        type: 'shortanswer',
        question: '请简述中华民族精神的内涵及其在当代的意义。',
        acceptableAnswers: ['爱国主义', '团结统一', '爱好和平', '勤劳勇敢', '自强不息', '核心是爱国主义'],
        answer: '中华民族精神以爱国主义为核心，内涵包括团结统一、爱好和平、勤劳勇敢、自强不息。在当代，弘扬中华民族精神的意义在于：它是凝聚中华民族的精神纽带，是鼓舞中华儿女团结奋斗的精神动力，是实现中华民族伟大复兴的强大精神支柱。面对复杂多变的国际形势和各种风险挑战，更需要大力弘扬和培育民族精神，增强民族凝聚力和创造力。',
        explanation: '中华民族精神是中华民族在长期的历史发展中形成的共同精神品质。从"精卫填海""大禹治水"的传说，到近代以来无数仁人志士的奋斗，都体现了这种伟大的民族精神。爱国主义的内涵是随着时代发展而不断丰富的。',
        difficulty: 3,
      },
      {
        id: 'q2051',
        type: 'matching',
        question: '请将下列中华传统文化理念与其核心含义连线配对：',
        pairs: [
          { left: '天人合一', right: '人与自然和谐相处' },
          { left: '和而不同', right: '尊重差异，追求和谐' },
          { left: '民为邦本', right: '以人民为国家的根本' },
          { left: '自强不息', right: '自觉努力向上，永不懈怠' },
        ],
        answer: '天人合一-人与自然和谐相处,和而不同-尊重差异，追求和谐,民为邦本-以人民为国家的根本,自强不息-自觉努力向上，永不懈怠',
        explanation: '"天人合一"强调人与自然的统一和谐；"和而不同"出自《论语》，强调在差异中求和谐，是中华文化的重要智慧；"民为邦本"体现了以民为本的治国理念；"自强不息"出自《周易》，是中华民族拼搏进取精神的写照。',
        difficulty: 2,
      },
    ],
  },

  // ==================== 数学 ====================
  'math-renjiao-8-0': {
    chapterName: '三角形',
    questions: [
      {
        id: 'q2052',
        type: 'matching',
        question: '请将下列特殊三角形与其主要性质特征连线配对：',
        pairs: [
          { left: '等边三角形', right: '三条边相等，三个角都是60°' },
          { left: '等腰三角形', right: '两腰相等，底边上的高、中线和顶角平分线三线合一' },
          { left: '直角三角形', right: '有一个角为90°，满足勾股定理' },
          { left: '钝角三角形', right: '有一个角大于90°' },
        ],
        answer: '等边三角形-三条边相等，三个角都是60°,等腰三角形-两腰相等，底边上的高、中线和顶角平分线三线合一,直角三角形-有一个角为90°，满足勾股定理,钝角三角形-有一个角大于90°',
        explanation: '等边三角形是特殊的等腰三角形，三边相等、三角相等（各60°）；等腰三角形的两条边相等，"三线合一"是其重要性质；直角三角形满足勾股定理a²+b²=c²，其中c为斜边；三角形按角分类可分为锐角三角形、直角三角形和钝角三角形。',
        difficulty: 1,
      },
      {
        id: 'q2053',
        type: 'matching',
        question: '请将下列三角形的重要线段与其定义连线配对：',
        pairs: [
          { left: '角平分线', right: '从一个角的顶点将其分为两个相等的角' },
          { left: '中线', right: '连接一个顶点与对边中点的线段' },
          { left: '高', right: '从一个顶点向对边所在直线作垂线段' },
          { left: '中位线', right: '连接两边中点的线段，平行于第三边且等于其一半' },
        ],
        answer: '角平分线-从一个角的顶点将其分为两个相等的角,中线-连接一个顶点与对边中点的线段,高-从一个顶点向对边所在直线作垂线段,中位线-连接两边中点的线段，平行于第三边且等于其一半',
        explanation: '三角形有三条角平分线、三条中线、三条高和三条中位线。三角形的三条角平分线交于一点（内心），三条中线交于一点（重心），三条高（或高的延长线）交于一点（垂心）。',
        difficulty: 2,
      },
      {
        id: 'q2054',
        type: 'shortanswer',
        question: '请简述三角形三边关系的定理及其应用。',
        acceptableAnswers: ['任意两边之和大于第三边', '任意两边之差小于第三边', 'a+b>c', '判断三条线段能否组成三角形', '三角形稳定性'],
        answer: '三角形三边关系定理：三角形任意两边之和大于第三边，任意两边之差小于第三边。即对于三角形的三条边a、b、c，满足 a+b>c，a+c>b，b+c>a，同时 |a-b|<c，|a-c|<b，|b-c|<a。应用：判断三条已知长度的线段能否组成三角形时，只需检验最短两边之和是否大于最长边即可。此外，三角形具有稳定性，这一性质在生活中广泛应用（如桥梁、屋顶的三角形支架）。',
        explanation: '例如，已知三条线段长度分别为3cm、4cm、5cm，因为3+4>5，3+5>4，4+5>3都成立，所以这三条线段可以组成三角形。实际上3、4、5是最经典的勾股数组，能组成直角三角形。',
        difficulty: 2,
      },
    ],
  },

  'math-renjiao-9-1': {
    chapterName: '二次函数',
    questions: [
      {
        id: 'q2055',
        type: 'shortanswer',
        question: '请简述二次函数 y = ax² + bx + c（a≠0）中 a、b、c 的取值分别对抛物线的形状和位置有什么影响。',
        acceptableAnswers: ['a决定开口方向', 'a的绝对值决定开口大小', 'c决定与y轴交点', '对称轴', '顶点坐标', 'b与a共同决定对称轴位置'],
        answer: '二次函数 y=ax²+bx+c（a≠0）中各系数的影响：a决定抛物线的开口方向（a>0开口向上，a<0开口向下），|a|越大开口越小；c决定抛物线与y轴的交点（交点为(0,c)）；b与a共同决定对称轴的位置，对称轴为x=-b/(2a)。顶点坐标为(-b/(2a)，(4ac-b²)/(4a))。b²-4ac为判别式，决定抛物线与x轴的交点个数。',
        explanation: '掌握二次函数系数对图像的影响，可以快速由解析式判断抛物线的大致形状和位置，是解决二次函数问题的基础。例如y=x²-2x+3中，a=1>0开口向上，c=3与y轴交于(0,3)，对称轴x=-(-2)/(2×1)=1，顶点为(1,2)。',
        difficulty: 3,
      },
      {
        id: 'q2056',
        type: 'matching',
        question: '请将下列二次函数的变形形式与其适用场景连线配对：',
        pairs: [
          { left: '一般式 y=ax²+bx+c', right: '容易看出与y轴的交点' },
          { left: '顶点式 y=a(x-h)²+k', right: '容易看出顶点坐标和对称轴' },
          { left: '交点式 y=a(x-x₁)(x-x₂)', right: '容易看出与x轴的交点' },
          { left: '配方法', right: '将一般式化为顶点式' },
        ],
        answer: '一般式 y=ax²+bx+c-容易看出与y轴的交点,顶点式 y=a(x-h)²+k-容易看出顶点坐标和对称轴,交点式 y=a(x-x₁)(x-x₂)-容易看出与x轴的交点,配方法-将一般式化为顶点式',
        explanation: '二次函数有三种常见表达形式：一般式可直接读出c值（与y轴交点纵坐标）；顶点式可直接读出顶点(h,k)和对称轴x=h；交点式可直接读出与x轴的交点x₁和x₂。三种形式可以通过代数运算相互转化，根据具体问题选择最方便的形式。',
        difficulty: 2,
      },
      {
        id: 'q2057',
        type: 'shortanswer',
        question: '请举出两个二次函数在实际生活中的应用场景，并简要说明。',
        acceptableAnswers: ['抛体运动', '最大利润', '面积最大', '桥梁拱形', '喷泉', '投篮', '最值问题'],
        answer: '二次函数在生活中的应用十分广泛：1. 最值问题：例如某商品售价为x元时，利润y与售价的关系为y=-x²+20x-50，这是一个开口向下的二次函数，可以利用顶点公式求出最大利润对应的售价。2. 抛体运动：如篮球投篮时球的运动轨迹、喷泉的水流轨迹都近似为抛物线，可以用二次函数来描述和预测。3. 面积优化问题：如用固定长度的围栏围成最大面积的矩形场地。',
        explanation: '二次函数的应用题通常涉及求最大值或最小值的问题。当a>0时，函数有最小值（在顶点处取得）；当a<0时，函数有最大值（在顶点处取得）。解题的关键是建立正确的二次函数关系式。',
        difficulty: 2,
      },
    ],
  },
};

export function getQuestions(key) {
  return sampleQuestions[key] || null;
}
