/**
 * 化学人教版初中题目种子数据
 *
 * 涵盖 9 年级共 4 个章节，总计 91 道题。
 * 章节对应 seed-data.ts 中 chemistry-renjiao 的定义：
 *   9年级：走进化学世界(16)、我们周围的空气(25)、物质构成的奥秘(28)、自然界的水(22)
 *
 * 题型分布：choice ~45% | fill ~25% | short_answer ~20% | true_false ~10%
 * 难度分布：difficulty 1(基础) ~40% | 2(中等) ~40% | 3(提高) ~20%
 */

import { prisma } from '../src/config/database.js';

// ---------- 类型定义 ----------

interface RawQuestion {
  questionKey: string;
  type: 'choice' | 'fill' | 'short_answer' | 'true_false';
  questionText: string;
  answer: string;
  explanation: string;
  difficulty: 1 | 2 | 3;
  options?: string;   // JSON 字符串，仅 choice 题使用
  pairs?: string;     // JSON 字符串，仅 matching 题使用
  acceptableAnswers?: string; // JSON 字符串，fill 题可接受的其他答案
}

// ========== 9-0 走进化学世界 (16题) ==========

const chapter9_0: RawQuestion[] = [
  // ---- choice 7题 ----
  {
    questionKey: 'chemistry-renjiao-9-0-0',
    type: 'choice',
    questionText: '下列变化中，属于化学变化的是（）',
    answer: 'C',
    explanation: '化学变化的基本特征是有新物质生成。铁生锈有新物质（铁锈）生成，属于化学变化。灯泡发光是物理变化（发光发热但无新物质生成），冰雪融化是熔化（物理变化），酒挥发是汽化（物理变化）。',
    difficulty: 1,
    options: '["A. 灯泡通电发光", "B. 冰雪融化", "C. 铁在潮湿空气中生锈", "D. 酒精挥发"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-0-1',
    type: 'choice',
    questionText: '下列变化中，属于物理变化的是（）',
    answer: 'B',
    explanation: '物理变化没有新物质生成。汽油挥发只是汽油由液态变为气态，没有新物质生成，属于物理变化。食物腐烂、木柴燃烧、铁钉生锈都有新物质生成，属于化学变化。',
    difficulty: 1,
    options: '["A. 食物腐烂", "B. 汽油挥发", "C. 木柴燃烧", "D. 铁钉生锈"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-0-2',
    type: 'choice',
    questionText: '化学变化和物理变化的本质区别是（）',
    answer: 'D',
    explanation: '化学变化和物理变化的本质区别在于是否有新物质生成。发光发热、颜色变化、状态变化等都可能伴随物理变化或化学变化发生，不是本质区别。',
    difficulty: 1,
    options: '["A. 是否发光发热", "B. 是否有颜色变化", "C. 是否有状态变化", "D. 是否有新物质生成"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-0-3',
    type: 'choice',
    questionText: '化学变化的特征是（）',
    answer: 'B',
    explanation: '化学变化的基本特征是有新物质生成。化学变化常伴随发光、发热、颜色变化、产生气体、生成沉淀等现象，但这些不是化学变化的本质特征。',
    difficulty: 1,
    options: '["A. 发光放热", "B. 有新物质生成", "C. 颜色发生变化", "D. 有气体放出"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-0-4',
    type: 'choice',
    questionText: '下列物质的性质中，属于化学性质的是（）',
    answer: 'C',
    explanation: '化学性质是物质在化学变化中表现出来的性质。可燃性是物质在燃烧（化学变化）中表现出来的，属于化学性质。颜色、状态、密度、硬度等不需要发生化学变化就能表现出来，属于物理性质。',
    difficulty: 2,
    options: '["A. 颜色", "B. 状态", "C. 可燃性", "D. 密度"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-0-5',
    type: 'choice',
    questionText: '下列物质的用途中，利用其化学性质的是（）',
    answer: 'A',
    explanation: '用酒精做燃料是利用酒精的可燃性（化学性质）。钢铁做建筑是利用其硬度（物理性质），干冰用于人工降雨是利用其升华吸热（物理性质），铜丝做导线是利用其导电性（物理性质）。',
    difficulty: 2,
    options: '["A. 用酒精做燃料", "B. 用钢铁做建筑材料", "C. 用干冰进行人工降雨", "D. 用铜丝做导线"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-0-6',
    type: 'choice',
    questionText: '下列实验操作中，正确的是（）',
    answer: 'C',
    explanation: '给试管中的液体加热时，液体体积不应超过试管容积的1/3，试管口不能对着人。用嘴吹灭酒精灯可能引起火灾，应使用灯帽盖灭。取用药品时不能用手直接接触药品。闻气味时应用手扇动，使少量气体飘进鼻孔。',
    difficulty: 2,
    options: '["A. 给试管中液体加热时，液体体积可以超过试管容积的1/2", "B. 用嘴吹灭酒精灯", "C. 闻气体气味时，用手在瓶口轻轻扇动", "D. 用手直接取用固体药品"]',
  },

  // ---- fill 4题 ----
  {
    questionKey: 'chemistry-renjiao-9-0-7',
    type: 'fill',
    questionText: '化学变化中常伴随着发光、放热、变色、____或生成沉淀等现象。',
    answer: '产生气体',
    explanation: '化学变化中常伴随的现象有：发光、放热、变色、产生气体、生成沉淀等。这些现象可以帮助我们判断化学变化是否发生，但有这些现象不一定就是化学变化。',
    difficulty: 1,
    acceptableAnswers: '["产生气体", "生成气体"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-0-8',
    type: 'fill',
    questionText: '物质的性质分为____性质和____性质两大类。',
    answer: '物理、化学',
    explanation: '物质的性质分为物理性质和化学性质。物理性质是物质不需要发生化学变化就能表现出来的性质，化学性质是物质在化学变化中表现出来的性质。',
    difficulty: 1,
    acceptableAnswers: '["物理、化学", "物理，化学"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-0-9',
    type: 'fill',
    questionText: '试管加热时，液体体积一般不超过试管容积的____。',
    answer: '1/3',
    explanation: '给试管中的液体加热时，液体体积不应超过试管容积的1/3，以防止液体沸腾时飞溅出来伤人。',
    difficulty: 1,
    acceptableAnswers: '["1/3", "三分之一"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-0-10',
    type: 'fill',
    questionText: '取用药品时，如果没有说明用量，液体一般取____mL，固体只需____试管底部即可。',
    answer: '1~2、盖满',
    explanation: '实验中药品取用规则：液体一般取1~2mL，固体只需盖满试管底部即可。节约药品，减少浪费和污染。',
    difficulty: 1,
    acceptableAnswers: '["1~2、盖满", "1-2、盖满", "1~2、铺满", "1-2、铺满"]',
  },

  // ---- short_answer 3题 ----
  {
    questionKey: 'chemistry-renjiao-9-0-11',
    type: 'short_answer',
    questionText: '蜡烛燃烧时发生了哪些变化？请分别说明哪些是物理变化，哪些是化学变化。',
    answer: '蜡烛燃烧时发生的变化：(1)蜡烛受热熔化，由固态变为液态，属于物理变化；(2)蜡烛燃烧发光发热，生成二氧化碳和水，有新物质生成，属于化学变化。蜡烛燃烧过程中既有物理变化又有化学变化。',
    explanation: '蜡烛燃烧是典型的既有物理变化又有化学变化的例子。熔化只是状态改变（物理变化），燃烧生成新物质（化学变化）。',
    difficulty: 2,
  },
  {
    questionKey: 'chemistry-renjiao-9-0-12',
    type: 'short_answer',
    questionText: '请列举化学变化的三个伴随现象，并说明这些现象是否一定能作为判断化学变化的依据。',
    answer: '化学变化常伴随的现象：(1)发光放热，如燃烧；(2)颜色变化，如铁生锈；(3)产生气体或生成沉淀。这些现象不能作为判断化学变化的唯一依据，因为有些物理变化也可能伴随类似现象。例如电灯发光是物理变化，水的沸腾产生气泡也是物理变化。判断化学变化的唯一依据是是否有新物质生成。',
    explanation: '化学变化伴随的现象可以帮助我们观察和判断，但不能仅凭现象确定。判断化学变化的根本依据是是否有新物质生成。',
    difficulty: 2,
  },
  {
    questionKey: 'chemistry-renjiao-9-0-13',
    type: 'short_answer',
    questionText: '某同学加热试管中的液体时，液体突然飞溅出来。请分析可能的原因，并说明正确的操作方法。',
    answer: '可能的原因：(1)试管口对着了自己或他人；(2)加热时试管外壁有水未擦干；(3)液体量过多，超过了试管容积的1/3；(4)没有先进行预热就直接集中加热。正确操作：试管口不能对着人；加热前擦干试管外壁；液体量不超过试管容积的1/3；先均匀预热再集中加热底部。',
    explanation: '给试管中液体加热的正确操作要点是重要的实验基本操作，需牢记并严格遵守。',
    difficulty: 3,
  },

  // ---- true_false 2题 ----
  {
    questionKey: 'chemistry-renjiao-9-0-14',
    type: 'true_false',
    questionText: '有新物质生成的变化一定是化学变化。',
    answer: '正确',
    explanation: '化学变化的本质特征就是有新物质生成。有新物质生成一定是化学变化，这是判断化学变化的根本依据。',
    difficulty: 1,
  },
  {
    questionKey: 'chemistry-renjiao-9-0-15',
    type: 'true_false',
    questionText: '发光发热的变化一定是化学变化。',
    answer: '错误',
    explanation: '发光发热的变化不一定是化学变化。例如灯泡通电发光发热是物理变化（电能转化为光能和热能，钨丝没有变成新物质）。判断化学变化的唯一标准是有无新物质生成。',
    difficulty: 2,
  },
];

