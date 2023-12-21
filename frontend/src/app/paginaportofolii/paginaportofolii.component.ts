import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {PortofoliuComponent} from '../portofoliu/portofoliu.component';
import {FormComponent} from '../form/form.component';
@Component({
  selector: 'app-paginaportofolii',
  standalone: true,
  imports: [HeaderComponent, PortofoliuComponent, FormComponent],
  templateUrl: './paginaportofolii.component.html',
  styleUrl: './paginaportofolii.component.css'
})
export class PaginaportofoliiComponent {

}
