import { amoebaSort } from './utils/sort/amoeba-sort.js';
import { diff } from './utils/compare/diff.js';
import { difference } from './utils/sets/difference.js';
import { exclusive } from './utils/sets/exclusive.js';
import { filled } from './utils/create/filled.js';
import { generate } from './utils/create/generate.js';
import { intersect } from './utils/sets/intersect.js';
import { isSparse } from './utils/check/is-sparse.js';
import { padEnd } from './utils/modify/pad-end.js';
import { padStart } from './utils/modify/pad-start.js';
import { range } from './utils/create/range.js';
import { shuffle } from './utils/sort/shuffle.js';
import { strideCopy } from './utils/copy/stride-copy.js';
import { strideSlice } from './utils/copy/stride-slice.js';
import { union } from './utils/sets/union.js';


export const ArrayUtils = {
	amoebaSort,
	diff,
	difference,
	exclusive,
	filled,
	generate,
	intersect,
	isSparse,
	padEnd,
	padStart,
	range,
	shuffle,
	strideCopy,
	strideSlice,
	union,
};