// ========== 9-1 我们周围的空气 (25题) ==========

const chapter9_1: RawQuestion[] = [
  // ---- choice 11题 ----
  {
    questionKey: 'chemistry-renjiao-9-1-0',
    type: 'choice',
    questionText: '空气的成分按体积计算，含量最多的是（）',
    answer: 'B',
    explanation: '空气的成分按体积计算：氮气约占78%，氧气约占21%，稀有气体约占0.94%，二氧化碳约占0.03%，其他气体和杂质约占0.03%。氮气含量最多。',
    difficulty: 1,
    options: '["A. 氧气", "B. 氮气", "C. 二氧化碳", "D. 稀有气体"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-1-1',
    type: 'choice',
    questionText: '空气中按体积计算，氧气约占（）',
    answer: 'C',
    explanation: '空气的成分按体积计算：氮气约78%，氧气约21%，稀有气体约0.94%，二氧化碳约0.03%。',
    difficulty: 1,
    options: '["A. 78%", "B. 21/100", "C. 21%", "D. 0.94%"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-1-2',
    type: 'choice',
    questionText: '下列气体中，能支持燃烧的是（）',
    answer: 'A',
    explanation: '氧气能支持燃烧（助燃性），这是氧气的重要化学性质之一。氮气和稀有气体化学性质不活泼（不支持燃烧），二氧化碳不能燃烧也不支持燃烧。',
    difficulty: 1,
    options: '["A. 氧气", "B. 氮气", "C. 二氧化碳", "D. 稀有气体"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-1-3',
    type: 'choice',
    questionText: '测定空气中氧气含量的实验中，使用的可燃物是（）',
    answer: 'A',
    explanation: '拉瓦锡测定空气成分实验中，使用汞（水银）做实验。后来教科书简化版实验常用红磷，因为红磷燃烧消耗氧气，生成固体五氧化二磷，不产生气体，便于测量减少的气体体积。注意不能用铁、木炭、硫等替代，铁在空气中不能燃烧，木炭和硫燃烧会产生气体。',
    difficulty: 1,
    options: '["A. 红磷", "B. 木炭", "C. 硫磺", "D. 铁丝"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-1-4',
    type: 'choice',
    questionText: '空气中能供给呼吸的气体是（）',
    answer: 'B',
    explanation: '氧气能供给呼吸，维持生命活动。氮气不能供给呼吸。二氧化碳虽参与植物光合作用，但不能供给人和动物呼吸。',
    difficulty: 1,
    options: '["A. 氮气", "B. 氧气", "C. 二氧化碳", "D. 稀有气体"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-1-5',
    type: 'choice',
    questionText: '下列说法正确的是（）',
    answer: 'D',
    explanation: '空气是一种混合物，由氮气、氧气、稀有气体、二氧化碳等多种气体组成。空气中氧气约占21%是体积分数。稀有气体化学性质不活泼，但在特定条件下也能发生化学反应。氮气化学性质稳定，可用于食品充氮防腐。',
    difficulty: 2,
    options: '["A. 空气是一种单一的物质", "B. 空气中氧气的质量分数约为21%", "C. 稀有气体完全不能与其他物质反应", "D. 氮气的化学性质不活泼，可用于食品充氮防腐"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-1-6',
    type: 'choice',
    questionText: '氧气的化学性质比较活泼，能跟许多物质发生反应。下列关于氧气用途的说法错误的是（）',
    answer: 'C',
    explanation: '氧气可用于炼钢（提高炉温，加速冶炼过程）、气焊气割（支持燃烧产生高温）、潜水登山（供给呼吸）。氧气的用途都利用了其支持燃烧或供给呼吸的性质。制造霓虹灯的是稀有气体（如氖气），不是氧气。',
    difficulty: 2,
    options: '["A. 用于炼钢", "B. 用于气焊和气割", "C. 用于制造霓虹灯", "D. 供潜水员呼吸"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-1-7',
    type: 'choice',
    questionText: '下列物质在氧气中燃烧，产生明亮的蓝紫色火焰的是（）',
    answer: 'A',
    explanation: '硫在氧气中燃烧发出明亮的蓝紫色火焰，在空气中燃烧发出淡蓝色火焰。铁丝在氧气中剧烈燃烧火星四射，木炭在氧气中发白光，镁带燃烧发出耀眼白光。',
    difficulty: 2,
    options: '["A. 硫", "B. 铁丝", "C. 木炭", "D. 红磷"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-1-8',
    type: 'choice',
    questionText: '下列关于催化剂的说法正确的是（）',
    answer: 'B',
    explanation: '催化剂（又称触媒）能改变其他物质的化学反应速率，且在反应前后本身的质量和化学性质都不发生变化。"改变"包括加快和减慢反应速率。催化剂不能增加生成物的质量。',
    difficulty: 2,
    options: '["A. 催化剂能增大生成物的质量", "B. 催化剂在反应前后质量和化学性质都不变", "C. 催化剂只能加快化学反应速率", "D. 催化剂参加反应后质量会减少"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-1-9',
    type: 'choice',
    questionText: '实验室用高锰酸钾制取氧气时，试管口要放一团棉花，其目的是（）',
    answer: 'A',
    explanation: '高锰酸钾（KMnO₄）是暗紫色粉末，加热时会随气流冲出试管，如果不堵住，高锰酸钾粉末会进入导管甚至水槽中。放一团棉花可以防止高锰酸钾粉末进入导管。',
    difficulty: 2,
    options: '["A. 防止高锰酸钾粉末进入导管", "B. 防止水倒流进试管", "C. 增加氧气产量", "D. 加快反应速率"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-1-10',
    type: 'choice',
    questionText: '实验室收集氧气可以用的方法是（）',
    answer: 'D',
    explanation: '氧气不易溶于水，可以用排水法收集；氧气密度比空气大，可以用向上排空气法收集。向下排空气法用于收集密度比空气小的气体，不适于氧气。',
    difficulty: 1,
    options: '["A. 排水法和向下排空气法", "B. 向下排空气法", "C. 向上排空气法", "D. 排水法和向上排空气法"]',
  },

  // ---- fill 6题 ----
  {
    questionKey: 'chemistry-renjiao-9-1-11',
    type: 'fill',
    questionText: '空气的成分按体积计算，氮气约占____%，氧气约占____%。',
    answer: '78、21',
    explanation: '空气成分（按体积计算）：氮气约78%，氧气约21%，稀有气体约0.94%，二氧化碳约0.03%，其他气体和杂质约0.03%。',
    difficulty: 1,
    acceptableAnswers: '["78、21", "78，21"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-1-12',
    type: 'fill',
    questionText: '拉瓦锡通过实验得出空气是由____和____组成的，其中氧气约占空气总体积的____。',
    answer: '氧气、氮气、1/5',
    explanation: '拉瓦锡通过定量实验研究了空气的成分，得出空气由氧气和氮气组成，其中氧气约占空气总体积的1/5（即约21%）。',
    difficulty: 1,
    acceptableAnswers: '["氧气、氮气、1/5", "氧气，氮气，1/5", "氮气、氧气、1/5", "氮气，氧气，1/5", "氧气、氮气、五分之一"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-1-13',
    type: 'fill',
    questionText: '硫在氧气中燃烧发出____色火焰，在集气瓶中应预先放少量水，目的是____。',
    answer: '蓝紫、吸收生成的二氧化硫，防止污染空气',
    explanation: '硫在氧气中燃烧发出明亮的蓝紫色火焰，生成有刺激性气味的二氧化硫（SO₂）。预先放少量水可以吸收SO₂，防止污染空气。',
    difficulty: 2,
    acceptableAnswers: '["蓝紫、吸收生成的二氧化硫，防止污染空气", "蓝紫色、吸收SO₂防止污染空气"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-1-14',
    type: 'fill',
    questionText: '铁丝在氧气中燃烧的现象是____，生成____色固体。为防止炸裂集气瓶，瓶中要预先放少量____。',
    answer: '剧烈燃烧，火星四射、黑、水或沙',
    explanation: '铁丝在纯氧气中剧烈燃烧，火星四射，生成黑色固体（四氧化三铁 Fe₃O₄）。瓶中放少量水或铺一层细沙，防止生成的高温固体溅落炸裂瓶底。',
    difficulty: 2,
    acceptableAnswers: '["剧烈燃烧，火星四射、黑、水或沙", "剧烈燃烧火星四射、黑色、水"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-1-15',
    type: 'fill',
    questionText: '催化剂的特点是：能改变其他物质的____速率，但反应前后自身的____和____都不变。',
    answer: '化学、质量、化学性质',
    explanation: '催化剂（一变两不变）：一变——改变（加快或减慢）化学反应速率；两不变——反应前后质量不变、化学性质不变。',
    difficulty: 2,
    acceptableAnswers: '["化学、质量、化学性质", "化学，质量，化学性质"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-1-16',
    type: 'fill',
    questionText: '工业上制取氧气的方法是____，这是____变化（填"物理"或"化学"）。',
    answer: '分离液态空气法、物理',
    explanation: '工业制氧气利用液氮和液氧的沸点不同（氮气沸点-196°C，氧气沸点-183°C），通过蒸发液态空气分离出氮气和氧气，属于物理变化（蒸发），没有新物质生成。',
    difficulty: 2,
    acceptableAnswers: '["分离液态空气法、物理", "分离液态空气法，物理", "分离液态空气、物理"]',
  },

  // ---- short_answer 5题 ----
  {
    questionKey: 'chemistry-renjiao-9-1-17',
    type: 'short_answer',
    questionText: '为什么测定空气成分的实验中通常选用红磷而不是木炭？',
    answer: '因为红磷燃烧消耗氧气，生成固体五氧化二磷（P₂O₅），瓶内气压减小，水倒流进入瓶中，倒流水的体积即为消耗氧气的体积，便于测量。如果用木炭，木炭燃烧生成二氧化碳气体，瓶内气压几乎不变，水不会倒流，无法测定氧气含量。',
    explanation: '测定空气成分实验要求：可燃物消耗氧气后，要么生成固体，要么生成能被吸收的气体，使瓶内气压明显减小。红磷燃烧只生成固体，效果最好。',
    difficulty: 2,
  },
  {
    questionKey: 'chemistry-renjiao-9-1-18',
    type: 'short_answer',
    questionText: '用排水法收集氧气时，当观察到什么现象时说明已经收集满了？',
    answer: '当集气瓶口外有大气泡冒出时，说明瓶内已排满水、收集满了氧气。此时应将导管从水中取出，然后在水面下用玻璃片盖住瓶口，取出集气瓶正放在桌面上。',
    explanation: '排水法收集气体时，瓶内水被排尽后，气体从瓶口逸出，形成大气泡。这时说明集气瓶已满。',
    difficulty: 1,
  },
  {
    questionKey: 'chemistry-renjiao-9-1-19',
    type: 'short_answer',
    questionText: '实验室用过氧化氢溶液制取氧气时，为什么要加入二氧化锰？写出该反应的文字表达式。',
    answer: '过氧化氢溶液常温下分解很慢，加入二氧化锰作为催化剂，可以大大加快过氧化氢分解的速率，迅速产生氧气。反应文字表达式：过氧化氢 →(二氧化锰)→ 水 + 氧气（或：过氧化氢在二氧化锰催化下分解为水和氧气）。',
    explanation: '二氧化锰在该反应中起催化作用。文字表达式：过氧化氢 ──MnO₂──→ 水 + 氧气。符号表达式：2H₂O₂ ──MnO₂──→ 2H₂O + O₂↑。',
    difficulty: 2,
  },
  {
    questionKey: 'chemistry-renjiao-9-1-20',
    type: 'short_answer',
    questionText: '写出实验室加热高锰酸钾制取氧气的文字表达式，并说明该反应的基本类型。',
    answer: '反应文字表达式：高锰酸钾 →(加热)→ 锰酸钾 + 二氧化锰 + 氧气。该反应属于分解反应，特点是一种物质反应生成两种或两种以上其他物质。',
    explanation: '高锰酸钾受热分解：2KMnO₄ →(加热) K₂MnO₄ + MnO₂ + O₂↑。由一种物质生成多种物质的反应叫分解反应。',
    difficulty: 2,
  },
  {
    questionKey: 'chemistry-renjiao-9-1-21',
    type: 'short_answer',
    questionText: '某种气体既能用排水法收集，又能用向上排空气法收集，由此推断该气体具有哪些物理性质？',
    answer: '能用排水法收集，说明该气体不易溶于水（或难溶于水）；能用向上排空气法收集，说明该气体的密度比空气大。氧气就同时具有这两种物理性质，因此两种收集方法都适用。',
    explanation: '排水法适用于不易溶于水的气体；向上排空气法适用于密度比空气大的气体；向下排空气法适用于密度比空气小的气体。',
    difficulty: 2,
  },

  // ---- true_false 3题 ----
  {
    questionKey: 'chemistry-renjiao-9-1-22',
    type: 'true_false',
    questionText: '空气中氧气的质量分数约为21%。',
    answer: '错误',
    explanation: '空气中氧气约占21%是体积分数，不是质量分数。由于氧气密度大于氮气密度，氧气质量分数略大于21%（约23%）。',
    difficulty: 2,
  },
  {
    questionKey: 'chemistry-renjiao-9-1-23',
    type: 'true_false',
    questionText: '稀有气体化学性质很不活泼，因此它们没有任何用途。',
    answer: '错误',
    explanation: '稀有气体化学性质不活泼（"懒惰气体"），但用途广泛。例如：氖气用于霓虹灯，氦气用于填充气球（安全，不燃烧），氩气用于焊接保护气等。',
    difficulty: 2,
  },
  {
    questionKey: 'chemistry-renjiao-9-1-24',
    type: 'true_false',
    questionText: '工业制氧气是利用分离液态空气的方法，属于物理变化。',
    answer: '正确',
    explanation: '工业制氧气是根据液氮（沸点-196°C）和液氧（沸点-183°C）的沸点不同，蒸发液态空气，氮气先蒸发出来，剩下的主要是液氧。整个过程中没有新物质生成，属于物理变化。',
    difficulty: 2,
  },
];

