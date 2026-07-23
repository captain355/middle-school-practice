import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // 部署配置
  // 如果部署在子路径（如 https://example.com/practice/），改为 base: '/practice/'
  // 如果部署在根路径（如 https://example.com/），保持 base: '/'
  base: '/',

  // 构建输出配置
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // SPA 单页应用，所有资源内联
    cssCodeSplit: false,
  },
})
