import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { app } from './app.js';
import { env } from './config/env.js';

// 加载根目录下的 .env 文件
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

app.listen(env.SERVER_PORT, () => {
  console.log(`Server running on port ${env.SERVER_PORT}`);
});
