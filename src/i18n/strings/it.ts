import type { Strings } from '../ui';

const strings: Strings = {
	meta: {
		title: 'Monibo · Annota spese in pochi secondi',
		description:
			'Monibo è l’app per le spese per iPhone e Apple Watch che si apre direttamente sul tastierino. Niente account, niente pubblicità, niente tracciamento.',
	},
	nav: { features: 'Funzioni', pro: 'Pro', support: 'Assistenza', privacy: 'Privacy', terms: 'Condizioni' },
	hero: {
		kicker: 'Per iPhone e Apple Watch',
		title: 'Annota spese in pochi secondi',
		lead: 'Annota una spesa in pochi secondi: scrivila o dilla a modo tuo, come «34 spesa ieri». Così veloce che non smetterai più.',
		note: 'Niente account · Niente pubblicità · Niente tracciamento',
	},
	store: { download: 'Scarica su', downloadBig: 'App Store', soon: 'Presto', soonSub: 'su App Store' },
	shots: [
		'Annota una spesa in pochi secondi',
		'Dillo a modo tuo',
		'Widget, Siri e pulsante Azione',
		'Apple Watch',
		'Apple Pay e SMS della banca, annotati per te',
		'Riepilogo mensile',
		'Porta lo storico da altre app',
		'Chiedi delle tue spese',
		'Profili e conti',
		'Sincronizzato con iCloud',
	],
	featuresTitle: 'Tutto quello che serve, niente che intralci',
	features: [
		{
			title: 'Inserimento rapido',
			items: [
				'Si apre pronto per scrivere, con le categorie che usi di più in cima',
				'Siri, Comandi rapidi e widget nella schermata Home e di blocco',
				'Dillo a modo tuo: «25 al supermercato con la carta»',
			],
		},
		{
			title: 'Guarda dove vanno',
			items: [
				'Riepilogo mensile per categoria, conto e profilo',
				'Una revisione settimanale per sistemare ciò che è in sospeso',
				'Cerca per testo o importo, etichette e filtri',
			],
		},
		{
			title: 'A modo tuo',
			items: [
				'Profili per casa, lavoro o famiglia, ognuno con i suoi conti',
				'Importa lo storico da altre app di finanza, esporta in CSV e fai backup completi',
				'In italiano, inglese, catalano, spagnolo, portoghese, francese e tedesco',
			],
		},
	],
	privacy: {
		title: 'I tuoi soldi sono affari tuoi',
		lead: 'Monibo non ha account utente né server propri. I totali si calcolano sul tuo iPhone e la sincronizzazione passa dal tuo iCloud.',
		points: [
			'Niente registrazione, pubblicità o analisi',
			'Le frasi si capiscono sul dispositivo, senza IA',
			'L’IA è facoltativa e funziona solo con la tua chiave',
		],
		link: 'Leggi l’informativa sulla privacy',
	},
	pro: {
		title: 'Monibo Pro',
		lead: 'La versione gratuita è per sempre e copre l’uso quotidiano. Pro è per quando vuoi di più.',
		free: 'Gratis',
		freeItems: [
			'Inserimento rapido, Siri e widget',
			'Riepiloghi, revisione settimanale e ricerca',
			'2 profili e 2 conti',
			'Importazione, esportazione e backup',
		],
		items: [
			'Profili e conti illimitati',
			'App per Apple Watch',
			'Rilevamento di abbonamenti e movimenti ricorrenti, con una proposta di configurazione',
			'Acquisizione automatica dei pagamenti Apple Pay e degli SMS e delle e-mail della banca, senza collegare la banca',
			'Foto degli scontrini trasformate in spese',
			'Chiedi delle tue spese: l’IA trasforma solo la domanda in filtri, e i totali si calcolano sul tuo iPhone',
			'Dividi un movimento tra più categorie',
			'IA con la tua chiave Anthropic, OpenAI o Google (BYOK); si invia solo testo, mai audio',
		],
		monthly: 'Mensile',
		yearly: 'Annuale',
		lifetime: 'A vita',
		perMonth: '/ mese',
		perYear: '/ anno',
		once: 'pagamento unico',
		trial: (d) => `${d} giorni di prova gratuita`,
		fine: 'Prezzi in euro; App Store mostra il prezzo del tuo paese. Gli abbonamenti si rinnovano automaticamente se non vengono disdetti almeno 24 ore prima della fine del periodo, e si gestiscono nelle impostazioni del tuo account Apple.',
	},
	footer: { made: 'Creato da', contact: 'Contatti' },
	legal: {
		updated: 'Ultimo aggiornamento',
		privacyTitle: 'Informativa sulla privacy',
		termsTitle: 'Condizioni d’uso',
		supportTitle: 'Assistenza',
	},
	notFound: { title: 'Pagina non trovata', body: 'Questa pagina non esiste o è stata spostata.', home: 'Torna a Monibo' },
	language: 'Lingua',
};

export default strings;
