# svelte-heroicons

Minimal, modern and fully typed Heroicons integration for SvelteKit.  
Tree-shakable, CLI-powered, and zero dependencies.

[![npm version](https://img.shields.io/npm/v/svelte-heroicons.svg?style=flat&color=green)](https://www.npmjs.com/package/@rustkas/@rustkas/svelte-heroicons)
[![GitHub stars](https://img.shields.io/github/stars/rustkas/svelte-heroicons?style=social)](https://github.com/rustkas/svelte-heroicons)

---

## ✨ Features

- ⚡ Tree-shakable ES module exports per style & size
- 📦 Auto-generated from official Heroicons SVGs
- 🧠 Type-safe with full TypeScript support
- 🛠 CLI generator with `--only`, `--style`, `--icon`, `--dry-run`
- 🎛 Import only what you need: `import { XMarkIcon } from 'svelte-heroicons/solid-24'`
- 🧪 Includes `npm run validate` sandbox test

Icons are based on [Heroicons](https://github.com/tailwindlabs/heroicons), licensed under MIT by Tailwind Labs.

Minimal and tree-shakeable [Heroicons](https://heroicons.com) for SvelteKit — written from scratch with zero dependencies.

> This project is based on the official MIT-licensed [Heroicons](https://github.com/tailwindlabs/heroicons) by Tailwind Labs.

## 📦 Installation

```bash
npm install svelte-heroicons
```

## 🚀 Quick Start

```bash
npm install svelte-heroicons
```

```svelte
<script lang="ts">
  import { AcademicCapIcon } from 'svelte-heroicons/outline-24';
</script>

<AcademicCapIcon class="w-6 h-6 text-blue-500" />
```

## 📁 Exports

Available submodules:

```
svelte-heroicons/outline-24
svelte-heroicons/solid-20
svelte-heroicons/solid-16
...
```


## Usage

```svelte
<script lang="ts">
  import { HomeIcon } from 'svelte-heroicons/solid';
</script>

<HomeIcon class="w-6 h-6 text-blue-500" />
```


## 🎛 CLI Usage (for maintainers)

```bash
npm run generate -- --only=24 --style=outline
npm run generate -- --icon=academic-cap,x-mark
npm run generate -- --dry-run
```

## How to clone
```bash
git clone https://github.com/rustkas/svelte-heroicons.git
cd svelte-heroicons
git submodule update --init --recursive
```

---

### 🎛 Generator Flags

You can pass additional CLI arguments to control generation:

| Flag              | Description                                      | Example                                |
|-------------------|--------------------------------------------------|----------------------------------------|
| `--only=24`       | Only generate icons of size 24                   | `--only=24`                            |
| `--style=outline` | Only include a specific style (`solid`, `outline`) | `--style=solid`                        |
| `--icon=x-mark`   | Generate only specific icons (comma-separated)  | `--icon=academic-cap,x-mark`          |
| `--dry-run`       | Don't write files — just simulate and log       | `--dry-run`                            |

#### Examples

```bash
npm run generate -- --only=24 --style=solid
npm run generate -- --icon=academic-cap,x-mark
npm run generate -- --dry-run
```

---

### 🧪 Package Validation

To test your package end-to-end:

```bash
npm run validate
```

This will:

- Generate icons
- Build the package with `svelte-package`
- Pack it into a `.tgz` archive
- Install it into a temporary `validate-playground` project
- Run a minimal `import` test
- Automatically remove the test folder

---

### 📁 Update Heroicons (Submodule)

To update the SVG source files from upstream:

```bash
git submodule update --remote --merge
```
