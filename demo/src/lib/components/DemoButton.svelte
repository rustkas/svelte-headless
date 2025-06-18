<script lang="ts">
  import {Button} from '@rustkas/svelte-headless'; // путь зависит от твоего проекта
  import { devlog } from '@rustkas/svelte-headless/components/utils/devlog';

  let count = $state(0);

  function handleClick() {
    count += 1;
    devlog('Button clicked, count =', count);
  }

  $effect(() => {
    devlog('DemoButton mounted, initial count =', count);
  });
</script>

<div class="p-4 border rounded space-y-2">
  <p>Count: {count}</p>
  <Button onclick={handleClick} class="px-4 py-2 bg-green-500 text-white rounded">
    Click me
  </Button>
</div>
