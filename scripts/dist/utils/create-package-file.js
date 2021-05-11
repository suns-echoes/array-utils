
import { readTextFile } from '@suns-echoes/file-system-utils/src/utils/read-text-file';
import { writeTextFile } from '@suns-echoes/file-system-utils/src/utils/write-text-file';
import { config } from '../config';


export async function createPackageFile() {
	const { copyProps, setProps } = config.createPackageFile;
	const pkgFile = await readTextFile('./package.json');
	const pkg = JSON.parse(pkgFile);

	if (copyProps) {
		Object.keys(pkg).forEach((key) => {
			if (!copyProps[key]) {
				pkg[key] = undefined;
			}
		});
	}

	if (setProps) {
		Object.keys(setProps).forEach((prop) => {
			pkg[prop] = setProps[prop];
		});
	}

	const data = JSON.stringify(pkg, null, '  ');

	await writeTextFile(`${config.paths.dist}/package.json`, data);
}
