import { difference } from './difference.js';
import { intersect } from './intersect.js';


/**
 * Method returns differences between arrays.
 * @method diff
 * @param {array} left - first array
 * @param {array} right - second array
 * @returns {object} - object with differences
 *   @prop {array} common - common elements to both arrays
 *   @prop {array} deletions - elements from first array but not included in second array
 *   @prop {array} insertions - elements from second array but not included in first array
 */
export function diff(left, right) {
	if (!Array.isArray(left)) {
		throw new TypeError('First argument is not an array');
	}
	if (!Array.isArray(right)) {
		throw new TypeError('Second argument is not an array');
	}

	const common = intersect(left, right);
	const deletions = difference(left, common);
	const insertions = difference(right, common);

	return {
		common,
		deletions,
		insertions,
	};
}
