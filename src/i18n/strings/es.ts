import type { Strings } from '../ui';

const strings: Strings = {
	meta: {
		title: 'Monibo · Apunta tus gastos en segundos',
		description:
			'Monibo es la app de gastos para iPhone y Apple Watch que se abre directamente en el teclado. Sin cuenta, sin anuncios, sin seguimiento.',
	},
	nav: { features: 'Funciones', pro: 'Pro', support: 'Soporte', privacy: 'Privacidad', terms: 'Condiciones' },
	hero: {
		kicker: 'Para iPhone y Apple Watch',
		title: 'Apunta tus gastos en segundos',
		lead: 'Apunta un gasto en pocos segundos: escríbelo o dilo a tu manera, como «34 súper ayer». Tan rápido que no lo dejarás.',
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
		lead: 'Monibo no tiene cuentas de usuario ni servidores propios. Los totales se calculan en tu iPhone y la sincronización pasa por tu iCloud.',
		points: [
			'Sin registro, sin anuncios, sin analítica',
			'Las frases se entienden en el dispositivo, sin IA',
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
			'Detección de suscripciones y movimientos recurrentes, con una propuesta de configuración',
			'Captura automática de los pagos con Apple Pay y de los SMS y correos del banco, sin conectar el banco',
			'Fotos de tickets convertidas en gastos',
			'Pregunta sobre tus gastos: la IA solo convierte la pregunta en filtros, y los totales se calculan en tu iPhone',
			'Divide un movimiento entre categorías',
			'IA con tu propia clave de Anthropic, OpenAI o Google (BYOK); solo se envía texto, nunca audio',
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
};

export default strings;
