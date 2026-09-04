import { PortfolioProject } from '../models/project.model';

export const PROJECTS = [
  {
    slug: 'gestao-fisioterapia',
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
  },
  {
    slug: 'monitoramento-incendios',
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
  },
  {
    slug: 'gestao-fiscal',
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
  },
] as const satisfies readonly PortfolioProject[];
