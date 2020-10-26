import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { User } from '../../interfaces/User';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  isUsernameTaken: boolean = false;
  usernameVerified: boolean = false;
  isVerifyingUser: boolean = false;
  isRegistering: boolean = false;
  regError: boolean = false;
  regErrorMessage: string = '';
  passwordConfirmValidator(passwordControl: AbstractControl): ValidatorFn {
    return ((control: AbstractControl): {[key: string]: any} | null => {
      return (passwordControl.value === control.value) ? null : {
        'passwordError': 'Passwords do not match!'
      }
    });
  }
  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private route: ActivatedRoute, private router: Router) {
    if(loginService.isTokenPresent()) {
      this.router.navigate(['/home']);
    }
    this.registerForm = formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordConfirm: ['']
    });
    this.registerForm.get('passwordConfirm').setValidators([
      Validators.required,
      this.passwordConfirmValidator(this.registerForm.get('password'))
    ]);
  }

  checkUsername() {
    if (this.isVerifyingUser) return;
    this.isVerifyingUser = true;
    this.isUsernameTaken = false;
    this.usernameVerified = false;
    if (this.registerForm.value['username'] === '') {
      this.isVerifyingUser = false;
    }
    else {

    this.loginService.searchUser(this.registerForm.value['username']).subscribe((res: {found: boolean}) => {
      setTimeout(() => {
          if (res.found) {
            this.isUsernameTaken = true;
          }
          else {
            this.usernameVerified = true;
          }
          this.isVerifyingUser = false;
      }, 750);
    })
  }
  }
  isFormValid() {
    return this.registerForm.valid && this.registerForm.value['password'] === this.registerForm.value['passwordConfirm'];
  }

  showWarning(formControlName: string) : boolean {
    return (this.registerForm.get(formControlName).touched || this.registerForm.get(formControlName).dirty) && !this.registerForm.get(formControlName).valid;
  }
  getLabelColor(formControlName: string) : string {
    return (this.registerForm.get(formControlName) !== undefined && (this.registerForm.get(formControlName).touched || this.registerForm.get(formControlName).dirty) && !this.registerForm.get(formControlName).valid) ? "danger" : "dark";
  }
  ngOnInit() {
  }
  fieldMissing(): boolean {
    let missing = false;
    Object.entries(this.registerForm.controls).forEach(([key, control]) => {
      if (control.errors !== null) {
        if (control.errors.required !== undefined) {
          missing = true;
        }
      }
    });
    return missing;
  }
  isErrorPresent(controlName: string, errorKey: string): boolean {
    return (this.registerForm.get(controlName).errors !== null && this.registerForm.get(controlName).errors[errorKey] !== undefined)
  }
  register() {
    if (!this.registerForm.valid || this.isUsernameTaken) return;
    this.regError = false;
    let userData: User = {
      id: '', // id set by backend
      username: this.registerForm.value['username'],
      password: this.registerForm.value['password'],
      firstname: this.registerForm.value['firstname'],
      lastname: this.registerForm.value['lastname'],
      email: this.registerForm.value['email']
    }
    this.isRegistering = true;
    this.loginService.addUser(userData).subscribe((res: { success: boolean, error?: string}) => {
      if (res.success) {
        this.router.navigate(['/confirmRegistration']);
      }
      else {
        this.regError = true;
        this.regErrorMessage = (res.error !== undefined) ? res.error : '';
      }
      this.isRegistering = false;

      
    }, err => {
      console.dir(err)
      setTimeout(() => {
        this.isRegistering = false;
        this.regError = true;
        this.regErrorMessage = (err.error !== undefined) ? 'Registration unsuccessful: ' + err.error.error : 'Registration unsucessful, please try again.'
      }, 2000);
    });
  }
  disableSubmit() {
    this.usernameVerified = false;
  }

}
