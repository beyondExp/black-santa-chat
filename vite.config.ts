import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VSnow from 'vsnow'; // Importing v-snow

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VSnow,
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
