import { DEV } from 'esm-env';

/** 
 * Лог выводится только в dev-режиме и только если явно вызван
 * Можно вычищать через плагин по ключу `@devlog`
 */
export function devlog(...args: unknown[]) {
  // @devlog
  if (DEV) {
    console.debug('[DEV]', ...args);
  }
}
