import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    setTimeout(() => {
      if(this.loginService.isLoggedIn()) {
        this.router.navigateByUrl('/home');
      }
    }, 1000);
  }

  async googleLogin() {
    try{
      await this.loginService.signInWithGoogle().then(()=> {
        this.router.navigateByUrl('/home');
      });
    } catch(e) {
      console.log(e);
    }
  }

  async fbLogin() {
    try {
      await this.loginService.signInWithFacebook().then(()=> {
        this.router.navigateByUrl('/home');
      });
    } catch(e) {
      console.log(e);
    }
  }


}
