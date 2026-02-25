import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') },
  },
  server: {
    port: 5173,
    proxy: {
      // इसे 4000 से बदलकर 5000 करें ताकि यह आपके बैकएंड सर्वर से मैच करे
      '/api': {
        target: 'https://backend.apnathikan.shop',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})