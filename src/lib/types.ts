// src/lib/types.ts

import type { HTMLInputAttributes } from 'svelte/elements';

export type ComponentProps = HTMLInputAttributes & {
  indeterminate?: boolean;
  onchange?: (event: Event & { currentTarget: HTMLInputElement }) => void;
  asChild?: string;
};
