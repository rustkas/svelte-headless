import fs from 'fs-extra';
import path from 'path';

const heroiconsRoot = 'scripts/heroicons/src';
const outputRoot = 'src/lib/icons';
const indexFile = 'src/lib/index.ts';


const cleanupPaths = [
  '.svelte-kit',
  'dist',
  'scripts-dist',
];


const sources = [
  { size: '24', style: 'solid', dir: '24/solid', suffix: '' },
  { size: '24', style: 'outline', dir: '24/outline', suffix: 'Outline' },
  { size: '20', style: 'solid', dir: '20/solid', suffix: '20Solid' },
  { size: '16', style: 'solid', dir: '16/solid', suffix: '16Solid' }
];

const args = process.argv.slice(2);

const onlySize = args.find((arg) => arg.startsWith('--only='))?.split('=')[1];
const onlyStyle = args.find((arg) => arg.startsWith('--style='))?.split('=')[1];


const dryRun = args.includes('--dry-run');

const iconArg = args.find((arg) => arg.startsWith('--icon='));
const iconList = iconArg ? iconArg.split('=')[1].split(',').map((s) => s.trim().toLowerCase()) : null;

const submoduleExports = new Map<string, string[]>();
console.log('🔍 Аргументы фильтрации:', { onlySize, onlyStyle });

function toPascalCase(name: string): string {
  return name
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join('');
}

function wrapSvg(svg: string): string {
  const inner = svg.replace(/<svg[^>]*>/, '').replace('</svg>', '').trim();
  return `<script lang="ts">
  export let className: string = "";
</script>

<svg class={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  ${inner}
</svg>`;
}

async function cleanProject() {
  console.log('🧹 Очистка временных директорий...');
  for (const p of cleanupPaths) {

    const fullPath = path.resolve(p);
    if (path.resolve(fullPath).includes('scripts/heroicons')) {
      console.warn(`⚠️ Пропуск удаления защищённой папки: ${fullPath}`);
      continue;
    }
    if (await fs.pathExists(fullPath)) {
      await fs.remove(fullPath);
      console.log(`❌ Удалено: ${fullPath}`);
    }
  }
}

async function generateIcons(): Promise<void> {
  try {
    await cleanProject();
    console.log('🚀 Генерация иконок началась...');
    const exports: string[] = [];



    for (const source of sources) {
      if (onlySize && source.size !== onlySize) continue;
      if (onlyStyle && source.style !== onlyStyle) continue;
      const sourceDir = path.join(heroiconsRoot, source.dir);
      const targetDir = path.join(outputRoot, source.size, source.style);
      await fs.ensureDir(targetDir);

      const files = await fs.readdir(sourceDir);

      for (const file of files) {
        if (iconList && !iconList.includes(path.basename(file, '.svg').toLowerCase())) {
          continue;
        }

        console.log(`🔍 Обрабатывается файл: ${file}`);
        if (!file.endsWith('.svg')) continue;

        const nameWithoutExt = path.basename(file, '.svg'); // <= ключевой момент
        const baseName = toPascalCase(nameWithoutExt);
        const componentName = `${baseName}${source.suffix}Icon`;
        const from = path.join(sourceDir, file);
        const to = path.join(targetDir, `${componentName}.svelte`);

        const svg = await fs.readFile(from, 'utf-8');
        const svelte = wrapSvg(svg);

        if (!dryRun) {
          await fs.outputFile(to, svelte);
        }

        console.log(`✅ Записан файл: ${to}`);
        exports.push(`export { default as ${componentName} } from './icons/${source.size}/${source.style}/${componentName}.svelte';`);

        const submoduleKey = `${source.style}-${source.size}`;
        if (!submoduleExports.has(submoduleKey)) submoduleExports.set(submoduleKey, []);
        submoduleExports.get(submoduleKey)!.push(
          `export { default as ${componentName} } from './icons/${source.size}/${source.style}/${componentName}.svelte';`
        );

        console.log(`✅ Сгенерировано: ${componentName}`);
      }
    }

    if (!dryRun) {
      await fs.outputFile(indexFile, '/** @typedef */\n' + exports.join('\n') + '\n');
    }


    console.log(`📦 Файл index.ts создан.`);



    for (const [submodule, lines] of submoduleExports.entries()) {
      const filePath = path.join('src/lib', `${submodule}.ts`);
      if (!dryRun) {
        await fs.outputFile(filePath, `/** @typedef */\n` + lines.join('\n') + '\n');
        console.log(`📦 Файл подмодуля ${submodule}.ts создан.`);
      }
    }

    console.log('🎉 Генерация завершена. Повторная очистка...');
    await cleanProject();
  } catch (error) {
    console.error('🔥 ВНУТРИ generateIcons() произошла ошибка:');
    console.error(error instanceof Error ? error.stack : error);
    throw error;
  }

}




generateIcons()
  .then(async () => {

    for (const [submodule, lines] of submoduleExports.entries()) {
      const filePath = path.join('src/lib', `${submodule}.ts`);
      if (!dryRun) {
        await fs.outputFile(filePath, `/** @typedef */\n` + lines.join('\n') + '\n');
        console.log(`📦 Файл подмодуля ${submodule}.ts создан.`);
      }
    }

    console.log('🎉 Генерация завершена. Повторная очистка...');


  })
  .catch((err) => {
    console.error('❌ Ошибка генерации:', err instanceof Error ? err.message : err);
    console.error(err); // log full stack, even for strange objects
    console.error('🧪 Тип ошибки:', typeof err);
    console.error('🧪 instanceof Error:', err instanceof Error);
    process.exit(1);
  });
