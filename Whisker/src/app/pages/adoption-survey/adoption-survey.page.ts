import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonSlides } from '@ionic/angular';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-adoption-survey',
  templateUrl: './adoption-survey.page.html',
  styleUrls: ['./adoption-survey.page.scss'],
})
export class AdoptionSurveyPage implements OnInit {

  @ViewChild('mySlider')  slides: IonSlides;

  contact: FormGroup;
  address: FormGroup;
  housing: FormGroup;
  landlord: FormGroup;
  experience: FormGroup;
  vetExperience: FormGroup;
  household: FormGroup;
  species: FormGroup;
  genderAge: FormGroup;
  hairColor: FormGroup;
  breedWeight: FormGroup;
  future: FormGroup;
  barnCat: FormGroup;
  cat: FormGroup;
  dog: FormGroup;

  slideNumber: number;
  numSlides: number;

  locked: boolean = false;

  constructor(private fb: FormBuilder) {
    this.contact = fb.group({
      first: ["", Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(0)])],
      last: ["", Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(0)])],
      email: ["", Validators.compose([Validators.required])],
      phone: ["", Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10)])],
    });

    this.address = fb.group({
      street: ["", Validators.required],
      city: ["", Validators.required],
      state: ["", Validators.required],
      zip: ["", Validators.required],
      country: ["", Validators.required],
    });

    this.housing = fb.group({
      housingOwnership: ["", Validators.required],
      housingRestrictionsYesNo: ["", Validators.required],
      housingRestrictionsSelections: "",
    });

    this.landlord = fb.group({
      landlordName: "",
      landlordPhone: "",
      landlordEmail: "",
      contactLandlord: "",
      contactLandlordReason: "",
    });

    this.experience = fb.group({
      ownershipExperience: ["", Validators.required],
    });

    this.vetExperience = fb.group({
      vetExperience: "",
      vetName: "",
      vetPhone: "",
      surrendered: "",
      surrenderedReason: "",
    });

    this.household = fb.group({
      allergies: ["", Validators.required],
      allergiesSpecified: "",
      energyLevel: "",
    });

    this.species = fb.group({
      species: ["", Validators.required],
    });

    this.genderAge = fb.group({
      gender: ["", Validators.required],
      genderRating: ["", Validators.required],
      age: "",
      ageRating: ["", Validators.required],
    })

    this.hairColor = fb.group({
      hair: ["", Validators.required],
      hairRating: ["", Validators.required],
      catColors: "",
      dogColors: "",
      colorRating: "",
    });

    this.breedWeight = fb.group({
      catBreeds: "",
      dogBreeds: "",
      breedRating: "",
      weight: "",
      weightRating: "",
    });

    this.future = fb.group({
      reasonsToReturn: ["", Validators.required],
      student: "",
      graduationDate: "",
      moving: "",
      moveDate: "",
    });

    this.barnCat = fb.group({
      catHousing: "",
      catHousingOther: "",
      livingFullTime: "",
      primaryCaregiver: "",
      propertyCaregiver: "",
      otherOwnedAnimalsYesNo: "",
      otherOwnedAnimals: "",
      barnCatPersonality: "",
      barnCatPrecautions: "",
    });

    this.cat = fb.group({
      declawing: "",
      catIndoorOutdoor: "",
    });

    this.dog = fb.group({
      dogIndoorOutdoor: ""
    });
  }

  ngOnInit() {
    setTimeout(() => {
      if(this.slides) {
        this.slides.lockSwipes(true);
        this.slides.length().then(num => {this.numSlides = num; });
        this.slides.getActiveIndex().then(num => {this.slideNumber = ++num; });
      }
      else setTimeout(() => {
        this.slides.lockSwipes(true);
        this.slides.length().then(num => {this.numSlides = num; });
        this.slides.getActiveIndex().then(num => {this.slideNumber = ++num; });
      }, 1000);
    }, 1000);
  }
  
  print(page: FormGroup) {
    console.log(page.value);
  }

  validInputs(page: FormGroup) {
    this.print(page);
    if(!page.valid) {
      alert("Invalid input");
      return false;
    }
    return true;
  }

  swipeNext(page: FormGroup) {
    if(this.validInputs(page) == true) {
      this.slides.lockSwipes(false);
      this.slides.slideNext();
      this.slideNumber++;
      this.slides.lockSwipes(true);
    }
  }

  swipePrev() {
    this.slides.lockSwipes(false);
    this.slides.slidePrev();
    this.slideNumber--;
    this.slides.lockSwipes(true);
  }
}
