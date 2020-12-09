import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from 'src/app/interfaces/Animal';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-browse-pets',
  templateUrl: './browse-pets.page.html',
  styleUrls: ['./browse-pets.page.scss'],
})
export class BrowsePetsPage implements OnInit {

  animals: Animal[] = [];
  isLoading: boolean = true;
  activeTab: string = "all";

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      if (!this.loginService.user) {
        this.router.navigateByUrl('/home');
      }
      this.loginService.getAnimals(1).subscribe((res: Animal[]) => {
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

  selectDisplay(tab: string) {
    this.activeTab = tab;
  }

}
