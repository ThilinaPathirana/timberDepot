import { Routes } from '@angular/router';
import {ScatlingComponent} from './scatling/scatling.component';
import {MainComponent} from './main/main.component';
import {TimberComponent} from './timber/timber.component';
import {ScantlingOtherComponent} from './scantling-other/scantling-other.component';

export const routes: Routes = [
  {
    path: 'timber',
    component: MainComponent,
    data: { title: 'main' },
    children: [
      {
        path: 'scantling',
        component: ScatlingComponent,
        data: { title: 'scantling' },
      },
      {
        path: 'scantling-other',
        component: ScantlingOtherComponent,
        data: { title: 'scantling-other' },
      },
      {
        path: 'planks',
        component: TimberComponent,
        data: { title: 'planks' },
      }
    ]
  },
  {
    path: '',
    component: MainComponent,
    data: { title: 'main' },
    children: [
      {
        path: '',
        component: TimberComponent,
        data: { title: 'planks' },
      }
    ]
  },
  // {
  //   path: 'scantling',
  //   component: ScatlingComponent,
  //   data: { title: 'scantling' },
  // },
  // {
  //   path: 'planks',
  //   component: TimberComponent,
  //   data: { title: 'planks' },
  // }
];