// ========== 9-2 物质构成的奥秘 (28题) ==========

const chapter9_2: RawQuestion[] = [
  // ---- choice 13题 ----
  {
    questionKey: 'chemistry-renjiao-9-2-0',
    type: 'choice',
    questionText: '分子和原子的本质区别是（）',
    answer: 'C',
    explanation: '分子和原子的本质区别是：分子可以再分，在化学变化中可以分成原子；而原子在化学变化中不可再分，是化学变化中的最小粒子。分子和原子都可以构成物质。',
    difficulty: 1,
    options: '["A. 分子大，原子小", "B. 分子能运动，原子不能运动", "C. 在化学变化中分子可分，原子不可分", "D. 分子能构成物质，原子不能"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-2-1',
    type: 'choice',
    questionText: '下列关于分子的说法正确的是（）',
    answer: 'B',
    explanation: '分子是保持物质化学性质的最小粒子。分子由原子构成。分子之间有间隔，物体热胀冷缩就是分子间隔变化的体现。同种分子化学性质相同，不同种分子化学性质不同。',
    difficulty: 1,
    options: '["A. 分子是保持物质性质的最小粒子", "B. 分子是保持物质化学性质的最小粒子", "C. 分子间没有间隔", "D. 所有物质都由分子构成"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-2-2',
    type: 'choice',
    questionText: '原子是由原子核和____构成的，原子核由____和____构成。',
    answer: 'A',
    explanation: '原子由居于中心的原子核和核外电子构成。原子核由质子和中子构成（氢原子例外，只有一个质子，无中子）。',
    difficulty: 1,
    options: '["A. 核外电子；质子；中子", "B. 核外电子；分子；质子", "C. 质子；中子；电子", "D. 中子；质子；离子"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-2-3',
    type: 'choice',
    questionText: '在原子中，下列关系正确的是（）',
    answer: 'D',
    explanation: '在原子中：质子数 = 核外电子数（原子不显电性），质子数 = 核电荷数 = 原子序数。中子数不一定等于质子数。',
    difficulty: 2,
    options: '["A. 质子数 = 中子数", "B. 电子数 = 中子数", "C. 质子数 + 中子数 = 电子数", "D. 核外电子数 = 质子数"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-2-4',
    type: 'choice',
    questionText: '决定元素种类的是原子的（）',
    answer: 'A',
    explanation: '质子数（即核电荷数）决定元素的种类。质子数相同的原子属于同一种元素。不同元素的质子数不同。',
    difficulty: 1,
    options: '["A. 质子数", "B. 中子数", "C. 电子数", "D. 相对原子质量"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-2-5',
    type: 'choice',
    questionText: '元素周期表中，同一周期元素的（）相同。',
    answer: 'B',
    explanation: '元素周期表中，同一周期（横行）的元素电子层数相同，同一族（纵列）的元素最外层电子数相同。在元素周期表中，元素按原子序数递增排列。',
    difficulty: 2,
    options: '["A. 最外层电子数", "B. 电子层数", "C. 质子数", "D. 相对原子质量"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-2-6',
    type: 'choice',
    questionText: '下列符号中，既表示一个原子，又表示一种元素，还表示一种物质的是（）',
    answer: 'C',
    explanation: 'Fe表示铁元素、一个铁原子、铁这种物质（由原子直接构成的金属）。O只能表示氧元素和一个氧原子（氧气用O₂表示），N表示氮元素和一个氮原子（氮气用N₂表示），2H只表示两个氢原子。',
    difficulty: 2,
    options: '["A. O", "B. N", "C. Fe", "D. 2H"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-2-7',
    type: 'choice',
    questionText: '下列化学式中，表示氧化物的是（）',
    answer: 'A',
    explanation: '氧化物是由两种元素组成的化合物，且其中一种是氧元素。H₂O由氢和氧两种元素组成（含氧），是氧化物。H₂SO₄含三种元素不是氧化物；O₂是单质不是化合物；KMnO₄含三种元素不是氧化物。',
    difficulty: 2,
    options: '["A. H₂O", "B. H₂SO₄", "C. O₂", "D. KMnO₄"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-2-8',
    type: 'choice',
    questionText: '下列物质中，属于单质的是（）',
    answer: 'B',
    explanation: '单质是由同种元素组成的纯净物。Fe（铁）是由铁元素一种元素组成的纯净物，属于单质。NaCl（氯化钠）、CO₂（二氧化碳）、H₂O（水）都是由不同种元素组成的化合物。',
    difficulty: 1,
    options: '["A. NaCl", "B. Fe", "C. CO₂", "D. H₂O"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-2-9',
    type: 'choice',
    questionText: '水的化学式为H₂O，则水中氢元素和氧元素的质量比为（）',
    answer: 'C',
    explanation: 'H₂O中氢原子个数为2，氧原子个数为1。质量比 = (2×1) : (1×16) = 2 : 16 = 1 : 8。',
    difficulty: 2,
    options: '["A. 2:1", "B. 1:16", "C. 1:8", "D. 2:16"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-2-10',
    type: 'choice',
    questionText: '某元素的原子结构示意图中，核外共有2个电子层，最外层有7个电子，该元素属于（）',
    answer: 'D',
    explanation: '最外层有7个电子（大于4个），在化学反应中容易得到1个电子达到8电子稳定结构，属于非金属元素。非金属元素最外层电子数一般≥4个。',
    difficulty: 3,
    options: '["A. 金属元素", "B. 稀有气体元素", "C. 无法判断", "D. 非金属元素"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-2-11',
    type: 'choice',
    questionText: '地壳中含量最多的金属元素是（）',
    answer: 'B',
    explanation: '地壳中元素含量前四位依次为：氧（O）约48.6%、硅（Si）约26.3%、铝（Al）约7.73%、铁（Fe）约4.75%。其中含量最多的金属元素是铝，含量最多的非金属元素是氧。',
    difficulty: 1,
    options: '["A. 氧", "B. 铝", "C. 铁", "D. 硅"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-2-12',
    type: 'choice',
    questionText: 'Na的相对原子质量为23，它原子核中有11个质子，则Na原子的核外电子数为（）',
    answer: 'C',
    explanation: '原子中：核外电子数 = 质子数。Na原子有11个质子，所以核外有11个电子。中子数 = 相对原子质量 - 质子数 = 23 - 11 = 12。',
    difficulty: 2,
    options: '["A. 23", "B. 12", "C. 11", "D. 34"]',
  },

  // ---- fill 7题 ----
  {
    questionKey: 'chemistry-renjiao-9-2-13',
    type: 'fill',
    questionText: '分子是由____构成的，原子是由____和____构成的。',
    answer: '原子、原子核、核外电子',
    explanation: '分子由原子构成；原子由原子核和核外电子构成；原子核由质子和中子构成。',
    difficulty: 1,
    acceptableAnswers: '["原子、原子核、核外电子", "原子，原子核，核外电子"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-2-14',
    type: 'fill',
    questionText: '原子中，质子数等于____数，也等于____数。',
    answer: '核外电子、核电荷',
    explanation: '在原子中：质子数 = 核外电子数 = 核电荷数 = 原子序数。原子不显电性是因为质子所带正电荷总量等于电子所带负电荷总量。',
    difficulty: 1,
    acceptableAnswers: '["核外电子、核电荷", "核电荷、核外电子"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-2-15',
    type: 'fill',
    questionText: '地壳中含量最多的元素是____，含量最多的金属元素是____。',
    answer: '氧、铝',
    explanation: '地壳中元素含量：氧（O）最多（约48.6%），其次是硅（Si约26.3%），铝（Al约7.73%）是含量最多的金属元素。',
    difficulty: 1,
    acceptableAnswers: '["氧、铝", "氧，铝", "O、Al"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-2-16',
    type: 'fill',
    questionText: '由同种元素组成的纯净物叫做____，由不同种元素组成的纯净物叫做____。',
    answer: '单质、化合物',
    explanation: '单质是由同种元素组成的纯净物（如O₂、Fe）；化合物是由不同种元素组成的纯净物（如H₂O、CO₂）。注意必须强调"纯净物"。',
    difficulty: 1,
    acceptableAnswers: '["单质、化合物", "单质，化合物"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-2-17',
    type: 'fill',
    questionText: '元素周期表是按____（或原子序数）递增的顺序排列的，共有____个横行（周期）。',
    answer: '核电荷数、7',
    explanation: '元素周期表按核电荷数（即原子序数/质子数）递增的顺序排列。目前元素周期表有7个周期（横行）和18个族（纵列）。',
    difficulty: 2,
    acceptableAnswers: '["核电荷数、7", "质子数、7", "原子序数、7"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-2-18',
    type: 'fill',
    questionText: 'H₂O的相对分子质量为____。',
    answer: '18',
    explanation: 'H₂O的相对分子质量 = 1×2 + 16×1 = 18。',
    difficulty: 1,
    acceptableAnswers: '["18"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-2-19',
    type: 'fill',
    questionText: 'CO₂的相对分子质量为____，其中碳元素与氧元素的质量比为____。',
    answer: '44、3:8',
    explanation: 'CO₂的相对分子质量 = 12 + 16×2 = 44。碳与氧的质量比 = 12 : (16×2) = 12 : 32 = 3 : 8。',
    difficulty: 2,
    acceptableAnswers: '["44、3:8", "44，3:8", "44、3：8"]',
  },

  // ---- short_answer 6题 ----
  {
    questionKey: 'chemistry-renjiao-9-2-20',
    type: 'short_answer',
    questionText: '请从分子和原子的角度解释："湿衣服在阳光下比在阴凉处干得快"。',
    answer: '湿衣服上的水是由水分子构成的。阳光照射使温度升高，水分子运动速度加快，分子之间的间隔增大，水分子更快地扩散到空气中，所以衣服干得快。这说明分子的运动速率与温度有关，温度越高，分子运动越快。',
    explanation: '分子总是在不停地运动，温度越高分子运动越快。湿衣服晾干是水分子扩散到空气中的过程（蒸发）。',
    difficulty: 2,
  },
  {
    questionKey: 'chemistry-renjiao-9-2-21',
    type: 'short_answer',
    questionText: '用分子和原子的观点解释水的蒸发和水的电解两种变化本质的区别。',
    answer: '水的蒸发是物理变化：水分子本身没有改变，只是水分子之间的间隔变大，水分子运动到空气中去了。水的电解是化学变化：在电解条件下，水分子被分解为氢原子和氧原子，每两个氢原子结合成一个氢分子，每两个氧原子结合成一个氧分子。区别：蒸发中分子不变，电解中分子被分解。',
    explanation: '物理变化中分子本身不变（只是间隔/排列改变），化学变化中分子被分解为原子，原子重新组合成新分子。',
    difficulty: 2,
  },
  {
    questionKey: 'chemistry-renjiao-9-2-22',
    type: 'short_answer',
    questionText: '已知某物质的化学式为H₂SO₄，请计算：(1)该物质的相对分子质量；(2)各元素的质量比；(3)硫元素的质量分数。',
    answer: '(1) H₂SO₄的相对分子质量 = 1×2 + 32 + 16×4 = 2 + 32 + 64 = 98。\n(2) 氢：硫：氧 = (1×2) : 32 : (16×4) = 2 : 32 : 64 = 1 : 16 : 32。\n(3) 硫元素的质量分数 = 32/98 × 100% ≈ 32.65%。',
    explanation: '化学式计算：相对分子质量是各原子相对原子质量之和；各元素质量比等于各原子数乘相对原子质量之比；某元素质量分数 = 该元素相对原子质量×原子个数 / 相对分子质量 ×100%。',
    difficulty: 3,
  },
  {
    questionKey: 'chemistry-renjiao-9-2-23',
    type: 'short_answer',
    questionText: '元素和原子的区别和联系是什么？',
    answer: '区别：元素是宏观概念，只讲种类不讲个数，用于描述物质的组成（如"水由氢元素和氧元素组成"）；原子是微观概念，既讲种类又讲个数，用于描述物质的微观构成（如"每个水分子由2个氢原子和1个氧原子构成"）。联系：元素是同一类原子的总称，原子是元素的具体个体。',
    explanation: '元素和原子是初中化学的重要概念辨析。元素是宏观概念（只讲种类），原子是微观概念（讲种类和个数）。',
    difficulty: 2,
  },
  {
    questionKey: 'chemistry-renjiao-9-2-24',
    type: 'short_answer',
    questionText: '某种原子的原子核中有6个质子和6个中子，核外有6个电子。请回答：(1)该元素的原子序数是多少？(2)该元素是什么？(3)相对原子质量约为多少？',
    answer: '(1) 原子序数 = 质子数 = 6，所以该元素的原子序数为6。\n(2) 原子序数为6的元素是碳（C）。\n(3) 相对原子质量 ≈ 质子数 + 中子数 = 6 + 6 = 12。',
    explanation: '原子序数 = 质子数。相对原子质量（取整数）≈ 质子数 + 中子数。质子数为6的是碳元素。',
    difficulty: 2,
  },
  {
    questionKey: 'chemistry-renjiao-9-2-25',
    type: 'short_answer',
    questionText: '已知碳-12原子的质量为a kg，某原子的质量为b kg，则该原子的相对原子质量是多少？',
    answer: '相对原子质量 = 某原子的质量 / (碳-12原子质量的1/12) = b / (a × 1/12) = 12b/a。',
    explanation: '相对原子质量的标准：以碳-12原子质量的1/12为标准，其他原子的质量与它相比较所得的值。相对原子质量是一个比值，单位为1（通常省略不写）。',
    difficulty: 3,
  },

  // ---- true_false 2题 ----
  {
    questionKey: 'chemistry-renjiao-9-2-26',
    type: 'true_false',
    questionText: '原子是最小的粒子，不可再分。',
    answer: '错误',
    explanation: '原子是化学变化中的最小粒子，在化学变化中不可再分。但原子本身由质子、中子和电子构成，在核反应中原子可以再分（发生核裂变或核聚变）。',
    difficulty: 2,
  },
  {
    questionKey: 'chemistry-renjiao-9-2-27',
    type: 'true_false',
    questionText: '含有氧元素的化合物一定是氧化物。',
    answer: '错误',
    explanation: '氧化物是由两种元素组成且其中一种是氧元素的化合物。含有氧元素的化合物不一定是氧化物，例如H₂SO₄（硫酸）由H、S、O三种元素组成，属于含氧化合物但不是氧化物。只有满足"两种元素+含氧"才是氧化物。',
    difficulty: 2,
  },
];

