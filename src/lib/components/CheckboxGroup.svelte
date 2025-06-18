<script lang="ts">
  // RUSTKAS_96011
  import { setContext } from 'svelte';
  import { CHECKBOX_GROUP_CONTEXT, type CheckboxGroupContext } from './utils/checkbox-group-context';

  let { group = $bindable([]), name,  } = $props();

  function toggle(val: string | number) {
    console.log('[CheckboxGroup] toggle called with:', val);
    const exists = group.includes(val);
    group = exists ? group.filter((v) => v !== val) : [...group, val];
    console.log('[CheckboxGroup] updated group:', group);
  }

  setContext<CheckboxGroupContext>(CHECKBOX_GROUP_CONTEXT, {
    get values() {
      return new Set(group);
    },
    toggle,
    name
  });
</script>

<div>
  <slot />
</div>

