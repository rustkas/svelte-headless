export function createKeyboardClickHandler(
  el: HTMLElement | null,
  disabled: boolean
): (e: KeyboardEvent) => void {
  return (e: KeyboardEvent) => {
    if (disabled && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      e.stopImmediatePropagation();
      return;
    }

    if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      el?.click();
    }
  };
}
