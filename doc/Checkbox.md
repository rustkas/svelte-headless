# c-checkbox

`Checkbox` is a headless checkbox component fully compatible with Svelte 5.

## ✅ Features
- Supports `checked`, `indeterminate`, `value`
- Works with `CheckboxGroup` context for group synchronization
- `aria-checked` handles `'mixed'`, `'true'`, `'false'`
- `data-checked`, `data-indeterminate` for custom styling
- `asChild` prop allows tag substitution for outer wrapper
- Fully typed via `$props()` with event forwarding
- Accepts `onchange`, `onfocus`, `onclick`, and projected `children`

## 💡 Example
```svelte
<script>
  import { Checkbox } from '@rustkas/svelte-headless';
</script>

<Checkbox checked={true}>
  Accept terms
</Checkbox>
```

## 📦 Group Usage
```svelte
<CheckboxGroup name="options" modelValue={["a"]}>
  <Checkbox value="a">Option A</Checkbox>
  <Checkbox value="b">Option B</Checkbox>
</CheckboxGroup>
```

## 🛠 Styling
Use `data-checked`, `data-indeterminate`, and `aria-checked` for visual states.
