export const languages = {
	en: 'English',
	ca: 'Català',
	es: 'Español',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';
export const langs = Object.keys(languages) as Lang[];

/** Pages that exist in every language. '' is the home page. */
export type Slug = '' | 'privacy' | 'terms' | 'support';

export function path(lang: Lang, slug: Slug = ''): string {
	const prefix = lang === defaultLang ? '/' : `/${lang}/`;
	return slug ? `${prefix}${slug}/` : prefix;
}

export function formatDate(iso: string, lang: Lang): string {
	const locale = { en: 'en-GB', ca: 'ca-ES', es: 'es-ES' }[lang];
	return new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric' }).format(
		new Date(iso + 'T12:00:00'),
	);
}

export function euros(amount: number, lang: Lang): string {
	const locale = { en: 'en-IE', ca: 'ca-ES', es: 'es-ES' }[lang];
	return new Intl.NumberFormat(locale, { style: 'currency', currency: 'EUR' }).format(amount);
}

type Feature = { title: string; items: string[] };
type Strings = {
	meta: { title: string; description: string };
	nav: { features: string; pro: string; support: string; privacy: string; terms: string };
	hero: { kicker: string; title: string; lead: string; note: string };
	store: { download: string; downloadBig: string; soon: string; soonSub: string };
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

export const ui: Record<Lang, Strings> = {
	en: {
		meta: {
			title: 'Monibo · Log spending in seconds',
			description:
				'Monibo is the expense tracker for iPhone and Apple Watch that opens straight to the keypad. No account, no ads, your data on your device.',
		},
		nav: { features: 'Features', pro: 'Pro', support: 'Support', privacy: 'Privacy', terms: 'Terms' },
		hero: {
			kicker: 'For iPhone and Apple Watch',
			title: 'Log spending in seconds',
			lead: 'Tap, type the amount, done. Monibo makes tracking your money so quick you’ll actually keep doing it.',
			note: 'No account · No ads · No tracking',
		},
		store: { download: 'Download on the', downloadBig: 'App Store', soon: 'Coming soon', soonSub: 'to the App Store' },
		shots: [
			'Log an expense in seconds',
			'Say it in your own words',
			'Widgets, Siri and the Action button',
			'Apple Watch',
			'Apple Pay and bank texts, logged for you',
			'Monthly summary',
			'Bring your history from other apps',
			'Ask about your spending',
			'Profiles and accounts',
			'Synced through iCloud',
		],
		featuresTitle: 'Everything it takes, nothing in the way',
		features: [
			{
				title: 'Quick entry',
				items: [
					'Opens ready to type, with your most used categories first',
					'Siri, Shortcuts and widgets on the Home and Lock Screen',
					'Say it in your own words: “25 at the supermarket with the card”',
				],
			},
			{
				title: 'See where it goes',
				items: [
					'Monthly summary by category, account and profile',
					'A weekly review to tidy up what’s pending',
					'Search by text or amount, tags and filters',
				],
			},
			{
				title: 'Your way',
				items: [
					'Profiles for home, work or family, each with its own accounts',
					'Bring your history from other finance apps, export to CSV and make full backups',
					'In English, Catalan, Spanish, Portuguese, French, Italian and German',
				],
			},
		],
		privacy: {
			title: 'Your money is your business',
			lead: 'Monibo has no user accounts and no servers of its own. What you record stays on your devices and in your own iCloud.',
			points: [
				'No sign-up, no ads, no analytics',
				'Dictation is transcribed on the device',
				'AI is optional and only runs with your own key',
			],
			link: 'Read the privacy policy',
		},
		pro: {
			title: 'Monibo Pro',
			lead: 'The free version is free forever and covers everyday use. Pro is for when you want more.',
			free: 'Free',
			freeItems: ['Quick entry, Siri and widgets', 'Summaries, weekly review and search', '2 profiles and 2 accounts', 'Import, export and backups'],
			items: [
				'Unlimited profiles and accounts',
				'Apple Watch app',
				'Recurring transactions: rent, salary and subscriptions log themselves',
				'Automatic capture of Apple Pay payments and bank notifications',
				'Receipt photos turned into expenses',
				'Ask about your spending: “How much did I spend on restaurants this year?”',
				'Split a transaction across categories',
				'AI for tricky sentences, with your own Anthropic, OpenAI or Google key',
			],
			monthly: 'Monthly',
			yearly: 'Yearly',
			lifetime: 'Lifetime',
			perMonth: '/ month',
			perYear: '/ year',
			once: 'one-time',
			trial: (d) => `${d}-day free trial`,
			fine: 'Prices in euros; the App Store shows the price for your country. Subscriptions renew automatically unless cancelled at least 24 hours before the end of the period, and can be managed in your Apple Account settings.',
		},
		footer: { made: 'Made by', contact: 'Contact' },
		legal: { updated: 'Last updated', privacyTitle: 'Privacy Policy', termsTitle: 'Terms of Use', supportTitle: 'Support' },
		notFound: { title: 'Page not found', body: 'This page doesn’t exist, or it has moved.', home: 'Back to Monibo' },
		language: 'Language',
	},
	ca: {
		meta: {
			title: 'Monibo · Apunta despeses en pocs segons',
			description:
				'Monibo és l’app de despeses per a iPhone i Apple Watch que s’obre directament al teclat. Sense compte, sense anuncis, amb les dades al teu dispositiu.',
		},
		nav: { features: 'Funcions', pro: 'Pro', support: 'Suport', privacy: 'Privacitat', terms: 'Condicions' },
		hero: {
			kicker: 'Per a iPhone i Apple Watch',
			title: 'Apunta despeses en pocs segons',
			lead: 'Un toc, l’import i fet. Monibo fa que apuntar els diners sigui tan ràpid que no ho deixaràs de fer.',
			note: 'Sense compte · Sense anuncis · Sense seguiment',
		},
		store: { download: 'Descarrega-la a', downloadBig: 'l’App Store', soon: 'Molt aviat', soonSub: 'a l’App Store' },
		shots: [
			'Apunta una despesa en pocs segons',
			'Digues-ho a la teva manera',
			'Widgets, Siri i el botó d’acció',
			'Apple Watch',
			'Apple Pay i avisos del banc, apuntats sols',
			'Resum mensual',
			'Porta l’historial d’altres apps',
			'Pregunta sobre la despesa',
			'Perfils i comptes',
			'Sincronitzat amb iCloud',
		],
		featuresTitle: 'Tot el que cal, res que destorbi',
		features: [
			{
				title: 'Entrada ràpida',
				items: [
					'S’obre a punt per escriure, amb les categories que més uses primer',
					'Siri, Dreceres i widgets a la pantalla d’inici i de bloqueig',
					'Digues-ho a la teva manera: «25 al súper amb la targeta»',
				],
			},
			{
				title: 'Mira on van',
				items: [
					'Resum mensual per categoria, compte i perfil',
					'Una revisió setmanal per endreçar el que queda pendent',
					'Cerca per text o import, etiquetes i filtres',
				],
			},
			{
				title: 'A la teva manera',
				items: [
					'Perfils per a casa, la feina o la família, cadascun amb els seus comptes',
					'Porta l’historial d’altres apps de finances, exporta a CSV i fes còpies completes',
					'En català, castellà, anglès, portuguès, francès, italià i alemany',
				],
			},
		],
		privacy: {
			title: 'Els teus diners són cosa teva',
			lead: 'Monibo no té comptes d’usuari ni servidors propis. El que apuntes es queda als teus dispositius i al teu iCloud.',
			points: [
				'Sense registre, sense anuncis, sense analítica',
				'El dictat es transcriu al mateix dispositiu',
				'La IA és opcional i només funciona amb la teva clau',
			],
			link: 'Llegeix la política de privacitat',
		},
		pro: {
			title: 'Monibo Pro',
			lead: 'La versió gratuïta és per sempre i cobreix el dia a dia. Pro és per quan en vols més.',
			free: 'Gratuïta',
			freeItems: ['Entrada ràpida, Siri i widgets', 'Resums, revisió setmanal i cerca', '2 perfils i 2 comptes', 'Importació, exportació i còpies'],
			items: [
				'Perfils i comptes il·limitats',
				'App per a l’Apple Watch',
				'Moviments recurrents: lloguer, nòmina i subscripcions s’apunten sols',
				'Captura automàtica dels pagaments amb Apple Pay i dels avisos del banc',
				'Fotos de tiquets convertides en despeses',
				'Pregunta sobre la despesa: «Quant he gastat en restaurants aquest any?»',
				'Divideix un moviment entre categories',
				'IA per a les frases difícils, amb la teva clau d’Anthropic, OpenAI o Google',
			],
			monthly: 'Mensual',
			yearly: 'Anual',
			lifetime: 'Per sempre',
			perMonth: '/ mes',
			perYear: '/ any',
			once: 'un sol pagament',
			trial: (d) => `${d} dies de prova gratuïta`,
			fine: 'Preus en euros; l’App Store mostra el preu del teu país. Les subscripcions es renoven soles si no les cancel·les com a mínim 24 hores abans del final del període, i les pots gestionar a la configuració del teu compte d’Apple.',
		},
		footer: { made: 'Fet per', contact: 'Contacte' },
		legal: { updated: 'Darrera actualització', privacyTitle: 'Política de privacitat', termsTitle: 'Condicions d’ús', supportTitle: 'Suport' },
		notFound: { title: 'Pàgina no trobada', body: 'Aquesta pàgina no existeix o s’ha mogut.', home: 'Torna a Monibo' },
		language: 'Idioma',
	},
	es: {
		meta: {
			title: 'Monibo · Apunta tus gastos en segundos',
			description:
				'Monibo es la app de gastos para iPhone y Apple Watch que se abre directamente en el teclado. Sin cuenta, sin anuncios, con tus datos en tu dispositivo.',
		},
		nav: { features: 'Funciones', pro: 'Pro', support: 'Soporte', privacy: 'Privacidad', terms: 'Condiciones' },
		hero: {
			kicker: 'Para iPhone y Apple Watch',
			title: 'Apunta tus gastos en segundos',
			lead: 'Un toque, el importe y listo. Monibo hace que apuntar tu dinero sea tan rápido que no lo dejarás.',
			note: 'Sin cuenta · Sin anuncios · Sin seguimiento',
		},
		store: { download: 'Descárgala en el', downloadBig: 'App Store', soon: 'Muy pronto', soonSub: 'en el App Store' },
		shots: [
			'Apunta un gasto en segundos',
			'Dilo a tu manera',
			'Widgets, Siri y el botón de acción',
			'Apple Watch',
			'Apple Pay y avisos del banco, apuntados solos',
			'Resumen mensual',
			'Trae tu historial de otras apps',
			'Pregunta sobre tus gastos',
			'Perfiles y cuentas',
			'Sincronizado con iCloud',
		],
		featuresTitle: 'Todo lo necesario, nada que estorbe',
		features: [
			{
				title: 'Entrada rápida',
				items: [
					'Se abre listo para escribir, con tus categorías más usadas primero',
					'Siri, Atajos y widgets en la pantalla de inicio y de bloqueo',
					'Dilo a tu manera: «25 en el súper con la tarjeta»',
				],
			},
			{
				title: 'Mira adónde va',
				items: [
					'Resumen mensual por categoría, cuenta y perfil',
					'Una revisión semanal para ordenar lo pendiente',
					'Busca por texto o importe, etiquetas y filtros',
				],
			},
			{
				title: 'A tu manera',
				items: [
					'Perfiles para casa, el trabajo o la familia, cada uno con sus cuentas',
					'Trae tu historial de otras apps de finanzas, exporta a CSV y haz copias completas',
					'En español, catalán, inglés, portugués, francés, italiano y alemán',
				],
			},
		],
		privacy: {
			title: 'Tu dinero es cosa tuya',
			lead: 'Monibo no tiene cuentas de usuario ni servidores propios. Lo que apuntas se queda en tus dispositivos y en tu iCloud.',
			points: [
				'Sin registro, sin anuncios, sin analítica',
				'El dictado se transcribe en el propio dispositivo',
				'La IA es opcional y solo funciona con tu propia clave',
			],
			link: 'Lee la política de privacidad',
		},
		pro: {
			title: 'Monibo Pro',
			lead: 'La versión gratuita es para siempre y cubre el día a día. Pro es para cuando quieres más.',
			free: 'Gratis',
			freeItems: ['Entrada rápida, Siri y widgets', 'Resúmenes, revisión semanal y búsqueda', '2 perfiles y 2 cuentas', 'Importación, exportación y copias'],
			items: [
				'Perfiles y cuentas ilimitados',
				'App para el Apple Watch',
				'Movimientos recurrentes: alquiler, nómina y suscripciones se apuntan solos',
				'Captura automática de los pagos con Apple Pay y de los avisos del banco',
				'Fotos de tickets convertidas en gastos',
				'Pregunta sobre tus gastos: «¿Cuánto he gastado en restaurantes este año?»',
				'Divide un movimiento entre categorías',
				'IA para las frases difíciles, con tu propia clave de Anthropic, OpenAI o Google',
			],
			monthly: 'Mensual',
			yearly: 'Anual',
			lifetime: 'Para siempre',
			perMonth: '/ mes',
			perYear: '/ año',
			once: 'pago único',
			trial: (d) => `${d} días de prueba gratis`,
			fine: 'Precios en euros; el App Store muestra el precio de tu país. Las suscripciones se renuevan automáticamente salvo que las canceles al menos 24 horas antes del final del periodo, y se gestionan en los ajustes de tu cuenta de Apple.',
		},
		footer: { made: 'Hecho por', contact: 'Contacto' },
		legal: { updated: 'Última actualización', privacyTitle: 'Política de privacidad', termsTitle: 'Condiciones de uso', supportTitle: 'Soporte' },
		notFound: { title: 'Página no encontrada', body: 'Esta página no existe o se ha movido.', home: 'Volver a Monibo' },
		language: 'Idioma',
	},
};
