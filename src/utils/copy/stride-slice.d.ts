/**
 * Returns new array with copy of strides from the source array.
 * @param src Source array.
 * @param srcOffset Index at which to start reading data.
 * A negative index can be used, indicating an offset from the end of the sequence.
 * @param srcStride Length of source stride.
 * @param destStride Length of destination stride.
 * @param blockLength Length of data block that will be copied.
 * @param blockCount Number of blocks to copy.
 * @param defaultValue Optional value to put in empty spaces (between block end and stride end).
 */
export function strideSlice(src: any[], srcOffset: number, srcStride: number, destStride: number,
	blockLength: number, blockCount: number, defaultValue?: any): any[]
