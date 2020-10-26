import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-session-expired',
  templateUrl: './session-expired.page.html',
  styleUrls: ['./session-expired.page.scss'],
})
export class SessionExpiredPage implements OnInit {

  constructor(private router: Router, private loginService: LoginService) {
    if(loginService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
   }

  ngOnInit() {
  }

}

