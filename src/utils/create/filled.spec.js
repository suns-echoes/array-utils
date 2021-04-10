import { filled } from './filled.js';


describe('filled', () => {
	it('returns new array of N undefined elements', () => {
		expect(filled(3)).to.eql([undefined, undefined, undefined]);
	});

	it('returns new array of N defined elements', () => {
		expect(filled(3, 'x')).to.eql(['x', 'x', 'x']);
	});
});
