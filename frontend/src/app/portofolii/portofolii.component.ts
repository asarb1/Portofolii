import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PortofoliiService } from '../portofolii.service';
import { Portofoliu } from '../portofoliu';

@Component({
  selector: 'app-portofolii',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portofolii.component.html',
  styleUrl: './portofolii.component.css'
})
export class PortofoliiComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
      portofoliiService:PortofoliiService = inject(PortofoliiService);
      portofolii:Portofoliu | undefined;
      portofoliu:Portofoliu[] =  []
      constructor() {
          const portofoliuId = this.route.snapshot.params['id'];
          this.portofolii=this.portofoliiService.getPortofoliosById(portofoliuId);
          this.portofoliu = this.portofoliiService.getAllPortofolios();
      }
}
