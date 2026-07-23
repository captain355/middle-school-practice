// Node.js Express 服务器（用于本地预览或轻量部署）
// 使用方式：node server.js
// 默认监听 3000 端口

import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

// 静态文件服务
app.use(express.static(join(__dirname, 'dist')));

// SPA 路由回退
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`练习库服务已启动: http://localhost:${PORT}`);
});
