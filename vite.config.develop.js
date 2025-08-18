import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Develop環境用のVite configuration
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES ? '/marine-blue/' : '/', // GitHub Pages用とNetlify用を自動切替
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    hmr: true, // Develop環境ではHMRを有効化
    allowedHosts: ['.e2b.app', 'localhost', '127.0.0.1']
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: false, // Develop環境では最小化を無効化（デバッグしやすくする）
    sourcemap: true // ソースマップを生成
  },
  define: {
    __DEV__: true,
    __PROD__: false
  }
})
