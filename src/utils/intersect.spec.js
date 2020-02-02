import { intersect } from './intersect';


describe('ArrayUtils.intersect', () => {
	it('returns items common to two arrays', () => {
		const one = [1, 2, 3];
		const two = [3, 4, 5];
		const result = [3];

		expect(intersect(one, two)).to.be.eql(result);
	});

	it('returns items common to tree arrays', () => {
		const one = [1, 2, 3];
		const two = [2, 3, 4];
		const tree = [3, 4, 5];
		const result = [3];

		expect(intersect(one, two, tree)).to.be.eql(result);
	});

	it('throws if argument is not an array', () => {
		const arg = null;

		function fail() {
			intersect(arg);
		}

		expect(fail).to.throw(TypeError);
	});

	it('throws if not enough arguments are provided', () => {
		const arg = [];

		function fail() {
			intersect(arg);
		}

		expect(fail).to.throw(Error);
	});
});
