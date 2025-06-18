import { defineConfig } from 'vitest/config';
import path from 'path';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { svelteTesting } from '@testing-library/svelte/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import stripDebugBlocks from './vite.plugins/debug-strip';

export default defineConfig({
  plugins: [
    svelte(),
    svelteTesting(),
    sveltekit(),
    process.env.NODE_ENV === 'production' && stripDebugBlocks()],
  test: {
    environment: 'jsdom',
    include: ['tests/**/*.{test,spec}.{js,ts,svelte}'],
    setupFiles: ['./vitest-setup-client.ts'],
    clearMocks: true,
    maxConcurrency: 1, // 💥 ограничить параллельность
    globals: true,
    reporters: ['default'],
    isolate: true,
    restoreMocks: true,
  },
  resolve: {
    alias: {
      $lib: path.resolve('./src/lib'),
    },
    ...(
      process.env.VITEST
        ? {
            conditions: ['browser']
          }
        : {}
    )
  },
  server: {
    fs: {
      allow: ['.'] // разрешить доступ к корню библиотеки
    }
  }
});
