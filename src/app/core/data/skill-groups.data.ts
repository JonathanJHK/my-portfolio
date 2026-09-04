import { SkillGroup } from '../models/skill-group.model';

export const SKILL_GROUPS = [
  {
    title: 'Front-end',
    description: 'Principal área da minha experiência prática com aplicações web.',
    items: [
      'Angular',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'RxJS',
      'PrimeNG',
      'Tailwind CSS',
      'Bootstrap',
    ],
  },
  {
    title: 'Back-end e APIs',
    description: 'Desenvolvimento, manutenção e integração entre aplicações e serviços.',
    items: [
      'Node.js',
      'Express.js',
      'NestJS',
      'PHP',
      'Laravel',
      'APIs REST',
      'C# / ASP.NET Core — básico',
      'Integração com Spring Boot',
    ],
  },
  {
    title: 'Dados e BI',
    description: 'Persistência, tratamento e apresentação de informações para análise.',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Power BI', 'Modelagem de dados'],
  },
  {
    title: 'Ferramentas e práticas',
    description: 'Recursos utilizados para organizar, entregar e evoluir os projetos.',
    items: [
      'Git',
      'GitHub',
      'GitLab',
      'Docker',
      'Componentização',
      'Responsividade',
      'UI/UX',
      'Código limpo',
    ],
  },
] as const satisfies readonly SkillGroup[];
