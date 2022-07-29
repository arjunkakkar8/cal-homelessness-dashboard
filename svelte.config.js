import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const prod = process.env.NODE_ENV === 'production';
const basePath = prod ? '/cal-homelessness-dashboard' : '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		scss: {
			prependData: `@import "./src/styles/global.scss";
			$asset-base-path: "${basePath}";`
		}
	}),

	kit: {
		alias: {
			$components: 'src/components',
			$stores: 'src/stores'
		},
		prerender: {
			default: true
		},
		paths: {
			base: basePath
		},
		adapter: adapter()
	}
};

export default config;
