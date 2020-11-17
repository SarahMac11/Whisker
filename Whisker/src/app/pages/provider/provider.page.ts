import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-provider',
  templateUrl: './provider.page.html',
  styleUrls: ['./provider.page.scss'],
})
export class ProviderPage implements OnInit {

  providerRequest: FormGroup;
  isSubmitting: boolean = false;
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.providerRequest = fb.group({
      name: ["", Validators.required],
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
    this.isSubmitting = true;
    this.loginService.providerApply(this.providerRequest.value).subscribe((res: {success: boolean})=> {
      if (res.success) {
        this.router.navigateByUrl('/confirmProviderApplication');
      }
      else {
        this.isSubmitting = false;
      }
    });
  }
}
