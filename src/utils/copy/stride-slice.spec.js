import { strideSlice } from './stride-slice.js';


function testIt(src, srcBak, tests) {
	tests.forEach((test) => {
		(test.only ? it.only : it)(test.name, () => {
			const result = strideSlice(src, test.srcOffset, test.srcStride, test.destStride,
				test.blockLength, test.blockCount, '-');

			expect(result).to.eql(test.wanted.split(''));
			expect(result).not.to.equal(src);
			expect(src).to.eql(srcBak);
		});
	});
}

describe('strideSlice', () => {
	const src = 'ABCDEFGHIJKLMNOP'.split('');
	const srcBak = src.slice();

	testIt(src, srcBak, [
		{
			name: 'returns new array for srcOffset = 0, srcStride = destStride = blockLength',
			srcOffset: 0,
			srcStride: 4,
			destStride: 4,
			blockLength: 4,
			blockCount: 4,
			wanted: 'ABCDEFGHIJKLMNOP',
		},
		{
			name: 'returns new array for srcOffset > 0',
			srcOffset: 12,
			srcStride: 4,
			destStride: 4,
			blockLength: 4,
			blockCount: 4,
			wanted: 'MNOP------------',
		},
		{
			name: 'returns new array for srcOffset < 0',
			srcOffset: -12,
			srcStride: 4,
			destStride: 4,
			blockLength: 4,
			blockCount: 4,
			wanted: 'EFGHIJKLMNOP----',
		},
		{
			name: 'returns new array for srcOffset > src.length',
			srcOffset: 24,
			srcStride: 4,
			destStride: 4,
			blockLength: 4,
			blockCount: 4,
			wanted: '----------------',
		},
		{
			name: 'returns new array for srcOffset < -src.length',
			srcOffset: -24,
			srcStride: 4,
			destStride: 4,
			blockLength: 4,
			blockCount: 5,
			wanted: 'ABCDEFGHIJKLMNOP----',
		},
		{
			name: 'returns new array for srcStride > destStride > blockLength',
			srcOffset: 0,
			srcStride: 5,
			destStride: 4,
			blockLength: 3,
			blockCount: 5,
			wanted: 'ABC-FGH-KLM-P-------',
		},
		{
			name: 'returns new array for destStride > srcStride > blockLength',
			srcOffset: 0,
			srcStride: 4,
			destStride: 5,
			blockLength: 3,
			blockCount: 5,
			wanted: 'ABC--EFG--IJK--MNO-------',
		},
		{
			name: 'returns new array for srcStride > blockLength > destStride',
			srcOffset: 0,
			srcStride: 5,
			destStride: 3,
			blockLength: 4,
			blockCount: 5,
			wanted: 'ABCFGHKLMP-----',
		},
		{
			name: 'returns new array for destStride > blockLength > srcStride',
			srcOffset: 0,
			srcStride: 3,
			destStride: 5,
			blockLength: 4,
			blockCount: 7,
			wanted: 'ABCD-DEFG-GHIJ-JKLM-MNOP-P---------',
		},
		{
			name: 'returns new array for blockLength > srcStride > destStride',
			srcOffset: 0,
			srcStride: 4,
			destStride: 3,
			blockLength: 5,
			blockCount: 5,
			wanted: 'ABCEFGIJKMNO---',
		},
		{
			name: 'returns new array for blockLength > destStride > srcStride',
			srcOffset: 0,
			srcStride: 3,
			destStride: 4,
			blockLength: 5,
			blockCount: 7,
			wanted: 'ABCDDEFGGHIJJKLMMNOPP-------',
		},
	]);

	it('throws if destStride is invalid', () => {
		const fail1 = () => {
			strideSlice([], 0, 0, null, 0, 1);
		};

		expect(fail1).to.throw(TypeError);

		const fail2 = () => {
			strideSlice([], 0, 0, 0, 0, 1);
		};

		expect(fail2).to.throw(RangeError);
	});

	it('throws if blockCount is invalid', () => {
		const fail1 = () => {
			strideSlice([], 0, 0, 1, 0, null);
		};

		expect(fail1).to.throw(TypeError);

		const fail2 = () => {
			strideSlice([], 0, 0, 1, 0, 0);
		};

		expect(fail2).to.throw(RangeError);
	});

	it('don\'t blow-up if non-critical arguments are invalid', () => {
		const result1 = strideSlice([], -1, -1, 2, -1, 3, 0);
		const result2 = strideSlice([], 'err', 'err', 2, 'err', 3, 0);
		const wanted = [0, 0, 0, 0, 0, 0];

		expect(result1).to.be.eql(wanted);
		expect(result2).to.be.eql(wanted);
	});
});
