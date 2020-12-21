const sveltePreprocess = require("svelte-preprocess");
const postcss = require("./postcss.config");
const path = require('path');
const { mdsvex } = require('mdsvex');

const Prism = require('prismjs');

require('prismjs/components/prism-bash');
require('prismjs/components/prism-diff');
require('prismjs/components/prism-markdown');
require('prismjs/plugins/diff-highlight/prism-diff-highlight');
require('prismjs/plugins/line-numbers/prism-line-numbers');
require('prism-svelte');
require('prismjs/components/prism-json');

const createPreprocessors = ({ sourceMap }) => [
	mdsvex({
		layout: {
			default: path.resolve(__dirname, 'src/layouts/default.svelte'),
			blog: path.resolve(__dirname, 'src/layouts/blog.svelte'),
		},
		highlight: {
			highlighter: (code, lang) => {
				if(lang && Prism.languages[lang]) {
					const parsed = Prism.highlight(code, Prism.languages[lang], lang);
					const escaped = parsed
            			.replace(/{/g, '&#123;')
						.replace(/}/g, '&#125;');
					const langTag = 'language-' + lang;
					const codeTag = `<code class="${langTag}">${escaped}</code>`;
            		const wrapped = `<pre class="${langTag} code-pre line-numbers">${codeTag}</pre>`;
            		return wrapped;
				}else {
					const escaped = code.replace(/{/g, '&#123;').replace(/}/g, '&#125;');
          			return `<pre class="code-pre"><code class="m-4">${escaped}</code></pre>`;
				}
			}
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
