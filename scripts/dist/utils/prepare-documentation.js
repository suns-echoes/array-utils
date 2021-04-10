import { listFiles } from '@suns-echoes/file-system-utils/src/utils/list-files';
import { readTextFile } from '@suns-echoes/file-system-utils/src/utils/read-text-file';
import { writeTextFile } from '@suns-echoes/file-system-utils/src/utils/write-text-file';
import { config } from '../config';
import { join } from 'path';


function macroUtilFilePath(string, filepath) {
	return string.replaceAll(
		'<!-- @_UTIL_FILE_PATH -->',
		filepath
			.replace(/^.*?src\/utils\//, '')
			.replace(/\.md$/, '.js')
	);
}

function macroMethodList(string, methods) {
	const toc = Object.keys(methods)
		.map((group) => `* ${group}\n${methods[group]
			.map(([name, href, description]) => `	* [${name}](#${href}) - ${description}\n`)
			.join('')
		}`)
		.join('');

	return string
		.replaceAll('<!-- @_METHOD_LIST -->', toc)
		.replaceAll(/<!-- DEFINE @_SHORT_DESC=".+?" -->/g, '');
}

function macroMethodsDocumentation(string, methodsDocumentation) {
	return string.replaceAll('<!-- @_METHOD_DOCUMENTATIONS -->', methodsDocumentation.join('\n\n\n'));
}


export async function prepareDocumentation() {
	const readmePath = './README.md';
	const destPath = config.paths.dist;
	const srcPath = config.paths.src.input;
	const documentations = [];
	const methods = {};
	const files = await listFiles(srcPath, { filter: /\.md$/ });
	let readMe = await readTextFile(readmePath);

	for (const filepath of files) {
		const unixFilePath = filepath.replaceAll('\\', '/');
		let documentation = await readTextFile(filepath);
		const group = unixFilePath.replace(/^.*?src\/utils\/(.+?)\/.+$/, '$1');
		const name = unixFilePath.replace(/^.*?src\/utils\/.+?\/(.+?)\.md$/, '$1');
		const href = documentation.substring(0, documentation.indexOf('\n')) + '%20↑';
		const description = documentation.indexOf('<!-- DEFINE @_SHORT_DESC="') > 0
			? documentation.substring(
				documentation.indexOf('<!-- DEFINE @_SHORT_DESC="') + 26,
				documentation.indexOf('" -->')
			) : '';

		documentation = documentation.substring(0, documentation.indexOf('\n'))
			+ ' [↑](#ToC)'
			+ documentation.substring(documentation.indexOf('\n'));
		documentation = macroUtilFilePath(documentation, unixFilePath);
		documentations.push(documentation);

		methods[group] = methods[group] || [];
		methods[group].push([name, href, description]);
	}

	readMe = macroMethodList(readMe, methods);
	readMe = macroMethodsDocumentation(readMe, documentations);

	await writeTextFile(join(destPath, 'README.md'), readMe);
}
