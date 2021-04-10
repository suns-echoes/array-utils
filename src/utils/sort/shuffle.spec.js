import { shuffle } from './shuffle.js';


describe('shuffle', () => {
	it('returns new shuffled array', () => {
		const array = 'abcdefghijklmnopqrstuwxyz'.split('');
		const original = array.slice();
		const modified = shuffle(array);

		expect(modified).to.be.equal(array);
		expect(modified).not.to.be.eql(original);
		expect(modified.sort()).to.be.eql(original);
	});

	it('returns new partially shuffled array', () => {
		const array = 'abcdefghijklmnopqrstuwxyz'.split('');
		const original = array.slice();
		const modified = shuffle(array, 5, 10);

		expect(modified).to.be.equal(array);
		expect(modified.slice(0, 5)).to.be.eql(original.slice(0, 5));
		expect(modified.slice(5, 10)).not.to.be.eql(original.slice(5, 10));
		expect(modified.slice(10)).to.be.eql(original.slice(10));
		expect(modified.sort()).to.be.eql(original);
	});
});
