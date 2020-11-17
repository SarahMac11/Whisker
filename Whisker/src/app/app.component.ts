import { Component } from '@angular/core';

import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginService } from './services/login.service';
import { SettingsService } from './services/settings.service';
import { Router } from '@angular/router';
import { User } from './interfaces/User';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  currentUser: User;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private loginService: LoginService,
    private settingsService: SettingsService,
    private router: Router,
    private menuCtl: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.currentUser = this.loginService.user;
    });
  }
  get isLoggedIn(): boolean {
    return (this.loginService.user && this.loginService.isLoggedIn());
  }
  logout() {
    this.router.navigateByUrl('/');
    this.loginService.logout();
    this.closeMenu();
  }
  changeTheme() {
    this.settingsService.toggleDarkMode();
  }
  isMobile(): boolean {
    return (this.platform.width() < 768)
  }
  async openMenu() {
    return await this.menuCtl.open('main');
  }
  async closeMenu() {
    return await this.menuCtl.close('main');
  }

}
