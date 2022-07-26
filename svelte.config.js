import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
			prependData: `@import "./src/styles/global.scss";`,
		}
	}),

	kit: {
		alias: {
			$components: 'src/components',
			$stores: 'src/stores',
		},
		prerender: {
			default: true
		},
		adapter: adapter()
	}
};

export default config;
