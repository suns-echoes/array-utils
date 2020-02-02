/**
 * Method returns new array containing items exclusive to all input arrays.
 * This method takes at least two arrays.
 * @method exclusive
 * @param {array} ...arrays - list of arrays
 * @returns {array} - resulting array
 */
export function exclusive(...arrays) {
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

		return left.filter((item) => !right.includes(item))
			.concat(right.filter((item) => !left.includes(item)));
	}
	else {
		const arrs = arrays.map((array) => [...array]);
		const acc = [];

		arrs.forEach((left) => {
			left.forEach((item) => {
				const unique = arrs.every((right) => {
					return (
						left === right ||
						left !== right && !right.includes(item)
					);
				});

				if (unique) {
					acc.push(item);
				}
			});
		});

		return acc;
	}
}
