const sveltePreprocess = require("svelte-preprocess");
const postcss = require("./postcss.config");
const path = require('path');
const { mdsvex } = require('mdsvex');

const createPreprocessors = ({ sourceMap }) => [
	mdsvex({
		layout: {
			default: path.resolve(__dirname, 'src/layouts/default.svelte'),
			blog: path.resolve(__dirname, 'src/layouts/blog.svelte'),
		},
	}),
	sveltePreprocess({
		sourceMap,
		defaults: {
			style: "postcss",
		},
		postcss,
	}),
	// You could have more preprocessors, like mdsvex
];

module.exports = {
	createPreprocessors,
	// Options for `svelte-check` and the VS Code extension
	preprocess: createPreprocessors({ sourceMap: true }),
};
