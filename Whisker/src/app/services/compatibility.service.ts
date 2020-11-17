import { Injectable } from '@angular/core';
import { Adopter } from 'src/app/types/adopter';
import { Animal } from 'src/app/types/animal';

@Injectable({
  providedIn: 'root'
})
export class CompatibilityService {

  constructor() { }

  getCompatibility(adopter: Adopter, animal: Animal) {
    
  }
}
