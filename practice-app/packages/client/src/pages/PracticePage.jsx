import { useState, useEffect, useMemo, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getSubjectById, getTextbook } from '../data/subjects';
import { getQuestions, sampleQuestions } from '../data/sampleQuestions';
import { useAuth } from '../context/AuthContext';
import { getProgress, updateProgress, savePracticeRecord, addWrongQuestion, updateStreak } from '../utils/storage';

// Chapter definitions per subject+textbook
const chapterData = {
  'math-renjiao': {
    7: [{ name: '有理数', points: 8, exercises: 32, key: '7-0' }, { name: '整式的加减', points: 6, exercises: 24, key: '7-1' }, { name: '一元一次方程', points: 10, exercises: 38, key: '7-2' }, { name: '几何图形初步', points: 7, exercises: 28, key: '7-3' }],
    8: [{ name: '三角形', points: 8, exercises: 30, key: '8-0' }, { name: '全等三角形', points: 9, exercises: 35, key: '8-1' }, { name: '轴对称', points: 7, exercises: 26, key: '8-2' }, { name: '整式的乘法与因式分解', points: 10, exercises: 38, key: '8-3' }],
    9: [{ name: '一元二次方程', points: 8, exercises: 32, key: '9-0' }, { name: '二次函数', points: 10, exercises: 40, key: '9-1' }, { name: '旋转', points: 6, exercises: 22, key: '9-2' }, { name: '圆', points: 9, exercises: 36, key: '9-3' }],
  },
  'chinese-renjiao': {
    7: [{ name: '春', points: 5, exercises: 18, key: '7-0' }, { name: '济南的冬天', points: 4, exercises: 16, key: '7-1' }, { name: '古代诗歌四首', points: 6, exercises: 22, key: '7-2' }, { name: '从百草园到三味书屋', points: 5, exercises: 20, key: '7-3' }],
    8: [{ name: '新闻两则', points: 5, exercises: 20, key: '8-0' }, { name: '芦花荡', points: 4, exercises: 16, key: '8-1' }, { name: '阿长与山海经', points: 5, exercises: 22, key: '8-2' }, { name: '背影', points: 6, exercises: 24, key: '8-3' }],
    9: [{ name: '沁园春·雪', points: 5, exercises: 18, key: '9-0' }, { name: '我爱这土地', points: 4, exercises: 16, key: '9-1' }, { name: '乡愁', points: 4, exercises: 14, key: '9-2' }, { name: '敬业与乐业', points: 6, exercises: 24, key: '9-3' }],
  },
  'english-pep': {
    7: [{ name: "My name's Gina", points: 4, exercises: 20, key: '7-0' }, { name: "This is my sister", points: 5, exercises: 22, key: '7-1' }, { name: "Is there a post office near here?", points: 6, exercises: 25, key: '7-2' }, { name: "I'm watching TV", points: 5, exercises: 24, key: '7-3' }],
    8: [{ name: "Where did you go on vacation?", points: 5, exercises: 22, key: '8-0' }, { name: "How often do you exercise?", points: 5, exercises: 20, key: '8-1' }, { name: "I'm more outgoing than my sister", points: 6, exercises: 26, key: '8-2' }, { name: "What's the best movie theater?", points: 5, exercises: 22, key: '8-3' }],
    9: [{ name: "How can we become good learners?", points: 5, exercises: 24, key: '9-0' }, { name: "I think that mooncakes are delicious!", points: 6, exercises: 26, key: '9-1' }, { name: "Could you please tell me where the restrooms are?", points: 6, exercises: 28, key: '9-2' }, { name: "We're trying to save the earth!", points: 5, exercises: 22, key: '9-3' }],
  },
  'math-huadong': {
    7: [{ name: '走进数学世界', points: 4, exercises: 15, key: '7-0' }, { name: '有理数', points: 9, exercises: 35, key: '7-1' }, { name: '整式的加减', points: 7, exercises: 28, key: '7-2' }, { name: '图形的初步认识', points: 6, exercises: 22, key: '7-3' }],
    8: [{ name: '一元一次不等式', points: 7, exercises: 26, key: '8-0' }, { name: '二元一次方程组', points: 8, exercises: 30, key: '8-1' }, { name: '多边形', points: 6, exercises: 24, key: '8-2' }, { name: '轴对称与轴对称图形', points: 7, exercises: 28, key: '8-3' }],
    9: [{ name: '分式', points: 8, exercises: 30, key: '9-0' }, { name: '相似图形', points: 7, exercises: 26, key: '9-1' }, { name: '解直角三角形', points: 8, exercises: 32, key: '9-2' }, { name: '数据的整理与初步处理', points: 6, exercises: 22, key: '9-3' }],
  },
  'math-bsd': {
    7: [{ name: '丰富的图形世界', points: 5, exercises: 20, key: '7-0' }, { name: '有理数及其运算', points: 8, exercises: 32, key: '7-1' }, { name: '整式及其加减', points: 7, exercises: 26, key: '7-2' }, { name: '基本平面图形', points: 6, exercises: 24, key: '7-3' }],
    8: [{ name: '勾股定理', points: 6, exercises: 22, key: '8-0' }, { name: '实数', points: 7, exercises: 26, key: '8-1' }, { name: '位置与坐标', points: 5, exercises: 20, key: '8-2' }, { name: '一次函数', points: 8, exercises: 30, key: '8-3' }],
    9: [{ name: '特殊平行四边形', points: 8, exercises: 32, key: '9-0' }, { name: '一元二次方程', points: 8, exercises: 30, key: '9-1' }, { name: '概率的进一步认识', points: 5, exercises: 18, key: '9-2' }, { name: '直角三角形的边角关系', points: 7, exercises: 28, key: '9-3' }],
  },
  'math-suke': {
    7: [{ name: '我们身边的数学', points: 4, exercises: 16, key: '7-0' }, { name: '有理数', points: 8, exercises: 30, key: '7-1' }, { name: '用字母表示数', points: 6, exercises: 24, key: '7-2' }, { name: '一元一次方程', points: 7, exercises: 26, key: '7-3' }],
    8: [{ name: '数据的收集与整理', points: 5, exercises: 18, key: '8-0' }, { name: '勾股定理', points: 6, exercises: 24, key: '8-1' }, { name: '实数', points: 7, exercises: 28, key: '8-2' }, { name: '平面直角坐标系', points: 6, exercises: 22, key: '8-3' }],
    9: [{ name: '一元二次方程', points: 8, exercises: 30, key: '9-0' }, { name: '二次函数', points: 9, exercises: 34, key: '9-1' }, { name: '圆', points: 8, exercises: 32, key: '9-2' }, { name: '统计与概率', points: 7, exercises: 26, key: '9-3' }],
  },
  'chinese-sujiao': {
    7: [{ name: '为你打开一扇门', points: 4, exercises: 16, key: '7-0' }, { name: '繁星', points: 4, exercises: 14, key: '7-1' }, { name: '冰心诗三首', points: 5, exercises: 18, key: '7-2' }, { name: '安恩和奶牛', points: 4, exercises: 16, key: '7-3' }],
    8: [{ name: '长征组歌', points: 5, exercises: 18, key: '8-0' }, { name: '老山界', points: 5, exercises: 20, key: '8-1' }, { name: '草', points: 4, exercises: 16, key: '8-2' }, { name: '窗', points: 5, exercises: 22, key: '8-3' }],
    9: [{ name: '白杨礼赞', points: 5, exercises: 20, key: '9-0' }, { name: '紫藤萝瀑布', points: 4, exercises: 16, key: '9-1' }, { name: '风筝', points: 4, exercises: 14, key: '9-2' }, { name: '季羡林先生', points: 5, exercises: 18, key: '9-3' }],
  },
  'chinese-bsd': {
    7: [{ name: '童年的朋友', points: 4, exercises: 16, key: '7-0' }, { name: '一面', points: 4, exercises: 14, key: '7-1' }, { name: '从百草园到三味书屋', points: 5, exercises: 20, key: '7-2' }, { name: '最后一课', points: 5, exercises: 18, key: '7-3' }],
    8: [{ name: '浪之歌', points: 4, exercises: 14, key: '8-0' }, { name: '雨之歌', points: 4, exercises: 14, key: '8-1' }, { name: '敬畏自然', points: 5, exercises: 18, key: '8-2' }, { name: '罗布泊，消逝的仙湖', points: 5, exercises: 20, key: '8-3' }],
    9: [{ name: '诗两首', points: 4, exercises: 16, key: '9-0' }, { name: '星星变奏曲', points: 4, exercises: 14, key: '9-1' }, { name: '外国诗两首', points: 4, exercises: 14, key: '9-2' }, { name: '致女儿的信', points: 5, exercises: 18, key: '9-3' }],
  },
  'chinese-yuwen': {
    7: [{ name: '忆读书', points: 4, exercises: 16, key: '7-0' }, { name: '我的母亲', points: 4, exercises: 14, key: '7-1' }, { name: '我的老师', points: 4, exercises: 14, key: '7-2' }, { name: '我的信念', points: 4, exercises: 16, key: '7-3' }],
    8: [{ name: '新闻两篇', points: 5, exercises: 18, key: '8-0' }, { name: '芦花荡', points: 4, exercises: 16, key: '8-1' }, { name: '蜡烛', points: 4, exercises: 14, key: '8-2' }, { name: '就英法联军远征中国致巴特勒上尉的信', points: 5, exercises: 20, key: '8-3' }],
    9: [{ name: '沁园春·雪', points: 5, exercises: 18, key: '9-0' }, { name: '雨说', points: 4, exercises: 14, key: '9-1' }, { name: '星星变奏曲', points: 4, exercises: 14, key: '9-2' }, { name: '外国诗两首', points: 4, exercises: 14, key: '9-3' }],
  },
  'english-waiyan': {
    7: [{ name: 'Nice to meet you', points: 4, exercises: 18, key: '7-0' }, { name: "I'm from China", points: 5, exercises: 20, key: '7-1' }, { name: 'My school day', points: 5, exercises: 22, key: '7-2' }, { name: 'My family', points: 4, exercises: 18, key: '7-3' }],
    8: [{ name: 'Will people have robots?', points: 5, exercises: 20, key: '8-0' }, { name: 'What should I do?', points: 5, exercises: 22, key: '8-1' }, { name: 'What were you doing when the UFO arrived?', points: 6, exercises: 24, key: '8-2' }, { name: 'He said I was hard-working', points: 5, exercises: 22, key: '8-3' }],
    9: [{ name: 'How to learn English well?', points: 5, exercises: 22, key: '9-0' }, { name: 'We need to protect animals', points: 6, exercises: 24, key: '9-1' }, { name: 'Great inventions', points: 5, exercises: 22, key: '9-2' }, { name: 'Australia', points: 5, exercises: 20, key: '9-3' }],
  },
  'english-yilin': {
    7: [{ name: 'This is me!', points: 4, exercises: 18, key: '7-0' }, { name: 'My family and friends', points: 5, exercises: 20, key: '7-1' }, { name: 'My day', points: 5, exercises: 22, key: '7-2' }, { name: 'My neighbourhood', points: 4, exercises: 18, key: '7-3' }],
    8: [{ name: 'Friends', points: 5, exercises: 20, key: '8-0' }, { name: 'School life', points: 5, exercises: 22, key: '8-1' }, { name: 'A trip to the zoo', points: 5, exercises: 20, key: '8-2' }, { name: 'Seasons', points: 5, exercises: 22, key: '8-3' }],
    9: [{ name: 'Know yourself', points: 5, exercises: 22, key: '9-0' }, { name: 'Colours', points: 4, exercises: 18, key: '9-1' }, { name: 'Teenage problems', points: 5, exercises: 22, key: '9-2' }, { name: 'Great people', points: 5, exercises: 22, key: '9-3' }],
  },
  'english-hujiao': {
    7: [{ name: 'Meeting new people', points: 4, exercises: 18, key: '7-0' }, { name: 'My daily life', points: 5, exercises: 20, key: '7-1' }, { name: 'Places and activities', points: 5, exercises: 22, key: '7-2' }, { name: 'What can you do?', points: 4, exercises: 18, key: '7-3' }],
    8: [{ name: 'Pen pals', points: 5, exercises: 20, key: '8-0' }, { name: 'My neighbourhood', points: 5, exercises: 22, key: '8-1' }, { name: 'Our wonderful world', points: 5, exercises: 20, key: '8-2' }, { name: 'Rules around us', points: 5, exercises: 22, key: '8-3' }],
    9: [{ name: 'The body and the mind', points: 5, exercises: 22, key: '9-0' }, { name: 'My future', points: 5, exercises: 22, key: '9-1' }, { name: 'Protecting our environment', points: 5, exercises: 24, key: '9-2' }, { name: 'Going places', points: 5, exercises: 22, key: '9-3' }],
  },
  'physics-renjiao': {
    8: [{ name: '声现象', points: 5, exercises: 20, key: '8-0' }, { name: '光现象', points: 7, exercises: 28, key: '8-1' }, { name: '透镜及其应用', points: 6, exercises: 24, key: '8-2' }, { name: '物态变化', points: 5, exercises: 22, key: '8-3' }],
    9: [{ name: '内能', points: 5, exercises: 20, key: '9-0' }, { name: '电流和电路', points: 7, exercises: 28, key: '9-1' }, { name: '电压和电阻', points: 7, exercises: 28, key: '9-2' }, { name: '电功率', points: 8, exercises: 32, key: '9-3' }],
  },
  'physics-suke': {
    8: [{ name: '声现象', points: 5, exercises: 18, key: '8-0' }, { name: '光的折射', points: 6, exercises: 22, key: '8-1' }, { name: '物质的物理属性', points: 6, exercises: 24, key: '8-2' }, { name: '力', points: 7, exercises: 28, key: '8-3' }],
    9: [{ name: '简单机械和功', points: 7, exercises: 26, key: '9-0' }, { name: '机械能与内能', points: 7, exercises: 28, key: '9-1' }, { name: '电路初探', points: 7, exercises: 26, key: '9-2' }, { name: '欧姆定律', points: 8, exercises: 30, key: '9-3' }],
  },
  'physics-huyue': {
    8: [{ name: '声音与环境', points: 5, exercises: 18, key: '8-0' }, { name: '光与眼睛', points: 6, exercises: 24, key: '8-1' }, { name: '物质的形态与变化', points: 5, exercises: 20, key: '8-2' }, { name: '物质的密度', points: 6, exercises: 22, key: '8-3' }],
    9: [{ name: '机械与功', points: 7, exercises: 26, key: '9-0' }, { name: '内能与热机', points: 6, exercises: 24, key: '9-1' }, { name: '电磁探秘', points: 7, exercises: 28, key: '9-2' }, { name: '电功与电功率', points: 7, exercises: 28, key: '9-3' }],
  },
  'chemistry-renjiao': {
    9: [{ name: '走进化学世界', points: 4, exercises: 16, key: '9-0' }, { name: '我们周围的空气', points: 6, exercises: 25, key: '9-1' }, { name: '物质构成的奥秘', points: 7, exercises: 28, key: '9-2' }, { name: '自然界的水', points: 5, exercises: 22, key: '9-3' }],
  },
  'chemistry-hujiao': {
    9: [{ name: '化学的魅力', points: 4, exercises: 16, key: '9-0' }, { name: '浩瀚的大气', points: 5, exercises: 20, key: '9-1' }, { name: '走进溶液世界', points: 6, exercises: 24, key: '9-2' }, { name: '燃烧与灭火', points: 5, exercises: 22, key: '9-3' }],
  },
  'chemistry-yuejiao': {
    9: [{ name: '身边的化学物质', points: 4, exercises: 16, key: '9-0' }, { name: '物质构成的奥秘', points: 6, exercises: 24, key: '9-1' }, { name: '燃烧与灭火', points: 5, exercises: 20, key: '9-2' }, { name: '金属与金属材料', points: 5, exercises: 22, key: '9-3' }],
  },
  'biology-renjiao': {
    7: [{ name: '生物和生物圈', points: 3, exercises: 12, key: '7-0' }, { name: '了解生物圈', points: 4, exercises: 16, key: '7-1' }, { name: '细胞是生命活动的基本单位', points: 6, exercises: 24, key: '7-2' }, { name: '细胞怎样构成生物体', points: 5, exercises: 20, key: '7-3' }],
    8: [{ name: '生物圈中的绿色植物', points: 5, exercises: 20, key: '8-0' }, { name: '生物圈中的人', points: 6, exercises: 24, key: '8-1' }, { name: '生物圈中的其他生物', points: 5, exercises: 20, key: '8-2' }, { name: '生物的生殖与发育', points: 5, exercises: 22, key: '8-3' }],
  },
  'biology-bsd': {
    7: [{ name: '认识生命', points: 4, exercises: 16, key: '7-0' }, { name: '细胞', points: 5, exercises: 20, key: '7-1' }, { name: '生物圈', points: 4, exercises: 16, key: '7-2' }, { name: '绿色植物', points: 5, exercises: 20, key: '7-3' }],
    8: [{ name: '生物体的结构层次', points: 5, exercises: 20, key: '8-0' }, { name: '生物与环境', points: 5, exercises: 18, key: '8-1' }, { name: '生物圈中的绿色植物', points: 5, exercises: 20, key: '8-2' }, { name: '生物圈中的人', points: 6, exercises: 24, key: '8-3' }],
  },
  'biology-jinan': {
    7: [{ name: '奇妙的生命世界', points: 4, exercises: 14, key: '7-0' }, { name: '观察生物', points: 4, exercises: 16, key: '7-1' }, { name: '细胞是生物体结构和功能的基本单位', points: 5, exercises: 20, key: '7-2' }, { name: '生物体的组成', points: 5, exercises: 18, key: '7-3' }],
    8: [{ name: '生物的运动', points: 4, exercises: 16, key: '8-0' }, { name: '生物的生殖', points: 5, exercises: 18, key: '8-1' }, { name: '生物的遗传和变异', points: 5, exercises: 22, key: '8-2' }, { name: '生物的进化', points: 4, exercises: 16, key: '8-3' }],
  },
  'history-bubian': {
    7: [{ name: '中国境内早期人类与文明的起源', points: 5, exercises: 20, key: '7-0' }, { name: '夏商周时期', points: 6, exercises: 24, key: '7-1' }, { name: '秦汉时期', points: 7, exercises: 28, key: '7-2' }, { name: '三国两晋南北朝时期', points: 6, exercises: 22, key: '7-3' }],
    8: [{ name: '隋唐时期', points: 7, exercises: 28, key: '8-0' }, { name: '宋元时期', points: 7, exercises: 26, key: '8-1' }, { name: '明清时期', points: 6, exercises: 24, key: '8-2' }, { name: '中国开始沦为半殖民地半封建社会', points: 6, exercises: 24, key: '8-3' }],
    9: [{ name: '近代化的早期探索', points: 6, exercises: 24, key: '9-0' }, { name: '新民主主义革命的开始', points: 7, exercises: 28, key: '9-1' }, { name: '中华民族的抗日战争', points: 6, exercises: 24, key: '9-2' }, { name: '人民解放战争的胜利', points: 6, exercises: 22, key: '9-3' }],
  },
  'history-bsd': {
    7: [{ name: '中华文明的起源', points: 4, exercises: 16, key: '7-0' }, { name: '国家的产生与社会变革', points: 5, exercises: 20, key: '7-1' }, { name: '统一国家的建立', points: 6, exercises: 24, key: '7-2' }, { name: '政权分立与民族融合', points: 5, exercises: 20, key: '7-3' }],
    8: [{ name: '繁荣与开放的社会', points: 6, exercises: 24, key: '8-0' }, { name: '经济重心的南移和民族关系的发展', points: 6, exercises: 22, key: '8-1' }, { name: '统一多民族国家的巩固和社会危机', points: 6, exercises: 24, key: '8-2' }, { name: '侵略与反抗', points: 5, exercises: 20, key: '8-3' }],
    9: [{ name: '近代化的艰难起步', points: 6, exercises: 24, key: '9-0' }, { name: '新民主主义革命的兴起', points: 6, exercises: 22, key: '9-1' }, { name: '抗日战争', points: 6, exercises: 24, key: '9-2' }, { name: '解放战争', points: 5, exercises: 20, key: '9-3' }],
  },
  'history-huadong': {
    7: [{ name: '中华文明的起源', points: 4, exercises: 16, key: '7-0' }, { name: '夏商周时代', points: 5, exercises: 20, key: '7-1' }, { name: '秦汉时期', points: 6, exercises: 24, key: '7-2' }, { name: '三国两晋南北朝', points: 5, exercises: 20, key: '7-3' }],
    8: [{ name: '隋唐时期', points: 6, exercises: 24, key: '8-0' }, { name: '宋元时期', points: 6, exercises: 22, key: '8-1' }, { name: '明清时期', points: 6, exercises: 22, key: '8-2' }, { name: '列强侵华与中国人民的抗争', points: 6, exercises: 24, key: '8-3' }],
    9: [{ name: '近代中国的艰难历程', points: 6, exercises: 22, key: '9-0' }, { name: '新民主主义革命', points: 6, exercises: 24, key: '9-1' }, { name: '抗日战争与解放战争', points: 6, exercises: 24, key: '9-2' }, { name: '新中国的成立与建设', points: 5, exercises: 20, key: '9-3' }],
  },
  'geography-renjiao': {
    7: [{ name: '地球和地球仪', points: 4, exercises: 16, key: '7-0' }, { name: '地球的运动', points: 5, exercises: 20, key: '7-1' }, { name: '地图的阅读', points: 6, exercises: 24, key: '7-2' }, { name: '陆地和海洋', points: 5, exercises: 18, key: '7-3' }],
    8: [{ name: '从世界看中国', points: 5, exercises: 20, key: '8-0' }, { name: '中国的自然环境', points: 6, exercises: 24, key: '8-1' }, { name: '中国的自然资源', points: 5, exercises: 20, key: '8-2' }, { name: '中国经济的发展', points: 5, exercises: 22, key: '8-3' }],
  },
  'geography-xiangjiao': {
    7: [{ name: '让我们走进地理', points: 3, exercises: 12, key: '7-0' }, { name: '地球的面貌', points: 5, exercises: 20, key: '7-1' }, { name: '世界的居民', points: 5, exercises: 18, key: '7-2' }, { name: '世界的气候', points: 6, exercises: 22, key: '7-3' }],
    8: [{ name: '中国的疆域与人口', points: 5, exercises: 20, key: '8-0' }, { name: '中国的自然环境', points: 6, exercises: 24, key: '8-1' }, { name: '中国的自然资源', points: 5, exercises: 20, key: '8-2' }, { name: '中国的地域差异', points: 5, exercises: 22, key: '8-3' }],
  },
  'geography-zhongtu': {
    7: [{ name: '地球和地图', points: 4, exercises: 16, key: '7-0' }, { name: '大洲和大洋', points: 5, exercises: 18, key: '7-1' }, { name: '世界的气候', points: 6, exercises: 22, key: '7-2' }, { name: '世界的居民和国家', points: 5, exercises: 18, key: '7-3' }],
    8: [{ name: '中国疆域和行政区划', points: 4, exercises: 16, key: '8-0' }, { name: '中国自然环境', points: 6, exercises: 24, key: '8-1' }, { name: '中国自然资源', points: 5, exercises: 20, key: '8-2' }, { name: '中国经济与文化', points: 5, exercises: 22, key: '8-3' }],
  },
  'politics-bubian': {
    7: [{ name: '成长的节拍', points: 4, exercises: 16, key: '7-0' }, { name: '友谊的天空', points: 5, exercises: 20, key: '7-1' }, { name: '师长情谊', points: 6, exercises: 24, key: '7-2' }, { name: '生命的思考', points: 5, exercises: 18, key: '7-3' }],
    8: [{ name: '走进社会生活', points: 5, exercises: 20, key: '8-0' }, { name: '遵守社会规则', points: 5, exercises: 22, key: '8-1' }, { name: '承担责任', points: 5, exercises: 20, key: '8-2' }, { name: '维护国家利益', points: 5, exercises: 22, key: '8-3' }],
    9: [{ name: '踏上社会之路', points: 5, exercises: 20, key: '9-0' }, { name: '创新驱动发展', points: 5, exercises: 22, key: '9-1' }, { name: '民主与法治', points: 6, exercises: 24, key: '9-2' }, { name: '和谐与梦想', points: 5, exercises: 22, key: '9-3' }],
  },
  'politics-yuejiao': {
    7: [{ name: '认识自我', points: 4, exercises: 16, key: '7-0' }, { name: '学会交往', points: 5, exercises: 20, key: '7-1' }, { name: '学会学习', points: 5, exercises: 20, key: '7-2' }, { name: '珍爱生命', points: 4, exercises: 16, key: '7-3' }],
    8: [{ name: '权利与义务', points: 5, exercises: 22, key: '8-0' }, { name: '法律保护我们', points: 5, exercises: 20, key: '8-1' }, { name: '社会生活', points: 5, exercises: 20, key: '8-2' }, { name: '承担责任', points: 5, exercises: 22, key: '8-3' }],
    9: [{ name: '认识国情', points: 5, exercises: 20, key: '9-0' }, { name: '基本路线', points: 4, exercises: 16, key: '9-1' }, { name: '中华文化与民族精神', points: 5, exercises: 20, key: '9-2' }, { name: '理想与使命', points: 5, exercises: 22, key: '9-3' }],
  },
  'politics-shanjiao': {
    7: [{ name: '新学校，新同学', points: 4, exercises: 16, key: '7-0' }, { name: '融入新集体', points: 4, exercises: 14, key: '7-1' }, { name: '感受生命的意义', points: 5, exercises: 18, key: '7-2' }, { name: '过富有情趣的生活', points: 4, exercises: 16, key: '7-3' }],
    8: [{ name: '感受法律', points: 5, exercises: 20, key: '8-0' }, { name: '维护权利', points: 5, exercises: 22, key: '8-1' }, { name: '履行义务', points: 5, exercises: 20, key: '8-2' }, { name: '维护社会公平正义', points: 5, exercises: 22, key: '8-3' }],
    9: [{ name: '在社会生活中成长', points: 5, exercises: 20, key: '9-0' }, { name: '我的权利与义务', points: 5, exercises: 22, key: '9-1' }, { name: '走进法律', points: 5, exercises: 20, key: '9-2' }, { name: '感受中国特色社会主义', points: 5, exercises: 22, key: '9-3' }],
  },
};

