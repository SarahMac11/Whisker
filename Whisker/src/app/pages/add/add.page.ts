import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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


  petFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.petFormGroup = formBuilder.group({
      type: ["", Validators.required],
      name: ["", Validators.required],
      catBreeds: "",
      dogBreeds: "",
      weight: ["", Validators.required],
      dob: ["", Validators.required],
      gender: ["", Validators.required],
      declawed: "",
      specialNeeds: ["", Validators.required],
      specialNeedsReason: "",
      hair: ["", Validators.required],
      goodWithCats: ["", Validators.required],
      goodWithDogs: ["", Validators.required],
      goodWithKids: ["", Validators.required],
      status: ["", Validators.required]
    });
  }

  ngOnInit() {
  }
  submit() {
    console.log(this.petFormGroup.value);
  }
}
