import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
const createResolveIdPlugin = require("./absoluteRefPlugin.js");

//This bundles the prosemirror libs from source code of the include projects.

//for absolute references
const PATH_TO_ABSOLUTE_ROOT = "..";
let resolveId = createResolveIdPlugin(__dirname,PATH_TO_ABSOLUTE_ROOT);

// external: [
// 	"/prosemirror-admin/devimports/prosemirror-commands.es.js",
// 	"/prosemirror-admin/devimports/prosemirror-dropcursor.es.js",
// 	"/prosemirror-admin/devimports/prosemirror-example-setup.es.js",
// 	"/prosemirror-admin/devimports/prosemirror-gapcursor.es.js",
// 	"/prosemirror-admin/devimports/prosemirror-history.es.js",
// 	"/prosemirror-admin/devimports/prosemirror-inputrules.es.js",
// 	"/prosemirror-admin/devimports/prosemirror-keymap.es.js",
// 	"/prosemirror-admin/devimports/prosemirror-menu.es.js",
// 	"/prosemirror-admin/devimports/prosemirror-model.es.js",
// 	"/prosemirror-admin/devimports/prosemirror-schema-basic.es.js",
// 	"/prosemirror-admin/devimports/prosemirror-schema-list.es.js",
// 	"/prosemirror-admin/devimports/prosemirror-state.es.js",
// 	"/prosemirror-admin/devimports/prosemirror-transform.es.js",
// 	"/prosemirror-admin/devimports/prosemirror-view.es.js"
// ],

// paths: {
// 	"/prosemirror-admin/devimports/prosemirror-commands.es.js": "/prosemirror-admin/dist/prosemirror-commands.es.js",
// 	"/prosemirror-admin/devimports/prosemirror-dropcursor.es.js": "/prosemirror-admin/dist/prosemirror-dropcursor.es.js",
// 	"/prosemirror-admin/devimports/prosemirror-example-setup.es.js": "/prosemirror-admin/dist/prosemirror-example-setup.es.js",
// 	"/prosemirror-admin/devimports/prosemirror-gapcursor.es.js": "/prosemirror-admin/dist/prosemirror-gapcursor.es.js",
// 	"/prosemirror-admin/devimports/prosemirror-history.es.js": "/prosemirror-admin/dist/prosemirror-history.es.js",
// 	"/prosemirror-admin/devimports/prosemirror-inputrules.es.js": "/prosemirror-admin/dist/prosemirror-inputrules.es.js",
// 	"/prosemirror-admin/devimports/prosemirror-keymap.es.js": "/prosemirror-admin/dist/prosemirror-keymap.es.js",
// 	"/prosemirror-admin/devimports/prosemirror-menu.es.js": "/prosemirror-admin/dist/prosemirror-menu.es.js",
// 	"/prosemirror-admin/devimports/prosemirror-model.es.js": "/prosemirror-admin/dist/prosemirror-model.es.js",
// 	"/prosemirror-admin/devimports/prosemirror-schema-basic.es.js" : "/prosemirror-admin/dist/prosemirror-schema-basic.es.js",
// 	"/prosemirror-admin/devimports/prosemirror-schema-list.es.js": "/prosemirror-admin/dist/prosemirror-schema-list.es.js",
// 	"/prosemirror-admin/devimports/prosemirror-state.es.js": "/prosemirror-admin/dist/prosemirror-state.es.js",
// 	"/prosemirror-admin/devimports/prosemirror-transform.es.js" : "/prosemirror-admin/dist/prosemirror-transform.es.js",
// 	"/prosemirror-admin/devimports/prosemirror-view.es.js" : "/prosemirror-admin/dist/prosemirror-view.es.js"
// }


