import { Component, OnInit } from '@angular/core';
import { LoginPage } from '../login/login.page'
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-registration',
  templateUrl: './confirm-registration.page.html',
  styleUrls: ['./confirm-registration.page.scss'],
})
export class ConfirmRegistrationPage implements OnInit {

  constructor(private loginService: LoginService, private router: Router) {
    if(loginService.isTokenPresent()) {
      this.router.navigate(['/home']);
    }
   }

  ngOnInit() {
  }

}