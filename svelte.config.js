import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess( {
		script: true
	}),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter()
	},

	vite: {
		// This makes Vite bundle the named package rather than treat it as an external dependency:
		ssr: {
			noExternal: ['@invertase/firestore-stripe-payments']
		},
		// If you want dev-mode optimization/transpilation:
		optimizeDeps: {
			include: ['@invertase/firestore-stripe-payments']
		}
	}
};

export default config;
