import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // GitHub Pages用: リポジトリ名をベースパスに設定
  base: command === 'build' ? '/babel-rulebook/' : '/',
  server: {
    allowedHosts: ['babel.exe.xyz']
  }
}))
