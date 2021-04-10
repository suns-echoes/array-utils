import { dist } from './dist';


async function runDist() {
	/* eslint-disable no-console */

	const only = process.argv.slice(2);
	const skipParams = only.length === 0;

	if (skipParams || only.includes('-hints')) {
		console.log('');
		console.log('PREPARING DISTRIBUTION FILES');
		console.log('');

		dist.hints();
	}

	if (skipParams || only.includes('-cleanup')) {
		console.log(' - Cleanup dist folder');
		await dist.cleanup();
	}

	if (skipParams || only.includes('-linter')) {
		console.log(' - Run linter');
		await dist.runLinter();
	}

	if (skipParams || only.includes('-tsc')) {
		console.log(' - Run TypeScript compiler');
		await dist.runTypeScriptCompiler();
	}

	if (skipParams || only.includes('-test')) {
		console.log(' - Run tests and coverage');
		await dist.runTests();
	}

	if (skipParams || only.includes('-audit')) {
		console.log(' - Run audit');
		await dist.runAudit();
	}

	if (skipParams || only.includes('-transform')) {
		console.log(' - Copy source files');
		await dist.copySourceFiles();

		console.log(' - Transform source files to CommonJS');
		await dist.transformModulesIntoCJS();

		console.log(' - Run transformation tests');
		await dist.runTransformationTests();
	}

	if (skipParams || only.includes('-cleanup')) {
		console.log(' - Cleanup dist tests');
		await dist.cleanupDistTests();
	}

	// console.log(' - Check for missing documentation files');
	// await dist.checkForMissingDocumentationFiles();

	if (skipParams || only.includes('-docs')) {
		console.log(' - Prepare documentation files');
		await dist.prepareDocumentation();

		console.log(' - Copy documentation files');
		await dist.copyDocumentationFiles();
	}

	if (skipParams || only.includes('-pack')) {
		console.log(' - Pack modules (prepare main dist file)');
		await dist.packModules();
	}

	if (skipParams || only.includes('-package')) {
		console.log(' - Create package file');
		await dist.createPackageFile();
	}

	console.log('');

	/* eslint-enable no-console */
}


runDist();
