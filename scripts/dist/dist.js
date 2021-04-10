import { hints } from './utils/hints';
import { runLinter } from './utils/run-linter';
import { runTypeScriptCompiler } from './utils/run-type-script-compiler';
import { runTests } from './utils/run-tests';
import { runAudit } from './utils/run-audit';
import { cleanup } from './utils/cleanup';
import { copySourceFiles } from './utils/copy-source-files';
import { transformModulesIntoCJS } from './utils/transform-modules-into-cjs';
import { runTransformationTests } from './utils/run-transformation-tests';
import { cleanupDistTests } from './utils/cleanup-dist-tests';
import { prepareDocumentation } from './utils/prepare-documentation';
import { copyDocumentationFiles } from './utils/copy-documentation-files';
import { packModules } from './utils/pack-modules';
import { createPackageFile } from './utils/create-package-file';


export const dist = {
	hints,
	runLinter,
	runTypeScriptCompiler,
	runTests,
	runAudit,
	cleanup,
	copySourceFiles,
	transformModulesIntoCJS,
	runTransformationTests,
	cleanupDistTests,
	prepareDocumentation,
	copyDocumentationFiles,
	packModules,
	createPackageFile,
};
