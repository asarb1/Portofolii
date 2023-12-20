import { Routes } from '@angular/router';
import {PortofoliuComponent} from './portofoliu/portofoliu.component';
import {PortofoliiComponent} from './portofolii/portofolii.component';

export const routes: Routes = [
  {
    path: '',
    component: PortofoliuComponent,
    title: 'Portofoliu'
  },
  {
    path: 'portofoliu/:id',
    component: PortofoliiComponent,
    title: 'Detalii Portofoliu'
  }
];
