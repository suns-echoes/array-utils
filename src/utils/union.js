/**
 * Method returns new array containing items from input arrays but with no duplicate values.
 * This method takes at least two arrays.
 * @method union
 * @param {...array} arrays - list of arrays
 * @returns {array} - resulting array
 */
export function union(...arrays) {
	arrays.forEach((array, index) => {
		if (!Array.isArray(array)) {
			throw new TypeError(`"arrays[${index}]" is not an array`);
		}
	});

	if (arrays.length < 2) {
		throw new Error('Method takes at least two arrays');
	}

	return [...new Set(Array.prototype.concat(...arrays))];
}
