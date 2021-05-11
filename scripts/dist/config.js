export const config = {
	paths: {
		dist: 'dist',
		main: {
			input: 'src/index.js',
			output: 'dist/index.js', // TODO: ???
		},
		src: {
			input: 'src',
			output: {
				cjs: 'dist/cjs',
				esm: 'dist/esm',
			},
		},
		docs: {
			input: 'docs',
			output: 'dist/docs',
		},
	},
	checkForTodos: {
		find: [
			/\/\/\s*TODO:/g,
		],
		include: [
			/^src[/\\].+(?<!\.spec)\.js$/,
			/^src[/\\].+\.spec\.js$/,
			/^src[/\\].+\.ts$/,
			/^src[/\\].+\.md$/,
		],
		exclude: [
			/\bnode_modules\b/g,
		],
	},
	checkDocumentationFiles: {
		skip: {
			'src/array-utils.js': true,
			'src/index.js': true,
		},
	},
	copyDocumentationFiles: {
		'./LICENSE': 'dist/LICENSE',
		// './README.md': 'dist/README.md',
		// './docs': 'dist/docs',
	},
	createPackageFile: {
		copyProps: {
			name: true,
			main: true,
			module: true,
			version: true,
			description: true,
			homepage: true,
			repository: true,
			author: true,
			license: true,
			dependencies: true,
		},
		// setProps: {},
	},
	rollup: {
		plugins: {
			minify: {
				comments: false,
				booleans: false,
				builtIns: true,
				consecutiveAdds: true,
				deadcode: true,
				evaluate: true,
				flipComparisons: true,
				guards: true,
				infinity: false,
				mangle: true,
				memberExpressions: true,
				mergeVars: true,
				numericLiterals: true,
				propertyLiterals: true,
				regexpConstructors: true,
				removeConsole: false,
				removeDebugger: true,
				removeUndefined: true,
				replace: true,
				simplify: true,
				simplifyComparisons: false,
				typeConstructors: true,
				undefinedToVoid: true,
			},
		},
	},
};
