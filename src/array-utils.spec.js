import { listFiles } from '@suns-echoes/file-system-utils/src/utils/list-files';
import { readTextFile } from '@suns-echoes/file-system-utils/src/utils/read-text-file';
import { ArrayUtils } from './array-utils.js';


async function findEntries() {
	process.chdir('src');

	const entities = await listFiles('./utils');
	const matchNonSpecFiles = /^((?!\.spec\.js).)*\.js$/;
	const entries = [];

	process.chdir('..');

	for (const entity of entities) {
		if (matchNonSpecFiles.test(entity)) {
			const path = `./${entity}`;
			const module = await import(path);
			const keys = Object.keys(module);

			keys.forEach((key) => {
				if (typeof module[key] !== undefined) {
					if (key !== 'default' || module[key] !== module.default) {
						entries.push(key);
					}
				}
			});
		}
	}

	return entries;
}


describe('ArrayUtils', () => {
	it('has named export for all existing entries', async () => {
		const exportedEntries = Object.keys(ArrayUtils);
		const foundEntries = await findEntries();

		expect(exportedEntries.sort()).to.be.eql(foundEntries.sort());
	});

	it('has TypeScript definitions for all existing entries', async () => {
		const js = await readTextFile('./src/array-utils.js');
		const ts = await readTextFile('./src/array-utils.d.ts');

		// TODO: remove this workaround
		expect(ts.replaceAll('// @ts-ignore\n', '')).to.be.equal(js.replaceAll('.js\';', '\';'));
	});
});
