export type ProjectSlug = 'gestao-fisioterapia' | 'monitoramento-incendios' | 'gestao-fiscal';

export type ProjectArea = 'Front-end' | 'Back-end' | 'Full Stack' | 'APIs' | 'UI/UX' | 'Dados';

export type ProjectLinkType = 'repository' | 'design';

export interface ProjectLink {
  readonly type: ProjectLinkType;
  readonly label: string;
  readonly url: string;
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
}
