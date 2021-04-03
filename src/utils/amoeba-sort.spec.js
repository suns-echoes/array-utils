import { amoebaSort } from './amoeba-sort.js';


describe('ArrayUtils.amoebaSort', () => {
	it('returns new sorted array', () => {
		const array = 'abcdefghijklmnopqrstuwxyz'.split('');
		const result = array.slice(0);
		const amoeba = amoebaSort(array, 5, 5);

		expect(amoeba).not.to.be.eql(result);
		expect(amoeba.sort()).to.be.eql(result);
	});

	it('returns new sorted 2D array', () => {
		const array = [
			'abcde',
			'fghij',
			'klmno',
			'pqrst',
			'uwxyz',
		].map((set) => set.split(''));
		const result = array.flat();
		const amoeba = amoebaSort(array);

		expect(amoeba).not.to.be.eql(result);
		expect(amoeba.sort()).to.be.eql(result);
	});
});
