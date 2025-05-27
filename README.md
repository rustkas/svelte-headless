# 🧩 @rustkas/svelte-heroicons

Minimal, modern and fully typed Heroicons integration for SvelteKit.  
Tree-shakable, CLI-powered, and zero dependencies.

[![npm version](https://img.shields.io/npm/v/@rustkas/svelte-heroicons.svg?style=flat&color=green)](https://www.npmjs.com/package/@rustkas/svelte-heroicons)

---

## ✨ Features

- ⚡ Tree-shakable ES module exports per style & size
- 📦 Auto-generated from official Heroicons SVGs
- 🧠 Type-safe with full TypeScript support
- 🛠 CLI generator with `--only`, `--style`, `--icon`, `--dry-run`
- 🎛 Import only what you need: `import { XMarkIcon } from '@rustkas/svelte-heroicons/solid-24'`
- 🧪 Includes `npm run validate` sandbox test

---

## 🚀 Quick Start

```bash
npm install @rustkas/svelte-heroicons
```

```svelte
<script lang="ts">
  import { AcademicCapIcon } from '@rustkas/svelte-heroicons/outline-24';
</script>

<AcademicCapIcon class="w-6 h-6 text-blue-500" />
```

---

## 🎛 CLI Usage (for maintainers)

```bash
npm run generate -- --only=24 --style=outline
npm run generate -- --icon=academic-cap,x-mark
npm run generate -- --dry-run
```

---

## 🧪 Validation

```bash
npm run validate
```

This will:
- Run generation
- Build with `svelte-package`
- Pack `.tgz`
- Install into temporary `validate-playground/`
- Test import and remove test project

---

## 📁 Exports

Available submodules:

```
@rustkas/svelte-heroicons/outline-24
@rustkas/svelte-heroicons/solid-20
@rustkas/svelte-heroicons/solid-16
...
```

---

## 🧰 Credits

- Based on [Heroicons](https://github.com/tailwindlabs/heroicons)


---

## 🆓 License

MIT