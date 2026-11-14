import type { Strings } from '../ui';

const strings: Strings = {
	meta: {
		title: 'Monibo · Notez vos dépenses en secondes',
		description:
			'Monibo est l’app de suivi des dépenses pour iPhone et Apple Watch qui s’ouvre directement sur le clavier. Sans compte, sans pub, sans pistage.',
	},
	nav: { features: 'Fonctions', pro: 'Pro', support: 'Assistance', privacy: 'Confidentialité', terms: 'Conditions' },
	hero: {
		kicker: 'Pour iPhone et Apple Watch',
		title: 'Notez vos dépenses en secondes',
		lead: 'Notez une dépense en quelques secondes : tapez-la ou dites-la à votre façon, comme « 34 courses hier ». Si rapide que vous continuerez à le faire.',
		note: 'Sans compte · Sans pub · Sans pistage',
	},
	store: { download: 'Télécharger dans', downloadBig: 'l’App Store', soon: 'Bientôt', soonSub: 'sur l’App Store' },
	shots: [
		'Notez une dépense en quelques secondes',
		'Dites-le à votre façon',
		'Widgets, Siri et bouton Action',
		'Apple Watch',
		'Apple Pay et SMS de la banque, notés pour vous',
		'Résumé mensuel',
		'Importez votre historique depuis d’autres apps',
		'Interrogez vos dépenses',
		'Profils et comptes',
		'Synchronisé avec iCloud',
	],
	featuresTitle: 'Tout ce qu’il faut, rien qui gêne',
	features: [
		{
			title: 'Saisie rapide',
			items: [
				'S’ouvre prête à saisir, avec vos catégories favorites en premier',
				'Siri, Raccourcis et widgets sur l’écran d’accueil et l’écran verrouillé',
				'Dites-le à votre façon : « 25 au supermarché avec la carte »',
			],
		},
		{
			title: 'Voyez où ça va',
			items: [
				'Résumé mensuel par catégorie, compte et profil',
				'Une revue hebdomadaire pour ranger ce qui reste en attente',
				'Recherche par texte ou montant, étiquettes et filtres',
			],
		},
		{
			title: 'À votre façon',
			items: [
				'Des profils pour la maison, le travail ou la famille, chacun avec ses comptes',
				'Importez votre historique depuis d’autres apps de finances, exportez en CSV et faites des sauvegardes complètes',
				'En français, anglais, catalan, espagnol, portugais, italien et allemand',
			],
		},
	],
	privacy: {
		title: 'Votre argent ne regarde que vous',
		lead: 'Monibo n’a ni comptes utilisateurs ni serveurs propres. Vos totaux sont calculés sur votre iPhone, et la synchronisation passe par votre propre iCloud.',
		points: [
			'Sans inscription, sans pub, sans analytique',
			'Les phrases sont comprises sur l’appareil, sans IA',
			'L’IA est facultative et ne fonctionne qu’avec votre propre clé',
		],
		link: 'Lire la politique de confidentialité',
	},
	pro: {
		title: 'Monibo Pro',
		lead: 'La version gratuite l’est pour toujours et couvre le quotidien. Pro, c’est pour quand vous voulez plus.',
		free: 'Gratuit',
		freeItems: [
			'Saisie rapide, Siri et widgets',
			'Résumés, revue hebdomadaire et recherche',
			'2 profils et 2 comptes',
			'Import, export et sauvegardes',
		],
		items: [
			'Profils et comptes illimités',
			'App Apple Watch',
			'Détection des abonnements et des opérations récurrentes, avec une proposition de configuration',
			'Saisie automatique des paiements Apple Pay et des SMS et e-mails de la banque, sans connecter la banque',
			'Photos de tickets transformées en dépenses',
			'Interrogez vos dépenses (les totaux restent sur votre iPhone)',
			'Répartissez une opération entre plusieurs catégories',
			'IA avec votre propre clé Anthropic, OpenAI ou Google (BYOK)',
		],
		monthly: 'Mensuel',
		yearly: 'Annuel',
		lifetime: 'À vie',
		perMonth: '/ mois',
		perYear: '/ an',
		once: 'achat unique',
		trial: (d) => `${d} jours d’essai gratuit`,
		fine: 'Prix en euros ; l’App Store affiche le prix de votre pays. Les abonnements se renouvellent automatiquement sauf résiliation au moins 24 heures avant la fin de la période, et se gèrent dans les réglages de votre compte Apple.',
	},
	footer: { made: 'Créé par', contact: 'Contact' },
	legal: {
		updated: 'Dernière mise à jour',
		privacyTitle: 'Politique de confidentialité',
		termsTitle: 'Conditions d’utilisation',
		supportTitle: 'Assistance',
	},
	notFound: { title: 'Page introuvable', body: 'Cette page n’existe pas ou a été déplacée.', home: 'Retour à Monibo' },
	language: 'Langue',
};

export default strings;
