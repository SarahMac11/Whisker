import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonSlides} from '@ionic/angular';
import { ViewChild } from '@angular/core'

@Component({
  selector: 'app-adoption-survey',
  templateUrl: './adoption-survey.page.html',
  styleUrls: ['./adoption-survey.page.scss'],
})
export class AdoptionSurveyPage implements OnInit {

  @ViewChild('mySlider')  slides: IonSlides;
  
  adoptionSurvey: FormGroup;

  constructor(private fb: FormBuilder) {
    this.adoptionSurvey = fb.group({
      first: ["", Validators.required],
      last: ["", Validators.required],
      email: ["", Validators.required],
      phone: ["", Validators.required],
      street: ["", Validators.required],
      city: ["", Validators.required],
      state: ["", Validators.required],
      zip: ["", Validators.required],
      country: ["", Validators.required],
      housingOwnership: ["", Validators.required],
      housingRestrictionsYesNo: ["", Validators.required],
      housingRestrictionsSelections: "",
      landlordName: "",
      landlordPhone: "",
      landlordEmail: "",
      contactLandlord: "",
      contactLandlordReason: "",
      ownershipExperience: ["", Validators.required],
      vetExperience: "",
      vetName: "",
      vetPhone: "",
      surrendered: "",
      surrenderedReason: "",
      allergies: ["", Validators.required],
      allergiesSpecified: "",
      energyLevel: "",
      species: ["", Validators.required],
      gender: ["", Validators.required],
      genderRating: ["", Validators.required],
      age: "",
      ageRating: ["", Validators.required],
      hair: ["", Validators.required],
      hairRating: ["", Validators.required],
      catColors: "",
      dogColors: "",
      colorRating: "",
      catBreeds: "",
      dogBreeds: "",
      breedRating: "",
      weight: "",
      weightRating: "",
      reasonsToReturn: ["", Validators.required],
      student: "",
      graduationDate: "",
      moving: "",
      moveDate: "",
      catHousing: "",
      catHousingOther: "",
      livingFullTime: "",
      primaryCaregiver: "",
      propertyCaregiver: "",
      otherOwnedAnimalsYesNo: "",
      otherOwnedAnimals: "",
      barnCatPersonality: "",
      barnCatPrecautions: "",
      declawing: "",
      catIndoorOutdoor: "",
      dogIndoorOutdoor: ""
    });
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.adoptionSurvey.value);
  }

  swipeNext(){
    this.slides.slideNext();
  }
}
