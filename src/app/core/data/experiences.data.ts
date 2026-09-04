import { ProfessionalExperience } from '../models/experience.model';

export const EXPERIENCES = [
  {
    organization: 'Ministério Público de Mato Grosso do Sul — SEPLANGE',
    role: 'Residente — Suporte à Área de Projetos',
    period: 'Março de 2024 a setembro de 2025',
    summary:
      'Atuação com tecnologia, dados e projetos institucionais para apoiar análises e decisões estratégicas.',
    highlights: [
      'Desenvolvimento de mais de 8 painéis institucionais em Power BI',
      'Tratamento, organização e padronização de dados de diferentes áreas',
      'Aplicação de princípios de UI/UX na construção de dashboards',
      'Organização de projetos institucionais para participação em premiações',
    ],
    technologies: ['Power BI', 'Modelagem de dados', 'UI/UX', 'OKRs'],
  },
  {
    organization: 'Engrene Connecting Ideas',
    role: 'Desenvolvedor Web Full Stack',
    period: 'Março de 2019 a novembro de 2025',
    summary:
      'Desenvolvimento e evolução de aplicações web para diferentes segmentos, participando de várias etapas do produto.',
    highlights: [
      'Desenvolvimento de mais de 4 aplicações web completas',
      'Criação de interfaces responsivas e componentes reutilizáveis',
      'Integração e manutenção de APIs REST com Laravel e Express.js',
      'Customização de projetos WordPress, código e plugins',
    ],
    technologies: [
      'Angular',
      'TypeScript',
      'Node.js',
      'Laravel',
      'PostgreSQL',
      'MySQL',
      'WordPress',
    ],
  },
] as const satisfies readonly ProfessionalExperience[];
