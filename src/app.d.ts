// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
export {};

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	namespace svelteHTML {
		interface HTMLAttributes<T> {
			class?: string;
			tabindex?: number;
			'aria-disabled'?: boolean;
			onkeydown?: (e: KeyboardEvent) => void;
		}
	}
}

declare module '*.svelte' {
	export { SvelteComponentDev as default } from 'svelte/internal';
}