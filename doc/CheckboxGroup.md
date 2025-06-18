# 🧩 CheckboxGroup

A headless context provider component that manages multiple `Checkbox` components in a group. Designed for multi-select forms using Svelte 5 runes.

---

## ✅ Usage

```svelte
<script>
  import { CheckboxGroup, Checkbox } from '@rustkas/svelte-headless'

  let selected = []
</script>

<CheckboxGroup bind:group={selected} name="options">
  <Checkbox value="apple">Apple</Checkbox>
  <Checkbox value="banana">Banana</Checkbox>
  <Checkbox value="orange">Orange</Checkbox>
</CheckboxGroup>
```

---

## 🧠 Features

- Provides shared selection context to all nested `Checkbox` components.
- Uses `bind:group` to track selected values as an array.
- Automatically updates context when a checkbox is toggled.
- Custom `name` can be used for form integration.
- Easy to style or extend – only provides logic.

---

## 🔧 Props

| Prop    | Type              | Default | Description                                 |
|---------|-------------------|---------|---------------------------------------------|
| `group` | `string[]`        | `[]`    | Two-way bound array of selected values      |
| `name`  | `string`          | —       | Shared name attribute for grouped checkboxes|

---

## 📌 Events

None – uses reactive binding via `bind:group`.

---

## 💡 Example with Form

```svelte
<form onsubmit={handleSubmit}>
  <CheckboxGroup bind:group={formData.fruits} name="fruits">
    <Checkbox value="apple">Apple</Checkbox>
    <Checkbox value="grape">Grape</Checkbox>
  </CheckboxGroup>

  <button type="submit">Submit</button>
</form>
```

---

## ⚠️ Notes

- This component sets Svelte context that child `Checkbox` components consume.
- Must wrap `Checkbox` children directly to enable group behavior.
- Modify the `group` array externally or via checkboxes to control selection.

