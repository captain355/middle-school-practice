const STORAGE_PREFIX = 'practice_app_';

export function getStorage(key, defaultValue = null) {
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + key);
    return raw ? JSON.parse(raw) : defaultValue;
  } catch {
    return defaultValue;
  }
}

export function setStorage(key, value) {
  localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value));
}

export function removeStorage(key) {
  localStorage.removeItem(STORAGE_PREFIX + key);
}

// 用户数据管理
export function getUsers() {
  return getStorage('users', []);
}

export function saveUsers(users) {
  setStorage('users', users);
}

export function getCurrentUser() {
  return getStorage('currentUser', null);
}

export function setCurrentUser(user) {
  setStorage('currentUser', user);
}

export function clearCurrentUser() {
  removeStorage('currentUser');
}

// 练习记录管理
export function getPracticeHistory(userId) {
  return getStorage(`history_${userId}`, []);
}

export function savePracticeRecord(userId, record) {
  const history = getPracticeHistory(userId);
  history.push({ ...record, timestamp: Date.now() });
  setStorage(`history_${userId}`, history);
}

// 进度管理
export function getProgress(userId) {
  return getStorage(`progress_${userId}`, {});
}

export function updateProgress(userId, key, data) {
  const progress = getProgress(userId);
  progress[key] = { ...progress[key], ...data, updatedAt: Date.now() };
  setStorage(`progress_${userId}`, progress);
}

// 错题本管理
export function getWrongQuestions(userId) {
  return getStorage(`wrong_${userId}`, []);
}

export function addWrongQuestion(userId, question) {
  const wrong = getWrongQuestions(userId);
  const existing = wrong.findIndex(w => w.id === question.id);
  if (existing >= 0) {
    wrong[existing] = { ...wrong[existing], ...question, lastWrongAt: Date.now(), wrongCount: wrong[existing].wrongCount + 1 };
  } else {
    wrong.push({ ...question, addedAt: Date.now(), wrongCount: 1, lastWrongAt: Date.now() });
  }
  setStorage(`wrong_${userId}`, wrong);
}

export function removeWrongQuestion(userId, questionId) {
  const wrong = getWrongQuestions(userId).filter(w => w.id !== questionId);
  setStorage(`wrong_${userId}`, wrong);
}

// 连续打卡管理
export function getStreak(userId) {
  return getStorage(`streak_${userId}`, { count: 0, lastDate: null });
}

export function updateStreak(userId) {
  const streak = getStreak(userId);
  const today = new Date().toDateString();
  if (streak.lastDate === today) return streak; // 今天已打卡
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (streak.lastDate === yesterday) {
    streak.count += 1;
  } else if (streak.lastDate !== today) {
    streak.count = 1;
  }
  streak.lastDate = today;
  setStorage(`streak_${userId}`, streak);
  return streak;
}