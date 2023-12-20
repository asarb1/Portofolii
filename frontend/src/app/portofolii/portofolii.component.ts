import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PortofoliiService } from '../portofolii.service';
import { Portofoliu } from '../portofoliu';

@Component({
  selector: 'app-portofolii',
  standalone: true,
  imports: [],
  templateUrl: './portofolii.component.html',
  styleUrl: './portofolii.component.css'
})
export class PortofoliiComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
      portofolii = -1;
      constructor() {
          this.portofolii = Number(this.route.snapshot.params['id']);
      }
}
