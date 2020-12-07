import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/login.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router: Router, private loginService: LoginService, private settingsService: SettingsService) { }

  ngOnInit() {
  }

}
