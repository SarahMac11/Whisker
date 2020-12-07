import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';
import catBreeds from 'src/assets/catBreeds.json';
import dogBreeds from 'src/assets/dogBreeds.json';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  catBreeds: Array<String> = catBreeds;
  dogBreeds: Array<String> = dogBreeds;

  addAnimal: FormGroup;
  addAnimalOriginalValue;
  
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router, private toastCtl: ToastController) {
    this.addAnimal = fb.group({
      type: ["", Validators.required],
      name: ["", Validators.required],
      catBreeds: "",
      dogBreeds: "",
      catColors: "",
      dogColors: "",
      weight: ["", Validators.required],
      size: ["", Validators.required],
      dob: ["", Validators.required],
      gender: ["", Validators.required],
      spayedneutered: ["", Validators.required],
      declawed: "",
      specialNeeds: ["", Validators.required],
      specialNeedsReason: "",
      hair: ["", Validators.required],
      training: ["", Validators.required],
      carelevel: ["", Validators.required],
      energyLevel: ["", Validators.required],
      environment: ["", Validators.required],
      microchipped: ["", Validators.required],
      goodWithCats: ["", Validators.required],
      goodWithDogs: ["", Validators.required],
      goodWithKids: ["", Validators.required],
      status: ["", Validators.required],
      bio: [""],
      url: [""],
      images: [[]]
    });
    this.addAnimalOriginalValue = this.addAnimal.value;
    let list = [];
  }

  ngOnInit() {
    if (!this.loginService.user || !this.loginService.user.providerId || this.loginService.user.providerId === "") {
      this.router.navigateByUrl('/home');
    }
  }

  addImage() {
    if(this.addAnimal.value.url.length > 0 && !this.addAnimal.controls.images.value.includes(this.addAnimal.value.url)) {
      this.addAnimal.value.images.push(this.addAnimal.value.url);
      this.addAnimal.controls.url.setValue("");
    }
  }
  submit() {
    this.loginService.addAnimal(Object.assign(this.addAnimal.value, {url: undefined})).subscribe(async(res: {ok: boolean, message: string}) => {
      if (res.ok) {
        this.addAnimal.reset(this.addAnimalOriginalValue);
        const toast = await this.toastCtl.create({
        message: 'Animal successfully added!',
        duration: 2500
        });
        toast.present();
      }
      else {
        const toast = await this.toastCtl.create({
          message: res.message,
          duration: 2500
        });
        toast.present();
      }
    });
  }
}
