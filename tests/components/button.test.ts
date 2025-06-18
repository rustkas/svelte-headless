import { mount, unmount } from 'svelte';
import { expect, test } from 'vitest';
import Button from '../../src/lib/components/Button.svelte';


test('Button uses default type if not provided', () => {
    // Instantiate the component using Svelte's `mount` API
    const component = mount(Button, {
        target: document.body, // `document` exists because of jsdom
    });

    const button = document.querySelector('button');
    expect(button?.getAttribute('type')).toBe('button');

    unmount(component);
});

test('respects type="submit"', () => {
    const component = mount(Button, {
        target: document.body,
        props: { type: 'submit' }
    });

    const button = document.querySelector('button');
    expect(button?.getAttribute('type')).toBe('submit');

    unmount(component);
});

test('respects type="reset"', () => {
    const component = mount(Button, {
        target: document.body,
        props: { type: 'reset' }
    });

    const button = document.querySelector('button');
    expect(button?.getAttribute('type')).toBe('reset');

    unmount(component);
});

test('autofocus attribute sets focus on mount', () => {
  const component = mount(Button, {
    target: document.body,
    props: {
      autofocus: true
    }
  });

  const button = document.querySelector('button');
  expect(button?.hasAttribute('autofocus')).toBe(true);

  // In jsdom, focus() doesn't move real focus, but we can test .autofocus attribute presence
  expect(document.activeElement).toBe(button);

  unmount(component);
});