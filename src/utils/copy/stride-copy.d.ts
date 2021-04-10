/**
 * Copies strides from source array into destination array.
 * @param src Source array.
 * @param srcOffset Index at which to start reading data.
 * A negative index can be used, indicating an offset from the end of the sequence.
 * @param srcStride Length of source stride.
 * @param dest Destination array.
 * @param destOffset Index at which to start writing data.
 * A negative index can be used, indicating an offset from the end of the sequence.
 * @param destStride Length of destination stride.
 * @param blockLength Length of data block that will be copied.
 * @param blockCount Number of blocks to copy.
 * @param defaultValue Overwrites elements in stride of destination array between block end and stride end.
 * If omitted original value will be preserved.
 * @param allowToExtendDest Allows to expand destination array.
 */
export function strideCopy(src: any[], srcOffset: number, srcStride: number,
	dest: any[], destOffset: number, destStride: number, blockLength: number, blockCount: number,
	defaultValue: any, allowToExtendDest: boolean): any[]
