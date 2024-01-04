import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { PortofoliuComponent } from './portofoliu/portofoliu.component';
import { FormComponent } from './form/form.component';
import {HeaderComponent} from './header/header.component';
import {PortofoliiComponent} from './portofolii/portofolii.component';
import {PaginaportofoliuComponent} from './paginaportofoliu/paginaportofoliu.component';
import {PaginaportofoliiComponent} from './paginaportofolii/paginaportofolii.component';
import {EditareportofoliuComponent} from './editareportofoliu/editareportofoliu.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, PortofoliuComponent, FormComponent, HeaderComponent, PortofoliiComponent, PaginaportofoliuComponent, PaginaportofoliiComponent, EditareportofoliuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
