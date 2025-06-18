export function focusIfNeeded(el: HTMLElement | null, condition: boolean) {
  if (el && condition && document.activeElement === document.body) {
    el.focus();
  }
}
