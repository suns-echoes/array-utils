import { generate } from './generate.js';


describe('generate', () => {
	it('returns new array', () => {
		expect(generate(3, (index) => index * 2)).to.eql([0, 2, 4]);
	});
});
