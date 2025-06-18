export function logger(getValue: () => any) {
	const log: any[] = [];

	$effect(() => {
		log.push(getValue());
	});

	return {
		get value() {
			return log;
		}
	};
}
