import { execSync } from 'node:child_process';
import { existsSync, rmSync, mkdirSync, writeFileSync, readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const TEST_DIR = path.resolve(__dirname, '../validate-playground');
const PACKAGE_DIR = path.resolve(__dirname, '../');

// 1. Очистить playground
if (existsSync(TEST_DIR)) rmSync(TEST_DIR, { recursive: true });
mkdirSync(TEST_DIR);
console.log('📁 Создано временное тестовое окружение:', TEST_DIR);

// 2. Выполнить генерацию и билд
console.log('⚙️ Генерация и сборка...');
execSync('npm run generate', { cwd: PACKAGE_DIR, stdio: 'inherit' });
execSync('npm run build', { cwd: PACKAGE_DIR, stdio: 'inherit' });

// ✅ 3. Прочитать package.json
const pkgJson = JSON.parse(
  readFileSync(path.join(PACKAGE_DIR, 'package.json'), 'utf-8')
);
const { name, version } = pkgJson;
const tgzName = `${name.replace(/^@/, '').replace(/\//, '-')}-${version}.tgz`;

console.log(`📦 Упаковка: ${tgzName}`);
execSync(`npm pack`, { cwd: PACKAGE_DIR, stdio: 'inherit' });

// 4. Инициализировать тестовый проект
execSync('npm init -y', { cwd: TEST_DIR, stdio: 'inherit' });
execSync(`npm install ../${tgzName}`, { cwd: TEST_DIR, stdio: 'inherit' });

// 5. Создать проверочный .ts файл
writeFileSync(
  path.join(TEST_DIR, 'test.ts'),
  `import { AcademicCapIcon } from '${name}';\nconsole.log('✅ Импорт работает');\n`
);

// 6. Выполнить проверку с помощью tsx
console.log('🧪 Выполняется проверка test.ts...');
try {
  execSync('npx tsx test.ts', { cwd: TEST_DIR, stdio: 'inherit' });

  console.log('✅ Валидация пакета прошла успешно!');
  rmSync(TEST_DIR, { recursive: true, force: true });
  console.log('🧹 Временный playground удалён:', TEST_DIR);
} catch (err) {
  console.error('❌ Ошибка валидации пакета. Playground сохранён для отладки:', TEST_DIR);
  throw err;
}

console.log('✅ Валидация пакета прошла успешно!');
