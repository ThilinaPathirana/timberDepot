import { Routes } from '@angular/router';
import {ScatlingComponent} from './scatling/scatling.component';
import {MainComponent} from './main/main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    data: { title: 'main' },
  },
  {
    path: 'scantling',
    component: ScatlingComponent,
    data: { title: 'scantling' },
  }
];
