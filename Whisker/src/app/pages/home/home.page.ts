import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { 
    setTimeout(() => {
      if(!loginService.isLoggedIn()) {
        this.router.navigateByUrl('');
      }
    }, 1000);
  }

  ngOnInit() {
  }

}
