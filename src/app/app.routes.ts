import { Routes } from '@angular/router';
import { About } from './about/about';
import { Blog } from './blog/blog';

export const routes: Routes = 
[
  {path: '', component: About},
  {path: 'blog', component: Blog}
];
