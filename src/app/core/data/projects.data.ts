import { PortfolioProject } from '../models/project.model';

export const PROJECTS = [
  {
    slug: 'gestao-fisioterapia',
    featured: true,
    title: 'Plataforma de Gestão para Fisioterapia',
    category: 'Saúde e gestão de atendimentos',
    period: 'Maio de 2024 a abril de 2025',
    team: 'Equipe de 3 pessoas',
    status: 'Entregue e utilizado por um curto período',
    summary:
      'Plataforma para organizar agendamentos, atendimentos, produtos e serviços de fisioterapia.',
    contribution:
      'Desenvolvi praticamente todo o Front-end web com base no design do Figma e integrei a aplicação à API Spring Boot.',
    areas: ['Front-end', 'APIs', 'UI/UX'],
    technologies: ['Angular 17', 'TypeScript', 'RxJS', 'PrimeNG', 'PrimeFlex', 'Spring Boot'],
    links: [
      //   {
      //     type: 'design',
      //     label: 'Ver design no Figma',
      //     url: 'https://www.figma.com/design/OzUNNZLsgBF4IxtQ5B8767/FastFisio-Plataforma-Marketplace?node-id=800-4764&p=f',
      //   },
      {
        type: 'repository',
        label: 'Ver projeto no GitHub',
        url: 'https://github.com/JonathanJHK/Agendamento',
      },
    ],
    cover: {
      src: 'images/projects/gestao-fisioterapia/cover.webp',
      alt: 'Interface da plataforma de gestão para fisioterapia',
    },
    caseStudy: {
      context:
        'A plataforma foi criada para reunir em um único ambiente a gestão de agendamentos, atendimentos, produtos e serviços oferecidos por profissionais de fisioterapia.',

      challenge:
        'Transformar o design definido no Figma em uma aplicação web responsiva, integrar diferentes fluxos à API Spring Boot e estabelecer uma estrutura moderna desde o início do desenvolvimento.',

      solution:
        'Desenvolvi praticamente todo o Front-end utilizando Angular 17, PrimeNG e PrimeFlex. Organizei componentes, serviços, validações e integrações por responsabilidades, buscando reduzir duplicações e facilitar a manutenção.',

      highlights: [
        'Agendamentos e modalidades de atendimento',
        'Gestão de produtos e serviços',
        'Interface responsiva baseada no Figma',
        'Integração com API Spring Boot',
      ],

      learnings:
        'O projeto marcou minha evolução na organização do código. Depois de trabalhar com sistemas mais antigos e legados, pude aplicar uma estrutura mais limpa, componentização e boas práticas desde o começo.',
    },
    gallery: [
      {
        src: 'images/projects/gestao-fisioterapia/dashboard.webp',
        alt: 'Dashboard da plataforma de gestão para fisioterapia',
        caption: 'Visão geral de consultas, indicadores e notificações.',
      },
      {
        src: 'images/projects/gestao-fisioterapia/login.webp',
        alt: 'Tela de acesso da plataforma',
        caption: 'Fluxo de autenticação e cadastro de usuários.',
      },
      {
        src: 'images/projects/gestao-fisioterapia/local-service-settings.webp',
        alt: 'Configuração de atendimento presencial',
        caption: 'Gestão de disponibilidade, endereço e horários.',
      },
      {
        src: 'images/projects/gestao-fisioterapia/home-service-area.webp',
        alt: 'Configuração da área de atendimento domiciliar',
        caption: 'Definição visual da região disponível para atendimento.',
      },
      {
        src: 'images/projects/gestao-fisioterapia/professionals-list.webp',
        alt: 'Listagem de profissionais cadastrados',
        caption: 'Gerenciamento de profissionais, empresas e aprovações.',
      },
      {
        src: '/images/projects/gestao-fisioterapia/architecture.svg',
        alt: 'Diagrama da arquitetura da plataforma de gestão para fisioterapia',
        caption: 'Integração entre Front-end, API e banco de dados.',
      },
    ],
  },
  {
    slug: 'monitoramento-incendios',
    featured: true,
    title: 'Plataforma de Monitoramento de Incêndios',
    category: 'Meio ambiente e análise de ocorrências',
    period: 'Abril de 2025 a julho de 2025',
    team: 'Equipe de 2 pessoas',
    status: 'Entregue e em utilização',
    summary:
      'Plataforma para cadastro, acompanhamento e análise de ocorrências de incêndio informadas por empresas e associados.',
    contribution:
      'Criei o design e todo o Front-end. Posteriormente, também realizei correções e evoluções no Back-end.',
    areas: ['Full Stack', 'Front-end', 'Back-end', 'APIs', 'UI/UX', 'Dados'],
    technologies: [
      'Angular 19',
      'TypeScript',
      'RxJS',
      'Bootstrap',
      'ApexCharts',
      'NestJS',
      'PostgreSQL',
    ],
    links: [
      {
        type: 'repository',
        label: 'Ver projeto no GitHub',
        url: 'https://github.com/JonathanJHK/CadastroFormulario',
      },
    ],
    cover: {
      src: 'images/projects/monitoramento-incendios/cover.webp',
      alt: 'Dashboard da plataforma de monitoramento de incêndios',
    },
    caseStudy: {
      context:
        'A solução permite que empresas e associados registrem ocorrências de incêndio e acompanhem os dados por meio de formulários, filtros, relatórios e painéis.',

      challenge:
        'Construir uma aplicação com diferentes perfis de acesso, formulários extensos, visualização de dados e notificações sem um design pronto para seguir.',

      solution:
        'Criei o design e desenvolvi todo o Front-end com Angular. Estruturei autenticação, guards, interceptors, formulários, tabelas paginadas, filtros e gráficos. Posteriormente, também realizei correções e evoluções no Back-end.',

      highlights: [
        'Dashboard com indicadores e gráficos',
        'Controle de acesso por perfil',
        'Cadastro e acompanhamento de ocorrências',
        'Relatórios e notificações',
        'Temas claro e escuro',
      ],

      learnings:
        'Esse projeto ampliou minha visão sobre o produto completo, desde a criação da interface até a integração com APIs, persistência de dados e manutenção do Back-end.',
    },
    gallery: [
      {
        src: '/images/projects/monitoramento-incendios/dashboard-light.webp',
        alt: 'Dashboard de ocorrências no tema claro',
        caption: 'Dashboard com indicadores, filtros e gráficos de acompanhamento.',
      },
      {
        src: '/images/projects/monitoramento-incendios/occurrence-form-light.webp',
        alt: 'Formulário de cadastro de ocorrência no tema claro',
        caption: 'Formulário para registrar informações mensais sobre ocorrências.',
      },
      {
        src: '/images/projects/monitoramento-incendios/member-create-light.webp',
        alt: 'Formulário de cadastro de membro no tema claro',
        caption: 'Cadastro de membros vinculados à plataforma.',
      },
      {
        src: '/images/projects/monitoramento-incendios/notification-create-dark.webp',
        alt: 'Cadastro de notificação no tema escuro',
        caption: 'Criação de notificações simples ou recorrentes no tema escuro.',
      },
      {
        src: '/images/projects/monitoramento-incendios/architecture.svg',
        alt: 'Diagrama da arquitetura da plataforma de monitoramento',
        caption: 'Integração entre Front-end, API e banco de dados.',
      },
    ],
  },
  {
    slug: 'gestao-fiscal',
    featured: true,
    title: 'Gestão Fiscal',
    category: 'Estoque e emissão de notas fiscais',
    period: '15 a 21 de agosto de 2026',
    team: 'Projeto individual',
    status: 'Desafio técnico entregue',
    summary:
      'Aplicação Full Stack para cadastrar produtos, controlar estoque e criar notas fiscais com múltiplos itens.',
    contribution:
      'Desenvolvi sozinho o Front-end, os microsserviços, a persistência, a integração entre as APIs e o ambiente Docker.',
    areas: ['Full Stack', 'Front-end', 'Back-end', 'APIs'],
    technologies: [
      'Angular 20',
      'TypeScript',
      'PrimeNG',
      'Tailwind CSS',
      'C#',
      '.NET 10',
      'PostgreSQL',
      'Docker',
    ],
    links: [
      {
        type: 'repository',
        label: 'Ver projeto no GitHub',
        url: 'https://github.com/JonathanJHK/Korp_Teste_JonathanHeidyKinjo',
      },
    ],
    cover: {
      src: 'images/projects/gestao-fiscal/cover.webp',
      alt: 'Interface do sistema de estoque e emissão de notas fiscais',
    },
    caseStudy: {
      context:
        'Projeto desenvolvido individualmente como desafio técnico para representar um fluxo de estoque e faturamento dividido entre diferentes serviços.',

      challenge:
        'Entregar em um prazo curto uma solução Full Stack funcional, mantendo consistência do estoque e evitando que uma mesma operação fosse processada mais de uma vez.',

      solution:
        'Desenvolvi o Front-end em Angular e dois microsserviços em .NET, utilizando PostgreSQL e Docker. No processo de baixa de estoque, apliquei transação, controle de concorrência e idempotência.',

      highlights: [
        'Cadastro e consulta de produtos',
        'Criação de notas fiscais com múltiplos itens',
        'Baixa automática de estoque',
        'Idempotência e controle de concorrência',
        'Ambiente organizado com Docker',
      ],

      learnings:
        'O desafio fortaleceu meus conhecimentos em arquitetura distribuída, integração entre serviços, regras de negócio e tratamento de cenários que poderiam causar inconsistência nos dados.',
    },
    gallery: [
      {
        src: '/images/projects/gestao-fiscal/products-list.webp',
        alt: 'Listagem de produtos e estoque',
        caption: 'Consulta dos produtos e respectivos saldos em estoque.',
      },
      {
        src: '/images/projects/gestao-fiscal/product-create-dialog.webp',
        alt: 'Janela de cadastro de produto',
        caption: 'Cadastro de produto utilizando um dialog do PrimeNG.',
      },
      {
        src: '/images/projects/gestao-fiscal/invoices-list.webp',
        alt: 'Listagem de notas fiscais',
        caption: 'Notas fiscais organizadas por status e data de emissão.',
      },
      {
        src: '/images/projects/gestao-fiscal/new-invoice.webp',
        alt: 'Formulário de criação de nota fiscal',
        caption: 'Criação de uma nota fiscal com vários produtos e quantidades.',
      },
      {
        src: '/images/projects/gestao-fiscal/invoice-details.webp',
        alt: 'Detalhes de uma nota fiscal',
        caption: 'Visualização dos produtos e quantidades registrados na nota.',
      },
      {
        src: '/images/projects/gestao-fiscal/architecture.svg',
        alt: 'Diagrama da arquitetura do sistema de gestão fiscal',
        caption: 'Integração entre Angular, microsserviços .NET e PostgreSQL.',
      },
    ],
  },
] as const satisfies readonly PortfolioProject[];
