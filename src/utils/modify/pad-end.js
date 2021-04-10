export function padEnd(array, maxLength, fillValue) {
	if (array.length < maxLength) {
		Array.prototype.push.apply(array, new Array(maxLength - array.length).fill(fillValue));
	}

	return array;
}
