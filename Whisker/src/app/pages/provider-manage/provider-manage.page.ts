import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from 'src/app/interfaces/Animal';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-provider-manage',
  templateUrl: './provider-manage.page.html',
  styleUrls: ['./provider-manage.page.scss'],
})
export class ProviderManagePage implements OnInit {

  animals: Animal[];
  isLoading: boolean = true;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      if (!this.loginService.user || !this.loginService.user.providerId || this.loginService.user.providerId === "") {
        this.router.navigateByUrl('/home');
      }
      this.loginService.getProviderAnimals().subscribe((res: Animal[]) => {
        this.animals = res;
        console.dir(this.animals)
        this.isLoading = false;
      });
    }, 1000);
  }

  statusColor(status: string): string {
    if (status === 'Available') return 'success';
    else if (status === 'On Hold') return 'warning';
    else return 'danger';
  }

}
