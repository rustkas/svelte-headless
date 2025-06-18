export function multiplier(initial: number, k: number) {
	let count = $state(initial);

	return {
		get value() {
			return count * k;
		},

		set: (c: number) => {
			count = c;
		}
	};
}