import { Injectable } from '@angular/core';
import { Adopter } from 'src/app/types/adopter';
import { Animal } from 'src/app/types/animal';

@Injectable({
  providedIn: 'root'
})
export class CompatibilityService {
  testAdopter: Adopter;
  testBarnCat: Animal;
  testCat: Animal;
  testDog: Animal;

  constructor() { }

  getCompatibility(adopter: Adopter, animal: Animal) {
    var compatibility = 0;

    // species compatibility
    if(adopter.species.includes(animal.type)) {
      compatibility += 10;
    }

    // gender compatibility
    if(adopter.gender.includes(animal.gender)) {
      compatibility += 10;
    }
    else {
      compatibility += (10 - adopter.genderRating);
    }

    // age compatibility
    var age = (new Date().getTime() - new Date(animal.dob).getTime()) / (1000 * 3600 * 24);
    var ageGroup;
    if(age < 365) {
      ageGroup = "Young (Under 1 Year)";
    }
    else if (age > 365 && age < 2555) {
      ageGroup = "Adult (1 Year - 7 Years)";
    }
    else {
      ageGroup = "Senior (7+ Years)";
    }
    if(adopter.age.includes(ageGroup)) {
      compatibility += 10;
    }
    else {
      compatibility += (10 - adopter.ageRating);
    }

    // color compatibility
    if(adopter.species.includes("Barn Cat") || adopter.species.includes("Cat")) {
      if(animal.colors.length <= adopter.catColors.length) {
        for(let i = 0; i < animal.colors.length; i++) {
          if(adopter.catColors.includes(animal.colors[i])) {
            compatibility += (10 / adopter.catColors.length);
          }
          else {
            compatibility += ((10 - adopter.colorRating) / adopter.catColors.length);
          }
        }
      }
      else {
        for(let i = 0; i < adopter.catColors.length; i++) {
          if(animal.colors.includes(adopter.catColors[i])) {
            compatibility += (10 / adopter.catColors.length);
          }
          else {
            compatibility += ((10 - adopter.colorRating) / adopter.catColors.length);
          }
        }
      }
    }
    else {
      if(animal.colors.length <= adopter.dogColors.length) {
        for(let i = 0; i < animal.colors.length; i++) {
          if(adopter.dogColors.includes(animal.colors[i])) {
            compatibility += (10 / adopter.dogColors.length);
          }
          else {
            compatibility += ((10 - adopter.colorRating) / adopter.dogColors.length);
          }
        }
      }
      else {
        for(let i = 0; i < adopter.dogColors.length; i++) {
          if(animal.colors.includes(adopter.dogColors[i])) {
            compatibility += (10 / adopter.dogColors.length);
          }
          else {
            compatibility += ((10 - adopter.colorRating) / adopter.dogColors.length);
          }
        }
      }
    }

    // hair compatibility
    if(adopter.hair.includes(animal.hairLength)) {
      compatibility += 10;
    }
    else {
      compatibility += (10 - adopter.hairRating);
    }

    // weight compatibility
    var weightGroup;
    for(let i = 0; i <= 100; i+=10) {
      if(animal.weight > i && animal.weight < (i + 10)) {
        weightGroup = i + " - " + (i + 10) + " lbs"
      }
      else {
        weightGroup = "100+ lbs"
      }
    }

    if(adopter.weight.includes(weightGroup)) {
      compatibility += 10;
    }
    else {
      compatibility += (10 - adopter.weightRating);
    }

    // breed compatibility
    if(adopter.species.includes("Barn Cat") || adopter.species.includes("Cat")) {
      if(animal.colors.length <= adopter.catBreeds.length) {
        for(let i = 0; i < animal.breed.length; i++) {
          if(adopter.catBreeds.includes(animal.breed[i])) {
            compatibility += (10 / adopter.catBreeds.length);
          }
          else {
            compatibility += ((10 - adopter.breedRating) / adopter.catBreeds.length);
          }
        }
      }
      else {
        for(let i = 0; i < adopter.catBreeds.length; i++) {
          if(animal.breed.includes(adopter.catBreeds[i])) {
            compatibility += (10 / adopter.catBreeds.length);
          }
          else {
            compatibility += ((10 - adopter.breedRating) / adopter.catBreeds.length);
          }
        }
      }
    }
    else {
      if(animal.breed.length <= adopter.dogBreeds.length) {
        for(let i = 0; i < animal.breed.length; i++) {
          if(adopter.dogBreeds.includes(animal.breed[i])) {
            compatibility += (10 / adopter.dogBreeds.length);
          }
          else {
            compatibility += ((10 - adopter.breedRating) / adopter.dogBreeds.length);
          }
        }
      }
      else {
        for(let i = 0; i < adopter.dogBreeds.length; i++) {
          if(animal.breed.includes(adopter.dogBreeds[i])) {
            compatibility += (10 / adopter.dogBreeds.length);
          }
          else {
            compatibility += ((10 - adopter.breedRating) / adopter.dogBreeds .length);
          }
        }
      }
    }

    // ownership experience
    if(adopter.ownershipExperience == "Some") {
      compatibility += 5;
    }
    if(adopter.ownershipExperience == "A Lot") {
      compatibility += 10;
    }

    // veterinary experience
    for(let i = 0; i < 3; i++) {
      compatibility += (10 / 3);
    }

    // energy level
    if(adopter.energyLevel == animal.energyLevel) {
      compatibility += 10;
    }
    if(adopter.energyLevel == "Moderate" && (animal.energyLevel == "Low" || animal.energyLevel == "High")) {
      compatibility += 5;
    }
    if((adopter.energyLevel == "Low" || adopter.energyLevel == "High") && animal.energyLevel == "Moderate") {
      compatibility += 5;
    }
    
    return compatibility;
  }
}
