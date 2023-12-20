import { CommonModule } from '@angular/common';
import { Component, Input, inject} from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Portofoliu } from '../portofoliu';
import {PortofoliiService} from '../portofolii.service';
@Component({
  selector: 'app-portofoliu',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './portofoliu.component.html',
  styleUrl: './portofoliu.component.css'
})
export class PortofoliuComponent {
portofolii:Portofoliu[] =  []
portofoliiService:PortofoliiService = inject(PortofoliiService);
constructor() {
  this.portofolii = this.portofoliiService.getAllPortofolios();
}

}
