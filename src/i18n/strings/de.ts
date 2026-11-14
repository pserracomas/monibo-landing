import type { Strings } from '../ui';

const strings: Strings = {
	meta: {
		title: 'Monibo · Ausgaben in Sekunden erfassen',
		description:
			'Monibo ist das Haushaltsbuch für iPhone und Apple Watch, das sich direkt mit dem Ziffernfeld öffnet. Kein Konto, keine Werbung, kein Tracking.',
	},
	nav: { features: 'Funktionen', pro: 'Pro', support: 'Hilfe', privacy: 'Datenschutz', terms: 'Bedingungen' },
	hero: {
		kicker: 'Für iPhone und Apple Watch',
		title: 'Ausgaben in Sekunden erfassen',
		lead: 'Erfasse eine Ausgabe in wenigen Sekunden: tippe sie oder sag sie mit deinen Worten, etwa „34 Einkauf gestern“. So schnell, dass du dranbleibst.',
		note: 'Kein Konto · Keine Werbung · Kein Tracking',
	},
	store: { download: 'Laden im', downloadBig: 'App Store', soon: 'Bald', soonSub: 'im App Store' },
	shots: [
		'Eine Ausgabe in wenigen Sekunden erfassen',
		'Sag es mit deinen Worten',
		'Widgets, Siri und die Action-Taste',
		'Apple Watch',
		'Apple Pay und Bank-SMS, für dich erfasst',
		'Monatsübersicht',
		'Verlauf aus anderen Apps übernehmen',
		'Frag nach deinen Ausgaben',
		'Profile und Konten',
		'Mit iCloud synchronisiert',
	],
	featuresTitle: 'Alles, was es braucht, nichts, was stört',
	features: [
		{
			title: 'Schnell erfassen',
			items: [
				'Öffnet sich bereit zur Eingabe, deine häufigsten Kategorien zuerst',
				'Siri, Kurzbefehle und Widgets auf Home- und Sperrbildschirm',
				'Sag es mit deinen Worten: „25 im Supermarkt mit der Karte“',
			],
		},
		{
			title: 'Sieh, wohin es geht',
			items: [
				'Monatsübersicht nach Kategorie, Konto und Profil',
				'Ein wöchentlicher Rückblick, um Offenes zu ordnen',
				'Suche nach Text oder Betrag, Tags und Filter',
			],
		},
		{
			title: 'Auf deine Art',
			items: [
				'Profile für Zuhause, Arbeit oder Familie, jedes mit eigenen Konten',
				'Verlauf aus anderen Finanz-Apps übernehmen, als CSV exportieren und vollständige Backups',
				'Auf Deutsch, Englisch, Katalanisch, Spanisch, Portugiesisch, Französisch und Italienisch',
			],
		},
	],
	privacy: {
		title: 'Dein Geld geht nur dich etwas an',
		lead: 'Monibo hat keine Benutzerkonten und keine eigenen Server. Deine Summen werden auf deinem iPhone berechnet, und die Synchronisierung läuft über dein eigenes iCloud.',
		points: [
			'Keine Anmeldung, keine Werbung, keine Analyse',
			'Sätze werden auf dem Gerät verstanden, ohne KI',
			'KI ist optional und läuft nur mit deinem eigenen Schlüssel',
		],
		link: 'Datenschutzerklärung lesen',
	},
	pro: {
		title: 'Monibo Pro',
		lead: 'Die Gratisversion bleibt kostenlos und reicht für den Alltag. Pro ist für alle, die mehr wollen.',
		free: 'Gratis',
		freeItems: [
			'Schnelle Eingabe, Siri und Widgets',
			'Übersichten, Wochenrückblick und Suche',
			'2 Profile und 2 Konten',
			'Import, Export und Backups',
		],
		items: [
			'Unbegrenzt viele Profile und Konten',
			'App für die Apple Watch',
			'Erkennung von Abos und wiederkehrenden Buchungen, mit einem Einrichtungsvorschlag',
			'Automatische Erfassung von Apple-Pay-Zahlungen sowie von Bank-SMS und -E-Mails, ohne die Bank anzubinden',
			'Fotos von Belegen werden zu Ausgaben',
			'Frag nach deinen Ausgaben (die Summen bleiben auf deinem iPhone)',
			'Eine Buchung auf mehrere Kategorien aufteilen',
			'KI mit deinem eigenen Schlüssel von Anthropic, OpenAI oder Google (BYOK)',
		],
		monthly: 'Monatlich',
		yearly: 'Jährlich',
		lifetime: 'Für immer',
		perMonth: '/ Monat',
		perYear: '/ Jahr',
		once: 'Einmalkauf',
		trial: (d) => `${d} Tage gratis testen`,
		fine: 'Preise in Euro; der App Store zeigt den Preis für dein Land. Abos verlängern sich automatisch, wenn sie nicht mindestens 24 Stunden vor Ende des Zeitraums gekündigt werden, und lassen sich in den Einstellungen deines Apple Accounts verwalten.',
	},
	footer: { made: 'Entwickelt von', contact: 'Kontakt' },
	legal: {
		updated: 'Zuletzt aktualisiert',
		privacyTitle: 'Datenschutzerklärung',
		termsTitle: 'Nutzungsbedingungen',
		supportTitle: 'Hilfe',
	},
	notFound: { title: 'Seite nicht gefunden', body: 'Diese Seite gibt es nicht oder sie wurde verschoben.', home: 'Zurück zu Monibo' },
	language: 'Sprache',
};

export default strings;
