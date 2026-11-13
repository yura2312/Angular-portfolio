import { Routes } from '@angular/router';
import { About } from './about/about';

export const routes: Routes = [
  { path: '', component: About, title: 'Gabriel Romao 大輝 丸山 — Engenheiro de Software' },
  { path: 'blog', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
