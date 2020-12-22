import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import config from "sapper/config/rollup";
import { mdsvex } from "mdsvex";
import path from 'path';
import pkg from "./package.json";
import Prism from 'prismjs';
import replace from "@rollup/plugin-replace";
import resolve from "@rollup/plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import { terser } from "rollup-plugin-terser";
import url from '@rollup/plugin-url';


import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-diff';
import 'prismjs/components/prism-markdown';
import 'prismjs/plugins/diff-highlight/prism-diff-highlight';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prism-svelte';
import 'prismjs/components/prism-json';



const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) =>
	(warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message)) ||
	(warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) ||
	(warning.code === 'EVAL') ||
	onwarn(warning);

export default {
	client: {
		input: config.client.input(),
		output: config.client.output(),
		plugins: [
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			svelte({
				extensions: ['.svelte', '.svx'],
				preprocess: mdsvex({
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
				compilerOptions: {
					dev,
					hydratable: true
				}
			}),
			url({
				sourceDir: path.resolve(__dirname, 'src/node_modules/images'),
				publicPath: '/client/'
			}),
			resolve({
				browser: true,
				dedupe: ['svelte']
			}),
			commonjs(),

			legacy && babel({
				extensions: ['.js', '.mjs', '.html', '.svelte'],
				babelHelpers: 'runtime',
				exclude: ['node_modules/@babel/**'],
				presets: [
					['@babel/preset-env', {
						targets: '> 0.25%, not dead'
					}]
				],
				plugins: [
					'@babel/plugin-syntax-dynamic-import',
					['@babel/plugin-transform-runtime', {
						useESModules: true
					}]
				]
			}),

			!dev && terser({
				module: true
			})
		],

		preserveEntrySignatures: false,
		onwarn,
	},

	server: {
		input: config.server.input(),
		output: config.server.output(),
		plugins: [
			replace({
				'process.browser': false,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			svelte({
				extensions: ['.svelte', '.svx'],
				preprocess: mdsvex({
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
				compilerOptions: {
					dev,
					generate: 'ssr',
					hydratable: true
				},
				emitCss: false
			}),
			url({
				sourceDir: path.resolve(__dirname, 'src/node_modules/images'),
				publicPath: '/client/',
				emitFiles: false // already emitted by client build
			}),
			resolve({
				dedupe: ['svelte']
			}),
			commonjs()
		],
		external: Object.keys(pkg.dependencies).concat(require('module').builtinModules),

		preserveEntrySignatures: 'strict',
		onwarn,
	},

	serviceworker: {
		input: config.serviceworker.input(),
		output: config.serviceworker.output(),
		plugins: [
			resolve(),
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			commonjs(),
			!dev && terser()
		],

		preserveEntrySignatures: false,
		onwarn,
	}
};