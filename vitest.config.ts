import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  plugins: [react()],
  test: {
    coverage: {
      include: ['src'],
    },
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    globals: true,
    include: ['**/*.test.?(c|m)[jt]s?(x)'],
  },
  resolve: {
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    },
  },
});