// ========== 9-3 自然界的水 (22题) ==========

const chapter9_3: RawQuestion[] = [
  // ---- choice 10题 ----
  {
    questionKey: 'chemistry-renjiao-9-3-0',
    type: 'choice',
    questionText: '下列关于水的组成的说法正确的是（）',
    answer: 'B',
    explanation: '水通电分解生成氢气和氧气，说明水由氢元素和氧元素组成。但不能说水由氢气和氧气组成，因为水中不存在氢分子和氧分子。水是由水分子构成的。',
    difficulty: 1,
    options: '["A. 水由氢气和氧气组成", "B. 水由氢元素和氧元素组成", "C. 水由两个氢元素和一个氧元素组成", "D. 水由氢原子和氧原子组成"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-3-1',
    type: 'choice',
    questionText: '电解水的实验中，正极产生的气体和负极产生的气体的体积比约为（）',
    answer: 'C',
    explanation: '电解水时，正极产生氧气，负极产生氢气。氢气与氧气的体积比约为2:1，即正极（氧气）与负极（氢气）的体积比约为1:2。',
    difficulty: 1,
    options: '["A. 2:1", "B. 1:1", "C. 1:2", "D. 2:3"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-3-2',
    type: 'choice',
    questionText: '下列净化水的方法中，净化程度最高的是（）',
    answer: 'D',
    explanation: '净化水的方法中，蒸馏的净化程度最高，可以得到几乎纯净的水（蒸馏水）。过滤只能去除不溶性杂质，吸附利用活性炭吸附色素和异味，煮沸只能杀灭细菌但不能去除杂质。',
    difficulty: 1,
    options: '["A. 过滤", "B. 吸附", "C. 煮沸", "D. 蒸馏"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-3-3',
    type: 'choice',
    questionText: '下列混合物中，属于溶液的是（）',
    answer: 'A',
    explanation: '溶液是均一、稳定的混合物。蔗糖溶于水形成蔗糖溶液，均一稳定。泥土和水混合后不均一（会沉淀），不属于溶液。植物油和水混合后分层，也不属于溶液（属于乳浊液）。牛奶也是乳浊液。',
    difficulty: 1,
    options: '["A. 蔗糖溶于水", "B. 泥土和水混合", "C. 植物油和水混合", "D. 牛奶"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-3-4',
    type: 'choice',
    questionText: '净化水的过程中，常加入明矾，其作用是（）',
    answer: 'B',
    explanation: '明矾溶于水后生成的胶状物能吸附悬浮在水中的小颗粒，使其凝聚成较大颗粒而沉降下来，便于过滤除去。明矾起的是絮凝（凝聚）作用，不能消毒杀菌。',
    difficulty: 2,
    options: '["A. 消毒杀菌", "B. 促进悬浮杂质沉降", "C. 除去水中所有杂质", "D. 降低水的硬度"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-3-5',
    type: 'choice',
    questionText: '能区分蒸馏水和氯化钠溶液的方法是（）',
    answer: 'C',
    explanation: '区别蒸馏水（纯水）和食盐水最简单的方法是尝味道——蒸馏水无味，食盐水有咸味。蒸发后蒸馏水无残留，食盐水有白色氯化钠固体。测导电性：蒸馏水几乎不导电，食盐水能导电（含自由移动的离子）。',
    difficulty: 2,
    options: '["A. 看颜色（都是无色）", "B. 闻气味（都无气味）", "C. 尝味道（蒸馏水无味，食盐水有咸味）", "D. 测密度（密度相近无法区分）"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-3-6',
    type: 'choice',
    questionText: '硬水和软水的区别是（）',
    answer: 'B',
    explanation: '硬水中含有较多的可溶性钙镁化合物（如Ca(HCO₃)₂、Mg(HCO₃)₂等），软水中含较少的可溶性钙镁化合物。鉴别硬水和软水可用肥皂水：加入肥皂水后泡沫多的是软水，泡沫少且有浮渣的是硬水。',
    difficulty: 2,
    options: '["A. 硬水是纯净物，软水是混合物", "B. 硬水中含较多的可溶性钙镁化合物", "C. 硬水是无色的，软水是有色的", "D. 硬水不能饮用，软水可以饮用"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-3-7',
    type: 'choice',
    questionText: '生活中降低水的硬度的常用方法是（）',
    answer: 'A',
    explanation: '生活中降低水的硬度的方法是煮沸。煮沸时，水中溶解的碳酸氢钙和碳酸氢镁会分解，生成不溶性的碳酸钙和氢氧化镁沉淀，水的硬度降低。实验室中常用蒸馏法软化水。',
    difficulty: 2,
    options: '["A. 煮沸", "B. 过滤", "C. 吸附", "D. 静置"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-3-8',
    type: 'choice',
    questionText: '下列说法正确的是（）',
    answer: 'D',
    explanation: '水电解生成氢气和氧气，说明水由氢氧两种元素组成，不能说含氢气和氧气分子。电解水实验中正极产生O₂、负极产生H₂。为了增强导电性，常在水中加入少量稀硫酸或氢氧化钠。',
    difficulty: 2,
    options: '["A. 水是由氢气和氧气组成的", "B. 水通电分解时，水分子发生了化学变化", "C. 电解水时正极产生氢气", "D. 电解水时正极产生氧气，负极产生氢气"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-3-9',
    type: 'choice',
    questionText: '下列关于溶液的说法正确的是（）',
    answer: 'C',
    explanation: '溶液具有均一性和稳定性，均一是指各部分浓度和性质相同，稳定是指条件不变时溶质不会分离出来。溶液不一定是无色的（如硫酸铜溶液是蓝色的）。溶液一定是混合物。溶剂不一定是水，也可以是酒精等。',
    difficulty: 2,
    options: '["A. 溶液一定是无色的", "B. 溶液一定是纯净物", "C. 溶液具有均一性和稳定性", "D. 溶液中溶剂一定是水"]',
  },

  // ---- fill 6题 ----
  {
    questionKey: 'chemistry-renjiao-9-3-10',
    type: 'fill',
    questionText: '电解水实验中，正极产生的气体是____，负极产生的气体是____，二者的体积比约为____。',
    answer: '氧气、氢气、1:2',
    explanation: '电解水：正极产生氧气（能使带火星的木条复燃），负极产生氢气（能燃烧，产生淡蓝色火焰）。体积比V(H₂):V(O₂) = 2:1。',
    difficulty: 1,
    acceptableAnswers: '["氧气、氢气、1:2", "O₂、H₂、1:2", "氧气，氢气，1:2"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-3-11',
    type: 'fill',
    questionText: '电解水的文字表达式为：水 →(通电)→ ____ + ____。',
    answer: '氢气、氧气',
    explanation: '电解水的文字表达式：水 ──通电──→ 氢气 + 氧气。符号表达式：2H₂O ──通电──→ 2H₂↑ + O₂↑。该反应属于分解反应。',
    difficulty: 1,
    acceptableAnswers: '["氢气、氧气", "氢气，氧气"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-3-12',
    type: 'fill',
    questionText: '天然水通过____、____、____等步骤可以得到较为纯净的水，通过____可以得到纯度最高的水。',
    answer: '沉淀、过滤、吸附、蒸馏',
    explanation: '自来水厂的净水过程：沉淀→过滤→吸附（活性炭）→消毒。其中蒸馏可以得到纯度最高的蒸馏水。',
    difficulty: 2,
    acceptableAnswers: '["沉淀、过滤、吸附、蒸馏", "沉淀，过滤，吸附，蒸馏"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-3-13',
    type: 'fill',
    questionText: '鉴别硬水和软水常用的方法是：取样品加入____搅拌，泡沫多的是____，泡沫少且有浮渣的是____。',
    answer: '肥皂水、软水、硬水',
    explanation: '鉴别硬水和软水：取样品加入等量肥皂水搅拌。软水中加入肥皂水后泡沫丰富，硬水中加入肥皂水后泡沫少且产生浮渣（因为钙镁离子与肥皂反应生成不溶性物质）。',
    difficulty: 2,
    acceptableAnswers: '["肥皂水、软水、硬水", "肥皂水，软水，硬水"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-3-14',
    type: 'fill',
    questionText: '活性炭能净水是因为活性炭具有____性，可以吸附水中的____和异味。',
    answer: '吸附、色素',
    explanation: '活性炭具有疏松多孔的结构，有很强的吸附性，可以吸附水中的色素和异味，使水变清澈、无味。',
    difficulty: 1,
    acceptableAnswers: '["吸附、色素", "吸附，色素"]',
  },
  {
    questionKey: 'chemistry-renjiao-9-3-15',
    type: 'fill',
    questionText: '过滤操作中，玻璃棒的作用是____，漏斗下端要紧靠____。',
    answer: '引流、烧杯内壁',
    explanation: '过滤操作中，玻璃棒的作用是引流（使液体沿玻璃棒缓缓流入漏斗），防止液体飞溅或冲破滤纸。漏斗下端要紧靠烧杯内壁，防止液体溅出。',
    difficulty: 1,
    acceptableAnswers: '["引流、烧杯内壁", "引流，烧杯内壁"]',
  },

  // ---- short_answer 4题 ----
  {
    questionKey: 'chemistry-renjiao-9-3-16',
    type: 'short_answer',
    questionText: '电解水的实验说明了什么事实？',
    answer: '电解水实验说明了以下事实：(1)水是由氢元素和氧元素组成的；(2)在化学反应中，分子可以分成原子，原子不可再分，原子重新组合成新分子——每个水分子分成2个氢原子和1个氧原子，每2个氢原子结合成1个氢分子，每2个氧原子结合成1个氧分子；(3)氢气与氧气的体积比为2:1。',
    explanation: '电解水是证明水组成的经典实验。正极产生O₂，负极产生H₂，体积比1:2，说明水分子中氢原子与氧原子个数比为2:1。',
    difficulty: 2,
  },
  {
    questionKey: 'chemistry-renjiao-9-3-17',
    type: 'short_answer',
    questionText: '请简述过滤操作的注意事项（至少写出三条）。',
    answer: '过滤操作的注意事项（"一贴二低三靠"）：\n一贴：滤纸紧贴漏斗内壁（用水润湿后使滤纸紧贴）。\n二低：滤纸边缘低于漏斗口边缘；液面低于滤纸边缘。\n三靠：玻璃棒靠在三层滤纸一侧；漏斗下端靠在烧杯内壁；烧杯口靠在玻璃棒中部。',
    explanation: '"一贴二低三靠"是过滤操作的经典口诀，确保过滤效果良好、操作规范。',
    difficulty: 2,
  },
  {
    questionKey: 'chemistry-renjiao-9-3-18',
    type: 'short_answer',
    questionText: '某同学取一瓶河水进行净化实验：(1)先加入明矾搅拌静置；(2)过滤；(3)加活性炭；(4)消毒杀菌。请说明每一步的目的。',
    answer: '(1)加入明矾：利用明矾的絮凝作用，使水中悬浮的小颗粒凝聚沉降，使水变澄清。\n(2)过滤：除去水中不溶性固体杂质。\n(3)加活性炭：利用活性炭的吸附性，吸附水中的色素和异味。\n(4)消毒杀菌：加入消毒剂（如氯气），杀灭水中的细菌和病毒，使水可安全饮用。',
    explanation: '这是自来水净化的一般流程：絮凝→沉降→过滤→吸附→消毒。每一步有不同的净化目的。',
    difficulty: 2,
  },
  {
    questionKey: 'chemistry-renjiao-9-3-19',
    type: 'short_answer',
    questionText: '什么是硬水？硬水有哪些危害？如何将硬水软化？',
    answer: '硬水是指含有较多可溶性钙镁化合物的水。硬水的危害：(1)长期饮用硬水对健康不利；(2)烧锅炉用硬水容易形成水垢，浪费燃料，严重时可能引起锅炉爆炸；(3)用硬水洗涤衣服，既浪费肥皂又不易洗净。软化方法：生活中用煮沸法（使可溶性钙镁化合物转化为不溶性沉淀），实验室或工业上用蒸馏法。',
    explanation: '硬水是指含较多Ca²⁺和Mg²⁺的水。硬水软化常用煮沸（生活）和蒸馏（实验室/工业）方法。',
    difficulty: 3,
  },

  // ---- true_false 2题 ----
  {
    questionKey: 'chemistry-renjiao-9-3-20',
    type: 'true_false',
    questionText: '过滤可以除去水中所有的杂质，得到纯水。',
    answer: '错误',
    explanation: '过滤只能除去水中不溶性固体杂质，不能除去溶解在水中的杂质（如盐类等可溶性物质）。要得到纯水（蒸馏水），需要通过蒸馏。',
    difficulty: 1,
  },
  {
    questionKey: 'chemistry-renjiao-9-3-21',
    type: 'true_false',
    questionText: '电解水时产生的氢气和氧气的质量比为1:8。',
    answer: '正确',
    explanation: '电解水生成氢气和氧气：2H₂O →(通电) 2H₂↑ + O₂↑。从化学方程式可知，H₂与O₂的分子个数比为2:1。质量比 = (2×2) : (16×2) = 4 : 32 = 1 : 8。',
    difficulty: 2,
  },
];

