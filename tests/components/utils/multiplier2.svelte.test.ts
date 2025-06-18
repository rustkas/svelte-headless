import { flushSync } from 'svelte';
import { expect, test } from 'vitest';
import { multiplier2 } from '../../../src/lib/components/utils/multiplier2.svelte';

test('Multiplier2', () => {
	let count = $state(0);
	let double = multiplier2(() => count, 2);

	expect(double.value).toEqual(0);

	count = 5;

	expect(double.value).toEqual(10);
});