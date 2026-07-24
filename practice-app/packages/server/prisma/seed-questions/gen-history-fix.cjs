const fs = require('fs');

const filePath = __dirname + '\\history-bubian.ts';
const content = fs.readFileSync(filePath, 'utf-8');
const lines = content.split('\n');

// Truncate at line 1750 (1-indexed), keeping lines 0-1748 (which is up to and including line 1749)
const truncatedContent = lines.slice(0, 1749).join('\n');

const remaining = `
  {
    chapterKey: 'history-bubian-8-3',
    questionKey: 'history-bubian-8-3-1',
    type: 'choice',
    questionText: '虎门销烟的领导人是（）',
    answer: 'A',
    explanation: '1839年6月，林则徐在虎门海滩当众销毁收缴的鸦片，这一壮举被称为虎门销烟。',
    difficulty: 1,
    options: '["A. 林则徐","B. 魏源","C. 关天培","D. 陈化成"]',
  },
  {
    chapterKey: 'history-bubian-8-3',
    questionKey: 'history-bubian-8-3-2',
    type: 'choice',
    questionText: '中国近代史上第一个不平等条约是（）',
    answer: 'C',
    explanation: '1842年，中英签订《南京条约》，这是中国近代史上第一个丧权辱国的不平等条约。',
    difficulty: 1,
    options: '["A. 《北京条约》","B. 《天津条约》","C. 《南京条约》","D. 《马关条约》"]',
  },
  {
    chapterKey: 'history-bubian-8-3',
    questionKey: 'history-bubian-8-3-3',
    type: 'choice',
    questionText: '在《南京条约》中，清政府被迫开放的五个通商口岸不包括（）',
    answer: 'D',
    explanation: '《南京条约》开放广州、厦门、福州、宁波、上海五处为通商口岸。',
    difficulty: 1,
    options: '["A. 广州","B. 福州","C. 上海","D. 北京"]',
  },
  {
    chapterKey: 'history-bubian-8-3',
    questionKey: 'history-bubian-8-3-4',
    type: 'choice',
    questionText: '第二次鸦片战争中，洗劫并火烧圆明园的是（）',
    answer: 'B',
    explanation: '1860年，英法联军攻入北京，抢劫并火烧了圆明园。',
    difficulty: 1,
    options: '["A. 英军","B. 英法联军","C. 法军","D. 八国联军"]',
  },
  {
    chapterKey: 'history-bubian-8-3',
    questionKey: 'history-bubian-8-3-5',
    type: 'choice',
    questionText: '太平天国运动爆发的标志是（）',
    answer: 'A',
    explanation: '1851年，洪秀全在广西金田村发动起义，建号太平天国。',
    difficulty: 1,
    options: '["A. 金田起义","B. 永安建制","C. 定都天京","D. 北伐西征"]',
  },
  {
    chapterKey: 'history-bubian-8-3',
    questionKey: 'history-bubian-8-3-6',
    type: 'choice',
    questionText: '太平天国的革命纲领性文件是（）',
    answer: 'C',
    explanation: '1853年太平天国颁布《天朝田亩制度》。',
    difficulty: 2,
    options: '["A. 《资政新篇》","B. 《临时约法》","C. 《天朝田亩制度》","D. 《海国图志》"]',
  },
  {
    chapterKey: 'history-bubian-8-3',
    questionKey: 'history-bubian-8-3-7',
    type: 'choice',
    questionText: '标志着太平天国由盛转衰的事件是（）',
    answer: 'D',
    explanation: '1856年天京事变，太平天国元气大伤，由盛转衰。',
    difficulty: 2,
    options: '["A. 金田起义","B. 北伐失败","C. 颁布天朝田亩制度","D. 天京事变"]',
  },
  {
    chapterKey: 'history-bubian-8-3',
    questionKey: 'history-bubian-8-3-8',
    type: 'choice',
    questionText: '"开眼看世界"的第一人是（）',
    answer: 'B',
    explanation: '林则徐编成《四洲志》，被称为"开眼看世界的第一人"。',
    difficulty: 1,
    options: '["A. 魏源","B. 林则徐","C. 严复","D. 洪仁玕"]',
  },
  {
    chapterKey: 'history-bubian-8-3',
    questionKey: 'history-bubian-8-3-9',
    type: 'choice',
    questionText: '魏源编写的著作是（）',
    answer: 'A',
    explanation: '魏源编成《海国图志》，提出"师夷长技以制夷"。',
    difficulty: 1,
    options: '["A. 《海国图志》","B. 《天演论》","C. 《四洲志》","D. 《资政新篇》"]',
  },
  {
    chapterKey: 'history-bubian-8-3',
    questionKey: 'history-bubian-8-3-10',
    type: 'choice',
    questionText: '鸦片战争中在虎门英勇抗敌牺牲的将领是（）',
    answer: 'C',
    explanation: '关天培在虎门炮台抗英战斗中壮烈牺牲。',
    difficulty: 2,
    options: '["A. 林则徐","B. 陈化成","C. 关天培","D. 邓世昌"]',
  },

  // fill 5题
  {
    chapterKey: 'history-bubian-8-3',
    questionKey: 'history-bubian-8-3-11',
    type: 'fill',
    questionText: '______年，______领导虎门销烟。',
    answer: '1839；林则徐',
    explanation: '1839年6月林则徐虎门销烟。',
    difficulty: 1,
  },
  {
    chapterKey: 'history-bubian-8-3',
    questionKey: 'history-bubian-8-3-12',
    type: 'fill',
    questionText: '《南京条约》中，清政府割______给英国，赔款______银元。',
    answer: '香港岛；2100万',
    explanation: '《南京条约》割让香港岛，赔款2100万银元。',
    difficulty: 1,
  },
  {
    chapterKey: 'history-bubian-8-3',
    questionKey: 'history-bubian-8-3-13',
    type: 'fill',
    questionText: '第二次鸦片战争发生在______年到______年。',
    answer: '1856；1860',
    explanation: '1856年英法联军发动第二次鸦片战争。',
    difficulty: 1,
  },
  {
    chapterKey: 'history-bubian-8-3',
    questionKey: 'history-bubian-8-3-14',
    type: 'fill',
    questionText: '魏源在《海国图志》中提出了______的主张。',
    answer: '师夷长技以制夷',
    explanation: '魏源主张学习西方先进技术来抵御外国侵略。',
    difficulty: 1,
  },
  {
    chapterKey: 'history-bubian-8-3',
    questionKey: 'history-bubian-8-3-15',
    type: 'fill',
    questionText: '太平天国定都______（今南京）。',
    answer: '天京',
    explanation: '1853年太平军定都天京（南京）。',
    difficulty: 1,
  },

  // short_answer 6题
  {
    chapterKey: 'history-bubian-8-3',
    questionKey: 'history-bubian-8-3-16',
    type: 'short_answer',
    questionText: '简述鸦片战争爆发的原因。',
    answer: '根本原因：英国为了打开中国市场，倾销工业品，掠夺原料。直接原因：林则徐虎门销烟，英国以此为借口发动战争。',
    explanation: '鸦片战争是英国为了打开中国大门而蓄意发动的侵略战争。',
    difficulty: 2,
  },
  {
    chapterKey: 'history-bubian-8-3',
    questionKey: 'history-bubian-8-3-17',
    type: 'short_answer',
    questionText: '《南京条约》的主要内容及其对中国的影响。',
    answer: '内容：割香港岛给英国；赔款2100万银元；开放广州、厦门、福州、宁波、上海五口通商；协定关税。影响：中国开始沦为半殖民地半封建社会。',
    explanation: '《南京条约》使中国的主权和领土完整遭到严重破坏。',
    difficulty: 2,
  },
  {
    chapterKey: 'history-bubian-8-3',
    questionKey: 'history-bubian-8-3-18',
    type: 'short_answer',
    questionText: '第二次鸦片战争比第一次危害更大的表现。',
    answer: '（1）丧失更多领土：沙俄割占中国150多万平方千米领土。（2）侵略势力扩大到北方。（3）火烧圆明园。（4）通商口岸增多，侵略势力深入内地。',
    explanation: '第二次鸦片战争使中国半殖民地化程度进一步加深。',
    difficulty: 3,
  },
  {
    chapterKey: 'history-bubian-8-3',
    questionKey: 'history-bubian-8-3-19',
    type: 'short_answer',
    questionText: '太平天国运动的历史意义和失败原因。',
    answer: '意义：是中国历史上规模最宏大的一次农民战争，沉重打击了清朝统治和外国侵略势力。失败原因：农民阶级的局限性；天京事变使力量削弱；战略失误；中外反动势力联合镇压。',
    explanation: '太平天国运动显示了农民阶级的巨大革命力量。',
    difficulty: 3,
  },
  {
    chapterKey: 'history-bubian-8-3',
    questionKey: 'history-bubian-8-3-20',
    type: 'short_answer',
    questionText: '简述林则徐、魏源"开眼看世界"的主要活动。',
    answer: '林则徐设立译馆编成《四洲志》，被称为"开眼看世界的第一人"。魏源编撰《海国图志》，提出"师夷长技以制夷"。他们的思想开启了近代中国向西方学习的潮流。',
    explanation: '林则徐和魏源是近代中国第一批"开眼看世界"的人。',
    difficulty: 2,
  },
  {
    chapterKey: 'history-bubian-8-3',
    questionKey: 'history-bubian-8-3-21',
    type: 'short_answer',
    questionText: '鸦片战争给中国社会带来了哪些变化？',
    answer: '（1）社会性质：从封建社会开始沦为半殖民地半封建社会。（2）主要矛盾：增加了外国资本主义与中华民族的矛盾。（3）革命任务：由反封建变为反帝反封建。（4）经济结构：自然经济开始解体。',
    explanation: '鸦片战争是中国历史的转折点。',
    difficulty: 3,
  },

  // matching 2题
  {
    chapterKey: 'history-bubian-8-3',
    questionKey: 'history-bubian-8-3-22',
    type: 'matching',
    questionText: '请将下列不平等条约与其签订的战争匹配。',
    answer: '《南京条约》—鸦片战争；《天津条约》—第二次鸦片战争；《北京条约》—第二次鸦片战争',
    explanation: '这些不平等条约分别签订于两次鸦片战争。',
    difficulty: 2,
    pairs: '[["南京条约","鸦片战争"],["天津条约","第二次鸦片战争"],["北京条约","第二次鸦片战争"]]',
  },
  {
    chapterKey: 'history-bubian-8-3',
    questionKey: 'history-bubian-8-3-23',
    type: 'matching',
    questionText: '请将下列历史人物与其主要事迹匹配。',
    answer: '林则徐—虎门销烟；魏源—编写《海国图志》；洪秀全—领导太平天国运动；关天培—虎门抗英牺牲',
    explanation: '这一时期重要历史人物及其事迹。',
    difficulty: 1,
    pairs: '[["林则徐","虎门销烟"],["魏源","编写海国图志"],["洪秀全","领导太平天国运动"],["关天培","虎门抗英牺牲"]]',
  },

  // ========== 9-0 近代化的早期探索 (24题) ==========

  // choice 11题
  {
    chapterKey: 'history-bubian-9-0',
    questionKey: 'history-bubian-9-0-0',
    type: 'choice',
    questionText: '洋务运动的口号是（）',
    answer: 'A',
    explanation: '洋务运动前期以"自强"为口号，后期以"求富"为口号。',
    difficulty: 1,
    options: '["A. 自强、求富","B. 变法图强","C. 民主共和","D. 三民主义"]',
  },
  {
    chapterKey: 'history-bubian-9-0',
    questionKey: 'history-bubian-9-0-1',
    type: 'choice',
    questionText: '洋务派在中央的代表人物是（）',
    answer: 'B',
    explanation: '洋务派在中央以恭亲王奕欣为代表。',
    difficulty: 1,
    options: '["A. 曾国藩","B. 奕欣（恭亲王）","C. 李鸿章","D. 张之洞"]',
  },
  {
    chapterKey: 'history-bubian-9-0',
    questionKey: 'history-bubian-9-0-2',
    type: 'choice',
    questionText: '洋务运动中李鸿章创办的民用工业是（）',
    answer: 'C',
    explanation: '李鸿章创办了轮船招商局、开平矿务局等民用工业。',
    difficulty: 2,
    options: '["A. 江南制造总局","B. 安庆内军械所","C. 轮船招商局","D. 福州船政局"]',
  },
  {
    chapterKey: 'history-bubian-9-0',
    questionKey: 'history-bubian-9-0-3',
    type: 'choice',
    questionText: '戊戌变法的时间是（）',
    answer: 'D',
    explanation: '1898年6月至9月，光绪帝实行变法，历时103天，史称"百日维新"。',
    difficulty: 1,
    options: '["A. 1895年","B. 1894年","C. 1900年","D. 1898年"]',
  },
  {
    chapterKey: 'history-bubian-9-0',
    questionKey: 'history-bubian-9-0-4',
    type: 'choice',
    questionText: '公车上书的直接原因是（）',
    answer: 'A',
    explanation: '1895年《马关条约》签订后，康有为、梁启超联合举人上书。',
    difficulty: 1,
    options: '["A. 《马关条约》的签订","B. 甲午中日战争爆发","C. 戊戌政变","D. 八国联军侵华"]',
  },
  {
    chapterKey: 'history-bubian-9-0',
    questionKey: 'history-bubian-9-0-5',
    type: 'choice',
    questionText: '辛亥革命的指导思想是（）',
    answer: 'B',
    explanation: '孙中山提出三民主义——民族、民权、民生。',
    difficulty: 1,
    options: '["A. 自强求富","B. 三民主义","C. 变法维新","D. 实业救国"]',
  },
  {
    chapterKey: 'history-bubian-9-0',
    questionKey: 'history-bubian-9-0-6',
    type: 'choice',
    questionText: '中国第一个资产阶级革命政党是（）',
    answer: 'C',
    explanation: '1905年孙中山在日本成立中国同盟会。',
    difficulty: 1,
    options: '["A. 兴中会","B. 华兴会","C. 中国同盟会","D. 光复会"]',
  },
  {
    chapterKey: 'history-bubian-9-0',
    questionKey: 'history-bubian-9-0-7',
    type: 'choice',
    questionText: '中华民国成立的时间是（）',
    answer: 'A',
    explanation: '1912年1月1日，孙中山在南京就任临时大总统。',
    difficulty: 1,
    options: '["A. 1912年1月1日","B. 1911年10月10日","C. 1912年2月12日","D. 1913年"]',
  },
  {
    chapterKey: 'history-bubian-9-0',
    questionKey: 'history-bubian-9-0-8',
    type: 'choice',
    questionText: '戊戌变法失败后甘愿为变法牺牲的维新人士是（）',
    answer: 'D',
    explanation: '谭嗣同拒绝逃走，甘愿为变法流血牺牲。',
    difficulty: 1,
    options: '["A. 康有为","B. 梁启超","C. 严复","D. 谭嗣同"]',
  },
  {
    chapterKey: 'history-bubian-9-0',
    questionKey: 'history-bubian-9-0-9',
    type: 'choice',
    questionText: '辛亥革命最伟大的历史功绩是（）',
    answer: 'B',
    explanation: '辛亥革命推翻了清王朝，终结了两千多年君主专制制度。',
    difficulty: 2,
    options: '["A. 推翻了帝国主义统治","B. 推翻了封建君主专制制度","C. 改变了社会性质","D. 实现了民族独立"]',
  },
  {
    chapterKey: 'history-bubian-9-0',
    questionKey: 'history-bubian-9-0-10',
    type: 'choice',
    questionText: '洋务运动失败的标志是（）',
    answer: 'A',
    explanation: '1895年北洋舰队全军覆没，标志着洋务运动破产。',
    difficulty: 2,
    options: '["A. 甲午战争北洋舰队覆灭","B. 戊戌变法失败","C. 辛亥革命爆发","D. 八国联军侵华"]',
  },

  // fill 5题
  {
    chapterKey: 'history-bubian-9-0',
    questionKey: 'history-bubian-9-0-11',
    type: 'fill',
    questionText: '洋务运动中创办的军事工业有______、______等。',
    answer: '安庆内军械所；江南制造总局',
    explanation: '曾国藩创办安庆内军械所，李鸿章创办江南制造总局。',
    difficulty: 1,
    acceptableAnswers: '["江南制造总局；安庆内军械所"]',
  },
  {
    chapterKey: 'history-bubian-9-0',
    questionKey: 'history-bubian-9-0-12',
    type: 'fill',
    questionText: '1895年，康有为、梁启超发起______，拉开了______运动的序幕。',
    answer: '公车上书；维新变法',
    explanation: '公车上书是维新变法运动的起点。',
    difficulty: 1,
  },
  {
    chapterKey: 'history-bubian-9-0',
    questionKey: 'history-bubian-9-0-13',
    type: 'fill',
    questionText: '______年10月10日，______起义爆发。',
    answer: '1911；武昌',
    explanation: '1911年10月10日武昌起义爆发。',
    difficulty: 1,
    acceptableAnswers: '["1911；武昌起义"]',
  },
  {
    chapterKey: 'history-bubian-9-0',
    questionKey: 'history-bubian-9-0-14',
    type: 'fill',
    questionText: '三民主义包括______、______、______。',
    answer: '民族主义；民权主义；民生主义',
    explanation: '三民主义是辛亥革命的指导思想。',
    difficulty: 1,
  },
  {
    chapterKey: 'history-bubian-9-0',
    questionKey: 'history-bubian-9-0-15',
    type: 'fill',
    questionText: '辛亥革命后颁布了______，具有______性质。',
    answer: '《中华民国临时约法》；资产阶级民主共和',
    explanation: '1912年3月颁布《中华民国临时约法》。',
    difficulty: 2,
  },

  // short_answer 6题
  {
    chapterKey: 'history-bubian-9-0',
    questionKey: 'history-bubian-9-0-16',
    type: 'short_answer',
    questionText: '简述洋务运动的内容和评价。',
    answer: '内容：创办军事工业（自强）、民用工业（求富）、筹建海军、兴办学堂派遣留学生。评价：没有使中国富强，但引进了西方技术，客观上促进了民族资本主义发展。',
    explanation: '洋务运动是中国近代化的开端。',
    difficulty: 2,
  },
  {
    chapterKey: 'history-bubian-9-0',
    questionKey: 'history-bubian-9-0-17',
    type: 'short_answer',
    questionText: '简述戊戌变法的主要内容。',
    answer: '政治：改革政府机构，裁撤冗员。经济：鼓励私人兴办工矿企业。文化教育：开办新式学堂，创办报刊。军事：训练新式军队。',
    explanation: '戊戌变法虽失败但起了思想启蒙作用。',
    difficulty: 2,
  },
  {
    chapterKey: 'history-bubian-9-0',
    questionKey: 'history-bubian-9-0-18',
    type: 'short_answer',
    questionText: '辛亥革命的历史意义。',
    answer: '推翻了清王朝和封建君主专制制度；建立了中华民国；颁布了《临时约法》；推动了思想解放，民主共和观念深入人心。',
    explanation: '辛亥革命是中国近代史上伟大的资产阶级民主革命。',
    difficulty: 2,
  },
  {
    chapterKey: 'history-bubian-9-0',
    questionKey: 'history-bubian-9-0-19',
    type: 'short_answer',
    questionText: '辛亥革命为什么既有成功又失败？',
    answer: '成功：推翻了清王朝和君主专制，建立中华民国。失败：没有改变半殖民地半封建社会性质，革命果实被袁世凯窃取。',
    explanation: '资产阶级两面性的体现。',
    difficulty: 3,
  },
  {
    chapterKey: 'history-bubian-9-0',
    questionKey: 'history-bubian-9-0-20',
    type: 'short_answer',
    questionText: '比较洋务运动、戊戌变法和辛亥革命的探索方式。',
    answer: '洋务运动：地主阶级学习西方技术。戊戌变法：资产阶级维新派学习西方制度，主张君主立宪。辛亥革命：资产阶级革命派武装革命建立共和国。三者代表了向西方学习的三个层次。',
    explanation: '体现了中国人向西方学习从器物到制度的过程。',
    difficulty: 3,
  },
  {
    chapterKey: 'history-bubian-9-0',
    questionKey: 'history-bubian-9-0-21',
    type: 'short_answer',
    questionText: '戊戌变法失败的原因。',
    answer: '（1）资产阶级维新派力量弱小。（2）触犯顽固派利益。（3）缺乏群众基础。（4）袁世凯出卖。',
    explanation: '说明资产阶级改良道路在中国行不通。',
    difficulty: 3,
  },

  // matching 2题
  {
    chapterKey: 'history-bubian-9-0',
    questionKey: 'history-bubian-9-0-22',
    type: 'matching',
    questionText: '请将下列运动与其领导阶级和口号匹配。',
    answer: '洋务运动—地主阶级—自强求富；戊戌变法—资产阶级维新派—变法图强；辛亥革命—资产阶级革命派—三民主义',
    explanation: '三次探索分别由不同阶级领导。',
    difficulty: 2,
    pairs: '[["洋务运动","地主阶级—自强求富"],["戊戌变法","资产阶级维新派—变法图强"],["辛亥革命","资产阶级革命派—三民主义"]]',
  },
  {
    chapterKey: 'history-bubian-9-0',
    questionKey: 'history-bubian-9-0-23',
    type: 'matching',
    questionText: '请将下列人物与其所属运动及事迹匹配。',
    answer: '曾国藩—洋务运动—创办安庆内军械所；康有为—戊戌变法—公车上书；孙中山—辛亥革命—成立同盟会；谭嗣同—戊戌变法—为变法牺牲',
    explanation: '这些人物分别参与了不同探索。',
    difficulty: 2,
    pairs: '[["曾国藩","洋务运动—安庆内军械所"],["康有为","戊戌变法—公车上书"],["孙中山","辛亥革命—同盟会"],["谭嗣同","戊戌变法—为变法牺牲"]]',
  },
];

export async function seedHistoryBubianQuestions(): Promise<number> {
  const chapters = await prisma.chapter.findMany({
    where: { chapterKey: { startsWith: 'history-bubian' } },
  });
  const keyToId = new Map<string, string>();
  for (const ch of chapters) {
    keyToId.set(ch.chapterKey, ch.id);
  }

  const records = questions
    .map(q => {
      const chapterId = keyToId.get(q.chapterKey);
      if (!chapterId) return null;
      const { chapterKey: _, ...data } = q;
      return { ...data, chapterId };
    })
    .filter(Boolean);

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
  console.log(\`[seed-history-bubian] 共插入 \${inserted} 道历史人教版题目\`);
  return inserted;
}
`;

fs.writeFileSync(filePath, truncatedContent + remaining, 'utf-8');
const totalLines = fs.readFileSync(filePath, 'utf-8').split('\n').length;
console.log('File updated. Total lines: ' + totalLines);

// Count questions
const questionCount = (truncatedContent + remaining).match(/questionKey:/g)?.length || 0;
console.log('Total questions: ' + questionCount);
