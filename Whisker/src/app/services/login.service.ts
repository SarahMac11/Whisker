import { Injectable } from '@angular/core';
import { User } from '../interfaces/User';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedIn: boolean = false;
  private loggingIn: boolean = false;
  private loginFail: boolean = false;
  private tokenPresent: boolean = false;
  user: User;

  // CHANGE THIS TO WHISKER'S, HAVE THIS HERE FOR A BASE TO WORK WITH
  apiUrl = 'https://www.practirio.com:9000/';

  constructor(private http: HttpClient, private storage: Storage, private router: Router) {
    this.storage.get('loggedIn').then((user) => {
      this.loggingIn = true;
      if (user && user.id !== undefined && user.currentSessionId !== undefined) {
        this.tokenPresent = true;
        this.verifySession(user).subscribe((res: { ok: boolean, expired: boolean }) => {
          if (res.ok) {
            this.loggedIn = true;
            this.user = user;
            this.router.navigate(['/home']);
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
      expDate: result.expDate
    };

    this.storage.set('loggedIn', this.user);
    this.tokenPresent = true;
    this.loggingIn = false;
   }

   logout() {
     if (this.loggedIn) {
      this.storage.remove('loggedIn');
     this.tokenPresent = false;
     this.loggedIn = false;
     this.router.navigate(["/"]);
     }
   }
   searchUser(username: String) {
     return this.http.get(this.apiUrl + 'get/user/' + username);
   }

   addUser(user: User) {
     return this.http.post(this.apiUrl + 'users/addUser', user);
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
}
