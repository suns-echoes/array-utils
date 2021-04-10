export function isSparse(array) {
	for (let index = 0; index < array.length; ++index) {
		if (!(index in array)) {
			return true;
		}
	}

	return false;
}
