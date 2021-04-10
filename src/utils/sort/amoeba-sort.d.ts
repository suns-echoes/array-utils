/**
 * Returns sorted array. This function treats the source array as two-dimensional.
 * It starts from the center (or given startX and startY coordinates) and select random adjacent elements.
 * It modifies original array and returns it.
 * @param source Source array.
 * @param width Optional width of 2-D array representation.
 * Default is source length.
 * @param height Optional height of 2-D array representation.
 * Default is ⌊source length / width⌋.
 * @param startX Optional start position along x-axis in 2-D array representation.
 * Default is ⌊width / 2⌋.
 * @param startY Optional start position along y-axis in 2-D array representation.
 * Default is ⌊height / 2⌋.
 */
export function amoebaSort(source: any[], width?: number, height?: number, startX?: number, startY?: number): any[]
