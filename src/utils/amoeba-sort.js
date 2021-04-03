/**
 * Method sorts array items, it starts from center and moves to random adjacent elements.
 * @method diff
 * @param {array} array - 1D or 2D array to sort
 * @param {number} [width] - this parameter must be specified for 1D array
 * @param {number} [height] - this parameter must be specified for 1D array
 * @param {array} right - second array
 * @returns {array} - 1D sorted array
 */
export function amoebaSort(array, width = array[0].length, height = array.length) {
	const inputArray = array.flat();
	const centerX = Math.floor(width / 2);
	const centerY = Math.floor(height / 2);
	const startIndex = centerY * width + centerX;

	const usage = new Array(inputArray.length).fill(false);
	const growable = [startIndex];
	const amoeba = [inputArray[startIndex]];

	usage[startIndex] = true;

	function canGrow(index) {
		const x = index % width;
		const y = Math.floor(index / width);

		return (
			(x > 0 && !usage[index - 1]) ||
			(x < width - 1 && !usage[index + 1]) ||
			(y > 0 && !usage[index - width]) ||
			(y < height - 1 && !usage[index + width])
		);
	}

	while (growable.length) {
		let growableItemIndex = 0;
		let growableIndex = 0;
		let isGrowable = false;

		do {
			growableItemIndex = Math.floor(growable.length * Math.random());
			growableIndex = growable[growableItemIndex];
			isGrowable = canGrow(growableIndex);

			if (!isGrowable) {
				growable.splice(growableItemIndex, 1);
			}
		} while (!isGrowable && growable.length);

		const growRandomDirection = Math.floor(Math.random() * 4);
		let growIndex = -1;

		for (let rotate = 0; growIndex === -1 && rotate < 4; rotate++) {
			const growDirection = (growRandomDirection + rotate) % 4;
			const x = growableIndex % width;
			const y = Math.floor(growableIndex / width);

			if (growDirection === 0 && y > 0 && !usage[growableIndex - width]) {
				growIndex = growableIndex - width;
			}
			else if (growDirection === 1 && x < width - 1 && !usage[growableIndex + 1]) {
				growIndex = growableIndex + 1;
			}
			else if (growDirection === 2 && y < height - 1 && !usage[growableIndex + width]) {
				growIndex = growableIndex + width;
			}
			else if (growDirection === 3 && x > 0 && !usage[growableIndex - 1]) {
				growIndex = growableIndex - 1;
			}
		}

		if (growIndex > -1) {
			usage[growIndex] = true;
			amoeba.push(inputArray[growIndex]);

			if (!canGrow(growableIndex)) {
				growable.splice(growableItemIndex, 1);
			}

			if (canGrow(growIndex)) {
				growable.push(growIndex);
			}
		}
	}

	return amoeba;
}
