import { Component } from '@angular/core';
import { Portofoliu } from '../shared/models/Portofoliu';
import { PortofoliuService } from '../services/portofoliu.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
portofolios:Portofoliu[];
constructor(private portofoliuService:PortofoliuService){
  this.portofolios = portofoliuService.getAll();
}
}
