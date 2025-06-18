import { flushSync } from 'svelte';
import { expect, test } from 'vitest';
import { multiplier } from '../../../src/lib/components/utils/multiplier.svelte.ts';

test('Multiplier', () => {
  let double = multiplier(0, 2);

  expect(double.value).toEqual(0);

  double.set(5);

  expect(double.value).toEqual(10);
});
