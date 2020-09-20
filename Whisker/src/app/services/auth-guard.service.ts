import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private loginService: LoginService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.loginService.isTokenPresent()) {
      return true;
    }
    else {
      this.router.navigate(['/'])
      return false;
    }
  }
}
