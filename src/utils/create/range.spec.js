import { range } from './range.js';


describe('range', () => {
	it('returns new array', () => {
		expect(range(0, 3)).to.eql([0, 1, 2]);
	});

	it('returns new array for positive step', () => {
		expect(range(1, 5, 1.5)).to.eql([1, 2.5, 4]);
	});

	it('returns new array for negative step', () => {
		expect(range(4, 2, -0.5)).to.eql([4, 3.5, 3, 2.5]);
	});

	it('returns empty array if step is 0', () => {
		expect(range(1, 3, 0)).to.eql([]);
		expect(range(3, 1, 0)).to.eql([]);
	});

	it('returns empty array for invalid parameters', () => {
		expect(range(null)).to.eql([]);
		expect(range(0, null)).to.eql([]);
		expect(range(0, 3, null)).to.eql([]);
	});
});
