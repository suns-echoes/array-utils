import { exec } from '@suns-echoes/exec/src/exec';


export async function runTypeScriptCompiler() {
	const { code, output } = await exec('tsc');

	if (code !== 0) {
		throw output;
	}
}
