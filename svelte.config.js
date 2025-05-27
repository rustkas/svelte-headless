import { sveltePreprocess } from 'svelte-preprocess';
import { defineConfig } from 'vite';

export default defineConfig({
  preprocess: sveltePreprocess(),
});
