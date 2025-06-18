// utils/forwardAllEvents.ts
import type { Attachment } from 'svelte/attachments';

// Full list of DOM events
const allEvents = [
  'click', 'dblclick', 'mousedown', 'mouseup', 'mouseenter', 'mouseleave',
  'mouseover', 'mouseout', 'mousemove',
  'keydown', 'keyup', 'keypress',
  'focus', 'blur', 'focusin', 'focusout',
  'input', 'change', 'submit', 'reset',
  'drag', 'dragstart', 'dragend', 'dragenter', 'dragleave', 'dragover', 'drop',
  'touchstart', 'touchmove', 'touchend', 'touchcancel',
  'contextmenu', 'wheel', 'scroll',
  'animationstart', 'animationend', 'animationiteration',
  'transitionstart', 'transitionend', 'transitionrun', 'transitioncancel',
  'pointerdown', 'pointerup', 'pointermove', 'pointerenter', 'pointerleave', 'pointerover', 'pointerout', 'pointercancel',
  'copy', 'cut', 'paste',
  'beforeinput', 'compositionstart', 'compositionupdate', 'compositionend'
];

export function forwardAllEvents(): Attachment {
  return (el) => {
    const handlers = allEvents.map((event) => {
      const handler = (e: Event) => {
        el.dispatchEvent(new CustomEvent(event, { detail: e }));
      };
      el.addEventListener(event, handler);
      return { event, handler };
    });

    return () => {
      for (const { event, handler } of handlers) {
        el.removeEventListener(event, handler);
      }
    };
  };
}
