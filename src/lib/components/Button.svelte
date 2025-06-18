<script lang="ts">
  import { tick } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import type { Attachment } from 'svelte/attachments';
  import { focusIfNeeded } from './utils/focus';
  import { createKeyboardClickHandler } from './utils/dom';
  import { forwardAllEvents } from './utils/forwardAllEvents';

  let {
    type: rawType = 'button',
    disabled: rawDisabled,
    autofocus: rawAutofocus,
    tabindex: userTabindex,
    form,
    formaction,
    formenctype,
    formmethod,
    formnovalidate,
    formtarget,
    name,
    value,
    id,
    style,
    class: className,
    role,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    'aria-disabled': ariaDisabled,

    children,
  }: HTMLButtonAttributes = $props();

  const type: 'button' | 'submit' | 'reset' =
    rawType === 'submit' || rawType === 'reset' ? rawType : 'button';

  const autofocus = rawAutofocus === true;
  const disabled = rawDisabled === true;
  const tabindex = userTabindex ?? (disabled ? -1 : 0);

  let el: HTMLButtonElement | null = null;
  let handleKeydown = $state<(e: KeyboardEvent) => void>(() => {});

  $effect(() => {
    void tick().then(() => {
      focusIfNeeded(el, autofocus && !disabled);
    });
  });
  $effect(() => {
    handleKeydown = createKeyboardClickHandler(el, disabled);
  });
</script>

<!-- svelte-ignore a11y_autofocus -->
<button
  bind:this={el}
  {type}
  {disabled}
  {form}
  {formaction}
  {formenctype}
  {formmethod}
  {formnovalidate}
  {formtarget}
  {name}
  {value}
  {tabindex}
  {id}
  {style}
  class={className}
  {role}
  aria-label={ariaLabel}
  aria-labelledby={ariaLabelledby}
  aria-disabled={ariaDisabled ?? disabled}
  onkeydown={handleKeydown}
  {@attach forwardAllEvents()}
>
  {@render children?.()}
</button>
