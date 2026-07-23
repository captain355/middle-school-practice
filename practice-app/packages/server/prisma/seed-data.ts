// 从前端 subjects.js 和 PracticePage.jsx 的 chapterData 提取的数据
// 包含全部 9 个学科、30 个教材版本、约 360 个章节

export interface SeedTextbook {
  id: string;          // 'renjiao', 'pep' 等
  name: string;        // '人教版'
  publisher: string;
  knowledgePoints: number;
}

export interface SeedSubject {
  id: string;
  name: string;
  emoji: string;
  color: string;
  description: string;
  tags: string[];
  gradeRange: number[];
  sortOrder: number;
  textbooks: SeedTextbook[];
}

export interface SeedChapter {
  name: string;
  points: number;      // 知识点数量
  exercises: number;   // 练习题数量
  key: string;         // 原始章节键，如 '7-0', '8-2'
}

// chapterData 格式: { 'subjectId-textbookId': { grade: SeedChapter[] } }
export type ChapterDataMap = Record<string, Record<number, SeedChapter[]>>;

// ============ 全部 9 个学科数据 ============

export const seedSubjects: SeedSubject[] = [
  // ========== 数学 ==========
  {
    id: 'math',
    name: '数学',
    emoji: '📐',
    color: '#F59E0B',
    description: '代数、几何、统计与概率全覆盖',
    tags: ['代数', '几何', '统计与概率'],
    gradeRange: [7, 8, 9],
    sortOrder: 1,
    textbooks: [
      { id: 'renjiao', name: '人教版', publisher: '人民教育出版社', knowledgePoints: 86 },
      { id: 'huadong', name: '华东师大版', publisher: '华东师范大学出版社', knowledgePoints: 80 },
      { id: 'bsd', name: '北师大版', publisher: '北京师范大学出版社', knowledgePoints: 78 },
      { id: 'suke', name: '苏科版', publisher: '江苏凤凰科学技术出版社', knowledgePoints: 82 },
    ],
  },
  // ========== 语文 ==========
  {
    id: 'chinese',
    name: '语文',
    emoji: '📝',
    color: '#EF4444',
    description: '字词句篇、古诗文、阅读与写作',
    tags: ['字词句篇', '古诗文', '阅读与写作'],
    gradeRange: [7, 8, 9],
    sortOrder: 2,
    textbooks: [
      { id: 'renjiao', name: '人教版(部编版)', publisher: '人民教育出版社', knowledgePoints: 92 },
      { id: 'sujiao', name: '苏教版', publisher: '江苏凤凰教育出版社', knowledgePoints: 85 },
      { id: 'bsd', name: '北师大版', publisher: '北京师范大学出版社', knowledgePoints: 80 },
      { id: 'yuwen', name: '语文版', publisher: '语文出版社', knowledgePoints: 76 },
    ],
  },
  // ========== 英语 ==========
  {
    id: 'english',
    name: '英语',
    emoji: '🔤',
    color: '#8B5CF6',
    description: '词汇语法、听力阅读、完形写作',
    tags: ['词汇语法', '听力阅读', '完形写作'],
    gradeRange: [7, 8, 9],
    sortOrder: 3,
    textbooks: [
      { id: 'pep', name: '人教版(PEP)', publisher: '人民教育出版社', knowledgePoints: 95 },
      { id: 'waiyan', name: '外研版', publisher: '外语教学与研究出版社', knowledgePoints: 88 },
      { id: 'yilin', name: '译林版', publisher: '译林出版社', knowledgePoints: 82 },
      { id: 'hujiao', name: '沪教版', publisher: '上海教育出版社', knowledgePoints: 79 },
    ],
  },
  // ========== 物理 ==========
  {
    id: 'physics',
    name: '物理',
    emoji: '⚡',
    color: '#10B981',
    description: '力学、电学、光学、热学专题',
    tags: ['力学', '电学', '光学热学'],
    gradeRange: [8, 9],
    sortOrder: 4,
    textbooks: [
      { id: 'renjiao', name: '人教版', publisher: '人民教育出版社', knowledgePoints: 72 },
      { id: 'suke', name: '苏科版', publisher: '江苏凤凰科学技术出版社', knowledgePoints: 68 },
      { id: 'huyue', name: '沪粤版', publisher: '上海科学技术出版社/广东教育出版社', knowledgePoints: 65 },
    ],
  },
  // ========== 化学 ==========
  {
    id: 'chemistry',
    name: '化学',
    emoji: '🧪',
    color: '#06B6D4',
    description: '物质结构、化学反应、实验探究',
    tags: ['物质结构', '化学反应', '实验探究'],
    gradeRange: [9],
    sortOrder: 5,
    textbooks: [
      { id: 'renjiao', name: '人教版', publisher: '人民教育出版社', knowledgePoints: 58 },
      { id: 'hujiao', name: '沪教版', publisher: '上海教育出版社', knowledgePoints: 55 },
      { id: 'yuejiao', name: '粤教版', publisher: '广东教育出版社', knowledgePoints: 52 },
    ],
  },
  // ========== 生物 ==========
  {
    id: 'biology',
    name: '生物',
    emoji: '🌿',
    color: '#22C55E',
    description: '细胞、遗传、生态、人体生理',
    tags: ['细胞遗传', '生态', '人体生理'],
    gradeRange: [7, 8],
    sortOrder: 6,
    textbooks: [
      { id: 'renjiao', name: '人教版', publisher: '人民教育出版社', knowledgePoints: 62 },
      { id: 'bsd', name: '北师大版', publisher: '北京师范大学出版社', knowledgePoints: 58 },
      { id: 'jinan', name: '济南版', publisher: '济南出版社', knowledgePoints: 55 },
    ],
  },
  // ========== 历史 ==========
  {
    id: 'history',
    name: '历史',
    emoji: '📜',
    color: '#F97316',
    description: '中国史、世界史、史料分析',
    tags: ['中国古代史', '中国近现代史', '世界史'],
    gradeRange: [7, 8, 9],
    sortOrder: 7,
    textbooks: [
      { id: 'bubian', name: '人教版(部编版)', publisher: '人民教育出版社', knowledgePoints: 88 },
      { id: 'bsd', name: '北师大版', publisher: '北京师范大学出版社', knowledgePoints: 82 },
      { id: 'huadong', name: '华东师大版', publisher: '华东师范大学出版社', knowledgePoints: 78 },
    ],
  },
  // ========== 地理 ==========
  {
    id: 'geography',
    name: '地理',
    emoji: '🌍',
    color: '#0EA5E9',
    description: '自然地理、人文地理、区域地理',
    tags: ['自然地理', '人文地理', '区域地理'],
    gradeRange: [7, 8],
    sortOrder: 8,
    textbooks: [
      { id: 'renjiao', name: '人教版', publisher: '人民教育出版社', knowledgePoints: 70 },
      { id: 'xiangjiao', name: '湘教版', publisher: '湖南教育出版社', knowledgePoints: 66 },
      { id: 'zhongtu', name: '中图版', publisher: '中国地图出版社', knowledgePoints: 64 },
    ],
  },
  // ========== 道德与法治 ==========
  {
    id: 'politics',
    name: '道德与法治',
    emoji: '⚖️',
    color: '#EC4899',
    description: '国情国策、法治意识、道德修养',
    tags: ['国情国策', '法治意识', '道德修养'],
    gradeRange: [7, 8, 9],
    sortOrder: 9,
    textbooks: [
      { id: 'bubian', name: '人教版(部编版)', publisher: '人民教育出版社', knowledgePoints: 72 },
      { id: 'yuejiao', name: '粤教版', publisher: '广东教育出版社', knowledgePoints: 68 },
      { id: 'shanjiao', name: '陕教版', publisher: '陕西人民教育出版社', knowledgePoints: 65 },
    ],
  },
];

