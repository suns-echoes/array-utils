import { isSparse } from './is-sparse.js';


describe('isSparse', () => {
	it('returns true for array with empty element', () => {
		const array = [1];

		array[2] = 3;

		expect(isSparse(array)).to.be.true;
	});

	it('returns false for continous array', () => {
		const array = [1, 2, 3];

		expect(isSparse(array)).to.be.false;
	});
});
