export function range(start, stop, step = 1) {
	const length = Math.ceil((stop - start) / step) | 0;

	return Array.from({ length }, (_, index) => index * step + start);
}
