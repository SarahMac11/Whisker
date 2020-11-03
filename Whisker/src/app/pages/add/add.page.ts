import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
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
      type: "",
      status: "",
    });
  }

  ngOnInit() {
  }
  submit() {
    console.dir(this.petFormGroup.value["type"]);
  }
}
