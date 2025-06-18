export function multiplier2(getCount: () => number, k: number) {
	return {
		get value() {
			return getCount() * k;
		}
	};
}