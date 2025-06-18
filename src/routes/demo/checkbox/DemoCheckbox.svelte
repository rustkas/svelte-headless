<script lang="ts">
  import Checkbox from '$lib/components/Checkbox.svelte';
  import CheckboxGroup from '$lib/components/CheckboxGroup.svelte';
  import { devlog } from '$lib/components/utils/devlog';

  let selected = $state(['apple']);

  $effect(() => {
    devlog('[DemoCheckbox] selected =', Array.from(selected));
  });
</script>

<div class="p-4 border rounded space-y-2">
  <CheckboxGroup name="fruits" group={selected}>
    <Checkbox value="apple">Apple</Checkbox>
    <Checkbox value="banana">Banana</Checkbox>
    <Checkbox value="orange">Orange</Checkbox>
  </CheckboxGroup>

  <p class="text-sm text-gray-700">Selected: {selected.join(', ')}</p>
</div>
