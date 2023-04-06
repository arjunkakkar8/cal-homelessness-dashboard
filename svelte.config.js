import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		scss: {
			prependData: `@import "./src/lib/styles/global.scss";`
		}
	}),

	kit: {
		adapter: adapter()
	}
};

export default config;
