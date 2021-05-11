import { listFiles } from '@suns-echoes/file-system-utils/src/utils/list-files';
import { config } from '../config';


export async function checkDocumentationFiles() {
	const srcPath = config.paths.src.input;

	let jsFiles = await listFiles(srcPath, { filter: /(?<!\.spec)\.js$/ });
	let tsFiles = await listFiles(srcPath, { filter: /\.d\.ts$/ });
	let mdFiles = await listFiles(srcPath, { filter: /\.md$/ });

	jsFiles = jsFiles.map((jsFile) => jsFile.replaceAll('\\', '/'))
		.filter((jsFile) => !config.checkDocumentationFiles.skip[jsFile])
		.map((jsFile) => jsFile.substring(0, jsFile.length - 3));
	tsFiles = tsFiles.map((tsFile) => tsFile.substring(0, tsFile.length - 5).replaceAll('\\', '/'));
	mdFiles = mdFiles.map((mdFile) => mdFile.substring(0, mdFile.length - 3).replaceAll('\\', '/'));

	const missingTsFiles = jsFiles.filter((jsFile) => !tsFiles.includes(jsFile));
	const missingMdFiles = jsFiles.filter((jsFile) => !mdFiles.includes(jsFile));

	if (missingTsFiles.length === 0 && missingMdFiles.length === 0) {
		return;
	}

	const error = `${
		missingTsFiles.length > 0 ? `\n\nMissing TypeScript declaration files:\n${
			missingTsFiles.map((file) => ` - ${file}.d.ts`).join('\n')
		}` : ''
	}${
		missingMdFiles.length > 0 ? `\n\nMissing MD documentation files:\n${
			missingMdFiles.map((file) => ` - ${file}.md`).join('\n')
		}` : ''
	}\n`;

	throw new Error(error);
}
