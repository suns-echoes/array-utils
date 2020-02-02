import { union } from './union.js';


describe('ArrayUtils.union', () => {
	it('returns items from two arrays', () => {
		const one = [1, 2, 3];
		const two = [3, 4, 5];
		const result = [1, 2, 3, 4, 5];

		expect(union(one, two)).to.be.eql(result);
	});

	it('returns items from tree arrays', () => {
		const one = [1, 2, 3];
		const two = [3, 4, 5];
		const tree = [5, 6, 7];
		const result = [1, 2, 3, 4, 5, 6, 7];

		expect(union(one, two, tree)).to.be.eql(result);
	});

	it('throws if argument is not an array', () => {
		const arg = null;

		function fail() {
			union(arg);
		}

		expect(fail).to.throw(TypeError);
	});

	it('throws if not enough arguments are provided', () => {
		const arg = [];

		function fail() {
			union(arg);
		}

		expect(fail).to.throw(Error);
	});
});
