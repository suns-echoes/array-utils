import { diff } from './diff';


describe('ArrayUtils.diff', () => {
	it('returns differences between arrays', () => {
		const one = [1, 2, 3];
		const two = [3, 4, 5];
		const result = {
			common: [3],
			deletions: [1, 2],
			insertions: [4, 5],
		};

		expect(diff(one, two)).to.be.eql(result);
	});

	it('throws if first argument is not an array', () => {
		const arg = null;

		function fail() {
			diff(arg);
		}

		expect(fail).to.throw(TypeError);
	});

	it('throws if second argument is not an array', () => {
		const arg = null;

		function fail() {
			diff([], arg);
		}

		expect(fail).to.throw(TypeError);
	});
});