// ============ 全部章节目录数据 ============
// 键格式: 'subjectId-textbookId'，值: { 年级: 章节数组 }

export const seedChapterData: ChapterDataMap = {
  // ==================== 数学-人教版 ====================
  'math-renjiao': {
    7: [
      { name: '有理数', points: 8, exercises: 32, key: '7-0' },
      { name: '整式的加减', points: 6, exercises: 24, key: '7-1' },
      { name: '一元一次方程', points: 10, exercises: 38, key: '7-2' },
      { name: '几何图形初步', points: 7, exercises: 28, key: '7-3' },
    ],
    8: [
      { name: '三角形', points: 8, exercises: 30, key: '8-0' },
      { name: '全等三角形', points: 9, exercises: 35, key: '8-1' },
      { name: '轴对称', points: 7, exercises: 26, key: '8-2' },
      { name: '整式的乘法与因式分解', points: 10, exercises: 38, key: '8-3' },
    ],
    9: [
      { name: '一元二次方程', points: 8, exercises: 32, key: '9-0' },
      { name: '二次函数', points: 10, exercises: 40, key: '9-1' },
      { name: '旋转', points: 6, exercises: 22, key: '9-2' },
      { name: '圆', points: 9, exercises: 36, key: '9-3' },
    ],
  },

  // ==================== 数学-华东师大版 ====================
  'math-huadong': {
    7: [
      { name: '走进数学世界', points: 4, exercises: 15, key: '7-0' },
      { name: '有理数', points: 9, exercises: 35, key: '7-1' },
      { name: '整式的加减', points: 7, exercises: 28, key: '7-2' },
      { name: '图形的初步认识', points: 6, exercises: 22, key: '7-3' },
    ],
    8: [
      { name: '一元一次不等式', points: 7, exercises: 26, key: '8-0' },
      { name: '二元一次方程组', points: 8, exercises: 30, key: '8-1' },
      { name: '多边形', points: 6, exercises: 24, key: '8-2' },
      { name: '轴对称与轴对称图形', points: 7, exercises: 28, key: '8-3' },
    ],
    9: [
      { name: '分式', points: 8, exercises: 30, key: '9-0' },
      { name: '相似图形', points: 7, exercises: 26, key: '9-1' },
      { name: '解直角三角形', points: 8, exercises: 32, key: '9-2' },
      { name: '数据的整理与初步处理', points: 6, exercises: 22, key: '9-3' },
    ],
  },

  // ==================== 数学-北师大版 ====================
  'math-bsd': {
    7: [
      { name: '丰富的图形世界', points: 5, exercises: 20, key: '7-0' },
      { name: '有理数及其运算', points: 8, exercises: 32, key: '7-1' },
      { name: '整式及其加减', points: 7, exercises: 26, key: '7-2' },
      { name: '基本平面图形', points: 6, exercises: 24, key: '7-3' },
    ],
    8: [
      { name: '勾股定理', points: 6, exercises: 22, key: '8-0' },
      { name: '实数', points: 7, exercises: 26, key: '8-1' },
      { name: '位置与坐标', points: 5, exercises: 20, key: '8-2' },
      { name: '一次函数', points: 8, exercises: 30, key: '8-3' },
    ],
    9: [
      { name: '特殊平行四边形', points: 8, exercises: 32, key: '9-0' },
      { name: '一元二次方程', points: 8, exercises: 30, key: '9-1' },
      { name: '概率的进一步认识', points: 5, exercises: 18, key: '9-2' },
      { name: '直角三角形的边角关系', points: 7, exercises: 28, key: '9-3' },
    ],
  },

  // ==================== 数学-苏科版 ====================
  'math-suke': {
    7: [
      { name: '我们身边的数学', points: 4, exercises: 16, key: '7-0' },
      { name: '有理数', points: 8, exercises: 30, key: '7-1' },
      { name: '用字母表示数', points: 6, exercises: 24, key: '7-2' },
      { name: '一元一次方程', points: 7, exercises: 26, key: '7-3' },
    ],
    8: [
      { name: '数据的收集与整理', points: 5, exercises: 18, key: '8-0' },
      { name: '勾股定理', points: 6, exercises: 24, key: '8-1' },
      { name: '实数', points: 7, exercises: 28, key: '8-2' },
      { name: '平面直角坐标系', points: 6, exercises: 22, key: '8-3' },
    ],
    9: [
      { name: '一元二次方程', points: 8, exercises: 30, key: '9-0' },
      { name: '二次函数', points: 9, exercises: 34, key: '9-1' },
      { name: '圆', points: 8, exercises: 32, key: '9-2' },
      { name: '统计与概率', points: 7, exercises: 26, key: '9-3' },
    ],
  },

  // ==================== 语文-人教版(部编版) ====================
  'chinese-renjiao': {
    7: [
      { name: '春', points: 5, exercises: 18, key: '7-0' },
      { name: '济南的冬天', points: 4, exercises: 16, key: '7-1' },
      { name: '古代诗歌四首', points: 6, exercises: 22, key: '7-2' },
      { name: '从百草园到三味书屋', points: 5, exercises: 20, key: '7-3' },
    ],
    8: [
      { name: '新闻两则', points: 5, exercises: 20, key: '8-0' },
      { name: '芦花荡', points: 4, exercises: 16, key: '8-1' },
      { name: '阿长与山海经', points: 5, exercises: 22, key: '8-2' },
      { name: '背影', points: 6, exercises: 24, key: '8-3' },
    ],
    9: [
      { name: '沁园春·雪', points: 5, exercises: 18, key: '9-0' },
      { name: '我爱这土地', points: 4, exercises: 16, key: '9-1' },
      { name: '乡愁', points: 4, exercises: 14, key: '9-2' },
      { name: '敬业与乐业', points: 6, exercises: 24, key: '9-3' },
    ],
  },

  // ==================== 语文-苏教版 ====================
  'chinese-sujiao': {
    7: [
      { name: '为你打开一扇门', points: 4, exercises: 16, key: '7-0' },
      { name: '繁星', points: 4, exercises: 14, key: '7-1' },
      { name: '冰心诗三首', points: 5, exercises: 18, key: '7-2' },
      { name: '安恩和奶牛', points: 4, exercises: 16, key: '7-3' },
    ],
    8: [
      { name: '长征组歌', points: 5, exercises: 18, key: '8-0' },
      { name: '老山界', points: 5, exercises: 20, key: '8-1' },
      { name: '草', points: 4, exercises: 16, key: '8-2' },
      { name: '窗', points: 5, exercises: 22, key: '8-3' },
    ],
    9: [
      { name: '白杨礼赞', points: 5, exercises: 20, key: '9-0' },
      { name: '紫藤萝瀑布', points: 4, exercises: 16, key: '9-1' },
      { name: '风筝', points: 4, exercises: 14, key: '9-2' },
      { name: '季羡林先生', points: 5, exercises: 18, key: '9-3' },
    ],
  },

  // ==================== 语文-北师大版 ====================
  'chinese-bsd': {
    7: [
      { name: '童年的朋友', points: 4, exercises: 16, key: '7-0' },
      { name: '一面', points: 4, exercises: 14, key: '7-1' },
      { name: '从百草园到三味书屋', points: 5, exercises: 20, key: '7-2' },
      { name: '最后一课', points: 5, exercises: 18, key: '7-3' },
    ],
    8: [
      { name: '浪之歌', points: 4, exercises: 14, key: '8-0' },
      { name: '雨之歌', points: 4, exercises: 14, key: '8-1' },
      { name: '敬畏自然', points: 5, exercises: 18, key: '8-2' },
      { name: '罗布泊，消逝的仙湖', points: 5, exercises: 20, key: '8-3' },
    ],
    9: [
      { name: '诗两首', points: 4, exercises: 16, key: '9-0' },
      { name: '星星变奏曲', points: 4, exercises: 14, key: '9-1' },
      { name: '外国诗两首', points: 4, exercises: 14, key: '9-2' },
      { name: '致女儿的信', points: 5, exercises: 18, key: '9-3' },
    ],
  },

  // ==================== 语文-语文版 ====================
  'chinese-yuwen': {
    7: [
      { name: '忆读书', points: 4, exercises: 16, key: '7-0' },
      { name: '我的母亲', points: 4, exercises: 14, key: '7-1' },
      { name: '我的老师', points: 4, exercises: 14, key: '7-2' },
      { name: '我的信念', points: 4, exercises: 16, key: '7-3' },
    ],
    8: [
      { name: '新闻两篇', points: 5, exercises: 18, key: '8-0' },
      { name: '芦花荡', points: 4, exercises: 16, key: '8-1' },
      { name: '蜡烛', points: 4, exercises: 14, key: '8-2' },
      { name: '就英法联军远征中国致巴特勒上尉的信', points: 5, exercises: 20, key: '8-3' },
    ],
    9: [
      { name: '沁园春·雪', points: 5, exercises: 18, key: '9-0' },
      { name: '雨说', points: 4, exercises: 14, key: '9-1' },
      { name: '星星变奏曲', points: 4, exercises: 14, key: '9-2' },
      { name: '外国诗两首', points: 4, exercises: 14, key: '9-3' },
    ],
  },

  // ==================== 英语-人教版(PEP) ====================
  'english-pep': {
    7: [
      { name: "My name's Gina", points: 4, exercises: 20, key: '7-0' },
      { name: "This is my sister", points: 5, exercises: 22, key: '7-1' },
      { name: "Is there a post office near here?", points: 6, exercises: 25, key: '7-2' },
      { name: "I'm watching TV", points: 5, exercises: 24, key: '7-3' },
    ],
    8: [
      { name: "Where did you go on vacation?", points: 5, exercises: 22, key: '8-0' },
      { name: "How often do you exercise?", points: 5, exercises: 20, key: '8-1' },
      { name: "I'm more outgoing than my sister", points: 6, exercises: 26, key: '8-2' },
      { name: "What's the best movie theater?", points: 5, exercises: 22, key: '8-3' },
    ],
    9: [
      { name: "How can we become good learners?", points: 5, exercises: 24, key: '9-0' },
      { name: "I think that mooncakes are delicious!", points: 6, exercises: 26, key: '9-1' },
      { name: "Could you please tell me where the restrooms are?", points: 6, exercises: 28, key: '9-2' },
      { name: "We're trying to save the earth!", points: 5, exercises: 22, key: '9-3' },
    ],
  },

  // ==================== 英语-外研版 ====================
  'english-waiyan': {
    7: [
      { name: 'Nice to meet you', points: 4, exercises: 18, key: '7-0' },
      { name: "I'm from China", points: 5, exercises: 20, key: '7-1' },
      { name: 'My school day', points: 5, exercises: 22, key: '7-2' },
      { name: 'My family', points: 4, exercises: 18, key: '7-3' },
    ],
    8: [
      { name: 'Will people have robots?', points: 5, exercises: 20, key: '8-0' },
      { name: 'What should I do?', points: 5, exercises: 22, key: '8-1' },
      { name: 'What were you doing when the UFO arrived?', points: 6, exercises: 24, key: '8-2' },
      { name: 'He said I was hard-working', points: 5, exercises: 22, key: '8-3' },
    ],
    9: [
      { name: 'How to learn English well?', points: 5, exercises: 22, key: '9-0' },
      { name: 'We need to protect animals', points: 6, exercises: 24, key: '9-1' },
      { name: 'Great inventions', points: 5, exercises: 22, key: '9-2' },
      { name: 'Australia', points: 5, exercises: 20, key: '9-3' },
    ],
  },

  // ==================== 英语-译林版 ====================
  'english-yilin': {
    7: [
      { name: 'This is me!', points: 4, exercises: 18, key: '7-0' },
      { name: 'My family and friends', points: 5, exercises: 20, key: '7-1' },
      { name: 'My day', points: 5, exercises: 22, key: '7-2' },
      { name: 'My neighbourhood', points: 4, exercises: 18, key: '7-3' },
    ],
    8: [
      { name: 'Friends', points: 5, exercises: 20, key: '8-0' },
      { name: 'School life', points: 5, exercises: 22, key: '8-1' },
      { name: 'A trip to the zoo', points: 5, exercises: 20, key: '8-2' },
      { name: 'Seasons', points: 5, exercises: 22, key: '8-3' },
    ],
    9: [
      { name: 'Know yourself', points: 5, exercises: 22, key: '9-0' },
      { name: 'Colours', points: 4, exercises: 18, key: '9-1' },
      { name: 'Teenage problems', points: 5, exercises: 22, key: '9-2' },
      { name: 'Great people', points: 5, exercises: 22, key: '9-3' },
    ],
  },

  // ==================== 英语-沪教版 ====================
  'english-hujiao': {
    7: [
      { name: 'Meeting new people', points: 4, exercises: 18, key: '7-0' },
      { name: 'My daily life', points: 5, exercises: 20, key: '7-1' },
      { name: 'Places and activities', points: 5, exercises: 22, key: '7-2' },
      { name: 'What can you do?', points: 4, exercises: 18, key: '7-3' },
    ],
    8: [
      { name: 'Pen pals', points: 5, exercises: 20, key: '8-0' },
      { name: 'My neighbourhood', points: 5, exercises: 22, key: '8-1' },
      { name: 'Our wonderful world', points: 5, exercises: 20, key: '8-2' },
      { name: 'Rules around us', points: 5, exercises: 22, key: '8-3' },
    ],
    9: [
      { name: 'The body and the mind', points: 5, exercises: 22, key: '9-0' },
      { name: 'My future', points: 5, exercises: 22, key: '9-1' },
      { name: 'Protecting our environment', points: 5, exercises: 24, key: '9-2' },
      { name: 'Going places', points: 5, exercises: 22, key: '9-3' },
    ],
  },

  // ==================== 物理-人教版 ====================
  'physics-renjiao': {
    8: [
      { name: '声现象', points: 5, exercises: 20, key: '8-0' },
      { name: '光现象', points: 7, exercises: 28, key: '8-1' },
      { name: '透镜及其应用', points: 6, exercises: 24, key: '8-2' },
      { name: '物态变化', points: 5, exercises: 22, key: '8-3' },
    ],
    9: [
      { name: '内能', points: 5, exercises: 20, key: '9-0' },
      { name: '电流和电路', points: 7, exercises: 28, key: '9-1' },
      { name: '电压和电阻', points: 7, exercises: 28, key: '9-2' },
      { name: '电功率', points: 8, exercises: 32, key: '9-3' },
    ],
  },

  // ==================== 物理-苏科版 ====================
  'physics-suke': {
    8: [
      { name: '声现象', points: 5, exercises: 18, key: '8-0' },
      { name: '光的折射', points: 6, exercises: 22, key: '8-1' },
      { name: '物质的物理属性', points: 6, exercises: 24, key: '8-2' },
      { name: '力', points: 7, exercises: 28, key: '8-3' },
    ],
    9: [
      { name: '简单机械和功', points: 7, exercises: 26, key: '9-0' },
      { name: '机械能与内能', points: 7, exercises: 28, key: '9-1' },
      { name: '电路初探', points: 7, exercises: 26, key: '9-2' },
      { name: '欧姆定律', points: 8, exercises: 30, key: '9-3' },
    ],
  },

  // ==================== 物理-沪粤版 ====================
  'physics-huyue': {
    8: [
      { name: '声音与环境', points: 5, exercises: 18, key: '8-0' },
      { name: '光与眼睛', points: 6, exercises: 24, key: '8-1' },
      { name: '物质的形态与变化', points: 5, exercises: 20, key: '8-2' },
      { name: '物质的密度', points: 6, exercises: 22, key: '8-3' },
    ],
    9: [
      { name: '机械与功', points: 7, exercises: 26, key: '9-0' },
      { name: '内能与热机', points: 6, exercises: 24, key: '9-1' },
      { name: '电磁探秘', points: 7, exercises: 28, key: '9-2' },
      { name: '电功与电功率', points: 7, exercises: 28, key: '9-3' },
    ],
  },

  // ==================== 化学-人教版 ====================
  'chemistry-renjiao': {
    9: [
      { name: '走进化学世界', points: 4, exercises: 16, key: '9-0' },
      { name: '我们周围的空气', points: 6, exercises: 25, key: '9-1' },
      { name: '物质构成的奥秘', points: 7, exercises: 28, key: '9-2' },
      { name: '自然界的水', points: 5, exercises: 22, key: '9-3' },
    ],
  },

  // ==================== 化学-沪教版 ====================
  'chemistry-hujiao': {
    9: [
      { name: '化学的魅力', points: 4, exercises: 16, key: '9-0' },
      { name: '浩瀚的大气', points: 5, exercises: 20, key: '9-1' },
      { name: '走进溶液世界', points: 6, exercises: 24, key: '9-2' },
      { name: '燃烧与灭火', points: 5, exercises: 22, key: '9-3' },
    ],
  },

  // ==================== 化学-粤教版 ====================
  'chemistry-yuejiao': {
    9: [
      { name: '身边的化学物质', points: 4, exercises: 16, key: '9-0' },
      { name: '物质构成的奥秘', points: 6, exercises: 24, key: '9-1' },
      { name: '燃烧与灭火', points: 5, exercises: 20, key: '9-2' },
      { name: '金属与金属材料', points: 5, exercises: 22, key: '9-3' },
    ],
  },

  // ==================== 生物-人教版 ====================
  'biology-renjiao': {
    7: [
      { name: '生物和生物圈', points: 3, exercises: 12, key: '7-0' },
      { name: '了解生物圈', points: 4, exercises: 16, key: '7-1' },
      { name: '细胞是生命活动的基本单位', points: 6, exercises: 24, key: '7-2' },
      { name: '细胞怎样构成生物体', points: 5, exercises: 20, key: '7-3' },
    ],
    8: [
      { name: '生物圈中的绿色植物', points: 5, exercises: 20, key: '8-0' },
      { name: '生物圈中的人', points: 6, exercises: 24, key: '8-1' },
      { name: '生物圈中的其他生物', points: 5, exercises: 20, key: '8-2' },
      { name: '生物的生殖与发育', points: 5, exercises: 22, key: '8-3' },
    ],
  },

  // ==================== 生物-北师大版 ====================
  'biology-bsd': {
    7: [
      { name: '认识生命', points: 4, exercises: 16, key: '7-0' },
      { name: '细胞', points: 5, exercises: 20, key: '7-1' },
      { name: '生物圈', points: 4, exercises: 16, key: '7-2' },
      { name: '绿色植物', points: 5, exercises: 20, key: '7-3' },
    ],
    8: [
      { name: '生物体的结构层次', points: 5, exercises: 20, key: '8-0' },
      { name: '生物与环境', points: 5, exercises: 18, key: '8-1' },
      { name: '生物圈中的绿色植物', points: 5, exercises: 20, key: '8-2' },
      { name: '生物圈中的人', points: 6, exercises: 24, key: '8-3' },
    ],
  },

  // ==================== 生物-济南版 ====================
  'biology-jinan': {
    7: [
      { name: '奇妙的生命世界', points: 4, exercises: 14, key: '7-0' },
      { name: '观察生物', points: 4, exercises: 16, key: '7-1' },
      { name: '细胞是生物体结构和功能的基本单位', points: 5, exercises: 20, key: '7-2' },
      { name: '生物体的组成', points: 5, exercises: 18, key: '7-3' },
    ],
    8: [
      { name: '生物的运动', points: 4, exercises: 16, key: '8-0' },
      { name: '生物的生殖', points: 5, exercises: 18, key: '8-1' },
      { name: '生物的遗传和变异', points: 5, exercises: 22, key: '8-2' },
      { name: '生物的进化', points: 4, exercises: 16, key: '8-3' },
    ],
  },

  // ==================== 历史-人教版(部编版) ====================
  'history-bubian': {
    7: [
      { name: '中国境内早期人类与文明的起源', points: 5, exercises: 20, key: '7-0' },
      { name: '夏商周时期', points: 6, exercises: 24, key: '7-1' },
      { name: '秦汉时期', points: 7, exercises: 28, key: '7-2' },
      { name: '三国两晋南北朝时期', points: 6, exercises: 22, key: '7-3' },
    ],
    8: [
      { name: '隋唐时期', points: 7, exercises: 28, key: '8-0' },
      { name: '宋元时期', points: 7, exercises: 26, key: '8-1' },
      { name: '明清时期', points: 6, exercises: 24, key: '8-2' },
      { name: '中国开始沦为半殖民地半封建社会', points: 6, exercises: 24, key: '8-3' },
    ],
    9: [
      { name: '近代化的早期探索', points: 6, exercises: 24, key: '9-0' },
      { name: '新民主主义革命的开始', points: 7, exercises: 28, key: '9-1' },
      { name: '中华民族的抗日战争', points: 6, exercises: 24, key: '9-2' },
      { name: '人民解放战争的胜利', points: 6, exercises: 22, key: '9-3' },
    ],
  },

  // ==================== 历史-北师大版 ====================
  'history-bsd': {
    7: [
      { name: '中华文明的起源', points: 4, exercises: 16, key: '7-0' },
      { name: '国家的产生与社会变革', points: 5, exercises: 20, key: '7-1' },
      { name: '统一国家的建立', points: 6, exercises: 24, key: '7-2' },
      { name: '政权分立与民族融合', points: 5, exercises: 20, key: '7-3' },
    ],
    8: [
      { name: '繁荣与开放的社会', points: 6, exercises: 24, key: '8-0' },
      { name: '经济重心的南移和民族关系的发展', points: 6, exercises: 22, key: '8-1' },
      { name: '统一多民族国家的巩固和社会危机', points: 6, exercises: 24, key: '8-2' },
      { name: '侵略与反抗', points: 5, exercises: 20, key: '8-3' },
    ],
    9: [
      { name: '近代化的艰难起步', points: 6, exercises: 24, key: '9-0' },
      { name: '新民主主义革命的兴起', points: 6, exercises: 22, key: '9-1' },
      { name: '抗日战争', points: 6, exercises: 24, key: '9-2' },
      { name: '解放战争', points: 5, exercises: 20, key: '9-3' },
    ],
  },

  // ==================== 历史-华东师大版 ====================
  'history-huadong': {
    7: [
      { name: '中华文明的起源', points: 4, exercises: 16, key: '7-0' },
      { name: '夏商周时代', points: 5, exercises: 20, key: '7-1' },
      { name: '秦汉时期', points: 6, exercises: 24, key: '7-2' },
      { name: '三国两晋南北朝', points: 5, exercises: 20, key: '7-3' },
    ],
    8: [
      { name: '隋唐时期', points: 6, exercises: 24, key: '8-0' },
      { name: '宋元时期', points: 6, exercises: 22, key: '8-1' },
      { name: '明清时期', points: 6, exercises: 22, key: '8-2' },
      { name: '列强侵华与中国人民的抗争', points: 6, exercises: 24, key: '8-3' },
    ],
    9: [
      { name: '近代中国的艰难历程', points: 6, exercises: 22, key: '9-0' },
      { name: '新民主主义革命', points: 6, exercises: 24, key: '9-1' },
      { name: '抗日战争与解放战争', points: 6, exercises: 24, key: '9-2' },
      { name: '新中国的成立与建设', points: 5, exercises: 20, key: '9-3' },
    ],
  },

  // ==================== 地理-人教版 ====================
  'geography-renjiao': {
    7: [
      { name: '地球和地球仪', points: 4, exercises: 16, key: '7-0' },
      { name: '地球的运动', points: 5, exercises: 20, key: '7-1' },
      { name: '地图的阅读', points: 6, exercises: 24, key: '7-2' },
      { name: '陆地和海洋', points: 5, exercises: 18, key: '7-3' },
    ],
    8: [
      { name: '从世界看中国', points: 5, exercises: 20, key: '8-0' },
      { name: '中国的自然环境', points: 6, exercises: 24, key: '8-1' },
      { name: '中国的自然资源', points: 5, exercises: 20, key: '8-2' },
      { name: '中国经济的发展', points: 5, exercises: 22, key: '8-3' },
    ],
  },

  // ==================== 地理-湘教版 ====================
  'geography-xiangjiao': {
    7: [
      { name: '让我们走进地理', points: 3, exercises: 12, key: '7-0' },
      { name: '地球的面貌', points: 5, exercises: 20, key: '7-1' },
      { name: '世界的居民', points: 5, exercises: 18, key: '7-2' },
      { name: '世界的气候', points: 6, exercises: 22, key: '7-3' },
    ],
    8: [
      { name: '中国的疆域与人口', points: 5, exercises: 20, key: '8-0' },
      { name: '中国的自然环境', points: 6, exercises: 24, key: '8-1' },
      { name: '中国的自然资源', points: 5, exercises: 20, key: '8-2' },
      { name: '中国的地域差异', points: 5, exercises: 22, key: '8-3' },
    ],
  },

  // ==================== 地理-中图版 ====================
  'geography-zhongtu': {
    7: [
      { name: '地球和地图', points: 4, exercises: 16, key: '7-0' },
      { name: '大洲和大洋', points: 5, exercises: 18, key: '7-1' },
      { name: '世界的气候', points: 6, exercises: 22, key: '7-2' },
      { name: '世界的居民和国家', points: 5, exercises: 18, key: '7-3' },
    ],
    8: [
      { name: '中国疆域和行政区划', points: 4, exercises: 16, key: '8-0' },
      { name: '中国自然环境', points: 6, exercises: 24, key: '8-1' },
      { name: '中国自然资源', points: 5, exercises: 20, key: '8-2' },
      { name: '中国经济与文化', points: 5, exercises: 22, key: '8-3' },
    ],
  },

  // ==================== 道德与法治-人教版(部编版) ====================
  'politics-bubian': {
    7: [
      { name: '成长的节拍', points: 4, exercises: 16, key: '7-0' },
      { name: '友谊的天空', points: 5, exercises: 20, key: '7-1' },
      { name: '师长情谊', points: 6, exercises: 24, key: '7-2' },
      { name: '生命的思考', points: 5, exercises: 18, key: '7-3' },
    ],
    8: [
      { name: '走进社会生活', points: 5, exercises: 20, key: '8-0' },
      { name: '遵守社会规则', points: 5, exercises: 22, key: '8-1' },
      { name: '承担责任', points: 5, exercises: 20, key: '8-2' },
      { name: '维护国家利益', points: 5, exercises: 22, key: '8-3' },
    ],
    9: [
      { name: '踏上社会之路', points: 5, exercises: 20, key: '9-0' },
      { name: '创新驱动发展', points: 5, exercises: 22, key: '9-1' },
      { name: '民主与法治', points: 6, exercises: 24, key: '9-2' },
      { name: '和谐与梦想', points: 5, exercises: 22, key: '9-3' },
    ],
  },

  // ==================== 道德与法治-粤教版 ====================
  'politics-yuejiao': {
    7: [
      { name: '认识自我', points: 4, exercises: 16, key: '7-0' },
      { name: '学会交往', points: 5, exercises: 20, key: '7-1' },
      { name: '学会学习', points: 5, exercises: 20, key: '7-2' },
      { name: '珍爱生命', points: 4, exercises: 16, key: '7-3' },
    ],
    8: [
      { name: '权利与义务', points: 5, exercises: 22, key: '8-0' },
      { name: '法律保护我们', points: 5, exercises: 20, key: '8-1' },
      { name: '社会生活', points: 5, exercises: 20, key: '8-2' },
      { name: '承担责任', points: 5, exercises: 22, key: '8-3' },
    ],
    9: [
      { name: '认识国情', points: 5, exercises: 20, key: '9-0' },
      { name: '基本路线', points: 4, exercises: 16, key: '9-1' },
      { name: '中华文化与民族精神', points: 5, exercises: 20, key: '9-2' },
      { name: '理想与使命', points: 5, exercises: 22, key: '9-3' },
    ],
  },

  // ==================== 道德与法治-陕教版 ====================
  'politics-shanjiao': {
    7: [
      { name: '新学校，新同学', points: 4, exercises: 16, key: '7-0' },
      { name: '融入新集体', points: 4, exercises: 14, key: '7-1' },
      { name: '感受生命的意义', points: 5, exercises: 18, key: '7-2' },
      { name: '过富有情趣的生活', points: 4, exercises: 16, key: '7-3' },
    ],
    8: [
      { name: '感受法律', points: 5, exercises: 20, key: '8-0' },
      { name: '维护权利', points: 5, exercises: 22, key: '8-1' },
      { name: '履行义务', points: 5, exercises: 20, key: '8-2' },
      { name: '维护社会公平正义', points: 5, exercises: 22, key: '8-3' },
    ],
    9: [
      { name: '在社会生活中成长', points: 5, exercises: 20, key: '9-0' },
      { name: '我的权利与义务', points: 5, exercises: 22, key: '9-1' },
      { name: '走进法律', points: 5, exercises: 20, key: '9-2' },
      { name: '感受中国特色社会主义', points: 5, exercises: 22, key: '9-3' },
    ],
  },
};
