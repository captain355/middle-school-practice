/**
 * 历史人教版（部编版）初中题目种子数据
 *
 * 涵盖 7~9 年级共 12 个章节，总计 266 道题。
 * 章节对应 seed-data.ts 中 history-bubian 的定义：
 *   7年级：中国境内早期人类与文明的起源(20)、夏商周时期(24)、秦汉时期(28)、三国两晋南北朝时期(22)
 *   8年级：隋唐时期(28)、宋元时期(26)、明清时期(24)、中国开始沦为半殖民地半封建社会(24)
 *   9年级：近代化的早期探索(24)、新民主主义革命的开始(28)、中华民族的抗日战争(24)、人民解放战争的胜利(22)
 *
 * 题型分布：choice ~45% | fill ~20% | short_answer ~25% | matching ~10%
 * 难度分布：difficulty 1(基础) ~40% | 2(中等) ~40% | 3(提高) ~20%
 */

import { prisma } from '../src/config/database.js';

// ---------- 类型定义 ----------

interface RawQuestion {
  questionKey: string;
  type: 'choice' | 'fill' | 'short_answer' | 'matching';
  questionText: string;
  answer: string;
  explanation: string;
  difficulty: 1 | 2 | 3;
  options?: string;
  pairs?: string;
  acceptableAnswers?: string;
}

// ========== 7-0 中国境内早期人类与文明的起源 (20题) ==========

