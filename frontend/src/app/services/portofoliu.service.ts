import { Injectable } from '@angular/core';
import { Portofoliu } from '../shared/models/Portofoliu';
import {sample_portofolios} from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class PortofoliuService {

  constructor() { }

  getAll():Portofoliu[]{
    return sample_portofolios;
  }
}
