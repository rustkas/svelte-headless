# 🛠 Icon Generator: `generate-icons.ts`

This tool powers the Svelte Heroicons library by transforming the official Heroicons SVG set into individually importable and typed `.svelte` components. It is designed for local development and automation.

---

## ✅ Overview

- Parses icons from `scripts/heroicons/src/...` (submodule from the official Heroicons repo)
- Converts each SVG to a Svelte component
- Outputs components to `src/lib/icons/{size}/{style}/...`
- Generates `src/lib/index.ts` with named exports
- Adds `/** @typedef */` to enable SvelteKit type generation
- Supports filtering and simulation via CLI arguments

---

## 📦 Output

All components are saved to:

```
src/lib/icons/{size}/{style}/{Name}Icon.svelte
```

An `index.ts` file is generated at:

```
src/lib/index.ts
```

This file re-exports all components with proper names and is used as the entry point of the package.

---

## 🎛 Command-line Options

You can pass arguments to `npm run generate` to control what gets generated.

| Flag              | Description                                      | Example                                |
|-------------------|--------------------------------------------------|----------------------------------------|
| `--only=24`       | Only generate icons of size 24                   | `--only=24`                            |
| `--style=outline` | Only include a specific style (`solid`, `outline`) | `--style=solid`                        |
| `--icon=x-mark`   | Generate only specific icons (comma-separated)  | `--icon=academic-cap,x-mark`          |
| `--dry-run`       | Don't write files — just simulate and log       | `--dry-run`                            |

---

## 🚀 Examples

Generate only 24px solid icons:

```bash
npm run generate -- --only=24 --style=solid
```

Generate only the `AcademicCap` icon:

```bash
npm run generate -- --icon=academic-cap
```

Simulate the result without writing any files:

```bash
npm run generate -- --dry-run
```

---

## 🧪 Internal Use

The generator is typically run via:

```bash
npm run generate
```

It is also invoked by the `validate` script before packaging and testing the library.

---

## 📁 Related Files

- `scripts/heroicons/` – Git submodule pointing to Tailwind's Heroicons repo
- `scripts/generate-icons.ts` – The main generator script
- `src/lib/index.ts` – Output index with named exports
- `validate-package.ts` – Script to test the result by creating a sandbox install

---

## 🧼 Clean Build

The generator clears old `dist/`, `.svelte-kit/`, and `src/lib/icons/` contents before and after generation to ensure clean output.

---

## 📌 Notes

- The generator ensures `/** @typedef */` is injected so that `svelte-package` can generate `.d.ts` automatically
- Avoid manually creating `index.d.ts` to prevent warnings