// ========== 章节映射与导出函数 ==========

const chapterKeyToData: Record<string, RawQuestion[]> = {
  'chemistry-renjiao-9-0': chapter9_0,
  'chemistry-renjiao-9-1': chapter9_1,
  'chemistry-renjiao-9-2': chapter9_2,
  'chemistry-renjiao-9-3': chapter9_3,
};

export async function seedChemistryRenjiaoQuestions(): Promise<number> {
  // 1. 查找所有化学人教版章节
  const chapters = await prisma.chapter.findMany({
    where: { chapterKey: { startsWith: 'chemistry-renjiao' } },
  });

  // 2. 构建 chapterKey -> chapterId 映射
  const keyToId = new Map<string, string>();
  for (const ch of chapters) {
    keyToId.set(ch.chapterKey, ch.id);
  }

  // 3. 收集所有待插入的记录
  const records: Array<{
    chapterId: string;
    questionKey: string;
    type: string;
    questionText: string;
    answer: string;
    explanation: string;
    difficulty: number;
    options?: string;
    pairs?: string;
    acceptableAnswers?: string;
    isActive: boolean;
  }> = [];

  for (const [chapterKey, questions] of Object.entries(chapterKeyToData)) {
    const chapterId = keyToId.get(chapterKey);
    if (!chapterId) {
      console.warn(`[seed-chemistry-renjiao] 章节 "${chapterKey}" 未找到，跳过 ${questions.length} 道题`);
      continue;
    }

    for (const q of questions) {
      records.push({
        chapterId,
        questionKey: q.questionKey,
        type: q.type,
        questionText: q.questionText,
        answer: q.answer,
        explanation: q.explanation,
        difficulty: q.difficulty,
        options: q.options,
        pairs: q.pairs,
        acceptableAnswers: q.acceptableAnswers,
        isActive: true,
      });
    }
  }

  // 4. 批量插入（分批处理以适配 SQLite 限制）
  const BATCH_SIZE = 500;
  let inserted = 0;
  for (let i = 0; i < records.length; i += BATCH_SIZE) {
    const batch = records.slice(i, i + BATCH_SIZE);
    const result = await prisma.question.createMany({
      data: batch,
      skipDuplicates: true,
    });
    inserted += result.count;
  }

  console.log(`[seed-chemistry-renjiao] 共插入 ${inserted} 道化学人教版题目`);
  return inserted;
}
