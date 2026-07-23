# 部署指南

## 构建生产版本

```bash
npm run build
```

构建产物在 `dist/` 目录中，将其部署到任何静态文件服务器即可。

## 部署方式

### 1. Nginx
将 `dist/` 目录内容放到服务器，使用 `deploy/nginx.conf` 配置。

关键配置：
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

### 2. Node.js Express
```bash
node deploy/server.mjs
```

### 3. Vercel
在项目根目录创建 `vercel.json`：
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### 4. Netlify
在项目根目录创建 `netlify.toml`：
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 5. GitHub Pages
修改 `vite.config.js` 中的 `base` 为仓库名：
```js
base: '/your-repo-name/'
```

## 子路径部署

如果应用不在域名根路径，修改 `vite.config.js`：
```js
export default defineConfig({
  base: '/your-sub-path/',
  // ...
})
```

## 环境要求

- 纯前端 SPA，不需要后端 API 服务器
- 数据存储在浏览器 localStorage 中
- 需要 HTTPS 环境（部署时建议配置 SSL 证书）
