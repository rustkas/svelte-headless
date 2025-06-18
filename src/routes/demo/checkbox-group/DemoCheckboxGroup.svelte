<script lang="ts">
  import Checkbox from '$lib/components/Checkbox.svelte';
  import CheckboxGroup from '$lib/components/CheckboxGroup.svelte';
  import { devlog } from '$lib/components/utils/devlog';

  let selected = $state(['apple']);

  $effect(() => {
    devlog('[DemoCheckboxGroup] selected =', [...selected]);
  });
</script>

<div class="p-4 border rounded space-y-4">
  <h3 class="text-lg font-semibold">Choose your favorite fruits:</h3>

  <CheckboxGroup name="fruits" group={selected}>
    <Checkbox value="apple">🍎 Apple</Checkbox>
    <Checkbox value="banana">🍌 Banana</Checkbox>
    <Checkbox value="orange">🍊 Orange</Checkbox>
    <Checkbox value="grape">🍇 Grape</Checkbox>
  </CheckboxGroup>

  <p class="text-sm text-gray-700">
    Selected: {selected.length > 0 ? selected.join(', ') : 'None'}
  </p>
</div>
