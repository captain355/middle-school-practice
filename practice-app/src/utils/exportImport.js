import { getStorage, setStorage } from './storage';

const STORAGE_PREFIX = 'practice_app_';

function getAllUserKeys() {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith(STORAGE_PREFIX)) {
      keys.push(key);
    }
  }
  return keys;
}

export function exportAllData() {
  const data = {};
  getAllUserKeys().forEach(key => {
    try {
      const parsed = JSON.parse(localStorage.getItem(key));
      // 导出时排除密码字段
      if (key.includes('users') && Array.isArray(parsed)) {
        data[key] = parsed.map(u => ({ ...u, password: undefined }));
      } else {
        data[key] = parsed;
      }
    } catch (e) {
      // skip invalid JSON
    }
  });
  return data;
}

export function exportAsJSON() {
  const data = exportAllData();
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `practice-data-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function importFromJSON(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        let count = 0;
        Object.entries(data).forEach(([key, value]) => {
          if (!key.startsWith(STORAGE_PREFIX)) return;
          // 导入用户数据时，保留已有用户的密码（导出文件中没有密码）
          if (key === STORAGE_PREFIX + 'users' && Array.isArray(value)) {
            const existingUsers = (() => {
              try { return JSON.parse(localStorage.getItem(key)) || []; } catch { return []; }
            })();
            const mergedUsers = value.map(imported => {
              const existing = existingUsers.find(eu => eu.username === imported.username);
              if (existing && existing.password) {
                // 保留已有密码，合并其他字段
                return { ...imported, password: existing.password };
              }
              return imported;
            });
            localStorage.setItem(key, JSON.stringify(mergedUsers));
          } else {
            localStorage.setItem(key, JSON.stringify(value));
          }
          count++;
        });
        resolve(count);
      } catch (err) {
        reject(new Error('文件格式无效，请选择正确的备份文件'));
      }
    };
    reader.onerror = () => reject(new Error('文件读取失败'));
    reader.readAsText(file);
  });
}

export function clearAllData() {
  getAllUserKeys().forEach(key => {
    localStorage.removeItem(key);
  });
}

export function getDataSummary() {
  const data = exportAllData();
  const users = data['practice_app_users'] || [];

  // 统计总练习次数
  let totalHistoryCount = 0;
  Object.entries(data).forEach(([key, value]) => {
    if (key.includes('history_') && Array.isArray(value)) {
      totalHistoryCount += value.length;
    }
  });

  // 统计总错题数
  let totalWrongCount = 0;
  Object.entries(data).forEach(([key, value]) => {
    if (key.includes('wrong_') && Array.isArray(value)) {
      totalWrongCount += value.length;
    }
  });

  const summary = {
    userCount: users.length,
    historyCount: totalHistoryCount,
    wrongCount: totalWrongCount,
    progressCount: Object.keys(data).filter(k => k.includes('progress_')).length,
    streakCount: Object.keys(data).filter(k => k.includes('streak_')).length,
  };
  return summary;
}