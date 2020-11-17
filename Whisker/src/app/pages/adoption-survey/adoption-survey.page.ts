import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonSlides } from '@ionic/angular';
import { ViewChild } from '@angular/core';
import catBreeds from 'src/assets/catBreeds.json';
import dogBreeds from 'src/assets/dogBreeds.json';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-adoption-survey',
  templateUrl: './adoption-survey.page.html',
  styleUrls: ['./adoption-survey.page.scss'],
})
export class AdoptionSurveyPage implements OnInit {

  catBreeds: Array<String> = catBreeds;
  dogBreeds: Array<String> = dogBreeds;

  @ViewChild('slider')  slides: IonSlides;

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
  updatingNums: boolean = false;

  locked: boolean = false;

  constructor(private fb: FormBuilder, private loginService: LoginService) {
    this.contact = fb.group({
      first: ["", Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(0)])],
      last: ["", Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(0)])],
      email: ["", Validators.compose([Validators.required])],
      phone: ["", Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10)])],
    });

    if (this.loginService.user) {
      this.contact.value.first = this.loginService.user.firstname;
      this.contact.value['last'] = this.loginService.user.lastname;
      this.contact.value['email'] = this.loginService.user.email;
    }

    this.address = fb.group({
      street: ["", Validators.required],
      city: ["", Validators.required],
      state: ["", Validators.required],
      zip: ["", Validators.required],
      country: ["", Validators.required],
    });
    this.address.valueChanges.subscribe(() => this.updateSlideNums());

    this.housing = fb.group({
      housingOwnership: ["", Validators.required],
      housingRestrictionsYesNo: ["", Validators.required],
      housingRestrictionsSelections: "",
    });
    this.housing.valueChanges.subscribe(() => this.updateSlideNums());

    this.landlord = fb.group({
      landlordName: "",
      landlordPhone: "",
      landlordEmail: "",
      contactLandlord: "",
      contactLandlordReason: "",
    });
    this.landlord.valueChanges.subscribe(() => this.updateSlideNums());

    this.experience = fb.group({
      ownershipExperience: ["", Validators.required],
    });
    this.experience.valueChanges.subscribe(() => this.updateSlideNums());

    this.vetExperience = fb.group({
      vetExperience: "",
      vetName: "",
      vetPhone: "",
      surrendered: "",
      surrenderedReason: "",
    });
    this.vetExperience.valueChanges.subscribe(() => this.updateSlideNums());

    this.household = fb.group({
      allergies: ["", Validators.required],
      allergiesSpecified: "",
      energyLevel: "",
    });
    this.household.valueChanges.subscribe(() => this.updateSlideNums());

    this.species = fb.group({
      species: ["", Validators.required],
    });
    this.species.valueChanges.subscribe(() => this.updateSlideNums());

    this.genderAge = fb.group({
      gender: ["", Validators.required],
      genderRating: ["", Validators.required],
      age: "",
      ageRating: ["", Validators.required],
    });
    this.genderAge.valueChanges.subscribe(() => this.updateSlideNums());

    this.hairColor = fb.group({
      hair: ["", Validators.required],
      hairRating: ["", Validators.required],
      catColors: "",
      dogColors: "",
      colorRating: "",
    });
    this.hairColor.valueChanges.subscribe(() => this.updateSlideNums());

    this.breedWeight = fb.group({
      catBreeds: "",
      dogBreeds: "",
      breedRating: "",
      weight: "",
      weightRating: "",
    });
    this.breedWeight.valueChanges.subscribe(() => this.updateSlideNums());

    this.future = fb.group({
      reasonsToReturn: ["", Validators.required],
      student: "",
      graduationDate: "",
      moving: "",
      moveDate: "",
    });
    this.future.valueChanges.subscribe(() => this.updateSlideNums());

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
    this.barnCat.valueChanges.subscribe(() => this.updateSlideNums());

    this.cat = fb.group({
      declawing: "",
      catIndoorOutdoor: "",
    });
    this.cat.valueChanges.subscribe(() => this.updateSlideNums());

    this.dog = fb.group({
      dogIndoorOutdoor: ""
    });
    this.dog.valueChanges.subscribe(() => this.updateSlideNums());
  }

  ngOnInit() {
    setTimeout(() => {
      if(this.slides) {
        this.slides.lockSwipes(true);
        this.slides.length().then(num => {this.numSlides = num; });
        this.slides.getActiveIndex().then(num => {this.slideNumber = ++num; });
      }
      else
      setTimeout(() => {
        this.slides.lockSwipes(true);
        this.slides.length().then(num => {this.numSlides = num; });
        this.slides.getActiveIndex().then(num => {this.slideNumber = ++num; });
      }, 1000);
    }, 1000);
  }

  updateSlideNums() {
    this.updatingNums = true;
    setTimeout(() => {
      this.slides.update().then(() => {
        this.slides.length().then(num => {console.log(num); this.numSlides = num; this.updatingNums = false; });
        this.slides.getActiveIndex().then(num => {this.slideNumber = ++num; });
      });
    }, 500);
  }
  
  print(page: FormGroup) {
    console.log(page.value);
  }

  validInputs(page: FormGroup) {
    // this.print(page);
    // if(!page.valid) {
    //   alert("Invalid input");
    //   return false;
    // }
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
