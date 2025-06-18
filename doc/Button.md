# 🧱 Button

A headless, accessible button component for Svelte 5 with full HTML compatibility and enhanced keyboard/focus behavior.

---

## ✅ Usage

```svelte
<script>
  import { Button } from '@rustkas/svelte-headless'
</script>

<Button>Click me</Button>
```

---

## 🧠 Features

- Full support for native `<button>` attributes: `type`, `form`, `name`, `disabled`, `tabindex`, `value`, etc.
- Auto-focus support on mount via `autofocus` (if not `disabled`).
- Keyboard click handler for accessibility (`Enter`, `Space` keys).
- Automatic event forwarding (e.g. `click`, `focus`, `keydown`).
- `children` render prop support via `{@render}`.
- Proper `aria-*` attribute handling: `aria-disabled`, `aria-label`, `aria-labelledby`.

---

## 🔧 Props

| Prop            | Type                              | Default     | Description                          |
|-----------------|-----------------------------------|-------------|--------------------------------------|
| `type`          | `'button' \| 'submit' \| 'reset'` | `'button'` | Button behavior type                 |
| `disabled`      | `boolean`                         | `false`     | Disables the button                  |
| `autofocus`     | `boolean`                         | `false`     | Auto-focuses the button on mount     |
| `tabindex`      | `number`                          | `0 or -1`   | Automatically determined             |
| `form` and co.  | `string`                          | —           | All standard `form-*` attributes     |
| `aria-disabled` | `boolean`                         | Fallbacks to `disabled` | Accessibility support   |
| `class`         | `string`                          | —           | Custom CSS / Tailwind classes        |
| `children`      | `() => any`                       | —           | Render function for slot content     |

---

## 📌 Events

All native DOM events are forwarded:

- `onclick`, `onfocus`, `onblur`, `onkeydown`, `onkeyup`, etc.

---

## 💡 Examples

### Button with icon

```svelte
<Button class="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded">
  <Icon name="check" />
  Submit
</Button>
```

### Submit button inside a form

```svelte
<form onsubmit={handleSubmit}>
  <Button type="submit">Send</Button>
</form>
```

---

## ⚠️ Notes

- No styling, transitions, or actions included – fully headless.
- `autofocus` is ignored if the button is `disabled`.
- Pass `children` as a render function to use `{@render}` inside.

Feel free to extend or wrap this component to add custom loading states, icons, or animations.
