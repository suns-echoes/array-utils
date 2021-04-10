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
