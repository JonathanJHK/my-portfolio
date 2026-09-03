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
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
