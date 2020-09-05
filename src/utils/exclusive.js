/**
 * Method returns new array containing non-intersecting items from input arrays.
 * This method takes at least two arrays.
 * @method exclusive
 * @param {...array} arrays - list of arrays
 * @returns {array} - resulting array
 */
export function exclusive(...arrays) {
	arrays.forEach((array, index) => {
		if (!Array.isArray(array)) {
			throw new TypeError(`"arrays[${index}]" is not an array`);
		}
	});

	if (arrays.length < 2) {
		throw new Error('Method takes at least two arrays');
	}

	if (arrays.length === 2) {
		const [left, right] = arrays;

		return left.filter((item) => !right.includes(item))
			.concat(right.filter((item) => !left.includes(item)));
	}
	else {
		const acc = [];

		arrays.forEach((left) => {
			left.forEach((item) => {
				const unique = arrays.every((right) => (
					left === right || !right.includes(item)
				));

				if (unique) {
					acc.push(item);
				}
			});
		});

		return acc;
	}
}
