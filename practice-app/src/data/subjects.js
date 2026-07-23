// 学科数据配置
export const subjects = [
  {
    id: 'math',
    name: '数学',
    emoji: '📐',
    color: '#F59E0B',
    description: '代数、几何、统计与概率全覆盖',
    tags: ['代数', '几何', '统计与概率'],
    gradeRange: [7, 8, 9],
    textbooks: [
      { id: 'renjiao', name: '人教版', publisher: '人民教育出版社', knowledgePoints: 86 },
      { id: 'huadong', name: '华东师大版', publisher: '华东师范大学出版社', knowledgePoints: 80 },
      { id: 'bsd', name: '北师大版', publisher: '北京师范大学出版社', knowledgePoints: 78 },
      { id: 'suke', name: '苏科版', publisher: '江苏凤凰科学技术出版社', knowledgePoints: 82 },
    ],
    knowledgeMap: {
      '代数': ['有理数与实数', '整式与分式', '方程与不等式', '函数'],
      '几何': ['线与角', '三角形', '四边形', '圆', '图形变换'],
      '统计与概率': ['数据收集与整理', '统计图表', '概率初步'],
    }
  },
  {
    id: 'chinese',
    name: '语文',
    emoji: '📝',
    color: '#EF4444',
    description: '字词句篇、古诗文、阅读与写作',
    tags: ['字词句篇', '古诗文', '阅读与写作'],
    gradeRange: [7, 8, 9],
    textbooks: [
      { id: 'renjiao', name: '人教版(部编版)', publisher: '人民教育出版社', knowledgePoints: 92 },
      { id: 'sujiao', name: '苏教版', publisher: '江苏凤凰教育出版社', knowledgePoints: 85 },
      { id: 'bsd', name: '北师大版', publisher: '北京师范大学出版社', knowledgePoints: 80 },
      { id: 'yuwen', name: '语文版', publisher: '语文出版社', knowledgePoints: 76 },
    ],
    knowledgeMap: {
      '字词积累': ['汉字书写', '词语运用', '病句辨析', '标点符号'],
      '古诗文': ['古诗词鉴赏', '文言文阅读', '名著导读'],
      '阅读与写作': ['记叙文阅读', '说明文阅读', '议论文阅读', '写作表达'],
    }
  },
  {
    id: 'english',
    name: '英语',
    emoji: '🔤',
    color: '#8B5CF6',
    description: '词汇语法、听力阅读、完形写作',
    tags: ['词汇语法', '听力阅读', '完形写作'],
    gradeRange: [7, 8, 9],
    textbooks: [
      { id: 'pep', name: '人教版(PEP)', publisher: '人民教育出版社', knowledgePoints: 95 },
      { id: 'waiyan', name: '外研版', publisher: '外语教学与研究出版社', knowledgePoints: 88 },
      { id: 'yilin', name: '译林版', publisher: '译林出版社', knowledgePoints: 82 },
      { id: 'hujiao', name: '沪教版', publisher: '上海教育出版社', knowledgePoints: 79 },
    ],
    knowledgeMap: {
      '词汇与语法': ['名词与冠词', '时态与语态', '从句与非谓语', '情景交际'],
      '听力与阅读': ['听力理解', '完形填空', '阅读理解'],
      '写作与翻译': ['书面表达', '短文改错', '中英互译'],
    }
  },
  {
    id: 'physics',
    name: '物理',
    emoji: '⚡',
    color: '#10B981',
    description: '力学、电学、光学、热学专题',
    tags: ['力学', '电学', '光学热学'],
    gradeRange: [8, 9],
    textbooks: [
      { id: 'renjiao', name: '人教版', publisher: '人民教育出版社', knowledgePoints: 72 },
      { id: 'suke', name: '苏科版', publisher: '江苏凤凰科学技术出版社', knowledgePoints: 68 },
      { id: 'huyue', name: '沪粤版', publisher: '上海科学技术出版社/广东教育出版社', knowledgePoints: 65 },
    ],
    knowledgeMap: {
      '力学': ['声现象', '物态变化', '质量与密度', '力与运动', '压强与浮力', '简单机械与功'],
      '电学': ['电流与电路', '电压与电阻', '欧姆定律', '电功率'],
      '光与热': ['光的传播', '透镜及其应用', '电与磁'],
    }
  },
  {
    id: 'chemistry',
    name: '化学',
    emoji: '🧪',
    color: '#06B6D4',
    description: '物质结构、化学反应、实验探究',
    tags: ['物质结构', '化学反应', '实验探究'],
    gradeRange: [9],
    textbooks: [
      { id: 'renjiao', name: '人教版', publisher: '人民教育出版社', knowledgePoints: 58 },
      { id: 'hujiao', name: '沪教版', publisher: '上海教育出版社', knowledgePoints: 55 },
      { id: 'yuejiao', name: '粤教版', publisher: '广东教育出版社', knowledgePoints: 52 },
    ],
    knowledgeMap: {
      '物质构成': ['物质的性质与变化', '空气与氧气', '水与溶液', '碳和碳的氧化物'],
      '化学反应': ['化学方程式', '质量守恒', '金属与金属材料', '酸碱盐'],
      '实验探究': ['常见仪器与操作', '气体的制取', '综合实验设计'],
    }
  },
  {
    id: 'biology',
    name: '生物',
    emoji: '🌿',
    color: '#22C55E',
    description: '细胞、遗传、生态、人体生理',
    tags: ['细胞遗传', '生态', '人体生理'],
    gradeRange: [7, 8],
    textbooks: [
      { id: 'renjiao', name: '人教版', publisher: '人民教育出版社', knowledgePoints: 62 },
      { id: 'bsd', name: '北师大版', publisher: '北京师范大学出版社', knowledgePoints: 58 },
      { id: 'jinan', name: '济南版', publisher: '济南出版社', knowledgePoints: 55 },
    ],
    knowledgeMap: {
      '生物与细胞': ['生物的特征', '细胞的结构', '细胞的生活', '细胞的分裂与分化'],
      '人体生理': ['消化与呼吸', '血液循环', '尿液形成', '神经调节', '激素调节'],
      '遗传与生态': ['生物的生殖', '遗传与变异', '生物的进化', '生态系统'],
    }
  },
  {
    id: 'history',
    name: '历史',
    emoji: '📜',
    color: '#F97316',
    description: '中国史、世界史、史料分析',
    tags: ['中国古代史', '中国近现代史', '世界史'],
    gradeRange: [7, 8, 9],
    textbooks: [
      { id: 'bubian', name: '人教版(部编版)', publisher: '人民教育出版社', knowledgePoints: 88 },
      { id: 'bsd', name: '北师大版', publisher: '北京师范大学出版社', knowledgePoints: 82 },
      { id: 'huadong', name: '华东师大版', publisher: '华东师范大学出版社', knowledgePoints: 78 },
    ],
    knowledgeMap: {
      '中国古代史': ['史前至秦汉', '三国两晋南北朝', '隋唐', '宋元', '明清'],
      '中国近现代史': ['侵略与反抗', '近代化探索', '新民主主义革命', '新中国成立与建设'],
      '世界史': ['古代文明', '资本主义兴起', '工业革命', '战争与和平', '多极化趋势'],
    }
  },
  {
    id: 'geography',
    name: '地理',
    emoji: '🌍',
    color: '#0EA5E9',
    description: '自然地理、人文地理、区域地理',
    tags: ['自然地理', '人文地理', '区域地理'],
    gradeRange: [7, 8],
    textbooks: [
      { id: 'renjiao', name: '人教版', publisher: '人民教育出版社', knowledgePoints: 70 },
      { id: 'xiangjiao', name: '湘教版', publisher: '湖南教育出版社', knowledgePoints: 66 },
      { id: 'zhongtu', name: '中图版', publisher: '中国地图出版社', knowledgePoints: 64 },
    ],
    knowledgeMap: {
      '地球与地图': ['地球与经纬网', '地图三要素', '地球的运动'],
      '世界地理': ['大洲与大洋', '天气与气候', '人口与宗教', '发展差异'],
      '中国地理': ['自然环境', '自然资源', '经济发展', '四大地理区域'],
    }
  },
  {
    id: 'politics',
    name: '道德与法治',
    emoji: '⚖️',
    color: '#EC4899',
    description: '国情国策、法治意识、道德修养',
    tags: ['国情国策', '法治意识', '道德修养'],
    gradeRange: [7, 8, 9],
    textbooks: [
      { id: 'bubian', name: '人教版(部编版)', publisher: '人民教育出版社', knowledgePoints: 72 },
      { id: 'yuejiao', name: '粤教版', publisher: '广东教育出版社', knowledgePoints: 68 },
      { id: 'shanjiao', name: '陕教版', publisher: '陕西人民教育出版社', knowledgePoints: 65 },
    ],
    knowledgeMap: {
      '道德修养': ['认识自我', '交友与沟通', '珍爱生命', '承担责任'],
      '法治意识': ['法律基础', '权利与义务', '宪法精神', '法律保护'],
      '国情国策': ['基本国情', '基本路线', '中华文化', '民族精神', '和谐社会'],
    }
  },
];

export function getSubjectById(id) {
  return subjects.find(s => s.id === id);
}

export function getTextbook(subjectId, textbookId) {
  const subject = getSubjectById(subjectId);
  return subject?.textbooks.find(t => t.id === textbookId);
}
