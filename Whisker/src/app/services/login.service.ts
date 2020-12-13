import { Component, Injectable } from '@angular/core';
import { User } from '../interfaces/User';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { Animal } from '../interfaces/Animal';

@Component({
  providers: [GooglePlus, Facebook]
})

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedIn: boolean = false;
  private loggingIn: boolean = false;
  private loginFail: boolean = false;
  private tokenPresent: boolean = false;
  private fbLogin: boolean = false;
  private googeLogin: boolean = false;
  user: User;
  favoriteAnimals: Animal[] = [];

  // CHANGE THIS TO WHISKER'S, HAVE THIS HERE FOR A BASE TO WORK WITH
  apiUrl = 'https://www.whiskerapp.org:9000/';

  constructor(private http: HttpClient, private storage: Storage, private router: Router, private googlePlus: GooglePlus, private fb: Facebook) {
    this.storage.get('loggedIn').then((user) => {
      this.loggingIn = true;
      if (user && user.id !== undefined && user.currentSessionId !== undefined) {
        this.tokenPresent = true;
        this.verifySession(user).subscribe((res: { ok: boolean, expired: boolean }) => {
          if (res.ok) {
            this.loggedIn = true;
            this.user = user;
            if (this.user.favorites) {
              this.user.favorites.forEach(aid => {
                this.getAnimal(aid).subscribe((res: Animal) => {this.favoriteAnimals.push(res)});
              });
            }
            // this.router.navigate(['/home']);
          }
          else {
            this.storage.remove('loggedIn');
            this.tokenPresent = false;
            this.loggedIn = false;
            if (res.expired) {
              this.router.navigate(['/sessionExpired']);
            }
            else {
              this.router.navigate(['/']);
            }
          }
          this.loggingIn = false;
        });
      }
      else {
        this.loggingIn = false;
        this.loggedIn = false;
      }
    });
   }

   login(username, password, staySignedIn) {
     this.loggingIn = true;
     this.loginFail = false;
     return this.http.post(this.apiUrl + 'users/login', {username: username, password: password, staySignedIn: staySignedIn});
   }
   verifySession(user: User) {
     return this.http.post(this.apiUrl + 'verifySession', {id: user.id, sessionId: user.currentSessionId});
   }
   setLoggedIn(result: User) {
    this.loggedIn = true;
    this.user = {
      id: result.id,
      username: result.username,
      password: undefined,
      email: result.email,
      firstname: result.firstname,
      lastname: result.lastname,
      currentSessionId: result.sessionId,
      expDate: result.expDate,
      admin: result.admin,
      imageUrl: result.imageUrl,
      providerId: result.providerId,
      favorites: result.favorites
    };
    if (this.user.favorites) {
      this.user.favorites.forEach(aid => {
        this.getAnimal(aid).subscribe((res: Animal) => {this.favoriteAnimals.push(res)});
      });
    }
    this.storage.set('loggedIn', this.user);
    this.tokenPresent = true;
    this.loggingIn = false;
   }

   logout() {
     if (this.loggedIn) {
      this.storage.remove('loggedIn');
      this.user = undefined;
      this.tokenPresent = false;
      this.loggedIn = false;
     }
   }
   searchUser(username: String) {
     return this.http.get(this.apiUrl + 'get/user/' + username);
   }

   addUser(user: User) {
     return this.http.post(this.apiUrl + 'users/addUser', user);
   }

   providerApply(info) {
     return this.http.post(this.apiUrl + 'apply/provider', info);
   }

   getProviderApplications() {
     return this.http.post(this.apiUrl + 'applications/provider', {
      uid: this.user.id,
      sid: this.user.currentSessionId
     });
   }

   approveProvider(id: string) {
     return this.http.post(this.apiUrl + 'apply/provider/accept', {
       uid: this.user.id,
       sid: this.user.currentSessionId,
       applicationId: id
     });
   }

   denyProvider(id: string) {
     return this.http.post(this.apiUrl + 'apply/provider/deny', {
       uid: this.user.id,
       sid: this.user.currentSessionId,
       applicationId: id
     });
   }

   addAnimal(animal) {
     return this.http.post(this.apiUrl + 'add/animal', Object.assign(animal, {
      uid: this.user.id,
      sid: this.user.currentSessionId,
      pid: this.user.providerId
     }));
   }

   getProviderAnimals() {
     return this.http.get(this.apiUrl + 'animals/' + this.user.providerId);
   }

   getAnimals(pageNum) {
     return this.http.get(this.apiUrl + 'animals/page/' + pageNum);
    }
   getAnimal(animalId: string) {
     return this.http.get(this.apiUrl + 'animal/' + animalId);
   }
   getProvider(pid: string) {
     return this.http.get(this.apiUrl + 'provider/' + pid);
   }
   isLoggedIn(): boolean {
     return this.loggedIn;
   }
   isLoggingIn(): boolean {
     return this.loggingIn;
   }
   failedLogin() {
     this.loggingIn = false;
     this.loginFail = true;
   }
   didLoginFail(): boolean {
     return this.loginFail;
   }
   verifyAccount(verifyId: string) {
     return this.http.post(this.apiUrl + 'verifyUser', { verifyId: verifyId});
   }
   isTokenPresent(): boolean {
     return this.tokenPresent;
   }
   addFavorite(aid: string) {
     return this.http.post(this.apiUrl + 'favorites/add/' + aid, {
       uid: this.user.id,
       sid: this.user.currentSessionId
     });
   }

   async signInWithGoogle() {
     await this.googlePlus.login({}).then(res => {
        this.http.post(this.apiUrl + 'oauthLogin', res).subscribe(res => {
          this.setLoggedIn(<any> res);
          this.googeLogin = true;
        },
        error => {
          console.log(error);
        });
     });
   }

   async signInWithFacebook() {
     await this.fb.login(['email', 'public_profile'])
      .then((res: FacebookLoginResponse) => {
        console.log('Logged into FB', res);
        this.http.post(this.apiUrl + 'oauthLogin', res).subscribe(res => {
          this.setLoggedIn(<any> res);
          this.fbLogin = true;
        });
      })
      .catch(e => {
        console.log(e);
      });
    }

    isGoogleLogin(): boolean {
      return this.googeLogin;
    }

    isFbLogin(): boolean {
      return this.fbLogin;
    }
  }
