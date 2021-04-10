import { amoebaSort } from './utils/sort/amoeba-sort';
import { diff } from './utils/compare/diff';
import { difference } from './utils/sets/difference';
import { exclusive } from './utils/sets/exclusive';
import { filled } from './utils/create/filled';
import { generate } from './utils/create/generate';
import { intersect } from './utils/sets/intersect';
import { isSparse } from './utils/check/is-sparse';
import { padEnd } from './utils/modify/pad-end';
import { padStart } from './utils/modify/pad-start';
import { range } from './utils/create/range';
import { shuffle } from './utils/sort/shuffle';
import { strideCopy } from './utils/copy/stride-copy';
import { strideSlice } from './utils/copy/stride-slice';
import { union } from './utils/sets/union';


// @ts-ignore
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
