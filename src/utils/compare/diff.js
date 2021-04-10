import { difference } from '../sets/difference.js';
import { intersect } from '../sets/intersect.js';


export function diff(a, b) {
	if (!Array.isArray(a)) {
		throw new TypeError('\'a\' is not an array');
	}

	if (!Array.isArray(b)) {
		throw new TypeError('\'b\' is not an array');
	}

	const common = intersect(a, b);
	const deletions = difference(a, common);
	const insertions = difference(b, common);

	return {
		common,
		deletions,
		insertions,
	};
}
