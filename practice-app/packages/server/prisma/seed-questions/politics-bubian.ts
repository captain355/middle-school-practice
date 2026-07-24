/**
 * 道德与法治人教版（部编版）初中题目种子数据
 *
 * 涵盖 7~9 年级共 12 个章节，总计 250 道题。
 * 章节对应 seed-data.ts 中 politics-bubian 的定义：
 *   7年级：成长的节拍(16)、友谊的天空(20)、师长情谊(24)、生命的思考(18)
 *   8年级：走进社会生活(20)、遵守社会规则(22)、承担责任(20)、维护国家利益(22)
 *   9年级：踏上社会之路(20)、创新驱动发展(22)、民主与法治(24)、和谐与梦想(22)
 *
 * 题型分布：choice ~40% | fill ~20% | short_answer ~30% | matching ~10%
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

// ========== 7-0 成长的节拍 (16题) ==========

const chapter7_0: RawQuestion[] = [
  // ---- choice 7题 ----
  {
    questionKey: 'politics-bubian-7-0-0',
    type: 'choice',
    questionText: '中学时代是人生发展的一个新阶段，这个阶段可以为我们的成长提供（\uFF09',
    answer: 'D',
    explanation: '中学时代是人生发展的一个新阶段，可以为我们的一生奠定重要基础，为我们的成长提供发展自我的多种机会。',
    difficulty: 1,
    options: '["A. 更多的娱乐时间", "B. 更少的学习压力", "C. 完全的自由", "D. 发展自我的多种机会"]',
  },
  {
    questionKey: 'politics-bubian-7-0-1',
    type: 'choice',
    questionText: '进入中学，我们的生活发生了一系列变化。下列属于中学生活新变化的是（\uFF09',
    answer: 'C',
    explanation: '进入中学后，课程门类增多了，学习难度加大了，老师对学生的要求也提高了，这些都是中学生活的新变化。',
    difficulty: 1,
    options: '["A. 不需要遵守校规校纪", "B. 不用再努力学习", "C. 课程门类增多，学习难度加大", "D. 没有了考试压力"]',
  },
  {
    questionKey: 'politics-bubian-7-0-2',
    type: 'choice',
    questionText: '"凡事预则立，不预则废。"这句话启示我们在中学阶段应该（\uFF09',
    answer: 'A',
    explanation: '"凡事预则立，不预则废"告诉我们做任何事情都要有计划、有目标。在中学阶段，我们应该规划好自己的初中生活，确立新的目标。',
    difficulty: 1,
    options: '["A. 规划初中生活，确立新目标", "B. 随遇而安，顺其自然", "C. 只关注学习成绩", "D. 一味追求玩乐"]',
  },
  {
    questionKey: 'politics-bubian-7-0-3',
    type: 'choice',
    questionText: '正确认识自己，要做到（\uFF09',
    answer: 'B',
    explanation: '正确认识自己，就是要用全面的、发展的眼光看待自己，既要看到自己的优点，也要看到自己的缺点，不能只看一方面。',
    difficulty: 2,
    options: '["A. 只看到自己的优点", "B. 用全面的、发展的眼光看待自己", "C. 只关注学习成绩", "D. 只看到自己的缺点"]',
  },
  {
    questionKey: 'politics-bubian-7-0-4',
    type: 'choice',
    questionText: '认识自己的途径有很多，下列属于自我评价的是（\uFF09',
    answer: 'C',
    explanation: '自我评价是认识自己的一种方式，包括与他人比较、自我反省等。通过自己在活动中的表现来认识自己属于自我评价。',
    difficulty: 1,
    options: '["A. 老师的评价", "B. 同学的评价", "C. 通过自己在活动中的表现来认识自己", "D. 父母的评价"]',
  },
  {
    questionKey: 'politics-bubian-7-0-5',
    type: 'choice',
    questionText: '"知人者智，自知者明。"这句话说明（\uFF09',
    answer: 'D',
    explanation: '老子这句话的意思是：能够了解别人的人是有智慧的，能够了解自己的人是高明的。这说明认识自己非常重要，人贵自知。',
    difficulty: 2,
    options: '["A. 了解别人比了解自己更重要", "B. 认识自己是一件很容易的事情", "C. 人不需要认识自己", "D. 认识自己非常重要，人贵自知"]',
  },
  {
    questionKey: 'politics-bubian-7-0-6',
    type: 'choice',
    questionText: '做更好的自己，就要（\uFF09',
    answer: 'A',
    explanation: '做更好的自己，需要扬长避短，主动改正缺点，不断激发自己的潜能。',
    difficulty: 1,
    options: '["A. 扬长避短，主动改正缺点", "B. 只发展自己的优点", "C. 完全忽略自己的缺点", "D. 盲目模仿别人"]',
  },

  // ---- fill 3题 ----
  {
    questionKey: 'politics-bubian-7-0-7',
    type: 'fill',
    questionText: '中学时代是人生发展的一个新阶段，可以为我们的一生奠定______基础。',
    answer: '重要',
    explanation: '中学时代是人生发展的一个新阶段，可以为我们的一生奠定重要基础，为我们的人生长卷打上最美丽的底色。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-7-0-8',
    type: 'fill',
    questionText: '正确认识自己，要用______的、______的眼光看待自己。',
    answer: '全面；发展',
    explanation: '正确认识自己，就是要用全面的、发展的眼光看待自己，不能片面地只看优点或缺点。',
    difficulty: 1,
    acceptableAnswers: '["全面的、发展的", "全面发展"]',
  },
  {
    questionKey: 'politics-bubian-7-0-9',
    type: 'fill',
    questionText: '做更好的自己，要善于发挥自己的______，主动改正______。',
    answer: '优点；缺点',
    explanation: '做更好的自己，需要扬长避短，善于发挥自己的优点，同时主动改正自己的缺点。',
    difficulty: 1,
  },

  // ---- short_answer 5题 ----
  {
    questionKey: 'politics-bubian-7-0-10',
    type: 'short_answer',
    questionText: '中学时代对我们的成长有什么重要意义？',
    answer: '中学时代是人生发展的一个新阶段，为我们的一生奠定重要基础；中学时代见证着一个人从少年到青年的生命进阶；为我们的人生长卷打上最美丽的底色；为我们的人生设定了新的目标。',
    explanation: '中学时代是人生发展的关键时期，具有承上启下的作用，对人生的发展有着深远的影响。',
    difficulty: 2,
  },
  {
    questionKey: 'politics-bubian-7-0-11',
    type: 'short_answer',
    questionText: '我们应如何正确认识自己？',
    answer: '我们要从生理、心理、社会等方面来认识自己；要把自己与他人进行比较；要从他人的评价中认识自己；在自我评价和他人评价中全面、客观地认识自己。',
    explanation: '认识自己需要多种途径和方法相结合，既要自我反思，也要听取他人的评价。',
    difficulty: 2,
  },
  {
    questionKey: 'politics-bubian-7-0-12',
    type: 'short_answer',
    questionText: '如何做更好的自己？',
    answer: '做更好的自己，需要扬长避短，需要主动改正缺点，需要不断激发自己的潜能。接纳自己，需要接纳自己的全部，既接纳优点，也接纳不完美。',
    explanation: '做更好的自己是一个不断进步的过程，需要我们积极行动、持之以恒。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-7-0-13',
    type: 'short_answer',
    questionText: '学会接纳自己包括哪些方面？',
    answer: '学会接纳自己，需要接纳自己的全部，既接纳自己的优点，也接纳自己的不完美；既接纳自己的性格，也接纳自己的身材和相貌；既接纳自己的现在，也努力追求更好的未来。',
    explanation: '接纳自己是做更好自己的前提，只有先接纳自己，才能更好地完善自己。',
    difficulty: 2,
  },
  {
    questionKey: 'politics-bubian-7-0-14',
    type: 'short_answer',
    questionText: '实现初中阶段的新目标，需要我们做好哪些准备？',
    answer: '需要我们规划好初中生活，制定切实可行的学习计划；需要我们努力学习，不断积累知识；需要我们积极参与各种活动，锻炼能力；需要我们培养良好的品德和习惯。',
    explanation: '实现新目标需要付出实际行动，做好充分的准备，包括学习计划、能力锻炼和品德修养等方面。',
    difficulty: 3,
  },

  // ---- matching 1题 ----
  {
    questionKey: 'politics-bubian-7-0-15',
    type: 'matching',
    questionText: '请将下列名言与其蕴含的道理连线。',
    answer: '"知人者智，自知者明"—认识自己很重要；"金无足赤，人无完人"—要接纳自己的不完美；"活到老，学到老"—要用发展的眼光看自己；"千里之行，始于足下"—要脚踏实地，付诸行动',
    explanation: '这些名言都蕴含着正确认识自己、做更好自己的道理，需要我们在实际生活中加以运用。',
    difficulty: 2,
    pairs: '[["知人者智，自知者明", "认识自己很重要"], ["金无足赤，人无完人", "要接纳自己的不完美"], ["活到老，学到老", "要用发展的眼光看自己"], ["千里之行，始于足下", "要脚踏实地付诸行动"]]',
  },
];

// ========== 7-1 友谊的天空 (20题) ==========

const chapter7_1: RawQuestion[] = [
  // ---- choice 8题 ----
  {
    questionKey: 'politics-bubian-7-1-0',
    type: 'choice',
    questionText: '友谊的力量主要表现在（\uFF09',
    answer: 'D',
    explanation: '友谊的力量表现在：朋友之间互相帮助、互相鼓励，分享快乐，分担痛苦，给予支持，让我们感受到生活的美好，促进我们的成长和进步。',
    difficulty: 1,
    options: '["A. 能帮我们完成所有作业", "B. 能让我们不用遵守规则", "C. 能帮我们获得所有东西", "D. 给我们温暖和力量，促进我们成长"]',
  },
  {
    questionKey: 'politics-bubian-7-1-1',
    type: 'choice',
    questionText: '友谊的特质包括（\uFF09',
    answer: 'B',
    explanation: '友谊的特质包括：友谊是一种亲密的关系，友谊是平等的、双向的，友谊是一种心灵的相遇。',
    difficulty: 1,
    options: '["A. 友谊是永恒不变的", "B. 友谊是亲密的、平等的、双向的", "C. 友谊不需要维护", "D. 友谊只存在于同学之间"]',
  },
  {
    questionKey: 'politics-bubian-7-1-2',
    type: 'choice',
    questionText: '下列做法有利于建立友谊的是（\uFF09',
    answer: 'A',
    explanation: '建立友谊需要我们开放自己、持续行动、真诚待人、帮助他人。面带微笑、主动打招呼是开放自己的表现，有利于建立友谊。',
    difficulty: 1,
    options: '["A. 开放自己，主动交往", "B. 封闭自己，等待别人", "C. 只和学习好的人交往", "D. 在背后议论别人"]',
  },
  {
    questionKey: 'politics-bubian-7-1-3',
    type: 'choice',
    questionText: '呵护友谊需要做到（\uFF09',
    answer: 'C',
    explanation: '呵护友谊需要我们用心关怀对方，学会尊重对方，正确处理交友中受到的伤害，学会正确处理冲突。',
    difficulty: 2,
    options: '["A. 完全按照朋友的要求去做", "B. 什么都迁就朋友", "C. 用心关怀、学会尊重、正确处理冲突", "D. 一味索取不付出"]',
  },
  {
    questionKey: 'politics-bubian-7-1-4',
    type: 'choice',
    questionText: '关于网络交往，下列说法正确的是（\uFF09',
    answer: 'D',
    explanation: '网络交往具有虚拟、平等、自主的特点，但网络信息良莠不齐，我们需要增强自我保护意识，慎重对待网络交友。',
    difficulty: 2,
    options: '["A. 网络交友没有任何风险", "B. 可以在网上随意透露个人信息", "C. 网络朋友一定值得信任", "D. 需要增强自我保护意识，慎重交友"]',
  },
  {
    questionKey: 'politics-bubian-7-1-5',
    type: 'choice',
    questionText: '朋友之间发生冲突时，正确的做法是（\uFF09',
    answer: 'B',
    explanation: '朋友之间发生冲突时，应该保持冷静，坦诚交流，换位思考，及时处理，而不是回避或激化矛盾。',
    difficulty: 1,
    options: '["A. 冷战不理对方", "B. 保持冷静，坦诚交流", "C. 在背后说朋友的坏话", "D. 立刻绝交"]',
  },
  {
    questionKey: 'politics-bubian-7-1-6',
    type: 'choice',
    questionText: '"近朱者赤，近墨者黑"启示我们（\uFF09',
    answer: 'C',
    explanation: '这句话说明朋友对我们有重要影响，我们要慎重选择朋友，远离不良交往，多交益友。',
    difficulty: 1,
    options: '["A. 不要交朋友", "B. 朋友越多越好", "C. 要慎重选择朋友，多交益友", "D. 只和学习成绩好的人交朋友"]',
  },
  {
    questionKey: 'politics-bubian-7-1-7',
    type: 'choice',
    questionText: '在网络交往中，下列属于正确做法的是（\uFF09',
    answer: 'A',
    explanation: '在网络交往中要遵守法律法规，不泄露个人隐私，增强辨别能力，不轻易相信网友的话。',
    difficulty: 2,
    options: '["A. 保护个人信息，不随意泄露", "B. 可以随意和网友见面", "C. 可以在网上辱骂他人", "D. 可以随意传播他人隐私"]',
  },

  // ---- fill 4题 ----
  {
    questionKey: 'politics-bubian-7-1-8',
    type: 'fill',
    questionText: '友谊是一种______的关系，友谊是______的、______的。',
    answer: '亲密；平等；双向',
    explanation: '友谊的特质包括：友谊是一种亲密的关系，友谊是平等的、双向的。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-7-1-9',
    type: 'fill',
    questionText: '建立友谊，需要______自己，______行动。',
    answer: '开放；持续',
    explanation: '建立友谊需要我们开放自己，持续行动，不能等待别人先来，要主动交往。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-7-1-10',
    type: 'fill',
    questionText: '网络交往具有______、______、自主的特点。',
    answer: '虚拟；平等',
    explanation: '网络交往具有虚拟、平等、自主的特点，我们要正确利用网络进行交友。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-7-1-11',
    type: 'fill',
    questionText: '处理朋友间的冲突需要______、______和______。',
    answer: '冷静；沟通；宽容',
    explanation: '处理冲突的基本策略：保持冷静，坦诚沟通，宽容理解，寻求合理解决方式。',
    difficulty: 2,
    acceptableAnswers: '["冷静；沟通；包容"]',
  },

  // ---- short_answer 6题 ----
  {
    questionKey: 'politics-bubian-7-1-12',
    type: 'short_answer',
    questionText: '友谊的力量有哪些表现？',
    answer: '朋友之间互相帮助、互相鼓励，分享快乐，分担痛苦；给予支持和安慰，让我们感受到生活的美好；朋友能帮助我们看清自己的不足，改正缺点；朋友能开阔我们的视野，让我们学到更多的知识。',
    explanation: '友谊对个人成长有重要作用，能在情感、认知和行为等多个方面产生积极影响。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-7-1-13',
    type: 'short_answer',
    questionText: '我们应当如何建立友谊？',
    answer: '建立友谊需要开放自己，持续行动；需要真诚待人，帮助他人；需要面带微笑，记住别人的名字，做一个倾听者；需要在交往中发现和寻找共同的兴趣和话题。',
    explanation: '建立友谊需要主动和持续的行动，要掌握正确的交往方法。',
    difficulty: 2,
  },
  {
    questionKey: 'politics-bubian-7-1-14',
    type: 'short_answer',
    questionText: '怎样呵护友谊？',
    answer: '呵护友谊需要用心关怀对方，学会尊重对方；需要学会正确处理冲突和伤害；需要学会与朋友平等相处，坦诚相待；需要在朋友需要时给予支持和帮助。',
    explanation: '友谊需要精心呵护，就像照料一株植物，需要用心和耐心。',
    difficulty: 2,
  },
  {
    questionKey: 'politics-bubian-7-1-15',
    type: 'short_answer',
    questionText: '网络交友需要注意哪些问题？',
    answer: '网络交友要增强自我保护意识，不随意泄露个人信息；要学会辨别网络信息，不轻信网友的话；要遵守法律法规和网络道德；要理性对待网络交友，不沉迷于虚拟交往。',
    explanation: '网络世界复杂多变，网络交友需要我们提高警惕，增强辨别能力和自我保护意识。',
    difficulty: 3,
  },
  {
    questionKey: 'politics-bubian-7-1-16',
    type: 'short_answer',
    questionText: '友谊与竞争的关系是怎样的？',
    answer: '竞争并不必然伤害友谊，关键在于我们对待竞争的态度。真正的友谊不会因为竞争而变质。我们应该在竞争中坦然接受并欣赏朋友的成就，做到自我反省和激励，在竞争中共同进步。',
    explanation: '友谊和竞争并不矛盾，正确对待竞争可以使友谊更加深厚。',
    difficulty: 3,
  },
  {
    questionKey: 'politics-bubian-7-1-17',
    type: 'short_answer',
    questionText: '益友、损友、诤友各有什么特点？我们应该交什么样的朋友？',
    answer: '益友能帮助我们进步，损友会带坏我们，诤友能直言规劝。我们应该多交益友，不交损友，欢迎诤友。孔子说"友直、友谅、友多闻，益矣"。',
    explanation: '选择朋友对我们的成长非常重要，我们要善交益友、不交损友、乐交诤友。',
    difficulty: 2,
  },

  // ---- matching 2题 ----
  {
    questionKey: 'politics-bubian-7-1-18',
    type: 'matching',
    questionText: '请将下列关于友谊的名言与其含义连线。',
    answer: '"海内存知己，天涯若比邻"—真正的友谊不受距离的限制；"君子之交淡如水"—纯洁的友谊不需要物质利益；"近朱者赤，近墨者黑"—朋友对我们的行为有重要影响；"多个朋友多条路"—朋友能在困难时给予帮助',
    explanation: '这些名言从不同角度阐述了友谊的价值和意义，揭示了友谊对人的影响。',
    difficulty: 2,
    pairs: '[["海内存知己，天涯若比邻", "真正的友谊不受距离限制"], ["君子之交淡如水", "纯洁的友谊不需要物质利益"], ["近朱者赤，近墨者黑", "朋友对我们的行为有重要影响"], ["多个朋友多条路", "朋友能在困难时给予帮助"]]',
  },
  {
    questionKey: 'politics-bubian-7-1-19',
    type: 'matching',
    questionText: '请将下列网络行为与其性质连线。',
    answer: '在网上随意公开他人信息—侵犯隐私权；在网上造谣传谣—违法行为；在论坛恶意攻击他人—网络暴力；与网友分享学习心得—正当的网络交往',
    explanation: '网络交往需要遵守法律法规和道德规范，要正确区分正当行为和不当行为。',
    difficulty: 2,
    pairs: '[["在网上随意公开他人信息", "侵犯隐私权"], ["在网上造谣传谣", "违法行为"], ["在论坛恶意攻击他人", "网络暴力"], ["与网友分享学习心得", "正当的网络交往"]]',
  },
];

// ========== 7-2 师长情谊 (24题) ==========

const chapter7_2: RawQuestion[] = [
  // ---- choice 10题 ----
  {
    questionKey: 'politics-bubian-7-2-0',
    type: 'choice',
    questionText: '老师在我们成长过程中扮演着重要的角色，下列说法正确的是（\uFF09',
    answer: 'B',
    explanation: '老师是我们的知识传授者、成长引路人、人生导师，在学生的成长中起着不可替代的作用。',
    difficulty: 1,
    options: '["A. 老师只是知识的传授者", "B. 老师是知识传授者、成长引路人", "C. 老师只负责管理学生", "D. 老师对学生的影响很小"]',
  },
  {
    questionKey: 'politics-bubian-7-2-1',
    type: 'choice',
    questionText: '新型师生关系的特点是（\uFF09',
    answer: 'D',
    explanation: '新型师生关系建立在民主平等、尊师爱生、教学相长、心理相容的基础上。师生之间是人格平等、互相尊重的关系。',
    difficulty: 1,
    options: '["A. 老师绝对权威，学生完全服从", "B. 老师管教，学生被动接受", "C. 学生可以不尊重老师", "D. 民主平等、尊师爱生、教学相长"]',
  },
  {
    questionKey: 'politics-bubian-7-2-2',
    type: 'choice',
    questionText: '面对老师的批评，正确的态度是（\uFF09',
    answer: 'A',
    explanation: '面对老师的批评，我们应该正确对待，把注意力放在老师批评的内容和用意上，理解老师的良苦用心，有则改之，无则加勉。',
    difficulty: 1,
    options: '["A. 理解老师用心，有则改之", "B. 当面顶撞老师", "C. 完全不在意", "D. 怀恨在心"]',
  },
  {
    questionKey: 'politics-bubian-7-2-3',
    type: 'choice',
    questionText: '与老师发生分歧时，我们应该（\uFF09',
    answer: 'C',
    explanation: '与老师发生分歧时，应该学会正确处理，用恰当的方式与老师沟通，表达自己的观点和想法。',
    difficulty: 2,
    options: '["A. 表面服从，内心不满", "B. 和老师大吵一架", "C. 换位思考，主动沟通", "D. 以后不再理老师"]',
  },
  {
    questionKey: 'politics-bubian-7-2-4',
    type: 'choice',
    questionText: '下列不属于师生交往的良好状态的是（\uFF09',
    answer: 'D',
    explanation: '师生交往的良好状态应该是学生乐于学习，老师寓教于乐，师生之间相互尊重、相互关心、平等交流。学生因害怕老师而不敢交往不是良好状态。',
    difficulty: 1,
    options: '["A. 学生乐于学习", "B. 老师寓教于乐", "C. 师生平等交流", "D. 学生害怕老师而不敢交往"]',
  },
  {
    questionKey: 'politics-bubian-7-2-5',
    type: 'choice',
    questionText: '教学相长指的是（\uFF09',
    answer: 'B',
    explanation: '教学相长意味着教与学是师生相互陪伴、相互促进、共同成长的过程。老师教给我们知识，我们也能促进老师的教学。',
    difficulty: 2,
    options: '["A. 老师教得好，学生学得快", "B. 教与学互相促进，师生共同成长", "C. 学生教老师", "D. 老师和学生在学习上竞争"]',
  },
  {
    questionKey: 'politics-bubian-7-2-6',
    type: 'choice',
    questionText: '正确对待老师表扬和批评的态度是（\uFF09',
    answer: 'A',
    explanation: '老师的表扬意味着肯定、鼓励和期待，提醒我们继续努力；老师的批评意味着关心、提醒和劝诫，帮助我们反省自己、改进不足。',
    difficulty: 1,
    options: '["A. 表扬要继续努力，批评要反省改进", "B. 只听表扬，不听批评", "C. 表扬和批评都不重要", "D. 只重视批评"]',
  },
  {
    questionKey: 'politics-bubian-7-2-7',
    type: 'choice',
    questionText: '家庭的功能不包括（\uFF09',
    answer: 'C',
    explanation: '家庭具有物质生产功能、人口再生产功能、消费功能、抚育和赡养功能、教育功能、休闲娱乐功能等。学校教育不是家庭的功能。',
    difficulty: 1,
    options: '["A. 抚育功能", "B. 教育功能", "C. 学校教育功能", "D. 消费功能"]',
  },
  {
    questionKey: 'politics-bubian-7-2-8',
    type: 'choice',
    questionText: '与父母沟通的有效方法包括（\uFF09',
    answer: 'D',
    explanation: '与父母沟通的有效方法包括：关注事实，把握时机，留意态度，选择方式，掌握技巧等。其中最重要的是理解、尊重和体谅。',
    difficulty: 2,
    options: '["A. 坚持己见，不让步", "B. 不与父母交流", "C. 阳奉阴违", "D. 关注事实、把握时机、选择方式"]',
  },
  {
    questionKey: 'politics-bubian-7-2-9',
    type: 'choice',
    questionText: '现代家庭结构的主要类型不包括（\uFF09',
    answer: 'B',
    explanation: '现代家庭的结构类型主要有核心家庭（由父母与未婚子女组成）、主干家庭（祖父母/外祖父母、父母与子女组成）、单亲家庭等。宗族式大家庭不是现代主要类型。',
    difficulty: 1,
    options: '["A. 核心家庭", "B. 宗族式大家庭", "C. 主干家庭", "D. 单亲家庭"]',
  },

  // ---- fill 5题 ----
  {
    questionKey: 'politics-bubian-7-2-10',
    type: 'fill',
    questionText: '新型师生关系建立在______平等、______爱生、______相长、心理相容的基础上。',
    answer: '民主；尊师；教学',
    explanation: '新型师生关系建立在民主平等、尊师爱生、教学相长、心理相容的基础上。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-7-2-11',
    type: 'fill',
    questionText: '面对老师的批评，我们应该把注意力放在老师批评的______和______上。',
    answer: '内容；用意',
    explanation: '面对老师的批评，要把注意力放在批评的内容和用意上，理解老师的良苦用心。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-7-2-12',
    type: 'fill',
    questionText: '与父母沟通的前提是______父母。',
    answer: '尊重',
    explanation: '与父母沟通最重要的是尊重父母，理解父母的用心，体谅父母的辛劳。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-7-2-13',
    type: 'fill',
    questionText: '家庭的设立，根植于血缘、______和______等关系。',
    answer: '婚姻；收养',
    explanation: '家庭的设立通常基于血缘关系、婚姻关系和收养关系。',
    difficulty: 2,
  },
  {
    questionKey: 'politics-bubian-7-2-14',
    type: 'fill',
    questionText: '化解亲子冲突的方法包括：______、互动沟通、______。',
    answer: '冷静思考；求同存异',
    explanation: '化解亲子冲突需要冷静思考，避免情绪化；互动沟通，了解对方的想法；求同存异，寻求共识。',
    difficulty: 2,
  },

  // ---- short_answer 7题 ----
  {
    questionKey: 'politics-bubian-7-2-15',
    type: 'short_answer',
    questionText: '怎样建立良好的师生关系？',
    answer: '正确对待老师的表扬和批评；学会尊重老师，理解老师的工作；主动与老师交流沟通；努力学好各门功课；积极参与课堂互动，与老师教学相长。',
    explanation: '建立良好师生关系需要师生的共同努力，学生要主动、尊重、理解老师。',
    difficulty: 2,
  },
  {
    questionKey: 'politics-bubian-7-2-16',
    type: 'short_answer',
    questionText: '如何正确对待老师的表扬和批评？',
    answer: '老师的表扬意味着肯定、鼓励和期待，我们应该继续努力；老师的批评意味着关心、提醒和劝诫，我们应该反省自己、改进不足。对待批评不能耿耿于怀，要理解老师的良苦用心。',
    explanation: '正确对待表扬和批评是我们健康成长的重要方面，要有一颗平常心。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-7-2-17',
    type: 'short_answer',
    questionText: '我们怎样与老师沟通？',
    answer: '与老师沟通时要做到：选择恰当的时机和方式，表达自己的想法和观点；态度诚恳，语言得体，尊重老师；换位思考，理解老师的立场；坦诚相待，不隐瞒问题。',
    explanation: '与老师沟通需要技巧和方式方法，要尊重老师同时表达自己的想法。',
    difficulty: 2,
  },
  {
    questionKey: 'politics-bubian-7-2-18',
    type: 'short_answer',
    questionText: '家庭对我们有什么重要作用？',
    answer: '家是我们身心的寄居之所，是我们的情感栖息地；家庭满足我们的物质生活需要，满足我们的情感需要；家庭是我们的避风港，给我们温暖和安全感；家庭是我们成长的摇篮，为我们提供教育和支持。',
    explanation: '家庭是社会的细胞，对个人的成长和发展起着基础性作用。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-7-2-19',
    type: 'short_answer',
    questionText: '如何化解与父母的冲突？',
    answer: '冷静思考，不冲动；主动与父母沟通交流，了解父母的想法；换位思考，体谅父母的辛苦；求同存异，找到双方都能接受的方案；如果一时无法解决，可以寻求其他长辈或老师的帮助。',
    explanation: '亲子冲突是正常的，关键在于我们如何以积极的态度和正确的方式去化解。',
    difficulty: 3,
  },
  {
    questionKey: 'politics-bubian-7-2-20',
    type: 'short_answer',
    questionText: '现代人应该如何传承和弘扬优良家风？',
    answer: '传承和弘扬优良家风需要我们从自身做起，学习和践行家庭中的优秀品德；需要家庭成员共同努力，营造良好的家庭氛围；需要在日常生活中践行诚实守信、勤俭节约、尊老爱幼等传统美德。',
    explanation: '优良家风是中华民族传统文化的重要组成部分，需要每一代人的传承和弘扬。',
    difficulty: 3,
  },
  {
    questionKey: 'politics-bubian-7-2-21',
    type: 'short_answer',
    questionText: '怎样增进与父母的感情？',
    answer: '认真聆听父母的教诲；学会赞赏父母；帮助父母做力所能及的家务；与父母一起参加家庭活动；与父母分享学校生活中的趣事和烦恼；尊重父母的人格和劳动。',
    explanation: '增进亲子感情需要日常生活中的点滴积累，用实际行动表达对父母的爱。',
    difficulty: 2,
  },

  // ---- matching 2题 ----
  {
    questionKey: 'politics-bubian-7-2-22',
    type: 'matching',
    questionText: '请将下列师生交往行为与其性质连线。',
    answer: '上课认真听讲，积极回答问题—尊重老师的表现；当面顶撞老师—不尊重老师的行为；主动向老师请教问题—积极沟通的表现；在背后说老师的坏话—不良的行为习惯',
    explanation: '正确区分师生交往中的良好行为和不当行为，有助于建立和谐的师生关系。',
    difficulty: 1,
    pairs: '[["上课认真听讲积极回答问题", "尊重老师的表现"], ["当面顶撞老师", "不尊重老师的行为"], ["主动向老师请教问题", "积极沟通的表现"], ["在背后说老师的坏话", "不良的行为习惯"]]',
  },
  {
    questionKey: 'politics-bubian-7-2-23',
    type: 'matching',
    questionText: '请将下列家庭关系行为与对应观念连线。',
    answer: '尊重父母意见—孝敬父母；经常和父母交流—亲子互动；帮父母做家务—分担家庭责任；遇到分歧冷静协商—理性沟通',
    explanation: '良好的亲子关系建立在互相尊重、理解、沟通和分担的基础上。',
    difficulty: 2,
    pairs: '[["尊重父母意见", "孝敬父母"], ["经常和父母交流", "亲子互动"], ["帮父母做家务", "分担家庭责任"], ["遇到分歧冷静协商", "理性沟通"]]',
  },
];

// ========== 7-3 生命的思考 (18题) ==========

const chapter7_3: RawQuestion[] = [
  // ---- choice 7题 ----
  {
    questionKey: 'politics-bubian-7-3-0',
    type: 'choice',
    questionText: '生命的特点包括（\uFF09',
    answer: 'B',
    explanation: '生命的特点包括：生命来之不易，是独特的、不可逆的、短暂的也是连续的。',
    difficulty: 1,
    options: '["A. 生命是永恒的", "B. 生命是独特的、不可逆的、短暂的", "C. 生命是可以重复的", "D. 生命没有意义"]',
  },
  {
    questionKey: 'politics-bubian-7-3-1',
    type: 'choice',
    questionText: '下列做法体现对生命尊重的是（\uFF09',
    answer: 'A',
    explanation: '尊重生命要关注自己的身体，珍惜健康，养成健康的生活方式，积极锻炼身体。',
    difficulty: 1,
    options: '["A. 坚持锻炼身体，养成健康的生活方式", "B. 经常熬夜，不注意休息", "C. 暴饮暴食", "D. 沉迷网络，不参加户外活动"]',
  },
  {
    questionKey: 'politics-bubian-7-3-2',
    type: 'choice',
    questionText: '在日常生活中，我们可以通过哪些方式敬畏生命？（\uFF09',
    answer: 'D',
    explanation: '敬畏生命要从珍惜自己的生命做起，也要关怀和尊重他人的生命，不随意伤害生命。',
    difficulty: 1,
    options: '["A. 只关心自己的生命安全", "B. 漠视他人的生命", "C. 可以随意践踏花草", "D. 珍惜自己生命，也关怀他人生命"]',
  },
  {
    questionKey: 'politics-bubian-7-3-3',
    type: 'choice',
    questionText: '生命的追问是要思考（\uFF09',
    answer: 'C',
    explanation: '生命的追问就是思考生命的意义，思考怎样的一生是值得的。生命的意义不在于长短，而在于对社会的贡献。',
    difficulty: 2,
    options: '["A. 人能活多久", "B. 人死后会怎样", "C. 怎样的一生是值得的", "D. 人为什么有生命"]',
  },
  {
    questionKey: 'politics-bubian-7-3-4',
    type: 'choice',
    questionText: '如何让生命充盈？（\uFF09',
    answer: 'B',
    explanation: '让生命充盈需要我们热爱学习，乐于实践，拓展生活阅历；需要我们敞开胸怀，与他人建立联系；需要在创造和奉献中提升生命的价值。',
    difficulty: 2,
    options: '["A. 每天无所事事", "B. 热爱学习，乐于实践，拓展生活阅历", "C. 只追求物质享受", "D. 与世隔绝"]',
  },
  {
    questionKey: 'politics-bubian-7-3-5',
    type: 'choice',
    questionText: '关于生命的接续，下列说法正确的是（\uFF09',
    answer: 'A',
    explanation: '生命的接续包括身体生命的接续、社会关系的接续和精神信念的接续。我们不仅承接了祖先的生命，也承接了人类文明和精神。',
    difficulty: 2,
    options: '["A. 生命有身体、社会关系和精神信念的接续", "B. 生命没有接续", "C. 生命只有身体的接续", "D. 生命的接续只与血缘有关"]',
  },
  {
    questionKey: 'politics-bubian-7-3-6',
    type: 'choice',
    questionText: '面对挫折，我们应该（\uFF09',
    answer: 'D',
    explanation: '面对挫折，我们应该增强生命的韧性，发掘自身的生命力量，培养面对困难的勇气和坚强的意志。',
    difficulty: 1,
    options: '["A. 逃避困难", "B. 自暴自弃", "C. 怨天尤人", "D. 增强生命韧性，勇于面对"]',
  },

  // ---- fill 4题 ----
  {
    questionKey: 'politics-bubian-7-3-7',
    type: 'fill',
    questionText: '生命是______的、______的、短暂的也是______的。',
    answer: '独特；不可逆；连续',
    explanation: '生命具有独特性、不可逆性、短暂性，同时也是连续的，人类生命通过一代代的接续而延续。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-7-3-8',
    type: 'fill',
    questionText: '与周围的生命休戚与共，意味着我们要______、______每一个生命。',
    answer: '尊重；关怀',
    explanation: '敬畏生命就要与周围的生命休戚与共，尊重和关怀每一个生命。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-7-3-9',
    type: 'fill',
    questionText: '生命的意义不在于______，而在于______。',
    answer: '长短；对社会的贡献',
    explanation: '生命的意义不在于生命的长短，而在于对社会的贡献。为人民利益而死，就比泰山还重。',
    difficulty: 1,
    acceptableAnswers: '["长短，对社会的贡献"]',
  },
  {
    questionKey: 'politics-bubian-7-3-10',
    type: 'fill',
    questionText: '面对挫折，增强生命韧性的方法包括：______、自我调节和______。',
    answer: '乐观面对；寻求帮助',
    explanation: '增强生命韧性需要保持乐观的心态，学会自我调节，遇到困难时积极寻求帮助。',
    difficulty: 2,
  },

  // ---- short_answer 5题 ----
  {
    questionKey: 'politics-bubian-7-3-11',
    type: 'short_answer',
    questionText: '我们为什么要敬畏生命？',
    answer: '生命来之不易，是独特的、不可逆的、短暂的；生命是脆弱的，也是坚强的；生命价值高于一切。我们不仅要珍惜自己的生命，还要关怀和尊重他人的生命。',
    explanation: '敬畏生命是因为生命的珍贵和不可重复，也是因为我们与他人休戚与共。',
    difficulty: 2,
  },
  {
    questionKey: 'politics-bubian-7-3-12',
    type: 'short_answer',
    questionText: '怎样的一生是值得的？',
    answer: '能够将个人理想与国家发展、民族复兴结合起来，为社会做出贡献的一生是值得的；能够活出自己的人生，实现自我价值，这样的一生也是值得的；在平凡岗位上默默奉献，为人民服务的一生同样是值得的。',
    explanation: '生命的价值在于奉献和创造，在于为他人和社会做出贡献。',
    difficulty: 2,
  },
  {
    questionKey: 'politics-bubian-7-3-13',
    type: 'short_answer',
    questionText: '如何发掘生命的力量？',
    answer: '发掘生命的力量需要培养自己面对困难的勇气和坚强的意志；需要向他人寻求帮助，获得他人的支持和鼓励；需要积累应对困难的经验和方法，增强生命的韧性。',
    explanation: '每个人都有发掘自身生命力量的潜能，关键在于我们要善于发现和培养。',
    difficulty: 3,
  },
  {
    questionKey: 'politics-bubian-7-3-14',
    type: 'short_answer',
    questionText: '生命的接续有哪些方面？',
    answer: '生命的接续包括身体生命的接续，即种族的繁衍；社会关系的接续，即社会中角色的延续；精神信念的接续，即人类文明和精神的传承。我们不仅承接了祖先的生命，也承接了他们的精神和文明。',
    explanation: '生命的接续是多方面的，既包括生物意义上的，也包括社会和精神层面的。',
    difficulty: 3,
  },
  {
    questionKey: 'politics-bubian-7-3-15',
    type: 'short_answer',
    questionText: '在日常生活中，我们应该如何珍爱生命？',
    answer: '在日常生活中珍爱生命要做到：养成健康的生活方式，合理饮食、适度运动、充足睡眠；注意交通安全，遵守交通规则；不参与危险活动，增强安全意识；关注心理健康，保持积极乐观的心态。',
    explanation: '珍爱生命需要从日常小事做起，注重身体安全和心理健康。',
    difficulty: 1,
  },

  // ---- matching 2题 ----
  {
    questionKey: 'politics-bubian-7-3-16',
    type: 'matching',
    questionText: '请将下列行为与其体现的生命观念连线。',
    answer: '定期体检—关注生命健康；无偿献血—关爱他人生命；帮助残疾同学—尊重生命价值；沉迷网络游戏—不珍爱生命',
    explanation: '不同的行为体现了对生命不同的态度，我们要选择积极的生命态度。',
    difficulty: 1,
    pairs: '[["定期体检", "关注生命健康"], ["无偿献血", "关爱他人生命"], ["帮助残疾同学", "尊重生命价值"], ["沉迷网络游戏", "不珍爱生命"]]',
  },
  {
    questionKey: 'politics-bubian-7-3-17',
    type: 'matching',
    questionText: '请将下列名言与其体现的生命态度连线。',
    answer: '"人固有一死，或重于泰山，或轻于鸿毛"—生命价值在于奉献；"天行健，君子以自强不息"—面对挫折要坚强；"人生自古谁无死，留取丹心照汗青"—为正义事业献身；"苟利国家生死以，岂因祸福避趋之"—以国家利益为重',
    explanation: '这些名言体现了不同的生命态度和价值观，激励我们在生活中积极向上。',
    difficulty: 2,
    pairs: '[["人固有一死或重于泰山或轻于鸿毛", "生命价值在于奉献"], ["天行健君子以自强不息", "面对挫折要坚强"], ["人生自古谁无死留取丹心照汗青", "为正义事业献身"], ["苟利国家生死以岂因祸福避趋之", "以国家利益为重"]]',
  },
];

// ========== 8-0 走进社会生活 (20题) ==========

const chapter8_0: RawQuestion[] = [
  // ---- choice 8题 ----
  {
    questionKey: 'politics-bubian-8-0-0',
    type: 'choice',
    questionText: '社会生活空间不断延展表现为（\uFF09',
    answer: 'B',
    explanation: '随着社会的发展，我们的社会生活空间不断延展，从家庭到学校再到社区、社会，社会交往的对象更加广泛。',
    difficulty: 1,
    options: '["A. 只在家里活动", "B. 从家庭到学校再到社区、社会不断拓展", "C. 只在学校学习", "D. 只在网络上活动"]',
  },
  {
    questionKey: 'politics-bubian-8-0-1',
    type: 'choice',
    questionText: '个人与社会的关系是（\uFF09',
    answer: 'C',
    explanation: '个人是社会的有机组成部分，社会为个人成长提供支持，个人离不开社会，社会的存在和发展离不开每个人的努力。',
    difficulty: 1,
    options: '["A. 个人与社会无关", "B. 社会可以离开个人存在", "C. 个人离不开社会，社会离不开个人", "D. 个人决定社会"]',
  },
  {
    questionKey: 'politics-bubian-8-0-2',
    type: 'choice',
    questionText: '社会化的含义是（\uFF09',
    answer: 'A',
    explanation: '社会化是指一个人学习知识、技能和规范，取得社会成员资格，发展自己社会性的过程。社会化贯穿人的一生。',
    difficulty: 2,
    options: '["A. 学习知识技能和规范，发展社会性的过程", "B. 离开社会独立生活", "C. 只在学校学习", "D. 获得物质财富的过程"]',
  },
  {
    questionKey: 'politics-bubian-8-0-3',
    type: 'choice',
    questionText: '同辈群体对个人成长的影响主要体现在（\uFF09',
    answer: 'D',
    explanation: '同辈群体对个人的认知、行为、价值观等方面都有重要影响，良好的同辈群体能促进个人的健康成长。',
    difficulty: 2,
    options: '["A. 只影响学习成绩", "B. 没有影响", "C. 只有负面影响", "D. 影响认知、行为和价值观"]',
  },
  {
    questionKey: 'politics-bubian-8-0-4',
    type: 'choice',
    questionText: '下列属于亲社会行为的是（\uFF09',
    answer: 'B',
    explanation: '亲社会行为是指人们在社会交往中表现出来的那些有利于他人和社会的行为，如帮助、分享、合作、安慰、捐赠、关心等。',
    difficulty: 1,
    options: '["A. 欺骗同学", "B. 参加志愿服务活动", "C. 随意乱扔垃圾", "D. 在公共场合大声喧哗"]',
  },
  {
    questionKey: 'politics-bubian-8-0-5',
    type: 'choice',
    questionText: '养成亲社会行为的意义在于（\uFF09',
    answer: 'A',
    explanation: '养成亲社会行为有利于我们养成良好的行为习惯，塑造健康的人格，形成正确的价值观，获得他人的和社会的接纳和认可。',
    difficulty: 1,
    options: '["A. 有利于塑造健康人格和正确价值观", "B. 浪费时间", "C. 会被人利用", "D. 只对他人有好处"]',
  },
  {
    questionKey: 'politics-bubian-8-0-6',
    type: 'choice',
    questionText: '网络对我们生活的影响是（\uFF09',
    answer: 'D',
    explanation: '网络丰富了我们的日常生活，促进了人际交往，推动了社会进步，但同时网络也存在信息良莠不齐、沉迷网络等问题，要合理利用网络。',
    difficulty: 2,
    options: '["A. 只有积极影响", "B. 只有消极影响", "C. 没有任何影响", "D. 既有积极影响也有消极影响"]',
  },
  {
    questionKey: 'politics-bubian-8-0-7',
    type: 'choice',
    questionText: '合理利用网络要求我们（\uFF09',
    answer: 'B',
    explanation: '合理利用网络要提高媒介素养，学会辨别信息，不沉迷网络，遵守网络规则和法律，利用网络获取有益信息、促进学习和发展。',
    difficulty: 2,
    options: '["A. 可以长时间上网", "B. 提高媒介素养，学会辨别信息", "C. 随意浏览网页", "D. 可以在网上发布任何信息"]',
  },

  // ---- fill 4题 ----
  {
    questionKey: 'politics-bubian-8-0-8',
    type: 'fill',
    questionText: '个人是社会的______组成部分。',
    answer: '有机',
    explanation: '每个人都是社会的有机组成部分，个人离不开社会。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-8-0-9',
    type: 'fill',
    questionText: '______行为是指人们在社会交往中表现出来的有利于他人和社会的行为。',
    answer: '亲社会',
    explanation: '亲社会行为是有利于他人和社会的行为，如帮助、分享、合作等。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-8-0-10',
    type: 'fill',
    questionText: '在网络时代，我们要提高______素养，学会辨别信息。',
    answer: '媒介',
    explanation: '媒介素养是指人们正确判断媒介信息的意义和作用，有效地创造和传播信息的能力。',
    difficulty: 2,
  },
  {
    questionKey: 'politics-bubian-8-0-11',
    type: 'fill',
    questionText: '网络生活的基本准则包括______、______、文明。',
    answer: '恪守道德；遵守法律',
    explanation: '在网络生活中，我们要恪守道德、遵守法律，做负责任的网络参与者。',
    difficulty: 1,
  },

  // ---- short_answer 6题 ----
  {
    questionKey: 'politics-bubian-8-0-12',
    type: 'short_answer',
    questionText: '个人与社会的关系是怎样的？',
    answer: '个人是社会的有机组成部分，社会是由个人组成的；人的生存和发展离不开社会，每个人都能从社会中获得物质支持和精神滋养；社会的存在和发展需要每个人的参与和贡献。',
    explanation: '个人与社会是相互依存、相互促进的关系，人不能脱离社会而存在。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-8-0-13',
    type: 'short_answer',
    questionText: '我们为什么要养成亲社会行为？',
    answer: '亲社会行为有利于我们养成良好的行为习惯；有利于塑造健康的人格和正确的价值观；有利于建立良好的人际关系；有利于我们获得他人的和社会的接纳和认可；有利于社会的和谐发展。',
    explanation: '养成亲社会行为对个人成长和社会和谐都有重要意义。',
    difficulty: 2,
  },
  {
    questionKey: 'politics-bubian-8-0-14',
    type: 'short_answer',
    questionText: '如何养成亲社会行为？',
    answer: '亲社会行为在人际交往和社会实践中养成：我们要主动了解社会，关注社会发展变化；积极投身社会实践；在社会生活中学会帮助他人、关心社会；在帮助他人、奉献社会的行动中实现人生价值。',
    explanation: '亲社会行为的养成需要我们在实践中不断锻炼和积累。',
    difficulty: 2,
  },
  {
    questionKey: 'politics-bubian-8-0-15',
    type: 'short_answer',
    questionText: '网络生活有哪些双面性？',
    answer: '网络的积极面：网络丰富日常生活，促进人际交往，推动社会进步，为学习和工作提供便利。网络的消极面：网络信息良莠不齐，可能沉迷网络，存在网络诈骗、网络暴力等风险，影响身体健康和学习。',
    explanation: '网络是一把双刃剑，我们要充分利用其积极面，避免其消极影响。',
    difficulty: 2,
  },
  {
    questionKey: 'politics-bubian-8-0-16',
    type: 'short_answer',
    questionText: '如何做到合理利用网络？',
    answer: '提高媒介素养，学会辨别信息；学会信息节食，不沉迷网络；遵守网络法律法规，恪守网络道德；利用网络促进学习和发展；传播正能量，不造谣传谣；保护好个人隐私信息。',
    explanation: '合理利用网络需要我们具备良好的网络素养和自律意识。',
    difficulty: 3,
  },
  {
    questionKey: 'politics-bubian-8-0-17',
    type: 'short_answer',
    questionText: '参与社会生活有什么意义？',
    answer: '参与社会生活可以增长知识、开阔视野；可以锻炼能力、提升素质；可以结识新朋友，建立社会关系；可以增强社会责任感和使命感；可以在实践中实现自我价值。',
    explanation: '积极参与社会生活对个人成长有着多方面的积极意义。',
    difficulty: 2,
  },

  // ---- matching 2题 ----
  {
    questionKey: 'politics-bubian-8-0-18',
    type: 'matching',
    questionText: '请将下列行为与其社会属性连线。',
    answer: '在超市购物—经济生活；在学校学习—文化生活；参加社区选举—政治生活；参加志愿者活动—公共生活',
    explanation: '社会生活是多方面的，包括经济生活、文化生活、政治生活和公共生活等。',
    difficulty: 1,
    pairs: '[["在超市购物", "经济生活"], ["在学校学习", "文化生活"], ["参加社区选举", "政治生活"], ["参加志愿者活动", "公共生活"]]',
  },
  {
    questionKey: 'politics-bubian-8-0-19',
    type: 'matching',
    questionText: '请将下列网络行为与对应规则连线。',
    answer: '传播正能量—网络道德要求；不泄露个人信息—网络安全要求；不信谣不传谣—网络行为规范；遵守网络法律法规—法律底线',
    explanation: '网络生活中有不同的行为规范，我们要遵守道德和法律的要求。',
    difficulty: 2,
    pairs: '[["传播正能量", "网络道德要求"], ["不泄露个人信息", "网络安全要求"], ["不信谣不传谣", "网络行为规范"], ["遵守网络法律法规", "法律底线"]]',
  },
];

// ========== 8-1 遵守社会规则 (22题) ==========

const chapter8_1: RawQuestion[] = [
  // ---- choice 9题 ----
  {
    questionKey: 'politics-bubian-8-1-0',
    type: 'choice',
    questionText: '社会规则的种类包括（\uFF09',
    answer: 'A',
    explanation: '社会规则包括道德、纪律、法律等。道德是约定俗成的，纪律是特定组织制定的，法律是国家制定的。',
    difficulty: 1,
    options: '["A. 道德、纪律、法律", "B. 只有法律", "C. 只有道德", "D. 只有纪律"]',
  },
  {
    questionKey: 'politics-bubian-8-1-1',
    type: 'choice',
    questionText: '法律区别于道德等行为规范的最主要特征是（\uFF09',
    answer: 'C',
    explanation: '法律是由国家制定或认可的，是由国家强制力保证实施的，对全体社会成员具有普遍约束力。这是法律区别于其他行为规范的最主要特征。',
    difficulty: 2,
    options: '["A. 由社会舆论保证实施", "B. 只约束部分人", "C. 由国家强制力保证实施", "D. 可以随意改变"]',
  },
  {
    questionKey: 'politics-bubian-8-1-2',
    type: 'choice',
    questionText: '遵守社会规则需要我们做到（\uFF09',
    answer: 'B',
    explanation: '遵守社会规则需要我们自律，做到他律与自律相结合；需要我们发自内心地敬畏规则，将规则内化于心、外化于行。',
    difficulty: 1,
    options: '["A. 只在有监督时遵守", "B. 自律与他律相结合，发自内心敬畏规则", "C. 只在有惩罚时遵守", "D. 随意变通规则"]',
  },
  {
    questionKey: 'politics-bubian-8-1-3',
    type: 'choice',
    questionText: '尊重他人的具体表现是（\uFF09',
    answer: 'D',
    explanation: '尊重他人要求我们积极关注和重视他人，平等对待他人，换位思考，欣赏和接纳他人。',
    difficulty: 1,
    options: '["A. 只尊重自己", "B. 只尊重有权的人", "C. 只尊重成绩好的人", "D. 平等对待他人，换位思考"]',
  },
  {
    questionKey: 'politics-bubian-8-1-4',
    type: 'choice',
    questionText: '诚信的基本要求是（\uFF09',
    answer: 'A',
    explanation: '诚信的基本要求是诚实守信，即对人守信、对事负责。诚信是做人的基本原则，是立身处世之本。',
    difficulty: 1,
    options: '["A. 诚实守信", "B. 随便许诺", "C. 说场面话", "D. 隐瞒真相"]',
  },
  {
    questionKey: 'politics-bubian-8-1-5',
    type: 'choice',
    questionText: '违法行为按照法律类别可以分为（\uFF09',
    answer: 'B',
    explanation: '违法行为按照法律类别分为民事违法行为、行政违法行为和刑事违法行为。',
    difficulty: 2,
    options: '["A. 大错和小错", "B. 民事违法、行政违法和刑事违法", "C. 故意和过失", "D. 个人违法和集体违法"]',
  },
  {
    questionKey: 'politics-bubian-8-1-6',
    type: 'choice',
    questionText: '刑法是规定（\uFF09的法律。',
    answer: 'C',
    explanation: '刑法是规定犯罪和刑罚的法律，是惩治犯罪、保护人民的有力武器。',
    difficulty: 2,
    options: '["A. 民事权利和义务", "B. 国家行政管理活动", "C. 犯罪和刑罚", "D. 合同和侵权"]',
  },
  {
    questionKey: 'politics-bubian-8-1-7',
    type: 'choice',
    questionText: '一般违法行为与犯罪的区别在于（\uFF09',
    answer: 'A',
    explanation: '一般违法行为的情节比较轻微，对社会危害性较小；犯罪的情节严重，对社会危害性大，应受刑罚处罚。',
    difficulty: 2,
    options: '["A. 对社会的危害程度和应受处罚不同", "B. 没有区别", "C. 主体不同", "D. 地点不同"]',
  },
  {
    questionKey: 'politics-bubian-8-1-8',
    type: 'choice',
    questionText: '遇到不法侵害时，正确的做法是（\uFF09',
    answer: 'D',
    explanation: '遇到不法侵害时，应及时拨打报警电话，寻求法律帮助，保全证据，勇于同违法犯罪行为作斗争。同时要注意保护自身安全。',
    difficulty: 1,
    options: '["A. 忍气吞声", "B. 以暴制暴", "C. 自行解决", "D. 及时报警，寻求法律帮助"]',
  },

  // ---- fill 4题 ----
  {
    questionKey: 'politics-bubian-8-1-9',
    type: 'fill',
    questionText: '社会规则划定了自由的______，是人们享有自由的______。',
    answer: '边界；前提',
    explanation: '社会规则划定了自由的边界，自由的实现不能触碰底线，遵守社会规则是享有自由的前提。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-8-1-10',
    type: 'fill',
    questionText: '______是做人的基本原则，是立身处世之本。',
    answer: '诚信',
    explanation: '诚信是中华民族的传统美德，是做人的基本原则，也是社会正常运行的基本条件。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-8-1-11',
    type: 'fill',
    questionText: '我国刑法规定，已满______周岁的人犯罪，应当负刑事责任。',
    answer: '16',
    explanation: '我国刑法规定，已满16周岁的人犯罪，应当负刑事责任。已满14周岁不满16周岁的人，犯故意杀人等特定罪的也应负刑事责任。',
    difficulty: 2,
  },
  {
    questionKey: 'politics-bubian-8-1-12',
    type: 'fill',
    questionText: '______是规定犯罪和刑罚的法律。',
    answer: '刑法',
    explanation: '刑法是规定犯罪和刑罚的法律，是国家的基本法律之一。',
    difficulty: 1,
  },

  // ---- short_answer 7题 ----
  {
    questionKey: 'politics-bubian-8-1-13',
    type: 'short_answer',
    questionText: '社会规则有什么作用？',
    answer: '社会规则明确社会秩序的内容，告诉大家应该做什么、不应该做什么；社会规则保障社会秩序的实现，对违反规则的行为予以制裁，对遵守规则的行为予以保护。',
    explanation: '社会规则是维护社会秩序的基本手段，对人们的行为起着规范和引导作用。',
    difficulty: 2,
  },
  {
    questionKey: 'politics-bubian-8-1-14',
    type: 'short_answer',
    questionText: '自由与规则的关系是怎样的？',
    answer: '社会规则划定了自由的边界，自由不是随心所欲的，它受道德、纪律、法律等社会规则的约束。遵守社会规则是享有自由的前提，只有遵守规则才能享有真正的自由。',
    explanation: '自由与规则并不矛盾，规则是自由的保障，自由的实现离不开规则的约束。',
    difficulty: 2,
  },
  {
    questionKey: 'politics-bubian-8-1-15',
    type: 'short_answer',
    questionText: '怎样做到尊重他人？',
    answer: '积极关注和重视他人，平等对待他人；换位思考，理解他人的感受和处境；学会欣赏和接纳他人，尊重他人的差异；不做有损他人人格的事。',
    explanation: '尊重他人是一种美德，也是人际交往的基本要求。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-8-1-16',
    type: 'short_answer',
    questionText: '我们应如何践行诚信？',
    answer: '树立诚信意识，不轻易许诺，一旦许诺就要努力兑现；在学习中诚实守信，不作弊；在交往中真诚待人，不撒谎；在经营活动中诚信守法，不弄虚作假；珍惜个人的诚信记录。',
    explanation: '践行诚信需要从点滴做起，在生活、学习和工作的各个方面都做到诚实守信。',
    difficulty: 2,
  },
  {
    questionKey: 'politics-bubian-8-1-17',
    type: 'short_answer',
    questionText: '一般违法行为和犯罪有什么联系？',
    answer: '一般违法行为和犯罪都是违法行为，都对社会有危害。一般违法行为如果得不到及时纠正，可能发展成为犯罪。两者之间没有不可逾越的鸿沟，有联系也有区别。',
    explanation: '一般违法和犯罪之间有密切联系，防微杜渐、防患于未然非常重要。',
    difficulty: 3,
  },
  {
    questionKey: 'politics-bubian-8-1-18',
    type: 'short_answer',
    questionText: '青少年如何预防违法犯罪？',
    answer: '增强法治观念，学法懂法守法；认识一般违法与犯罪的区别和联系，防微杜渐；从小事做起，杜绝不良行为；加强道德修养，提高自我控制能力；在权益受到侵害时及时寻求法律帮助。',
    explanation: '预防违法犯罪需要青少年增强法律意识，从日常行为中严格要求自己。',
    difficulty: 2,
  },
  {
    questionKey: 'politics-bubian-8-1-19',
    type: 'short_answer',
    questionText: '什么是正当防卫？正当防卫需要符合哪些条件？',
    answer: '正当防卫是指为了使国家、公共利益、本人或者他人的人身、财产和其他权利免受正在进行的不法侵害，而采取的制止不法侵害的行为。正当防卫不负刑事责任。条件包括：不法侵害正在发生、针对不法侵害人、不超过必要限度。',
    explanation: '正当防卫是法律赋予公民的权利，但必须在法定条件下行使，不能滥用。',
    difficulty: 3,
  },

  // ---- matching 2题 ----
  {
    questionKey: 'politics-bubian-8-1-20',
    type: 'matching',
    questionText: '请将下列行为与其对应的规则类型连线。',
    answer: '在公交车上主动让座—道德规范；上课不迟到—纪律规范；不闯红灯—法律规范；考试不作弊—纪律与道德规范',
    explanation: '不同的行为规范有不同的约束力和适用范围，需要我们分别遵守。',
    difficulty: 1,
    pairs: '[["在公交车上主动让座", "道德规范"], ["上课不迟到", "纪律规范"], ["不闯红灯", "法律规范"], ["考试不作弊", "纪律与道德规范"]]',
  },
  {
    questionKey: 'politics-bubian-8-1-21',
    type: 'matching',
    questionText: '请将下列违法行为与其类型连线。',
    answer: '欠债不还—民事违法行为；在公共场所扰乱秩序—行政违法行为；故意伤害他人致重伤—刑事违法行为；拾到他人财物不还—民事违法行为',
    explanation: '不同类型的违法行为触犯的法律不同，受到的处罚也不同。',
    difficulty: 2,
    pairs: '[["欠债不还", "民事违法行为"], ["在公共场所扰乱秩序", "行政违法行为"], ["故意伤害他人致重伤", "刑事违法行为"], ["拾到他人财物不还", "民事违法行为"]]',
  },
];

// ========== 8-2 承担责任 (20题) ==========

const chapter8_2: RawQuestion[] = [
  // ---- choice 8题 ----
  {
    questionKey: 'politics-bubian-8-2-0',
    type: 'choice',
    questionText: '责任是一个人（\uFF09',
    answer: 'A',
    explanation: '责任是一个人应该做某些事情、不应该做某些事情。责任来自对他人的承诺、职业要求、道德规范、法律规定等。',
    difficulty: 1,
    options: '["A. 应该做和不应该做的某些事情", "B. 可以随意选择的", "C. 只有大人才有的", "D. 与他人无关的"]',
  },
  {
    questionKey: 'politics-bubian-8-2-1',
    type: 'choice',
    questionText: '责任的来源不包括（\uFF09',
    answer: 'D',
    explanation: '责任的来源包括对他人的承诺、职业要求、道德规范、法律规定等。个人的喜好不是责任的来源。',
    difficulty: 1,
    options: '["A. 对他人的承诺", "B. 职业要求", "C. 道德规范", "D. 个人的喜好"]',
  },
  {
    questionKey: 'politics-bubian-8-2-2',
    type: 'choice',
    questionText: '在社会生活中，不同的角色承担不同的责任。作为子女，我们的责任是（\uFF09',
    answer: 'B',
    explanation: '作为子女，我们要孝敬父母，承担力所能及的家务劳动，尊重父母，关心家庭。',
    difficulty: 1,
    options: '["A. 不用管家里的事", "B. 孝敬父母，承担力所能及的家务", "C. 只管学习", "D. 让父母伺候自己"]',
  },
  {
    questionKey: 'politics-bubian-8-2-3',
    type: 'choice',
    questionText: '承担责任的代价包括（\uFF09',
    answer: 'C',
    explanation: '承担责任的代价包括付出时间、精力和金钱，而且可能因做得不好而受到责备，甚至受到处罚。但承担责任也能获得回报。',
    difficulty: 2,
    options: '["A. 不需要付出任何代价", "B. 只有利没有弊", "C. 付出时间、精力、金钱，可能受责备", "D. 会失去所有朋友"]',
  },
  {
    questionKey: 'politics-bubian-8-2-4',
    type: 'choice',
    questionText: '承担责任的回报包括（\uFF09',
    answer: 'A',
    explanation: '承担责任的回报包括物质方面的回报和精神方面的回报，如良好的自我感觉、他人的赞许、获得新的知识和技能等。',
    difficulty: 1,
    options: '["A. 良好自我感觉、他人赞许、新知识和技能", "B. 只有钱", "C. 没有任何回报", "D. 只有好名声"]',
  },
  {
    questionKey: 'politics-bubian-8-2-5',
    type: 'choice',
    questionText: '对自己负责的表现是（\uFF09',
    answer: 'D',
    explanation: '对自己负责就是用合理合法的方式满足自己的需求，做好自己该做的事情，努力学习，认真生活，对自己的行为后果承担责任。',
    difficulty: 1,
    options: '["A. 随意浪费时间", "B. 不听劝告", "C. 我行我素", "D. 做好该做的事，对自己的行为负责"]',
  },
  {
    questionKey: 'politics-bubian-8-2-6',
    type: 'choice',
    questionText: '不承担责任会带来的后果是（\uFF09',
    answer: 'B',
    explanation: '不承担责任会带来不良后果：既不利于个人成长，也会给他人和社会带来损失，还会受到道德谴责和法律制裁。',
    difficulty: 2,
    options: '["A. 没有任何后果", "B. 对自己、他人和社会都有不良后果", "C. 只对自己有影响", "D. 会得到别人的理解"]',
  },
  {
    questionKey: 'politics-bubian-8-2-7',
    type: 'choice',
    questionText: '社会责任感的核心是（\uFF09',
    answer: 'A',
    explanation: '社会责任感的核心是主动为社会做贡献，是对自己、对他人、对集体、对社会、对国家的责任意识和自觉态度。',
    difficulty: 2,
    options: '["A. 主动为社会做贡献", "B. 被迫承担义务", "C. 只对自己负责", "D. 获得物质回报"]',
  },

  // ---- fill 4题 ----
  {
    questionKey: 'politics-bubian-8-2-8',
    type: 'fill',
    questionText: '责任来自对他人的______、______要求、道德规范、法律规定等。',
    answer: '承诺；职业',
    explanation: '责任产生于社会关系之中的相互承诺，有多种来源。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-8-2-9',
    type: 'fill',
    questionText: '每个人在社会中扮演着不同的______，每一种______都伴随着相应的责任。',
    answer: '角色；角色',
    explanation: '社会角色与责任是相对应的，不同的角色有不同的责任。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-8-2-10',
    type: 'fill',
    questionText: '承担责任的回报既包括______方面的回报，也包括______方面的回报。',
    answer: '物质；精神',
    explanation: '承担责任既有物质回报，也有更重要的精神回报，如获得尊重、成长和自我价值感。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-8-2-11',
    type: 'fill',
    questionText: '在现实生活中，我们应该努力做到对自己______、对他人______、对集体______。',
    answer: '负责；负责；负责',
    explanation: '责任包括对自己、对他人、对集体等多方面的责任。',
    difficulty: 1,
    acceptableAnswers: '["负责；负责；尽责"]',
  },

  // ---- short_answer 6题 ----
  {
    questionKey: 'politics-bubian-8-2-12',
    type: 'short_answer',
    questionText: '角色与责任之间是什么关系？',
    answer: '每个人都有多重角色，每一种角色都伴随着相应的责任。角色不同，责任不同；角色变化，责任也会变化。我们在不同的场合扮演不同的角色，就要承担相应的责任。',
    explanation: '角色与责任是相对应的，认清自己的角色才能明确自己的责任。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-8-2-13',
    type: 'short_answer',
    questionText: '承担责任的代价和回报分别是什么？',
    answer: '代价：付出时间、精力、金钱，可能因做得不好而受到责备甚至处罚。回报：良好的自我感觉、他人的赞许和尊重、获得新知识和技能、实现自身的价值。',
    explanation: '承担责任既有代价也有回报，但从长远来看回报远大于代价。',
    difficulty: 2,
  },
  {
    questionKey: 'politics-bubian-8-2-14',
    type: 'short_answer',
    questionText: '不承担责任会有什么后果？',
    answer: '不承担责任既不利于个人成长和进步，也会给他人和社会带来损失和危害；不承担责任会受到道德谴责，甚至受到法律制裁；不承担责任会失去他人的信任和尊重。',
    explanation: '不承担责任的后果是多方面的，包括个人、社会和法律层面。',
    difficulty: 2,
  },
  {
    questionKey: 'politics-bubian-8-2-15',
    type: 'short_answer',
    questionText: '我们应如何做一个负责任的公民？',
    answer: '首先要对自己负责，做好自己该做的事；其次要关心他人和集体，积极参与社会公益活动；再次要遵纪守法，履行公民义务；最后要增强社会责任感，主动为社会和国家做贡献。',
    explanation: '做一个负责任的公民需要在个人、家庭、社会和国家多个层面承担责任。',
    difficulty: 2,
  },
  {
    questionKey: 'politics-bubian-8-2-16',
    type: 'short_answer',
    questionText: '服务和奉献社会有什么意义？',
    answer: '服务和奉献社会能体现人生价值，促进个人成长；能传递正能量，营造良好的社会氛围；能帮助需要帮助的人，促进社会和谐；是实现人生价值的重要途径。',
    explanation: '服务和奉献社会既有利于社会，也有利于个人的成长和价值的实现。',
    difficulty: 3,
  },
  {
    questionKey: 'politics-bubian-8-2-17',
    type: 'short_answer',
    questionText: '青少年应如何承担社会责任？',
    answer: '青少年应从身边小事做起，积极参加社会实践活动和志愿服务；努力学习，提高自身素质，为将来承担更大的社会责任做好准备；关注社会发展，关心国家大事，增强社会责任感和使命感。',
    explanation: '青少年承担社会责任要从实际出发，在实践中逐步培养责任意识。',
    difficulty: 2,
  },

  // ---- matching 2题 ----
  {
    questionKey: 'politics-bubian-8-2-18',
    type: 'matching',
    questionText: '请将下列角色与其主要责任连线。',
    answer: '学生—努力学习，完成学业；父母—抚养教育子女；医生—救死扶伤；警察—维护社会治安',
    explanation: '不同的社会角色承担着不同的社会责任，认清角色才能尽到责任。',
    difficulty: 1,
    pairs: '[["学生", "努力学习完成学业"], ["父母", "抚养教育子女"], ["医生", "救死扶伤"], ["警察", "维护社会治安"]]',
  },
  {
    questionKey: 'politics-bubian-8-2-19',
    type: 'matching',
    questionText: '请将下列行为与责任类型连线。',
    answer: '帮助同学辅导功课—对自己角色的责任；参加社区大扫除—对社会公益的责任；保护环境卫生—对公共环境的责任；赡养老人—对家庭的责任',
    explanation: '不同场景中的行为体现不同类型的责任意识，承担责任是多方面的。',
    difficulty: 2,
    pairs: '[["帮助同学辅导功课", "对自己角色的责任"], ["参加社区大扫除", "对社会公益的责任"], ["保护环境卫生", "对公共环境的责任"], ["赡养老人", "对家庭的责任"]]',
  },
];

// ========== 8-3 维护国家利益 (22题) ==========

const chapter8_3: RawQuestion[] = [
  // ---- choice 9题 ----
  {
    questionKey: 'politics-bubian-8-3-0',
    type: 'choice',
    questionText: '国家利益是一个国家（\uFF09',
    answer: 'C',
    explanation: '国家利益是一个主权国家在国际社会中生存和发展所需要的全部需求，主要包括安全利益、政治利益、经济利益、文化利益等。',
    difficulty: 1,
    options: '["A. 部分人的利益", "B. 统治者的利益", "C. 全体公民的整体利益", "D. 外国的利益"]',
  },
  {
    questionKey: 'politics-bubian-8-3-1',
    type: 'choice',
    questionText: '国家的核心利益包括（\uFF09',
    answer: 'B',
    explanation: '国家的核心利益包括国家主权、国家安全、领土完整、国家统一、国家政治制度和社会大局稳定等。',
    difficulty: 2,
    options: '["A. 只包括经济利益", "B. 国家主权、国家安全、领土完整、国家统一等", "C. 只包括文化利益", "D. 只包括军事利益"]',
  },
  {
    questionKey: 'politics-bubian-8-3-2',
    type: 'choice',
    questionText: '维护国家利益的基本要求是（\uFF09',
    answer: 'A',
    explanation: '维护国家利益需要我们树立国家利益至上的观念，把国家利益放在第一位，个人利益服从国家利益。',
    difficulty: 1,
    options: '["A. 树立国家利益至上观念", "B. 只考虑个人利益", "C. 个人利益高于国家利益", "D. 国家利益和个人利益没有关系"]',
  },
  {
    questionKey: 'politics-bubian-8-3-3',
    type: 'choice',
    questionText: '国家安全的重要性在于（\uFF09',
    answer: 'D',
    explanation: '国家安全是国家生存和发展的重要保障，是人民幸福安康的前提，是实现中华民族伟大复兴的重要保障。没有国家安全就没有人民的安居乐业。',
    difficulty: 1,
    options: '["A. 与普通人无关", "B. 只与军人有关", "C. 不太重要", "D. 是国家生存和发展的重要保障"]',
  },
  {
    questionKey: 'politics-bubian-8-3-4',
    type: 'choice',
    questionText: '总体国家安全观的核心是（\uFF09',
    answer: 'B',
    explanation: '总体国家安全观以人民安全为宗旨，以政治安全为根本，以经济安全为基础，以军事、文化、社会安全为保障。',
    difficulty: 2,
    options: '["A. 经济安全", "B. 人民安全", "C. 军事安全", "D. 文化安全"]',
  },
  {
    questionKey: 'politics-bubian-8-3-5',
    type: 'choice',
    questionText: '我国武装力量的任务是（\uFF09',
    answer: 'A',
    explanation: '我国武装力量的任务是巩固国防，抵抗侵略，保卫祖国，保卫人民的和平劳动，参加国家建设事业，全心全意为人民服务。',
    difficulty: 2,
    options: '["A. 巩固国防，抵抗侵略，保卫祖国", "B. 只负责救灾", "C. 只负责训练", "D. 只负责阅兵"]',
  },
  {
    questionKey: 'politics-bubian-8-3-6',
    type: 'choice',
    questionText: '当个人利益与国家利益发生矛盾时，我们应该（\uFF09',
    answer: 'C',
    explanation: '当个人利益与国家利益发生矛盾时，我们要着眼长远、顾全大局，以国家利益为重，把国家利益放在第一位。',
    difficulty: 1,
    options: '["A. 只考虑个人利益", "B. 放弃国家利益", "C. 以国家利益为重", "D. 完全不顾个人利益"]',
  },
  {
    questionKey: 'politics-bubian-8-3-7',
    type: 'choice',
    questionText: '公民维护国家安全的法律义务不包括（\uFF09',
    answer: 'D',
    explanation: '公民有维护国家安全的义务，包括保守国家秘密、配合国家安全工作、举报危害国家安全的行为等。但没有随意搜查他人住所的权利。',
    difficulty: 2,
    options: '["A. 保守国家秘密", "B. 配合国家安全工作", "C. 举报危害国家安全的行为", "D. 随意搜查他人住所"]',
  },
  {
    questionKey: 'politics-bubian-8-3-8',
    type: 'choice',
    questionText: '劳动者休息权属于公民的（\uFF09',
    answer: 'B',
    explanation: '劳动者有休息的权利，这是宪法赋予公民的基本权利，属于社会经济权利。',
    difficulty: 1,
    options: '["A. 政治权利", "B. 社会经济权利", "C. 人身自由权利", "D. 文化教育权利"]',
  },

  // ---- fill 4题 ----
  {
    questionKey: 'politics-bubian-8-3-9',
    type: 'fill',
    questionText: '总体国家安全观以______安全为宗旨。',
    answer: '人民',
    explanation: '总体国家安全观以人民安全为宗旨，以政治安全为根本，以经济安全为基础。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-8-3-10',
    type: 'fill',
    questionText: '国家利益涵盖国家______、______、______、文化等多个领域的利益。',
    answer: '安全；政治；经济',
    explanation: '国家利益涵盖安全利益、政治利益、经济利益、文化利益等多个方面。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-8-3-11',
    type: 'fill',
    questionText: '______是国家的根本大法，是治国安邦的总章程。',
    answer: '宪法',
    explanation: '宪法是国家的根本法，具有最高的法律地位和法律效力。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-8-3-12',
    type: 'fill',
    questionText: '全国人民代表大会是我国的______机关，行使国家______权。',
    answer: '权力；立法',
    explanation: '全国人民代表大会是我国最高国家权力机关，行使立法权、决定权、任免权和监督权。',
    difficulty: 2,
  },

  // ---- short_answer 7题 ----
  {
    questionKey: 'politics-bubian-8-3-13',
    type: 'short_answer',
    questionText: '国家利益包括哪些内容？',
    answer: '国家利益涵盖安全利益、政治利益、经济利益、文化利益等多个领域。其中，国家核心利益包括国家主权、国家安全、领土完整、国家统一、国家政治制度和社会大局稳定等。',
    explanation: '国家利益是一个完整的体系，涵盖多个领域，核心利益是不可侵犯的底线。',
    difficulty: 2,
  },
  {
    questionKey: 'politics-bubian-8-3-14',
    type: 'short_answer',
    questionText: '什么是总体国家安全观？',
    answer: '总体国家安全观是以人民安全为宗旨，以政治安全为根本，以经济安全为基础，以军事、文化、社会安全为保障，以促进国际安全为依托。涵盖政治、军事、国土、经济、文化、社会、科技、信息、生态、资源、核等多个领域的安全。',
    explanation: '总体国家安全观是一个系统性的国家安全理念，涵盖了多个领域的安全。',
    difficulty: 3,
  },
  {
    questionKey: 'politics-bubian-8-3-15',
    type: 'short_answer',
    questionText: '我们应如何维护国家利益？',
    answer: '树立国家利益至上的观念；在日常生活中自觉维护国家利益；当个人利益与国家利益发生矛盾时，以国家利益为重；坚决同一切损害国家利益的行为作斗争。',
    explanation: '维护国家利益是每个公民的义务，需要我们在日常生活中积极践行。',
    difficulty: 2,
  },
  {
    questionKey: 'politics-bubian-8-3-16',
    type: 'short_answer',
    questionText: '宪法规定的公民基本权利有哪些主要类别？',
    answer: '宪法规定的公民基本权利主要包括：政治权利（选举权和被选举权等）、人身自由权利（人身自由、人格尊严不受侵犯等）、社会经济权利（财产权、劳动权、休息权等）、文化教育权利（受教育的权利等）。',
    explanation: '宪法规定的公民基本权利涵盖了政治、人身、经济、文化等多个方面。',
    difficulty: 2,
  },
  {
    questionKey: 'politics-bubian-8-3-17',
    type: 'short_answer',
    questionText: '公民的基本义务有哪些？',
    answer: '公民的基本义务包括：维护国家统一和全国各民族团结；遵守宪法和法律，保守国家秘密；维护国家安全、荣誉和利益；依法服兵役和参加民兵组织；依法纳税等。',
    explanation: '公民在享有权利的同时也必须履行义务，权利与义务是统一的。',
    difficulty: 2,
  },
  {
    questionKey: 'politics-bubian-8-3-18',
    type: 'short_answer',
    questionText: '我国国家机构的组织和活动原则是什么？',
    answer: '我国国家机构的组织和活动原则包括民主集中制原则、对人民负责原则、依法治国原则。民主集中制是根本原则，全国人大和地方各级人大都由民主选举产生，对人民负责，受人民监督。',
    explanation: '民主集中制是我国的根本组织原则，体现了人民当家作主的本质。',
    difficulty: 3,
  },
  {
    questionKey: 'politics-bubian-8-3-19',
    type: 'short_answer',
    questionText: '青少年如何为维护国家安全做贡献？',
    answer: '增强国家安全意识，树立总体国家安全观；学习国家安全相关法律知识；保守国家秘密，不泄露国家信息；发现危害国家安全的行为及时举报；在网络空间自觉维护国家安全。',
    explanation: '维护国家安全人人有责，青少年要从自身做起，增强安全意识。',
    difficulty: 2,
  },

  // ---- matching 2题 ----
  {
    questionKey: 'politics-bubian-8-3-20',
    type: 'matching',
    questionText: '请将下列国家安全领域与其内容连线。',
    answer: '经济安全—保障经济稳定发展；文化安全—维护文化主权和文化认同；生态安全—保护生态环境和自然资源；网络安全—维护网络空间的安全稳定',
    explanation: '总体国家安全观涵盖了多个领域的安全，每个领域都有其特定的内容和重要性。',
    difficulty: 2,
    pairs: '[["经济安全", "保障经济稳定发展"], ["文化安全", "维护文化主权和文化认同"], ["生态安全", "保护生态环境和自然资源"], ["网络安全", "维护网络空间的安全稳定"]]',
  },
  {
    questionKey: 'politics-bubian-8-3-21',
    type: 'matching',
    questionText: '请将下列国家机构与其职能连线。',
    answer: '全国人民代表大会—最高国家权力机关；国务院—最高行政机关；最高人民法院—最高审判机关；最高人民检察院—最高检察机关',
    explanation: '我国的国家机构分工明确，各司其职，共同维护国家运转。',
    difficulty: 2,
    pairs: '[["全国人民代表大会", "最高国家权力机关"], ["国务院", "最高行政机关"], ["最高人民法院", "最高审判机关"], ["最高人民检察院", "最高检察机关"]]',
  },
];

// ========== 9-0 踏上社会之路 (20题) ==========

const chapter9_0: RawQuestion[] = [
  // ---- choice 8题 ----
  {
    questionKey: 'politics-bubian-9-0-0',
    type: 'choice',
    questionText: '踏上社会之路，意味着（\uFF09',
    answer: 'B',
    explanation: '踏上社会之路意味着我们从学校走向社会，从青少年成长为成年人，开始承担更多的社会责任，参与社会生活。',
    difficulty: 1,
    options: '["A. 不需要再学习", "B. 走向成人社会，承担更多社会责任", "C. 完全自由，没有约束", "D. 不需要遵守规则"]',
  },
  {
    questionKey: 'politics-bubian-9-0-1',
    type: 'choice',
    questionText: '我国的人口国情是（\uFF09',
    answer: 'A',
    explanation: '我国是世界上人口最多的国家之一，人口基数大、人口素质偏低、人口老龄化加剧是我国人口的基本国情。',
    difficulty: 1,
    options: '["A. 人口基数大，人口素质偏低，老龄化加剧", "B. 人口少，素质高", "C. 人口结构完美", "D. 人口问题已完全解决"]',
  },
  {
    questionKey: 'politics-bubian-9-0-2',
    type: 'choice',
    questionText: '我国环境的基本国情是（\uFF09',
    answer: 'C',
    explanation: '我国环境形势严峻，大气污染、水污染、土壤污染等问题突出，生态环境保护任重道远。',
    difficulty: 1,
    options: '["A. 环境非常好，没有问题", "B. 环境问题已经完全解决", "C. 环境形势严峻，面临诸多挑战", "D. 环境问题不严重"]',
  },
  {
    questionKey: 'politics-bubian-9-0-3',
    type: 'choice',
    questionText: '我国的基本经济制度是（\uFF09',
    answer: 'D',
    explanation: '我国实行公有制为主体、多种所有制经济共同发展的基本经济制度。',
    difficulty: 2,
    options: '["A. 纯粹的公有制", "B. 纯粹的私有制", "C. 计划经济", "D. 公有制为主体、多种所有制经济共同发展"]',
  },
  {
    questionKey: 'politics-bubian-9-0-4',
    type: 'choice',
    questionText: '共同富裕是中国特色社会主义的（\uFF09',
    answer: 'B',
    explanation: '共同富裕是中国特色社会主义的根本原则，不是同时富裕、同步富裕，而是允许一部分人先富起来，先富带动后富，最终实现共同富裕。',
    difficulty: 2,
    options: '["A. 最终目的", "B. 根本原则", "C. 唯一目标", "D. 短期目标"]',
  },
  {
    questionKey: 'politics-bubian-9-0-5',
    type: 'choice',
    questionText: '我国现阶段的主要矛盾是（\uFF09',
    answer: 'A',
    explanation: '我国现阶段的主要矛盾是人民日益增长的美好生活需要和不平衡不充分的发展之间的矛盾。',
    difficulty: 3,
    options: '["A. 人民日益增长的美好生活需要和不平衡不充分的发展之间的矛盾", "B. 经济基础和上层建筑之间的矛盾", "C. 生产和消费之间的矛盾", "D. 城乡之间的矛盾"]',
  },
  {
    questionKey: 'politics-bubian-9-0-6',
    type: 'choice',
    questionText: '社会主义核心价值观中，社会层面的价值目标是（\uFF09',
    answer: 'C',
    explanation: '社会主义核心价值观分为国家、社会和个人三个层面。社会层面：自由、平等、公正、法治。',
    difficulty: 1,
    options: '["A. 富强、民主、文明、和谐", "B. 爱国、敬业、诚信、友善", "C. 自由、平等、公正、法治", "D. 创新、协调、绿色、开放"]',
  },
  {
    questionKey: 'politics-bubian-9-0-7',
    type: 'choice',
    questionText: '社会主义核心价值观中，个人层面的价值准则是（\uFF09',
    answer: 'B',
    explanation: '社会主义核心价值观个人层面：爱国、敬业、诚信、友善。这是对每个公民的要求。',
    difficulty: 1,
    options: '["A. 富强、民主、文明、和谐", "B. 爱国、敬业、诚信、友善", "C. 自由、平等、公正、法治", "D. 创新、协调、绿色、开放"]',
  },

  // ---- fill 4题 ----
  {
    questionKey: 'politics-bubian-9-0-8',
    type: 'fill',
    questionText: '我国现阶段实行以______为主体、多种______经济共同发展的基本经济制度。',
    answer: '公有制；所有制',
    explanation: '我国的基本经济制度是公有制为主体、多种所有制经济共同发展。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-9-0-9',
    type: 'fill',
    questionText: '中国特色社会主义的______原则是共同富裕。',
    answer: '根本',
    explanation: '共同富裕是中国特色社会主义的根本原则，体现了社会主义制度的优越性。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-9-0-10',
    type: 'fill',
    questionText: '社会主义核心价值观国家层面的价值目标是富强、______、文明、______。',
    answer: '民主；和谐',
    explanation: '社会主义核心价值观国家层面的价值目标是富强、民主、文明、和谐。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-9-0-11',
    type: 'fill',
    questionText: '中华民族的______梦想是实现中华民族伟大复兴。',
    answer: '伟大',
    explanation: '实现中华民族伟大复兴是中华民族近代以来最伟大的梦想。',
    difficulty: 1,
  },

  // ---- short_answer 6题 ----
  {
    questionKey: 'politics-bubian-9-0-12',
    type: 'short_answer',
    questionText: '社会主义核心价值观的内容是什么？',
    answer: '国家层面：富强、民主、文明、和谐；社会层面：自由、平等、公正、法治；个人层面：爱国、敬业、诚信、友善。社会主义核心价值观是社会主义核心价值体系的高度凝练和集中表达。',
    explanation: '社会主义核心价值观从国家、社会和个人三个层面提出了价值目标和准则。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-9-0-13',
    type: 'short_answer',
    questionText: '我国为什么要把生态文明建设放在突出位置？',
    answer: '因为我国生态环境形势严峻，资源约束趋紧，环境污染严重，生态系统退化；生态环境关系到人民的福祉，关系到民族的未来；绿水青山就是金山银山，生态文明建设是可持续发展的重要保障。',
    explanation: '生态文明建设关乎民族未来和人民福祉，是我国发展的重要内容。',
    difficulty: 2,
  },
  {
    questionKey: 'politics-bubian-9-0-14',
    type: 'short_answer',
    questionText: '如何理解共同富裕？',
    answer: '共同富裕是中国特色社会主义的根本原则。共同富裕不是同时富裕、同步富裕，而是允许一部分人先富起来，先富带动后富，最终实现共同富裕。共同富裕也不是平均主义，而是在做大"蛋糕"的基础上分好"蛋糕"。',
    explanation: '共同富裕是一个长期的过程，需要在发展中逐步实现，不能急于求成。',
    difficulty: 2,
  },
  {
    questionKey: 'politics-bubian-9-0-15',
    type: 'short_answer',
    questionText: '青少年如何践行社会主义核心价值观？',
    answer: '坚定理想信念，将个人理想与国家发展结合起来；从日常小事做起，践行诚信、友善等道德规范；努力学习，提高自身素质；积极参加社会实践，服务社会；弘扬中华优秀传统文化。',
    explanation: '践行社会主义核心价值观需要从身边做起，从小事做起，将价值理念转化为实际行动。',
    difficulty: 3,
  },
  {
    questionKey: 'politics-bubian-9-0-16',
    type: 'short_answer',
    questionText: '新型城镇化建设的意义是什么？',
    answer: '新型城镇化有利于促进城乡协调发展，缩小城乡差距；有利于提高城镇化质量，改善人居环境；有利于扩大内需，促进经济持续健康发展；有利于推动社会公平正义，实现共同富裕。',
    explanation: '新型城镇化是我国经济社会发展的重要战略，对现代化建设有重要意义。',
    difficulty: 3,
  },
  {
    questionKey: 'politics-bubian-9-0-17',
    type: 'short_answer',
    questionText: '我国面临哪些发展挑战？',
    answer: '我国面临人口老龄化加剧、生态环境问题突出、城乡发展不平衡、区域发展不协调、科技创新能力有待提升、收入差距较大等发展挑战。需要通过深化改革、创新发展来应对这些挑战。',
    explanation: '认识到挑战是为了更好地应对挑战，推动国家实现可持续发展。',
    difficulty: 3,
  },

  // ---- matching 2题 ----
  {
    questionKey: 'politics-bubian-9-0-18',
    type: 'matching',
    questionText: '请将社会主义核心价值观的三个层面与其内容连线。',
    answer: '国家层面—富强、民主、文明、和谐；社会层面—自由、平等、公正、法治；个人层面—爱国、敬业、诚信、友善',
    explanation: '社会主义核心价值观分为国家、社会和个人三个层面，各有不同的价值目标和准则。',
    difficulty: 1,
    pairs: '[["国家层面", "富强民主文明和谐"], ["社会层面", "自由平等公正法治"], ["个人层面", "爱国敬业诚信友善"]]',
  },
  {
    questionKey: 'politics-bubian-9-0-19',
    type: 'matching',
    questionText: '请将下列发展理念与其含义连线。',
    answer: '创新发展—解决发展动力问题；协调发展—解决发展不平衡问题；绿色发展—解决人与自然和谐问题；共享发展—解决社会公平正义问题',
    explanation: '新发展理念是管全局、管根本、管长远的导向，是引领我国发展的重要理念。',
    difficulty: 2,
    pairs: '[["创新发展", "解决发展动力问题"], ["协调发展", "解决发展不平衡问题"], ["绿色发展", "解决人与自然和谐问题"], ["共享发展", "解决社会公平正义问题"]]',
  },
];

// ========== 9-1 创新驱动发展 (22题) ==========

const chapter9_1: RawQuestion[] = [
  // ---- choice 9题 ----
  {
    questionKey: 'politics-bubian-9-1-0',
    type: 'choice',
    questionText: '创新是引领发展的（\uFF09',
    answer: 'A',
    explanation: '创新是引领发展的第一动力，是一个民族进步的灵魂，是一个国家兴旺发达的不竭源泉。',
    difficulty: 1,
    options: '["A. 第一动力", "B. 第二动力", "C. 唯一动力", "D. 可有可无的动力"]',
  },
  {
    questionKey: 'politics-bubian-9-1-1',
    type: 'choice',
    questionText: '我国实施创新驱动发展战略，目的是（\uFF09',
    answer: 'C',
    explanation: '实施创新驱动发展战略，目的是加快实现经济转型升级，提高发展质量和效益，增强国家的创新能力。',
    difficulty: 2,
    options: '["A. 模仿别国技术", "B. 不再需要劳动", "C. 加快经济转型升级，提高发展质量", "D. 只发展高科技"]',
  },
  {
    questionKey: 'politics-bubian-9-1-2',
    type: 'choice',
    questionText: '创新的类型包括（\uFF09',
    answer: 'D',
    explanation: '创新包括科技创新、制度创新、文化创新等各个方面。其中科技创新是核心，制度创新是保障。',
    difficulty: 1,
    options: '["A. 只有科技创新", "B. 只有制度创新", "C. 只有文化创新", "D. 科技创新、制度创新、文化创新等"]',
  },
  {
    questionKey: 'politics-bubian-9-1-3',
    type: 'choice',
    questionText: '科技创新能力已经成为（\uFF09',
    answer: 'B',
    explanation: '科技创新能力已经成为综合国力竞争的决定性因素，各国都在努力提升科技创新能力以增强竞争力。',
    difficulty: 2,
    options: '["A. 不太重要的因素", "B. 综合国力竞争的决定性因素", "C. 只有发达国家才需要的", "D. 只与军事有关"]',
  },
  {
    questionKey: 'politics-bubian-9-1-4',
    type: 'choice',
    questionText: '教育创新的重要意义在于（\uFF09',
    answer: 'A',
    explanation: '教育创新是培养创新人才的基础。只有不断推进教育创新，才能培养出更多具有创新精神和创新能力的人才，为国家发展提供人才支撑。',
    difficulty: 2,
    options: '["A. 培养创新人才，为发展提供人才支撑", "B. 减轻学生负担", "C. 让学生不用学习", "D. 取消考试"]',
  },
  {
    questionKey: 'politics-bubian-9-1-5',
    type: 'choice',
    questionText: '我国在科技领域取得的成就包括（\uFF09',
    answer: 'D',
    explanation: '我国在航天（载人航天、探月工程）、深海探测、量子通信、高铁、5G等领域取得了举世瞩目的成就。',
    difficulty: 1,
    options: '["A. 没有科技成就", "B. 只有基础科学研究", "C. 科技落后于所有国家", "D. 航天、深海、量子通信、高铁等领域成就突出"]',
  },
  {
    questionKey: 'politics-bubian-9-1-6',
    type: 'choice',
    questionText: '大众创业、万众创新的意义是（\uFF09',
    answer: 'B',
    explanation: '大众创业、万众创新可以激发社会活力，扩大就业，促进经济转型升级，推动科技进步，增强国家创新能力。',
    difficulty: 2,
    options: '["A. 每个人都必须创业", "B. 激发社会活力，促进经济转型升级", "C. 只有大学生才能创新", "D. 创业一定会成功"]',
  },
  {
    questionKey: 'politics-bubian-9-1-7',
    type: 'choice',
    questionText: '保护知识产权的意义在于（\uFF09',
    answer: 'C',
    explanation: '保护知识产权有利于保护创新者的合法权益，激发创新热情，促进科技进步和经济社会发展。',
    difficulty: 2,
    options: '["A. 没有意义", "B. 只对大公司有好处", "C. 保护创新者权益，激发创新热情", "D. 限制创新"]',
  },
  {
    questionKey: 'politics-bubian-9-1-8',
    type: 'choice',
    questionText: '青少年培养创新精神应该（\uFF09',
    answer: 'A',
    explanation: '青少年培养创新精神需要保持好奇心，善于观察和思考，敢于质疑和提问，勇于实践和探索，不怕失败和挫折。',
    difficulty: 1,
    options: '["A. 保持好奇，善于观察思考，勇于实践", "B. 只听从老师", "C. 不敢提出不同意见", "D. 害怕犯错误"]',
  },

  // ---- fill 4题 ----
  {
    questionKey: 'politics-bubian-9-1-9',
    type: 'fill',
    questionText: '创新是引领发展的______动力。',
    answer: '第一',
    explanation: '创新是引领发展的第一动力，是国家发展全局的核心。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-9-1-10',
    type: 'fill',
    questionText: '______是民族进步的灵魂，是国家兴旺发达的不竭______。',
    answer: '创新；源泉',
    explanation: '创新是民族进步的灵魂，是一个国家兴旺发达的不竭源泉。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-9-1-11',
    type: 'fill',
    questionText: '科技创新能力已经成为综合国力竞争的______因素。',
    answer: '决定性',
    explanation: '科技创新能力已经成为综合国力竞争的决定性因素，各国都在努力提升自主创新能力。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-9-1-12',
    type: 'fill',
    questionText: '实施创新驱动发展战略，要以______为核心，以______为导向。',
    answer: '科技创新；经济社会发展需求',
    explanation: '实施创新驱动发展战略，要以科技创新为核心，以经济社会发展需求为导向。',
    difficulty: 2,
  },

  // ---- short_answer 7题 ----
  {
    questionKey: 'politics-bubian-9-1-13',
    type: 'short_answer',
    questionText: '为什么要坚持创新发展？',
    answer: '创新是引领发展的第一动力；科技创新能力已经成为综合国力竞争的决定性因素；我国面临经济转型升级的迫切需要；创新发展是解决我国发展问题的根本出路。',
    explanation: '创新发展关系到国家的竞争力和未来，是推动发展的核心力量。',
    difficulty: 2,
  },
  {
    questionKey: 'politics-bubian-9-1-14',
    type: 'short_answer',
    questionText: '我国科技创新的现状如何？',
    answer: '我国在尖端技术领域取得了一些重要突破，如航天、高铁、5G、量子通信等。但在一些核心技术、关键零部件方面仍依赖进口，科技总体水平与发达国家还有差距，自主创新能力有待提升。',
    explanation: '认识我国科技创新的现状，既要看到成就，也要看到不足。',
    difficulty: 2,
  },
  {
    questionKey: 'politics-bubian-9-1-15',
    type: 'short_answer',
    questionText: '如何建设创新型国家？',
    answer: '落实科教兴国战略和人才强国战略；增强自主创新能力，加快建设国家创新体系；营造有利于创新的制度环境和市场环境；加强知识产权保护；弘扬创新精神，营造鼓励创新的社会氛围。',
    explanation: '建设创新型国家需要多方面共同努力，从战略、制度到文化全面创新。',
    difficulty: 3,
  },
  {
    questionKey: 'politics-bubian-9-1-16',
    type: 'short_answer',
    questionText: '教育在创新中有什么重要作用？',
    answer: '教育是培养创新人才的基础；教育可以传播科学文化知识，培养科学精神；教育可以提高国民素质，为创新提供人才支撑；教育创新能激发学生的创造潜能。',
    explanation: '教育是创新之本，培养创新人才离不开教育的支撑。',
    difficulty: 2,
  },
  {
    questionKey: 'politics-bubian-9-1-17',
    type: 'short_answer',
    questionText: '知识产权保护有什么重要性？',
    answer: '保护知识产权有利于保护创新者的合法权益和创作热情；有利于促进科技成果转化为生产力；有利于营造公平竞争的市场环境；有利于推动科技进步和文化繁荣；有利于促进国际科技合作与交流。',
    explanation: '知识产权保护是激励创新的重要制度保障。',
    difficulty: 3,
  },
  {
    questionKey: 'politics-bubian-9-1-18',
    type: 'short_answer',
    questionText: '青少年如何培养创新能力？',
    answer: '保持好奇心和求知欲，善于观察和发现；敢于质疑，善于思考，培养批判性思维；积极参加科技活动和创新实践；不怕失败，勇于尝试新事物；广泛学习，拓宽知识面；善于合作，在交流中碰撞出创新火花。',
    explanation: '培养创新能力需要从日常学习和生活中积累，不断实践和探索。',
    difficulty: 2,
  },
  {
    questionKey: 'politics-bubian-9-1-19',
    type: 'short_answer',
    questionText: '列举我国近年来在科技创新方面的重大成就。',
    answer: '载人航天工程（神舟系列、天宫空间站）；探月工程（嫦娥系列）；北斗卫星导航系统；蛟龙号深海探测器；量子通信技术；5G通信技术；高速铁路技术；超级计算机等。',
    explanation: '我国在多个高科技领域取得了令世界瞩目的成就，展现了科技创新的实力。',
    difficulty: 1,
  },

  // ---- matching 2题 ----
  {
    questionKey: 'politics-bubian-9-1-20',
    type: 'matching',
    questionText: '请将下列创新类型与其含义连线。',
    answer: '科技创新—研发新技术、新产品；制度创新—改革和完善体制机制；文化创新—创造新的文化内容和文化形式；管理创新—改进管理方法和手段',
    explanation: '创新是多方面的，不同类型的创新在不同领域推动着社会的发展进步。',
    difficulty: 2,
    pairs: '[["科技创新", "研发新技术新产品"], ["制度创新", "改革和完善体制机制"], ["文化创新", "创造新的文化内容和文化形式"], ["管理创新", "改进管理方法和手段"]]',
  },
  {
    questionKey: 'politics-bubian-9-1-21',
    type: 'matching',
    questionText: '请将下列我国科技成就与其领域连线。',
    answer: '神舟载人飞船—航天工程；蛟龙号载人潜水器—深海探测；墨子号量子卫星—量子通信；复兴号动车组—高铁技术',
    explanation: '我国在多个科技领域取得了重大突破，展现了强大的创新能力。',
    difficulty: 1,
    pairs: '[["神舟载人飞船", "航天工程"], ["蛟龙号载人潜水器", "深海探测"], ["墨子号量子卫星", "量子通信"], ["复兴号动车组", "高铁技术"]]',
  },
];

// ========== 9-2 民主与法治 (24题) ==========

const chapter9_2: RawQuestion[] = [
  // ---- choice 10题 ----
  {
    questionKey: 'politics-bubian-9-2-0',
    type: 'choice',
    questionText: '社会主义民主政治的本质特征是（\uFF09',
    answer: 'A',
    explanation: '人民当家作主是社会主义民主政治的本质特征，我国的一切权力属于人民。',
    difficulty: 1,
    options: '["A. 人民当家作主", "B. 少数服从多数", "C. 代议制", "D. 直接选举"]',
  },
  {
    questionKey: 'politics-bubian-9-2-1',
    type: 'choice',
    questionText: '我国社会主义民主政治的独特优势是（\uFF09',
    answer: 'B',
    explanation: '我国社会主义民主政治的独特优势是协商民主，通过协商广泛凝聚共识，找到最大公约数，体现了全过程人民民主的特点。',
    difficulty: 2,
    options: '["A. 选举民主", "B. 协商民主", "C. 自由民主", "D. 直接民主"]',
  },
  {
    questionKey: 'politics-bubian-9-2-2',
    type: 'choice',
    questionText: '全国人大代表和地方各级人大代表由（\uFF09',
    answer: 'C',
    explanation: '全国人大代表和地方各级人大代表都由民主选举产生，对人民负责，受人民监督。',
    difficulty: 1,
    options: '["A. 指定产生", "B. 任命产生", "C. 民主选举产生", "D. 继承产生"]',
  },
  {
    questionKey: 'politics-bubian-9-2-3',
    type: 'choice',
    questionText: '依法治国的核心是（\uFF09',
    answer: 'A',
    explanation: '依法治国的核心是依宪治国，宪法是国家的根本大法，是一切法律的依据，具有最高的法律效力。',
    difficulty: 1,
    options: '["A. 依宪治国", "B. 依法行政", "C. 公正司法", "D. 严格执法"]',
  },
  {
    questionKey: 'politics-bubian-9-2-4',
    type: 'choice',
    questionText: '依法行政的主体是（\uFF09',
    answer: 'D',
    explanation: '依法行政的主体是政府及其工作人员。政府要严格按照法定权限和程序行使权力，做到法定职责必须为，法无授权不可为。',
    difficulty: 2,
    options: '["A. 公民个人", "B. 企业", "C. 学校", "D. 政府及其工作人员"]',
  },
  {
    questionKey: 'politics-bubian-9-2-5',
    type: 'choice',
    questionText: '法治与德治的关系是（\uFF09',
    answer: 'B',
    explanation: '法治与德治相辅相成，法治是准绳，德治是滋养。国家治理需要法律和道德共同发挥作用。',
    difficulty: 2,
    options: '["A. 只需要法治", "B. 法治与德治相辅相成", "C. 只需要德治", "D. 法治与德治互相矛盾"]',
  },
  {
    questionKey: 'politics-bubian-9-2-6',
    type: 'choice',
    questionText: '全面依法治国的总目标是（\uFF09',
    answer: 'C',
    explanation: '全面依法治国的总目标是建设中国特色社会主义法治体系，建设社会主义法治国家。',
    difficulty: 2,
    options: '["A. 制定更多法律", "B. 加强执法力度", "C. 建设中国特色社会主义法治体系、建设法治国家", "D. 完善司法制度"]',
  },
  {
    questionKey: 'politics-bubian-9-2-7',
    type: 'choice',
    questionText: '人民参与民主生活的形式包括（\uFF09',
    answer: 'A',
    explanation: '人民参与民主生活的形式包括民主选举、民主决策、民主管理和民主监督。',
    difficulty: 1,
    options: '["A. 民主选举、民主决策、民主管理、民主监督", "B. 只能参加选举", "C. 不能参与政治生活", "D. 只能在网络上发表意见"]',
  },
  {
    questionKey: 'politics-bubian-9-2-8',
    type: 'choice',
    questionText: '宪法规定的根本制度是（\uFF09',
    answer: 'D',
    explanation: '宪法规定我国的根本制度是社会主义制度。',
    difficulty: 1,
    options: '["A. 资本主义制度", "B. 封建制度", "C. 联邦制", "D. 社会主义制度"]',
  },
  {
    questionKey: 'politics-bubian-9-2-9',
    type: 'choice',
    questionText: '公民行使民主权利的正确方式是（\uFF09',
    answer: 'A',
    explanation: '公民行使民主权利要在法律允许的范围内，以理性、合法的方式表达意见和诉求，不能采取非法手段。',
    difficulty: 2,
    options: '["A. 在法律范围内理性合法地表达", "B. 采取过激行为", "C. 任意妄为", "D. 强制他人接受自己的意见"]',
  },

  // ---- fill 5题 ----
  {
    questionKey: 'politics-bubian-9-2-10',
    type: 'fill',
    questionText: '社会主义民主政治的本质特征是______当家作主。',
    answer: '人民',
    explanation: '社会主义民主政治的本质和核心是人民当家作主。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-9-2-11',
    type: 'fill',
    questionText: '依法治国的核心是______治国。',
    answer: '依宪',
    explanation: '依法治国首先是依宪治国，宪法是治国安邦的总章程。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-9-2-12',
    type: 'fill',
    questionText: '全面依法治国总目标是建设中国特色社会主义______体系，建设社会主义______国家。',
    answer: '法治；法治',
    explanation: '全面依法治国的总目标是建设中国特色社会主义法治体系、建设社会主义法治国家。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-9-2-13',
    type: 'fill',
    questionText: '我国宪法规定，中华人民共和国的一切权力属于______。',
    answer: '人民',
    explanation: '我国宪法规定，中华人民共和国的一切权力属于人民，人民是国家的主人。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-9-2-14',
    type: 'fill',
    questionText: '法治要求实行良法之治，良法应当反映最广大人民的______和______。',
    answer: '利益；意志',
    explanation: '良法之治要求法律要反映人民的利益和意志，维护人民的合法权益。',
    difficulty: 2,
  },

  // ---- short_answer 7题 ----
  {
    questionKey: 'politics-bubian-9-2-15',
    type: 'short_answer',
    questionText: '我国社会主义民主有哪些特点？',
    answer: '我国社会主义民主是维护人民根本利益的最广泛、最真实、最管用的民主；具有协商民主的独特优势；坚持党的领导、人民当家作主、依法治国的有机统一。',
    explanation: '我国社会主义民主是最广泛、最真实、最管用的民主，体现了人民当家作主的本质。',
    difficulty: 2,
  },
  {
    questionKey: 'politics-bubian-9-2-16',
    type: 'short_answer',
    questionText: '依法治国的基本要求是什么？',
    answer: '依法治国的基本要求是科学立法、严格执法、公正司法、全民守法。科学立法是前提，严格执法是关键，公正司法是防线，全民守法是基础。',
    explanation: '依法治国需要立法、执法、司法和守法四个环节协同推进。',
    difficulty: 2,
  },
  {
    questionKey: 'politics-bubian-9-2-17',
    type: 'short_answer',
    questionText: '宪法具有哪些特征？',
    answer: '宪法是国家的根本法，具有最高的法律效力；宪法规定国家生活中最根本、最重要的问题；宪法的制定和修改程序比普通法律更为严格；宪法是一切组织和个人的根本活动准则。',
    explanation: '宪法的特征体现了它作为国家根本大法的地位和权威。',
    difficulty: 2,
  },
  {
    questionKey: 'politics-bubian-9-2-18',
    type: 'short_answer',
    questionText: '公民如何参与民主生活？',
    answer: '公民可以通过民主选举参与国家和社会事务的管理；可以通过社情民意反映制度、专家咨询制度等参与民主决策；可以通过居民自治、村民自治等方式参与民主管理；可以通过信访举报、舆论监督等方式参与民主监督。',
    explanation: '公民参与民主生活的途径是多样的，要通过合法渠道表达意见。',
    difficulty: 2,
  },
  {
    questionKey: 'politics-bubian-9-2-19',
    type: 'short_answer',
    questionText: '法治与德治的关系是怎样的？',
    answer: '法治与德治相辅相成。法治是准绳，德治是滋养；法律有效实施有赖于道德支持，道德践行有赖于法律约束；国家治理需要法律和道德共同发挥作用，法治和德治两手抓、两手都要硬。',
    explanation: '法治和德治是国家治理的两个方面，二者缺一不可。',
    difficulty: 3,
  },
  {
    questionKey: 'politics-bubian-9-2-20',
    type: 'short_answer',
    questionText: '为什么要树立宪法权威？',
    answer: '宪法是国家的根本法，是治国安邦的总章程；宪法具有最高的法律效力，其他法律都不得同宪法相抵触；宪法的权威关系到国家的法治建设和社会的公平正义；树立宪法权威是全面依法治国的首要任务。',
    explanation: '宪法权威是法治权威的集中体现，维护宪法权威就是维护人民的共同意志。',
    difficulty: 3,
  },
  {
    questionKey: 'politics-bubian-9-2-21',
    type: 'short_answer',
    questionText: '我国宪法规定的公民的基本权利和义务有什么关系？',
    answer: '公民的权利和义务是统一的。公民享有宪法和法律规定的权利，同时必须履行宪法和法律规定的义务。权利和义务不可分割，没有无义务的权利，也没有无权利的义务。权利的实现需要义务的履行，义务的履行确保权利的实现。',
    explanation: '权利和义务是辩证统一的关系，不能只强调一方面而忽视另一方面。',
    difficulty: 3,
  },

  // ---- matching 2题 ----
  {
    questionKey: 'politics-bubian-9-2-22',
    type: 'matching',
    questionText: '请将下列依法治国的基本要求与其含义连线。',
    answer: '科学立法—制定符合实际的法律；严格执法—行政机关严格按法律办事；公正司法—司法机关公正裁判；全民守法—全社会尊法学法守法用法',
    explanation: '依法治国的十六字方针涵盖了立法、执法、司法和守法四个环节。',
    difficulty: 2,
    pairs: '[["科学立法", "制定符合实际的法律"], ["严格执法", "行政机关严格按法律办事"], ["公正司法", "司法机关公正裁判"], ["全民守法", "全社会尊法学法守法用法"]]',
  },
  {
    questionKey: 'politics-bubian-9-2-23',
    type: 'matching',
    questionText: '请将下列民主参与形式与其内容连线。',
    answer: '民主选举—选出代表管理国家事务；民主决策—参与重大事项的讨论和决定；民主管理—直接参与基层公共事务管理；民主监督—监督国家机关及其工作人员',
    explanation: '民主参与的四种形式各有侧重，共同构成了人民当家作主的实现方式。',
    difficulty: 2,
    pairs: '[["民主选举", "选出代表管理国家事务"], ["民主决策", "参与重大事项的讨论和决定"], ["民主管理", "直接参与基层公共事务管理"], ["民主监督", "监督国家机关及其工作人员"]]',
  },
];

// ========== 9-3 和谐与梦想 (22题) ==========

const chapter9_3: RawQuestion[] = [
  // ---- choice 9题 ----
  {
    questionKey: 'politics-bubian-9-3-0',
    type: 'choice',
    questionText: '中国梦的基本内涵是（\uFF09',
    answer: 'A',
    explanation: '中国梦的基本内涵是实现国家富强、民族振兴、人民幸福。中国梦归根到底是人民的梦，必须紧紧依靠人民来实现。',
    difficulty: 1,
    options: '["A. 国家富强、民族振兴、人民幸福", "B. 只是国家强大", "C. 只是个人富裕", "D. 只是经济发展"]',
  },
  {
    questionKey: 'politics-bubian-9-3-1',
    type: 'choice',
    questionText: '实现中国梦必须走中国道路，中国道路是指（\uFF09',
    answer: 'B',
    explanation: '实现中国梦必须走中国特色社会主义道路。中国特色社会主义道路是实现中华民族伟大复兴的必由之路。',
    difficulty: 1,
    options: '["A. 资本主义道路", "B. 中国特色社会主义道路", "C. 任何道路都可以", "D. 西方国家的道路"]',
  },
  {
    questionKey: 'politics-bubian-9-3-2',
    type: 'choice',
    questionText: '实现中国梦必须弘扬中国精神，中国精神是指（\uFF09',
    answer: 'C',
    explanation: '实现中国梦必须弘扬以爱国主义为核心的民族精神和以改革创新为核心的时代精神。',
    difficulty: 2,
    options: '["A. 只需要创新精神", "B. 只需要爱国主义", "C. 以爱国主义为核心的民族精神和以改革创新为核心的时代精神", "D. 不需要精神力量"]',
  },
  {
    questionKey: 'politics-bubian-9-3-3',
    type: 'choice',
    questionText: '实现中国梦必须凝聚中国力量，中国力量是指（\uFF09',
    answer: 'D',
    explanation: '实现中国梦必须凝聚中国各族人民大团结的力量。中国梦是民族的梦，也是每个中国人的梦，需要全国各族人民团结奋斗。',
    difficulty: 1,
    options: '["A. 只靠少数人的力量", "B. 只靠政府的努力", "C. 只靠军队的力量", "D. 全国各族人民大团结的力量"]',
  },
  {
    questionKey: 'politics-bubian-9-3-4',
    type: 'choice',
    questionText: '"两个一百年"奋斗目标是指（\uFF09',
    answer: 'A',
    explanation: '在中国共产党成立一百年时全面建成小康社会，在中华人民共和国成立一百年时建成富强民主文明和谐美丽的社会主义现代化强国。',
    difficulty: 2,
    options: '["A. 建党一百年全面建成小康社会，建国一百年建成社会主义现代化强国", "B. 只有一个目标", "C. 经济目标和军事目标", "D. 教育目标和科技目标"]',
  },
  {
    questionKey: 'politics-bubian-9-3-5',
    type: 'choice',
    questionText: '构建人类命运共同体的理念核心是（\uFF09',
    answer: 'B',
    explanation: '构建人类命运共同体的理念核心是建设一个持久和平、普遍安全、共同繁荣、开放包容、清洁美丽的世界。',
    difficulty: 2,
    options: '["A. 各国独自发展", "B. 持久和平、共同繁荣、开放包容", "C. 只追求本国利益", "D. 军事对抗"]',
  },
  {
    questionKey: 'politics-bubian-9-3-6',
    type: 'choice',
    questionText: '解决台湾问题的基本方针是（\uFF09',
    answer: 'C',
    explanation: '解决台湾问题、实现祖国完全统一的基本方针是"和平统一、一国两制"。',
    difficulty: 1,
    options: '["A. 武力统一", "B. 放弃统一", "C. 和平统一、一国两制", "D. 维持现状"]',
  },
  {
    questionKey: 'politics-bubian-9-3-7',
    type: 'choice',
    questionText: '中华民族的奋斗目标是在本世纪中叶建成（\uFF09',
    answer: 'A',
    explanation: '到本世纪中叶把我国建成富强民主文明和谐美丽的社会主义现代化强国，实现中华民族伟大复兴。',
    difficulty: 1,
    options: '["A. 富强民主文明和谐美丽的社会主义现代化强国", "B. 世界第一军事强国", "C. 世界上经济最发达的国家", "D. 地区性强国"]',
  },
  {
    questionKey: 'politics-bubian-9-3-8',
    type: 'choice',
    questionText: '中国共产党领导的多党合作和政治协商制度是我国的（\uFF09',
    answer: 'D',
    explanation: '中国共产党领导的多党合作和政治协商制度是我国的一项基本政治制度。',
    difficulty: 2,
    options: '["A. 根本政治制度", "B. 根本制度", "C. 经济制度", "D. 一项基本政治制度"]',
  },

  // ---- fill 4题 ----
  {
    questionKey: 'politics-bubian-9-3-9',
    type: 'fill',
    questionText: '中国梦的基本内涵是实现______富强、______振兴、人民幸福。',
    answer: '国家；民族',
    explanation: '中国梦的基本内涵是国家富强、民族振兴、人民幸福。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-9-3-10',
    type: 'fill',
    questionText: '实现中国梦必须走______道路，弘扬______精神，凝聚______力量。',
    answer: '中国；中国；中国',
    explanation: '实现中国梦必须走中国道路，弘扬中国精神，凝聚中国力量。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-9-3-11',
    type: 'fill',
    questionText: '中华民族精神的核心是______。',
    answer: '爱国主义',
    explanation: '以爱国主义为核心的团结统一、爱好和平、勤劳勇敢、自强不息的伟大民族精神。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-9-3-12',
    type: 'fill',
    questionText: '解决台湾问题的基本方针是"______统一、一国两______"。',
    answer: '和平；制',
    explanation: '"和平统一、一国两制"是解决台湾问题、实现祖国完全统一的基本方针。',
    difficulty: 1,
  },

  // ---- short_answer 7题 ----
  {
    questionKey: 'politics-bubian-9-3-13',
    type: 'short_answer',
    questionText: '中国梦的基本内涵是什么？',
    answer: '中国梦的基本内涵是实现国家富强、民族振兴、人民幸福。国家富强是国家综合实力的提升；民族振兴是中华民族的伟大复兴；人民幸福是人民生活水平和生活质量的不断提高。',
    explanation: '中国梦是国家的梦、民族的梦，也是每一个中国人的梦。',
    difficulty: 1,
  },
  {
    questionKey: 'politics-bubian-9-3-14',
    type: 'short_answer',
    questionText: '实现中国梦的路径是什么？',
    answer: '实现中国梦必须走中国道路，即中国特色社会主义道路；必须弘扬中国精神，即以爱国主义为核心的民族精神和以改革创新为核心的时代精神；必须凝聚中国力量，即全国各族人民大团结的力量。',
    explanation: '走中国道路、弘扬中国精神、凝聚中国力量是实现中国梦的三个基本路径。',
    difficulty: 2,
  },
  {
    questionKey: 'politics-bubian-9-3-15',
    type: 'short_answer',
    questionText: '为什么要构建人类命运共同体？',
    answer: '当今世界是一个相互联系的世界，各国利益休戚与共；全球性挑战需要各国共同应对；和平发展是时代的主题；构建人类命运共同体有利于促进世界和平与发展，实现互利共赢。',
    explanation: '构建人类命运共同体是对全球治理提出的中国方案，符合各国人民的根本利益。',
    difficulty: 3,
  },
  {
    questionKey: 'politics-bubian-9-3-16',
    type: 'short_answer',
    questionText: '新时代我国社会的主要矛盾是什么？',
    answer: '新时代我国社会的主要矛盾是人民日益增长的美好生活需要和不平衡不充分的发展之间的矛盾。这要求我们坚持以人民为中心的发展思想，着力解决发展不平衡不充分问题。',
    explanation: '准确把握社会主要矛盾是制定正确方针政策的重要依据。',
    difficulty: 3,
  },
  {
    questionKey: 'politics-bubian-9-3-17',
    type: 'short_answer',
    questionText: '中华民族精神的内涵是什么？',
    answer: '中华民族精神以爱国主义为核心，包括团结统一、爱好和平、勤劳勇敢、自强不息。爱国主义是中华民族精神的核心，团结统一是中华民族的立身之本，爱好和平是中华民族的优良传统，勤劳勇敢是中华民族的优良品格，自强不息是中华民族的精神动力。',
    explanation: '中华民族精神是中华民族赖以生存和发展的精神支撑。',
    difficulty: 2,
  },
  {
    questionKey: 'politics-bubian-9-3-18',
    type: 'short_answer',
    questionText: '青少年如何为实现中国梦做贡献？',
    answer: '树立远大理想，将个人梦想与中国梦结合起来；努力学习科学文化知识，提高自身素质；培养创新精神和实践能力；培养责任感和使命感，关心国家发展；积极参加社会实践，服务社会，奉献人民。',
    explanation: '青少年是国家和民族的未来，每个人的努力都是实现中国梦的重要组成部分。',
    difficulty: 2,
  },
  {
    questionKey: 'politics-bubian-9-3-19',
    type: 'short_answer',
    questionText: '如何促进民族团结？',
    answer: '坚持民族平等、民族团结和各民族共同繁荣的基本原则；尊重各民族的风俗习惯和语言文字；反对民族歧视和民族分裂行为；加强各民族之间的交往交流交融；实施民族区域自治制度，保障各民族的合法权利。',
    explanation: '民族团结是国家统一和社会稳定的重要保证，需要全社会的共同努力。',
    difficulty: 2,
  },

  // ---- matching 2题 ----
  {
    questionKey: 'politics-bubian-9-3-20',
    type: 'matching',
    questionText: '请将下列中国梦的路径与其内涵连线。',
    answer: '走中国道路—中国特色社会主义道路；弘扬中国精神—民族精神和时代精神；凝聚中国力量—各族人民大团结；依靠人民—人民是历史的创造者',
    explanation: '实现中国梦需要道路、精神、力量和人民的支持，缺一不可。',
    difficulty: 1,
    pairs: '[["走中国道路", "中国特色社会主义道路"], ["弘扬中国精神", "民族精神和时代精神"], ["凝聚中国力量", "各族人民大团结"], ["依靠人民", "人民是历史的创造者"]]',
  },
  {
    questionKey: 'politics-bubian-9-3-21',
    type: 'matching',
    questionText: '请将下列发展理念与具体内容连线。',
    answer: '共享发展—全民共享、全面共享、共建共享、渐进共享；绿色发展—绿水青山就是金山银山；开放发展—互利共赢的开放战略；协调发展—区域协调、城乡一体',
    explanation: '新发展理念各有所侧重，共同构成完整的发展理论体系。',
    difficulty: 2,
    pairs: '[["共享发展", "全民共享全面共享共建共享渐进共享"], ["绿色发展", "绿水青山就是金山银山"], ["开放发展", "互利共赢的开放战略"], ["协调发展", "区域协调城乡一体"]]',
  },
];

// ========== 章节映射与导出函数 ==========

const chapterKeyToData: Record<string, RawQuestion[]> = {
  'politics-bubian-7-0': chapter7_0,
  'politics-bubian-7-1': chapter7_1,
  'politics-bubian-7-2': chapter7_2,
  'politics-bubian-7-3': chapter7_3,
  'politics-bubian-8-0': chapter8_0,
  'politics-bubian-8-1': chapter8_1,
  'politics-bubian-8-2': chapter8_2,
  'politics-bubian-8-3': chapter8_3,
  'politics-bubian-9-0': chapter9_0,
  'politics-bubian-9-1': chapter9_1,
  'politics-bubian-9-2': chapter9_2,
  'politics-bubian-9-3': chapter9_3,
};

export async function seedPoliticsBubianQuestions(): Promise<number> {
  // 1. 查找所有道德与法治人教版章节
  const chapters = await prisma.chapter.findMany({
    where: { chapterKey: { startsWith: 'politics-bubian' } },
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
      console.warn(`[seed-politics-bubian] 章节 "${chapterKey}" 未找到，跳过 ${questions.length} 道题`);
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

  console.log(`[seed-politics-bubian] 共插入 ${inserted} 道道德与法治人教版题目`);
  return inserted;
}