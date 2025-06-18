# 🧩 Checkbox

A headless checkbox component designed to work independently or within a CheckboxGroup via context. Built with Svelte 5 runes and accessible by default.

---

## ✅ Usage

```svelte
<script>
  import { Checkbox } from '@rustkas/svelte-headless'
</script>

<Checkbox value="option1">Option 1</Checkbox>
```

Used with `CheckboxGroup`:

```svelte
<CheckboxGroup bind:group={selected}>
  <Checkbox value="a">A</Checkbox>
  <Checkbox value="b">B</Checkbox>
</CheckboxGroup>
```

---

## 🧠 Features

- Works standalone or with `CheckboxGroup` via context.
- Automatically checked if value is part of group.
- Handles `required`, `disabled`, `class`, `value`, `name` props.
- Emits `onchange` to update group selection.
- Render children with `{@render}` as label content.

---

## 🔧 Props

| Prop       | Type                      | Default | Description                            |
|------------|---------------------------|---------|----------------------------------------|
| `value`    | `string` \| `number`     | —       | The value associated with the checkbox |
| `name`     | `string`                  | group?.name | Input name                        |
| `required` | `boolean`                 | `false` | Marks the input as required            |
| `disabled` | `boolean`                 | `false` | Disables the checkbox                  |
| `class`    | `string`                  | `""`    | Custom CSS classes                     |
| `children` | `() => any`               | —       | Render function for label content      |

---

## 📌 Events

| Event     | Description                        |
|-----------|------------------------------------|
| `onchange`| Fired when checkbox is toggled     |

---

## 💡 Example with Tailwind

```svelte
<Checkbox
  value="newsletter"
  class="accent-blue-500 border-gray-300 rounded"
>
  Subscribe to newsletter
</Checkbox>
```

---

## ⚠️ Notes

- Works seamlessly with `CheckboxGroup` using Svelte context API.
- Use `bind:group` on parent `CheckboxGroup` to manage selected values.
- `children` should be a render function to support slot content.