function getChapters(subjectId, textbookId) {
  const key = `${subjectId}-${textbookId}`;
  return chapterData[key] || null;
}

export default function PracticePage() {
  const { subjectId, textbookId } = useParams();
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const subject = getSubjectById(subjectId);
  const textbook = getTextbook(subjectId, textbookId);

  const [activeGrade, setActiveGrade] = useState(() => {
    const ch = getChapters(subjectId, textbookId);
    const keys = ch ? Object.keys(ch).sort() : [];
    return keys[0] || null;
  });
  const [activeChapter, setActiveChapter] = useState(null);
  const [quizState, setQuizState] = useState(null); // { questions, currentIndex, answers, submitted }
  const [results, setResults] = useState(null);

  const chapters = useMemo(() => getChapters(subjectId, textbookId), [subjectId, textbookId]);
  const gradeKeys = chapters ? Object.keys(chapters).sort() : [];
  const progress = useMemo(() => user ? getProgress(user.username) : {}, [user]);

  useEffect(() => {
    if (loading) return;
    if (!user) navigate('/login');
    else updateStreak(user.username);
  }, [user, loading]);

  if (loading || !user) return <div style={{ textAlign: 'center', padding: 80, color: '#94A3B8' }}>加载中...</div>;

  if (!subject || !textbook) return <div style={{ textAlign: 'center', padding: 80 }}>页面不存在</div>;

  const isQuestionCorrect = (q, userAnswer) => {
    if (!userAnswer && userAnswer !== 0) return false;
    if (q.type === 'shortanswer') {
      return q.acceptableAnswers?.some(keyword =>
        String(userAnswer).includes(keyword)
      ) || false;
    }
    if (q.type === 'matching') {
      const correctPairs = q.answer.split(',').map(p => p.trim());
      const userPairs = String(userAnswer).split(',').map(p => p.trim());
      if (correctPairs.length !== userPairs.length) return false;
      return correctPairs.every(cp => userPairs.includes(cp));
    }
    return userAnswer === q.answer || String(userAnswer).trim() === String(q.answer).trim();
  };

  const startQuiz = (chapter) => {
    const qKey = `${subjectId}-${textbookId}-${chapter.key}`;
    const data = getQuestions(qKey);
    if (!data || !data.questions.length) {
      alert('该章节暂无题目，敬请期待！');
      return;
    }
    setActiveChapter(chapter);
    setQuizState({ questions: data.questions, currentIndex: 0, answers: {}, submittedIds: [], submitted: false });
    setResults(null);
  };

  const submitAnswer = () => {
    const q = quizState.questions[quizState.currentIndex];
    const userAnswer = quizState.answers[q.id];
    // 填空题/简答题/连线题允许提交空答案（提交后标记为已答）
    if (!userAnswer && userAnswer !== 0 && q.type !== 'fill' && q.type !== 'shortanswer' && q.type !== 'matching') return;
    // 填空/简答题/连线题如果没有填入任何内容也不允许提交
    if ((q.type === 'fill' || q.type === 'shortanswer') && (!userAnswer || !String(userAnswer).trim())) return;
    if (q.type === 'matching') {
      const pairs = q.pairs || [];
      const currentAnswer = String(userAnswer || '');
      const allSelected = pairs.every(p => currentAnswer.includes(p.left + '-'));
      if (!allSelected) return;
    }
    if (!quizState.submittedIds.includes(q.id)) {
      setQuizState({ ...quizState, submittedIds: [...quizState.submittedIds, q.id] });
    }
  };

  const nextQuestion = () => {
    if (quizState.currentIndex < quizState.questions.length - 1) {
      setQuizState({ ...quizState, currentIndex: quizState.currentIndex + 1 });
    } else {
      // Finish quiz
      const finalAnswers = quizState.answers;
      const correct = quizState.questions.filter(q => {
        return isQuestionCorrect(q, finalAnswers[q.id]);
      }).length;
      const total = quizState.questions.length;
      const score = Math.round((correct / total) * 100);
      const wrongList = quizState.questions.filter(q => {
        return !isQuestionCorrect(q, finalAnswers[q.id]);
      });

      // Save progress
      const progressKey = `${subjectId}-${textbookId}-${activeChapter.key}`;
      const existing = progress[progressKey] || {};
      updateProgress(user.username, progressKey, {
        score: Math.max(existing.score || 0, score),
        totalQuestions: total,
        correctQuestions: correct,
        completedAt: Date.now(),
        attempts: (existing.attempts || 0) + 1,
      });

      // Save practice record
      savePracticeRecord(user.username, {
        subjectId, textbookId, chapterKey: activeChapter.key,
        chapterName: activeChapter.name, score, correct, total,
      });

      // Save wrong questions
      wrongList.forEach(q => {
        addWrongQuestion(user.username, {
          ...q,
          subjectId, textbookId, chapterName: activeChapter.name,
          userAnswer: finalAnswers[q.id],
        });
      });

      setResults({ correct, total, score, wrongList, answers: finalAnswers });
    }
  };

  const resetQuiz = () => {
    setActiveChapter(null);
    setQuizState(null);
    setResults(null);
  };

  // If in quiz mode
  if (quizState && activeChapter) {
    const q = quizState.questions[quizState.currentIndex];
    const isAnswered = quizState.submittedIds.includes(q.id);
    const isCorrect = isAnswered && isQuestionCorrect(q, quizState.answers[q.id]);

    // 为连线题生成稳定的打乱顺序
    const matchingShuffled = (() => {
      if (q.type !== 'matching' || !q.pairs) return [];
      const rights = [...new Set(q.pairs.map(p => p.right))];
      const hash = q.id.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
      return [...rights].sort((a, b) => {
        const ha = a.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) + hash;
        const hb = b.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) + hash;
        return ha - hb;
      });
    })();

    if (results) {
      return (
        <div style={{ maxWidth: 800, margin: '40px auto', padding: '0 24px' }}>
          <div style={{ background: '#fff', borderRadius: 16, padding: 32, boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <h2 style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 700, color: '#1E293B', marginBottom: 8 }}>练习完成！</h2>
            <div style={{ textAlign: 'center', marginBottom: 32 }}>
              <span style={{ fontSize: '3rem', fontWeight: 700, color: results.score >= 80 ? '#22C55E' : results.score >= 60 ? '#F59E0B' : '#EF4444' }}>{results.score}</span>
              <span style={{ fontSize: '1.25rem', color: '#64748B' }}>分</span>
              <div style={{ color: '#64748B', marginTop: 8 }}>答对 {results.correct}/{results.total} 题</div>
            </div>
            <div style={{ marginBottom: 24 }}>
              {quizState.questions.map((item, i) => {
                const a = results.answers[item.id];
                const correct = isQuestionCorrect(item, a);
                const formatAnswer = (ans) => {
                  if (!ans) return '未作答';
                  if (item.type === 'matching') {
                    return ans.split(',').map(p => {
                      const parts = p.split('-');
                      return parts[0] + ' → ' + parts.slice(1).join('-');
                    }).join('；');
                  }
                  return ans;
                };
                return (
                  <div key={item.id} style={{ padding: 16, marginBottom: 12, borderRadius: 12, border: '1px solid', borderColor: correct ? '#22C55E' : '#EF4444', background: correct ? '#F0FDF4' : '#FEF2F2' }}>
                    <div style={{ fontWeight: 600, marginBottom: 6, color: '#1E293B' }}>第{i+1}题 {correct ? '✅' : '❌'}</div>
                    <div style={{ color: '#475569', marginBottom: 4 }}>{item.question}</div>
                    <div style={{ fontSize: '0.875rem' }}>
                      <span>你的答案：<span style={{ color: correct ? '#22C55E' : '#EF4444', fontWeight: 600 }}>{formatAnswer(a)}</span></span>
                      {!correct && <span style={{ marginLeft: 16, display: 'inline-block' }}>正确答案：<span style={{ color: '#22C55E', fontWeight: 600 }}>{formatAnswer(item.answer)}</span></span>}
                    </div>
                    <div style={{ fontSize: '0.8125rem', color: '#64748B', marginTop: 4, fontStyle: 'italic' }}>{item.explanation}</div>
                  </div>
                );
              })}
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={resetQuiz} style={{ flex: 1, padding: '12px', borderRadius: 12, border: '1px solid #E2E8F0', background: '#fff', color: '#1E293B', fontWeight: 600, cursor: 'pointer' }}>返回章节</button>
              <button onClick={() => { resetQuiz(); startQuiz(activeChapter); }} style={{ flex: 1, padding: '12px', borderRadius: 12, border: 'none', background: '#3B82F6', color: '#fff', fontWeight: 600, cursor: 'pointer' }}>重新练习</button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div style={{ maxWidth: 800, margin: '40px auto', padding: '0 24px' }}>
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: 16 }}>
          <Link to={`/practice/${subjectId}/${textbookId}`} style={{ color: '#64748B', textDecoration: 'none' }}>返回章节列表</Link>
        </div>
        {/* Progress bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <div style={{ flex: 1, height: 6, borderRadius: 3, background: '#E2E8F0' }}>
            <div style={{ width: `${((quizState.currentIndex + 1) / quizState.questions.length) * 100}%`, height: 6, borderRadius: 3, background: subject.color }} />
          </div>
          <span style={{ fontSize: '0.875rem', color: '#64748B' }}>{quizState.currentIndex + 1}/{quizState.questions.length}</span>
        </div>
        {/* Question card */}
        <div style={{ background: '#fff', borderRadius: 16, padding: 32, boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <span style={{ padding: '2px 8px', borderRadius: 6, fontSize: '0.75rem', background: subject.color + '18', color: subject.color, fontWeight: 600 }}>
              {q.type === 'choice' ? '选择题' : q.type === 'fill' ? '填空题' : q.type === 'truefalse' ? '判断题' : q.type === 'matching' ? '连线题' : '简答题'}
            </span>
            <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>难度: {'★'.repeat(q.difficulty)}{'☆'.repeat(3 - q.difficulty)}</span>
          </div>
          <h3 style={{ fontSize: '1.125rem', color: '#1E293B', marginBottom: 24, lineHeight: 1.6 }}>{q.question}</h3>

          {q.type === 'choice' || q.type === 'truefalse' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {q.options.map((opt, i) => (
                <button key={i} onClick={() => {
                  if (!isAnswered) setQuizState({ ...quizState, answers: { ...quizState.answers, [q.id]: opt[0] } });
                }} style={{
                  padding: '14px 16px', borderRadius: 12, border: `2px solid ${isAnswered ? (opt[0] === q.answer ? '#22C55E' : opt[0] === quizState.answers[q.id] ? '#EF4444' : '#E2E8F0') : (quizState.answers[q.id] === opt[0] ? '#3B82F6' : '#E2E8F0')}`,
                  background: isAnswered ? (opt[0] === q.answer ? '#F0FDF4' : opt[0] === quizState.answers[q.id] ? '#FEF2F2' : '#fff') : (quizState.answers[q.id] === opt[0] ? '#EFF6FF' : '#fff'),
                  cursor: isAnswered ? 'default' : 'pointer', textAlign: 'left', fontSize: '0.9375rem', color: '#1E293B',
                  transition: 'all 0.15s',
                }}>{opt}</button>
              ))}
            </div>
          ) : q.type === 'matching' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {(() => {
                const currentAnswer = quizState.answers[q.id] || '';
                const userPairs = currentAnswer ? currentAnswer.split(',') : [];
                const userMap = {};
                userPairs.forEach(pair => {
                  const [l, ...r] = pair.split('-');
                  userMap[l] = r.join('-');
                });
                return q.pairs.map((pair, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px', background: '#F8FAFC', borderRadius: 8 }}>
                    <span style={{ flex: 1, fontWeight: 600, color: '#1E293B', textAlign: 'right' }}>{pair.left}</span>
                    <span style={{ color: '#94A3B8' }}>&rarr;</span>
                    <select
                      disabled={isAnswered}
                      value={userMap[pair.left] || ''}
                      onChange={e => {
                        const newUserMap = { ...userMap, [pair.left]: e.target.value };
                        const newAnswerStr = q.pairs.map(p => `${p.left}-${newUserMap[p.left] || ''}`).join(',');
                        setQuizState({ ...quizState, answers: { ...quizState.answers, [q.id]: newAnswerStr } });
                      }}
                      style={{ flex: 1, padding: '8px 12px', borderRadius: 8, border: '2px solid #E2E8F0', fontSize: '0.9375rem', background: '#fff', color: '#1E293B', outline: 'none' }}
                    >
                      <option value="">请选择</option>
                      {matchingShuffled.map(r => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>
                ));
              })()}
            </div>
          ) : q.type === 'shortanswer' ? (
            <textarea
              disabled={isAnswered}
              value={quizState.answers[q.id] || ''}
              onChange={e => setQuizState({ ...quizState, answers: { ...quizState.answers, [q.id]: e.target.value } })}
              placeholder="请输入你的答案..."
              rows={4}
              style={{
                width: '100%', padding: '12px 16px', borderRadius: 12,
                border: `2px solid ${isAnswered ? (isCorrect ? '#22C55E' : '#EF4444') : '#E2E8F0'}`,
                fontSize: '1rem', outline: 'none', background: '#F8FAFC', resize: 'vertical',
                lineHeight: 1.6,
              }}
            />
          ) : (
            <input
              disabled={isAnswered}
              value={quizState.answers[q.id] || ''}
              onChange={e => setQuizState({ ...quizState, answers: { ...quizState.answers, [q.id]: e.target.value } })}
              placeholder="输入你的答案"
              style={{
                width: '100%', padding: '12px 16px', borderRadius: 12,
                border: `2px solid ${isAnswered ? (isCorrect ? '#22C55E' : '#EF4444') : '#E2E8F0'}`,
                fontSize: '1rem', outline: 'none', background: '#F8FAFC',
              }}
            />
          )}

          {isAnswered && (
            <div style={{ marginTop: 16, padding: 16, borderRadius: 12, background: isCorrect ? '#F0FDF4' : '#FEF2F2', border: `1px solid ${isCorrect ? '#BBF7D0' : '#FECACA'}` }}>
              <div style={{ fontWeight: 600, color: isCorrect ? '#15803D' : '#DC2626', marginBottom: 4 }}>{isCorrect ? '✅ 回答正确' : '❌ 回答错误'}</div>
              <div style={{ fontSize: '0.875rem', color: '#475569' }}>解析：{q.explanation}</div>
            </div>
          )}

          <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
            {!isAnswered && (() => {
              const canSubmit = (() => {
                const a = quizState.answers[q.id];
                if (q.type === 'choice' || q.type === 'truefalse') return !!a;
                if (q.type === 'fill' || q.type === 'shortanswer') return a && String(a).trim().length > 0;
                if (q.type === 'matching') {
                  const pairs = q.pairs || [];
                  const cur = String(a || '');
                  return pairs.every(p => cur.includes(p.left + '-'));
                }
                return !!a;
              })();
              return (
                <button onClick={submitAnswer} disabled={!canSubmit} style={{
                  flex: 1, padding: '14px', borderRadius: 12, border: 'none',
                  background: canSubmit ? '#3B82F6' : '#CBD5E1', color: '#fff',
                  fontWeight: 600, cursor: canSubmit ? 'pointer' : 'not-allowed', fontSize: '1rem',
                }}>提交答案</button>
              );
            })()}
            {isAnswered && (
              <button onClick={nextQuestion} style={{
                flex: 1, padding: '14px', borderRadius: 12, border: 'none',
                background: subject.color, color: '#fff', fontWeight: 600, cursor: 'pointer', fontSize: '1rem',
              }}>
                {quizState.currentIndex < quizState.questions.length - 1 ? '下一题' : '完成练习'}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Chapter list view
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '24px' }}>
      {/* Breadcrumb */}
      <div style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: 24 }}>
        <Link to="/" style={{ color: '#64748B', textDecoration: 'none' }}>首页</Link>
        <span style={{ margin: '0 8px' }}>›</span>
        <Link to={`/subject/${subjectId}`} style={{ color: '#64748B', textDecoration: 'none' }}>{subject.name}</Link>
        <span style={{ margin: '0 8px' }}>›</span>
        <span style={{ color: subject.color, fontWeight: 600 }}>{textbook.name}</span>
      </div>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, padding: 24, background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1E293B' }}>{subject.name} · {textbook.name}</h1>
          <p style={{ fontSize: '0.875rem', color: '#64748B', marginTop: 4 }}>{textbook.publisher}</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '0.8125rem', color: '#64748B' }}>学习进度</div>
          <div style={{ width: 120, height: 6, borderRadius: 3, background: '#E2E8F0', marginTop: 4 }}>
            <div style={{ width: `${Math.min(Object.keys(progress).filter(k => k.startsWith(`${subjectId}-${textbookId}`)).length / (textbook.knowledgePoints || 10) * 100, 100)}%`, height: 6, borderRadius: 3, background: subject.color }} />
          </div>
        </div>
      </div>

      {!chapters ? (
        <div style={{ textAlign: 'center', padding: 60, color: '#64748B' }}>
          该教材版本的章节内容正在准备中，敬请期待。
        </div>
      ) : (
        <>
          <div style={{ display: 'flex', gap: 0, marginBottom: 24, borderBottom: '2px solid #E2E8F0' }}>
            {gradeKeys.map(g => (
              <button key={g} onClick={() => setActiveGrade(g)} style={{
                padding: '10px 24px', border: 'none', background: 'none',
                fontSize: '1rem', fontWeight: activeGrade === g ? 600 : 400,
                color: activeGrade === g ? subject.color : '#64748B',
                borderBottom: activeGrade === g ? `3px solid ${subject.color}` : '3px solid transparent',
                cursor: 'pointer', marginBottom: -2,
              }}>{g}年级</button>
            ))}
          </div>

          {/* Chapter List */}
          {activeGrade && chapters[activeGrade] && (
            <div style={{ display: 'grid', gap: 12 }}>
              {chapters[activeGrade].map((ch, i) => {
                const pKey = `${subjectId}-${textbookId}-${ch.key}`;
                const p = progress[pKey];
                const status = p ? 'completed' : 'not-started';
                return (
                  <div key={i} onClick={() => startQuiz(ch)} style={{
                    display: 'flex', alignItems: 'center', gap: 16, padding: 20,
                    background: '#fff', borderRadius: 12, cursor: 'pointer',
                    borderLeft: `4px solid ${status === 'completed' ? '#22C55E' : '#E2E8F0'}`,
                    boxShadow: '0 2px 6px rgba(0,0,0,0.04)', transition: 'box-shadow 0.2s',
                  }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: status === 'completed' ? '#DCFCE7' : '#F1F5F9',
                      color: status === 'completed' ? '#22C55E' : '#64748B', fontWeight: 700, fontSize: '0.875rem', flexShrink: 0,
                    }}>
                      {status === 'completed' ? '✓' : `第${i + 1}章`}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, color: '#1E293B', marginBottom: 2 }}>{ch.name}</div>
                      <div style={{ fontSize: '0.8125rem', color: '#64748B' }}>{ch.points}个知识点 · {ch.exercises}道练习题</div>
                    </div>
                    {p && (
                      <div style={{ fontSize: '0.875rem', fontWeight: 600, color: p.score >= 80 ? '#22C55E' : '#F59E0B' }}>
                        最高 {p.score}分
                      </div>
                    )}
                    <span style={{ color: '#CBD5E1', fontSize: '1.25rem' }}>›</span>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
}