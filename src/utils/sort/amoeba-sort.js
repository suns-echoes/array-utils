const { random } = Math;


export function amoebaSort(array, width = array.length, height = (array.length / width) | 0,
	startX = width >> 1, startY = height >> 1
) {
	const startIndex = startY * width + startX;
	const length = width * height;

	const grow = [startIndex];
	const grown = new Array(length);

	const originalArray = array.slice();
	let amoebaIndex = 0;

	grown[startIndex] = true;

	while (grow.length > 0) {
		const growIndex = (random() * grow.length) | 0;
		const index = grow[growIndex];

		grow.splice(growIndex, 1);
		array[amoebaIndex++] = originalArray[index];

		const up = index - width;

		if (!(up in grown) && up >= 0) {
			grow.push(up);
			grown[up] = true;
		}

		const right = index + 1;

		if (!(right in grown) && index % width < width - 1) {
			grow.push(right);
			grown[right] = true;
		}

		const down = index + width;

		if (!(down in grown) && down < length) {
			grow.push(down);
			grown[down] = true;
		}

		const left = index - 1;

		if (!(left in grown) && index % width > 0) {
			grow.push(left);
			grown[left] = true;
		}
	}

	return array;
}
