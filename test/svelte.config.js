import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import customPreprocessor from '../src/preprocessor/index.js';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [ customPreprocessor({global: "./src/css/index"  }), preprocess()],

	kit: {
		adapter: adapter()
	}
};

export default config;
