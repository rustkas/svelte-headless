import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  compilerOptions: {
    customElement: true, // <== Обязательно!
  },
  kit: {
    adapter: adapter(),

    files: {
      routes: 'src/routes', // используем встроенные routes для showcase
    },
  },
};

export default config;
