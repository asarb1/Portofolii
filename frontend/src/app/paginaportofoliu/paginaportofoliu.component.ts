import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {PortofoliiComponent} from '../portofolii/portofolii.component';
@Component({
  selector: 'app-paginaportofoliu',
  standalone: true,
  imports: [HeaderComponent,PortofoliiComponent],
  templateUrl: './paginaportofoliu.component.html',
  styleUrl: './paginaportofoliu.component.css'
})
export class PaginaportofoliuComponent {

}
