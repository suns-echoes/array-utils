export function generate(length, generator) {
	return Array.from({ length }, (_, index) => generator(index));
}
