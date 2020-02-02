/**
 * Method returns new array containing unique items from all input arrays.
 * This method takes at least two arrays.
 * @method union
 * @param {array} ...arrays - list of arrays
 * @returns {array} - resulting array
 */
export function union(...arrays) {
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

		return left.concat(right.filter((item) => !left.includes(item)));
	}
	else {
		const [, ...arrs] = arrays;
		let acc = arrays[0];

		arrs.forEach((array) => {
			acc = acc.concat(array.filter((item) => !acc.includes(item)));
		});

		return acc;
	}
}
