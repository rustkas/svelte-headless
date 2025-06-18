import { mount, unmount } from 'svelte';
import { describe, it, expect, test, vi } from 'vitest';
import Checkbox from '../../src/lib/components/Checkbox.svelte';

describe('Checkbox', () => {
  test('renders with default props', () => {
    const component = mount(Checkbox, {
      target: document.body,
      props: { value: 'a' }
    });

    const input = document.querySelector('input[type=checkbox]') as HTMLInputElement;
    expect(input).toBeTruthy();
    expect(input.checked).toBe(false);

    unmount(component);
  });

  test('respects checked=true', () => {
    const component = mount(Checkbox, {
      target: document.body,
      props: {
        value: 'a',
        checked: true
      }
    });

    const input = document.querySelector('input[type=checkbox]') as HTMLInputElement;

    expect(input).toBeTruthy();
    expect(input.checked).toBe(true);

    unmount(component);
  });
  it('calls onchange with correct value', async () => {
    const handleChange = vi.fn();

    const component = mount(Checkbox, {
      target: document.body,
      props: {
        value: 'a',
        checked: true,
        onchange: handleChange
      }
    });

    const input = document.querySelector('input[type=checkbox]') as HTMLInputElement;
    expect(input).toBeTruthy();

    // simulate user click to change checked state
    input.checked = false; // toggle off
    input.dispatchEvent(new Event('change', { bubbles: true }));

    await Promise.resolve(); // flush microtasks

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange.mock.calls[0][0]).toBeInstanceOf(Event);

    unmount(component);
  });


  it('sets aria-checked to mixed when indeterminate', () => {
    const component = mount(Checkbox, {
      target: document.body,
      props: {
        value: 'a',
        indeterminate: true
      }
    });

    const wrapper = document.querySelector('[role="checkbox"]');
    expect(wrapper).toBeTruthy();

    const ariaChecked = wrapper?.getAttribute('aria-checked');
    expect(ariaChecked).toBe('mixed');

    unmount(component);
  });


});
