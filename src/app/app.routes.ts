import { Routes } from '@angular/router';
import { SaveTheDateComponent } from './save-the-date/save-the-date.component';

export const routes: Routes = [
  {
    path: '',
    component: SaveTheDateComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
