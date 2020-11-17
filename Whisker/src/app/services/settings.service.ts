import { Injectable } from '@angular/core';

import { LoginService } from 'src/app/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  whiskerSettings;
  constructor(private loginService: LoginService) {
    if(localStorage.getItem('whiskerSettings') !== null) {
      this.whiskerSettings = JSON.parse(localStorage.getItem('whiskerSettings'));
    }
    else {
      this.whiskerSettings = {
        darkMode: false
      }
      localStorage.setItem('whiskerSettings', JSON.stringify(this.whiskerSettings));
    }
    if(this.whiskerSettings.darkMode) {
      document.body.classList.toggle('dark', this.whiskerSettings.darkMode);
    }
   }

  toggleDarkMode() {
    this.whiskerSettings.darkMode = !this.whiskerSettings.darkMode;
    document.body.classList.toggle('dark', this.whiskerSettings.darkMode);
    localStorage.setItem('whiskerSettings', JSON.stringify(this.whiskerSettings));
  }

  isDarkMode() {
    return this.whiskerSettings.darkMode;
  }

  get isGoogleLogin() {
    return this.loginService.isGoogleLogin;
  }

  get isFbLogin() {
    return this.loginService.isFbLogin;
  }
}
