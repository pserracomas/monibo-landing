import ca from './strings/ca';
import de from './strings/de';
import en from './strings/en';
import es from './strings/es';
import fr from './strings/fr';
import it from './strings/it';
import pt from './strings/pt';

/** The site's languages, in the order the language menu lists them. */
export const languages = {
	en: 'English',
	ca: 'Català',
	es: 'Español',
	fr: 'Français',
	it: 'Italiano',
	de: 'Deutsch',
	pt: 'Português',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';
export const langs = Object.keys(languages) as Lang[];

/** BCP 47 tag of each language, for `lang`, hreflang and number and date formats. */
export const locales: Record<Lang, string> = {
	en: 'en',
	ca: 'ca',
	es: 'es',
	fr: 'fr',
	it: 'it',
	de: 'de',
	pt: 'pt-PT',
};

/** Pages that exist in every language. '' is the home page. */
export type Slug = '' | 'privacy' | 'terms' | 'support';

export function path(lang: Lang, slug: Slug = ''): string {
	const prefix = lang === defaultLang ? '/' : `/${lang}/`;
	return slug ? `${prefix}${slug}/` : prefix;
}

export function formatDate(iso: string, lang: Lang): string {
	const locale = lang === 'en' ? 'en-GB' : locales[lang];
	return new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric' }).format(
		new Date(iso + 'T12:00:00'),
	);
}

export function euros(amount: number, lang: Lang): string {
	const locale = lang === 'en' ? 'en-IE' : locales[lang];
	return new Intl.NumberFormat(locale, { style: 'currency', currency: 'EUR' }).format(amount);
}

type Feature = { title: string; items: string[] };
export type Strings = {
	meta: { title: string; description: string };
	nav: { features: string; pro: string; support: string; privacy: string; terms: string };
	hero: { kicker: string; title: string; lead: string; note: string };
	store: { download: string; downloadBig: string; soon: string; soonSub: string };
	/** Alt text of the screenshots 01 to 10, in order. */
	shots: string[];
	featuresTitle: string;
	features: Feature[];
	privacy: { title: string; lead: string; points: string[]; link: string };
	pro: {
		title: string;
		lead: string;
		free: string;
		freeItems: string[];
		items: string[];
		monthly: string;
		yearly: string;
		lifetime: string;
		perMonth: string;
		perYear: string;
		once: string;
		trial: (days: number) => string;
		fine: string;
	};
	footer: { made: string; contact: string };
	legal: { updated: string; privacyTitle: string; termsTitle: string; supportTitle: string };
	notFound: { title: string; body: string; home: string };
	language: string;
};

export const ui: Record<Lang, Strings> = { en, ca, es, fr, it, de, pt };
