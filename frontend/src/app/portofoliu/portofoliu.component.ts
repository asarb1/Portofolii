import { CommonModule } from '@angular/common';
import { Component, Input, inject} from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Portofoliu } from '../portofoliu';
import {PortofoliiService} from '../portofolii.service';
import { ActivatedRoute } from '@angular/router';

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
goToUrl(url:any):void{
  window.location.href=url;
}
deletePortofolio(id: any){
  const objWithIdIndex = this.portofolii.findIndex((obj:any) => obj.id === id);
  this.portofolii.splice(objWithIdIndex, 1);
}

}
