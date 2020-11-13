import { Injectable } from '@angular/core';
import { TempFormat } from '../models/temp.interface';

@Injectable({
  providedIn: 'root'
})
export class StoreServiceService {

 

  celcius: string = "\u00B0C";

  constructor() { }
}
