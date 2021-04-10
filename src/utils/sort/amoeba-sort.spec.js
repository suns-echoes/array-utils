import { amoebaSort } from './amoeba-sort.js';


describe('amoebaSort', () => {
	it('returns new sorted array', () => {
		const array = 'abcdefghijklmnopqrstuwxyz'.split('');
		const result = array.slice();
		const amoeba = amoebaSort(array, 5, 5);

		expect(amoeba).not.to.be.eql(result);
		expect(amoeba.sort()).to.be.eql(result);
	});

	it('returns new sorted array with default arguments', () => {
		const array = 'abcdefghijklmnopqrstuwxyz'.split('');
		const result = array.slice();
		const amoeba = amoebaSort(array);

		expect(amoeba).not.to.be.eql(result);
		expect(amoeba.sort()).to.be.eql(result);
	});
});
