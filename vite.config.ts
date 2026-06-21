import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react(), svgr()],
  base: './',
  resolve: {
    alias: {
      '@resources': resolve(__dirname, 'resources'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (!id.includes('node_modules')) return
          if (id.includes('framer-motion')) return 'animation'
          if (id.includes('embla-carousel')) return 'carousel'
          if (id.includes('react-hook-form') || id.includes('zod') || id.includes('@hookform')) return 'forms'
          if (id.includes('@emailjs')) return 'email'
          if (id.includes('react-dom') || id.includes('react/')) return 'vendor'
        },
      },
    },
  },
})
