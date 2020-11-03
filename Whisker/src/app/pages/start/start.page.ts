import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../../services/auth-guard.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { User } from '../../interfaces/User';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  constructor(
    private authService: AuthGuardService,
    private alertController: AlertController,
    private router: Router,
    private googlePlus: GooglePlus
  ) { }

  ngOnInit() {
  }

  async googleLogin() {
    // await this.googlePlus.login({}).then(res => {
    //    console.log(res.idToken);
    //    const credential = this.authService.GoogleAuthProvider.credential(res.idToken);
    //    this.firebaseAuth.auth.signInWithCredential(credential).then(res => {
    //       var obj = {
    //          uid: res.user.uid,
    //          displayName: res.user.displayName,
    //          email: res.user.email,
    //          photoURL: res.user.photoURL
    //       }
    //       this.setUserData(obj);
    //       this.router.navigate(['/home']);
    //    });
    // });
 }

//  this.googlePlus.login({})
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

}
