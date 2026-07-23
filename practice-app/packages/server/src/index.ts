import { app } from './app.js';
import { env } from './config/env.js';

app.listen(env.SERVER_PORT, () => {
  console.log(`Server running on port ${env.SERVER_PORT}`);
});
