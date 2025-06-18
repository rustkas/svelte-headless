# `<c-button>` Component

The `<ฺฺButton>` component is a custom headless UI button built using Svelte 5 syntax, including runes and `{@attach}` support.

## ✅ Features

- Fully typed `HTMLButtonAttributes` support
- Automatic forwarding of native DOM events via `forwardAllEvents()`
- Custom keyboard click behavior using `createKeyboardClickHandler`
- Focus management via `focusIfNeeded`
- `@attach`-based event forwarding for custom elements
- Compatible with Svelte 5 custom elements
- Supports slot rendering via `{@render children?.()}`
- `autofocus`, `disabled`, `tabindex`, `aria-*` bindings supported

## 📥 Props

Inherits all standard HTML button props, including but not limited to:

- `type`: `"button" | "submit" | "reset"`
- `disabled`: `boolean`
- `autofocus`: `boolean`
- `tabindex`: `number`
- `name`, `value`, `id`, `class`, `style`, `role`
- `form`, `formaction`, `formmethod`, `formenctype`, `formnovalidate`, `formtarget`
- `aria-label`, `aria-labelledby`, `aria-disabled`

## 📤 Events

All native DOM events are forwarded:
- `click`, `focus`, `blur`, `keydown`, `keyup`, `mouseenter`, `mouseleave`, etc.

Special `keydown` behavior handles:
- `Enter` or `Space` keys → triggers `.click()` when not disabled

## 🧪 Usage

```svelte
<script lang="ts">
  import 'your-lib-path'; // <c-button> auto-registered via customElement
</script>

<c-button class="px-4 py-2 border rounded">
  Click me
</c-button>
```

## 📌 Notes

- Use `<c-button>` in DOM (custom element)
- Use `<Button>` if directly importing `.svelte` file (e.g., in internal apps)
- Tailwind CSS styles can be passed via `class` prop

## 🔗 Reference

- [forwardAllEvents](./utils/forwardAllEvents.ts)
- [createKeyboardClickHandler](./utils/dom.ts)
- [focusIfNeeded](./utils/focus.ts)