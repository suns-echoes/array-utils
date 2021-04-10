export function difference(...arrays) {
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

		return left.filter((item) => !right.includes(item));
	}
	else {
		const left = arrays.shift();
		const right = new Set(Array.prototype.concat(...arrays));

		return left.filter((item) => !right.has(item));
	}
}
