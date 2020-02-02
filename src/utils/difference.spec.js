import { difference } from './difference';


describe('ArrayUtils.difference', () => {
	it('returns items from two arrays exclusive to first array', () => {
		const one = [1, 2, 3];
		const two = [3, 4, 5];
		const result = [1, 2];

		expect(difference(one, two)).to.be.eql(result);
	});

	it('returns items from tree arrays exclusive to first array', () => {
		const one = [1, 2, 3];
		const two = [2, 4, 6];
		const tree = [3, 5, 7];
		const result = [1];

		expect(difference(one, two, tree)).to.be.eql(result);
	});

	it('throws if argument is not an array', () => {
		const arg = null;

		function fail() {
			difference(arg);
		}

		expect(fail).to.throw(TypeError);
	});

	it('throws if not enough arguments are provided', () => {
		const arg = [];

		function fail() {
			difference(arg);
		}

		expect(fail).to.throw(Error);
	});
});
