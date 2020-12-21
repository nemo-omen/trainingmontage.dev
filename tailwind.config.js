const { tailwindExtractor } = require("tailwindcss/lib/lib/purgeUnusedStyles");
const gridTemplatePlugin = require("tailwindcss-grid-template");

module.exports = {
	purge: {
		content: [
			"./src/**/*.html",
			"./src/**/*.svelte",
		],
		options: {
			defaultExtractor: (content) => [
				// This is an internal Tailwind function that we're not supposed to be allowed to use
				// So if this stops working, please open an issue at
				// https://github.com/babichjacob/sapper-postcss-template/issues
				// rather than bothering Tailwind Labs about it
				...tailwindExtractor(content),
				// Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
				...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
			],
			keyframes: true,
		},
	},
	theme: {
		gridTemplateRow: {
			fr: "1fr",
			min: "min-content",
			max: "max-content",
			auto: "auto",
			full: "100%",
			default: "minmax(0,1fr)",
		},
		gridTemplateColumn: {
			fr: "1fr",
			min: "min-content",
			max: "max-content",
			auto: "auto",
			full: "100%",
			default: "minmax(0,1fr)",
		},
		extend: {},
	},
	variants: {
		gridTemplateRow: ["responsive"],
		gridTemplateColumn: ["responsive"],
		extend: {},
	},
	plugins: [
		gridTemplatePlugin
	],
};
