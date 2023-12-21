import { Routes } from '@angular/router';
import {PortofoliuComponent} from './portofoliu/portofoliu.component';
import {PaginaportofoliuComponent} from './paginaportofoliu/paginaportofoliu.component';
import {PaginaportofoliiComponent} from './paginaportofolii/paginaportofolii.component';

export const routes: Routes = [
  {
    path: '',
    component: PaginaportofoliiComponent,
    title: 'Detalii Portofoliu'
  },
  {
    path: 'portofoliu/:id',
    component: PaginaportofoliuComponent,
    title: 'Detalii Portofoliu'
  }
];
