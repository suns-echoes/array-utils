export function padStart(array, maxLength, fillValue) {
	if (array.length < maxLength) {
		const lengthDifference = maxLength - array.length;
		const originalArray = array.slice();

		array.length = 0;
		Array.prototype.push.apply(array, new Array(lengthDifference).fill(fillValue));
		Array.prototype.push.apply(array, originalArray);
	}

	return array;
}
