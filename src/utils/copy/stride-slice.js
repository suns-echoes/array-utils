const { floor, max, min } = Math;


export function strideSlice(src, srcOffset, srcStride, destStride, blockLength, blockCount, defaultValue) {
	if (!Number.isInteger(destStride)) {
		throw new TypeError('\'destStride\' is not an integer');
	}
	else if (destStride < 1) {
		throw new RangeError('\'destStride\' must be a positive integer');
	}
	if (!Number.isInteger(blockCount)) {
		throw new TypeError('\'blockCount\' is not an integer');
	}
	else if (blockCount < 1) {
		throw new RangeError('\'blockCount\' must be a positive integer');
	}

	const srcLength = src.length;
	const srcStart = srcOffset >= 0 ? srcOffset : max(0, srcLength + srcOffset);
	const destLength = destStride * blockCount;
	const dest = new Array(destLength);
	const maxBlockLength = min(destStride, blockLength);
	const fullBlockCount = min(blockCount, floor((srcLength - srcStart) / srcStride));
	let srcIndex = srcStart;
	let destIndex = 0;
	let blockIndex = 0;

	for (let blockNo = 0; blockNo < fullBlockCount; blockNo++) {
		for (blockIndex = 0; blockIndex < maxBlockLength; blockIndex++) {
			dest[destIndex++] = src[srcIndex++];
		}

		srcIndex += srcStride - blockIndex;

		for (blockIndex; blockIndex < destStride; blockIndex++) {
			dest[destIndex++] = defaultValue;
		}
	}

	if (destIndex < destLength) {
		for (srcIndex; srcIndex < srcLength; srcIndex) {
			dest[destIndex++] = src[srcIndex++];
		}

		for (destIndex; destIndex < destLength; destIndex) {
			dest[destIndex++] = defaultValue;
		}
	}

	return dest;
}
