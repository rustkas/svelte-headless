<script lang="ts">
  import { CheckboxGroup, Checkbox } from '@rustkas/svelte-headless';
  let selected = $state(['apple']);
</script>

<CheckboxGroup bind:group={selected} name="fruits">
  <Checkbox value="apple">apple</Checkbox>
  <Checkbox value="banana">banana</Checkbox>
  <Checkbox value="orange">orange</Checkbox>
</CheckboxGroup>

<p>Selected: {selected.join(', ')}</p>
