import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/pages/home/home').then((component) => component.Home),
    title: 'Jonathan Kinjo | Desenvolvedor de Software',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
