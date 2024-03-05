/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      reporter: ['json-summary', 'text', 'text-summary'],
      include: ['src/**/*.{js,jsx,ts,tsx}'],
    },
    exclude: ['**/node_modules/**', 'postcss.config.cjs', 'talwind.config.cjs'],
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  define: {
    'import.meta.vitest': 'undefined',
  },
})
