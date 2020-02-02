import { exclusive } from './exclusive';


describe('ArrayUtils.exclusive', () => {
	it('returns items exclusive to two arrays', () => {
		const one = [1, 2, 3];
		const two = [3, 4, 5];
		const result = [1, 2, 4, 5];

		expect(exclusive(one, two)).to.be.eql(result);
	});

	it('returns items exclusive to tree arrays', () => {
		const one = [1, 2, 3];
		const two = [2, 3, 4, 5, 6];
		const tree = [5, 6, 7];
		const result = [1, 4, 7];

		expect(exclusive(one, two, tree)).to.be.eql(result);
	});

	it('throws if argument is not an array', () => {
		const arg = null;

		function fail() {
			exclusive(arg);
		}

		expect(fail).to.throw(TypeError);
	});

	it('throws if not enough arguments are provided', () => {
		const arg = [];

		function fail() {
			exclusive(arg);
		}

		expect(fail).to.throw(Error);
	});
});
