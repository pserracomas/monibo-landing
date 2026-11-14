import type { APIRoute } from 'astro';
import { SITE_URL } from '../consts';
import { langs, path, type Slug } from '../i18n/ui';

const slugs: Slug[] = ['', 'support', 'privacy', 'terms'];

export const GET: APIRoute = () => {
	const urls = slugs.flatMap((slug) =>
		langs.map((lang) => {
			const alternates = langs
				.map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${new URL(path(l, slug), SITE_URL).href}"/>`)
				.join('');
			return `<url><loc>${new URL(path(lang, slug), SITE_URL).href}</loc>${alternates}</url>`;
		}),
	);
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls.join('')}</urlset>\n`;
	return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
