import type { Strings } from '../ui';

const strings: Strings = {
	meta: {
		title: 'Monibo · Regista despesas em segundos',
		description:
			'O Monibo é a app de despesas para iPhone e Apple Watch que abre diretamente no teclado. Sem conta, sem anúncios, sem rastreio.',
	},
	nav: { features: 'Funções', pro: 'Pro', support: 'Suporte', privacy: 'Privacidade', terms: 'Termos' },
	hero: {
		kicker: 'Para iPhone e Apple Watch',
		title: 'Regista despesas em segundos',
		lead: 'Regista uma despesa em poucos segundos: escreve-a ou di-la à tua maneira, como «34 mercearia ontem». Tão rápido que não vais querer parar.',
		note: 'Sem conta · Sem anúncios · Sem rastreio',
	},
	store: { download: 'Descarregar na', downloadBig: 'App Store', soon: 'Em breve', soonSub: 'na App Store' },
	shots: [
		'Regista uma despesa em poucos segundos',
		'Diz à tua maneira',
		'Widgets, Siri e botão Ação',
		'Apple Watch',
		'Apple Pay e SMS do banco, registados para ti',
		'Resumo mensal',
		'Traz o histórico de outras apps',
		'Pergunta sobre os teus gastos',
		'Perfis e contas',
		'Sincronizado com o iCloud',
	],
	featuresTitle: 'Tudo o que precisas, nada que atrapalhe',
	features: [
		{
			title: 'Registo rápido',
			items: [
				'Abre pronto a escrever, com as categorias que mais usas primeiro',
				'Siri, Atalhos e widgets no ecrã principal e no ecrã bloqueado',
				'Diz à tua maneira: «25 no supermercado com o cartão»',
			],
		},
		{
			title: 'Vê para onde vai',
			items: [
				'Resumo mensal por categoria, conta e perfil',
				'Uma revisão semanal para arrumar o que ficou pendente',
				'Pesquisa por texto ou valor, etiquetas e filtros',
			],
		},
		{
			title: 'À tua maneira',
			items: [
				'Perfis para casa, trabalho ou família, cada um com as suas contas',
				'Traz o histórico de outras apps de finanças, exporta para CSV e faz cópias de segurança completas',
				'Em português, inglês, espanhol, catalão, francês, italiano e alemão',
			],
		},
	],
	privacy: {
		title: 'O teu dinheiro é contigo',
		lead: 'O Monibo não tem contas de utilizador nem servidores próprios. Os totais calculam-se no teu iPhone e a sincronização passa pelo teu próprio iCloud.',
		points: [
			'Sem registo, sem anúncios, sem análises',
			'As frases são entendidas no dispositivo, sem IA',
			'A IA é opcional e só funciona com a tua própria chave',
		],
		link: 'Ler a política de privacidade',
	},
	pro: {
		title: 'Monibo Pro',
		lead: 'A versão gratuita é para sempre e cobre o dia a dia. O Pro é para quando queres mais.',
		free: 'Grátis',
		freeItems: [
			'Registo rápido, Siri e widgets',
			'Resumos, revisão semanal e pesquisa',
			'2 perfis e 2 contas',
			'Importação, exportação e cópias de segurança',
		],
		items: [
			'Perfis e contas ilimitados',
			'App para o Apple Watch',
			'Deteção de subscrições e movimentos recorrentes, com uma proposta de configuração',
			'Registo automático dos pagamentos com Apple Pay e dos SMS e e-mails do banco, sem ligar ao banco',
			'Fotos de talões que se transformam em despesas',
			'Pergunta sobre os teus gastos: a IA só transforma a pergunta em filtros, e os totais calculam-se no teu iPhone',
			'Divide um movimento entre categorias',
			'IA com a tua própria chave da Anthropic, OpenAI ou Google (BYOK); só é enviado texto, nunca áudio',
		],
		monthly: 'Mensal',
		yearly: 'Anual',
		lifetime: 'Para sempre',
		perMonth: '/ mês',
		perYear: '/ ano',
		once: 'pagamento único',
		trial: (d) => `${d} dias de experiência grátis`,
		fine: 'Preços em euros; a App Store mostra o preço do teu país. As subscrições renovam-se automaticamente, a menos que sejam canceladas pelo menos 24 horas antes do fim do período, e podem ser geridas nas definições da tua Conta Apple.',
	},
	footer: { made: 'Feito por', contact: 'Contacto' },
	legal: {
		updated: 'Última atualização',
		privacyTitle: 'Política de privacidade',
		termsTitle: 'Termos de utilização',
		supportTitle: 'Suporte',
	},
	notFound: { title: 'Página não encontrada', body: 'Esta página não existe ou foi movida.', home: 'Voltar ao Monibo' },
	language: 'Idioma',
};

export default strings;
