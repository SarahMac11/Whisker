import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  whiskerSettings;
  constructor() {
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
}
