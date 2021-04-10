export function shuffle(array, start = 0, end = array.length, random = Math.random) {
	const range = end - start;

	for (let index = end; index > start;) {
		const newIndex = ((random() * range) | 0) + start;
		const temp = array[newIndex];

		index--;

		array[newIndex] = array[index];
		array[index] = temp;
	}

	return array;
}