const chapter7_0: RawQuestion[] = [
  // ---- choice 9题 ----
  {
    questionKey: 'history-bubian-7-0-0',
    type: 'choice',
    questionText: '目前已知中国境内最早的古人类是（\uFF09',
    answer: 'A',
    explanation: '元谋人距今约170万年，是我国境内目前已确认的最早的古人类。',
    difficulty: 1,
    options: '["A. 元谋人", "B. 北京人", "C. 山顶洞人", "D. 河姆渡人"]',
  },
  {
    questionKey: 'history-bubian-7-0-1',
    type: 'choice',
    questionText: '北京人使用天然火的主要意义在于（\uFF09',
    answer: 'B',
    explanation: '使用天然火是人类进化史上的重大进步，火可以用来照明、防寒、驱赶野兽、烧烤食物，增强了人类适应自然的能力。',
    difficulty: 1,
    options: '["A. 可以用来烧制陶器", "B. 增强了人类适应自然的能力", "C. 可以用来冶炼金属", "D. 标志着农耕文明的开始"]',
  },
  {
    questionKey: 'history-bubian-7-0-2',
    type: 'choice',
    questionText: '下列远古居民中，最早掌握磨制石器和钻孔技术的是（\uFF09',
    answer: 'C',
    explanation: '山顶洞人已掌握磨制石器和钻孔技术，还会制作骨针，具有审美的观念。',
    difficulty: 2,
    options: '["A. 元谋人", "B. 北京人", "C. 山顶洞人", "D. 半坡人"]',
  },
  {
    questionKey: 'history-bubian-7-0-3',
    type: 'choice',
    questionText: '河姆渡原始居民主要种植的农作物是（\uFF09',
    answer: 'A',
    explanation: '河姆渡人生活在长江流域，距今约7000年，主要种植水稻。',
    difficulty: 1,
    options: '["A. 水稻", "B. 粟", "C. 小麦", "D. 玉米"]',
  },
  {
    questionKey: 'history-bubian-7-0-4',
    type: 'choice',
    questionText: '半坡原始居民居住的房屋样式是（\uFF09',
    answer: 'B',
    explanation: '半坡人生活在黄河流域的陕西西安半坡村，居住半地穴式圆形房屋，适应北方干旱寒冷的气候。',
    difficulty: 1,
    options: '["A. 干栏式房屋", "B. 半地穴式圆形房屋", "C. 地面方形房屋", "D. 窑洞"]',
  },
  {
    questionKey: 'history-bubian-7-0-5',
    type: 'choice',
    questionText: '被尊为中华民族"人文初祖"的是（\uFF09',
    answer: 'D',
    explanation: '炎帝和黄帝被后人尊为中华民族的人文初祖，华夏族逐渐形成。',
    difficulty: 1,
    options: '["A. 炎帝", "B. 黄帝", "C. 蚩尤", "D. 炎帝和黄帝"]',
  },
  {
    questionKey: 'history-bubian-7-0-6',
    type: 'choice',
    questionText: '传说中"三过家门而不入"的治水英雄是（\uFF09',
    answer: 'C',
    explanation: '大禹受命治水，三过家门而不入，采用疏导的方法成功治理了水患。',
    difficulty: 1,
    options: '["A. 黄帝", "B. 舜", "C. 禹", "D. 鲧"]',
  },
  {
    questionKey: 'history-bubian-7-0-7',
    type: 'choice',
    questionText: '河姆渡原始居民的房屋样式与半坡原始居民不同，根本原因是（\uFF09',
    answer: 'D',
    explanation: '河姆渡人居住干栏式房屋，半坡人居住半地穴式房屋，根本原因是两地自然地理环境不同：河姆渡地处湿热多雨的长江流域，干栏式房屋利于通风防潮；半坡地处干燥的黄河流域，半地穴式房屋利于保暖。',
    difficulty: 3,
    options: '["A. 生产工具不同", "B. 劳动技术不同", "C. 生活习惯不同", "D. 自然地理环境不同"]',
  },
  {
    questionKey: 'history-bubian-7-0-8',
    type: 'choice',
    questionText: '尧舜禹时期，部落联盟首领的更替实行（\uFF09',
    answer: 'A',
    explanation: '尧舜禹时期实行禅让制，将首领位置传给贤德之人。',
    difficulty: 1,
    options: '["A. 禅让制", "B. 世袭制", "C. 分封制", "D. 选举制"]',
  },

  // ---- fill 4题 ----
  {
    questionKey: 'history-bubian-7-0-9',
    type: 'fill',
    questionText: '北京人距今约______万年，发现地点在北京______。',
    answer: '70-20；周口店龙骨山',
    explanation: '北京人距今约70万年至20万年，发现于北京西南周口店龙骨山。',
    difficulty: 1,
    acceptableAnswers: '["70至20；周口店龙骨山", "70~20；周口店龙骨山"]',
  },
  {
    questionKey: 'history-bubian-7-0-10',
    type: 'fill',
    questionText: '半坡原始居民生活在______流域，主要种植______。',
    answer: '黄河；粟',
    explanation: '半坡人生活在黄河流域的陕西西安半坡村，主要种植粟。',
    difficulty: 1,
  },
  {
    questionKey: 'history-bubian-7-0-11',
    type: 'fill',
    questionText: '______的发明改变了人类茹毛饮血的生活方式。',
    answer: '火',
    explanation: '火的发明和使用是人类进化过程中的重大进步，使人类可以吃熟食，促进了脑的发育和体质的进步。',
    difficulty: 1,
  },
  {
    questionKey: 'history-bubian-7-0-12',
    type: 'fill',
    questionText: '河姆渡原始居民生活在______流域，距今约______年。',
    answer: '长江；7000',
    explanation: '河姆渡人距今约7000年，生活在长江流域的浙江余姚河姆渡村。',
    difficulty: 2,
  },

  // ---- short_answer 5题 ----
  {
    questionKey: 'history-bubian-7-0-13',
    type: 'short_answer',
    questionText: '简述北京人的生产和生活状况。',
    answer: '北京人会使用打制石器（旧石器时代），使用天然火，以采集和狩猎为生，群居生活。',
    explanation: '北京人已经会使用打制石器，使用并保存天然火，靠采集、狩猎为生，过着群居生活，这是由生产力水平低下决定的。',
    difficulty: 1,
  },
  {
    questionKey: 'history-bubian-7-0-14',
    type: 'short_answer',
    questionText: '比较河姆渡人和半坡人在生产生活上的主要区别。',
    answer: '河姆渡人生活在长江流域，种植水稻，居住干栏式房屋；半坡人生活在黄河流域，种植粟，居住半地穴式圆形房屋。两者都使用磨制石器，会制造陶器。',
    explanation: '两者分别代表了长江流域和黄河流域的农耕文明，因自然环境不同而在农作物种类和房屋样式上存在差异。',
    difficulty: 2,
  },
  {
    questionKey: 'history-bubian-7-0-15',
    type: 'short_answer',
    questionText: '传说中炎帝和黄帝有哪些发明贡献？',
    answer: '炎帝教民开垦耕种，制作生产工具，种植五谷和蔬菜，还制作陶器，发明纺织，会煮盐，教人们通商交换，还发明乐器。黄帝已能建造宫室，制作衣裳，挖掘水井，制造船只，会炼铜，发明弓箭。其下属官员还发明了文字、历法、算术和音乐。',
    explanation: '炎帝和黄帝的传说反映了中华文明起源时期先民们的伟大创造，许多发明是远古先民集体智慧的结晶。',
    difficulty: 2,
  },
  {
    questionKey: 'history-bubian-7-0-16',
    type: 'short_answer',
    questionText: '什么是禅让制？',
    answer: '禅让制是尧舜禹时期推举部落联盟首领的办法，即将首领之位传给贤德之人。尧传位于舜，舜传位于禹，都是通过禅让的方式实现的。',
    explanation: '禅让制体现了原始社会民主推选首领的制度，与后来的王位世袭制形成鲜明对比。',
    difficulty: 1,
  },
  {
    questionKey: 'history-bubian-7-0-17',
    type: 'short_answer',
    questionText: '大禹治水为什么能取得成功？给我们什么启示？',
    answer: '大禹治水成功的原因：采用了科学疏导的方法（而不是他父亲鲧的堵截方法），三过家门而不入，身先士卒，有献身精神。启示：面对困难要勇于担当，采用科学方法解决问题。',
    explanation: '大禹治水成功的关键在于方法得当和坚持不懈的精神，体现了中华民族自强不息的民族精神。',
    difficulty: 3,
  },

  // ---- matching 2题 ----
  {
    questionKey: 'history-bubian-7-0-18',
    type: 'matching',
    questionText: '请将下列远古居民与其生活的流域连线。',
    answer: '元谋人—长江流域；北京人—黄河流域；河姆渡人—长江流域；半坡人—黄河流域；山顶洞人—黄河流域',
    explanation: '元谋人发现于云南（长江上游），北京人和山顶洞人在北京周口店（黄河流域），河姆渡人在浙江余姚（长江下游），半坡人在陕西西安（黄河中游）。',
    difficulty: 1,
    pairs: '[[