import { copy } from '@suns-echoes/file-system-utils/src/utils/copy';
import { config } from '../config';


export async function copyDocumentationFiles() {
	const paths = config.copyDocumentationFiles;

	for (const src in paths) {
		await copy(src, paths[src]);
	}
}
