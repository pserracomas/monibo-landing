import type { Strings } from '../ui';

const strings: Strings = {
	meta: {
		title: 'Monibo · Apunta despeses en pocs segons',
		description:
			'Monibo és l’app de despeses per a iPhone i Apple Watch que s’obre directament al teclat. Sense compte, sense anuncis, sense seguiment.',
	},
	nav: { features: 'Funcions', pro: 'Pro', support: 'Suport', privacy: 'Privacitat', terms: 'Condicions' },
	hero: {
		kicker: 'Per a iPhone i Apple Watch',
		title: 'Apunta despeses en pocs segons',
		lead: 'Apunta una despesa en pocs segons: escriu-la o digues-la a la teva manera, com «34 súper ahir». Tan ràpid que no ho deixaràs de fer.',
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
		lead: 'Monibo no té comptes d’usuari ni servidors propis. Els totals es calculen al teu iPhone i la sincronització passa pel teu iCloud.',
		points: [
			'Sense registre, sense anuncis, sense analítica',
			'Les frases s’entenen al dispositiu, sense IA',
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
			'Detecció de subscripcions i moviments recurrents, amb una proposta de configuració',
			'Captura automàtica dels pagaments amb Apple Pay i dels SMS i correus del banc, sense connectar el banc',
			'Fotos de tiquets convertides en despeses',
			'Pregunta sobre la despesa: la IA només converteix la pregunta en filtres, i els totals es calculen al teu iPhone',
			'Divideix un moviment entre categories',
			'IA amb la teva clau d’Anthropic, OpenAI o Google (BYOK); només s’hi envia text, mai àudio',
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
};

export default strings;
