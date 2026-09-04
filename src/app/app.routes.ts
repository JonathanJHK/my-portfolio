import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/site-layout/site-layout').then((component) => component.SiteLayout),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/home/pages/home/home').then((component) => component.Home),
        title: 'Jonathan Kinjo | Desenvolvedor Web',
      },
      {
        path: 'projetos/:slug',
        loadComponent: () =>
          import('./features/projects/pages/project-detail/project-detail').then(
            (component) => component.ProjectDetail,
          ),
        title: 'Projeto | Jonathan Kinjo',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
