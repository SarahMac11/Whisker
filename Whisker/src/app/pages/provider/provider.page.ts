import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-provider',
  templateUrl: './provider.page.html',
  styleUrls: ['./provider.page.scss'],
})
export class ProviderPage implements OnInit {

  providerRequest: FormGroup;
  constructor(private fb: FormBuilder) {
    this.providerRequest = fb.group({
      rescue: ["", Validators.required],
      street: ["", Validators.required],
      city: ["", Validators.required],
      state: ["", Validators.required],
      zip: ["", Validators.required],
      country: ["", Validators.required],
      website: ["", Validators.required],
      email: ["", Validators.required],
      phone: ["", Validators.required],
      types: ["", Validators.required],
      first: ["", Validators.required],
      last: ["", Validators.required],
      role: ["", Validators.required],
      contactEmail: ["", Validators.required]
    });
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.providerRequest.value);
  }
}
