import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		scss: {
			prependData: `@import "./src/styles/global.scss";`
		}
	}),

	kit: {
		alias: {
			$components: 'src/components',
			$stores: 'src/stores'
		},
		prerender: {
			default: true,
		},
		paths: {
			base: dev ? "" : '/cal-homelessness-dashboard',
			assets: dev ? "" : 'https://arjunkakkar8.github.io/cal-homelessness-dashboard',
		},
		adapter: adapter()
	}
};

export default config;
