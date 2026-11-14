import type { Strings } from '../ui';

const strings: Strings = {
	meta: {
		title: 'Monibo · Log spending in seconds',
		description:
			'Monibo is the expense tracker for iPhone and Apple Watch that opens straight to the keypad. No account, no ads, no tracking.',
	},
	nav: { features: 'Features', pro: 'Pro', support: 'Support', privacy: 'Privacy', terms: 'Terms' },
	hero: {
		kicker: 'For iPhone and Apple Watch',
		title: 'Log spending in seconds',
		lead: 'Log an expense in a few seconds: type it or say it in your own words, like “34 groceries yesterday”. So quick you’ll actually keep doing it.',
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
		lead: 'Monibo has no user accounts and no servers of its own. Your totals are calculated on your iPhone, and sync goes through your own iCloud.',
		points: [
			'No sign-up, no ads, no analytics',
			'Sentences are understood on the device, without AI',
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
			'Detection of subscriptions and recurring charges, with a suggested setup',
			'Automatic capture of Apple Pay payments and of bank SMS and email, without linking your bank',
			'Receipt photos turned into expenses',
			'Ask about your spending: the AI only turns the question into filters, and the totals stay on your iPhone',
			'Split a transaction across categories',
			'AI with your own Anthropic, OpenAI or Google key (BYOK); only text is sent, never audio',
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
};

export default strings;
