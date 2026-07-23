import { app } from './app.js';
import { env } from './config/env.js';

// 优先使用 PORT 环境变量（云平台要求），否则使用 SERVER_PORT
const PORT = process.env.PORT || env.SERVER_PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
