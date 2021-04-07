import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
const createResolveIdPlugin = require("./absoluteRefPlugin.js");

//This bundles the prosemirror libs from source code of the include projects.

//for absolute references
const PATH_TO_ABSOLUTE_ROOT = "..";
let resolveId = createResolveIdPlugin(__dirname,PATH_TO_ABSOLUTE_ROOT);

//This can be used to construct a es deployable module from the npm source module
export default [
	// ES module (for bundlers) build.
	{
		input: 'releaseimports/prosemirror-commands.es.js',
		external: [
			"prosemirror-model",
			"prosemirror-state",
			"prosemirror-transform"
		],
		output: [
			{
				file: '../apogeejs-releases/releases/ext/prosemirror/a1.0.0/prosemirror-commands.es.js', 
				format: 'es',
				paths: {
					"prosemirror-model": "/apogeejs-releases/releases/ext/prosemirror/a1.0.0/prosemirror-model.es.js",
					"prosemirror-state": "/apogeejs-releases/releases/ext/prosemirror/a1.0.0/prosemirror-state.es.js",
					"prosemirror-transform" : "/apogeejs-releases/releases/ext/prosemirror/a1.0.0/prosemirror-transform.es.js",
				}
			}
		],
		plugins: [
			resolve(), // so Rollup can find `chart.js`
			commonjs(), // so Rollup can convert `chart.js` to an ES module
			{resolveId}
		]
	},
	{
		input: 'releaseimports/prosemirror-gapcursor.es.js',
		external: [
			"prosemirror-keymap",
			"prosemirror-model",
			"prosemirror-state",
			"prosemirror-view"
		],
		output: [
			{
				file: '../apogeejs-releases/releases/ext/prosemirror/a1.0.0/prosemirror-gapcursor.es.js', 
				format: 'es',
				paths: {
					"prosemirror-keymap": "/apogeejs-releases/releases/ext/prosemirror/a1.0.0/prosemirror-keymap.es.js",
					"prosemirror-model": "/apogeejs-releases/releases/ext/prosemirror/a1.0.0/prosemirror-model.es.js",
					"prosemirror-state": "/apogeejs-releases/releases/ext/prosemirror/a1.0.0/prosemirror-state.es.js",
					"prosemirror-view" : "/apogeejs-releases/releases/ext/prosemirror/a1.0.0/prosemirror-view.es.js"
				}
			}
		],
		plugins: [
			resolve(), // so Rollup can find `chart.js`
			commonjs(), // so Rollup can convert `chart.js` to an ES module
			{resolveId}
		]
	},
	{
		input: 'releaseimports/prosemirror-keymap.es.js',
		external: [
			"prosemirror-state"
		],
		output: [
			{
				file: '../apogeejs-releases/releases/ext/prosemirror/a1.0.0/prosemirror-keymap.es.js', 
				format: 'es',
				paths: {
					"prosemirror-state": "/apogeejs-releases/releases/ext/prosemirror/a1.0.0/prosemirror-state.es.js"
				}
			}
		],
		plugins: [
			resolve(), // so Rollup can find `chart.js`
			commonjs(), // so Rollup can convert `chart.js` to an ES module
			{resolveId}
		]
	},
	{
		input: 'releaseimports/prosemirror-model.es.js',
		output: [
			{
				file: '../apogeejs-releases/releases/ext/prosemirror/a1.0.0/prosemirror-model.es.js',
				format: 'es'
			}
		],
		plugins: [
			resolve(), // so Rollup can find `chart.js`
			commonjs(), // so Rollup can convert `chart.js` to an ES module
			{resolveId}
		]
	},
	{
		input: 'releaseimports/prosemirror-state.es.js',
		external: [
			"prosemirror-model",
			"prosemirror-transform"
		],
		output: [
			{
				file: '../apogeejs-releases/releases/ext/prosemirror/a1.0.0/prosemirror-state.es.js',
				format: 'es',
				paths: {
					"prosemirror-model": "/apogeejs-releases/releases/ext/prosemirror/a1.0.0/prosemirror-model.es.js",
					"prosemirror-transform" : "/apogeejs-releases/releases/ext/prosemirror/a1.0.0/prosemirror-transform.es.js"
				}
			}
		],
		plugins: [
			resolve(), // so Rollup can find `chart.js`
			commonjs(), // so Rollup can convert `chart.js` to an ES module
			{resolveId}
		]
	},
	{
		input: 'releaseimports/prosemirror-transform.es.js',
		external: [
			"prosemirror-model"
		],
		output: [
			{
				file: '../apogeejs-releases/releases/ext/prosemirror/a1.0.0/prosemirror-transform.es.js',
				format: 'es',
				paths: {
					"prosemirror-model": "/apogeejs-releases/releases/ext/prosemirror/a1.0.0/prosemirror-model.es.js"
				}
			}
		],
		plugins: [
			resolve(), // so Rollup can find `chart.js`
			commonjs(), // so Rollup can convert `chart.js` to an ES module
			{resolveId}
		]
	},
	{
		input: 'releaseimports/prosemirror-view.es.js',
		external: [
			"prosemirror-model",
			"prosemirror-state",
			"prosemirror-transform"
		],
		output: [
			{
				file: '../apogeejs-releases/releases/ext/prosemirror/a1.0.0/prosemirror-view.es.js', 
				format: 'es',
				paths: {
					"prosemirror-model": "/apogeejs-releases/releases/ext/prosemirror/a1.0.0/prosemirror-model.es.js",
					"prosemirror-state": "/apogeejs-releases/releases/ext/prosemirror/a1.0.0/prosemirror-state.es.js",
					"prosemirror-transform" : "/apogeejs-releases/releases/ext/prosemirror/a1.0.0/prosemirror-transform.es.js"
				}
			}
		],
		plugins: [
			resolve(), // so Rollup can find `chart.js`
			commonjs(), // so Rollup can convert `chart.js` to an ES module
			{resolveId}
		]
	}
];
