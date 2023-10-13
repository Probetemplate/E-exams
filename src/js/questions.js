"use strict"

const
	names = [
		'Bangla',
		'English',
		// 'História',
		'Math',
		'ICT',
		'Algorithm',
		// 'Hardware',
		'Biology',
		'Chemestry',
		'Physics',
		'General Knoweldge',
		'History',
		'Civics',
		'Statistics',
		// 'League of Legends',
		// 'Free fire',
		// 'Lúcifer',
		// 'The Flash'
	],
	questions = [
		[
			'অনুপমের বন্ধুর নাম কি?',
			'অপরিচিতা গল্পে কে লোভী ?'
			
		],
		
		[
			'Who is more vulnerable than boys?',
			'By whom was Liberation War declared in 1971?'
			
],
		[
			'1+2 is?',
			'5-3 is?'
			
	],
		[
			'1+1 is? ',
			'1 s compliment of 1 is?'
			
			
		],
		[
			'Qual a definição de Algoritmo?',
			'Onde podemos utilizar um Algoritmo?'
			
		],
		[
			'What is called as Traffic police ?',
			'Who can transform protein?'
			
		],
		[
			'O Linux é:',
			'Quem desenvolveu o Linux?'
			
		],
		[
			'Qual o nome do deus do vinho na Mitologia Grega?',
			'Segundo a Mitologia Grega, o que a deusa Ártemis era de Apolo?'
			
		],
		[
			'Quantos movimentos o planeta Terra executa?',
			'Qual é a principal consequência do movimento de rotação?'
			
		],
		[
			'Qual corpo celeste é conhecido por "Planeta Vermelho"?',
			'Qual é o maior planeta do sitema solar?'
			
		],
		[
			'Qual é a única espécie de felino que os exemplares raramente são encontrados sozinhos?',
			'Qual dos felinos a seguir tem maior o porte?'
			
		],
		[
			'Qual é a maior espécie de urso da América do Norte?',
			'O gato doméstico é famoso por caçar qual animal?'
			
			
		]
	],
	answers = [
		[
			'হরিশ',
			'মামা'
			
		],
		[
			'Girls',
			'Sheikh Mujib'
			
		],
		[
			'3',
			'2'
			
		],
		[
			'10',
			'0'
			
		],
		[
			'Golgi body',
			'Ribosome'
			
			
		],
		[
			'Golgi Body',
			'Ribosome'
			
		],
		[
			'Um Kernel',
			'Linus Torvalds'
			
		],
		[
			'Dionísio',
			'Irmã'
			
		],
		[
			'14 Movimentos',
			'A formação dos dias e das noites'
			
		],
		[
			'Marte',
			'Júpiter'
			
		],
		[
			'Leão',
			'Tigre'
			
		],
		[
			'Urso polar',
			'Rato'
			
		]
	],
	fakeAnswers = [
		[
			[
				'মা',
				'অনুপম'
				
			],
			[
				'মা',
				'অনুপম',
				'হরিশ'
				
			],
			[
				'boys',
				'woman',
				'man',
				'noone'
			],
			[
				'Ziaur Rahman',
				'Ershad',
				'Sheikh Hasina'
				
			],
			[
				'Couves-flor, girassóis, pudim, giz e lápises',
				'Couve-flores, girassols, pudim, giz e lápises',
				'Couves-flor, girassols, pudins, gizes e lápis',
				'Couves-flores, girassóis, pudim, giz e lápises'
			],
			[
				'À, meia, a e meio',
				'À, meia, a e meio',
				'À, meia, a e meio'
			]
		],
		[
			['Sheikh Hasina'],
			['Verdadeiro'],
			['Verdadeiro'],
			['Falso'],
			['Falso'],
			['Verdadeiro'],
			['Verdadeiro'],
			['Verdadeiro'],
			['Falso'],
			['Falso'],
			['Verdadeiro']
		],
		[
			[
				'Eu posso falar com você?',
				'Eu posso tirar uma foto sua?',
				'Eu posso dançar com você?',
				'Eu posso te abraçar?'
			],
			[
				'Três',
				'Torre',
				'Terça-feira',
				'Terceiro'
			],
			[
				'Eu te amo muito',
				'Eu te quero',
				'Eu amo estar com você',
				'Eu amo quando saímos juntos'
			],
			[
				'Slep',
				'Slept',
				'Slop',
				'Slopt'
			],
			[
				'Feliz',
				'Ansioso',
				'Tranquilo',
				'Atrasado',
				'Com fome'
			],
			[
				'Confidente',
				'Confuso',
				'Carinhoso',
				'Contente'
			],
			[
				'Doente',
				'Cansado',
				'Assustado',
				'Arrasado'
			]
		],
		[
			[
				'Mouse',
				'Processador',
				'Chipset',
				'Headset'
			],
			[
				'Deixar o Firewall ativado',
				'Mascarar seu endereçamento IP utilizando uma Proxy',
				'Colocar senha para que somente você tenha acesso ao sistema',
				'Instalar e deixar atualizado um anti-vírus e um anti-spyware'
			],
			[
				'Realiza troca de grandes volumes de dados de um Computador para o outro',
				'Permite atualizar todos os aplicativos do Computador',
				'Faz backup automático de arquivos e pastas selecionadas',
				'Estabelece medidas de segurança para navegação na Internet'
			],
			[
				'Asus, AMD e Intel',
				'Word, Excel e Powerpoint',
				'Mozila Firefox, Internet Explore e Google Chrome',
				'Tablets, Smatphones e Notebooks'
			],
			[
				'Corrigir os danos de um Computador',
				'Estabelecer conexão com a Internet',
				'Ler os dispositivos de um Computador',
				'Acessar os arquivos temporários'
			],
			[
				'Lê CDs e DVDs',
				'Organiza os arquivos do Sistema Operacional',
				'Centraliza as informações',
				'Recupera dados perdidos'
			]
		],
		[
			[
				'Algoritmo é um programa de computador que segue uma sequência lógica de tarefas e variáveis',
				'Algoritmo é um problema lógico que para ser solucionado necessita de um programa baseado em tarefas',
				'Algoritmo é algo que tem ritmo que causa um problema em quem não tem coordenação motora, gerando um problema'
			],
			[
				'Na área da computadores, construção de interferências, tapwares, harddisks e planejamento de redes de pesca',
				'Na área da comutação, construção de intercâmbio, malwares, vírus e planejamento de redes de balanço',
				'Na área da comunicação, aperfeiçoamento de interfaces, softwares livres, raio-x e planejamento de vias'
			],
			[
				'É uma forma de utilizar linguagem estruturada java e se assemelha, na forma, a um programa escrito na linguagem portugol',
				'É um código simples em linguagem de baixo nível que se assemelha, na forma, a um programa escrito na linguagem portugol',
				'É um código que utiliza a linguagem portugol e os comandos de a um programa escrito na linguagem de programação java'
			],
			[
				'Uma descrição narrativa',
				'Um diagrama de Chapim',
				'Um pseudocódigo'
			],
			[
				'Seu código',
				'Código de alguém',
				'Código de baixo nível'
			],
			[
				'B é maior do que A sendo D maior que a soma de A e B',
				'D é diferente da soma de A e B sendo D maior que C',
				'D - A é igual a 20 sendo 20 a metade da soma de A + B',
				'D é diferente de C sendo C a metade da soma de A + D'
			],
			[
				'Tomar uma decisão verdadeira e apresentar ou executar uma instrução falsa se o teste for do tipo inteiro',
				'Tomar um caminho diferente e apresentar ou executar uma instrução mediante um fluxograma de Chapin',
				'Tomar uma decisão se e somente se a condição então não fizer parte da relação de variáveis declaradas no escopo do fluxograma'
			]
		],
		[
			[
				'12 camadas',
				'5 camadas',
				'3 camadas',
				'6 camadas'
			],
			[
				'Conjunto de periféricos integrados',
				'União de equipamentos com a única finalidade de compartilhar internet',
				'Vários computadores que fazem parte dos setores de uma organização'
			],
			[
				'MAN, NAN, LAN',
				'LAN, NAN, WAN',
				'LAN, MAN, TAN'
			],
			[
				'Barra, Anular, Estrela e Token',
				'Anel, híbrida, Estelar e Camada',
				'Segmento, Híbrida, Estrela e Token'
			],
			[
				'Switch',
				'Access Point',
				'Patch Panel'
			],
			[
				'IP e TCP',
				'HTTP e SMTP',
				'UDP e POP'
			],
			[
				'HTTP',
				'FTP',
				'DNS'
			]
		],
		[
			[
				'Um Sistema de Banco de Dados',
				'Um Hardware',
				'Um Sistema Operacional'
			],
			[
				'Bill Gates',
				'Unix',
				'Microsoft',
				'Google',
				'Ubuntu'
			],
			[
				'Super Computador',
				'Super Máquina',
				'Super Convidado'
			],
			[
				'Ambiente do Office',
				'Ambiente do Windows',
				'Sistema Operacional'
			],
			[
				'Google Chrome',
				'Opera',
				'Internet Explorer',
				'Safari'
			],
			[
				'Modo Gráfico e Modo de Controle',
				'Modo Ambiente e Modo de Console',
				'Modo de Console e Modo de Controle'
			],
			[
				'Acessório',
				'DOS',
				'CMD',
				'Prompt de Comando'
			],
			[
				'O núcleo da Intenet',
				'O núcleo do Firefox',
				'O núcleo do Sistema de Banco de Dados'
			]
		],
		[
			[
				'Apolo',
				'Areas',
				'Hércules',
				'Zeus'
			],
			[
				'Prima',
				'Mãe',
				'Tia',
				'Serva'
			],
			[
				'Era',
				'Íris',
				'Deméter',
				'Pandora'
			],
			[
				'Ares e Hermes',
				'Atena e Apolo',
				'Baco e Hades',
				'Afrodite e Hefesto'
			],
			[
				'Arcádia',
				'Atlântida',
				'Campos Elísios',
				'Palácio de Cristal'
			],
			[
				'Era, Minerva e Ceres',
				'Diana, Era e Juno',
				'Perséfone, Minerva e Gaia',
				'Íris, Pandora e Juno'
			],
			[
				'Zeus',
				'Quírion',
				'Ésquilo',
				'Poseidon',
				'Kratos'
			]
		],
		[
			[
				'11 movimentos',
				'12 movimentos',
				'13 movimentos',
				'15 movimentos'
			],
			[
				'A formação das 4 estações do ano',
				'A formação das chuvas',
				'A formação dos fenômenos naturais'
			],
			[
				'A formação das chuvas',
				'A manutenção das temperaturas da Terra',
				'A formação do dia e da noite'
			],
			[
				'Redonda',
				'Oval',
				'Plana',
				'A Terra não tem forma'
			],
			[
				'22 horas, 43 minutos e 54 segundos',
				'23 horas, 56 minutos e 40 segundos',
				'24 horas, 56 minutos e 4 segundos'
			],
			[
				'24 horas, 56 minutos e 4 minutos',
				'364 dias, 5 horas e 45 segundos',
				'5 horas, 48 minutos e 46 minutos',
				'365 dias, 1 hora e 46 segundos'
			],
			[
				'É o conjunto de água de todo o planeta',
				'É a camada mais extensa da atmosfera',
				'É o conjunto de sistemas vivos do planeta'
			],
			[
				'É o solo onde pisamos',
				'É a camada mais extensa da atmosfera',
				'É o conjunto de sistemas vivos do planeta'
			],
			[
				'É o solo onde pisamos',
				'É o conjunto de água de todo o planeta',
				'É o conjunto de sistemas vivos do planeta'
			],
			[
				'É o solo onde pisamos',
				'É o conjunto de água de todo o planeta',
				'É a camada gasosa que envolve a Terra'
			]
		],
		[
			[
				'Vênus',
				'Mercúrio',
				'Saturno'
			],
			[
				'Urano',
				'Saturno',
				'Netuno'
			],
			[
				'Andrômeda',
				'Galáxia do Sombreiro',
				'Triângulo'
			],
			[
				'2',
				'5',
				'10',
				'20',
				'Mais de 10.000'
			],
			[
				'Netuno',
				'Júpiter',
				'Saturno'
			],
			[
				'Urano',
				'Netuno',
				'Saturno'
			],
			[
				'Netuno',
				'Saturno',
				'Marte'
			],
			[
				'Mercúrio',
				'Júpiter',
				'Terra'
			]
		],
		[
			[
				'Guepardo',
				'Tigre',
				'Gato',
				'Lince'
			],
			[
				'Guepardo',
				'Leopardo',
				'Caracal',
				'Onça'
			],
			[
				'Gato',
				'Tigre',
				'Puma',
				'Leopardo'
			],
			[
				'Lince',
				'Caracal',
				'Gato Pescador'
			],
			[
				'Falso'
			],
			[
				'Tigre',
				'Gato',
				'Puma'
			],
			[
				'Lince',
				'Gato Doméstico'
			],
			[
				'46',
				'60',
				'100'
			]
		],
		[
			[
				'Urso Cinzento',
				'Urso Pardo',
				'Urso Negro'
			],
			[
				'Galinha',
				'Cachorro',
				'Gafanhoto'
			],
			[
				'Onça',
				'Urso Polar',
				'Tubarão Branco',
				'Cascavel'
			],
			[
				'Cascavél',
				'Sucuri',
				'Jacaré',
				'Jiboia'
			],
			[
				'Leopardo',
				'Jacaré',
				'Hiena',
				'Lobo'
			],
			[
				'Tubarão-duende',
				'Tubarão-anão',
				'Tubarão-baleia',
				'Tubarão Cobra'
			],
			[
				'Falsa'
			],
			[
				'Gato',
				'Cachorro',
				'Barata',
				'Leão'
			],
			[
				'Musaranho',
				'Sagui',
				'Coala',
				'Equidna'
			],
			[
				'Baleia',
				'Hamster',
				'Golfinho',
				'Gorila'
			],
			[
				'Carpa',
				'Dânio Tigre',
				'Perca Sol',
				'Notrópis'
			]
		]
	]

