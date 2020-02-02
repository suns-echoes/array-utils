import { remove } from '@suns-echoes/file-system-utils/src/utils/remove';

import { config } from '../config';


export async function cleanupDistTests() {
	await remove(config.paths.dist, /\.spec\.js$/);
}
