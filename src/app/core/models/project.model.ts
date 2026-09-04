export type ProjectSlug = 'gestao-fisioterapia' | 'monitoramento-incendios' | 'gestao-fiscal';

export type ProjectArea = 'Front-end' | 'Back-end' | 'Full Stack' | 'APIs' | 'UI/UX' | 'Dados';

export type ProjectLinkType = 'repository' | 'design';

export interface ProjectLink {
  readonly type: ProjectLinkType;
  readonly label: string;
  readonly url: string;
}

export interface ProjectCaseStudy {
  readonly context: string;
  readonly challenge: string;
  readonly solution: string;
  readonly highlights: readonly string[];
  readonly learnings: string;
}

export interface PortfolioProject {
  readonly slug: ProjectSlug;
  readonly title: string;
  readonly category: string;
  readonly period: string;
  readonly team: string;
  readonly status: string;
  readonly summary: string;
  readonly contribution: string;
  readonly areas: readonly ProjectArea[];
  readonly technologies: readonly string[];
  readonly links: readonly ProjectLink[];
  readonly cover: ProjectImage;
  readonly caseStudy: ProjectCaseStudy;
  readonly gallery: readonly ProjectImage[];
}

export interface ProjectImage {
  readonly src: string;
  readonly alt: string;
  readonly caption?: string;
}
