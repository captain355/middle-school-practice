/**
 * 语文人教版（部编版）初中题目种子数据
 *
 * 涵盖 7~9 年级共 12 个章节，总计 210 道题。
 * 章节对应 seed-data.ts 中 chinese-renjiao 的定义：
 *   7年级：春(18)、济南的冬天(16)、古代诗歌四首(22)、从百草园到三味书屋(20)
 *   8年级：新闻两则(20)、芦花荡(16)、阿长与山海经(22)、背影(24)
 *   9年级：沁园春·雪(18)、我爱这土地(16)、乡愁(14)、敬业与乐业(24)
 *
 * 题型分布：choice ~30% | fill ~20% | short_answer ~40% | matching ~10%
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
  options?: string;   // JSON 字符串，仅 choice 题使用
  pairs?: string;     // JSON 字符串，仅 matching 题使用
  acceptableAnswers?: string; // JSON 字符串，fill 题可接受的其他答案
}

// ========== 7-0 春 (18题) ==========

const chapter7_0: RawQuestion[] = [
  // ---- choice 6题 ----
  {
    questionKey: 'chinese-renjiao-7-0-0',
    type: 'choice',
    questionText: '《春》的作者是（）',
    answer: 'C',
    explanation: '《春》的作者是朱自清，字佩弦，现代著名散文家、诗人、学者。',
    difficulty: 1,
    options: '["A. 老舍", "B. 鲁迅", "C. 朱自清", "D. 巴金"]',
  },
  {
    questionKey: 'chinese-renjiao-7-0-1',
    type: 'choice',
    questionText: '下列词语中注音全部正确的一项是（）',
    answer: 'B',
    explanation: '"酝酿"读 yùn niàng，"黄晕"读 huáng yùn，"宛转"读 wǎn zhuǎn。',
    difficulty: 1,
    options: '["A. 酝酿(yùn liàng) 黄晕(yūn)", "B. 酝酿(yùn niàng) 黄晕(yùn)", "C. 宛转(zhuǎn) 抚摸(fǔ)", "D. 蓑衣(shuāi) 抖擞(sǒu)"]',
  },
  {
    questionKey: 'chinese-renjiao-7-0-2',
    type: 'choice',
    questionText: '《春》中"小草偷偷地从土里钻出来"一句运用了什么修辞手法？',
    answer: 'A',
    explanation: '"偷偷地"和"钻"赋予小草人的动作和情态，属于拟人手法，生动形象地写出了春草破土而出的情态。',
    difficulty: 1,
    options: '["A. 拟人", "B. 比喻", "C. 排比", "D. 夸张"]',
  },
  {
    questionKey: 'chinese-renjiao-7-0-3',
    type: 'choice',
    questionText: '《春》的结尾三个比喻句分别把春天比作（）',
    answer: 'D',
    explanation: '结尾写道"像刚落地的娃娃""像小姑娘""像健壮的青年"，分别比作"新""美""力"。',
    difficulty: 2,
    options: '["A. 娃娃、青年、小姑娘", "B. 小姑娘、青年、娃娃", "C. 青年、小姑娘、娃娃", "D. 娃娃、小姑娘、青年"]',
  },
  {
    questionKey: 'chinese-renjiao-7-0-4',
    type: 'choice',
    questionText: '"像牛毛，像花针，像细丝"这句话描写的是春雨的什么特点？',
    answer: 'B',
    explanation: '用牛毛、花针、细丝三个比喻写出春雨细密、轻盈的特点。',
    difficulty: 1,
    options: '["A. 粗大而急促", "B. 细密而轻盈", "C. 凶猛而狂暴", "D. 温暖而热烈"]',
  },
  {
    questionKey: 'chinese-renjiao-7-0-5',
    type: 'choice',
    questionText: '《春》是一篇（）',
    answer: 'A',
    explanation: '《春》是朱自清的一篇写景抒情散文，通过对春天的全面描写表达对春天的热爱和赞美。',
    difficulty: 1,
    options: '["A. 写景抒情散文", "B. 记叙文", "C. 说明文", "D. 议论文"]',
  },

  // ---- fill 3题 ----
  {
    questionKey: 'chinese-renjiao-7-0-6',
    type: 'fill',
    questionText: '朱自清，字____，现代散文家、诗人、学者。',
    answer: '佩弦',
    explanation: '朱自清（1898—1948），字佩弦，号秋实，原名自华。',
    difficulty: 1,
  },
  {
    questionKey: 'chinese-renjiao-7-0-7',
    type: 'fill',
    questionText: '《春》中描写春花时写道："红的像火，____的像霞，白的像雪。"',
    answer: '粉',
    explanation: '课文原文为"红的像火，粉的像霞，白的像雪"，用排比和比喻写出了春花色彩缤纷。',
    difficulty: 1,
  },
  {
    questionKey: 'chinese-renjiao-7-0-8',
    type: 'fill',
    questionText: '"____，不错的，像母亲的手抚摸着你。"这是描写春风的句子。',
    answer: '吹面不寒杨柳风',
    explanation: '引用南宋志南和尚的诗句"吹面不寒杨柳风"，增添了春风温柔的特点。',
    difficulty: 2,
  },

  // ---- short_answer 7题 ----
  {
    questionKey: 'chinese-renjiao-7-0-9',
    type: 'short_answer',
    questionText: '请简述《春》中"盼春——绘春——赞春"的结构特点。',
    answer: '全文分三个部分：第一部分（第1段）盼春，用反复和拟人手法表达盼望春天到来的急切心情；第二部分（第2-7段）绘春，分别描绘了春草、春花、春风、春雨、迎春五幅图画；第三部分（第8-10段）赞春，用三个比喻句赞美春天的新、美、力。全文层次分明，结构严谨。',
    explanation: '把握文章"总—分—总"的结构是理解全文的关键。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-7-0-10',
    type: 'short_answer',
    questionText: '《春》中"一切都在像刚睡醒的样子"运用了什么修辞手法？有什么表达效果？',
    answer: '运用了拟人和排比的修辞手法。将大地、太阳、山、水等事物赋予人"刚睡醒"的状态，并用"欣欣然""朗润""涨""红"等词语具体表现，生动形象地写出了春天万物复苏、生机勃勃的景象，表达了作者对春天的喜爱之情。',
    explanation: '拟人使描写更加生动亲切，排比增强了语势和节奏感。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-7-0-11',
    type: 'short_answer',
    questionText: '《春》描写了哪五幅春景图？请分别概括。',
    answer: '五幅春景图是：1. 春草图——写春草的嫩、绿、多、软；2. 春花图——写春花的繁多、色彩、甜香；3. 春风图——写春风的温暖、柔和、芳香；4. 春雨图——写春雨的细密、轻盈、朦胧；5. 迎春图——写人们迎接春天的欢快活动。这五幅图从不同角度全面描绘了春天的美好。',
    explanation: '这五幅图涵盖了草、花、风、雨、人等多个方面，构成了一幅完整的春天画卷。',
    difficulty: 1,
  },
  {
    questionKey: 'chinese-renjiao-7-0-12',
    type: 'short_answer',
    questionText: '"钻"字在"小草偷偷地从土里钻出来"中好在哪里？',
    answer: '"钻"字用拟人手法，将小草破土而出的动作写得生动活泼，既表现了春草顽强的生命力，又突出了春草冲破土层的力度感。"偷偷地"修饰"钻"，写出小草不知不觉间就长出来了的情态，表达了作者看到春草萌生时的惊喜之情。',
    explanation: '动词的锤炼是散文语言的重要特点，要体会其准确性、生动性。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-7-0-13',
    type: 'short_answer',
    questionText: '《春》中描写春花时，作者调动了哪些感官来写？',
    answer: '作者调动了视觉（红的像火、粉的像霞、白的像雪——花的色彩）、嗅觉（花里带着甜味儿——花的香气）、听觉（花下成千成百的蜜蜂嗡嗡地闹着——蜜蜂的声音）等多种感官，全方位地描写了春花的繁盛与美好，使读者仿佛身临其境。',
    explanation: '多感官描写是朱自清散文的重要特色。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-7-0-14',
    type: 'short_answer',
    questionText: '分析《春》结尾"三个比喻"的含义及表达作用。',
    answer: '作者将春天分别比作"刚落地的娃娃"（突出春天的新，像新生命一样充满希望）、"小姑娘"（突出春天的美，娇美活泼）、"健壮的青年"（突出春天的力，充满力量）。这三个比喻从"新、美、力"三个角度赞美春天，运用排比句式层层推进，语势强烈，表达了作者对春天的热爱和赞美之情，并暗含对美好未来的向往。',
    difficulty: 3,
  },
  {
    questionKey: 'chinese-renjiao-7-0-15',
    type: 'short_answer',
    questionText: '《春》在语言上有什么特色？请举例说明。',
    answer: '《春》的语言特色主要有：1. 生动准确，如"钻""逼""酝酿"等动词使用精妙；2. 大量运用比喻、拟人、排比等修辞手法，如"红的像火，粉的像霞，白的像雪"；3. 句式富于变化，长短句交错，有节奏感；4. 融情于景，在写景中饱含对春天的喜爱与赞美之情。整体语言清新优美，富有画面感和音乐美。',
    difficulty: 3,
  },

  // ---- matching 2题 ----
  {
    questionKey: 'chinese-renjiao-7-0-16',
    type: 'matching',
    questionText: '请将《春》中的描写对象与其对应的特点连线匹配。',
    answer: '',
    explanation: '春草：嫩、绿、多；春花：繁盛、色彩鲜艳；春风：温暖柔和；春雨：细密轻盈。',
    difficulty: 1,
    pairs: '[["春草","嫩绿绵软"],["春花","繁盛鲜艳"],["春风","温暖柔和"],["春雨","细密轻盈"]]',
  },
  {
    questionKey: 'chinese-renjiao-7-0-17',
    type: 'matching',
    questionText: '请将《春》结尾的比喻与其对应的含义连线匹配。',
    answer: '',
    explanation: '刚落地的娃娃对应"新"，小姑娘对应"美"，健壮的青年对应"力"。',
    difficulty: 2,
    pairs: '[["刚落地的娃娃","新"],["小姑娘","美"],["健壮的青年","力"]]',
  },
];

// ========== 7-1 济南的冬天 (16题) ==========

const chapter7_1: RawQuestion[] = [
  // ---- choice 5题 ----
  {
    questionKey: 'chinese-renjiao-7-1-0',
    type: 'choice',
    questionText: '《济南的冬天》的作者是（）',
    answer: 'B',
    explanation: '《济南的冬天》的作者是老舍，原名舒庆春，字舍予，现代著名作家。',
    difficulty: 1,
    options: '["A. 朱自清", "B. 老舍", "C. 鲁迅", "D. 巴金"]',
  },
  {
    questionKey: 'chinese-renjiao-7-1-1',
    type: 'choice',
    questionText: '老舍的原名是（）',
    answer: 'A',
    explanation: '老舍原名舒庆春，字舍予，"老舍"是他最常用的笔名。',
    difficulty: 1,
    options: '["A. 舒庆春", "B. 舒庆华", "C. 舒舍予", "D. 舒庆予"]',
  },
  {
    questionKey: 'chinese-renjiao-7-1-2',
    type: 'choice',
    questionText: '济南冬天最突出的特点是什么？',
    answer: 'C',
    explanation: '文章开头就点出"济南的冬天是响晴的"，全文围绕"温晴"这一特点展开描写。',
    difficulty: 1,
    options: '["A. 寒冷", "B. 干燥", "C. 温晴", "D. 多风"]',
  },
  {
    questionKey: 'chinese-renjiao-7-1-3',
    type: 'choice',
    questionText: '"一个老城，有山有水，全在蓝天下很暖和安适地睡着"运用了什么修辞手法？',
    answer: 'A',
    explanation: '将老城比作人，用"睡着"来描写老城的安闲状态，是拟人手法。',
    difficulty: 1,
    options: '["A. 拟人", "B. 比喻", "C. 夸张", "D. 排比"]',
  },
  {
    questionKey: 'chinese-renjiao-7-1-4',
    type: 'choice',
    questionText: '"这块水晶里，包着红屋顶，黄草山"中"水晶"比喻的是（）',
    answer: 'D',
    explanation: '"水晶"比喻的是冬天整个济南城在蓝天白雪映衬下晶莹剔透的美景。',
    difficulty: 2,
    options: '["A. 济南的雪", "B. 济南的水", "C. 济南的山", "D. 济南冬天的整体美景"]',
  },

  // ---- fill 3题 ----
  {
    questionKey: 'chinese-renjiao-7-1-5',
    type: 'fill',
    questionText: '老舍，原名____，字舍予，现代著名作家，代表作有小说《____》《骆驼祥子》等。',
    answer: '舒庆春；茶馆',
    acceptableAnswers: '["舒庆春；茶馆","舒庆春；《茶馆》"]',
    explanation: '老舍（1899—1966），满族，北京人。长篇小说代表作《骆驼祥子》《四世同堂》，话剧代表作《茶馆》《龙须沟》。',
    difficulty: 1,
  },
  {
    questionKey: 'chinese-renjiao-7-1-6',
    type: 'fill',
    questionText: '"最妙的是下点小雪呀"这句话在文中起____作用。',
    answer: '承上启下（过渡）',
    acceptableAnswers: '["承上启下","过渡","承上启下（过渡）"]',
    explanation: '此句承接上文对山的描写，引出下文对雪景的详细描写，起过渡作用。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-7-1-7',
    type: 'fill',
    questionText: '"山坡上卧着些小村庄，小村庄的房顶上卧着点雪"中两个"卧"字的表达效果是：赋予____和____以人的情态，显得____。',
    answer: '小村庄；雪；安适、恬静',
    acceptableAnswers: '["小村庄；雪；安适、恬静","村庄；雪；安适","小村庄；雪；安静"]',
    explanation: '"卧"字将小村庄和雪拟人化，突出济南冬天宁静安适的特点。',
    difficulty: 2,
  },

  // ---- short_answer 6题 ----
  {
    questionKey: 'chinese-renjiao-7-1-8',
    type: 'short_answer',
    questionText: '《济南的冬天》中作者是如何运用对比手法来突出济南冬天"温晴"的特点的？',
    answer: '作者在开头将济南冬天与北平冬天进行对比（北平冬天刮风，济南没有大风声），将济南冬天与伦敦冬天进行对比（伦敦冬天多雾（阴天），济南冬天是响晴的），又将济南冬天与热带进行对比（热带日日被日光晒着，济南冬天温晴宜人）。通过三组对比，突出济南冬天"温晴"的独特之处，引出下文的具体描写。',
    explanation: '对比手法是本文开头的重要写法，通过与其他地方的对比突出济南的特色。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-7-1-9',
    type: 'short_answer',
    questionText: '《济南的冬天》写了哪几幅画面？请分别概括。',
    answer: '全文主要写了三幅画面：1. 济南全景图——有山有水的小城在蓝天下的安适；2. 秀山雪景图——小山在冬天特别可爱，顶雪的小山如穿上花衣；3. 澄澈水景图——水不但不结冰，反倒在绿萍上冒着点热气。三幅画面从不同角度展现了济南冬天的温晴之美。',
    explanation: '全文围绕"温晴"这一特点，从城、山、水三个方面展开描写。',
    difficulty: 1,
  },
  {
    questionKey: 'chinese-renjiao-7-1-10',
    type: 'short_answer',
    questionText: '分析"小山整把济南围了个圈儿，只有北边缺着点口儿"这句话的表达效果。',
    answer: '这句话运用拟人的手法，"围了个圈儿"将群山写成一把将济南围住的环，形成一个小摇篮，使济南冬天暖和安适。"只有北边缺着点口儿"说明地理环境挡住了寒风，解释了济南冬天温晴的原因。语言朴素通俗，口语化强，体现了老舍散文语言幽默亲切的风格。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-7-1-11',
    type: 'short_answer',
    questionText: '《济南的冬天》一文蕴含了作者怎样的思想感情？',
    answer: '本文通过对济南冬天温晴特点的描写，通过对山、水、雪等景物的细致刻画，表达了作者对济南冬天的喜爱和赞美之情，也流露出作者对自然之美的热爱和对宁静安适生活的向往。全文在平淡的语言中蕴含深厚的情感，情景交融。',
    difficulty: 1,
  },
  {
    questionKey: 'chinese-renjiao-7-1-12',
    type: 'short_answer',
    questionText: '分析"那些小山太秀气"中"秀气"一词的表达作用。',
    answer: '"秀气"原指清秀、灵巧，这里用来形容济南的小山，赋予小山以人的品格。济南的山不高大雄伟，而是矮小秀美，山尖顶着白雪像戴白色小帽，山坡像穿了花衣，整体显得小巧玲珑、清秀可人。"秀气"一词既写出了山的外形特点，又暗含作者的喜爱之情。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-7-1-13',
    type: 'short_answer',
    questionText: '《济南的冬天》在语言风格上有什么特点？',
    answer: '语言风格主要体现在：1. 朴素亲切，大量使用口语化表达，如"温晴""可是""着落"等；2. 比喻和拟人巧妙自然，如"小摇篮""卧""露出点粉色"；3. 句式短小灵活，节奏舒缓，与文章表达宁静安适的基调一致；4. 融情于景，在描写中自然流露喜爱和赞美。整体呈现出口语化的、温暖亲切的散文风格。',
    difficulty: 3,
  },

  // ---- matching 2题 ----
  {
    questionKey: 'chinese-renjiao-7-1-14',
    type: 'matching',
    questionText: '请将《济南的冬天》中的描写对象与其对应的特点连线匹配。',
    answer: '',
    explanation: '阳光朗照下的山：温暖；薄雪覆盖下的山：秀美；城外的远山：淡雅；冬天的水：澄澈暖和。',
    difficulty: 1,
    pairs: '[["阳光朗照下的山","温暖安适"],["薄雪覆盖下的山","秀美如画"],["城外的远山","淡雅如水墨画"],["冬天的水","澄清温暖"]]',
  },
  {
    questionKey: 'chinese-renjiao-7-1-15',
    type: 'matching',
    questionText: '请将老舍的代表作品与其对应的体裁连线匹配。',
    answer: '',
    explanation: '《骆驼祥子》是长篇小说，《茶馆》是话剧，《四世同堂》是长篇小说，《龙须沟》是话剧。',
    difficulty: 2,
    pairs: '[["《骆驼祥子》","长篇小说"],["《茶馆》","话剧"],["《四世同堂》","长篇小说"],["《龙须沟》","话剧"]]',
  },
];

// ========== 7-2 古代诗歌四首 (22题) ==========

const chapter7_2: RawQuestion[] = [
  // ---- choice 6题 ----
  {
    questionKey: 'chinese-renjiao-7-2-0',
    type: 'choice',
    questionText: '"观沧海"的作者是（）',
    answer: 'A',
    explanation: '《观沧海》的作者是曹操，字孟德，东汉末年政治家、军事家、诗人。',
    difficulty: 1,
    options: '["A. 曹操", "B. 曹丕", "C. 曹植", "D. 刘备"]',
  },
  {
    questionKey: 'chinese-renjiao-7-2-1',
    type: 'choice',
    questionText: '"次北固山下"中"次"的意思是（）',
    answer: 'C',
    explanation: '"次"是停泊、停留的意思。"次北固山下"即停泊在北固山下。',
    difficulty: 1,
    options: '["A. 第二次", "B. 经过", "C. 停泊", "D. 登上"]',
  },
  {
    questionKey: 'chinese-renjiao-7-2-2',
    type: 'choice',
    questionText: '"天净沙·秋思"的作者马致远是哪个朝代的？',
    answer: 'B',
    explanation: '马致远是元代著名戏曲家、散曲家，"天净沙"是曲牌名。',
    difficulty: 1,
    options: '["A. 宋代", "B. 元代", "C. 明代", "D. 唐代"]',
  },
  {
    questionKey: 'chinese-renjiao-7-2-3',
    type: 'choice',
    questionText: '"闻王昌龄左迁龙标遥有此寄"的作者是（）',
    answer: 'D',
    explanation: '此诗作者是唐代诗人李白，是他听闻好友王昌龄被贬（左迁）龙标后写的寄赠诗。',
    difficulty: 1,
    options: '["A. 杜甫", "B. 白居易", "C. 王维", "D. 李白"]',
  },
  {
    questionKey: 'chinese-renjiao-7-2-4',
    type: 'choice',
    questionText: '"海日生残夜，江春入旧年"出自哪首诗？',
    answer: 'B',
    explanation: '此句出自王湾《次北固山下》，意思是夜还未尽，海上红日已升；旧年未过，江上已有春意。',
    difficulty: 2,
    options: '["A. 《观沧海》", "B. 《次北固山下》", "C. 《天净沙·秋思》", "D. 《闻王昌龄左迁龙标遥有此寄》"]',
  },
  {
    questionKey: 'chinese-renjiao-7-2-5',
    type: 'choice',
    questionText: '"枯藤老树昏鸦"中运用的主要写作手法是（）',
    answer: 'A',
    explanation: '这首小令全篇纯用名词意象排列组合，九个意象构成一幅深秋晚景图，是典型的"列锦"手法（又称名词意象叠加）。',
    difficulty: 2,
    options: '["A. 意象叠加（列锦）", "B. 借景抒情", "C. 托物言志", "D. 欲扬先抑"]',
  },

  // ---- fill 5题 ----
  {
    questionKey: 'chinese-renjiao-7-2-6',
    type: 'fill',
    questionText: '《观沧海》中表达作者雄心壮志的名句是："____，若出其里。"',
    answer: '日月之行；星汉灿烂',
    acceptableAnswers: '["日月之行；星汉灿烂","日月之行，若出其中；星汉灿烂，若出其里"]',
    explanation: '完整句子为"日月之行，若出其中；星汉灿烂，若出其里"，借大海吞吐日月星辰来抒发统一天下的雄心壮志。',
    difficulty: 1,
  },
  {
    questionKey: 'chinese-renjiao-7-2-7',
    type: 'fill',
    questionText: '"____，悠然见南山"是陶渊明的名句。',
    answer: '采菊东篱下',
    explanation: '此句出自陶渊明《饮酒·其五》，注意这是课外名句积累，不是四首之一。',
    difficulty: 1,
  },
  {
    questionKey: 'chinese-renjiao-7-2-8',
    type: 'fill',
    questionText: '"潮平两岸阔，____"是王湾《次北固山下》中的名句。',
    answer: '风正一帆悬',
    explanation: '潮水涨满，两岸与江水齐平，风正帆悬，视野开阔，表达了旅途中的开阔心情。',
    difficulty: 1,
  },
  {
    questionKey: 'chinese-renjiao-7-2-9',
    type: 'fill',
    questionText: '"我寄愁心与明月，____"出自李白的诗作。',
    answer: '随君直到夜郎西',
    acceptableAnswers: '["随君直到夜郎西","随君（风）直到夜郎西"]',
    explanation: '出自李白《闻王昌龄左迁龙标遥有此寄》，表达了诗人对友人的牵挂之情。',
    difficulty: 1,
  },
  {
    questionKey: 'chinese-renjiao-7-2-10',
    type: 'fill',
    questionText: '"天净沙"是____名，"秋思"是这首散曲的____。',
    answer: '曲牌；题目（题名）',
    acceptableAnswers: '["曲牌；题目","曲牌；题名","曲牌名；题目"]',
    explanation: '"天净沙"是曲牌名，规定曲的格式；"秋思"是题目，概括曲的内容。',
    difficulty: 2,
  },

  // ---- short_answer 8题 ----
  {
    questionKey: 'chinese-renjiao-7-2-11',
    type: 'short_answer',
    questionText: '请赏析"海日生残夜，江春入旧年"一句。',
    answer: '这一联历来为人称道。"生"和"入"二字运用拟人手法，将"日"和"春"人格化，赋予它们以人的意志。意思是残夜还未消退，一轮红日已从海上升起；旧年尚未过去，江上已有春天的气息。不仅写出了时令的交替，而且蕴含了新事物必将取代旧事物的哲理，给人以乐观向上的力量。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-7-2-12',
    type: 'short_answer',
    questionText: '《观沧海》中哪些诗句是实景描写？哪些是虚景（想象）描写？各有怎样的作用？',
    answer: '实景描写："水何澹澹，山岛竦峙。树木丛生，百草丰茂。秋风萧瑟，洪波涌起。"写诗人眼前所见大海的壮阔景象，表现大海的雄伟气势。虚景描写："日月之行，若出其中；星汉灿烂，若出其里。"是诗人的想象，通过大海吞吐日月星辰的壮丽景象，表现诗人统一天下的雄心壮志和博大胸襟。虚实结合，拓展了诗歌的意境。',
    difficulty: 3,
  },
  {
    questionKey: 'chinese-renjiao-7-2-13',
    type: 'short_answer',
    questionText: '《天净沙·秋思》中"断肠人在天涯"中的"断肠"表达了什么感情？',
    answer: '"断肠"形容极度悲伤，这里指游子漂泊在外、思念家乡的极度愁苦之情。全曲用九个意象营造了深秋萧条的景象，最后以"断肠人在天涯"点明主题——游子思乡之情。全曲仅28个字，却营造出浓郁的悲秋氛围，被誉为"秋思之祖"。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-7-2-14',
    type: 'short_answer',
    questionText: '"我寄愁心与明月，随君直到夜郎西"运用了什么修辞手法？表达了怎样的感情？',
    answer: '运用了拟人手法，将月亮人格化，赋予它以人的情感和行为，让月亮把诗人的牵挂与关怀带给远方的友人。表达了诗人对被贬友人的深切同情和牵挂，也体现了两人之间深厚的友谊。想象奇特，感情真挚动人。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-7-2-15',
    type: 'short_answer',
    questionText: '《天净沙·秋思》中前三句罗列了哪些意象？这些意象共同营造了怎样的意境？',
    answer: '前三句罗列的意象有：枯藤、老树、昏鸦、小桥、流水、人家、古道、西风、瘦马。这些意象按类别可以分为两组：一组是荒凉的景物（枯藤、老树、昏鸦、古道、西风、瘦马），渲染出萧条冷落的氛围；另一组是温馨的景物（小桥、流水、人家），反衬出游子的漂泊孤独。通过这些意象的组合，营造出了一种凄凉萧瑟、深沉悲苦的意境。',
    difficulty: 3,
  },
  {
    questionKey: 'chinese-renjiao-7-2-16',
    type: 'short_answer',
    questionText: '《观沧海》全诗抒发了诗人怎样的思想感情？',
    answer: '《观沧海》是曹操北征乌桓胜利后登碣石山时所作。诗人通过描写大海的壮阔景象（实写），再通过丰富的想象（虚写），表现大海吞吐日月星辰的宏伟气象，抒发了诗人统一天下、建功立业的雄心壮志和博大胸襟。全诗气势雄浑，感情奔放，是建安文学的代表作。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-7-2-17',
    type: 'short_answer',
    questionText: '"乡书何处达？归雁洛阳边"表达了诗人怎样的感情？',
    answer: '这两句意为：家书要寄往何处？希望北归的大雁捎到洛阳去。诗人漂泊在外，思念家乡但无法归去，只能希望大雁传书。通过设问和想象，含蓄地表达了游子深切的思乡之情。与"海日生残夜，江春入旧年"相呼应，在新旧交替之际更加浓了乡愁。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-7-2-18',
    type: 'short_answer',
    questionText: '比较这四首诗在抒发感情方面的异同。',
    answer: '相同点：四首诗都表达了作者内心的情感体验。《观沧海》表达统一天下的雄心壮志，感情雄壮豪迈；《次北固山下》表达旅途中的思乡之情，感情含蓄委婉；《天净沙·秋思》表达游子的羁旅之愁，感情凄凉悲苦；《闻王昌龄左迁龙标遥有此寄》表达对友人的关切之情，感情真挚深沉。不同点在于感情色彩和表达方式各异，有的直抒胸臆，有的借景抒情，有的情景交融。',
    difficulty: 3,
  },

  // ---- matching 3题 ----
  {
    questionKey: 'chinese-renjiao-7-2-19',
    type: 'matching',
    questionText: '请将古诗名句与其作者连线匹配。',
    answer: '',
    explanation: '四首诗的作者分别为曹操、王湾、马致远、李白。',
    difficulty: 1,
    pairs: '[["日月之行，若出其中","曹操"],["潮平两岸阔，风正一帆悬","王湾"],["枯藤老树昏鸦","马致远"],["我寄愁心与明月","李白"]]',
  },
  {
    questionKey: 'chinese-renjiao-7-2-20',
    type: 'matching',
    questionText: '请将诗歌与其对应的体裁连线匹配。',
    answer: '',
    explanation: '《观沧海》是四言古诗，《次北固山下》是五言律诗，《天净沙·秋思》是散曲，《闻王昌龄左迁龙标遥有此寄》是七言绝句。',
    difficulty: 2,
    pairs: '[["《观沧海》","四言古诗"],["《次北固山下》","五言律诗"],["《天净沙·秋思》","散曲（小令）"],["《闻王昌龄左迁龙标遥有此寄》","七言绝句"]]',
  },
  {
    questionKey: 'chinese-renjiao-7-2-21',
    type: 'matching',
    questionText: '请将《天净沙·秋思》中的意象与其所属的景物类别连线匹配。',
    answer: '',
    explanation: '荒凉类：枯藤、老树、昏鸦、古道、西风、瘦马；温馨类：小桥、流水、人家。',
    difficulty: 2,
    pairs: '[["枯藤、老树、昏鸦","荒凉萧瑟"],["小桥、流水、人家","温馨宁静"],["古道、西风、瘦马","荒凉萧瑟"]]',
  },
];

// ========== 7-3 从百草园到三味书屋 (20题) ==========

const chapter7_3: RawQuestion[] = [
  // ---- choice 6题 ----
  {
    questionKey: 'chinese-renjiao-7-3-0',
    type: 'choice',
    questionText: '《从百草园到三味书屋》的作者是（）',
    answer: 'B',
    explanation: '本文选自鲁迅散文集《朝花夕拾》，作者是鲁迅，原名周树人。',
    difficulty: 1,
    options: '["A. 老舍", "B. 鲁迅", "C. 朱自清", "D. 巴金"]',
  },
  {
    questionKey: 'chinese-renjiao-7-3-1',
    type: 'choice',
    questionText: '鲁迅的原名是（）',
    answer: 'C',
    explanation: '鲁迅（1881—1936），原名周树人，字豫才，浙江绍兴人，中国现代文学的奠基人。',
    difficulty: 1,
    options: '["A. 周作人", "B. 周建人", "C. 周树人", "D. 周豫才"]',
  },
  {
    questionKey: 'chinese-renjiao-7-3-2',
    type: 'choice',
    questionText: '《从百草园到三味书屋》选自鲁迅的哪部散文集？',
    answer: 'A',
    explanation: '选自散文集《朝花夕拾》。"朝花"指童年美好的往事，"夕拾"指成年后的回忆。',
    difficulty: 1,
    options: '["A. 《朝花夕拾》", "B. 《呐喊》", "C. 《彷徨》", "D. 《野草》"]',
  },
  {
    questionKey: 'chinese-renjiao-7-3-3',
    type: 'choice',
    questionText: '下列哪一项不是百草园中的景物？',
    answer: 'D',
    explanation: '百草园中有皂荚树、桑葚、鸣蝉、黄蜂、菜畦等，但没有荷花。',
    difficulty: 1,
    options: '["A. 皂荚树", "B. 桑葚", "C. 鸣蝉", "D. 荷花"]',
  },
  {
    questionKey: 'chinese-renjiao-7-3-4',
    type: 'choice',
    questionText: '"不必说碧绿的菜畦，光滑的石井栏，高大的皂荚树"这句话运用的修辞手法是（）',
    answer: 'A',
    explanation: '碧绿的菜畦、光滑的石井栏、高大的皂荚树，分别从颜色、质地、形态来写，构成排比，使描写富有层次感和节奏感。',
    difficulty: 1,
    options: '["A. 排比", "B. 拟人", "C. 夸张", "D. 反复"]',
  },
  {
    questionKey: 'chinese-renjiao-7-3-5',
    type: 'choice',
    questionText: '美女蛇的故事在文中有什么作用？',
    answer: 'D',
    explanation: '美女蛇的故事增加了百草园的神秘色彩，符合儿童爱听故事的心理，使百草园更富有吸引力，丰富了文章内容。',
    difficulty: 2,
    options: '["A. 交代百草园的历史", "B. 表达对迷信的批判", "C. 说明百草园的危险", "D. 增加百草园的神秘色彩"]',
  },

  // ---- fill 4题 ----
  {
    questionKey: 'chinese-renjiao-7-3-6',
    type: 'fill',
    questionText: '鲁迅，原名____，字____，浙江绍兴人，中国现代文学的奠基人。',
    answer: '周树人；豫才',
    explanation: '鲁迅（1881—1936），原名周树人，字豫才。1918年发表中国现代文学史上第一篇白话小说《狂人日记》，始用"鲁迅"笔名。',
    difficulty: 1,
  },
  {
    questionKey: 'chinese-renjiao-7-3-7',
    type: 'fill',
    questionText: '"轻捷的叫天子忽然从草间直____向云里去了。"',
    answer: '窜',
    explanation: '"窜"字准确写出叫天子（云雀）从草间突然飞向天空的速度之快、动作之敏捷。',
    difficulty: 1,
  },
  {
    questionKey: 'chinese-renjiao-7-3-8',
    type: 'fill',
    questionText: '三味书屋的"三味"取自"读经味如____，读史味如____，读诸子百家味如____"。',
    answer: '稻粱；肴馔；醯醢（或米饭；菜肴；调料）',
    acceptableAnswers: '["稻粱；肴馔；醯醢","稻粱；肴馔；醢","米饭；菜肴；调料"]',
    explanation: '三味书屋匾额下的含义：读经味如稻粱（主食），读史味如肴馔（菜肴），读诸子百家味如醯醢（调料），意为读书滋味丰富。',
    difficulty: 3,
  },
  {
    questionKey: 'chinese-renjiao-7-3-9',
    type: 'fill',
    questionText: '百草园中冬天的趣事是____。',
    answer: '在雪地捕鸟',
    acceptableAnswers: '["在雪地捕鸟","捕鸟","雪地捕鸟"]',
    explanation: '冬天百草园比较无味，但下雪后可以在雪地捕鸟。闰土的父亲教给了"我"捕鸟的方法。',
    difficulty: 1,
  },

  // ---- short_answer 7题 ----
  {
    questionKey: 'chinese-renjiao-7-3-10',
    type: 'short_answer',
    questionText: '第2段描写百草园的景物是从哪些角度来写的？请举例说明。',
    answer: '从多个角度来写：1. 视觉——碧绿的菜畦、高大的皂荚树、紫红的桑葚（颜色和形态）；2. 听觉——鸣蝉在树叶里长吟、油蛉在这里低唱（声音）；3. 触觉——光滑的石井栏（触感）；4. 味觉——又酸又甜的覆盆子（味道）。通过多感官的细致描写，使百草园的景物栩栩如生，充满生机，也表现了儿童对自然的热爱和好奇心。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-7-3-11',
    type: 'short_answer',
    questionText: '文章为什么要写美女蛇的故事？',
    answer: '美女蛇的故事在文中有多重作用：1. 从内容上看，给百草园增添了一层神秘的色彩，使百草园更加富有吸引力；2. 从结构上看，丰富了百草园的描写内容，使文章更加有趣；3. 从儿童心理上看，符合儿童爱听故事、好奇心强的特点，真实地反映了童年生活；4. 增加了文章的趣味性和可读性。这个故事虽与主题无直接关系，却增添了文章的情趣。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-7-3-12',
    type: 'short_answer',
    questionText: '文章写百草园和三味书屋两部分时，作者的态度有什么不同？',
    answer: '对百草园部分，作者充满喜爱和怀念之情，用大量笔墨描绘百草园中自由快乐的童年生活，语调活泼愉快；对三味书屋部分，作者既有对枯燥学习的描写，但也并非完全否定，而是如实地记录了私塾生活的某些有趣方面，态度相对克制而客观。两部分形成对比，表现了儿童天性中热爱自由、好奇好动的一面。',
    difficulty: 3,
  },
  {
    questionKey: 'chinese-renjiao-7-3-13',
    type: 'short_answer',
    questionText: '"Ade，我的蟋蟀们！Ade，我的覆盆子们和木莲们！"这句话运用了什么修辞手法？表达了什么感情？',
    answer: '运用了拟人手法，将蟋蟀、覆盆子、木莲等动植物当作朋友来告别。"Ade"是德语"再见"的意思，用在这里增添了依依不舍的感情。这句话表达了"我"被送去上学前对百草园中一草一木、一虫一鸟的深厚感情和恋恋不舍，真实地表现了儿童离开心爱之地时的伤感。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-7-3-14',
    type: 'short_answer',
    questionText: '文章标题"从百草园到三味书屋"中的"从……到……"有什么含义？',
    answer: '"从……到……"不仅表示空间的转移（从百草园到三味书屋），更暗含了人生的转变——从自由自在的童年游戏生活到接受教育的学生生活。百草园代表自由快乐、亲近自然的童年时光，三味书屋代表接受约束、开始求学的成长阶段。这个标题概括了文章的主要内容，也暗示了成长的主题。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-7-3-15',
    type: 'short_answer',
    questionText: '请分析百草园中"雪地捕鸟"一段的描写层次和动词的运用。',
    answer: '捕鸟过程写得层次分明、动词运用准确：先写"扫开一块雪，露出地面"，用"扫""露"写出准备工作；再写"用一枝短棒支起一面大的竹筛来，下面撒些秕谷"，用"支""撒"布置陷阱；然后"棒上系一条长绳，人远远地牵着"，用"系""牵"完成设置；最后"看鸟雀下来啄食，走到竹筛底下的时候，将绳子一拉，便罩住了"，用"拉""罩"完成捕鸟。一系列动词准确有序，写出了捕鸟的全过程。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-7-3-16',
    type: 'short_answer',
    questionText: '三味书屋的先生是一个怎样的形象？',
    answer: '三味书屋的先生（寿镜吾）是一个方正、质朴、博学的人。他有戒尺但不常用，有罚跪的规则也不常用，说明他并非严厉刻板的老师。他对学生有一定宽容，在学生问"怪哉"虫时虽然不高兴，但并非苛刻之人。他对读书非常投入，读书时"总是微笑起来，而且将头仰起，摇着，向后面拗过去"，表现了他对学问的热爱。这是一个可亲可敬的私塾老师形象。',
    difficulty: 3,
  },

  // ---- matching 3题 ----
  {
    questionKey: 'chinese-renjiao-7-3-17',
    type: 'matching',
    questionText: '请将鲁迅作品与其对应体裁连线匹配。',
    answer: '',
    explanation: '《狂人日记》是小说，《朝花夕拾》是散文集，《呐喊》是小说集，《野草》是散文诗集。',
    difficulty: 1,
    pairs: '[["《朝花夕拾》","散文集"],["《呐喊》","小说集"],["《野草》","散文诗集"],["《狂人日记》","短篇小说"]]',
  },
  {
    questionKey: 'chinese-renjiao-7-3-18',
    type: 'matching',
    questionText: '请将百草园中的景物与其对应的描写角度连线匹配。',
    answer: '',
    explanation: '碧绿的菜畦——视觉，鸣蝉长吟——听觉，光滑的石井栏——触觉，覆盆子又酸又甜——味觉。',
    difficulty: 2,
    pairs: '[["碧绿的菜畦","视觉（颜色）"],["鸣蝉长吟","听觉（声音）"],["光滑的石井栏","触觉（质地）"],["覆盆子又酸又甜","味觉（味道）"]]',
  },
  {
    questionKey: 'chinese-renjiao-7-3-19',
    type: 'matching',
    questionText: '请将鲁迅散文集《朝花夕拾》中的篇目与其主要内容连线匹配。',
    answer: '',
    explanation: '《从百草园到三味书屋》写童年生活，《阿长与山海经》写保姆阿长，《藤野先生》写日本留学经历，《父亲的病》写为父亲求医。',
    difficulty: 3,
    pairs: '[["《从百草园到三味书屋》","童年生活"],["《阿长与山海经》","保姆阿长"],["《藤野先生》","日本留学"],["《父亲的病》","为父求医"]]',
  },
];

// ========== 8-0 新闻两则 (20题) ==========

const chapter8_0: RawQuestion[] = [
  // ---- choice 6题 ----
  {
    questionKey: 'chinese-renjiao-8-0-0',
    type: 'choice',
    questionText: '《新闻两则》包含的两篇新闻是（）',
    answer: 'A',
    explanation: '《新闻两则》包含毛泽东写的《我三十万大军胜利南渡长江》和《人民解放军百万大军横渡长江》两篇消息。',
    difficulty: 1,
    options: '["A. 《我三十万大军胜利南渡长江》和《人民解放军百万大军横渡长江》", "B. 《中原我军解放南阳》和《人民解放军百万大军横渡长江》", "C. 《我三十万大军胜利南渡长江》和《中原我军解放南阳》", "D. 《人民解放军百万大军横渡长江》和《别了，"钞票上的油田"》"]',
  },
  {
    questionKey: 'chinese-renjiao-8-0-1',
    type: 'choice',
    questionText: '新闻的"五要素"（5W）不包括（）',
    answer: 'C',
    explanation: '新闻五要素为：何时(When)、何地(Where)、何人(Who)、何事(What)、何故(Why)。不包括"如何"(How)。',
    difficulty: 1,
    options: '["A. 何时（When）", "B. 何地（Where）", "C. 如何（How）", "D. 何人（Who）"]',
  },
  {
    questionKey: 'chinese-renjiao-8-0-2',
    type: 'choice',
    questionText: '新闻结构的"倒金字塔"指的是（）',
    answer: 'B',
    explanation: '倒金字塔结构是把最重要的信息放在最前面，次要信息依次排列，次要补充信息放在最后，形成头重脚轻的结构。',
    difficulty: 2,
    options: '["A. 时间顺序", "B. 最重要的信息放在最前面", "C. 按地点分层次", "D. 按人物重要程度排列"]',
  },
  {
    questionKey: 'chinese-renjiao-8-0-3',
    type: 'choice',
    questionText: '新闻中用"人民解放军百万大军"而不是精确数字，这是因为（）',
    answer: 'C',
    explanation: '新闻标题中使用概数"百万大军"更能突出气势，有感染力，同时战争期间无法统计精确数字。',
    difficulty: 2,
    options: '["A. 作者不知道确切数字", "B. 为了保密", "C. 突出气势和感染力", "D. 约定俗成的写法"]',
  },
  {
    questionKey: 'chinese-renjiao-8-0-4',
    type: 'choice',
    questionText: '新闻的导语通常位于（）',
    answer: 'A',
    explanation: '导语是消息的开头部分，通常在第一段或第一句话，用简明扼要的文字概括新闻的主要事实。',
    difficulty: 1,
    options: '["A. 消息的第一段", "B. 消息的最后一段", "C. 标题", "D. 正文中间"]',
  },
  {
    questionKey: 'chinese-renjiao-8-0-5',
    type: 'choice',
    questionText: '下列关于新闻的表述不正确的是（）',
    answer: 'D',
    explanation: '新闻是对新近发生的事实的报道。D选项错误在于新闻的基本特征是"用事实说话"，而非"可以虚构"。',
    difficulty: 2,
    options: '["A. 新闻必须有标题", "B. 新闻必须真实", "C. 新闻有时间性", "D. 新闻可以适当虚构"]',
  },

  // ---- fill 4题 ----
  {
    questionKey: 'chinese-renjiao-8-0-6',
    type: 'fill',
    questionText: '新闻的结构通常包括标题、____、主体、背景和结语五个部分。',
    answer: '导语',
    explanation: '新闻（消息）的一般结构为：标题、导语、主体、背景、结语。',
    difficulty: 1,
  },
  {
    questionKey: 'chinese-renjiao-8-0-7',
    type: 'fill',
    questionText: '新闻的特点是____、及时、____。',
    answer: '真实；简明',
    acceptableAnswers: '["真实；简明","真实；准确","真实；简明扼要"]',
    explanation: '新闻的特点是真实性（用事实说话）、时效性（及时报道）、简明性（语言简练）。',
    difficulty: 1,
  },
  {
    questionKey: 'chinese-renjiao-8-0-8',
    type: 'fill',
    questionText: '《人民解放军百万大军横渡长江》这则新闻的电头是"____"。',
    answer: '新华社长江前线22日22时电',
    acceptableAnswers: '["新华社长江前线22日22时电","新华社长江前线一九四九年四月二十二日电"]',
    explanation: '电头交代了新闻的通讯社、发布时间和地点，是新闻的重要组成部分。',
    difficulty: 1,
  },
  {
    questionKey: 'chinese-renjiao-8-0-9',
    type: 'fill',
    questionText: '《新闻两则》的作者是____，他是中华人民共和国的缔造者。',
    answer: '毛泽东',
    explanation: '这两则新闻是毛泽东为新华社写的消息，报道了解放战争中渡江战役的伟大胜利。',
    difficulty: 1,
  },

  // ---- short_answer 8题 ----
  {
    questionKey: 'chinese-renjiao-8-0-10',
    type: 'short_answer',
    questionText: '《人民解放军百万大军横渡长江》的导语概括了什么内容？',
    answer: '导语"人民解放军百万大军，从1000余华里的战线上，冲破敌阵，横渡长江"概括了新闻的核心事实：渡江的人民解放军兵力之多（百万大军）、战线之长（1000余华里）、气势之壮（冲破敌阵、横渡长江），使读者一眼就能把握新闻的主要内容。语言精练，信息量大。',
    difficulty: 1,
  },
  {
    questionKey: 'chinese-renjiao-8-0-11',
    type: 'short_answer',
    questionText: '新闻的标题有什么作用？常见的标题形式有哪些？',
    answer: '新闻标题的作用是概括和提示新闻的主要内容，帮助读者快速了解新闻的核心信息，吸引读者阅读。常见形式有：1. 正题（主标题）——概括新闻的主要内容；2. 引题（眉题）——交代背景或烘托气氛；3. 副题（辅题）——补充说明正题的内容。如《我三十万大军胜利南渡长江》是完整标题，直接概括了主要事件。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-8-0-12',
    type: 'short_answer',
    questionText: '《人民解放军百万大军横渡长江》的主体部分是如何安排层次的？',
    answer: '主体部分按中路军、西路军、东路军的顺序来写。先写中路军（最先渡过），再写西路军（三十万大军），最后详写东路军（三十五万大军，战斗最激烈）。按时间顺序和空间（路线）顺序来组织材料，条理清晰。详略得当，东路军写得最详细，表现了战斗的激烈和将士的英勇。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-8-0-13',
    type: 'short_answer',
    questionText: '新闻语言有什么特点？请结合课文举例说明。',
    answer: '新闻语言的特点是准确、简练、鲜明。1. 准确——使用精确的时间、数字、地名等，如"22日22时""中路军""西路军""东路军"等；2. 简练——语言精练不拖沓，用最少的文字传达最多的信息；3. 鲜明——褒贬分明，如"冲破敌阵"表现英勇，"纷纷溃退"表现敌军溃败。整体风格庄重有力。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-8-0-14',
    type: 'short_answer',
    questionText: '"不到二十四小时，三十万人民解放军即已突破敌阵"中的"不到""即已"有什么表达效果？',
    answer: '"不到二十四小时"说明时间之短，突出渡江速度之快，表现解放军的英勇善战和敌人防线的不堪一击。"即已"是"就已经"的意思，强调事情发生得很快、很顺利。这两个词语准确、鲜明地传达了渡江战役胜利迅速的消息，体现了新闻语言的精练有力。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-8-0-15',
    type: 'short_answer',
    questionText: '什么是新闻的背景？在新闻中有什么作用？',
    answer: '新闻背景是指新闻事件发生的历史条件、环境、原因等相关信息。背景的作用主要有：1. 帮助读者理解新闻事件的前因后果；2. 交代事件的来龙去脉，使报道更加完整；3. 补充说明，使新闻更加充实。如《人民解放军百万大军横渡长江》中提到"此种情况，一方面由于人民解放军英勇善战，锐不可当"，就是对战事背景的交代和原因分析。',
    difficulty: 3,
  },
  {
    questionKey: 'chinese-renjiao-8-0-16',
    type: 'short_answer',
    questionText: '比较《我三十万大军胜利南渡长江》和《人民解放军百万大军横渡长江》两则新闻的异同。',
    answer: '相同点：都是毛泽东写的渡江战役消息，都采用新闻结构（标题、导语、主体），语言风格一致，都表现了解放军的英勇善战和渡江胜利的伟大意义。不同点：1. 《我三十万大军》篇幅极短，仅一句话新闻；2. 《百万大军横渡长江》内容更丰富，主体按三路军分别详写，详略得当，信息量更大。前者可看作简洁的消息，后者是结构完整的标准消息。',
    difficulty: 3,
  },
  {
    questionKey: 'chinese-renjiao-8-0-17',
    type: 'short_answer',
    questionText: '为什么说新闻必须"用事实说话"？',
    answer: '新闻之所以必须"用事实说话"，因为：1. 真实是新闻的生命，脱离事实的新闻就没有价值，甚至产生误导；2. 读者阅读新闻是为了了解真实发生的事情，不是看文学创作；3. 用事实说话比空洞的说教更有说服力，让事实本身来传达信息；4. 这是新闻与其他文体（如小说、散文）的根本区别。新闻中的每一个事实都应经过核实，确保准确无误。',
    difficulty: 3,
  },

  // ---- matching 2题 ----
  {
    questionKey: 'chinese-renjiao-8-0-18',
    type: 'matching',
    questionText: '请将新闻结构各部分与其对应的功能连线匹配。',
    answer: '',
    explanation: '标题概括内容，导语提示主要事实，主体展开叙述，背景补充说明，结语收束全文。',
    difficulty: 1,
    pairs: '[["标题","概括新闻的主要内容"],["导语","提示新闻的核心事实"],["主体","详细叙述新闻事件"],["背景","补充说明相关情况"],["结语","收束全文或补充交代"]]',
  },
  {
    questionKey: 'chinese-renjiao-8-0-19',
    type: 'matching',
    questionText: '请将渡江战役三路军与其对应情况连线匹配。',
    answer: '',
    explanation: '中路军最先渡过，西路军30万，东路军35万、战斗最激烈。',
    difficulty: 2,
    pairs: '[["中路军","最先渡过长江"],["西路军","三十万大军渡江"],["东路军","三十五万大军，歼灭及击溃敌军"]]',
  },
];

// ========== 8-1 芦花荡 (16题) ==========

const chapter8_1: RawQuestion[] = [
  // ---- choice 5题 ----
  {
    questionKey: 'chinese-renjiao-8-1-0',
    type: 'choice',
    questionText: '《芦花荡》的作者是（）',
    answer: 'B',
    explanation: '孙犁，原名孙树勋，现代著名作家，"荷花淀派"代表人物。',
    difficulty: 1,
    options: '["A. 老舍", "B. 孙犁", "C. 鲁迅", "D. 茅盾"]',
  },
  {
    questionKey: 'chinese-renjiao-8-1-1',
    type: 'choice',
    questionText: '《芦花荡》的主要人物"老头子"的职业是（）',
    answer: 'A',
    explanation: '老头子是一位干瘦的老船夫，在白洋淀里运送干部，保护交通线。',
    difficulty: 1,
    options: '["A. 船夫", "B. 渔民", "C. 战士", "D. 农民"]',
  },
  {
    questionKey: 'chinese-renjiao-8-1-2',
    type: 'choice',
    questionText: '孙犁是哪个文学流派的代表人物？',
    answer: 'D',
    explanation: '孙犁是"荷花淀派"的代表人物，作品风格清新隽永，以描写白洋淀人民抗日斗争著称。',
    difficulty: 2,
    options: '["A. 山药蛋派", "B. 京派", "C. 海派", "D. 荷花淀派"]',
  },
  {
    questionKey: 'chinese-renjiao-8-1-3',
    type: 'choice',
    questionText: '"老头子"的性格特点中最突出的是（）',
    answer: 'C',
    explanation: '老头子最突出的性格特点是过于自信和自尊。他自信于自己高超的撑船技术，从不失手，因而对女孩受伤深感内疚，决心报仇。',
    difficulty: 1,
    options: '["A. 胆小怕事", "B. 贪生怕死", "C. 过于自信和自尊", "D. 粗暴蛮横"]',
  },
  {
    questionKey: 'chinese-renjiao-8-1-4',
    type: 'choice',
    questionText: '《芦花荡》的故事背景是（）',
    answer: 'B',
    explanation: '故事发生在抗日战争时期的白洋淀地区，反映了冀中人民抗击日寇的斗争生活。',
    difficulty: 1,
    options: '["A. 解放战争时期", "B. 抗日战争时期", "C. 土地革命时期", "D. 北伐战争时期"]',
  },

  // ---- fill 3题 ----
  {
    questionKey: 'chinese-renjiao-8-1-5',
    type: 'fill',
    questionText: '孙犁，原名____，现代小说家、散文家，"____派"代表人物。',
    answer: '孙树勋；荷花淀',
    explanation: '孙犁代表作有小说《荷花淀》《芦花荡》等，与赵树理的"山药蛋派"并称。',
    difficulty: 1,
  },
  {
    questionKey: 'chinese-renjiao-8-1-6',
    type: 'fill',
    questionText: '《芦花荡》的环境描写以____为背景，充满了诗情画意。',
    answer: '白洋淀',
    explanation: '白洋淀是华北地区最大的淡水湖，芦苇丛生，荷花遍布，是故事发生的典型环境。',
    difficulty: 1,
  },
  {
    questionKey: 'chinese-renjiao-8-1-7',
    type: 'fill',
    questionText: '老头子为女孩报仇的方式是用竹篙____敌人的头。',
    answer: '敲（砸）',
    acceptableAnswers: '["敲","砸","打"]',
    explanation: '老头子诱敌入圈套后，用竹篙痛击敌人，为受伤的女孩报仇雪恨。',
    difficulty: 2,
  },

  // ---- short_answer 6题 ----
  {
    questionKey: 'chinese-renjiao-8-1-8',
    type: 'short_answer',
    questionText: '小说中的"老头子"是一个怎样的人物形象？',
    answer: '老头子是一个具有传奇色彩的抗日老英雄。他的主要性格特征有：1. 过于自信和自尊——对自己的水上功夫极为自信，从不失手；2. 爱憎分明、疾恶如仇——对日寇充满仇恨，对同胞充满关爱；3. 智勇双全——利用智慧设下圈套消灭敌人；4. 有血有肉——对女孩受伤深感内疚，不惜以命相搏报仇。他代表了抗日战争中无数平凡而伟大的普通中国人。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-8-1-9',
    type: 'short_answer',
    questionText: '《芦花荡》中的景物描写有什么作用？',
    answer: '景物描写的作用主要有：1. 交代故事背景——白洋淀的芦苇荡、荷花淀等描写交代了故事发生的地点和环境；2. 烘托人物形象——美丽的水乡风光与老头子的英雄形象相映衬；3. 推动情节发展——芦苇密布的地形为老头子与敌人周旋提供了条件；4. 增添诗意美——孙犁文笔清新优美，景物描写富有画意诗情，增强了小说的文学性和感染力。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-8-1-10',
    type: 'short_answer',
    questionText: '小说为什么要写女孩受伤这一情节？',
    answer: '女孩受伤这一情节有多重作用：1. 引出冲突——老头子过于自信，结果导致大女孩受伤，这是情节的转折点；2. 塑造人物——老头子因女孩受伤而深感内疚，激发了他的复仇行动，展现了老头子的自尊心和责任感；3. 推动情节发展——从受伤到复仇，构成了小说后半部分的情节主线，使故事更加紧张引人入胜；4. 深化主题——表现了日寇的残暴，也表现了中国人民不畏强暴、英勇斗争的精神。',
    difficulty: 3,
  },
  {
    questionKey: 'chinese-renjiao-8-1-11',
    type: 'short_answer',
    questionText: '分析"月亮落了，半夜以后的苇塘，有些飒飒的响"这句话的作用。',
    answer: '这是一处典型的环境描写。从内容上看，交代了时间是半夜以后，营造了夜晚苇塘幽静而又略带紧张的氛围；从情节上看，暗示老头子即将开始他的复仇行动，"飒飒的响"暗示了风声和水声，预示着即将发生的战斗；从效果上看，以静谧衬托即将到来的激烈斗争，起到蓄势的作用，增加了故事的悬念和紧张感。',
    difficulty: 3,
  },
  {
    questionKey: 'chinese-renjiao-8-1-12',
    type: 'short_answer',
    questionText: '《芦花荡》在人物描写方面有什么特色？',
    answer: '《芦花荡》的人物描写特色主要有：1. 外貌描写简洁有力——"干瘦的老头子"几个字就勾勒出人物形象；2. 语言描写个性化——老头子的语言简短有力，充满自信，符合人物性格；3. 动作描写传神——撑船、下钩等动作描写表现了老头子高超的技艺；4. 侧面烘托——通过女孩的视角和其他人的态度来烘托老头子的形象，使人物更加丰满立体。总体上，人物描写手法多样，不刻意雕琢，却刻画出一个鲜活的英雄形象。',
    difficulty: 3,
  },
  {
    questionKey: 'chinese-renjiao-8-1-13',
    type: 'short_answer',
    questionText: '简要分析《芦花荡》的主题思想。',
    answer: '《芦花荡》通过讲述白洋淀地区一位老船夫智斗日寇的故事，展现了抗日战争时期中国人民不畏强暴、英勇斗争的精神。老头子这一形象代表了千千万万普通中国人在民族危亡时刻所表现出的爱国热情和英雄气概。小说在残酷的战争背景下描绘了白洋淀的美景，表现了中国人民对家乡的热爱和对和平生活的向往，歌颂了中华民族坚韧不拔的民族精神。',
    difficulty: 2,
  },

  // ---- matching 2题 ----
  {
    questionKey: 'chinese-renjiao-8-1-14',
    type: 'matching',
    questionText: '请将孙犁作品与其对应体裁连线匹配。',
    answer: '',
    explanation: '《荷花淀》是小说，《芦花荡》是小说，《白洋淀纪事》是小说散文集。',
    difficulty: 1,
    pairs: '[["《荷花淀》","短篇小说"],["《芦花荡》","短篇小说"],["《白洋淀纪事》","小说散文集"]]',
  },
  {
    questionKey: 'chinese-renjiao-8-1-15',
    type: 'matching',
    questionText: '请将中国现代文学流派与其代表作家连线匹配。',
    answer: '',
    explanation: '荷花淀派——孙犁，山药蛋派——赵树理，京派——沈从文。',
    difficulty: 2,
    pairs: '[["荷花淀派","孙犁"],["山药蛋派","赵树理"],["京派","沈从文"]]',
  },
];

// ========== 8-2 阿长与山海经 (22题) ==========

const chapter8_2: RawQuestion[] = [
  // ---- choice 6题 ----
  {
    questionKey: 'chinese-renjiao-8-2-0',
    type: 'choice',
    questionText: '《阿长与山海经》的作者是（）',
    answer: 'A',
    explanation: '本文选自鲁迅散文集《朝花夕拾》，回忆了保姆阿长的几件事。',
    difficulty: 1,
    options: '["A. 鲁迅", "B. 老舍", "C. 朱自清", "D. 巴金"]',
  },
  {
    questionKey: 'chinese-renjiao-8-2-1',
    type: 'choice',
    questionText: '阿长在文中是作者的（）',
    answer: 'B',
    explanation: '阿长是鲁迅童年时的保姆，是一个没有文化的劳动妇女，但热心善良。',
    difficulty: 1,
    options: '["A. 母亲", "B. 保姆", "C. 姐姐", "D. 奶奶"]',
  },
  {
    questionKey: 'chinese-renjiao-8-2-2',
    type: 'choice',
    questionText: '作者对阿长的态度经历了怎样的变化？',
    answer: 'C',
    explanation: '从最初的不大佩服、讨厌，到阿长买来《山海经》后产生"新的敬意"，最终深沉地怀念和感激她。',
    difficulty: 2,
    options: '["A. 始终喜欢", "B. 始终讨厌", "C. 从讨厌到敬佩", "D. 从敬佩到讨厌"]',
  },
  {
    questionKey: 'chinese-renjiao-8-2-3',
    type: 'choice',
    questionText: '《山海经》是一部（）',
    answer: 'D',
    explanation: '《山海经》是中国古代的一部地理著作，包含丰富的神话传说和奇珍异兽的描述。',
    difficulty: 1,
    options: '["A. 小说", "B. 诗集", "C. 史书", "D. 古代地理著作（神话传说）"]',
  },
  {
    questionKey: 'chinese-renjiao-8-2-4',
    type: 'choice',
    questionText: '"仁厚黑暗的地母呵，愿在你怀里永安她的魂灵！"这句话表达了作者对阿长的（）',
    answer: 'A',
    explanation: '这句话是全文的结尾，表达了作者对阿长深沉的怀念、感激和祝福之情。',
    difficulty: 1,
    options: '["A. 深切的怀念和感激", "B. 厌恶和憎恨", "C. 同情和怜悯", "D. 敬畏和恐惧"]',
  },
  {
    questionKey: 'chinese-renjiao-8-2-5',
    type: 'choice',
    questionText: '文中"我"最渴望得到《山海经》的原因是（）',
    answer: 'B',
    explanation: '"我"听说《山海经》里有"人面的兽""九头的蛇"等神奇图画，非常渴望一睹为快。',
    difficulty: 1,
    options: '["A. 为了学习知识", "B. 里面有神奇的图画", "C. 别人都有的书", "D. 老师推荐的"]',
  },

  // ---- fill 5题 ----
  {
    questionKey: 'chinese-renjiao-8-2-6',
    type: 'fill',
    questionText: '《阿长与山海经》选自鲁迅散文集《____》。',
    answer: '朝花夕拾',
    explanation: '《朝花夕拾》是鲁迅回忆童年和青少年时期生活的散文集。',
    difficulty: 1,
  },
  {
    questionKey: 'chinese-renjiao-8-2-7',
    type: 'fill',
    questionText: '阿长的真名叫做____（原名____）。',
    answer: '阿长；长妈妈（长妈）',
    acceptableAnswers: '["阿长；长妈妈","长妈妈；阿长"]',
    explanation: '阿长是鲁迅家以前的保姆，真名已不可考，只知她被称为"长妈妈"。',
    difficulty: 1,
  },
  {
    questionKey: 'chinese-renjiao-8-2-8',
    type: 'fill',
    questionText: '文章围绕阿长写了哪几件事？请列举至少三件。',
    answer: '喜欢切切察察；睡觉摆成"大"字形；懂得许多规矩（如元旦吃福橘）；给"我"讲长毛的故事；给"我"买来《山海经》',
    acceptableAnswers: '["喜欢切切察察；睡觉摆成大字形；懂得许多规矩；讲长毛的故事；买来《山海经》","切切察察；大字形；规矩；长毛的故事；买《山海经》"]',
    explanation: '围绕阿长写了多件事，从不同侧面展现阿长的性格，为最后的转折（买来《山海经》）做铺垫。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-8-2-9',
    type: 'fill',
    questionText: '阿长给"我"买《山海经》时，书的名称被她说成"____"。',
    answer: '三哼经',
    acceptableAnswers: '["三哼经","三哼经（三哼经的版本）"]',
    explanation: '阿长不识字，把《山海经》叫成"三哼经"，但她记住了"我"想要这本书的心愿并买来了，这个细节令人感动。',
    difficulty: 1,
  },
  {
    questionKey: 'chinese-renjiao-8-2-10',
    type: 'fill',
    questionText: '文章开头说"阿长，已经死了____年了"。"____"说明了作者对她的深深怀念。',
    answer: '三十；不死',
    acceptableAnswers: '["三十；差不多","三十多年；不忘记"]',
    explanation: '"差不多已经死了三十年了"和"仁厚黑暗的地母呵，愿在你怀里永安她的魂灵"表达了对阿长的深切怀念。',
    difficulty: 2,
  },

  // ---- short_answer 8题 ----
  {
    questionKey: 'chinese-renjiao-8-2-11',
    type: 'short_answer',
    questionText: '文章写阿长买来《山海经》一事，为什么如此详细？',
    answer: '买《山海经》是全文的高潮和转折，详细描写的原因有：1. 这是阿长最让"我"感动的事，她一个不识字的粗人却记住了孩子的心愿并设法满足；2. 此事改变了"我"对阿长的态度，从不佩服到产生"新的敬意"；3. 突出了阿长善良、热心、纯朴的品质，使人物形象更加丰满；4. 深化了主题——伟大往往蕴含在平凡的普通人身上。因此作者用最详细的笔墨来写这件事。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-8-2-12',
    type: 'short_answer',
    questionText: '分析阿长的人物形象。',
    answer: '阿长是一个典型的旧社会劳动妇女形象：1. 没有文化、粗俗——喜欢切切察察，睡觉摆成大字形，不讲究规矩；2. 迷信——有许多繁文缛节，如元旦吃福橘说吉利话；3. 热心善良——真诚地关心孩子，为"我"买来梦寐以求的《山海经》；4. 粗中有细——虽然粗俗，但记住了孩子的愿望并尽力满足；5. 勤劳朴实——任劳任怨地照顾家庭。作者以真实朴素的笔触写出了一个有缺点的善良人，使人物形象真实可信、感人至深。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-8-2-13',
    type: 'short_answer',
    questionText: '文中运用了什么写作手法来刻画阿长？',
    answer: '主要运用了先抑后扬（欲扬先抑）的写作手法。文章先写了阿长的诸多缺点和让"我"不喜欢的习惯：切切察察、睡觉摆大字形、谋害"我"的隐鼠、繁多的规矩等，这些都为后面写她买《山海经》的好事做铺垫和反衬。当读者和阿长建立了"不太喜欢"的印象后，她买来《山海经》的善良举动就更令人感动。先抑后扬使人物形象更加真实丰满，情感表达更加深沉有力。',
    difficulty: 3,
  },
  {
    questionKey: 'chinese-renjiao-8-2-14',
    type: 'short_answer',
    questionText: '"我"对阿长的情感态度发生了怎样的变化？这种变化说明了什么？',
    answer: '情感变化经历了三个阶段：1. 厌烦——对阿长的不良习惯感到厌烦（切切察察、睡姿等）；2. 敬佩——阿长买来《山海经》后，对她产生了"新的敬意"，认为她有"伟大的神力"；3. 怀念——成年后回忆往事，对阿长充满深切的怀念和感激。这种变化说明：1. 评判一个人不应只看表面，要看到本质上的善良；2. 平凡的人也可能做出令人敬佩的事；3. 童年的不理解和成年的感恩形成了鲜明对比，增强了文章的感染力。',
    difficulty: 3,
  },
  {
    questionKey: 'chinese-renjiao-8-2-15',
    type: 'short_answer',
    questionText: '文章开头写阿长的名字有什么用意？',
    answer: '文章开头交代"阿长"这个名字的由来：她不是鲁迅家的长辈，叫"长"只是前一个保姆的名字，后来一直沿用。这段关于名字的交代看似随意，实际上有深意：1. 说明了阿长卑微的地位——连真正的名字都没有；2. 暗示了阿长在社会上的边缘身份；3. 与结尾的怀念形成对比——一个地位卑微、连名字都不确定的人，却在作者心中留下了不可磨灭的印象。这种反差更加凸显了阿长善良品质的可贵。',
    difficulty: 3,
  },
  {
    questionKey: 'chinese-renjiao-8-2-16',
    type: 'short_answer',
    questionText: '阿长讲的"长毛的故事"有什么作用？',
    answer: '长毛的故事在文中的作用有：1. 展现了阿长的知识来源和认知水平——她的故事来自道听途说，反映了她没有文化的社会底层身份；2. 表现了阿长天真率直的性格——她讲得绘声绘色，自己居然也相信那些荒诞的事；3. 增加了文章的趣味性，使阿长形象更加鲜活；4. 为后文做铺垫——让读者了解阿长的局限性，使后面她买来《山海经》的行为更显珍贵和感人。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-8-2-17',
    type: 'short_answer',
    questionText: '分析"我"得到《山海经》时的心理描写。',
    answer: '当阿长把《山海经》递给"我"时，"我似乎遇着了一个霹雳，全体都震悚起来"。这个比喻极为生动，"霹雳"形容极度震惊的感觉。一个不识字的保姆居然买来了"我"梦寐以求的画册，这种意料之外的惊喜让"我"深受震撼。"这又使我发生新的敬意了，别人不肯做，或不能做的事，她却能够做成功。她确有伟大的神力"——用儿童天真的视角，将阿长的善良举动上升到"伟大的神力"，表达了由衷的敬佩和感激。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-8-2-18',
    type: 'short_answer',
    questionText: '结合全文，分析《阿长与山海经》表达了作者怎样的思想感情。',
    answer: '全文表达了作者对阿长深沉的怀念和感激之情。虽然阿长有种种缺点和让少年鲁迅不喜欢的习惯，但她的善良、热心和无私——尤其是买来《山海经》的举动——给"我"留下了永远温暖的记忆。文章以成年鲁迅的视角回忆童年往事，既有儿童时真实的喜厌，更有成年后的理解和感恩。结尾"仁厚黑暗的地母呵，愿在你怀里永安她的魂灵"一句，表达了最深沉的怀念和祝福。文章也暗示了对旧社会底层劳动妇女命运的关注和同情。',
    difficulty: 3,
  },

  // ---- matching 3题 ----
  {
    questionKey: 'chinese-renjiao-8-2-19',
    type: 'matching',
    questionText: '请将文中关于阿长的事件与其体现的性格特点连线匹配。',
    answer: '',
    explanation: '切切察察——爱传闲话；大字形睡姿——不拘小节；元旦塞福橘——迷信但真心祝愿；买《山海经》——善良热心。',
    difficulty: 1,
    pairs: '[["喜欢切切察察","爱传闲话、不拘小节"],["睡觉摆成大字形","粗俗不拘小节"],["元旦塞福橘说吉利话","迷信但心地善良"],["买来《山海经》","善良热心、关心孩子"]]',
  },
  {
    questionKey: 'chinese-renjiao-8-2-20',
    type: 'matching',
    questionText: '请将《朝花夕拾》中涉及的人物与其身份连线匹配。',
    answer: '',
    explanation: '阿长——保姆，藤野先生——日本老师，范爱农——朋友，寿镜吾——三味书屋的老师。',
    difficulty: 2,
    pairs: '[["阿长","保姆"],["藤野先生","日本留学时的老师"],["寿镜吾","三味书屋的老师"],["范爱农","作者的朋友"]]',
  },
  {
    questionKey: 'chinese-renjiao-8-2-21',
    type: 'matching',
    questionText: '请将《山海经》中的神话传说与其内容连线匹配。',
    answer: '',
    explanation: '精卫填海——小鸟填海，夸父追日——追赶太阳，愚公移山——移走大山，女娲补天——补好天塌之处。',
    difficulty: 2,
    pairs: '[["精卫填海","衔石填海"],["夸父追日","追逐太阳"],["愚公移山","搬走大山"],["女娲补天","修补天空"]]',
  },
];

// ========== 8-3 背影 (24题) ==========

const chapter8_3: RawQuestion[] = [
  // ---- choice 7题 ----
  {
    questionKey: 'chinese-renjiao-8-3-0',
    type: 'choice',
    questionText: '《背影》的作者是（）',
    answer: 'C',
    explanation: '《背影》是朱自清的名篇，选自其散文集，以车站送别为背景，以父亲背影为线索。',
    difficulty: 1,
    options: '["A. 老舍", "B. 鲁迅", "C. 朱自清", "D. 巴金"]',
  },
  {
    questionKey: 'chinese-renjiao-8-3-1',
    type: 'choice',
    questionText: '《背影》中"背影"出现的具体场景是（）',
    answer: 'B',
    explanation: '全文重点描写的是父亲在浦口车站为"我"送别时翻越月台去买橘子的背影。',
    difficulty: 1,
    options: '["A. 在家中", "B. 浦口车站", "C. 学校门口", "D. 码头"]',
  },
  {
    questionKey: 'chinese-renjiao-8-3-2',
    type: 'choice',
    questionText: '《背影》的线索是（）',
    answer: 'A',
    explanation: '全文以"背影"为线索，四次写到背影：开头的怀念、买橘子的背影、混入人群的背影、结尾的回忆。',
    difficulty: 1,
    options: '["A. 背影", "B. 橘子", "C. 火车", "D. 眼泪"]',
  },
  {
    questionKey: 'chinese-renjiao-8-3-3',
    type: 'choice',
    questionText: '父亲说"我买几个橘子去。你就在此地，不要走动。"这句话体现了（）',
    answer: 'D',
    explanation: '父亲要去爬月台买橘子，却叮嘱儿子不要走动，体现了他对儿子无微不至的关爱和照顾。',
    difficulty: 1,
    options: '["A. 父亲喜欢橘子", "B. 父亲想锻炼身体", "C. 父亲怕儿子跑丢", "D. 父亲对儿子的体贴关爱"]',
  },
  {
    questionKey: 'chinese-renjiao-8-3-4',
    type: 'choice',
    questionText: '文中写了"我"的几次流泪？其中在车站看到背影时的流泪是因为（）',
    answer: 'B',
    explanation: '在车站看到父亲买橘子时艰难攀爬月台的背影，"我"被父亲深沉的爱所感动而流泪。',
    difficulty: 1,
    options: '["A. 伤心", "B. 被父爱感动", "C. 疼痛", "D. 委屈"]',
  },
  {
    questionKey: 'chinese-renjiao-8-3-5',
    type: 'choice',
    questionText: '父亲攀爬月台的动作描写中，"攀"和"缩"两个动词准确写出了（）',
    answer: 'C',
    explanation: '"攀"写月台高，"缩"写父亲费力，两字生动表现了父亲年迈体胖、攀爬困难的情景，令人感动。',
    difficulty: 2,
    options: '["A. 父亲年轻力壮", "B. 月台很矮", "C. 父亲攀爬的困难和吃力", "D. 父亲动作熟练"]',
  },
  {
    questionKey: 'chinese-renjiao-8-3-6',
    type: 'choice',
    questionText: '"我"与父亲之间的情感在文中是怎样的？',
    answer: 'A',
    explanation: '文中少年"我"对父爱的理解经历了一个过程，从觉得父亲"聪明"的反语到被背影深深感动，体现了对父爱的理解深化。',
    difficulty: 2,
    options: '["A. 从不理解到理解，最终被父爱感动", "B. 始终深爱父亲", "C. 始终不理解父亲", "D. 父子关系冷淡"]',
  },

  // ---- fill 5题 ----
  {
    questionKey: 'chinese-renjiao-8-3-7',
    type: 'fill',
    questionText: '朱自清，字____，现代散文家、诗人、学者。代表作有散文《____》《荷塘月色》等。',
    answer: '佩弦；背影（或春）',
    acceptableAnswers: '["佩弦；背影","佩弦；春","佩弦；《背影》","佩弦；《春》"]',
    explanation: '朱自清（1898—1948），字佩弦。代表作散文有《背影》《春》《荷塘月色》等。',
    difficulty: 1,
  },
  {
    questionKey: 'chinese-renjiao-8-3-8',
    type: 'fill',
    questionText: '"他用两手____着上面，两脚再向上____"是描写父亲攀爬月台的动作。',
    answer: '攀；缩',
    explanation: '"攀着上面"写手用力抓，"缩"写脚收起，表现攀爬的艰难。',
    difficulty: 1,
  },
  {
    questionKey: 'chinese-renjiao-8-3-9',
    type: 'fill',
    questionText: '文章开头写道"我与父亲不相见已____余年了"。',
    answer: '二（两）',
    acceptableAnswers: '["二","两","二（两）"]',
    explanation: '开头点明与父亲不相见已两年多，奠定全文思念和感伤的感情基调。',
    difficulty: 1,
  },
  {
    questionKey: 'chinese-renjiao-8-3-10',
    type: 'fill',
    questionText: '父亲说："不要紧，他们去____！"这是在说自己的事。',
    answer: '不好',
    acceptableAnswers: '["不好","不好的"]',
    explanation: '祖母去世、父亲赋闲，家境困顿，但父亲在儿子面前仍表现得坚强乐观。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-8-3-11',
    type: 'fill',
    questionText: '文中"我最不能忘记的是他的____"。',
    answer: '背影',
    explanation: '这是全文的文眼，点出文章的写作对象——父亲的背影。',
    difficulty: 1,
  },

  // ---- short_answer 9题 ----
  {
    questionKey: 'chinese-renjiao-8-3-12',
    type: 'short_answer',
    questionText: '文章中"背影"出现了几次？每次出现的背景和作用是什么？',
    answer: '文中四次写到背影：1. 开头点题——"我最不能忘记的是他的背影"，奠定全文感情基调；2. 买橘子时——车站送别中父亲翻越月台去买橘子的背影，是全文描写的重点，是最感动人的场景；3. 离开时——父亲混入来来往往的人群中的背影，表现离别的不舍；4. 结尾回忆——读到父亲来信后回忆背影，深化思念之情。四次出现，层层深入，贯穿全文。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-8-3-13',
    type: 'short_answer',
    questionText: '请赏析文中描写父亲攀爬月台买橘子的段落。',
    answer: '这段文字用一系列准确的动词生动细致地描写了父亲攀爬月台的过程："两手攀着上面，两脚再向上缩，他肥胖的身子向左微倾，显出努力的样子"。"攀"写出月台的高和父亲吃力的程度；"缩"写脚难以够到的艰难；"微倾"写身体重心不稳；"努力的样子"是对整体姿态的概括。这些细节描写将父亲年迈体胖、行动不便但为了儿子甘愿费力的形象刻画得淋漓尽致，令人感动不已。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-8-3-14',
    type: 'short_answer',
    questionText: '"我那时真是聪明过分，总觉他说话不大漂亮"中"聪明"一词是什么用法？',
    answer: '"聪明"用的是反语，实际意思是"愚蠢"。少年"我"自以为比父亲聪明、见识广，觉得父亲说话做事不够精明，有些罗嗦（如与脚夫讲价钱、嘱托茶房等）。以成年后的视角来看，年少时对父爱的理解太肤浅了，现在回想起来充满了自责和愧疚。这种反语的运用增强了文章的感情深度。',
    difficulty: 3,
  },
  {
    questionKey: 'chinese-renjiao-8-3-15',
    type: 'short_answer',
    questionText: '文章为什么以"背影"为题？',
    answer: '以"背影"为题有多重含义和作用：1. "背影"是全文的线索，贯穿始末，使文章结构紧凑；2. 背影是父爱的象征——面对儿子的方向，父亲留给儿子的常常是默默离去的背影，这种无言的爱是最深沉的；3. 背影是最感人的瞬间——父亲艰难攀爬月台的背影定格成了永恒的画面；4. 以背影而非正面写父爱，角度新颖独特，避免了直白说教，更加含蓄深沉，更能打动读者。',
    difficulty: 3,
  },
  {
    questionKey: 'chinese-renjiao-8-3-16',
    type: 'short_answer',
    questionText: '文中写了"我"的四次流泪，分别是因为什么？',
    answer: '四次流泪分别是：1. 看到家庭困境（祖母去世、父亲赋闲）而伤心流泪；2. 看到父亲买橘子时攀爬月台的艰难背影而感动流泪；3. 父亲离开、混入人群时离别不舍的流泪；4. 读到父亲来信中"大去之期不远矣"而思念和悲伤的流泪。四次流泪各有原因，从伤心到感动到不舍到思念，情感逐步加深，表现了"我"对父爱理解的不断深化。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-8-3-17',
    type: 'short_answer',
    questionText: '父亲在文中是一个怎样的人物形象？',
    answer: '文中的父亲是一个慈爱、善良、坚强的传统父亲形象：1. 慈爱深厚——家境困顿、自身面临困难时，仍然处处为儿子着想，亲力亲为地送别、买橘子；2. 坚强隐忍——祖母去世、差事交卸的双重打击下，对儿子说"天无绝人之路"，表现了面对困境的坚强乐观；3. 传统沉默——不善用语言表达感情，把爱化作了实实在在的行动。这个形象代表了无数中国传统的父亲——不善言辞，但爱得深沉而伟大。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-8-3-18',
    type: 'short_answer',
    questionText: '"他再三嘱咐茶房，甚是仔细。但他终于不放心，怕茶房不妥帖"这两句话有什么表达效果？',
    answer: '这两句话看似矛盾："再三嘱咐"已经"甚是仔细"，但"终于不放心"，写出了父亲对儿子不放心的反复心理。一个"再三"，一个"终于"，写出了父亲关爱之深、牵挂之切。虽然知道茶房可以照应，但总是不放心，最终决定亲自送。这种反复犹豫、最终亲自送别的心理描写，真实地表现了父亲对儿子深沉的父爱。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-8-3-19',
    type: 'short_answer',
    questionText: '分析《背影》的叙事视角。',
    answer: '文章采用第一人称叙事，但又存在两个视角的转换：1. 当时的"我"（二十岁时的青年）——对父爱的理解还比较肤浅，觉得父亲不够聪明、说话不漂亮；2. 写作时的"我"（成年后的作者）——已经深刻理解了父爱的深沉，对年少时的不懂事感到愧疚。这种双重视角的运用，使文章的情感更加丰富：一方面如实记录了当时的真实感受，另一方面以现在的理解增加了回忆的深度和厚度。',
    difficulty: 3,
  },
  {
    questionKey: 'chinese-renjiao-8-3-20',
    type: 'short_answer',
    questionText: '简要分析《背影》的主题思想。',
    answer: '《背影》以车站送别为场景，以父亲的背影为线索，通过回忆的方式，真挚地表现了父子之间深沉而含蓄的亲情。文章不仅描写了父亲对儿子无微不至的关爱——翻越月台买橘子、反复叮嘱等细节，也表现了儿子从年少时对父爱的不理解到成年后的深深怀念和感恩。文章所表达的亲情之深挚，超越了具体的时间和场景，成为描写父爱的经典之作，感动了一代又一代读者。',
    difficulty: 2,
  },

  // ---- matching 3题 ----
  {
    questionKey: 'chinese-renjiao-8-3-21',
    type: 'matching',
    questionText: '请将文中四次出现"背影"与其对应的作用连线匹配。',
    answer: '',
    explanation: '开头的背影——点题，买橘子的背影——重点描写，人群中的背影——离别不舍，结尾的背影——深化怀念。',
    difficulty: 2,
    pairs: '[["开头的背影","点题，奠定感情基调"],["买橘子的背影","重点描写，最感人"],["人群中的背影","离别不舍，目送离去"],["结尾的背影","深化思念，首尾呼应"]]',
  },
  {
    questionKey: 'chinese-renjiao-8-3-22',
    type: 'matching',
    questionText: '请将朱自清的代表作品与其对应体裁连线匹配。',
    answer: '',
    explanation: '《背影》《春》《荷塘月色》是散文，《踪迹》是诗集。',
    difficulty: 1,
    pairs: '[["《背影》","散文"],["《春》","散文"],["《荷塘月色》","散文"],["《踪迹》","诗集"]]',
  },
  {
    questionKey: 'chinese-renjiao-8-3-23',
    type: 'matching',
    questionText: '请将文中父亲的语言与其表达的情感连线匹配。',
    answer: '',
    explanation: '"不要紧"——坚强乐观；"你就在此地"——关爱儿子；"我买几个橘子去"——体贴照顾；"大去之期不远矣"——感伤悲凉。',
    difficulty: 2,
    pairs: '[[""不要紧，他们去不好！"","坚强隐忍"],[""你就在此地，不要走动。"","关爱叮嘱"],[""我买几个橘子去。"","体贴照顾"],[""大去之期不远矣"","感伤悲凉"]]',
  },
];

// ========== 9-0 沁园春·雪 (18题) ==========

const chapter9_0: RawQuestion[] = [
  // ---- choice 5题 ----
  {
    questionKey: 'chinese-renjiao-9-0-0',
    type: 'choice',
    questionText: '《沁园春·雪》的作者是（）',
    answer: 'A',
    explanation: '《沁园春·雪》是毛泽东于1936年2月在陕北清涧县袁家沟创作的一首词。',
    difficulty: 1,
    options: '["A. 毛泽东", "B. 苏轼", "C. 辛弃疾", "D. 陆游"]',
  },
  {
    questionKey: 'chinese-renjiao-9-0-1',
    type: 'choice',
    questionText: '"沁园春"是这首词的（）',
    answer: 'B',
    explanation: '"沁园春"是词牌名，规定词的格律；"雪"是这首词的题目。',
    difficulty: 1,
    options: '["A. 题目", "B. 词牌名", "C. 曲牌名", "D. 作者名"]',
  },
  {
    questionKey: 'chinese-renjiao-9-0-2',
    type: 'choice',
    questionText: '下列词语中，注音正确的一项是（）',
    answer: 'C',
    explanation: '"分外妖娆"中"分"读 fèn（格外），"妖娆"读 yāo ráo；"稍逊风骚"中"逊"读 xùn，"骚"读 sāo。',
    difficulty: 1,
    options: '["A. 竞折腰(zhé yāo)", "B. 分外(fēn)妖娆", "C. 分外(fèn)妖娆", "D. 风骚(shāo)"]',
  },
  {
    questionKey: 'chinese-renjiao-9-0-3',
    type: 'choice',
    questionText: '"江山如此多娇，引无数英雄竞折腰"中"折腰"的意思是（）',
    answer: 'D',
    explanation: '"折腰"原意为弯腰行礼，这里引申为倾倒、折服，指英雄们为美丽的江山而倾心。',
    difficulty: 1,
    options: '["A. 弯腰捡东西", "B. 身体弯下去", "C. 低头认输", "D. 倾倒、折服"]',
  },
  {
    questionKey: 'chinese-renjiao-9-0-4',
    type: 'choice',
    questionText: '《沁园春·雪》中"惜秦皇汉武，略输文采"的"惜"字包含的感情是（）',
    answer: 'A',
    explanation: '"惜"是"可惜、惋惜"的意思，对秦始皇、汉武帝武功赫赫但在文治方面略有不足表示惋惜，既有肯定也有遗憾。',
    difficulty: 2,
    options: '["A. 惋惜（既有肯定也有遗憾）", "B. 痛恨", "C. 赞美", "D. 鄙视"]',
  },

  // ---- fill 4题 ----
  {
    questionKey: 'chinese-renjiao-9-0-5',
    type: 'fill',
    questionText: '《沁园春·雪》中"须晴日，看红装素裹，____"是描写雪后晴天的美景。',
    answer: '分外妖娆',
    explanation: '"红装素裹"比喻红日与白雪交相辉映的景象，"分外妖娆"形容景色格外美丽。',
    difficulty: 1,
  },
  {
    questionKey: 'chinese-renjiao-9-0-6',
    type: 'fill',
    questionText: '"山舞银蛇，原驰蜡象"运用了比喻和____的修辞手法。',
    answer: '拟人（对偶）',
    acceptableAnswers: '["拟人","对偶","拟人和对偶","对偶和拟人"]',
    explanation: '将群山比作舞动的银蛇，将高原比作奔驰的白象，同时运用了拟人和对偶。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-9-0-7',
    type: 'fill',
    questionText: '"俱往矣，数____人物，还看____。"',
    answer: '风流；今朝',
    explanation: '意思是：一切都已成为过去，要论真正的英雄人物，还要看今天的人民。',
    difficulty: 1,
  },
  {
    questionKey: 'chinese-renjiao-9-0-8',
    type: 'fill',
    questionText: '"北国风光，千里冰封，万里雪飘"这三句中运用了____和____的修辞手法。',
    answer: '对偶；互文',
    acceptableAnswers: '["对偶；互文","互文；对偶"]',
    explanation: '"千里冰封，万里雪飘"是对偶，也是互文（千里万里都冰封雪飘），极写北国雪景的壮阔。',
    difficulty: 2,
  },

  // ---- short_answer 7题 ----
  {
    questionKey: 'chinese-renjiao-9-0-9',
    type: 'short_answer',
    questionText: '请赏析"山舞银蛇，原驰蜡象"一句。',
    answer: '这两句运用了比喻、拟人和对偶的修辞手法。将绵延起伏的群山比作舞动的银色长蛇，将覆盖白雪的高原比作奔驰的白色大象。"舞"和"驰"用拟人手法，赋予群山和高原以生命和动感。对偶工整，一"舞"一"驰"，一"蛇"一"象"，动静结合，将本来静止的雪景写得生机勃勃、气势磅礴，展现了北国雪景壮美生动的画面。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-9-0-10',
    type: 'short_answer',
    questionText: '《沁园春·雪》的上阕和下阕各写了什么内容？',
    answer: '上阕主要写景：描绘了北国壮丽的雪景，从"千里冰封，万里雪飘"的宏大远景到"山舞银蛇，原驰蜡象"的生动近景，再到想象中"红装素裹，分外妖娆"的晴天美景，展现了祖国山河的壮丽多姿。下阕主要议论抒情：由景生情，评点了秦皇汉武、唐宗宋祖和成吉思汗等历代帝王，以"惜"字领起，指出他们的不足，最后以"俱往矣，数风流人物，还看今朝"收束，表达了诗人对当代革命英雄的自信和豪情。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-9-0-11',
    type: 'short_answer',
    questionText: '"俱往矣，数风流人物，还看今朝"表达了怎样的思想感情？',
    answer: '这三句的意思是：过去的一切都已经过去了，真正称得上英雄人物的，还要看当今时代的人们。表达了毛泽东的历史观：历史上的帝王虽有功绩，但也有不足，真正的英雄是当今时代的革命者和人民群众。这三句充满了革命乐观主义精神和历史使命感，展现了诗人博大的胸襟和坚定的自信，是全词的画龙点睛之笔。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-9-0-12',
    type: 'short_answer',
    questionText: '下阕中为什么要评论历代帝王？这种评论体现了什么态度？',
    answer: '评论历代帝王的作用有：1. 承上启下——由"江山如此多娇，引无数英雄竞折腰"过渡到对英雄的具体评论；2. 借古论今——通过评价历史上的帝王，为最后赞美今朝人物做铺垫；3. 体现唯物史观——以"惜"字统领，既肯定了这些帝王武功显赫的功绩（"略输""稍逊"说明只是略有不足），又指出他们在文治方面或在时代局限性上的不足。"惜"字包含惋惜之情，并非全盘否定，体现了辩证的历史态度。',
    difficulty: 3,
  },
  {
    questionKey: 'chinese-renjiao-9-0-13',
    type: 'short_answer',
    questionText: '"须晴日，看红装素裹，分外妖娆"是实写还是虚写？有什么作用？',
    answer: '这是虚写（想象），不是实写。诗人描写的是眼前的雪景，但想象了雪后晴天时红日白雪交相辉映的壮美景象。"红装素裹"以"红装"喻红日，以"素裹"喻白雪，把自然景色比作穿红披白的美丽女子。"分外妖娆"形容景色格外迷人。虚写的作用：1. 丰富了雪景描写的层次，从实景到虚景；2. 增添了想象的浪漫色彩；3. 表达了对祖国山河的热爱和赞美之情。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-9-0-14',
    type: 'short_answer',
    questionText: '《沁园春·雪》在语言风格上有什么特点？',
    answer: '语言风格特点主要有：1. 气势磅礴——"千里冰封，万里雪飘""山舞银蛇，原驰蜡象"等句雄浑壮阔；2. 用词精炼——"封""飘""舞""驰""竞"等动词准确有力，"惜""略输""稍逊""只识"等词精当含蓄；3. 意境开阔——上阕写景跨越时空，下阕评论纵贯千年，视野极其宏大；4. 情景交融——在壮美雪景中自然引出对历史的评论和对未来的展望。整体风格雄健豪放，充分体现了豪放词的特点。',
    difficulty: 3,
  },
  {
    questionKey: 'chinese-renjiao-9-0-15',
    type: 'short_answer',
    questionText: '"望长城内外，惟余莽莽；大河上下，顿失滔滔"中的"望"和"顿"有什么表达效果？',
    answer: '"望"字统领了以下几句，表明是从高处远望所见，有居高临下、俯瞰大地之势。"顿"字是"顿时"的意思，写大河迅速结冰，突出了天气严寒和变化之快。一"望"一"顿"，一静一动：长城内外的莽莽雪原是静景，大河上下冰封是变化的瞬间。这两个字将空间上的广阔和时间上的骤变结合在一起，强化了北国雪景雄浑壮阔的意境。',
    difficulty: 2,
  },

  // ---- matching 2题 ----
  {
    questionKey: 'chinese-renjiao-9-0-16',
    type: 'matching',
    questionText: '请将《沁园春·雪》中涉及的历代帝王与其朝代连线匹配。',
    answer: '',
    explanation: '秦始皇——秦朝，汉武帝——汉朝，唐太宗——唐朝，宋太祖——宋朝，成吉思汗——元朝。',
    difficulty: 1,
    pairs: '[["秦皇（秦始皇）","秦朝"],["汉武（汉武帝）","汉朝"],["唐宗（唐太宗）","唐朝"],["宋祖（宋太祖）","宋朝"],["成吉思汗","元朝（蒙古）"]]',
  },
  {
    questionKey: 'chinese-renjiao-9-0-17',
    type: 'matching',
    questionText: '请将词的下阕中的词语与其含义连线匹配。',
    answer: '',
    explanation: '"略输"——稍微欠缺，"稍逊"——略有不及，"风骚"——文学才华，"弯弓射大雕"——只重武功。',
    difficulty: 2,
    pairs: '[["略输","稍微欠缺"],["稍逊","略有不及"],["风骚","文学才华"],["只识弯弓射大雕","只重视武力"]]',
  },
];

// ========== 9-1 我爱这土地 (16题) ==========

const chapter9_1: RawQuestion[] = [
  // ---- choice 5题 ----
  {
    questionKey: 'chinese-renjiao-9-1-0',
    type: 'choice',
    questionText: '《我爱这土地》的作者是（）',
    answer: 'A',
    explanation: '艾青，原名蒋正涵，现代著名诗人。此诗写于1938年11月抗日战争时期。',
    difficulty: 1,
    options: '["A. 艾青", "B. 徐志摩", "C. 闻一多", "D. 郭沫若"]',
  },
  {
    questionKey: 'chinese-renjiao-9-1-1',
    type: 'choice',
    questionText: '"为什么我的眼里常含泪水？因为我对这土地爱得深沉"运用了什么修辞手法？',
    answer: 'B',
    explanation: '先设问再回答，是设问修辞。通过问答强化了感情的深度。',
    difficulty: 1,
    options: '["A. 比喻", "B. 设问", "C. 反问", "D. 夸张"]',
  },
  {
    questionKey: 'chinese-renjiao-9-1-2',
    type: 'choice',
    questionText: '诗中"嘶哑的喉咙"象征着（）',
    answer: 'C',
    explanation: '"嘶哑"说明歌唱者已经倾尽全力，象征在苦难中挣扎、不屈不挠的爱国者和整个苦难的民族。',
    difficulty: 2,
    options: '["A. 鸟生病了", "B. 鸟的声音不好听", "C. 苦难中不屈的爱国者", "D. 疲劳的农民"]',
  },
  {
    questionKey: 'chinese-renjiao-9-1-3',
    type: 'choice',
    questionText: '《我爱这土地》创作的时代背景是（）',
    answer: 'D',
    explanation: '此诗创作于1938年11月，正值抗日战争时期，表达了诗人对祖国深沉的爱。',
    difficulty: 1,
    options: '["A. 五四运动时期", "B. 解放战争时期", "C. 土地革命时期", "D. 抗日战争时期"]',
  },
  {
    questionKey: 'chinese-renjiao-9-1-4',
    type: 'choice',
    questionText: '艾青的原名是（）',
    answer: 'A',
    explanation: '艾青（1910—1996），原名蒋正涵（蒋海澄），号海澄，浙江金华人。',
    difficulty: 1,
    options: '["A. 蒋正涵", "B. 蒋光慈", "C. 蒋兆和", "D. 蒋介石"]',
  },

  // ---- fill 3题 ----
  {
    questionKey: 'chinese-renjiao-9-1-5',
    type: 'fill',
    questionText: '"假如我是一只鸟，我也应该用____的喉咙歌唱。"',
    answer: '嘶哑',
    explanation: '"嘶哑"是整首诗的关键词之一，表明歌唱者虽已精疲力竭但仍在歌唱，表达了深沉的爱国之情。',
    difficulty: 1,
  },
  {
    questionKey: 'chinese-renjiao-9-1-6',
    type: 'fill',
    questionText: '艾青，原名____，现代著名诗人，代表作有《____》《大堰河——我的保姆》等。',
    answer: '蒋正涵；我爱这土地（或光的赞歌）',
    acceptableAnswers: '["蒋正涵；我爱这土地","蒋正涵；光的赞歌","蒋正涵（蒋海澄）；我爱这土地"]',
    explanation: '艾青代表作还有《大堰河——我的保姆》《向太阳》《光的赞歌》等。',
    difficulty: 1,
  },
  {
    questionKey: 'chinese-renjiao-9-1-7',
    type: 'fill',
    questionText: '"这永远____着我们的悲愤的河流，这无止息地____着我们的激怒的风"。',
    answer: '汹涌；吹刮',
    explanation: '"永远汹涌着的河流"和"无止息地吹刮着的风"象征人民永不平息的愤怒和反抗。',
    difficulty: 2,
  },

  // ---- short_answer 6题 ----
  {
    questionKey: 'chinese-renjiao-9-1-8',
    type: 'short_answer',
    questionText: '请分析《我爱这土地》中鸟的形象及其象征意义。',
    answer: '诗中的"鸟"是诗人自我的形象化身，也是千千万万爱国者的象征。这只鸟即使喉咙嘶哑也要歌唱，表明它已倾尽全力、不懈不弃，象征着在民族危亡之际，爱国者不计代价、不屈不挠地为祖国歌唱的精神。"然后我死了，连羽毛也腐烂在土地里面"表示至死不渝的热爱和忠诚——连死后也要融入土地。鸟的形象虽小，但精神境界崇高，是爱国主义精神的生动写照。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-9-1-9',
    type: 'short_answer',
    questionText: '诗中"土地""河流""风""黎明"分别象征什么？',
    answer: '"土地"象征多灾多难的祖国大地；"河流"象征人民心中汹涌不息的悲愤；"风"象征人民无止息的愤怒和反抗；"黎明"象征胜利和希望的曙光。这四个意象构成了一个完整的象征体系：祖国虽在苦难中，但人民的愤怒在积聚，希望的光芒终将到来。通过这些意象，诗人表达了在民族危亡之际对祖国深沉的爱和对胜利的坚定信念。',
    difficulty: 3,
  },
  {
    questionKey: 'chinese-renjiao-9-1-10',
    type: 'short_answer',
    questionText: '"为什么我的眼里常含泪水？因为我对这土地爱得深沉"这两句在全文中有什么作用？',
    answer: '这两句是全诗的高潮和主旨句。运用设问的手法，先提出问题，再以直抒胸臆的方式回答，将全诗的情感推向了最高点。这两句的作用有：1. 点明主题——对土地（祖国）深沉的爱是全诗的核心情感；2. 感情升华——从鸟的歌唱升华为人的直白告白，情感更加直接、强烈；3. 首尾呼应——与开头"假如我是一只鸟"形成呼应；4. 以反问的方式收束全诗，余韵悠长，令人深思。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-9-1-11',
    type: 'short_answer',
    questionText: '"连羽毛也腐烂在土地里面"一句表达了什么感情？',
    answer: '这句话表达了诗人对祖国至死不渝的热爱。即使生命终结，也要将自己的一切（连羽毛都）融入祖国的土地，化作泥土的一部分。这种"落叶归根"式的选择，超越了生命的意义，将个人与祖国大地融为一体，表达了最深沉、最彻底的爱国之情。这种表达方式含蓄而强烈，感人至深。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-9-1-12',
    type: 'short_answer',
    questionText: '简述《我爱这土地》的主题思想。',
    answer: '《我爱这土地》创作于抗日战争时期，诗人以一只用嘶哑喉咙歌唱的鸟为意象，表达了对祖国深沉而痛苦的爱。诗中描绘的土地、河流、风、黎明等意象，构成了一个多灾多难但充满希望的祖国形象。全诗表达了在民族危亡之际，诗人对祖国的无限热爱、对人民苦难的深切同情、对侵略者的愤怒谴责，以及对抗战胜利的坚定信念。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-9-1-13',
    type: 'short_answer',
    questionText: '分析《我爱这土地》的意象运用特点。',
    answer: '意象运用特点有：1. 核心意象——"鸟"贯穿全诗，作为抒情主体；2. 意象群——土地、河流、风、黎明构成完整的意象体系；3. 修饰语赋予意象感情色彩——"被暴风雨所打击着的土地"写出祖国遭受侵略，"悲愤的河流""激怒的风"写出人民的愤怒；4. 意象虚实结合——有具体的鸟、土地，也有象征性的黎明；5. 意象从小到大，从具体到抽象，层层推进，最终汇聚为对土地深沉的爱。意象运用精当、含蓄、有力。',
    difficulty: 3,
  },

  // ---- matching 2题 ----
  {
    questionKey: 'chinese-renjiao-9-1-14',
    type: 'matching',
    questionText: '请将《我爱这土地》中的意象与其对应的象征意义连线匹配。',
    answer: '',
    explanation: '土地——多灾多难的祖国，河流——人民的悲愤，风——人民的愤怒，黎明——胜利与希望。',
    difficulty: 1,
    pairs: '[["被暴风雨打击着的土地","遭受苦难的祖国"],["悲愤的河流","人民心中的悲愤"],["激怒的风","人民的愤怒与反抗"],["来自林间的无比温柔的黎明","胜利与希望的曙光"]]',
  },
  {
    questionKey: 'chinese-renjiao-9-1-15',
    type: 'matching',
    questionText: '请将艾青的代表作品与其体裁连线匹配。',
    answer: '',
    explanation: '《我爱这土地》《大堰河——我的保姆》是诗歌，《向太阳》是长诗。',
    difficulty: 1,
    pairs: '[["《我爱这土地》","自由体诗歌"],["《大堰河——我的保姆》","自由体诗歌"],["《向太阳》","长诗"]]',
  },
];

// ========== 9-2 乡愁 (14题) ==========

const chapter9_2: RawQuestion[] = [
  // ---- choice 4题 ----
  {
    questionKey: 'chinese-renjiao-9-2-0',
    type: 'choice',
    questionText: '《乡愁》的作者是（）',
    answer: 'B',
    explanation: '余光中，台湾著名诗人、散文家。此诗写于1972年，表达了对祖国大陆的思念。',
    difficulty: 1,
    options: '["A. 艾青", "B. 余光中", "C. 舒婷", "D. 顾城"]',
  },
  {
    questionKey: 'chinese-renjiao-9-2-1',
    type: 'choice',
    questionText: '《乡愁》中作者选取了四个意象来表现乡愁，按时间顺序排列正确的是（）',
    answer: 'A',
    explanation: '邮票（小时候—母子分离）、船票（长大后—夫妻分离）、坟墓（后来—母子永别）、海峡（现在—家国之痛）。',
    difficulty: 1,
    options: '["A. 邮票—船票—坟墓—海峡", "B. 海峡—邮票—船票—坟墓", "C. 墓坟—邮票—海峡—船票", "D. 船票—邮票—坟墓—海峡"]',
  },
  {
    questionKey: 'chinese-renjiao-9-2-2',
    type: 'choice',
    questionText: '"乡愁是一枚小小的邮票"中"小小的"和"一枚"有什么表达效果？',
    answer: 'D',
    explanation: '"小小的"和"一枚"强调了邮票的微小，与"乡愁"的深沉形成反差，以小见大，使乡愁具体可感。',
    difficulty: 2,
    options: '["A. 说明邮票不值钱", "B. 说明乡愁很轻", "C. 强调邮票的珍贵", "D. 以小见大，使乡愁具体可感"]',
  },
  {
    questionKey: 'chinese-renjiao-9-2-3',
    type: 'choice',
    questionText: '《乡愁》最后一节将乡愁比作"一湾浅浅的海峡"，表达了（）',
    answer: 'B',
    explanation: '"浅浅的海峡"阻隔了两岸，表达了作者对祖国大陆的思念和两岸分离的痛楚，乡愁从个人上升到民族。',
    difficulty: 2,
    options: '["A. 对大海的喜爱", "B. 对祖国大陆的思念和分离之痛", "C. 对旅行的向往", "D. 对地理知识的介绍"]',
  },

  // ---- fill 3题 ----
  {
    questionKey: 'chinese-renjiao-9-2-4',
    type: 'fill',
    questionText: '"乡愁是____的____"，小时候的乡愁与邮票有关。',
    answer: '一枚；小小的',
    acceptableAnswers: '["一枚；小小的","小小；一枚"]',
    explanation: '"乡愁是一枚小小的邮票"，以邮票象征母子之间的书信联系和思念。',
    difficulty: 1,
  },
  {
    questionKey: 'chinese-renjiao-9-2-5',
    type: 'fill',
    questionText: '余光中，____著名诗人、散文家，被誉为"____"。',
    answer: '台湾；乡愁诗人（或以乡愁诗著称）',
    acceptableAnswers: '["台湾；乡愁诗人","台湾；以乡愁诗著称"]',
    explanation: '余光中一生从事诗歌、散文、评论、翻译，以乡愁诗最为著名。',
    difficulty: 1,
  },
  {
    questionKey: 'chinese-renjiao-9-2-6',
    type: 'fill',
    questionText: '"而现在，乡愁是一湾____的____。"',
    answer: '浅浅；海峡',
    explanation: '"浅浅的海峡"象征台湾海峡，虽浅却阻隔了两岸骨肉同胞，表达了深切的思念之痛。',
    difficulty: 1,
  },

  // ---- short_answer 5题 ----
  {
    questionKey: 'chinese-renjiao-9-2-7',
    type: 'short_answer',
    questionText: '《乡愁》中四个意象分别对应人生哪四个阶段？分别表达了怎样的乡愁？',
    answer: '四个阶段和对应乡愁：1. 小时候——邮票，母子分离的乡愁，这是离家的最初体验；2. 长大后——船票，夫妻分离的乡愁，这是外出谋生的离愁；3. 后来——坟墓，母子永别的乡愁，这是生离死别的悲痛；4. 现在——海峡，家国之痛的乡愁，这是两岸分离的民族之痛。四个阶段从个人到家庭再到国家，乡愁的范围不断扩大，情感层层递进。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-9-2-8',
    type: 'short_answer',
    questionText: '分析《乡愁》的结构特点和修辞手法。',
    answer: '结构特点：全诗共四节，每节格式相同，"乡愁是……（量词）（形容词）的（意象）"句式反复出现，形成回环往复的音乐美感。修辞手法：1. 反复——"乡愁是"反复出现，强化情感；2. 比喻——将抽象的乡愁分别比作邮票、船票、坟墓、海峡四个具体可感的意象；3. 叠词——"小小的""窄窄的""矮矮的""浅浅的"增强了音乐美和节奏感。整首诗形式整齐、节奏和谐、情感深沉。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-9-2-9',
    type: 'short_answer',
    questionText: '"浅浅的海峡"中"浅浅"一词有什么深意？',
    answer: '"浅浅"表面上是描述海峡的地理特征，但在诗中有深层的含义：1. 反衬——海峡虽"浅浅"却难以逾越，地理上很近，政治上却分离，形成反差，使痛感更加深重；2. 渴望——"浅浅"暗示回归并不难，只要有统一的心愿，"浅浅"的海峡终能跨越；3. 以轻写重——用轻松的语气写沉重的主题，更显出内心之痛。这"浅浅"二字，写出了诗人对两岸统一的热切期望。',
    difficulty: 3,
  },
  {
    questionKey: 'chinese-renjiao-9-2-10',
    type: 'short_answer',
    questionText: '《乡愁》是怎样将抽象的情感化为具体的意象的？',
    answer: '诗人将"乡愁"这一抽象的情感通过四个比喻化为具体可感的意象：邮票——寄信寄情，联系母子；船票——乘船远行，联系夫妻；坟墓——生死之隔，联系母子永别；海峡——两岸分离，联系家国之痛。每个意象都是生活中最普通的事物，却承载了最深沉的情感。由近及远、由小到大、由个人到国家，层层推进，将个人之愁升华为民族之愁。以具体写抽象，以小见大，使读者感同身受。',
    difficulty: 3,
  },
  {
    questionKey: 'chinese-renjiao-9-2-11',
    type: 'short_answer',
    questionText: '简述《乡愁》的主题思想。',
    answer: '《乡愁》以时空为序，选取了邮票、船票、坟墓、海峡四个意象，分别对应人生的四个阶段（童年母子分离、青年夫妻分离、中年母子永别、现在两岸分离），层层递进地表现了诗人对故乡、对亲人、对祖国大陆的深切思念。全诗将个人的乡愁升华为民族的乡愁、时代的乡愁，表达了海峡两岸人民渴望统一的共同心愿，意境深远，感情真挚，是当代诗歌中广为传诵的名篇。',
    difficulty: 2,
  },

  // ---- matching 2题 ----
  {
    questionKey: 'chinese-renjiao-9-2-12',
    type: 'matching',
    questionText: '请将《乡愁》中的四个意象与其对应的乡愁类型连线匹配。',
    answer: '',
    explanation: '邮票—母子分离之愁，船票—夫妻分离之愁，坟墓—生死永别之痛，海峡—家国分离之痛。',
    difficulty: 1,
    pairs: '[["邮票","母子分离的乡愁"],["船票","夫妻分离的乡愁"],["坟墓","生死永别的乡愁"],["海峡","家国分离的乡愁"]]',
  },
  {
    questionKey: 'chinese-renjiao-9-2-13',
    type: 'matching',
    questionText: '请将余光中的作品与其对应体裁连线匹配。',
    answer: '',
    explanation: '《乡愁》是诗歌，《听听那冷雨》是散文，《望乡的牧神》是散文集。',
    difficulty: 2,
    pairs: '[["《乡愁》","诗歌"],["《听听那冷雨》","散文"],["《望乡的牧神》","散文集"]]',
  },
];

// ========== 9-3 敬业与乐业 (24题) ==========

const chapter9_3: RawQuestion[] = [
  // ---- choice 7题 ----
  {
    questionKey: 'chinese-renjiao-9-3-0',
    type: 'choice',
    questionText: '《敬业与乐业》的作者是（）',
    answer: 'A',
    explanation: '梁启超，字卓如，号任公，近代思想家、教育家、学者。',
    difficulty: 1,
    options: '["A. 梁启超", "B. 康有为", "C. 谭嗣同", "D. 严复"]',
  },
  {
    questionKey: 'chinese-renjiao-9-3-1',
    type: 'choice',
    questionText: '梁启超的号是（）',
    answer: 'B',
    explanation: '梁启超（1873—1929），字卓如，号任公，别号饮冰室主人，广东新会人。',
    difficulty: 1,
    options: '["A. 卓如", "B. 任公", "C. 饮冰室主人", "D. 新会人"]',
  },
  {
    questionKey: 'chinese-renjiao-9-3-2',
    type: 'choice',
    questionText: '《敬业与乐业》是一篇（）',
    answer: 'D',
    explanation: '《敬业与乐业》是梁启超的一篇演讲稿，属于议论文，论述了敬业和乐业的重要性。',
    difficulty: 1,
    options: '["A. 记叙文", "B. 说明文", "C. 散文", "D. 议论文（演讲稿）"]',
  },
  {
    questionKey: 'chinese-renjiao-9-3-3',
    type: 'choice',
    questionText: '文章中"百行业为先，万恶懒为首"主要强调了（）',
    answer: 'B',
    explanation: '这句话强调各行各业都应敬业为先，懒惰是一切罪恶的根源，论证了敬业的重要性。',
    difficulty: 1,
    options: '["A. 读书最重要", "B. 敬业为先、反对懒惰", "C. 勤奋赚钱", "D. 任何职业都好"]',
  },
  {
    questionKey: 'chinese-renjiao-9-3-4',
    type: 'choice',
    questionText: '"主一无适便是敬"这句话中"主一无适"的意思是（）',
    answer: 'C',
    explanation: '"主一无适"是朱熹的解释，意思是专心致志于某一件事，不三心二意。',
    difficulty: 2,
    options: '["A. 只有一个主人", "B. 没有合适的事做", "C. 专心致志，不三心二意", "D. 只有唯一的选择"]',
  },
  {
    questionKey: 'chinese-renjiao-9-3-5',
    type: 'choice',
    questionText: '文章认为"乐业"的前提是什么？',
    answer: 'A',
    explanation: '文章论述的逻辑是先敬业后乐业，只有敬业才能从工作中找到乐趣，所以敬业是乐业的前提。',
    difficulty: 2,
    options: '["A. 敬业", "B. 有兴趣", "C. 赚大钱", "D. 轻松的工作"]',
  },
  {
    questionKey: 'chinese-renjiao-9-3-6',
    type: 'choice',
    questionText: '文中引用的"知之者不如好之者，好之者不如乐之者"出自（）',
    answer: 'D',
    explanation: '这句话出自《论语·雍也》，是孔子的话，强调从了解一件事到喜欢一件事再到以之为乐的层次递进。',
    difficulty: 1,
    options: '["A. 《孟子》", "B. 《庄子》", "C. 《老子》", "D. 《论语》"]',
  },

  // ---- fill 5题 ----
  {
    questionKey: 'chinese-renjiao-9-3-7',
    type: 'fill',
    questionText: '梁启超，字____，号____，近代思想家、政治家、教育家。',
    answer: '卓如；任公',
    explanation: '梁启超是中国近代维新派的代表人物，与康有为共同发起"公车上书"和戊戌变法。',
    difficulty: 1,
  },
  {
    questionKey: 'chinese-renjiao-9-3-8',
    type: 'fill',
    questionText: '《敬业与乐业》提出全文的中心论点是：____是人类生活的不二法门。',
    answer: '敬业乐业',
    acceptableAnswers: '["敬业乐业","敬业与乐业"]',
    explanation: '文章开头就明确提出"敬业乐业"四个字，是人类生活的不二法门，是全文的中心论点。',
    difficulty: 1,
  },
  {
    questionKey: 'chinese-renjiao-9-3-9',
    type: 'fill',
    questionText: '"____是人类合理的生活"，这是文章的结论。',
    answer: '责任心和趣味',
    acceptableAnswers: '["责任心和趣味","责任心","责任心与趣味"]',
    explanation: '文章结尾总结说"责任心"就是敬业，"趣味"就是乐业，两者合起来就是人类合理的生活。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-9-3-10',
    type: 'fill',
    questionText: '文章中引用《庄子》中的话"____，不思其者也"来论述做事要专心。',
    answer: '用志不分',
    explanation: '"用志不分，乃凝于神"出自《庄子·达生》，意思是用心专一不分散，精神就能高度集中。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-9-3-11',
    type: 'fill',
    questionText: '《敬业与乐业》是一篇____（文体），具有鲜明的____色彩。',
    answer: '议论文（演讲稿）；口语化（演讲）',
    acceptableAnswers: '["议论文；口语","议论文（演讲稿）；口语","议论文；演讲"]',
    explanation: '此文是演讲稿形式的议论文，语言口语化，有很强的说服力和感染力。',
    difficulty: 2,
  },

  // ---- short_answer 9题 ----
  {
    questionKey: 'chinese-renjiao-9-3-12',
    type: 'short_answer',
    questionText: '《敬业与乐业》的论证思路是怎样的？',
    answer: '全文的论证思路清晰：首先提出中心论点"敬业乐业是人类生活的不二法门"；然后分三个方面进行论述：1. 有业之必要——论述要先有正当的职业；2. 敬业之重要——论述要对所从事的职业尽职尽责；3. 乐业之可贵——论述要从职业中找到乐趣。最后总结全文，指出责任心和趣味是合理的生活，勉励大家敬业乐业。全文采用"总—分—总"的结构，层层深入，逻辑严密。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-9-3-13',
    type: 'short_answer',
    questionText: '文章中是如何论证"有业之必要"的？',
    answer: '文章通过举例和道理论证来论述有业的必要性：1. 引用孔子的话"饱食终日，无所用心，难矣哉"说明无业之人的可悲；2. 引用百丈禅师"一日不做事，一日不吃饭"的例子说明人必须做事；3. 从反面论证，指出没有职业的人难以在社会上立足。通过正反对比和引用论证，有力地说明了人人都应该有正当的职业。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-9-3-14',
    type: 'short_answer',
    questionText: '文章运用了哪些论证方法？请举例说明。',
    answer: '主要论证方法有：1. 举例论证——如百丈禅师"一日不做事，一日不吃饭"说明做事的重要性；2. 道理论证（引用论证）——引用孔子"饱食终日，无所用心"、《庄子》"用志不分"等阐明道理；3. 对比论证——将敬业与不敬业的态度进行对比，将苦乐两种人生观进行对比。多种论证方法的综合运用，使论点鲜明有力，增强了文章的说服力。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-9-3-15',
    type: 'short_answer',
    questionText: '"敬业"在文中包含哪几层含义？',
    answer: '"敬业"包含几层含义：1. 专一——"主一无适便是敬"，即对自己的职业专心致志，不三心二意；2. 责任——对自己的工作尽职尽责，把职业当作自己的责任和使命；3. 尊重——对自己的职业有尊重之心，不轻视任何职业。文章强调无论什么职业，只要敬业就是有价值的。这些论述告诉读者，敬业不仅是一种工作态度，更是一种人生修养。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-9-3-16',
    type: 'short_answer',
    questionText: '文章说"凡职业没有不是神圣的，所以凡职业没有不是可敬的"这句话的意思和道理是什么？',
    answer: '这句话的意思是任何职业都是神圣的、值得尊敬的。道理在于：社会分工不同，但每个岗位都有其不可替代的价值，没有高低贵贱之分。医生救死扶伤是神圣的，环卫工人清洁城市同样是神圣的。只要尽职尽责地做好本职工作，就值得尊敬。这一观点体现了人人平等的社会价值观，鼓励人们尊重一切正当劳动。',
    explanation: '这是文章的核心观点之一，强调职业平等，反对职业歧视。',
    difficulty: 3,
  },
  {
    questionKey: 'chinese-renjiao-9-3-17',
    type: 'short_answer',
    questionText: '文章是怎样论述"乐业"的？',
    answer: '文章通过引用名言和讲道理来论述乐业：1. 引用孔子"知之者不如好之者，好之者不如乐之者"，说明从了解到喜欢再到以之为乐的境界递进；2. 提出工作是免不了的，与其苦做不如乐做，从工作中寻找趣味；3. 指出职业趣味在于责任心完成后的"乐"，以及从中获得的成就感。论证层层深入，先说理后勉励，具有较强的说服力。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-9-3-18',
    type: 'short_answer',
    questionText: '《敬业与乐业》的语言有什么特点？',
    answer: '作为一篇演讲稿，语言具有鲜明的口语化特点：1. 亲切自然——如"今日大热天气""我老实告诉你"等口语表达，拉近了与听众的距离；2. 通俗易懂——用日常语言讲述道理，避免了艰深的学术用语；3. 生动幽默——如"百行业为先，万恶懒为首"等警句，幽默风趣；4. 引经据典——大量引用儒家经典，增加了论述的权威性和文化底蕴；5. 逻辑清晰——论证层层推进，条理分明，具有很强的说服力和感染力。',
    difficulty: 2,
  },
  {
    questionKey: 'chinese-renjiao-9-3-19',
    type: 'short_answer',
    questionText: '文章开头说"我这题目，是把《礼记》里头'敬业乐群'和《老子》里头'安其居，乐其业'那两句话，断章取义造出来的"。作者为什么要这样说明？',
    answer: '作者这样说明体现了严谨的学术态度和诚实品质：1. 交代题目的来源，说明"敬业乐业"这一说法是有传统文化依据的；2. 坦承"断章取义"，表明标题并非直接引用原文，而是根据需要选取其中部分含义重新组合；3. 一方面增加了文章的文化底蕴和说服力，另一方面也展示了作者坦诚直率的风格，增强了演讲的亲和力和可信度。',
    difficulty: 3,
  },
  {
    questionKey: 'chinese-renjiao-9-3-20',
    type: 'short_answer',
    questionText: '梁启超在文章中说"我生平最受用的两句话"是什么？文章引用这两句话有什么作用？',
    answer: '梁启超说自己生平最受用的两句话是"责任心"和"趣味"。这两句话呼应了文章"敬业"与"乐业"两个核心论点："责任心"对应敬业，"趣味"对应乐业。引用自身经历使论证更加生动有力，说明敬业与乐业不是空泛的说教，而是作者本人身体力行的经验总结。以亲身经历作为论据，增强了文章的说服力和感染力。',
    difficulty: 3,
  },

  // ---- matching 3题 ----
  {
    questionKey: 'chinese-renjiao-9-3-21',
    type: 'matching',
    questionText: '请将《敬业与乐业》中的论证方法与其对应的例子连线匹配。',
    answer: '',
    explanation: '百丈禅师——举例论证，孔子名言——道理论证，敬业与不敬业对比——对比论证。',
    difficulty: 1,
    pairs: '[["百丈禅师"一日不做事，一日不吃饭"","举例论证"],["孔子"饱食终日，无所用心"","道理论证（引用论证）"],["敬业者与不敬业者对比","对比论证"]]',
  },
  {
    questionKey: 'chinese-renjiao-9-3-22',
    type: 'matching',
    questionText: '请将文章引用的名言与其出处连线匹配。',
    answer: '',
    explanation: '知之者不如好之者——《论语》；用志不分——《庄子》；饱食终日无所用心——《论语》；敬业乐群——《礼记》。',
    difficulty: 2,
    pairs: '[[""知之者不如好之者"","《论语》"],[""用志不分，乃凝于神"","《庄子》"],[""饱食终日，无所用心"","《论语》"],[""敬业乐群"","《礼记》"]]',
  },
  {
    questionKey: 'chinese-renjiao-9-3-23',
    type: 'matching',
    questionText: '请将梁启超的代表作品与其对应体裁连线匹配。',
    answer: '',
    explanation: '《少年中国说》是散文，《饮冰室合集》是文集，《敬业与乐业》是演讲稿（议论文）。',
    difficulty: 2,
    pairs: '[["《少年中国说》","散文（政论文）"],["《饮冰室合集》","文集"],["《敬业与乐业》","演讲稿（议论文）"]]',
  },
];

// ========== 章节映射与导出函数 ==========

const chapterKeyToData: Record<string, RawQuestion[]> = {
  'chinese-renjiao-7-0': chapter7_0,
  'chinese-renjiao-7-1': chapter7_1,
  'chinese-renjiao-7-2': chapter7_2,
  'chinese-renjiao-7-3': chapter7_3,
  'chinese-renjiao-8-0': chapter8_0,
  'chinese-renjiao-8-1': chapter8_1,
  'chinese-renjiao-8-2': chapter8_2,
  'chinese-renjiao-8-3': chapter8_3,
  'chinese-renjiao-9-0': chapter9_0,
  'chinese-renjiao-9-1': chapter9_1,
  'chinese-renjiao-9-2': chapter9_2,
  'chinese-renjiao-9-3': chapter9_3,
};

export async function seedChineseRenjiaoQuestions(): Promise<number> {
  // 1. 查找所有语文人教版章节
  const chapters = await prisma.chapter.findMany({
    where: { chapterKey: { startsWith: 'chinese-renjiao' } },
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
      console.warn(`[seed-chinese-renjiao] 章节 "${chapterKey}" 未找到，跳过 ${questions.length} 道题`);
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

  console.log(`[seed-chinese-renjiao] 共插入 ${inserted} 道语文人教版题目`);
  return inserted;
}