/** @type {import("prettier").Config} */
const config = {
	useTabs: false,
	tabWidth: 4,
	singleQuote: true,
	trailingComma: 'all',
	printWidth: 120,
	singleAttributePerLine: true,
	plugins: ['prettier-plugin-svelte'],
	overrides: [
		{ files: '*.svelte', options: { parser: 'svelte' } },
		{
			files: '*.{json,md,yml,yaml}',
			options: {
				tabWidth: 2,
			}
		}
	]
};

export default config;
