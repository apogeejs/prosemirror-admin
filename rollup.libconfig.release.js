import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
const createResolveIdPlugin = require("./absoluteRefPlugin.js");

//This bundles the prosemirror libs from source code of the include projects.

//for absolute references
const PATH_TO_ABSOLUTE_ROOT = "..";
let resolveId = createResolveIdPlugin(__dirname,PATH_TO_ABSOLUTE_ROOT);

//This can be used to construct a es deployable module from the npm source module
export default [
	// ES module (for bundlers) build.
	{
		input: 'devimports/prosemirror-commands.es.js',
		external: [
			"/prosemirror-admin/devimports/prosemirror-gapcursor.es.js",
			"/prosemirror-admin/devimports/prosemirror-keymap.es.js",
			"/prosemirror-admin/devimports/prosemirror-model.es.js",
			"/prosemirror-admin/devimports/prosemirror-state.es.js",
			"/prosemirror-admin/devimports/prosemirror-transform.es.js",
			"/prosemirror-admin/devimports/prosemirror-view.es.js"
		],
		output: [
			{
				file: '../apogeejs-releases/releases/ext/prosemirror-commands/v1.1.4/prosemirror-commands.es.js', 
				format: 'es',
				paths: {
					"/prosemirror-admin/devimports/prosemirror-gapcursor.es.js": "/apogeejs-releases/releases/ext/prosemirror-gapcursor/v1.1.5/prosemirror-gapcursor.es.js",
					"/prosemirror-admin/devimports/prosemirror-keymap.es.js": "/apogeejs-releases/releases/ext/prosemirror-keymap/v1.1.4/prosemirror-keymap.es.js",
					"/prosemirror-admin/devimports/prosemirror-model.es.js": "/apogeejs-releases/releases/ext/prosemirror-model/v1.10.0/prosemirror-model.es.js",
					"/prosemirror-admin/devimports/prosemirror-state.es.js": "/apogeejs-releases/releases/ext/prosemirror-state/v1.3.3/prosemirror-state.es.js",
					"/prosemirror-admin/devimports/prosemirror-transform.es.js" : "/apogeejs-releases/releases/ext/prosemirror-transform/v1.2.6/prosemirror-transform.es.js",
					"/prosemirror-admin/devimports/prosemirror-view.es.js" : "/apogeejs-releases/releases/ext/prosemirror-view/v1.14.13/prosemirror-view.es.js"
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
		input: 'devimports/prosemirror-gapcursor.es.js',
		external: [
			"/prosemirror-admin/devimports/prosemirror-commands.es.js",
			"/prosemirror-admin/devimports/prosemirror-keymap.es.js",
			"/prosemirror-admin/devimports/prosemirror-model.es.js",
			"/prosemirror-admin/devimports/prosemirror-state.es.js",
			"/prosemirror-admin/devimports/prosemirror-transform.es.js",
			"/prosemirror-admin/devimports/prosemirror-view.es.js"
		],
		output: [
			{
				file: '../apogeejs-releases/releases/ext/prosemirror-gapcursor/v1.1.5/prosemirror-gapcursor.es.js', 
				format: 'es',
				paths: {
					"/prosemirror-admin/devimports/prosemirror-commands.es.js": "/apogeejs-releases/releases/ext/prosemirror-commands/v1.1.4/prosemirror-commands.es.js",
					"/prosemirror-admin/devimports/prosemirror-keymap.es.js": "/apogeejs-releases/releases/ext/prosemirror-keymap/v1.1.4/prosemirror-keymap.es.js",
					"/prosemirror-admin/devimports/prosemirror-model.es.js": "/apogeejs-releases/releases/ext/prosemirror-model/v1.10.0/prosemirror-model.es.js",
					"/prosemirror-admin/devimports/prosemirror-state.es.js": "/apogeejs-releases/releases/ext/prosemirror-state/v1.3.3/prosemirror-state.es.js",
					"/prosemirror-admin/devimports/prosemirror-transform.es.js" : "/apogeejs-releases/releases/ext/prosemirror-transform/v1.2.6/prosemirror-transform.es.js",
					"/prosemirror-admin/devimports/prosemirror-view.es.js" : "/apogeejs-releases/releases/ext/prosemirror-view/v1.14.13/prosemirror-view.es.js"
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
		input: 'devimports/prosemirror-keymap.es.js',
		external: [
			"/prosemirror-admin/devimports/prosemirror-commands.es.js",
			"/prosemirror-admin/devimports/prosemirror-gapcursor.es.js",
			"/prosemirror-admin/devimports/prosemirror-model.es.js",
			"/prosemirror-admin/devimports/prosemirror-state.es.js",
			"/prosemirror-admin/devimports/prosemirror-transform.es.js",
			"/prosemirror-admin/devimports/prosemirror-view.es.js"
		],
		output: [
			{
				file: '../apogeejs-releases/releases/ext/prosemirror-keymap/v1.1.4/prosemirror-keymap.es.js', 
				format: 'es',
				paths: {
					"/prosemirror-admin/devimports/prosemirror-commands.es.js": "/apogeejs-releases/releases/ext/prosemirror-commands/v1.1.4/prosemirror-commands.es.js",
					"/prosemirror-admin/devimports/prosemirror-gapcursor.es.js": "/apogeejs-releases/releases/ext/prosemirror-gapcursor/v1.1.5/prosemirror-gapcursor.es.js",
					"/prosemirror-admin/devimports/prosemirror-model.es.js": "/apogeejs-releases/releases/ext/prosemirror-model/v1.10.0/prosemirror-model.es.js",
					"/prosemirror-admin/devimports/prosemirror-state.es.js": "/apogeejs-releases/releases/ext/prosemirror-state/v1.3.3/prosemirror-state.es.js",
					"/prosemirror-admin/devimports/prosemirror-transform.es.js" : "/apogeejs-releases/releases/ext/prosemirror-transform/v1.2.6/prosemirror-transform.es.js",
					"/prosemirror-admin/devimports/prosemirror-view.es.js" : "/apogeejs-releases/releases/ext/prosemirror-view/v1.14.13/prosemirror-view.es.js"
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
		input: 'devimports/prosemirror-model.es.js',
		external: [
			"/prosemirror-admin/devimports/prosemirror-commands.es.js",
			"/prosemirror-admin/devimports/prosemirror-gapcursor.es.js",
			"/prosemirror-admin/devimports/prosemirror-keymap.es.js",
			"/prosemirror-admin/devimports/prosemirror-state.es.js",
			"/prosemirror-admin/devimports/prosemirror-transform.es.js",
			"/prosemirror-admin/devimports/prosemirror-view.es.js"
		],
		output: [
			{
				file: '../apogeejs-releases/releases/ext/prosemirror-model/v1.10.0/prosemirror-model.es.js',
				format: 'es',
				paths: {
					"/prosemirror-admin/devimports/prosemirror-commands.es.js": "/apogeejs-releases/releases/ext/prosemirror-commands/v1.1.4/prosemirror-commands.es.js",
					"/prosemirror-admin/devimports/prosemirror-gapcursor.es.js": "/apogeejs-releases/releases/ext/prosemirror-gapcursor/v1.1.5/prosemirror-gapcursor.es.js",
					"/prosemirror-admin/devimports/prosemirror-keymap.es.js": "/apogeejs-releases/releases/ext/prosemirror-keymap/v1.1.4/prosemirror-keymap.es.js",
					"/prosemirror-admin/devimports/prosemirror-state.es.js": "/apogeejs-releases/releases/ext/prosemirror-state/v1.3.3/prosemirror-state.es.js",
					"/prosemirror-admin/devimports/prosemirror-transform.es.js" : "/apogeejs-releases/releases/ext/prosemirror-transform/v1.2.6/prosemirror-transform.es.js",
					"/prosemirror-admin/devimports/prosemirror-view.es.js" : "/apogeejs-releases/releases/ext/prosemirror-view/v1.14.13/prosemirror-view.es.js"
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
		input: 'devimports/prosemirror-state.es.js',
		external: [
			"/prosemirror-admin/devimports/prosemirror-commands.es.js",
			"/prosemirror-admin/devimports/prosemirror-gapcursor.es.js",
			"/prosemirror-admin/devimports/prosemirror-keymap.es.js",
			"/prosemirror-admin/devimports/prosemirror-model.es.js",
			"/prosemirror-admin/devimports/prosemirror-transform.es.js",
			"/prosemirror-admin/devimports/prosemirror-view.es.js"
		],
		output: [
			{
				file: '../apogeejs-releases/releases/ext/prosemirror-state/v1.3.3/prosemirror-state.es.js',
				format: 'es',
				paths: {
					"/prosemirror-admin/devimports/prosemirror-commands.es.js": "/apogeejs-releases/releases/ext/prosemirror-commands/v1.1.4/prosemirror-commands.es.js",
					"/prosemirror-admin/devimports/prosemirror-gapcursor.es.js": "/apogeejs-releases/releases/ext/prosemirror-gapcursor/v1.1.5/prosemirror-gapcursor.es.js",
					"/prosemirror-admin/devimports/prosemirror-keymap.es.js": "/apogeejs-releases/releases/ext/prosemirror-keymap/v1.1.4/prosemirror-keymap.es.js",
					"/prosemirror-admin/devimports/prosemirror-model.es.js": "/apogeejs-releases/releases/ext/prosemirror-model/v1.10.0/prosemirror-model.es.js",
					"/prosemirror-admin/devimports/prosemirror-transform.es.js" : "/apogeejs-releases/releases/ext/prosemirror-transform/v1.2.6/prosemirror-transform.es.js",
					"/prosemirror-admin/devimports/prosemirror-view.es.js" : "/apogeejs-releases/releases/ext/prosemirror-view/v1.14.13/prosemirror-view.es.js"
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
		input: 'devimports/prosemirror-transform.es.js',
		external: [
			"/prosemirror-admin/devimports/prosemirror-commands.es.js",
			"/prosemirror-admin/devimports/prosemirror-gapcursor.es.js",
			"/prosemirror-admin/devimports/prosemirror-keymap.es.js",
			"/prosemirror-admin/devimports/prosemirror-model.es.js",
			"/prosemirror-admin/devimports/prosemirror-state.es.js",
			"/prosemirror-admin/devimports/prosemirror-view.es.js"
		],
		output: [
			{
				file: '../apogeejs-releases/releases/ext/prosemirror-transform/v1.2.6/prosemirror-transform.es.js',
				format: 'es',
				paths: {
					"/prosemirror-admin/devimports/prosemirror-commands.es.js": "/apogeejs-releases/releases/ext/prosemirror-commands/v1.1.4/prosemirror-commands.es.js",
					"/prosemirror-admin/devimports/prosemirror-gapcursor.es.js": "/apogeejs-releases/releases/ext/prosemirror-gapcursor/v1.1.5/prosemirror-gapcursor.es.js",
					"/prosemirror-admin/devimports/prosemirror-keymap.es.js": "/apogeejs-releases/releases/ext/prosemirror-keymap/v1.1.4/prosemirror-keymap.es.js",
					"/prosemirror-admin/devimports/prosemirror-model.es.js": "/apogeejs-releases/releases/ext/prosemirror-model/v1.10.0/prosemirror-model.es.js",
					"/prosemirror-admin/devimports/prosemirror-state.es.js": "/apogeejs-releases/releases/ext/prosemirror-state/v1.3.3/prosemirror-state.es.js",
					"/prosemirror-admin/devimports/prosemirror-view.es.js" : "/apogeejs-releases/releases/ext/prosemirror-view/v1.14.13/prosemirror-view.es.js"
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
		input: 'devimports/prosemirror-view.es.js',
		external: [
			"/prosemirror-admin/devimports/prosemirror-commands.es.js",
			"/prosemirror-admin/devimports/prosemirror-gapcursor.es.js",
			"/prosemirror-admin/devimports/prosemirror-keymap.es.js",
			"/prosemirror-admin/devimports/prosemirror-model.es.js",
			"/prosemirror-admin/devimports/prosemirror-state.es.js",
			"/prosemirror-admin/devimports/prosemirror-transform.es.js"
		],
		output: [
			{
				file: '../apogeejs-releases/releases/ext/prosemirror-view/v1.14.13/prosemirror-view.es.js', 
				format: 'es',
				paths: {
					"/prosemirror-admin/devimports/prosemirror-commands.es.js": "/apogeejs-releases/releases/ext/prosemirror-commands/v1.1.4/prosemirror-commands.es.js",
					"/prosemirror-admin/devimports/prosemirror-gapcursor.es.js": "/apogeejs-releases/releases/ext/prosemirror-gapcursor/v1.1.5/prosemirror-gapcursor.es.js",
					"/prosemirror-admin/devimports/prosemirror-keymap.es.js": "/apogeejs-releases/releases/ext/prosemirror-keymap/v1.1.4/prosemirror-keymap.es.js",
					"/prosemirror-admin/devimports/prosemirror-model.es.js": "/apogeejs-releases/releases/ext/prosemirror-model/v1.10.0/prosemirror-model.es.js",
					"/prosemirror-admin/devimports/prosemirror-state.es.js": "/apogeejs-releases/releases/ext/prosemirror-state/v1.3.3/prosemirror-state.es.js",
					"/prosemirror-admin/devimports/prosemirror-transform.es.js" : "/apogeejs-releases/releases/ext/prosemirror-transform/v1.2.6/prosemirror-transform.es.js"
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
