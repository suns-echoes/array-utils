import { strideCopy } from './stride-copy.js';


describe('strideCopy', () => {
	it('copies array', () => {
		const src = [1, 2, 3, 4, 5];
		const dest = [0, 0];

		strideCopy(src, 0, 0, dest);

		expect(dest).to.be.eql([1, 2]);
	});

	it('copies array and allow to expand destination array', () => {
		const src = [1, 2, 3, 4, 5];
		const dest = [];

		strideCopy(src, 0, 1, dest, 0, 1, 1, 3, -1, true);

		expect(dest).to.be.eql([1, 2, 3]);
	});

	it('copies array with offsets', () => {
		const src = [1, 2, 3, 4, 5];
		const dest = [0, 0, 0, 0];

		strideCopy(src, 1, 0, dest, 1, 0, 3);

		expect(dest).to.be.eql([0, 2, 3, 4]);
	});

	it('copies array with negative offsets', () => {
		const src = [1, 2, 3, 4, 5];
		const dest = [0, 0, 0, 0];

		strideCopy(src, -3, 0, dest, -4, 0, 3);

		expect(dest).to.be.eql([3, 4, 5, 0]);
	});

	it('copies array with source stride', () => {
		const src = [1, 2, 3, 4, 5];
		const dest = new Array(3);

		strideCopy(src, 0, 2, dest, 0, 1, 1, 3);

		expect(dest).to.be.eql([1, 3, 5]);
	});

	it('copies array with destination stride', () => {
		const src = [1, 2, 3, 4, 5];
		const dest = new Array(5);

		strideCopy(src, 0, 1, dest, 0, 2, 1, 3, 0);

		expect(dest).to.be.eql([1, 0, 2, 0, 3]);
	});

	it('copies array with source and destination strides', () => {
		const src = [1, 2, 3, 4, 5];
		const dest = new Array(5);

		strideCopy(src, 0, 2, dest, 0, 2, 1, 3, 0);

		expect(dest).to.be.eql([1, 0, 3, 0, 5]);
	});

	it('copies array with source stride overlap', () => {
		const src = [1, 2, 3, 4, 5];
		const dest = new Array(5);

		strideCopy(src, 0, 2, dest, 0, 4, 3, 2, -1, true);

		expect(dest).to.be.eql([1, 2, 3, -1, 3, 4, 5, -1]);
	});

	it('copies array with dest overflow', () => {
		const src = [1, 2, 3, 4, 5];
		const dest = new Array(5);

		strideCopy(src, 0, 2, dest, 0, 3, 1, 4, undefined, true);

		expect(dest).to.be.eql([
			1, undefined, undefined,
			3, undefined, undefined,
			5, undefined, undefined,
			undefined, undefined, undefined,
		]);
	});
});
