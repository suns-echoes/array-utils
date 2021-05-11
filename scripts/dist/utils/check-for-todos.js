import { listFiles } from '@suns-echoes/file-system-utils/src/utils/list-files';
import { readTextFile } from '@suns-echoes/file-system-utils/src/utils/read-text-file';
import { config } from '../config';


function getLineAndColumnFromIndex(content, index) {
	const _index = Math.min(content.length, index);
	let line = 0;
	let lastNewLineIndex = 0;
	let nextNewLineIndex = 0;

	do {
		line++;
		lastNewLineIndex = nextNewLineIndex;
		nextNewLineIndex = content.indexOf('\n', lastNewLineIndex + 1);
	} while (nextNewLineIndex < _index && nextNewLineIndex > -1);

	return {
		line,
		column: _index - lastNewLineIndex + 1,
	};
}


export async function checkForTodos() {
	const { find, include, exclude } = config.checkForTodos;
	const todos = [];
	let files = [];
	let index = 1;

	for (const path of include) {
		files = files.concat(await listFiles('.', { filter: path }));
	}

	for (const path of exclude) {
		files = files.filter((file) => !path.test(file));
	}

	for (const file of files) {
		const fileContent = await readTextFile(file);

		for (const test of find) {
			if (test instanceof RegExp) {
				const matches = fileContent.matchAll(test);

				for (const match of matches) {
					const { line, column } = getLineAndColumnFromIndex(fileContent, match.index);

					todos.push(` ${index++}. ${file}:${line}:${column}`);
				}
			}
			else {
				throw new TypeError('checkForTodos.find[#] is not a RegExp');
			}
		}
	}

	if (todos.length) {
		// eslint-disable-next-line no-console
		console.log(`\nConsider checking those TODO's before publishing:\n${todos.join('\n')}\n`);
	}
}
