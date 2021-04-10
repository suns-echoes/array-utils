/**
 * Object containing deletions, insertions and common elements.
 */
interface DiffResult {
	/** Elements common to both arrays. */
	common: any[],
	/** Elements exclusive to first array. */
	deletions: any[],
	/** Elements exclusive to second array. */
	insertions: any[],
}


/**
 * Returns object containing differences between two arrays.
 * @param a First array.
 * @param b Second array.
 */
export function diff(a: any[], b: any[]): DiffResult
