import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-admin-console',
  templateUrl: './admin-console.page.html',
  styleUrls: ['./admin-console.page.scss'],
})
export class AdminConsolePage implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  applications: [];
  ngOnInit() {
    setTimeout(() => {
      if(!this.loginService.isLoggedIn()) {
        this.router.navigateByUrl('');
      }
      if (!this.loginService.user.admin) {
        this.router.navigateByUrl('/');
      }
      else {
        this.loginService.getProviderApplications().subscribe((res: {ok: boolean, applications: []}) => {
          if (res.ok) {
            this.applications = res.applications;
          }
        })
      }
    }, 1000);
  }

  getTypes(array: []) {
    return array.map((elem, i, array) => {
      if (i === array.length - 1) {
        return " " + elem;
      }
      else {
        return elem;
      }
    })
  }

  refreshApplications() {
    this.applications = undefined;
    this.loginService.getProviderApplications().subscribe((res: {ok: boolean, applications: []}) => {
      if (res.ok) {
        this.applications = res.applications;
      }
    });
  }
  approve(id) {
    this.loginService.approveProvider(id).subscribe((res: {ok: boolean}) => {
      if (res.ok) {
        this.applications = undefined;
        this.loginService.getProviderApplications().subscribe((res: {ok: boolean, applications: []}) => {
          if (res.ok) {
            this.applications = res.applications;
          }
        });
      }
    });
  }
    deny(id) {
      this.loginService.denyProvider(id).subscribe((res: {ok: boolean}) => {
        if (res.ok) {
          this.applications = undefined;
          this.loginService.getProviderApplications().subscribe((res: {ok: boolean, applications: []}) => {
            if (res.ok) {
              this.applications = res.applications;
            }
          });
        }
      });
    }
}
