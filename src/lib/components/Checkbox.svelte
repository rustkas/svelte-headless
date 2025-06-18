<script lang="ts">
  import { getContext } from 'svelte';
  import { CHECKBOX_GROUP_CONTEXT } from './utils/checkbox-group-context';
  import type { HTMLInputAttributes } from 'svelte/elements';

  type CheckboxGroupContext = {
    name?: string;
    values: Set<string | number>;
    toggle: (val: string | number) => void;
  };

  const group = getContext<CheckboxGroupContext>(CHECKBOX_GROUP_CONTEXT);

  const {
    name = group?.name,
    value,
    class: rawClassName,
    required,
    disabled,
    children
  }: HTMLInputAttributes & { value?: string | number; children?: any } = $props();
  const className = (rawClassName as string) ?? '';
  const isChecked = $derived(() => group?.values.has(value!) ?? false);

  function handleChange() {
    if (group && value != null) {
      console.log('[Checkbox] toggling:', value);
      group.toggle(value);
    }
  }
</script>

<label class="inline-flex items-center gap-2 cursor-pointer">
  <input
    type="checkbox"
    name={name}
    value={value}
    checked={isChecked()}
    onchange={handleChange}
    {required}
    {disabled}
    class={className}
  />
  {@render children?.()}
</label>
