import { padStart } from './pad-start.js';


describe('padStart', () => {
	it('adds padding to original array', () => {
		const source = [1, 2, 3];
		const result = padStart(source, 5, 0);
		const sample = [0, 0, 1, 2, 3];

		expect(result).to.be.eql(sample);
		expect(result).to.be.equal(source);
	});

	it('does not reduce array length', () => {
		const source = [1, 2, 3];
		const result = padStart(source, 1, 0);
		const sample = [1, 2, 3];

		expect(result).to.be.eql(sample);
		expect(result).to.be.equal(source);
	});
});
