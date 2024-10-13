import { sentryVitePlugin } from '@sentry/vite-plugin';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },

  plugins: [react(), sentryVitePlugin({
    org: 'canal-multiply',
    project: 'javascript-react',
    release: {
      name: 'canal-multiply',
    }
  })],

  resolve: {
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    },
  },

  build: {
    sourcemap: true
  },

  server: {
    host: true,
  }
});