//This can be used to construct a es deployable module from the npm source module
export default [
	// ES module (for bundlers) build.
	{
		input: 'devimports/prosemirror-commands.es.js',
		external: [
			"/prosemirror-admin/devimports/prosemirror-dropcursor.es.js",
			"/prosemirror-admin/devimports/prosemirror-example-setup.es.js",
			"/prosemirror-admin/devimports/prosemirror-gapcursor.es.js",
			"/prosemirror-admin/devimports/prosemirror-history.es.js",
			"/prosemirror-admin/devimports/prosemirror-inputrules.es.js",
			"/prosemirror-admin/devimports/prosemirror-keymap.es.js",
			"/prosemirror-admin/devimports/prosemirror-menu.es.js",
			"/prosemirror-admin/devimports/prosemirror-model.es.js",
			"/prosemirror-admin/devimports/prosemirror-schema-basic.es.js",
			"/prosemirror-admin/devimports/prosemirror-schema-list.es.js",
			"/prosemirror-admin/devimports/prosemirror-state.es.js",
			"/prosemirror-admin/devimports/prosemirror-transform.es.js",
			"/prosemirror-admin/devimports/prosemirror-view.es.js"
		],
		output: [
			{
				file: 'dist/prosemirror-commands.es.js', 
				format: 'es',
				paths: {
					"/prosemirror-admin/devimports/prosemirror-dropcursor.es.js": "/prosemirror-admin/dist/prosemirror-dropcursor.es.js",
					"/prosemirror-admin/devimports/prosemirror-example-setup.es.js": "/prosemirror-admin/dist/prosemirror-example-setup.es.js",
					"/prosemirror-admin/devimports/prosemirror-gapcursor.es.js": "/prosemirror-admin/dist/prosemirror-gapcursor.es.js",
					"/prosemirror-admin/devimports/prosemirror-history.es.js": "/prosemirror-admin/dist/prosemirror-history.es.js",
					"/prosemirror-admin/devimports/prosemirror-inputrules.es.js": "/prosemirror-admin/dist/prosemirror-inputrules.es.js",
					"/prosemirror-admin/devimports/prosemirror-keymap.es.js": "/prosemirror-admin/dist/prosemirror-keymap.es.js",
					"/prosemirror-admin/devimports/prosemirror-menu.es.js": "/prosemirror-admin/dist/prosemirror-menu.es.js",
					"/prosemirror-admin/devimports/prosemirror-model.es.js": "/prosemirror-admin/dist/prosemirror-model.es.js",
					"/prosemirror-admin/devimports/prosemirror-schema-basic.es.js" : "/prosemirror-admin/dist/prosemirror-schema-basic.es.js",
					"/prosemirror-admin/devimports/prosemirror-schema-list.es.js": "/prosemirror-admin/dist/prosemirror-schema-list.es.js",
					"/prosemirror-admin/devimports/prosemirror-state.es.js": "/prosemirror-admin/dist/prosemirror-state.es.js",
					"/prosemirror-admin/devimports/prosemirror-transform.es.js" : "/prosemirror-admin/dist/prosemirror-transform.es.js",
					"/prosemirror-admin/devimports/prosemirror-view.es.js" : "/prosemirror-admin/dist/prosemirror-view.es.js"
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
		input: 'devimports/prosemirror-dropcursor.es.js',
		external: [
			"/prosemirror-admin/devimports/prosemirror-commands.es.js",
			"/prosemirror-admin/devimports/prosemirror-example-setup.es.js",
			"/prosemirror-admin/devimports/prosemirror-gapcursor.es.js",
			"/prosemirror-admin/devimports/prosemirror-history.es.js",
			"/prosemirror-admin/devimports/prosemirror-inputrules.es.js",
			"/prosemirror-admin/devimports/prosemirror-keymap.es.js",
			"/prosemirror-admin/devimports/prosemirror-menu.es.js",
			"/prosemirror-admin/devimports/prosemirror-model.es.js",
			"/prosemirror-admin/devimports/prosemirror-schema-basic.es.js",
			"/prosemirror-admin/devimports/prosemirror-schema-list.es.js",
			"/prosemirror-admin/devimports/prosemirror-state.es.js",
			"/prosemirror-admin/devimports/prosemirror-transform.es.js",
			"/prosemirror-admin/devimports/prosemirror-view.es.js"
		],
		output: [
			{
				file: 'dist/prosemirror-dropcursor.es.js', 
				format: 'es',
				paths: {
					"/prosemirror-admin/devimports/prosemirror-commands.es.js": "/prosemirror-admin/dist/prosemirror-commands.es.js",
					"/prosemirror-admin/devimports/prosemirror-example-setup.es.js": "/prosemirror-admin/dist/prosemirror-example-setup.es.js",
					"/prosemirror-admin/devimports/prosemirror-gapcursor.es.js": "/prosemirror-admin/dist/prosemirror-gapcursor.es.js",
					"/prosemirror-admin/devimports/prosemirror-history.es.js": "/prosemirror-admin/dist/prosemirror-history.es.js",
					"/prosemirror-admin/devimports/prosemirror-inputrules.es.js": "/prosemirror-admin/dist/prosemirror-inputrules.es.js",
					"/prosemirror-admin/devimports/prosemirror-keymap.es.js": "/prosemirror-admin/dist/prosemirror-keymap.es.js",
					"/prosemirror-admin/devimports/prosemirror-menu.es.js": "/prosemirror-admin/dist/prosemirror-menu.es.js",
					"/prosemirror-admin/devimports/prosemirror-model.es.js": "/prosemirror-admin/dist/prosemirror-model.es.js",
					"/prosemirror-admin/devimports/prosemirror-schema-basic.es.js" : "/prosemirror-admin/dist/prosemirror-schema-basic.es.js",
					"/prosemirror-admin/devimports/prosemirror-schema-list.es.js": "/prosemirror-admin/dist/prosemirror-schema-list.es.js",
					"/prosemirror-admin/devimports/prosemirror-state.es.js": "/prosemirror-admin/dist/prosemirror-state.es.js",
					"/prosemirror-admin/devimports/prosemirror-transform.es.js" : "/prosemirror-admin/dist/prosemirror-transform.es.js",
					"/prosemirror-admin/devimports/prosemirror-view.es.js" : "/prosemirror-admin/dist/prosemirror-view.es.js"
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
		input: 'devimports/prosemirror-example-setup.es.js',
		external: [
			"/prosemirror-admin/devimports/prosemirror-commands.es.js",
			"/prosemirror-admin/devimports/prosemirror-dropcursor.es.js",
			"/prosemirror-admin/devimports/prosemirror-gapcursor.es.js",
			"/prosemirror-admin/devimports/prosemirror-history.es.js",
			"/prosemirror-admin/devimports/prosemirror-inputrules.es.js",
			"/prosemirror-admin/devimports/prosemirror-keymap.es.js",
			"/prosemirror-admin/devimports/prosemirror-menu.es.js",
			"/prosemirror-admin/devimports/prosemirror-model.es.js",
			"/prosemirror-admin/devimports/prosemirror-schema-basic.es.js",
			"/prosemirror-admin/devimports/prosemirror-schema-list.es.js",
			"/prosemirror-admin/devimports/prosemirror-state.es.js",
			"/prosemirror-admin/devimports/prosemirror-transform.es.js",
			"/prosemirror-admin/devimports/prosemirror-view.es.js"
		],
		output: [
			{
				file: 'dist/prosemirror-example-setup.es.js', 
				format: 'es',
				paths: {
					"/prosemirror-admin/devimports/prosemirror-commands.es.js": "/prosemirror-admin/dist/prosemirror-commands.es.js",
					"/prosemirror-admin/devimports/prosemirror-dropcursor.es.js": "/prosemirror-admin/dist/prosemirror-dropcursor.es.js",
					"/prosemirror-admin/devimports/prosemirror-gapcursor.es.js": "/prosemirror-admin/dist/prosemirror-gapcursor.es.js",
					"/prosemirror-admin/devimports/prosemirror-history.es.js": "/prosemirror-admin/dist/prosemirror-history.es.js",
					"/prosemirror-admin/devimports/prosemirror-inputrules.es.js": "/prosemirror-admin/dist/prosemirror-inputrules.es.js",
					"/prosemirror-admin/devimports/prosemirror-keymap.es.js": "/prosemirror-admin/dist/prosemirror-keymap.es.js",
					"/prosemirror-admin/devimports/prosemirror-menu.es.js": "/prosemirror-admin/dist/prosemirror-menu.es.js",
					"/prosemirror-admin/devimports/prosemirror-model.es.js": "/prosemirror-admin/dist/prosemirror-model.es.js",
					"/prosemirror-admin/devimports/prosemirror-schema-basic.es.js" : "/prosemirror-admin/dist/prosemirror-schema-basic.es.js",
					"/prosemirror-admin/devimports/prosemirror-schema-list.es.js": "/prosemirror-admin/dist/prosemirror-schema-list.es.js",
					"/prosemirror-admin/devimports/prosemirror-state.es.js": "/prosemirror-admin/dist/prosemirror-state.es.js",
					"/prosemirror-admin/devimports/prosemirror-transform.es.js" : "/prosemirror-admin/dist/prosemirror-transform.es.js",
					"/prosemirror-admin/devimports/prosemirror-view.es.js" : "/prosemirror-admin/dist/prosemirror-view.es.js"
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
			"/prosemirror-admin/devimports/prosemirror-dropcursor.es.js",
			"/prosemirror-admin/devimports/prosemirror-example-setup.es.js",
			"/prosemirror-admin/devimports/prosemirror-history.es.js",
			"/prosemirror-admin/devimports/prosemirror-inputrules.es.js",
			"/prosemirror-admin/devimports/prosemirror-keymap.es.js",
			"/prosemirror-admin/devimports/prosemirror-menu.es.js",
			"/prosemirror-admin/devimports/prosemirror-model.es.js",
			"/prosemirror-admin/devimports/prosemirror-schema-basic.es.js",
			"/prosemirror-admin/devimports/prosemirror-schema-list.es.js",
			"/prosemirror-admin/devimports/prosemirror-state.es.js",
			"/prosemirror-admin/devimports/prosemirror-transform.es.js",
			"/prosemirror-admin/devimports/prosemirror-view.es.js"
		],
		output: [
			{
				file: 'dist/prosemirror-gapcursor.es.js', 
				format: 'es',
				paths: {
					"/prosemirror-admin/devimports/prosemirror-commands.es.js": "/prosemirror-admin/dist/prosemirror-commands.es.js",
					"/prosemirror-admin/devimports/prosemirror-dropcursor.es.js": "/prosemirror-admin/dist/prosemirror-dropcursor.es.js",
					"/prosemirror-admin/devimports/prosemirror-example-setup.es.js": "/prosemirror-admin/dist/prosemirror-example-setup.es.js",
					"/prosemirror-admin/devimports/prosemirror-history.es.js": "/prosemirror-admin/dist/prosemirror-history.es.js",
					"/prosemirror-admin/devimports/prosemirror-inputrules.es.js": "/prosemirror-admin/dist/prosemirror-inputrules.es.js",
					"/prosemirror-admin/devimports/prosemirror-keymap.es.js": "/prosemirror-admin/dist/prosemirror-keymap.es.js",
					"/prosemirror-admin/devimports/prosemirror-menu.es.js": "/prosemirror-admin/dist/prosemirror-menu.es.js",
					"/prosemirror-admin/devimports/prosemirror-model.es.js": "/prosemirror-admin/dist/prosemirror-model.es.js",
					"/prosemirror-admin/devimports/prosemirror-schema-basic.es.js" : "/prosemirror-admin/dist/prosemirror-schema-basic.es.js",
					"/prosemirror-admin/devimports/prosemirror-schema-list.es.js": "/prosemirror-admin/dist/prosemirror-schema-list.es.js",
					"/prosemirror-admin/devimports/prosemirror-state.es.js": "/prosemirror-admin/dist/prosemirror-state.es.js",
					"/prosemirror-admin/devimports/prosemirror-transform.es.js" : "/prosemirror-admin/dist/prosemirror-transform.es.js",
					"/prosemirror-admin/devimports/prosemirror-view.es.js" : "/prosemirror-admin/dist/prosemirror-view.es.js"
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
		input: 'devimports/prosemirror-history.es.js',
		external: [
			"/prosemirror-admin/devimports/prosemirror-commands.es.js",
			"/prosemirror-admin/devimports/prosemirror-dropcursor.es.js",
			"/prosemirror-admin/devimports/prosemirror-example-setup.es.js",
			"/prosemirror-admin/devimports/prosemirror-gapcursor.es.js",
			"/prosemirror-admin/devimports/prosemirror-inputrules.es.js",
			"/prosemirror-admin/devimports/prosemirror-keymap.es.js",
			"/prosemirror-admin/devimports/prosemirror-menu.es.js",
			"/prosemirror-admin/devimports/prosemirror-model.es.js",
			"/prosemirror-admin/devimports/prosemirror-schema-basic.es.js",
			"/prosemirror-admin/devimports/prosemirror-schema-list.es.js",
			"/prosemirror-admin/devimports/prosemirror-state.es.js",
			"/prosemirror-admin/devimports/prosemirror-transform.es.js",
			"/prosemirror-admin/devimports/prosemirror-view.es.js"
		],
		output: [
			{
				file: 'dist/prosemirror-history.es.js', 
				format: 'es',
				paths: {
					"/prosemirror-admin/devimports/prosemirror-commands.es.js": "/prosemirror-admin/dist/prosemirror-commands.es.js",
					"/prosemirror-admin/devimports/prosemirror-dropcursor.es.js": "/prosemirror-admin/dist/prosemirror-dropcursor.es.js",
					"/prosemirror-admin/devimports/prosemirror-example-setup.es.js": "/prosemirror-admin/dist/prosemirror-example-setup.es.js",
					"/prosemirror-admin/devimports/prosemirror-gapcursor.es.js": "/prosemirror-admin/dist/prosemirror-gapcursor.es.js",
					"/prosemirror-admin/devimports/prosemirror-inputrules.es.js": "/prosemirror-admin/dist/prosemirror-inputrules.es.js",
					"/prosemirror-admin/devimports/prosemirror-keymap.es.js": "/prosemirror-admin/dist/prosemirror-keymap.es.js",
					"/prosemirror-admin/devimports/prosemirror-menu.es.js": "/prosemirror-admin/dist/prosemirror-menu.es.js",
					"/prosemirror-admin/devimports/prosemirror-model.es.js": "/prosemirror-admin/dist/prosemirror-model.es.js",
					"/prosemirror-admin/devimports/prosemirror-schema-basic.es.js" : "/prosemirror-admin/dist/prosemirror-schema-basic.es.js",
					"/prosemirror-admin/devimports/prosemirror-schema-list.es.js": "/prosemirror-admin/dist/prosemirror-schema-list.es.js",
					"/prosemirror-admin/devimports/prosemirror-state.es.js": "/prosemirror-admin/dist/prosemirror-state.es.js",
					"/prosemirror-admin/devimports/prosemirror-transform.es.js" : "/prosemirror-admin/dist/prosemirror-transform.es.js",
					"/prosemirror-admin/devimports/prosemirror-view.es.js" : "/prosemirror-admin/dist/prosemirror-view.es.js"
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
		input: 'devimports/prosemirror-inputrules.es.js',
		external: [
			"/prosemirror-admin/devimports/prosemirror-commands.es.js",
			"/prosemirror-admin/devimports/prosemirror-dropcursor.es.js",
			"/prosemirror-admin/devimports/prosemirror-example-setup.es.js",
			"/prosemirror-admin/devimports/prosemirror-gapcursor.es.js",
			"/prosemirror-admin/devimports/prosemirror-history.es.js",
			"/prosemirror-admin/devimports/prosemirror-keymap.es.js",
			"/prosemirror-admin/devimports/prosemirror-menu.es.js",
			"/prosemirror-admin/devimports/prosemirror-model.es.js",
			"/prosemirror-admin/devimports/prosemirror-schema-basic.es.js",
			"/prosemirror-admin/devimports/prosemirror-schema-list.es.js",
			"/prosemirror-admin/devimports/prosemirror-state.es.js",
			"/prosemirror-admin/devimports/prosemirror-transform.es.js",
			"/prosemirror-admin/devimports/prosemirror-view.es.js"
		],
		output: [
			{
				file: 'dist/prosemirror-inputrules.es.js', 
				format: 'es',
				paths: {
					"/prosemirror-admin/devimports/prosemirror-commands.es.js": "/prosemirror-admin/dist/prosemirror-commands.es.js",
					"/prosemirror-admin/devimports/prosemirror-dropcursor.es.js": "/prosemirror-admin/dist/prosemirror-dropcursor.es.js",
					"/prosemirror-admin/devimports/prosemirror-example-setup.es.js": "/prosemirror-admin/dist/prosemirror-example-setup.es.js",
					"/prosemirror-admin/devimports/prosemirror-gapcursor.es.js": "/prosemirror-admin/dist/prosemirror-gapcursor.es.js",
					"/prosemirror-admin/devimports/prosemirror-history.es.js": "/prosemirror-admin/dist/prosemirror-history.es.js",
					"/prosemirror-admin/devimports/prosemirror-keymap.es.js": "/prosemirror-admin/dist/prosemirror-keymap.es.js",
					"/prosemirror-admin/devimports/prosemirror-menu.es.js": "/prosemirror-admin/dist/prosemirror-menu.es.js",
					"/prosemirror-admin/devimports/prosemirror-model.es.js": "/prosemirror-admin/dist/prosemirror-model.es.js",
					"/prosemirror-admin/devimports/prosemirror-schema-basic.es.js" : "/prosemirror-admin/dist/prosemirror-schema-basic.es.js",
					"/prosemirror-admin/devimports/prosemirror-schema-list.es.js": "/prosemirror-admin/dist/prosemirror-schema-list.es.js",
					"/prosemirror-admin/devimports/prosemirror-state.es.js": "/prosemirror-admin/dist/prosemirror-state.es.js",
					"/prosemirror-admin/devimports/prosemirror-transform.es.js" : "/prosemirror-admin/dist/prosemirror-transform.es.js",
					"/prosemirror-admin/devimports/prosemirror-view.es.js" : "/prosemirror-admin/dist/prosemirror-view.es.js"
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
			"/prosemirror-admin/devimports/prosemirror-dropcursor.es.js",
			"/prosemirror-admin/devimports/prosemirror-example-setup.es.js",
			"/prosemirror-admin/devimports/prosemirror-gapcursor.es.js",
			"/prosemirror-admin/devimports/prosemirror-history.es.js",
			"/prosemirror-admin/devimports/prosemirror-inputrules.es.js",
			"/prosemirror-admin/devimports/prosemirror-menu.es.js",
			"/prosemirror-admin/devimports/prosemirror-model.es.js",
			"/prosemirror-admin/devimports/prosemirror-schema-basic.es.js",
			"/prosemirror-admin/devimports/prosemirror-schema-list.es.js",
			"/prosemirror-admin/devimports/prosemirror-state.es.js",
			"/prosemirror-admin/devimports/prosemirror-transform.es.js",
			"/prosemirror-admin/devimports/prosemirror-view.es.js"
		],
		output: [
			{
				file: 'dist/prosemirror-keymap.es.js', 
				format: 'es',
				paths: {
					"/prosemirror-admin/devimports/prosemirror-commands.es.js": "/prosemirror-admin/dist/prosemirror-commands.es.js",
					"/prosemirror-admin/devimports/prosemirror-dropcursor.es.js": "/prosemirror-admin/dist/prosemirror-dropcursor.es.js",
					"/prosemirror-admin/devimports/prosemirror-example-setup.es.js": "/prosemirror-admin/dist/prosemirror-example-setup.es.js",
					"/prosemirror-admin/devimports/prosemirror-gapcursor.es.js": "/prosemirror-admin/dist/prosemirror-gapcursor.es.js",
					"/prosemirror-admin/devimports/prosemirror-history.es.js": "/prosemirror-admin/dist/prosemirror-history.es.js",
					"/prosemirror-admin/devimports/prosemirror-inputrules.es.js": "/prosemirror-admin/dist/prosemirror-inputrules.es.js",
					"/prosemirror-admin/devimports/prosemirror-menu.es.js": "/prosemirror-admin/dist/prosemirror-menu.es.js",
					"/prosemirror-admin/devimports/prosemirror-model.es.js": "/prosemirror-admin/dist/prosemirror-model.es.js",
					"/prosemirror-admin/devimports/prosemirror-schema-basic.es.js" : "/prosemirror-admin/dist/prosemirror-schema-basic.es.js",
					"/prosemirror-admin/devimports/prosemirror-schema-list.es.js": "/prosemirror-admin/dist/prosemirror-schema-list.es.js",
					"/prosemirror-admin/devimports/prosemirror-state.es.js": "/prosemirror-admin/dist/prosemirror-state.es.js",
					"/prosemirror-admin/devimports/prosemirror-transform.es.js" : "/prosemirror-admin/dist/prosemirror-transform.es.js",
					"/prosemirror-admin/devimports/prosemirror-view.es.js" : "/prosemirror-admin/dist/prosemirror-view.es.js"
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
		input: 'devimports/prosemirror-menu.es.js',
		external: [
			"/prosemirror-admin/devimports/prosemirror-commands.es.js",
			"/prosemirror-admin/devimports/prosemirror-dropcursor.es.js",
			"/prosemirror-admin/devimports/prosemirror-example-setup.es.js",
			"/prosemirror-admin/devimports/prosemirror-gapcursor.es.js",
			"/prosemirror-admin/devimports/prosemirror-history.es.js",
			"/prosemirror-admin/devimports/prosemirror-inputrules.es.js",
			"/prosemirror-admin/devimports/prosemirror-keymap.es.js",
			"/prosemirror-admin/devimports/prosemirror-model.es.js",
			"/prosemirror-admin/devimports/prosemirror-schema-basic.es.js",
			"/prosemirror-admin/devimports/prosemirror-schema-list.es.js",
			"/prosemirror-admin/devimports/prosemirror-state.es.js",
			"/prosemirror-admin/devimports/prosemirror-transform.es.js",
			"/prosemirror-admin/devimports/prosemirror-view.es.js"
		],
		output: [
			{
				file: 'dist/prosemirror-menu.es.js', 
				format: 'es',
				paths: {
					"/prosemirror-admin/devimports/prosemirror-commands.es.js": "/prosemirror-admin/dist/prosemirror-commands.es.js",
					"/prosemirror-admin/devimports/prosemirror-dropcursor.es.js": "/prosemirror-admin/dist/prosemirror-dropcursor.es.js",
					"/prosemirror-admin/devimports/prosemirror-example-setup.es.js": "/prosemirror-admin/dist/prosemirror-example-setup.es.js",
					"/prosemirror-admin/devimports/prosemirror-gapcursor.es.js": "/prosemirror-admin/dist/prosemirror-gapcursor.es.js",
					"/prosemirror-admin/devimports/prosemirror-history.es.js": "/prosemirror-admin/dist/prosemirror-history.es.js",
					"/prosemirror-admin/devimports/prosemirror-inputrules.es.js": "/prosemirror-admin/dist/prosemirror-inputrules.es.js",
					"/prosemirror-admin/devimports/prosemirror-menu.es.js": "/prosemirror-admin/dist/prosemirror-menu.es.js",
					"/prosemirror-admin/devimports/prosemirror-model.es.js": "/prosemirror-admin/dist/prosemirror-model.es.js",
					"/prosemirror-admin/devimports/prosemirror-schema-basic.es.js" : "/prosemirror-admin/dist/prosemirror-schema-basic.es.js",
					"/prosemirror-admin/devimports/prosemirror-schema-list.es.js": "/prosemirror-admin/dist/prosemirror-schema-list.es.js",
					"/prosemirror-admin/devimports/prosemirror-state.es.js": "/prosemirror-admin/dist/prosemirror-state.es.js",
					"/prosemirror-admin/devimports/prosemirror-transform.es.js" : "/prosemirror-admin/dist/prosemirror-transform.es.js",
					"/prosemirror-admin/devimports/prosemirror-view.es.js" : "/prosemirror-admin/dist/prosemirror-view.es.js"
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
			"/prosemirror-admin/devimports/prosemirror-dropcursor.es.js",
			"/prosemirror-admin/devimports/prosemirror-example-setup.es.js",
			"/prosemirror-admin/devimports/prosemirror-gapcursor.es.js",
			"/prosemirror-admin/devimports/prosemirror-history.es.js",
			"/prosemirror-admin/devimports/prosemirror-inputrules.es.js",
			"/prosemirror-admin/devimports/prosemirror-keymap.es.js",
			"/prosemirror-admin/devimports/prosemirror-menu.es.js",
			"/prosemirror-admin/devimports/prosemirror-schema-basic.es.js",
			"/prosemirror-admin/devimports/prosemirror-schema-list.es.js",
			"/prosemirror-admin/devimports/prosemirror-state.es.js",
			"/prosemirror-admin/devimports/prosemirror-transform.es.js",
			"/prosemirror-admin/devimports/prosemirror-view.es.js"
		],
		output: [
			{
				file: 'dist/prosemirror-model.es.js', 
				format: 'es',
				paths: {
					"/prosemirror-admin/devimports/prosemirror-commands.es.js": "/prosemirror-admin/dist/prosemirror-commands.es.js",
					"/prosemirror-admin/devimports/prosemirror-dropcursor.es.js": "/prosemirror-admin/dist/prosemirror-dropcursor.es.js",
					"/prosemirror-admin/devimports/prosemirror-example-setup.es.js": "/prosemirror-admin/dist/prosemirror-example-setup.es.js",
					"/prosemirror-admin/devimports/prosemirror-gapcursor.es.js": "/prosemirror-admin/dist/prosemirror-gapcursor.es.js",
					"/prosemirror-admin/devimports/prosemirror-history.es.js": "/prosemirror-admin/dist/prosemirror-history.es.js",
					"/prosemirror-admin/devimports/prosemirror-inputrules.es.js": "/prosemirror-admin/dist/prosemirror-inputrules.es.js",
					"/prosemirror-admin/devimports/prosemirror-keymap.es.js": "/prosemirror-admin/dist/prosemirror-keymap.es.js",
					"/prosemirror-admin/devimports/prosemirror-menu.es.js": "/prosemirror-admin/dist/prosemirror-menu.es.js",
					"/prosemirror-admin/devimports/prosemirror-schema-basic.es.js" : "/prosemirror-admin/dist/prosemirror-schema-basic.es.js",
					"/prosemirror-admin/devimports/prosemirror-schema-list.es.js": "/prosemirror-admin/dist/prosemirror-schema-list.es.js",
					"/prosemirror-admin/devimports/prosemirror-state.es.js": "/prosemirror-admin/dist/prosemirror-state.es.js",
					"/prosemirror-admin/devimports/prosemirror-transform.es.js" : "/prosemirror-admin/dist/prosemirror-transform.es.js",
					"/prosemirror-admin/devimports/prosemirror-view.es.js" : "/prosemirror-admin/dist/prosemirror-view.es.js"
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
		input: 'devimports/prosemirror-schema-basic.es.js',
		external: [
			"/prosemirror-admin/devimports/prosemirror-commands.es.js",
			"/prosemirror-admin/devimports/prosemirror-dropcursor.es.js",
			"/prosemirror-admin/devimports/prosemirror-example-setup.es.js",
			"/prosemirror-admin/devimports/prosemirror-gapcursor.es.js",
			"/prosemirror-admin/devimports/prosemirror-history.es.js",
			"/prosemirror-admin/devimports/prosemirror-inputrules.es.js",
			"/prosemirror-admin/devimports/prosemirror-keymap.es.js",
			"/prosemirror-admin/devimports/prosemirror-menu.es.js",
			"/prosemirror-admin/devimports/prosemirror-model.es.js",
			"/prosemirror-admin/devimports/prosemirror-schema-list.es.js",
			"/prosemirror-admin/devimports/prosemirror-state.es.js",
			"/prosemirror-admin/devimports/prosemirror-transform.es.js",
			"/prosemirror-admin/devimports/prosemirror-view.es.js"
		],
		output: [
			{
				file: 'dist/prosemirror-schema-basic.es.js', 
				format: 'es',
				paths: {
					"/prosemirror-admin/devimports/prosemirror-commands.es.js": "/prosemirror-admin/dist/prosemirror-commands.es.js",
					"/prosemirror-admin/devimports/prosemirror-dropcursor.es.js": "/prosemirror-admin/dist/prosemirror-dropcursor.es.js",
					"/prosemirror-admin/devimports/prosemirror-example-setup.es.js": "/prosemirror-admin/dist/prosemirror-example-setup.es.js",
					"/prosemirror-admin/devimports/prosemirror-gapcursor.es.js": "/prosemirror-admin/dist/prosemirror-gapcursor.es.js",
					"/prosemirror-admin/devimports/prosemirror-history.es.js": "/prosemirror-admin/dist/prosemirror-history.es.js",
					"/prosemirror-admin/devimports/prosemirror-inputrules.es.js": "/prosemirror-admin/dist/prosemirror-inputrules.es.js",
					"/prosemirror-admin/devimports/prosemirror-keymap.es.js": "/prosemirror-admin/dist/prosemirror-keymap.es.js",
					"/prosemirror-admin/devimports/prosemirror-menu.es.js": "/prosemirror-admin/dist/prosemirror-menu.es.js",
					"/prosemirror-admin/devimports/prosemirror-model.es.js": "/prosemirror-admin/dist/prosemirror-model.es.js",
					"/prosemirror-admin/devimports/prosemirror-schema-list.es.js": "/prosemirror-admin/dist/prosemirror-schema-list.es.js",
					"/prosemirror-admin/devimports/prosemirror-state.es.js": "/prosemirror-admin/dist/prosemirror-state.es.js",
					"/prosemirror-admin/devimports/prosemirror-transform.es.js" : "/prosemirror-admin/dist/prosemirror-transform.es.js",
					"/prosemirror-admin/devimports/prosemirror-view.es.js" : "/prosemirror-admin/dist/prosemirror-view.es.js"
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
		input: 'devimports/prosemirror-schema-list.es.js',
		external: [
			"/prosemirror-admin/devimports/prosemirror-commands.es.js",
			"/prosemirror-admin/devimports/prosemirror-dropcursor.es.js",
			"/prosemirror-admin/devimports/prosemirror-example-setup.es.js",
			"/prosemirror-admin/devimports/prosemirror-gapcursor.es.js",
			"/prosemirror-admin/devimports/prosemirror-history.es.js",
			"/prosemirror-admin/devimports/prosemirror-inputrules.es.js",
			"/prosemirror-admin/devimports/prosemirror-keymap.es.js",
			"/prosemirror-admin/devimports/prosemirror-menu.es.js",
			"/prosemirror-admin/devimports/prosemirror-model.es.js",
			"/prosemirror-admin/devimports/prosemirror-schema-basic.es.js",
			"/prosemirror-admin/devimports/prosemirror-state.es.js",
			"/prosemirror-admin/devimports/prosemirror-transform.es.js",
			"/prosemirror-admin/devimports/prosemirror-view.es.js"
		],
		output: [
			{
				file: 'dist/prosemirror-schema-list.es.js', 
				format: 'es',
				paths: {
					"/prosemirror-admin/devimports/prosemirror-commands.es.js": "/prosemirror-admin/dist/prosemirror-commands.es.js",
					"/prosemirror-admin/devimports/prosemirror-dropcursor.es.js": "/prosemirror-admin/dist/prosemirror-dropcursor.es.js",
					"/prosemirror-admin/devimports/prosemirror-example-setup.es.js": "/prosemirror-admin/dist/prosemirror-example-setup.es.js",
					"/prosemirror-admin/devimports/prosemirror-gapcursor.es.js": "/prosemirror-admin/dist/prosemirror-gapcursor.es.js",
					"/prosemirror-admin/devimports/prosemirror-history.es.js": "/prosemirror-admin/dist/prosemirror-history.es.js",
					"/prosemirror-admin/devimports/prosemirror-inputrules.es.js": "/prosemirror-admin/dist/prosemirror-inputrules.es.js",
					"/prosemirror-admin/devimports/prosemirror-keymap.es.js": "/prosemirror-admin/dist/prosemirror-keymap.es.js",
					"/prosemirror-admin/devimports/prosemirror-menu.es.js": "/prosemirror-admin/dist/prosemirror-menu.es.js",
					"/prosemirror-admin/devimports/prosemirror-model.es.js": "/prosemirror-admin/dist/prosemirror-model.es.js",
					"/prosemirror-admin/devimports/prosemirror-schema-basic.es.js" : "/prosemirror-admin/dist/prosemirror-schema-basic.es.js",
					"/prosemirror-admin/devimports/prosemirror-state.es.js": "/prosemirror-admin/dist/prosemirror-state.es.js",
					"/prosemirror-admin/devimports/prosemirror-transform.es.js" : "/prosemirror-admin/dist/prosemirror-transform.es.js",
					"/prosemirror-admin/devimports/prosemirror-view.es.js" : "/prosemirror-admin/dist/prosemirror-view.es.js"
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
			"/prosemirror-admin/devimports/prosemirror-dropcursor.es.js",
			"/prosemirror-admin/devimports/prosemirror-example-setup.es.js",
			"/prosemirror-admin/devimports/prosemirror-gapcursor.es.js",
			"/prosemirror-admin/devimports/prosemirror-history.es.js",
			"/prosemirror-admin/devimports/prosemirror-inputrules.es.js",
			"/prosemirror-admin/devimports/prosemirror-keymap.es.js",
			"/prosemirror-admin/devimports/prosemirror-menu.es.js",
			"/prosemirror-admin/devimports/prosemirror-model.es.js",
			"/prosemirror-admin/devimports/prosemirror-schema-basic.es.js",
			"/prosemirror-admin/devimports/prosemirror-schema-list.es.js",
			"/prosemirror-admin/devimports/prosemirror-transform.es.js",
			"/prosemirror-admin/devimports/prosemirror-view.es.js"
		],
		output: [
			{
				file: 'dist/prosemirror-state.es.js', 
				format: 'es',
				paths: {
					"/prosemirror-admin/devimports/prosemirror-commands.es.js": "/prosemirror-admin/dist/prosemirror-commands.es.js",
					"/prosemirror-admin/devimports/prosemirror-dropcursor.es.js": "/prosemirror-admin/dist/prosemirror-dropcursor.es.js",
					"/prosemirror-admin/devimports/prosemirror-example-setup.es.js": "/prosemirror-admin/dist/prosemirror-example-setup.es.js",
					"/prosemirror-admin/devimports/prosemirror-gapcursor.es.js": "/prosemirror-admin/dist/prosemirror-gapcursor.es.js",
					"/prosemirror-admin/devimports/prosemirror-history.es.js": "/prosemirror-admin/dist/prosemirror-history.es.js",
					"/prosemirror-admin/devimports/prosemirror-inputrules.es.js": "/prosemirror-admin/dist/prosemirror-inputrules.es.js",
					"/prosemirror-admin/devimports/prosemirror-keymap.es.js": "/prosemirror-admin/dist/prosemirror-keymap.es.js",
					"/prosemirror-admin/devimports/prosemirror-menu.es.js": "/prosemirror-admin/dist/prosemirror-menu.es.js",
					"/prosemirror-admin/devimports/prosemirror-model.es.js": "/prosemirror-admin/dist/prosemirror-model.es.js",
					"/prosemirror-admin/devimports/prosemirror-schema-basic.es.js" : "/prosemirror-admin/dist/prosemirror-schema-basic.es.js",
					"/prosemirror-admin/devimports/prosemirror-schema-list.es.js": "/prosemirror-admin/dist/prosemirror-schema-list.es.js",
					"/prosemirror-admin/devimports/prosemirror-transform.es.js" : "/prosemirror-admin/dist/prosemirror-transform.es.js",
					"/prosemirror-admin/devimports/prosemirror-view.es.js" : "/prosemirror-admin/dist/prosemirror-view.es.js"
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
			"/prosemirror-admin/devimports/prosemirror-dropcursor.es.js",
			"/prosemirror-admin/devimports/prosemirror-example-setup.es.js",
			"/prosemirror-admin/devimports/prosemirror-gapcursor.es.js",
			"/prosemirror-admin/devimports/prosemirror-history.es.js",
			"/prosemirror-admin/devimports/prosemirror-inputrules.es.js",
			"/prosemirror-admin/devimports/prosemirror-keymap.es.js",
			"/prosemirror-admin/devimports/prosemirror-menu.es.js",
			"/prosemirror-admin/devimports/prosemirror-model.es.js",
			"/prosemirror-admin/devimports/prosemirror-schema-basic.es.js",
			"/prosemirror-admin/devimports/prosemirror-schema-list.es.js",
			"/prosemirror-admin/devimports/prosemirror-state.es.js",
			"/prosemirror-admin/devimports/prosemirror-view.es.js"
		],
		output: [
			{
				file: 'dist/prosemirror-transform.es.js', 
				format: 'es',
				paths: {
					"/prosemirror-admin/devimports/prosemirror-commands.es.js": "/prosemirror-admin/dist/prosemirror-commands.es.js",
					"/prosemirror-admin/devimports/prosemirror-dropcursor.es.js": "/prosemirror-admin/dist/prosemirror-dropcursor.es.js",
					"/prosemirror-admin/devimports/prosemirror-example-setup.es.js": "/prosemirror-admin/dist/prosemirror-example-setup.es.js",
					"/prosemirror-admin/devimports/prosemirror-gapcursor.es.js": "/prosemirror-admin/dist/prosemirror-gapcursor.es.js",
					"/prosemirror-admin/devimports/prosemirror-history.es.js": "/prosemirror-admin/dist/prosemirror-history.es.js",
					"/prosemirror-admin/devimports/prosemirror-inputrules.es.js": "/prosemirror-admin/dist/prosemirror-inputrules.es.js",
					"/prosemirror-admin/devimports/prosemirror-keymap.es.js": "/prosemirror-admin/dist/prosemirror-keymap.es.js",
					"/prosemirror-admin/devimports/prosemirror-menu.es.js": "/prosemirror-admin/dist/prosemirror-menu.es.js",
					"/prosemirror-admin/devimports/prosemirror-model.es.js": "/prosemirror-admin/dist/prosemirror-model.es.js",
					"/prosemirror-admin/devimports/prosemirror-schema-basic.es.js" : "/prosemirror-admin/dist/prosemirror-schema-basic.es.js",
					"/prosemirror-admin/devimports/prosemirror-schema-list.es.js": "/prosemirror-admin/dist/prosemirror-schema-list.es.js",
					"/prosemirror-admin/devimports/prosemirror-state.es.js": "/prosemirror-admin/dist/prosemirror-state.es.js",
					"/prosemirror-admin/devimports/prosemirror-view.es.js" : "/prosemirror-admin/dist/prosemirror-view.es.js"
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
			"/prosemirror-admin/devimports/prosemirror-dropcursor.es.js",
			"/prosemirror-admin/devimports/prosemirror-example-setup.es.js",
			"/prosemirror-admin/devimports/prosemirror-gapcursor.es.js",
			"/prosemirror-admin/devimports/prosemirror-history.es.js",
			"/prosemirror-admin/devimports/prosemirror-inputrules.es.js",
			"/prosemirror-admin/devimports/prosemirror-keymap.es.js",
			"/prosemirror-admin/devimports/prosemirror-menu.es.js",
			"/prosemirror-admin/devimports/prosemirror-model.es.js",
			"/prosemirror-admin/devimports/prosemirror-schema-basic.es.js",
			"/prosemirror-admin/devimports/prosemirror-schema-list.es.js",
			"/prosemirror-admin/devimports/prosemirror-state.es.js",
			"/prosemirror-admin/devimports/prosemirror-transform.es.js"
		],
		output: [
			{
				file: 'dist/prosemirror-view.es.js', 
				format: 'es',
				paths: {
					"/prosemirror-admin/devimports/prosemirror-commands.es.js": "/prosemirror-admin/dist/prosemirror-commands.es.js",
					"/prosemirror-admin/devimports/prosemirror-dropcursor.es.js": "/prosemirror-admin/dist/prosemirror-dropcursor.es.js",
					"/prosemirror-admin/devimports/prosemirror-example-setup.es.js": "/prosemirror-admin/dist/prosemirror-example-setup.es.js",
					"/prosemirror-admin/devimports/prosemirror-gapcursor.es.js": "/prosemirror-admin/dist/prosemirror-gapcursor.es.js",
					"/prosemirror-admin/devimports/prosemirror-history.es.js": "/prosemirror-admin/dist/prosemirror-history.es.js",
					"/prosemirror-admin/devimports/prosemirror-inputrules.es.js": "/prosemirror-admin/dist/prosemirror-inputrules.es.js",
					"/prosemirror-admin/devimports/prosemirror-keymap.es.js": "/prosemirror-admin/dist/prosemirror-keymap.es.js",
					"/prosemirror-admin/devimports/prosemirror-menu.es.js": "/prosemirror-admin/dist/prosemirror-menu.es.js",
					"/prosemirror-admin/devimports/prosemirror-model.es.js": "/prosemirror-admin/dist/prosemirror-model.es.js",
					"/prosemirror-admin/devimports/prosemirror-schema-basic.es.js" : "/prosemirror-admin/dist/prosemirror-schema-basic.es.js",
					"/prosemirror-admin/devimports/prosemirror-schema-list.es.js": "/prosemirror-admin/dist/prosemirror-schema-list.es.js",
					"/prosemirror-admin/devimports/prosemirror-state.es.js": "/prosemirror-admin/dist/prosemirror-state.es.js",
					"/prosemirror-admin/devimports/prosemirror-transform.es.js" : "/prosemirror-admin/dist/prosemirror-transform.es.js"
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
