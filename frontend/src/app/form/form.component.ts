import { Component, Input, inject } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { FormGroup, FormControl } from "@angular/forms";
import { Portofoliu } from '../portofoliu';
import { PortofoliiService } from '../portofolii.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  portofoliu:Portofoliu[] =  []
  portofoliiService:PortofoliiService = inject(PortofoliiService);
  formData: any = {}
updatePortofolio() {
this.portofoliiService.addPortofolio(this.formData);
this.formData={};
}
}
