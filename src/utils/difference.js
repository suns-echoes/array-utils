/**
 * Method returns new array containing items exclusive to first array.
 * This method takes at least two arrays.
 * @method difference
 * @param {array} ...arrays - list of arrays
 * @returns {array} - resulting array
 */
export function difference(...arrays) {
	arrays.forEach((array, index) => {
		if (!Array.isArray(array)) {
			throw new TypeError(`The #${index + 1} argument is not an array`);
		}
	});

	if (arrays.length < 2) {
		throw new Error('Method takes at least two arrays');
	}

	if (arrays.length === 2) {
		const [left, right] = arrays;

		return left.filter((item) => !right.includes(item));
	}
	else {
		let acc = arrays.shift();

		arrays.forEach((array) => {
			acc = acc.filter((item) => !array.includes(item));
		});

		return acc;
	}
}
