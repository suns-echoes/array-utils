const { max } = Math;


export function strideCopy(src, srcOffset, srcStride, dest, destOffset = 0, destStride = 0,
	blockLength = src.length, blockCount = 1, defaultValue = undefined, allowToExtendDest = false,
) {
	const srcLength = src.length;
	const destLength = allowToExtendDest ? max(dest.length, destStride * blockCount) : dest.length;
	const originalDestLength = dest.length;
	let destIndex = destOffset >= 0 ? destOffset : dest.length + destOffset;
	let srcIndex = srcOffset >= 0 ? srcOffset : src.length + srcOffset;
	let blockIndex = 0;

	for (let blockNo = 0; blockNo < blockCount; blockNo++) {
		for (blockIndex = 0; blockIndex < blockLength && destIndex < destLength && srcIndex < srcLength; blockIndex++) {
			dest[destIndex++] = src[srcIndex++];
		}

		srcIndex += srcStride - blockIndex;

		if (defaultValue === undefined) {
			for (blockIndex; blockIndex < destStride && destIndex < destLength; blockIndex++) {
				if (destIndex >= originalDestLength) {
					dest[destIndex++] = undefined;
				}
				else {
					destIndex++;
				}
			}
		}
		else {
			for (blockIndex; blockIndex < destStride && destIndex < destLength; blockIndex++) {
				dest[destIndex++] = defaultValue;
			}
		}
	}
}
