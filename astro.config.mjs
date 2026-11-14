// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://monibo.app',
	trailingSlash: 'always',
	i18n: {
		locales: ['en', 'ca', 'es'],
		defaultLocale: 'en',
		routing: { prefixDefaultLocale: false },
	},
});
