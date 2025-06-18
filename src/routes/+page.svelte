<script lang="ts">
  const components = [
    { name: 'Button', href: '/demo/button' },
    { name: 'Checkbox', href: '/demo/checkbox' },
    { name: 'CheckboxGroup', href: '/demo/checkbox-group' },
    // { name: 'Switch', href: '/demo/switch' },
    // { name: 'Tabs', href: '/demo/tabs' },
    // { name: 'Dialog', href: '/demo/dialog' },
  ];
</script>

<section class="p-6 space-y-4">
  <h1 class="text-2xl font-bold text-gray-900">Demo Components</h1>

  <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {#each components as { name, href }}
      <li>
        <a href={href} class="block p-4 bg-white border rounded-xl shadow hover:bg-gray-50 transition">
          <span class="text-lg font-medium text-indigo-600">{name}</span>
          <p class="text-sm text-gray-500 mt-1">View {name} demo</p>
        </a>
      </li>
    {/each}
  </ul>
</section>
