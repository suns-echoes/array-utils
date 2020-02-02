import { listFiles } from '@suns-echoes/file-system-utils/src/utils/list-files';
import { readTextFile } from '@suns-echoes/file-system-utils/src/utils/read-text-file';
import { writeTextFile } from '@suns-echoes/file-system-utils/src/utils/write-text-file';
import { transformESMIntoCJS } from '@suns-echoes/transform-esm-into-cjs/src';

import { config } from '../config';


export async function transformModulesIntoCJS() {
	const distPath = config.paths.dist;

	const files = await listFiles(distPath, -1, /\.js$/);

	for (const filepath of files) {
		let source = await readTextFile(filepath);

		source = transformESMIntoCJS(source);

		await writeTextFile(filepath, source);
	}
}
