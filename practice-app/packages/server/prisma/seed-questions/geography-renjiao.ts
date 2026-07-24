/**
 * 地理人教版初中题目种子数据
 *
 * 涵盖 7~8 年级共 8 个章节，总计 164 道题。
 * 章节对应 seed-data.ts 中 geography-renjiao 的定义：
 *   7年级：地球和地球仪(16)、地球的运动(20)、地图的阅读(24)、陆地和海洋(18)
 *   8年级：从世界看中国(20)、中国的自然环境(24)、中国的自然资源(20)、中国经济的发展(22)
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
  acceptableAnswers?: string; // JSON 字符串，fill 题可接受的其他答案
}

// ========== 7-0 地球和地球仪 (16题) ==========
// choice 7题, fill 4题, short_answer 3题, true_false 2题

const chapter7_0: RawQuestion[] = [
  // ---- choice 7题 ----
  {
    questionKey: 'geography-renjiao-7-0-0',
    type: 'choice',
    questionText: '地球的形状是（）',
    answer: 'C',
    explanation: '地球是一个两极稍扁、赤道略鼓的不规则球体。赤道半径约6378千米，极半径约6357千米，两者相差约21千米。地球并非正球体，但扁率很小，从太空看仍近似球形。',
    difficulty: 1,
    options: '["A. 正方体", "B. 正球体", "C. 不规则球体", "D. 椭圆"]',
  },
  {
    questionKey: 'geography-renjiao-7-0-1',
    type: 'choice',
    questionText: '地球的平均半径约为（）',
    answer: 'B',
    explanation: '地球的平均半径约为6371千米。赤道半径（长半径）约6378千米，极半径（短半径）约6357千米，平均半径取两者之间的值，约6371千米。赤道周长约4万千米。',
    difficulty: 1,
    options: '["A. 6378千米", "B. 6371千米", "C. 6357千米", "D. 40000千米"]',
  },
  {
    questionKey: 'geography-renjiao-7-0-2',
    type: 'choice',
    questionText: '下列不能证明地球是球体的是（）',
    answer: 'A',
    explanation: '麦哲伦船队环球航行、月食时月面被地球挡住形成的弧形阴影、从太空拍摄的地球照片、站得高看得远等都能证明地球是球体。太阳东升西落是由于地球自转产生的现象，不能直接证明地球的形状。',
    difficulty: 2,
    options: '["A. 太阳东升西落", "B. 麦哲伦环球航行", "C. 月食现象", "D. 站得高看得远"]',
  },
  {
    questionKey: 'geography-renjiao-7-0-3',
    type: 'choice',
    questionText: '地球仪上，连接南北两极的线叫做（）',
    answer: 'B',
    explanation: '连接南北两极的线叫经线（也叫子午线），经线指示南北方向，所有经线长度相等，形状为半圆。纬线是与经线垂直的圆圈，指示东西方向。赤道是最长的纬线。',
    difficulty: 1,
    options: '["A. 纬线", "B. 经线", "C. 赤道", "D. 本初子午线"]',
  },
  {
    questionKey: 'geography-renjiao-7-0-4',
    type: 'choice',
    questionText: '0°纬线是指（）',
    answer: 'C',
    explanation: '0°纬线就是赤道，是地球上最长的纬线，长约4万千米。赤道把地球分为南北两半球。0°经线叫本初子午线，经过英国伦敦格林尼治天文台旧址。',
    difficulty: 1,
    options: '["A. 北回归线", "B. 本初子午线", "C. 赤道", "D. 南回归线"]',
  },
  {
    questionKey: 'geography-renjiao-7-0-5',
    type: 'choice',
    questionText: '东经和西经的分界线是（）',
    answer: 'B',
    explanation: '0°经线（本初子午线）是东经和西经的分界线，0°经线向东为东经（E），向西为西经（W）。东西经各分为180°。赤道是南北纬的分界线。',
    difficulty: 1,
    options: '["A. 赤道", "B. 0°经线", "C. 180°经线", "D. 北回归线"]',
  },
  {
    questionKey: 'geography-renjiao-7-0-6',
    type: 'choice',
    questionText: '下列纬度范围中，属于北半球热带的是（）',
    answer: 'D',
    explanation: '热带位于北回归线（23.5°N）和南回归线（23.5°S）之间。北半球的热带范围是0°~23.5°N，对应选项D。北温带是23.5°N~66.5°N，北寒带是66.5°N~90°N。',
    difficulty: 2,
    options: '["A. 23.5°N~66.5°N", "B. 0°~66.5°N", "C. 23.5°S~23.5°N", "D. 0°~23.5°N"]',
  },

  // ---- fill 4题 ----
  {
    questionKey: 'geography-renjiao-7-0-7',
    type: 'fill',
    questionText: '地球表面积约____亿平方千米，其中海洋面积约占____%。',
    answer: '5.1、71',
    explanation: '地球表面积约5.1亿平方千米，其中海洋面积约3.61亿平方千米，占71%，陆地面积约1.49亿平方千米，占29%。"七分海洋，三分陆地"是地球表面海陆分布的概括。',
    difficulty: 1,
    acceptableAnswers: '["5.1、71", "5.1，71", "5.1亿、71"]',
  },
  {
    questionKey: 'geography-renjiao-7-0-8',
    type: 'fill',
    questionText: '经度范围是____°到____°，纬度范围是____°到____°。',
    answer: '0、180、0、90',
    explanation: '经度从本初子午线（0°）向东向西各分180°，最大为180°。纬度从赤道（0°）向北向南各分90°，最大为90°（北极点90°N，南极点90°S）。',
    difficulty: 1,
    acceptableAnswers: '["0、180、0、90", "0，180，0，90"]',
  },
  {
    questionKey: 'geography-renjiao-7-0-9',
    type: 'fill',
    questionText: '本初子午线经过____天文台旧址，赤道经过____洲、____洲和____洲的大陆部分。',
    answer: '格林尼治、非洲、南美、亚洲',
    explanation: '本初子午线（0°经线）经过英国伦敦格林尼治天文台旧址。赤道（0°纬线）横穿非洲、南美洲和亚洲（印度尼西亚）的大陆或岛屿部分。',
    difficulty: 2,
    acceptableAnswers: '["格林尼治、非洲、南美、亚洲", "格林尼治、非洲、南美洲、亚洲"]',
  },
  {
    questionKey: 'geography-renjiao-7-0-10',
    type: 'fill',
    questionText: '北回归线的纬度是____°____，南回归线的纬度是____°____。',
    answer: '23.5、N、23.5、S',
    explanation: '北回归线纬度为23.5°N，南回归线纬度为23.5°S。南北回归线是太阳直射点移动的最北和最南界线，也是热带与温带的分界线。',
    difficulty: 1,
    acceptableAnswers: '["23.5、N、23.5、S", "23.5°、N、23.5°、S"]',
  },

  // ---- short_answer 3题 ----
  {
    questionKey: 'geography-renjiao-7-0-11',
    type: 'short_answer',
    questionText: '写出经线和纬线的主要区别（至少三个方面）。',
    answer: '经线与纬线的主要区别：(1)形状不同：经线是半圆，纬线是完整的圆（除极点外）；(2)长度不同：所有经线长度相等，纬线从赤道向两极逐渐缩短；(3)指示方向不同：经线指示南北方向，纬线指示东西方向；(4)数量不同：经线有无数条，纬线也有无数条，但经线是半圆而纬线是整圆。',
    explanation: '经线和纬线是地球仪上的基本线，掌握它们的区别是学习地理的基础。经线连接南北两极，纬线与经线垂直。',
    difficulty: 2,
  },
  {
    questionKey: 'geography-renjiao-7-0-12',
    type: 'short_answer',
    questionText: '用"站得高，看得远"这一现象说明地球是球体的道理。',
    answer: '如果地球是平的，无论站多高，看到的地平线距离应该差不多。但实际上，站得越高，能看到的地平线越远，这说明地球表面是弯曲的弧面。只有地球是球体时，观察点越高，视线与地表的切点就越远，视野范围才越大。因此"站得高，看得远"可以证明地球是球体。',
    explanation: '这是地球为球体的经典证据之一。类似证据还有：远处驶来的船先看到桅杆再看到船身、月食时地球阴影为弧形等。',
    difficulty: 2,
  },
  {
    questionKey: 'geography-renjiao-7-0-13',
    type: 'short_answer',
    questionText: '请说明利用经纬网定位的意义。',
    answer: '经纬网是地球仪上经线和纬线交织而成的网。利用经纬网可以确定地球表面任何一点的准确位置，即某地的经纬度坐标。经纬网在军事导航、航海、航空、地震监测、气象预报等领域有广泛应用。全球定位系统（GPS）就是利用经纬度来确定位置的。',
    explanation: '经纬网如同地球上的坐标系，是确定地理位置的基础工具，是地理学最重要的基础知识之一。',
    difficulty: 3,
  },

  // ---- true_false 2题 ----
  {
    questionKey: 'geography-renjiao-7-0-14',
    type: 'true_false',
    questionText: '所有的纬线都是圆，所有的经线也都是圆。',
    answer: '错误',
    explanation: '所有的纬线（除极点外）都是完整的圆，赤道是最大的纬线圈。但经线不是圆，每条经线是从北极到南极的半圆，两条相对的经线组成一个经线圈。因此"所有的经线也都是圆"是错误的。',
    difficulty: 1,
  },
  {
    questionKey: 'geography-renjiao-7-0-15',
    type: 'true_false',
    questionText: '地球仪上的地轴是真实存在的。',
    answer: '错误',
    explanation: '地轴是人们假想的地球自转轴，它并不是真实存在的。地轴穿过地心，连接北极和南极，与赤道面垂直约23.5°。地球仪上的地轴是为了方便观察地球自转而设计的模型结构。',
    difficulty: 1,
  },
];

// ========== 7-1 地球的运动 (20题) ==========
// choice 9题, fill 5题, short_answer 4题, true_false 2题

const chapter7_1: RawQuestion[] = [
  // ---- choice 9题 ----
  {
    questionKey: 'geography-renjiao-7-1-0',
    type: 'choice',
    questionText: '地球自转的方向是（）',
    answer: 'A',
    explanation: '地球自转的方向是自西向东。从北极上空看为逆时针方向旋转，从南极上空看为顺时针方向旋转。地球自转一周的时间约为24小时（一天）。',
    difficulty: 1,
    options: '["A. 自西向东", "B. 自东向西", "C. 自南向北", "D. 自北向南"]',
  },
  {
    questionKey: 'geography-renjiao-7-1-1',
    type: 'choice',
    questionText: '地球自转一周的时间约为（）',
    answer: 'B',
    explanation: '地球自转一周约需24小时（恒星日为23小时56分4秒，太阳日为24小时），我们日常使用太阳日。地球自转产生了昼夜更替现象。',
    difficulty: 1,
    options: '["A. 12小时", "B. 24小时", "C. 365天", "D. 一个月"]',
  },
  {
    questionKey: 'geography-renjiao-7-1-2',
    type: 'choice',
    questionText: '地球自转产生的地理现象是（）',
    answer: 'C',
    explanation: '地球自转产生的主要地理现象有：(1)昼夜更替；(2)地方时的差异（东边时间早）；(3)日月星辰的东升西落。四季变化和昼夜长短变化是地球公转产生的。地球形状不是地球运动产生的。',
    difficulty: 1,
    options: '["A. 四季变化", "B. 昼夜长短变化", "C. 昼夜更替", "D. 五带划分"]',
  },
  {
    questionKey: 'geography-renjiao-7-1-3',
    type: 'choice',
    questionText: '地球公转一周的时间约为（）',
    answer: 'B',
    explanation: '地球公转一周约需365.25天（一个回归年约365天5小时48分46秒），我们通常取365天为一年，每4年加1天闰年以弥补误差。地球公转方向也是自西向东，绕太阳运行。',
    difficulty: 1,
    options: '["A. 24小时", "B. 365天", "C. 30天", "D. 24个节气"]',
  },
  {
    questionKey: 'geography-renjiao-7-1-4',
    type: 'choice',
    questionText: '当太阳直射北回归线时，北半球正值（）',
    answer: 'B',
    explanation: '每年6月22日前后（夏至日），太阳直射北回归线（23.5°N），此时北半球获得太阳光热最多，白天最长，夜晚最短，正值夏季。南半球则相反，正值冬季。',
    difficulty: 2,
    options: '["A. 春分日", "B. 夏至日", "C. 秋分日", "D. 冬至日"]',
  },
  {
    questionKey: 'geography-renjiao-7-1-5',
    type: 'choice',
    questionText: '3月21日前后，太阳直射的位置是（）',
    answer: 'C',
    explanation: '3月21日前后为春分日，太阳直射赤道（0°）。此后太阳直射点向北移动，6月22日前后到达北回归线。9月23日前后（秋分日）太阳再次直射赤道，之后向南移动。',
    difficulty: 1,
    options: '["A. 北回归线", "B. 南回归线", "C. 赤道", "D. 北极圈"]',
  },
  {
    questionKey: 'geography-renjiao-7-1-6',
    type: 'choice',
    questionText: '有极昼极夜现象的地带是（）',
    answer: 'D',
    explanation: '极地地区（北极圈以北和南极圈以南）在夏至日和冬至日前后会出现极昼（全天白昼）和极夜（全天黑夜）现象。赤道地区全年昼夜基本等长。温带地区只有昼夜长短的变化，没有极昼极夜现象。',
    difficulty: 2,
    options: '["A. 热带", "B. 温带", "C. 赤道", "D. 寒带"]',
  },
  {
    questionKey: 'geography-renjiao-7-1-7',
    type: 'choice',
    questionText: '地球公转时，地轴始终是（）',
    answer: 'A',
    explanation: '地球公转时，地轴始终是倾斜的，并且倾斜方向保持不变，地轴与公转轨道面的夹角约66.5°（即与黄道面的倾角约23.5°）。正是地轴的倾斜导致了太阳直射点的南北移动和四季变化。',
    difficulty: 2,
    options: '["A. 倾斜的且方向不变", "B. 直立的", "C. 倾斜方向不断变化", "D. 水平的"]',
  },
  {
    questionKey: 'geography-renjiao-7-1-8',
    type: 'choice',
    questionText: '北京市的白昼最长的一天是（）',
    answer: 'B',
    explanation: '北京市位于北半球，夏至日（6月22日前后）太阳直射北半球最北端（北回归线），北半球各地白昼最长、夜晚最短。冬至日（12月22日前后）则相反。',
    difficulty: 2,
    options: '["A. 春分日", "B. 夏至日", "C. 秋分日", "D. 冬至日"]',
  },

  // ---- fill 5题 ----
  {
    questionKey: 'geography-renjiao-7-1-9',
    type: 'fill',
    questionText: '地球的自转和公转方向都是____，周期分别是____和____。',
    answer: '自西向东、24小时（1天）、365天（1年）',
    explanation: '地球自转和公转方向都是自西向东。自转周期约24小时（产生昼夜更替），公转周期约365天（产生四季变化）。',
    difficulty: 1,
    acceptableAnswers: '["自西向东、24小时（1天）、365天（1年）", "自西向东，24小时（1天），365天（1年）", "自西向东、一天、一年"]',
  },
  {
    questionKey: 'geography-renjiao-7-1-10',
    type: 'fill',
    questionText: '地球公转时，由于地轴是____的，导致太阳直射点在____和____之间来回移动。',
    answer: '倾斜的、北回归线、南回归线',
    explanation: '地球公转时地轴始终倾斜（倾角约23.5°）且方向不变，这使太阳直射点在一年中在南回归线（23.5°S）和北回归线（23.5°N）之间来回移动，产生了四季变化和昼夜长短变化。',
    difficulty: 2,
    acceptableAnswers: '["倾斜的、北回归线、南回归线", "倾斜的，北回归线，南回归线"]',
  },
  {
    questionKey: 'geography-renjiao-7-1-11',
    type: 'fill',
    questionText: '从北极上空看，地球自转方向为____时针；从南极上空看为____时针。',
    answer: '逆、顺',
    explanation: '地球自西向东旋转，从北极上空俯视呈逆时针方向，从南极上空俯视呈顺时针方向。这是判断南北半球方向的重要方法。',
    difficulty: 2,
    acceptableAnswers: '["逆、顺", "逆，顺"]',
  },
  {
    questionKey: 'geography-renjiao-7-1-12',
    type: 'fill',
    questionText: '地球的五带中，有太阳直射现象的是____带，有极昼极夜现象的是____带。',
    answer: '热、北寒和南寒（寒）',
    explanation: '热带位于南北回归线之间，一年中有太阳直射现象。寒带位于北极圈以北和南极圈以南，有极昼极夜现象。温带既无太阳直射也无极昼极夜，只有四季变化。',
    difficulty: 1,
    acceptableAnswers: '["热、北寒和南寒（寒）", "热、寒", "热带、寒带"]',
  },
  {
    questionKey: 'geography-renjiao-7-1-13',
    type: 'fill',
    questionText: '12月22日前后为____日，太阳直射____，此时北半球正值____季。',
    answer: '冬至、南回归线、冬',
    explanation: '12月22日前后为冬至日，太阳直射南回归线（23.5°S），南半球白昼最长、获得太阳光热最多，正值夏季；北半球白昼最短、获得太阳光热最少，正值冬季。',
    difficulty: 1,
    acceptableAnswers: '["冬至、南回归线、冬", "冬至，南回归线，冬"]',
  },

  // ---- short_answer 4题 ----
  {
    questionKey: 'geography-renjiao-7-1-14',
    type: 'short_answer',
    questionText: '请说明地球自转和公转各产生哪些地理现象。',
    answer: '地球自转产生的地理现象：(1)昼夜更替；(2)地方时的差异（东边时间比西边早）；(3)日月星辰东升西落。地球公转产生的地理现象：(1)四季变化；(2)昼夜长短变化；(3)五带划分；(4)太阳直射点的南北移动。',
    explanation: '地球运动是产生各种地理现象的根本原因。区分自转和公转产生的不同现象是地理学习的关键知识点。',
    difficulty: 2,
  },
  {
    questionKey: 'geography-renjiao-7-1-15',
    type: 'short_answer',
    questionText: '为什么北半球夏季白昼长、冬季白昼短？',
    answer: '这是因为地球公转时地轴是倾斜的，且倾斜方向始终不变。夏至日前后，太阳直射北半球，北半球各地昼弧长于夜弧，因此白昼长于黑夜。冬至日前后，太阳直射南半球，北半球各地夜弧长于昼弧，因此白昼短于黑夜。赤道地区全年昼夜基本等长。',
    explanation: '地轴倾斜是四季和昼夜长短变化的根本原因。如果地轴不倾斜，全球各地全年昼夜等长，不会有四季之分。',
    difficulty: 3,
  },
  {
    questionKey: 'geography-renjiao-7-1-16',
    type: 'short_answer',
    questionText: '举例说明地球运动与人类生活的关系。',
    answer: '(1)昼夜更替（地球自转）：人类形成日出而作、日落而息的作息规律。(2)四季变化（地球公转）：影响农业生产安排，如春种秋收；(3)昼夜长短变化：夏季白昼长有利于农业生产，日照充足；(4)地方时差异：不同经度地区时间不同，需要划分时区，如北京时间是基于东八区（120°E）的区时。',
    explanation: '地球运动对人类的生产和生活有着深远的影响，农业、交通、日常作息等都与之密切相关。',
    difficulty: 3,
  },
  {
    questionKey: 'geography-renjiao-7-1-17',
    type: 'short_answer',
    questionText: '请说明北半球春分、夏至、秋分、冬至四个节气时太阳直射点的位置和移动方向。',
    answer: '春分（3月21日前后）：太阳直射赤道，之后直射点向北移动。夏至（6月22日前后）：太阳直射北回归线，之后直射点向南移动。秋分（9月23日前后）：太阳直射赤道，之后直射点继续向南移动。冬至（12月22日前后）：太阳直射南回归线，之后直射点向北移动。',
    explanation: '太阳直射点的移动规律是理解四季变化、昼夜长短变化和五带划分的基础。直射点在南北回归线之间做往返运动。',
    difficulty: 2,
  },

  // ---- true_false 2题 ----
  {
    questionKey: 'geography-renjiao-7-1-18',
    type: 'true_false',
    questionText: '地球自转产生了四季变化。',
    answer: '错误',
    explanation: '四季变化是地球公转产生的地理现象，不是自转产生的。地球自转产生的是昼夜更替现象。由于地球公转时地轴倾斜且方向不变，使太阳直射点在南北回归线之间移动，从而产生四季变化。',
    difficulty: 1,
  },
  {
    questionKey: 'geography-renjiao-7-1-19',
    type: 'true_false',
    questionText: '在赤道上，一年四季昼夜长短基本不变。',
    answer: '正确',
    explanation: '赤道是昼夜两半球的分界线（晨昏线）永远经过的地方，因此赤道上全年昼夜基本等长，各约12小时，没有昼夜长短的明显变化。',
    difficulty: 2,
  },
];

// ========== 7-2 地图的阅读 (24题) ==========
// choice 11题, fill 6题, short_answer 5题, true_false 2题

const chapter7_2: RawQuestion[] = [
  // ---- choice 11题 ----
  {
    questionKey: 'geography-renjiao-7-2-0',
    type: 'choice',
    questionText: '地图的三要素是（）',
    answer: 'D',
    explanation: '地图的三要素是比例尺、方向和图例。比例尺表示图上距离与实际距离的比值，方向确定地理事物的空间方位，图例和注记说明地图上各种符号的含义。',
    difficulty: 1,
    options: '["A. 比例尺、方向、颜色", "B. 方向、图例、等高线", "C. 比例尺、图例、颜色", "D. 比例尺、方向、图例"]',
  },
  {
    questionKey: 'geography-renjiao-7-2-1',
    type: 'choice',
    questionText: '比例尺为1:500000的地图，图上1厘米代表实际距离（）',
    answer: 'B',
    explanation: '比例尺=图上距离/实际距离。1:500000表示图上1厘米代表实际500000厘米，即5000米=5千米。换算方法：500000厘米÷100=5000米=5千米。',
    difficulty: 1,
    options: '["A. 50千米", "B. 5千米", "C. 500千米", "D. 0.5千米"]',
  },
  {
    questionKey: 'geography-renjiao-7-2-2',
    type: 'choice',
    questionText: '下列比例尺中最大的是（）',
    answer: 'C',
    explanation: '比例尺分母越小，比例尺越大，表示的内容越详细，范围越小。1:1000的分母最小，因此比例尺最大。1:1000000的分母最大，比例尺最小。',
    difficulty: 2,
    options: '["A. 1:50000", "B. 1:100000", "C. 1:1000", "D. 1:1000000"]',
  },
  {
    questionKey: 'geography-renjiao-7-2-3',
    type: 'choice',
    questionText: '在一般地图上，"上北下南，左西右东"确定方向的方法适用于（）',
    answer: 'A',
    explanation: '"上北下南，左西右东"是判断地图方向的最基本方法，适用于没有指向标的地图。有指向标的地图，箭头指向北方。有经纬网的地图，经线指示南北方向，纬线指示东西方向。',
    difficulty: 1,
    options: '["A. 没有指向标的地图", "B. 有指向标的地图", "C. 有经纬网的地图", "D. 所有地图"]',
  },
  {
    questionKey: 'geography-renjiao-7-2-4',
    type: 'choice',
    questionText: '在等高线地形图上，等高线越密集，表示（）',
    answer: 'B',
    explanation: '在等高线地形图上，等高线越密集的地方，表示地形坡度越陡（越陡峭）；等高线越稀疏的地方，表示坡度越缓（越平坦）。这是判断地形坡度变化的基本方法。',
    difficulty: 1,
    options: '["A. 地势越平坦", "B. 坡度越陡", "C. 地势越高", "D. 地势越低"]',
  },
  {
    questionKey: 'geography-renjiao-7-2-5',
    type: 'choice',
    questionText: '等高线呈闭合状态，且中间高四周低，这种地形是（）',
    answer: 'C',
    explanation: '等高线闭合且中间高、四周低的是山顶（山峰）。中间低、四周高的是盆地（洼地）。等高线向高处凸出的是山谷，向低处凸出的是山脊。',
    difficulty: 1,
    options: '["A. 盆地", "B. 鞍部", "C. 山顶", "D. 山谷"]',
  },
  {
    questionKey: 'geography-renjiao-7-2-6',
    type: 'choice',
    questionText: '在分层设色地形图上，绿色一般表示（）',
    answer: 'A',
    explanation: '分层设色地形图用不同颜色表示不同地形：绿色表示平原，蓝色表示海洋（水域），黄色/棕色表示山地/高原，白色表示雪山冰川。这是阅读彩色地形图的基础知识。',
    difficulty: 1,
    options: '["A. 平原", "B. 山地", "C. 海洋", "D. 高原"]',
  },
  {
    questionKey: 'geography-renjiao-7-2-7',
    type: 'choice',
    questionText: '等高线向低处凸出的是（）',
    answer: 'B',
    explanation: '等高线向低处（数值减小方向）凸出的是山脊，因为山脊是从山顶向外延伸的高地，像山的"脊梁"。等高线向高处凸出的是山谷，山谷是两山之间的低地，常有小河流过。',
    difficulty: 2,
    options: '["A. 山谷", "B. 山脊", "C. 鞍部", "D. 陡崖"]',
  },
  {
    questionKey: 'geography-renjiao-7-2-8',
    type: 'choice',
    questionText: '几条等高线重叠在一起的地方是（）',
    answer: 'D',
    explanation: '多条等高线重叠处表示陡崖（峭壁），是地形陡峭、近于垂直的崖壁。在等高线地形图上，陡崖处等高线非常密集甚至重合，常用锯齿状的符号表示。',
    difficulty: 1,
    options: '["A. 山顶", "B. 山谷", "C. 鞍部", "D. 陡崖"]',
  },
  {
    questionKey: 'geography-renjiao-7-2-9',
    type: 'choice',
    questionText: '海拔在500米以下，地面平坦的地区是（）',
    answer: 'A',
    explanation: '地形类型分类：平原海拔一般在500米以下，地面平坦；高原海拔一般在500米以上，面积较大，地面起伏较小；山地海拔在500米以上，起伏较大，坡度陡；丘陵海拔一般在200~500米，地势起伏和缓。',
    difficulty: 1,
    options: '["A. 平原", "B. 高原", "C. 山地", "D. 丘陵"]',
  },
  {
    questionKey: 'geography-renjiao-7-2-10',
    type: 'choice',
    questionText: '在等高线地形图中，如果要修建水库大坝，应选在（）',
    answer: 'C',
    explanation: '水库大坝应建在山谷（峡谷）最窄处（即等高线最密集处），这里工程量最小、成本最低、大坝最短。山谷呈"V"字形，两侧等高线向高处凸出，大坝建在窄口处能有效蓄水。',
    difficulty: 3,
    options: '["A. 山顶", "B. 山脊", "C. 山谷狭窄处", "D. 盆地中心"]',
  },

  // ---- fill 6题 ----
  {
    questionKey: 'geography-renjiao-7-2-11',
    type: 'fill',
    questionText: '地图的三要素是____、____和____。',
    answer: '比例尺、方向、图例',
    explanation: '比例尺表示图上距离与实际距离的比例关系，方向确定地理事物的方位，图例用符号和注记说明地图上的地理事物。三者缺一不可。',
    difficulty: 1,
    acceptableAnswers: '["比例尺、方向、图例", "比例尺，方向，图例"]',
  },
  {
    questionKey: 'geography-renjiao-7-2-12',
    type: 'fill',
    questionText: '比例尺=____除以____。比例尺的表现形式有____式、____式和____式。',
    answer: '图上距离、实地（实际）距离、数字、线段、文字',
    explanation: '比例尺=图上距离/实际距离。三种表现形式举例：数字式（1:500000）、线段式（画一条标注1厘米代表5千米的线段）、文字式（"图上1厘米代表实地5千米"）。',
    difficulty: 1,
    acceptableAnswers: '["图上距离、实地（实际）距离、数字、线段、文字", "图上距离，实际距离，数字，线段，文字"]',
  },
  {
    questionKey: 'geography-renjiao-7-2-13',
    type: 'fill',
    questionText: '在等高线地形图上，等高线密集表示____，等高线稀疏表示____。',
    answer: '坡陡（坡度大）、坡缓（坡度小）',
    explanation: '等高线的疏密直接反映地面的坡度变化。等高线密集说明在同样的水平距离内海拔变化大，即坡度陡；等高线稀疏说明海拔变化小，即坡度缓。',
    difficulty: 1,
    acceptableAnswers: '["坡陡（坡度大）、坡缓（坡度小）", "坡陡、坡缓"]',
  },
  {
    questionKey: 'geography-renjiao-7-2-14',
    type: 'fill',
    questionText: '地形类型主要有____、____、____和____四种基本类型。',
    answer: '平原、高原、山地、丘陵',
    explanation: '四种基本地形类型：平原（海拔低、地面平坦）、高原（海拔较高、面积大、顶部较平坦）、山地（海拔较高、起伏大、坡度陡）、丘陵（海拔较低、起伏和缓）。',
    difficulty: 1,
    acceptableAnswers: '["平原、高原、山地、丘陵", "平原，高原，山地，丘陵"]',
  },
  {
    questionKey: 'geography-renjiao-7-2-15',
    type: 'fill',
    questionText: '等高线闭合，中间海拔低四周海拔高，这是____地形。两山顶之间的低洼部分是____。',
    answer: '盆地（洼地）、鞍部',
    explanation: '等高线闭合且中间低、四周高的是盆地（洼地）。鞍部是两个山顶之间地势较低的部分，形似马鞍，常位于两组闭合等高线之间。',
    difficulty: 2,
    acceptableAnswers: '["盆地（洼地）、鞍部", "盆地、鞍部"]',
  },
  {
    questionKey: 'geography-renjiao-7-2-16',
    type: 'fill',
    questionText: '根据用途，地图可分为____地图、____地图和____地图等。',
    answer: '自然、社会经济、专题（或具体举例）',
    explanation: '地图按内容分为普通地图和专题地图。普通地图包括自然地图（地形图、气候图等）和社会经济地图（人口图、交通图等）。专题地图是突出表示某一种或几种专题内容的地图。',
    difficulty: 2,
    acceptableAnswers: '["自然、社会经济、专题（或具体举例）", "地形、交通、旅游", "自然、人文、其他"]',
  },

  // ---- short_answer 5题 ----
  {
    questionKey: 'geography-renjiao-7-2-17',
    type: 'short_answer',
    questionText: '如何在有经纬网的地图上判断方向？',
    answer: '在有经纬网的地图上：(1)经线指示南北方向——沿着经线，指向北极点（度数增大到90°N）的方向为北方，指向南极点（度数增大到90°S）的方向为南方；(2)纬线指示东西方向——沿着纬线，地球自转方向（自西向东）为东方，反方向为西方。东经度数向东增大，西经度数向西增大。',
    explanation: '经纬网定向是最精确的方向判断方法，适用于大范围和小范围地图。经纬线本身构成了天然的坐标系。',
    difficulty: 2,
  },
  {
    questionKey: 'geography-renjiao-7-2-18',
    type: 'short_answer',
    questionText: '比例尺大小与地图内容详略、范围大小之间有什么关系？',
    answer: '比例尺大小与地图内容详略和范围大小有如下关系：(1)比例尺越大（分母越小），图上表示的内容越详细，但表示的范围越小；(2)比例尺越小（分母越大），图上表示的内容越简略，但表示的范围越大。例如，1:1000的地图比1:100000的地图内容详细但范围小得多。',
    explanation: '大比例尺地图适合表示小范围区域（如校园图、城市图），小比例尺地图适合表示大范围区域（如世界地图、中国地图）。选择比例尺要根据实际需要决定。',
    difficulty: 2,
  },
  {
    questionKey: 'geography-renjiao-7-2-19',
    type: 'short_answer',
    questionText: '请根据等高线地形图的判读方法，描述如何识别山脊和山谷。',
    answer: '在等高线地形图上：(1)山脊——等高线向低处（数值减小的方向）凸出，山脊线位于凸出的顶端。山脊是山体的隆起部分，像鱼的脊背。(2)山谷——等高线向高处（数值增大的方向）凸出，山谷线位于凸出的底部。山谷是两山脊之间的低洼部分，常有小河流过。简单口诀："凸高为谷，凸低为脊"。',
    explanation: '山脊和山谷的判断是等高线地形图阅读的难点之一。掌握"凸高为谷，凸低为脊"的口诀可以快速判断。',
    difficulty: 2,
  },
  {
    questionKey: 'geography-renjiao-7-2-20',
    type: 'short_answer',
    questionText: '选择合适的地图比例尺。小明想绘制学校的平面图，应选择多大的比例尺？为什么？',
    answer: '小明应选择大比例尺（如1:1000或1:2000）。原因：学校面积较小，需要详细表示教学楼、操场、道路等地理事物，大比例尺地图能精确反映小范围内的详细信息。如果用小比例尺（如1:500000），学校在图上会非常小，无法表示内部细节。',
    explanation: '大范围选小比例尺、小范围选大比例尺是选择地图比例尺的基本原则。',
    difficulty: 2,
  },
  {
    questionKey: 'geography-renjiao-7-2-21',
    type: 'short_answer',
    questionText: '地形剖面图有什么作用？如何从等高线地形图上绘制地形剖面图？',
    answer: '地形剖面图的作用是直观地表示沿某条剖面线的地面起伏状况，可以清楚地看到地势的高低变化和坡度的陡缓。绘制方法：(1)在等高线地形图上确定剖面线；(2)在剖面图下方画出与剖面线等长的水平基线；(3)从剖面线与各等高线的交点处，将各点海拔高度对应标记在剖面图上；(4)用平滑曲线连接各点即得到地形剖面图。',
    explanation: '地形剖面图能将二维的等高线地形图转化为三维直观的地势剖面，是分析地形特征的重要工具。',
    difficulty: 3,
  },

  // ---- true_false 2题 ----
  {
    questionKey: 'geography-renjiao-7-2-22',
    type: 'true_false',
    questionText: '比例尺越大，地图所表示的范围越大。',
    answer: '错误',
    explanation: '比例尺越大（分母越小），地图表示的内容越详细，但表示的范围越小。比例尺越小（分母越大），地图表示的范围越大，但内容越简略。比例尺大小与地图范围成反比关系。',
    difficulty: 1,
  },
  {
    questionKey: 'geography-renjiao-7-2-23',
    type: 'true_false',
    questionText: '在分层设色地形图中，蓝色通常表示海洋。',
    answer: '正确',
    explanation: '在分层设色地形图中，蓝色表示海洋和水域。水深不同蓝色深浅不同：浅蓝色表示浅海，深蓝色表示深海。绿色表示平原，黄色和棕色表示山地和高原。',
    difficulty: 1,
  },
];

// ========== 7-3 陆地和海洋 (18题) ==========
// choice 8题, fill 5题, short_answer 3题, true_false 2题

const chapter7_3: RawQuestion[] = [
  // ---- choice 8题 ----
  {
    questionKey: 'geography-renjiao-7-3-0',
    type: 'choice',
    questionText: '地球表面海陆面积比例约为（）',
    answer: 'B',
    explanation: '地球表面总面积约5.1亿平方千米，其中海洋面积约3.61亿平方千米，占71%；陆地面积约1.49亿平方千米，占29%。"七分海洋，三分陆地"是对地球表面海陆分布的形象概括。',
    difficulty: 1,
    options: '["A. 陆地占71%", "B. 海洋占71%", "C. 各占50%", "D. 海洋占90%"]',
  },
  {
    questionKey: 'geography-renjiao-7-3-1',
    type: 'choice',
    questionText: '世界上面积最大的大洲是（）',
    answer: 'A',
    explanation: '七大洲按面积从大到小排列：亚洲（约4400万km²）、非洲（约3000万km²）、北美洲（约2400万km²）、南美洲（约1800万km²）、南极洲（约1400万km²）、欧洲（约1000万km²）、大洋洲（约900万km²）。',
    difficulty: 1,
    options: '["A. 亚洲", "B. 非洲", "C. 北美洲", "D. 南美洲"]',
  },
  {
    questionKey: 'geography-renjiao-7-3-2',
    type: 'choice',
    questionText: '世界上面积最大的大洋是（）',
    answer: 'B',
    explanation: '四大洋按面积从大到小排列：太平洋（约1.8亿km²）、大西洋（约9000万km²）、印度洋（约7500万km²）、北冰洋（约1400万km²）。太平洋面积最大，几乎占全球海洋面积的一半。',
    difficulty: 1,
    options: '["A. 大西洋", "B. 太平洋", "C. 印度洋", "D. 北冰洋"]',
  },
  {
    questionKey: 'geography-renjiao-7-3-3',
    type: 'choice',
    questionText: '全部位于北半球的大洲是（）',
    answer: 'C',
    explanation: '全部位于北半球的大洲是欧洲和北美洲。亚洲、非洲、南美洲和南极洲跨赤道，部分在北半球部分在南半球。大洋洲主要在南半球，也有少部分在北半球。',
    difficulty: 2,
    options: '["A. 非洲", "B. 亚洲", "C. 北美洲", "D. 大洋洲"]',
  },
  {
    questionKey: 'geography-renjiao-7-3-4',
    type: 'choice',
    questionText: '亚洲和非洲的分界线是（）',
    answer: 'D',
    explanation: '亚洲和非洲以苏伊士运河为界。其他重要洲界线：亚洲和欧洲以乌拉尔山脉—乌拉尔河—大高加索山脉—土耳其海峡为界；南北美洲以巴拿马运河为界。',
    difficulty: 1,
    options: '["A. 巴拿马运河", "B. 乌拉尔山脉", "C. 白令海峡", "D. 苏伊士运河"]',
  },
  {
    questionKey: 'geography-renjiao-7-3-5',
    type: 'choice',
    questionText: '大陆漂移学说是由哪位科学家提出的（）',
    answer: 'A',
    explanation: '大陆漂移学说是德国气象学家魏格纳在1912年提出的。他发现大西洋两岸（特别是非洲西海岸和南美洲东海岸）的海岸线轮廓非常吻合，从而提出了大陆漂移假说，认为2亿年前所有大陆连为一体（盘古大陆），后来分裂漂移到现在的位置。',
    difficulty: 1,
    options: '["A. 魏格纳", "B. 牛顿", "C. 哥伦布", "D. 达尔文"]',
  },
  {
    questionKey: 'geography-renjiao-7-3-6',
    type: 'choice',
    questionText: '下列关于海陆分布的说法，正确的是（）',
    answer: 'C',
    explanation: '地球上的海陆分布不均匀：陆地主要集中在北半球，但北极周围是海洋；海洋主要集中在南半球，但南极周围是陆地。所以不能简单地说"陆地集中在北半球、海洋集中在南半球"。任何半球都是海洋面积大于陆地面积。',
    difficulty: 2,
    options: '["A. 陆地主要集中在南半球", "B. 北半球全是陆地", "C. 任何半球都是海洋面积大于陆地面积", "D. 海陆面积各占一半"]',
  },
  {
    questionKey: 'geography-renjiao-7-3-7',
    type: 'choice',
    questionText: '板块构造学说认为，全球大致分为几大板块（）',
    answer: 'B',
    explanation: '全球岩石圈分为六大板块：亚欧板块、非洲板块、美洲板块、太平洋板块、印度洋板块、南极洲板块。其中太平洋板块几乎全是海洋，其余板块既有陆地也有海洋。板块交界处地壳活跃，多地震和火山。',
    difficulty: 2,
    options: '["A. 四大板块", "B. 六大板块", "C. 七大板块", "D. 八大板块"]',
  },

  // ---- fill 5题 ----
  {
    questionKey: 'geography-renjiao-7-3-8',
    type: 'fill',
    questionText: '七大洲中，面积最大的是____，面积最小的是____。',
    answer: '亚洲、大洋洲',
    explanation: '七大洲面积排序口诀：亚非北南美，南极欧大洋。亚洲最大约4400万km²，大洋洲最小约900万km²。',
    difficulty: 1,
    acceptableAnswers: '["亚洲、大洋洲", "亚洲，大洋洲"]',
  },
  {
    questionKey: 'geography-renjiao-7-3-9',
    type: 'fill',
    questionText: '四大洋中，面积最大的是____，面积最小的是____，纬度最高的是____。',
    answer: '太平洋、北冰洋、北冰洋',
    explanation: '太平洋面积最大（约1.8亿km²），北冰洋面积最小（约1400万km²），同时北冰洋位于最北端，纬度最高，大部分被冰层覆盖。',
    difficulty: 1,
    acceptableAnswers: '["太平洋、北冰洋、北冰洋", "太平洋，北冰洋，北冰洋"]',
  },
  {
    questionKey: 'geography-renjiao-7-3-10',
    type: 'fill',
    questionText: '亚洲和欧洲的分界线是____山脉、____河和____海峡。',
    answer: '乌拉尔、乌拉尔、土耳其',
    explanation: '亚欧分界线自北向南为：乌拉尔山脉—乌拉尔河—里海—大高加索山脉—黑海—土耳其海峡（博斯普鲁斯海峡、马尔马拉海、达达尼尔海峡）。',
    difficulty: 2,
    acceptableAnswers: '["乌拉尔、乌拉尔、土耳其", "乌拉尔山脉、乌拉尔河、土耳其海峡"]',
  },
  {
    questionKey: 'geography-renjiao-7-3-11',
    type: 'fill',
    questionText: '南北美洲的分界线是____运河，亚洲和非洲的分界线是____运河。',
    answer: '巴拿马、苏伊士',
    explanation: '巴拿马运河沟通太平洋和大西洋，是南北美洲的分界线。苏伊士运河沟通地中海和红海，是亚洲和非洲的分界线。这两条人工运河在世界交通和地理分界上有重要地位。',
    difficulty: 1,
    acceptableAnswers: '["巴拿马、苏伊士", "巴拿马运河、苏伊士运河"]',
  },
  {
    questionKey: 'geography-renjiao-7-3-12',
    type: 'fill',
    questionText: '板块构造学说认为，板块内部地壳比较____，板块交界处地壳比较____，多____和____。',
    answer: '稳定、活跃、地震、火山',
    explanation: '板块内部地壳相对稳定，地壳运动较弱。板块与板块的交界处，地壳运动活跃，多地震、火山和褶皱山脉。世界两大地震带：环太平洋地震带和地中海—喜马拉雅地震带，都位于板块交界处。',
    difficulty: 2,
    acceptableAnswers: '["稳定、活跃、地震、火山", "稳定，活跃，地震，火山"]',
  },

  // ---- short_answer 3题 ----
  {
    questionKey: 'geography-renjiao-7-3-13',
    type: 'short_answer',
    questionText: '简述大陆漂移学说的主要观点。',
    answer: '大陆漂移学说的主要观点：(1)约2亿年前，地球上所有大陆是连在一起的，称为"盘古大陆"（泛大陆），周围是统一的泛大洋；(2)后来泛大陆分裂成几块大陆，缓慢漂移到现在的位置；(3)大西洋是大陆分裂后形成的，大西洋两岸的大陆轮廓可以拼合；(4)漂移的证据包括大西洋两岸海岸线吻合、古生物化石相似、地层构造连续等。',
    explanation: '魏格纳从大西洋两岸的海岸线吻合出发，综合古生物、地质、古气候等证据提出了大陆漂移学说，奠定了现代板块构造理论的基础。',
    difficulty: 2,
  },
  {
    questionKey: 'geography-renjiao-7-3-14',
    type: 'short_answer',
    questionText: '请举例说明板块运动（张裂和碰撞挤压）对地形的影响。',
    answer: '板块运动对地形的影响：(1)板块张裂——常形成裂谷和海洋。例如：东非大裂谷是由非洲板块内部的张裂形成的；大西洋是由美洲板块和亚欧/非洲板块张裂形成的。(2)板块碰撞挤压——常形成山脉和海沟。例如：喜马拉雅山脉是由印度洋板块与亚欧板块碰撞挤压形成的；太平洋板块与亚欧板块碰撞形成马里亚纳海沟。',
    explanation: '板块交界处的两种主要运动方式——张裂和碰撞挤压——塑造了地球表面的基本地形，是理解造山运动和海洋形成的关键。',
    difficulty: 3,
  },
  {
    questionKey: 'geography-renjiao-7-3-15',
    type: 'short_answer',
    questionText: '为什么说地球上的陆地和海洋不是静止不变的？',
    answer: '地球上的陆地和海洋处于不断运动变化之中：(1)根据大陆漂移学说和板块构造学说，大陆在不断缓慢移动；(2)地壳运动（地震、火山、褶皱等）持续改变着地表形态；(3)海平面上升和下降会改变陆地面积（如气候变化导致冰川消融）；(4)人类活动也改变着海陆分布（如填海造陆）。从地球演化历史看，海陆分布格局一直在变化。',
    explanation: '海陆变迁是地球演化的重要内容，无论是长期的板块运动还是短期的地壳变动，都说明海陆分布不是固定不变的。',
    difficulty: 2,
  },

  // ---- true_false 2题 ----
  {
    questionKey: 'geography-renjiao-7-3-16',
    type: 'true_false',
    questionText: '赤道穿过的大洲有亚洲、非洲、南美洲和大洋洲。',
    answer: '正确',
    explanation: '赤道穿过的大洲确实有亚洲（印度尼西亚）、非洲（中部）、南美洲（北部亚马逊流域）和大洋洲（部分岛屿）。赤道没有穿过北美洲、欧洲和南极洲。因此该说法是正确的。',
    difficulty: 2,
  },
  {
    questionKey: 'geography-renjiao-7-3-17',
    type: 'true_false',
    questionText: '红海在不断扩张，是因为它位于板块张裂地带。',
    answer: '正确',
    explanation: '红海位于非洲板块和印度洋板块的张裂地带，板块不断拉伸使红海面积逐渐扩大。据科学家研究，红海是未来新的大洋雏形，几千万年后可能成为新的大洋。',
    difficulty: 2,
  },
];

// ========== 8-0 从世界看中国 (20题) ==========
// choice 9题, fill 5题, short_answer 4题, true_false 2题

const chapter8_0: RawQuestion[] = [
  // ---- choice 9题 ----
  {
    questionKey: 'geography-renjiao-8-0-0',
    type: 'choice',
    questionText: '中国的领土面积约为（）',
    answer: 'B',
    explanation: '中国领土面积约960万平方千米，居世界第三位（仅次于俄罗斯和加拿大）。中国陆地领土面积约960万平方千米，管辖海域面积约300万平方千米。',
    difficulty: 1,
    options: '["A. 600万平方千米", "B. 960万平方千米", "C. 1200万平方千米", "D. 997万平方千米"]',
  },
  {
    questionKey: 'geography-renjiao-8-0-1',
    type: 'choice',
    questionText: '中国领土最南端位于（）',
    answer: 'D',
    explanation: '中国领土四端：最北端——黑龙江省漠河以北黑龙江主航道中心线（53°N）；最南端——海南省南沙群岛曾母暗沙（约4°N）；最东端——黑龙江省黑龙江与乌苏里江汇合处（135°E）；最西端——新疆维吾尔自治区帕米尔高原（约73°E）。',
    difficulty: 1,
    options: '["A. 海南岛", "B. 台湾岛", "C. 西沙群岛", "D. 曾母暗沙"]',
  },
  {
    questionKey: 'geography-renjiao-8-0-2',
    type: 'choice',
    questionText: '与中国陆地相邻的国家有多少个（）',
    answer: 'C',
    explanation: '与中国陆地相邻的国家有14个：朝鲜、俄罗斯、蒙古、哈萨克斯坦、吉尔吉斯斯坦、塔吉克斯坦、阿富汗、巴基斯坦、印度、尼泊尔、不丹、缅甸、老挝、越南。隔海相望的国家有6个：韩国、日本、菲律宾、马来西亚、文莱、印度尼西亚。',
    difficulty: 2,
    options: '["A. 12个", "B. 13个", "C. 14个", "D. 15个"]',
  },
  {
    questionKey: 'geography-renjiao-8-0-3',
    type: 'choice',
    questionText: '中国人口最多的省级行政区是（）',
    answer: 'B',
    explanation: '广东省是中国人口最多的省级行政区，常住人口超过1.2亿。其次是山东省、河南省。西藏自治区人口最少（约360万）。',
    difficulty: 1,
    options: '["A. 山东省", "B. 广东省", "C. 河南省", "D. 四川省"]',
  },
  {
    questionKey: 'geography-renjiao-8-0-4',
    type: 'choice',
    questionText: '中国人口分布的特点是（）',
    answer: 'A',
    explanation: '中国人口分布极不均匀，以黑龙江省黑河到云南省腾冲的"黑河—腾冲线"（又称胡焕庸线）为界：东南部人口密集（占94%以上），西北部人口稀疏（不到6%）。造成这种差异的主要原因是自然环境差异。',
    difficulty: 2,
    options: '["A. 东部人口多，西部人口少", "B. 西部人口多，东部人口少", "C. 南方人口多，北方人口少", "D. 北方人口多，南方人口少"]',
  },
  {
    questionKey: 'geography-renjiao-8-0-5',
    type: 'choice',
    questionText: '中国面积最大的省级行政区是（）',
    answer: 'B',
    explanation: '新疆维吾尔自治区是中国面积最大的省级行政区，面积约166万平方千米。其次是西藏自治区（约122万km²）、内蒙古自治区（约118万km²）、青海省（约72万km²）。',
    difficulty: 1,
    options: '["A. 西藏自治区", "B. 新疆维吾尔自治区", "C. 内蒙古自治区", "D. 青海省"]',
  },
  {
    questionKey: 'geography-renjiao-8-0-6',
    type: 'choice',
    questionText: '我国人口最多的少数民族是（）',
    answer: 'C',
    explanation: '我国少数民族人口最多的是壮族，约有1800万人，主要分布在广西壮族自治区。其次是回族、满族、维吾尔族、苗族、彝族、土家族、藏族、蒙古族等。',
    difficulty: 1,
    options: '["A. 回族", "B. 满族", "C. 壮族", "D. 维吾尔族"]',
  },
  {
    questionKey: 'geography-renjiao-8-0-7',
    type: 'choice',
    questionText: '下列省级行政区中，全部为自治区的是（）',
    answer: 'D',
    explanation: '中国的五个自治区是内蒙古自治区、新疆维吾尔自治区、广西壮族自治区、宁夏回族自治区和西藏自治区。注意内蒙古自治区简称"内蒙古"，不叫"蒙古族自治区"。',
    difficulty: 1,
    options: '["A. 北京、天津、上海", "B. 广东、广西、海南", "C. 四川、贵州、云南", "D. 新疆、西藏、广西"]',
  },
  {
    questionKey: 'geography-renjiao-8-0-8',
    type: 'choice',
    questionText: '北回归线自西向东穿过的省级行政区是（）',
    answer: 'A',
    explanation: '北回归线自西向东穿过中国的省级行政区：云南省、广西壮族自治区、广东省、台湾省。这四个省区位于热带和亚热带交汇处，热量条件优越。',
    difficulty: 2,
    options: '["A. 云、桂、粤、台", "B. 桂、粤、闽、台", "C. 川、渝、鄂、赣", "D. 滇、贵、桂、粤"]',
  },

  // ---- fill 5题 ----
  {
    questionKey: 'geography-renjiao-8-0-9',
    type: 'fill',
    questionText: '中国位于____半球和____半球，是____洲东部、____洋西岸的国家。',
    answer: '东、北、亚（亚洲）、太平',
    explanation: '中国位于东半球和北半球，亚洲东部、太平洋西岸。海陆位置使中国东部深受海洋影响，气候湿润；西部深居内陆，气候干旱。',
    difficulty: 1,
    acceptableAnswers: '["东、北、亚（亚洲）、太平", "东、北、亚洲、太平洋"]',
  },
  {
    questionKey: 'geography-renjiao-8-0-10',
    type: 'fill',
    questionText: '中国陆地领土面积约____万平方千米，居世界第____位。',
    answer: '960、三',
    explanation: '中国陆地领土面积约960万平方千米，仅次于俄罗斯（约1710万km²）和加拿大（约997万km²），居世界第三位。',
    difficulty: 1,
    acceptableAnswers: '["960、三", "960，三", "960、3"]',
  },
  {
    questionKey: 'geography-renjiao-8-0-11',
    type: 'fill',
    questionText: '我国人口分布的地理分界线是____到____一线，此线东南部人口____。',
    answer: '黑河、腾冲、密集',
    explanation: '"黑河—腾冲线"（胡焕庸线）是我国重要的人口地理分界线，东南半壁面积约占全国的43%，却集中了全国94%以上的人口。',
    difficulty: 2,
    acceptableAnswers: '["黑河、腾冲、密集", "黑河，腾冲，密集"]',
  },
  {
    questionKey: 'geography-renjiao-8-0-12',
    type: 'fill',
    questionText: '中国共有____个省级行政区，其中省____个，自治区____个，直辖市____个，特别行政区____个。',
    answer: '34、23、5、4、2',
    explanation: '中国共有34个省级行政区：23个省、5个自治区、4个直辖市（北京、天津、上海、重庆）、2个特别行政区（香港、澳门）。',
    difficulty: 1,
    acceptableAnswers: '["34、23、5、4、2", "34，23，5，4，2"]',
  },
  {
    questionKey: 'geography-renjiao-8-0-13',
    type: 'fill',
    questionText: '我国与____个国家陆地相邻，与____个国家隔海相望。',
    answer: '14、6',
    explanation: '中国陆上邻国14个（朝、俄、蒙、哈、吉、塔、阿、巴、印、尼、不、缅、老、越），隔海相望的国家6个（韩、日、菲、马、文、印尼）。',
    difficulty: 2,
    acceptableAnswers: '["14、6", "14，6"]',
  },

  // ---- short_answer 4题 ----
  {
    questionKey: 'geography-renjiao-8-0-14',
    type: 'short_answer',
    questionText: '请说明中国海陆位置的优势。',
    answer: '中国海陆位置的优势：(1)海岸线漫长（约1.8万千米），优良港湾多，有利于发展海洋事业和对外交往；(2)东部沿海地区深受海洋影响，气候湿润，有利于农业生产；(3)既有广大的陆地，又有广阔的海域，资源丰富；(4)地处亚洲东部、太平洋西岸，是联系亚、欧、非和大洋洲的海上枢纽。',
    explanation: '海陆位置是影响一个国家发展的重要自然条件。中国既有广阔的陆地腹地，又有漫长的海岸线，海陆兼备的位置非常优越。',
    difficulty: 2,
  },
  {
    questionKey: 'geography-renjiao-8-0-15',
    type: 'short_answer',
    questionText: '简述我国实行计划生育政策的原因和意义。',
    answer: '原因：我国人口基数大、增长快，给资源、环境和社会经济发展带来巨大压力。实行计划生育政策可以有效控制人口过快增长。意义：(1)减轻人口对资源、环境的压力；(2)有利于提高人均资源占有量；(3)有利于提高人口素质和人民生活水平；(4)促进经济社会的可持续发展。目前我国实行"二孩""三孩"政策，适应人口老龄化的新形势。',
    explanation: '人口政策需要根据国情变化适时调整。从"一对夫妇只生育一个孩子"到"全面二孩"再到"三孩"政策，体现了我国人口政策的与时俱进。',
    difficulty: 3,
  },
  {
    questionKey: 'geography-renjiao-8-0-16',
    type: 'short_answer',
    questionText: '中国的民族分布有什么特点？',
    answer: '中国民族的分布特点：(1)大散居——各民族在全国范围内都有分布；(2)小聚居——各少数民族相对集中在一定的区域内；(3)交错杂居——汉族和少数民族交错居住，没有大面积的单一民族区域。总体上，汉族主要集中在东部和中部，少数民族主要分布在西南、西北和东北边疆地区。',
    explanation: '民族"大散居、小聚居、交错杂居"的分布格局是我国民族关系和谐、多元一体的地理基础。各民族在长期交往中形成了独特的文化。',
    difficulty: 2,
  },
  {
    questionKey: 'geography-renjiao-8-0-17',
    type: 'short_answer',
    questionText: '请列举我国领土的四至点（最北、最南、最东、最西）及其大致经纬度。',
    answer: '我国领土四至点：最北端——黑龙江省漠河以北的黑龙江主航道中心线（约53°N）；最南端——海南省南沙群岛的曾母暗沙（约4°N附近）；最东端——黑龙江省黑龙江与乌苏里江主航道中心线的汇合处（约135°E）；最西端——新疆帕米尔高原（约73°E）。南北跨纬度约49°，东西跨经度约62°。',
    explanation: '南北纬度跨度大导致气候差异显著，东西经度跨度大导致时间差异大（东西时差约4小时），这些都是我国地理环境的重要特征。',
    difficulty: 2,
  },

  // ---- true_false 2题 ----
  {
    questionKey: 'geography-renjiao-8-0-18',
    type: 'true_false',
    questionText: '台湾省是中国面积最大的省级行政区。',
    answer: '错误',
    explanation: '中国面积最大的省级行政区是新疆维吾尔自治区（约166万平方千米），不是台湾省。台湾省面积约3.6万平方千米。',
    difficulty: 1,
  },
  {
    questionKey: 'geography-renjiao-8-0-19',
    type: 'true_false',
    questionText: '中国共有56个民族，其中汉族人口占全国总人口的90%以上。',
    answer: '正确',
    explanation: '中国共有56个民族，汉族人口约占全国总人口的91%。55个少数民族人口约占9%。汉族分布遍及全国，少数民族主要分布在西南、西北和东北地区。',
    difficulty: 1,
  },
];

// ========== 8-1 中国的自然环境 (24题) ==========
// choice 11题, fill 6题, short_answer 5题, true_false 2题

const chapter8_1: RawQuestion[] = [
  // ---- choice 11题 ----
  {
    questionKey: 'geography-renjiao-8-1-0',
    type: 'choice',
    questionText: '我国地势的特征是（）',
    answer: 'C',
    explanation: '我国地势西高东低，呈三级阶梯状分布：第一级阶梯（青藏高原，海拔4000米以上）、第二级阶梯（内蒙古高原、黄土高原、云贵高原等，海拔1000~2000米）、第三级阶梯（华北平原、东北平原、长江中下游平原等，海拔500米以下）。',
    difficulty: 1,
    options: '["A. 东高西低", "B. 中间高四周低", "C. 西高东低，呈阶梯状", "D. 北高南低"]',
  },
  {
    questionKey: 'geography-renjiao-8-1-1',
    type: 'choice',
    questionText: '我国地势第一级阶梯的地形区主要是（）',
    answer: 'A',
    explanation: '第一级阶梯位于我国西南部，以青藏高原为主，平均海拔4000米以上，被称为"世界屋脊"。柴达木盆地也位于第一级阶梯内。',
    difficulty: 1,
    options: '["A. 青藏高原", "B. 内蒙古高原", "C. 黄土高原", "D. 云贵高原"]',
  },
  {
    questionKey: 'geography-renjiao-8-1-2',
    type: 'choice',
    questionText: '下列山脉中，属于我国地势第一、二级阶梯分界线的是（）',
    answer: 'D',
    explanation: '第一、二级阶梯分界线：昆仑山脉—祁连山脉—横断山脉。第二、三级阶梯分界线：大兴安岭—太行山脉—巫山—雪峰山。秦岭是南北方的分界线，不是阶梯分界线。',
    difficulty: 2,
    options: '["A. 大兴安岭", "B. 太行山", "C. 秦岭", "D. 横断山脉"]',
  },
  {
    questionKey: 'geography-renjiao-8-1-3',
    type: 'choice',
    questionText: '我国面积最大的平原是（）',
    answer: 'B',
    explanation: '我国三大平原：东北平原（最大，约35万km²）、华北平原（第二大，约30万km²）、长江中下游平原（第三大，约20万km²）。东北平原由三江平原、松嫩平原和辽河平原组成。',
    difficulty: 1,
    options: '["A. 华北平原", "B. 东北平原", "C. 长江中下游平原", "D. 成都平原"]',
  },
  {
    questionKey: 'geography-renjiao-8-1-4',
    type: 'choice',
    questionText: '我国冬季南北温差大，其主要影响因素是（）',
    answer: 'A',
    explanation: '我国冬季南北温差大的根本原因是纬度因素。北方纬度高，太阳高度角小，白昼短，获得的热量少；南方纬度低，太阳高度角大，白昼长，获得的热量多。冬季南北温差可达50°C以上。',
    difficulty: 1,
    options: '["A. 纬度位置", "B. 海陆位置", "C. 地形", "D. 洋流"]',
  },
  {
    questionKey: 'geography-renjiao-8-1-5',
    type: 'choice',
    questionText: '秦岭—淮河一线是（）',
    answer: 'D',
    explanation: '秦岭—淮河一线是我国重要的地理分界线：1月0°C等温线通过的地方；800mm等降水量线通过的地方；暖温带与亚热带分界线；湿润区与半湿润区分界线；北方地区与南方地区分界线等。',
    difficulty: 2,
    options: '["A. 只是我国南北方分界线", "B. 只是我国季风区与非季风区分界线", "C. 只是我国干旱区与半干旱区分界线", "D. 我国南北方和亚热带与暖温带等多重分界线"]',
  },
  {
    questionKey: 'geography-renjiao-8-1-6',
    type: 'choice',
    questionText: '我国降水量分布的总趋势是（）',
    answer: 'A',
    explanation: '我国降水量的空间分布特点：从东南沿海向西北内陆逐渐减少。东南沿海年降水量在1600mm以上（如台湾火烧寮），西北内陆年降水量不足50mm（如吐鲁番盆地）。',
    difficulty: 1,
    options: '["A. 从东南沿海向西北内陆递减", "B. 从西北向东南递减", "C. 从北向南递减", "D. 各地均匀分布"]',
  },
  {
    questionKey: 'geography-renjiao-8-1-7',
    type: 'choice',
    questionText: '我国汛期最长的河流是（）',
    answer: 'C',
    explanation: '珠江位于华南地区，受季风影响时间长，雨季开始早、结束晚，汛期长达4~5个月，是我国汛期最长的河流。长江汛期约3~4个月，黄河汛期较短（约2个月）。',
    difficulty: 2,
    options: '["A. 长江", "B. 黄河", "C. 珠江", "D. 黑龙江"]',
  },
  {
    questionKey: 'geography-renjiao-8-1-8',
    type: 'choice',
    questionText: '长江发源于（）',
    answer: 'B',
    explanation: '长江发源于青藏高原唐古拉山脉主峰格拉丹冬峰，全长约6300千米，是中国第一长河、世界第三长河。流经青、川、藏、滇、渝、鄂、湘、赣、皖、苏、沪等11个省级行政区，注入东海。',
    difficulty: 1,
    options: '["A. 巴颜喀拉山", "B. 唐古拉山", "C. 昆仑山", "D. 祁连山"]',
  },
  {
    questionKey: 'geography-renjiao-8-1-9',
    type: 'choice',
    questionText: '黄河"地上河"现象主要出现在（）',
    answer: 'A',
    explanation: '黄河下游流经华北平原，由于泥沙大量沉积，河床高出两岸地面，形成"地上河"。黄河泥沙主要来自中游黄土高原的水土流失，因此治理黄河的关键是加强中游黄土高原的水土保持。',
    difficulty: 2,
    options: '["A. 下游", "B. 上游", "C. 中游", "D. 全河段"]',
  },
  {
    questionKey: 'geography-renjiao-8-1-10',
    type: 'choice',
    questionText: '我国最大的湖泊是（）',
    answer: 'C',
    explanation: '青海湖是我国最大的湖泊（也是最大的咸水湖），位于青海省。鄱阳湖是我国最大的淡水湖，位于江西省。纳木错是西藏最大的湖泊（咸水湖）。洞庭湖是湖南省的淡水湖。',
    difficulty: 1,
    options: '["A. 鄱阳湖", "B. 洞庭湖", "C. 青海湖", "D. 纳木错"]',
  },

  // ---- fill 6题 ----
  {
    questionKey: 'geography-renjiao-8-1-11',
    type: 'fill',
    questionText: '我国地势第一级阶梯海拔一般在____米以上，以____高原为主。第二级阶梯海拔一般在____米。',
    answer: '4000、青藏、1000~2000',
    explanation: '第一级阶梯平均海拔4000米以上，主体是青藏高原；第二级阶梯平均海拔1000~2000米，主要地形有内蒙古高原、黄土高原、云贵高原和塔里木盆地、准噶尔盆地、四川盆地；第三级阶梯海拔多在500米以下。',
    difficulty: 1,
    acceptableAnswers: '["4000、青藏、1000~2000", "4000、青藏高原、1000到2000"]',
  },
  {
    questionKey: 'geography-renjiao-8-1-12',
    type: 'fill',
    questionText: '我国第一、二级阶梯的分界线是____山脉—____山脉—____山脉。',
    answer: '昆仑、祁连、横断',
    explanation: '第一、二级阶梯分界线（大致）：昆仑山脉—祁连山脉—横断山脉。第二、三级阶梯分界线（大致）：大兴安岭—太行山脉—巫山—雪峰山。',
    difficulty: 2,
    acceptableAnswers: '["昆仑、祁连、横断", "昆仑山脉、祁连山脉、横断山脉"]',
  },
  {
    questionKey: 'geography-renjiao-8-1-13',
    type: 'fill',
    questionText: '我国夏季风主要来自____洋和____洋，盛行____方向的风。',
    answer: '太平、印度、偏南',
    explanation: '夏季风来自太平洋（东南季风）和印度洋（西南季风），给我国东部和南部带来丰富的降水。冬季风来自西伯利亚和蒙古高原，寒冷干燥，盛行偏北风。',
    difficulty: 2,
    acceptableAnswers: '["太平、印度、偏南", "太平洋、印度洋、偏南"]',
  },
  {
    questionKey: 'geography-renjiao-8-1-14',
    type: 'fill',
    questionText: '长江上、中游的分界点是____，中、下游的分界点是____。',
    answer: '宜昌、湖口',
    explanation: '长江以湖北宜昌为上中游分界，以江西湖口为中下游分界。宜昌以上为上游（多峡谷急流），宜昌到湖口为中游（多曲流和支流汇入），湖口以下为下游（江阔水深）。',
    difficulty: 1,
    acceptableAnswers: '["宜昌、湖口", "宜昌，湖口"]',
  },
  {
    questionKey: 'geography-renjiao-8-1-15',
    type: 'fill',
    questionText: '黄河发源于____高原____山脉，注入____海。',
    answer: '青藏、巴颜喀拉、渤',
    explanation: '黄河发源于青藏高原巴颜喀拉山脉北麓，全长约5464千米，是我国第二长河。流经青、川、甘、宁、内蒙古、晋、陕、豫、鲁等9个省区，在山东垦利注入渤海。',
    difficulty: 1,
    acceptableAnswers: '["青藏、巴颜喀拉、渤", "青藏高原、巴颜喀拉山、渤海"]',
  },
  {
    questionKey: 'geography-renjiao-8-1-16',
    type: 'fill',
    questionText: '我国四大高原是____高原、____高原、____高原和____高原。',
    answer: '青藏、内蒙古、黄土、云贵',
    explanation: '四大高原各有特色：青藏高原（海拔最高，雪山连绵）、内蒙古高原（地势平坦，草原广布）、黄土高原（水土流失严重，千沟万壑）、云贵高原（地表崎岖，喀斯特地貌广布）。',
    difficulty: 1,
    acceptableAnswers: '["青藏、内蒙古、黄土、云贵", "青藏高原、内蒙古高原、黄土高原、云贵高原"]',
  },

  // ---- short_answer 5题 ----
  {
    questionKey: 'geography-renjiao-8-1-17',
    type: 'short_answer',
    questionText: '我国地势西高东低、呈阶梯状分布对河流和交通有什么影响？',
    answer: '对河流的影响：(1)使我国大江大河大多自西向东流，注入太平洋；(2)河流在阶梯交界处落差大，水流急，水能资源丰富。对交通的影响：(1)向东流的河流沟通了东西水上交通；(2)阶梯交界处山河相间，修路难度大；(3)东部的第三级阶梯地势低平，交通便利。',
    explanation: '地势特征对河流流向、水能分布和交通建设等都有重要影响，是理解我国自然环境的关键。',
    difficulty: 2,
  },
  {
    questionKey: 'geography-renjiao-8-1-18',
    type: 'short_answer',
    questionText: '请说明秦岭—淮河一线的地理意义。',
    answer: '秦岭—淮河一线是我国重要的地理分界线：(1)1月0°C等温线——南北冬季气温分界；(2)800mm等降水量线——南北降水分界；(3)暖温带与亚热带分界线；(4)湿润区与半湿润区分界线；(5)旱地与水田分界线；(6)北方地区与南方地区分界线；(7)温带落叶阔叶林与亚热带常绿阔叶林分界线。',
    explanation: '秦岭—淮河一线是我国最重要的自然地理分界线之一，反映了南北气候、植被、农业等多方面的差异。',
    difficulty: 2,
  },
  {
    questionKey: 'geography-renjiao-8-1-19',
    type: 'short_answer',
    questionText: '请分析黄河下游形成"地上河"的原因和治理措施。',
    answer: '原因：黄河中游流经黄土高原，黄土高原水土流失严重，大量泥沙被带入黄河。黄河进入下游华北平原后，水流减缓，泥沙大量沉积，河床不断抬高，逐渐高出两岸地面，形成"地上河"。治理措施：(1)根本措施是在中游黄土高原开展水土保持（植树种草、修梯田、建淤地坝等）；(2)在下游加固堤防；(3)修建水利工程调水调沙（如小浪底水库）。',
    explanation: '"地上河"是黄河最突出的问题之一。治理黄河需上中下游综合施策，中游水土保持是治黄的根本。',
    difficulty: 3,
  },
  {
    questionKey: 'geography-renjiao-8-1-20',
    type: 'short_answer',
    questionText: '比较我国东部季风区南北方气候的主要差异。',
    answer: '南北方气候主要差异：(1)气温：冬季南方温暖、北方寒冷（南北温差大），夏季普遍高温（南北温差小）；(2)降水：南方年降水量800mm以上（湿润区），北方年降水量400~800mm（半湿润区）；(3)季节分配：南方雨季长（4~9月），北方雨季短（7~8月）；(4)温度带：北方以温带为主，南方以亚热带和热带为主。',
    explanation: '秦岭—淮河一线是南北方气候差异的分界。季风的影响使我国雨热同期，有利于农业生产。',
    difficulty: 2,
  },
  {
    questionKey: 'geography-renjiao-8-1-21',
    type: 'short_answer',
    questionText: '长江为什么被称为"黄金水道"？',
    answer: '长江被称为"黄金水道"的原因：(1)长江干流横贯东西，支流众多，流域面积广大，沟通了西南、华中、华东地区；(2)长江中下游江阔水深，水量丰富，终年不冻，航运条件优越；(3)长江航运价值巨大，货运量约占全国内河航运总量的60%以上，是世界上航运价值最高的河流之一；(4)沿岸城市密集，经济发达，运输需求大。',
    explanation: '长江航运在我国内河航运中占据绝对主导地位，是我国东西交通的大动脉。',
    difficulty: 3,
  },

  // ---- true_false 2题 ----
  {
    questionKey: 'geography-renjiao-8-1-22',
    type: 'true_false',
    questionText: '我国冬季最冷的地方是漠河，夏季最热的地方是吐鲁番。',
    answer: '正确',
    explanation: '我国冬季最冷的地方是黑龙江省漠河（极端最低气温约-52.3°C），因为纬度高且受西伯利亚冷空气影响。夏季最热的地方是新疆吐鲁番盆地（极端最高气温约49.6°C），因为深居内陆、地形封闭、地形低洼导致热量不易散失。',
    difficulty: 2,
  },
  {
    questionKey: 'geography-renjiao-8-1-23',
    type: 'true_false',
    questionText: '黄河是我国第一长河。',
    answer: '错误',
    explanation: '我国第一长河是长江（约6300千米），黄河是我国第二长河（约5464千米）。长江不仅是我国第一长河，也是世界第三长河（仅次于尼罗河和亚马孙河）。',
    difficulty: 1,
  },
];

// ========== 8-2 中国的自然资源 (20题) ==========
// choice 9题, fill 5题, short_answer 4题, true_false 2题

const chapter8_2: RawQuestion[] = [
  // ---- choice 9题 ----
  {
    questionKey: 'geography-renjiao-8-2-0',
    type: 'choice',
    questionText: '自然资源分为可再生资源和非可再生资源，下列属于非可再生资源的是（）',
    answer: 'B',
    explanation: '非可再生资源是指在人类历史时期内不可能在短时间内恢复的资源，如煤炭、石油、天然气、铁矿等矿产资源。可再生资源是指在较短时间内可以恢复或更新的资源，如太阳能、水能、风能、森林、水等。',
    difficulty: 1,
    options: '["A. 太阳能", "B. 煤炭", "C. 水能", "D. 森林"]',
  },
  {
    questionKey: 'geography-renjiao-8-2-1',
    type: 'choice',
    questionText: '我国土地资源构成中，比重最大的是（）',
    answer: 'C',
    explanation: '我国土地利用类型中，草地面积最大，约占全国土地总面积的33%左右。其次是林地（约23%）和耕地（约13%），其余为建设用地、未利用土地等。',
    difficulty: 1,
    options: '["A. 耕地", "B. 林地", "C. 草地", "D. 建设用地"]',
  },
  {
    questionKey: 'geography-renjiao-8-2-2',
    type: 'choice',
    questionText: '我国水资源的时空分布特点是（）',
    answer: 'A',
    explanation: '我国水资源空间分布不均：南丰北缺，东多西少。时间分配不均：夏秋多、冬春少。这导致北方和西部地区水资源严重不足，需要跨流域调水（如南水北调工程）来解决。',
    difficulty: 2,
    options: '["A. 南丰北缺，夏秋多冬春少", "B. 北丰南缺，冬多夏少", "C. 东少西多，全年均匀", "D. 各地分布均匀"]',
  },
  {
    questionKey: 'geography-renjiao-8-2-3',
    type: 'choice',
    questionText: '解决我国水资源地区分布不均的有效措施之一是（）',
    answer: 'D',
    explanation: '解决水资源空间分布不均的主要措施是跨流域调水（如南水北调工程、引黄济青等）。解决时间分配不均的措施是修建水库。节约用水、防治水污染是解决水资源不足的普遍措施。',
    difficulty: 1,
    options: '["A. 大量开采地下水", "B. 围湖造田", "C. 大量使用化肥", "D. 跨流域调水"]',
  },
  {
    questionKey: 'geography-renjiao-8-2-4',
    type: 'choice',
    questionText: '我国自然资源的基本国情是（）',
    answer: 'B',
    explanation: '我国自然资源总量丰富，种类齐全，但人均占有量不足。许多自然资源总量居世界前列，但人口基数大，人均资源占有量远低于世界平均水平。',
    difficulty: 1,
    options: '["A. 总量少，人均多", "B. 总量丰富，人均不足", "C. 总量多，人均也多", "D. 总量和人均都少"]',
  },
  {
    questionKey: 'geography-renjiao-8-2-5',
    type: 'choice',
    questionText: '我国北方缺水严重，最主要的自然原因是（）',
    answer: 'C',
    explanation: '北方缺水严重的原因：自然原因是降水偏少（属于半湿润、半干旱地区），河流径流量小。人为原因是人口稠密、工农业发达，用水量大。其中降水量少是最根本的自然原因。',
    difficulty: 2,
    options: '["A. 人口少", "B. 工业不发达", "C. 降水偏少", "D. 地势高"]',
  },
  {
    questionKey: 'geography-renjiao-8-2-6',
    type: 'choice',
    questionText: "下列做法不利于保护水资源的是（）",
    answer: 'A',
    explanation: '大量使用农药化肥会导致水体污染，不利于水资源保护。节约用水、工业废水达标排放、生活污水集中处理等都有利于保护水资源。防治水污染和保护水资源是解决水资源问题的重要措施。',
    difficulty: 1,
    options: '["A. 大量使用农药化肥", "B. 工业废水达标排放", "C. 推广节水灌溉技术", "D. 生活污水处理后再排放"]',
  },
  {
    questionKey: 'geography-renjiao-8-2-7',
    type: 'choice',
    questionText: '南水北调工程主要是为了缓解我国哪个地区的缺水问题（）',
    answer: 'B',
    explanation: '南水北调工程是将长江流域丰富的水资源调往华北和西北地区，主要缓解华北地区（黄淮海流域）的缺水问题。该工程分东、中、西三条调水线路。',
    difficulty: 1,
    options: '["A. 东北地区", "B. 华北地区", "C. 东南地区", "D. 西南地区"]',
  },
  {
    questionKey: 'geography-renjiao-8-2-8',
    type: 'choice',
    questionText: '我国耕地主要分布在（）',
    answer: 'C',
    explanation: '我国耕地主要分布在东部季风区的平原和低缓的丘陵地区。北方以旱地为主（种小麦、玉米等），南方以水田为主（种水稻等）。西部和北部耕地较少，主要是草地和林地。',
    difficulty: 1,
    options: '["A. 西部高原", "B. 西北内陆", "C. 东部平原和丘陵", "D. 全国均匀分布"]',
  },

  // ---- fill 5题 ----
  {
    questionKey: 'geography-renjiao-8-2-9',
    type: 'fill',
    questionText: '自然资源按是否可更新分为____资源和____资源两大类。',
    answer: '可再生、非可再生',
    explanation: '可再生资源（如太阳能、风能、水能、生物资源等）在较短时间内可以自然恢复或更新。非可再生资源（如煤炭、石油、天然气、铁矿等矿产）在人类历史时期内不可再生，用一点少一点。',
    difficulty: 1,
    acceptableAnswers: '["可再生、非可再生", "可再生资源、非可再生资源"]',
  },
  {
    questionKey: 'geography-renjiao-8-2-10',
    type: 'fill',
    questionText: '我国水资源的空间分布特点是____，时间分配特点是____。',
    answer: '南多北少（南丰北缺）、夏秋多冬春少',
    explanation: '我国水资源空间分布不均：南方水资源丰富（降水多），北方水资源缺乏（降水少）。时间分配不均：夏秋季节降水集中，水资源丰富；冬春季节降水少，水资源不足。',
    difficulty: 1,
    acceptableAnswers: '["南多北少（南丰北缺）、夏秋多冬春少", "南多北少、夏秋多冬春少"]',
  },
  {
    questionKey: 'geography-renjiao-8-2-11',
    type: 'fill',
    questionText: '针对我国水资源时间分配不均的问题，主要措施是____；针对空间分布不均的问题，主要措施是____。',
    answer: '修建水库、跨流域调水',
    explanation: '修建水库可以在丰水期蓄水、枯水期放水，调节水资源的时间分配。跨流域调水（如南水北调）可以将水资源丰富的地区的水调往缺水地区，解决空间分布不均问题。',
    difficulty: 1,
    acceptableAnswers: '["修建水库、跨流域调水", "修水库、调水"]',
  },
  {
    questionKey: 'geography-renjiao-8-2-12',
    type: 'fill',
    questionText: "我国土地资源的一项基本国策是____。" ,
    answer: '十分珍惜和合理利用每一寸土地，切实保护耕地',
    explanation: '由于我国人口多、人均耕地少，耕地后备资源不足，因此将"十分珍惜和合理利用每一寸土地，切实保护耕地"作为一项基本国策。',
    difficulty: 1,
    acceptableAnswers: '["十分珍惜和合理利用每一寸土地，切实保护耕地", "珍惜每一寸土地，保护耕地"]',
  },
  {
    questionKey: 'geography-renjiao-8-2-13',
    type: 'fill',
    questionText: '北方地区耕地以____为主，南方地区耕地以____为主。',
    answer: '旱地、水田',
    explanation: '北方地区降水较少，耕地以旱地为主，主要种植小麦、玉米、大豆等旱作物。南方地区降水充沛，耕地以水田为主，主要种植水稻等需水较多的作物。',
    difficulty: 1,
    acceptableAnswers: '["旱地、水田", "旱地，水田"]',
  },

  // ---- short_answer 4题 ----
  {
    questionKey: 'geography-renjiao-8-2-14',
    type: 'short_answer',
    questionText: '举例说明可再生资源和非可再生资源的区别，并说明我们应该怎样对待它们。',
    answer: '可再生资源如水、太阳能、森林等，可以在较短时间内恢复更新，但要合理利用，避免过度开发。例如森林被砍伐后可以重新种植恢复，但如果过度砍伐会导致荒漠化。非可再生资源如煤、石油、铁矿等，形成需要数百万年，用一点少一点。我们应节约使用非可再生资源，积极开发新能源替代。对两类资源都应做到合理利用、保护环境。',
    explanation: '正确认识和对待两类资源是可持续发展的重要基础。可再生资源要防止过度利用，非可再生资源要节约利用。',
    difficulty: 2,
  },
  {
    questionKey: 'geography-renjiao-8-2-15',
    type: 'short_answer',
    questionText: '请说明我国土地资源利用中存在的主要问题。',
    answer: '我国土地资源利用中的主要问题：(1)耕地面积减少——城市建设占用大量耕地；(2)水土流失严重——黄土高原、南方丘陵等地区水土流失使耕地质量下降；(3)土地荒漠化——北方草地过度放牧和开垦导致土地沙化；(4)土地污染——工业废水、废渣和农药化肥污染土地；(5)草场退化——过度放牧导致草地质量下降。',
    explanation: '这些问题严重威胁我国粮食安全和生态安全，需要采取保护措施加以解决。',
    difficulty: 2,
  },
  {
    questionKey: 'geography-renjiao-8-2-16',
    type: 'short_answer',
    questionText: '请简述南水北调工程的三条调水线路。',
    answer: '南水北调工程分三条线路：东线——从长江下游扬州附近引水，沿京杭运河北上，到达山东和天津；中线——从湖北丹江口水库（汉江）引水，经河南、河北到达北京和天津；西线——从长江上游通天河、雅砻江、大渡河引水到黄河上游（目前尚在规划中）。三条线路各有特点，共同缓解北方缺水问题。',
    explanation: '南水北调工程是人类历史上规模最大的调水工程之一，对缓解华北水资源短缺具有重要意义。',
    difficulty: 3,
  },
  {
    questionKey: 'geography-renjiao-8-2-17',
    type: 'short_answer',
    questionText: '在日常生活中，我们可以采取哪些措施节约水资源？',
    answer: '日常生活中节约水资源的措施：(1)使用节水器具（节水龙头、节水马桶等）；(2)一水多用（如用洗菜水浇花、洗衣水冲厕所等）；(3)缩短淋浴时间，减少用水量；(4)及时关水龙头，避免长流水；(5)减少不必要的用水（如过度冲洗等）；(6)参与水资源保护宣传，提高节水意识。节约用水是每个公民的责任和义务。',
    explanation: '节约用水需要从每个人做起，从日常生活中的小事做起。培养良好的用水习惯对缓解水资源短缺有重要意义。',
    difficulty: 2,
  },

  // ---- true_false 2题 ----
  {
    questionKey: 'geography-renjiao-8-2-18',
    type: 'true_false',
    questionText: '我国自然资源总量丰富，人均占有量也很大。',
    answer: '错误',
    explanation: '我国自然资源总量丰富、种类齐全，但由于人口众多，人均占有量不足。许多重要资源的人均占有量不到世界平均水平的一半，如人均耕地仅为世界平均水平的1/3左右。',
    difficulty: 1,
  },
  {
    questionKey: 'geography-renjiao-8-2-19',
    type: 'true_false',
    questionText: '太阳能是一种非可再生资源。',
    answer: '错误',
    explanation: '太阳能是典型的可再生资源，取之不尽、用之不竭。非可再生资源是指在人类历史时期内不能恢复的资源，如煤炭、石油等矿产资源。',
    difficulty: 1,
  },
];

// ========== 8-3 中国经济的发展 (22题) ==========
// choice 10题, fill 5题, short_answer 5题, true_false 2题

const chapter8_3: RawQuestion[] = [
  // ---- choice 10题 ----
  {
    questionKey: 'geography-renjiao-8-3-0',
    type: 'choice',
    questionText: '我国农业的地区分布特点是（）',
    answer: 'C',
    explanation: '我国农业分布的地区差异：东部地区是种植业、林业、渔业的主要分布区（条件优越）；西部地区以畜牧业为主（草地面积广大），种植业只分布在有灌溉条件的绿洲和河谷。南北方也有差异：北方旱地农业，南方水田农业。',
    difficulty: 2,
    options: '["A. 西部种植业为主", "B. 北方水田为主", "C. 东部种植业为主，西部畜牧业为主", "D. 全国均匀分布"]',
  },
  {
    questionKey: 'geography-renjiao-8-3-1',
    type: 'choice',
    questionText: '我国四大牧区是（）',
    answer: 'A',
    explanation: '我国四大牧区是内蒙古牧区（温带草原牧场）、新疆牧区（山地牧场）、青海牧区（高寒牧场）、西藏牧区（高寒牧场）。其中内蒙古牧区面积最大。',
    difficulty: 1,
    options: '["A. 内蒙古、新疆、青海、西藏", "B. 内蒙古、甘肃、青海、宁夏", "C. 新疆、甘肃、青海、西藏", "D. 四川、云南、青海、西藏"]',
  },
  {
    questionKey: 'geography-renjiao-8-3-2',
    type: 'choice',
    questionText: '我国的九大商品粮基地中，位于东北地区的是（）',
    answer: 'B',
    explanation: '东北地区的三江平原和松嫩平原是重要的商品粮基地，以盛产大豆、玉米、小麦、水稻等闻名。东北平原地广人稀，机械化程度高，粮食商品率高。',
    difficulty: 2,
    options: '["A. 太湖平原", "B. 三江平原", "C. 鄱阳湖平原", "D. 洞庭湖平原"]',
  },
  {
    questionKey: 'geography-renjiao-8-3-3',
    type: 'choice',
    questionText: '我国工业分布的基本格局是（）',
    answer: 'A',
    explanation: '我国工业分布的基本格局是东部沿海地区工业发达，工业基地和工业城市密集；中西部地区工业相对较少。沿海四大工业基地：辽中南、京津唐、沪宁杭、珠江三角洲。',
    difficulty: 1,
    options: '["A. 东部沿海地区工业发达", "B. 西部地区工业最发达", "C. 全国均匀分布", "D. 南方比北方发达"]',
  },
  {
    questionKey: 'geography-renjiao-8-3-4',
    type: 'choice',
    questionText: '下列铁路线中，属于南北向干线的是（）',
    answer: 'D',
    explanation: '我国主要铁路南北干线：京哈—京广线、京沪线、京九线、太焦—焦柳线、宝成—成昆线等。陇海—兰新线是东西向干线。湘黔线也偏东西方向。',
    difficulty: 2,
    options: '["A. 陇海线", "B. 兰新线", "C. 沪杭线", "D. 京广线"]',
  },
  {
    questionKey: 'geography-renjiao-8-3-5',
    type: 'choice',
    questionText: '我国最大的交通运输方式是（）',
    answer: 'A',
    explanation: '铁路运输是我国最重要的交通运输方式，承担了大量的客货运输任务。铁路运输量大、速度快、运费较低、受天气影响较小。公路运输发展迅速，适合短途运输。',
    difficulty: 1,
    options: '["A. 铁路运输", "B. 公路运输", "C. 水路运输", "D. 航空运输"]',
  },
  {
    questionKey: 'geography-renjiao-8-3-6',
    type: 'choice',
    questionText: '选择交通运输方式时，需要贵重、急需、数量不大的货物应选择（）',
    answer: 'C',
    explanation: '航空运输速度最快，适合运送贵重、急需、数量不大的货物或旅客。缺点是运量小、运费高。大宗笨重货物应选水运或铁路，短途小宗可选公路。',
    difficulty: 1,
    options: '["A. 水路运输", "B. 铁路运输", "C. 航空运输", "D. 公路运输"]',
  },
  {
    questionKey: 'geography-renjiao-8-3-7',
    type: 'choice',
    questionText: '下列地区中，是我国重要的高新技术产业聚集区的是（）',
    answer: 'B',
    explanation: '北京中关村是我国最早、最著名的高新技术产业开发区，被称为"中国硅谷"。此外，上海张江、深圳高新区、武汉东湖等也是重要的高新技术产业聚集区。高新技术产业一般布局在科技人才密集、交通便利的地区。',
    difficulty: 2,
    options: '["A. 大庆", "B. 北京中关村", "C. 鞍山", "D. 大同"]',
  },
  {
    questionKey: 'geography-renjiao-8-3-8',
    type: 'choice',
    questionText: '沪宁杭工业基地的核心城市是（）',
    answer: 'A',
    explanation: '沪宁杭工业基地以上海为核心，包括南京、杭州、苏州、无锡等城市。是我国最大的综合性工业基地。辽中南基地以沈阳和大连为核心，京津唐基地以北京和天津为核心，珠三角基地以广州和深圳为核心。',
    difficulty: 2,
    options: '["A. 上海", "B. 南京", "C. 杭州", "D. 苏州"]',
  },
  {
    questionKey: 'geography-renjiao-8-3-9',
    type: 'choice',
    questionText: '发展农业需要因地制宜，下列地区最适合发展种植业的是（）',
    answer: 'C',
    explanation: '平原地区地形平坦、土壤肥沃、水源充足，最适合发展种植业。山区适合发展林业和畜牧业；草原地区适合发展牧业；沿海滩涂适合发展水产养殖。发展农业必须因地制宜。',
    difficulty: 1,
    options: '["A. 高山高原", "B. 草原", "C. 平原", "D. 沙漠"]',
  },

  // ---- fill 5题 ----
  {
    questionKey: 'geography-renjiao-8-3-10',
    type: 'fill',
    questionText: '我国农业的部门主要有____业、____业、____业和____业。',
    answer: '种植、畜牧、林业、渔业（水）',
    explanation: '农业是国民经济的基础部门，主要包括种植业（粮食、经济作物种植）、畜牧业（牲畜饲养）、林业（植树造林、木材生产）和渔业（水产养殖和捕捞）。',
    difficulty: 1,
    acceptableAnswers: '["种植、畜牧、林业、渔业（水）", "种植业、畜牧业、林业、渔业"]',
  },
  {
    questionKey: 'geography-renjiao-8-3-11',
    type: 'fill',
    questionText: '我国沿海四大工业基地是____工业基地、____工业基地、____工业基地和____工业基地。',
    answer: '辽中南、京津唐、沪宁杭、珠江三角洲',
    explanation: '四大工业基地各有特色：辽中南——重工业基地；京津唐——北方最大的综合性工业基地；沪宁杭——全国最大的综合性工业基地；珠江三角洲——以轻工业为主的外向型工业基地。',
    difficulty: 1,
    acceptableAnswers: '["辽中南、京津唐、沪宁杭、珠江三角洲", "辽中南、京津唐、沪宁杭、珠三角"]',
  },
  {
    questionKey: 'geography-renjiao-8-3-12',
    type: 'fill',
    questionText: '我国最重要的南北铁路干线是____线，连接北京和____。',
    answer: '京广（京哈—京广）、广州',
    explanation: '京广线是我国最重要的南北铁路干线之一，北起北京，南到广州，全长2300多千米。它与京哈线连通形成纵贯南北的铁路大动脉。',
    difficulty: 1,
    acceptableAnswers: '["京广（京哈—京广）、广州", "京广、广州"]',
  },
  {
    questionKey: 'geography-renjiao-8-3-13',
    type: 'fill',
    questionText: '交通运输方式主要有____运输、____运输、____运输、____运输和管道运输。',
    answer: '铁路、公路、水路（水运）、航空',
    explanation: '五种主要交通运输方式各有优缺点：铁路运量大、速度快；公路灵活方便；水运运量大、成本低但速度慢；航空速度快但成本高；管道运输连续性强，适合液体和气体。',
    difficulty: 1,
    acceptableAnswers: '["铁路、公路、水路（水运）、航空", "铁路、公路、水运、航空"]',
  },
  {
    questionKey: 'geography-renjiao-8-3-14',
    type: 'fill',
    questionText: '高新技术产业的主要特点包括从业人员中____比例高、研究和开发费用占____比例高、产品____更新换代快。',
    answer: '科技人员、销售收入、技术',
    explanation: '高新技术产业是以高新技术为基础从事高新技术产品研发和生产的产业，具有科技人员比例高、研发投入高、产品技术更新快、附加值高等特点。',
    difficulty: 2,
    acceptableAnswers: '["科技人员、销售收入、技术", "科技人员、总成本、技术"]',
  },

  // ---- short_answer 5题 ----
  {
    questionKey: 'geography-renjiao-8-3-15',
    type: 'short_answer',
    questionText: '请说明我国南北方农业的差异及其原因。',
    answer: '北方农业与南方农业的差异：(1)耕地类型：北方旱地为主，南方水田为主——原因：南方降水多，北方降水少；(2)粮食作物：北方种小麦、玉米为主，南方种水稻为主——原因：与降水和热量条件有关；(3)熟制：北方一年一熟或两年三熟，南方一年两熟到三熟——原因：南方热量条件好；(4)经济作物：北方甜菜、棉花，南方甘蔗、油菜、橡胶等——原因：与气候条件有关。',
    explanation: '南北方农业差异主要是由气候条件（降水、热量）不同造成的，体现了"因地制宜"发展农业的原则。',
    difficulty: 2,
  },
  {
    questionKey: 'geography-renjiao-8-3-16',
    type: 'short_answer',
    questionText: '请说明影响工业布局的主要因素。',
    answer: '影响工业布局的主要因素：(1)自然资源——工业需要原料和能源，靠近资源地可降低成本（如钢铁厂靠近铁矿和煤炭产地）；(2)交通运输——工业原料和产品的运输需要便利的交通（沿海、沿江、沿铁路线建厂）；(3)市场条件——靠近消费市场可减少运费；(4)劳动力——需要充足且具有一定技能的劳动力；(5)科技——高新技术产业需要靠近科技发达地区；(6)水源——工业生产需要大量用水。',
    explanation: '工业布局受多种因素影响，需要综合考虑。不同类型的工业对各因素的要求不同，如原料指向型、市场指向型、技术指向型等。',
    difficulty: 3,
  },
  {
    questionKey: 'geography-renjiao-8-3-17',
    type: 'short_answer',
    questionText: '比较铁路运输、公路运输、水路运输和航空运输的优缺点。',
    answer: '铁路运输：优点——运量大、速度快、运费较低、受天气影响小；缺点——造价高、短距离运输成本高、灵活性差。公路运输：优点——灵活方便、可以从"门到门"；缺点——运量小、运费较高、长距离不经济。水路运输：优点——运量大、运费低；缺点——速度慢、受港口和天气限制。航空运输：优点——速度最快；缺点——运量小、运费高、受天气影响大。',
    explanation: '了解各种交通运输方式的优缺点，才能根据实际需要选择合适的运输方式。',
    difficulty: 2,
  },
  {
    questionKey: 'geography-renjiao-8-3-18',
    type: 'short_answer',
    questionText: '我国为什么要积极发展高新技术产业？',
    answer: '发展高新技术产业的原因：(1)提高我国经济的技术含量和竞争力，推动产业升级；(2)高新技术产业附加值高，能创造更多经济价值；(3)减少对传统资源和能源的依赖，实现可持续发展；(4)培养高素质科技人才，提高国家创新能力；(5)高新技术产品在国防、民生等领域有广泛应用。我国高新技术产业已形成以环渤海、长三角、珠三角为中心的分布格局。',
    explanation: '高新技术产业代表了一个国家或地区的科技创新水平和经济发展潜力，是推动经济转型升级的重要力量。',
    difficulty: 3,
  },
  {
    questionKey: 'geography-renjiao-8-3-19',
    type: 'short_answer',
    questionText: '举例说明因地制宜发展农业的重要性。',
    answer: '因地制宜发展农业的重要性：(1)在地形平坦、水源充足的地区发展种植业——如长江中下游平原种植水稻，东北平原种植大豆和小麦；(2)在降水稀少、草地广阔的地区发展畜牧业——如内蒙古、新疆的牧区；(3)在山区发展林业——如东北大兴安岭的林区；(4)在沿海滩涂和海洋发展渔业——如舟山渔场。只有因地制宜，才能充分利用各地的自然条件优势，实现农业的高效和可持续发展。如果盲目发展不适合的农业类型，会造成资源浪费和环境破坏。',
    explanation: '因地制宜是农业布局的基本原则，体现了人与自然和谐共生的理念。',
    difficulty: 2,
  },

  // ---- true_false 2题 ----
  {
    questionKey: 'geography-renjiao-8-3-20',
    type: 'true_false',
    questionText: '铁路运输是我国最重要的运输方式，承担了大部分客货运输任务。',
    answer: '正确',
    explanation: '铁路运输是我国运输网的骨干，承担了大量长途客货运输任务。铁路具有运量大、速度快、运价低、受天气影响小等优点，是我国交通运输的主力。',
    difficulty: 1,
  },
  {
    questionKey: 'geography-renjiao-8-3-21',
    type: 'true_false',
    questionText: '高新技术产业对自然资源的依赖程度非常高。',
    answer: '错误',
    explanation: '高新技术产业对自然资源的依赖程度较低，对科技、人才和信息的需求较高。传统工业（如钢铁、化工等）对自然资源依赖程度高，而高新技术产业更注重技术创新和人才聚集。',
    difficulty: 2,
  },
];

// ========== 汇总所有章节题目 ==========

const allQuestions: RawQuestion[] = [
  ...chapter7_0,  // 16题
  ...chapter7_1,  // 20题
  ...chapter7_2,  // 24题
  ...chapter7_3,  // 18题
  ...chapter8_0,  // 20题
  ...chapter8_1,  // 24题
  ...chapter8_2,  // 20题
  ...chapter8_3,  // 22题
];

// ========== 种子函数 ==========

export async function seedGeographyRenjiaoQuestions(): Promise<number> {
  // 1. 获取所有 geography-renjiao 章节
  const chapters = await prisma.chapter.findMany({
    where: { chapterKey: { startsWith: 'geography-renjiao' } },
  });

  if (chapters.length === 0) {
    console.warn('[seedGeographyRenjiaoQuestions] 未找到 geography-renjiao 章节，跳过');
    return 0;
  }

  // 2. 建立 chapterKey → id 的映射
  const chapterMap = new Map(chapters.map((c) => [c.chapterKey, c.id]));

  // 3. 构建批量插入数据
  const records: {
    id: string;
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
  }[] = [];

  for (const q of allQuestions) {
    // 从 questionKey 中提取 chapterKey，例如 "geography-renjiao-7-0-3" → "geography-renjiao-7-0"
    const parts = q.questionKey.split('-');
    const chapterKey = `${parts[0]}-${parts[1]}-${parts[2]}-${parts[3]}`;
    const chapterId = chapterMap.get(chapterKey);

    if (!chapterId) {
      console.warn(`[seedGeographyRenjiaoQuestions] 未找到章节 ${chapterKey}，跳过题目 ${q.questionKey}`);
      continue;
    }

    records.push({
      id: crypto.randomUUID(),
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

  // 4. 分批插入（每批 500 条）
  const BATCH_SIZE = 500;
  let totalInserted = 0;

  for (let i = 0; i < records.length; i += BATCH_SIZE) {
    const batch = records.slice(i, i + BATCH_SIZE);
    const result = await prisma.question.createMany({
      data: batch,
      skipDuplicates: true,
    });
    totalInserted += result.count;
  }

  console.log(`[seedGeographyRenjiaoQuestions] 插入 ${totalInserted} 道地理人教版题目`);
  return totalInserted;
}
