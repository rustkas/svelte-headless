import { sveltePreprocess } from 'svelte-preprocess';

export default {
  preprocess: sveltePreprocess(),
  compilerOptions: {
    runes: true,
    customElement: true,
  },
  kit: {
    files: {
      routes: 'src/routes', // используем встроенные routes для showcase
    },
  },
};
