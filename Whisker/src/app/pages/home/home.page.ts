import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from 'src/app/interfaces/Animal';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  cards;
  loading = true;
  animals: Animal[] = [];

  constructor(private router: Router, private loginService: LoginService) { 
    this.cards = [];

    setTimeout(() => {
      if(!loginService.isLoggedIn()) {
        this.router.navigateByUrl('');
      }
    }, 1000);
  }

  logChoice(event) {
  }

  loadTinderCards() {
    this.loginService.getAnimals(1).subscribe((res: Animal[]) => {
      this.animals = res;
      console.dir(this.animals);
      this.animals.forEach(element => {
        this.cards.push({
          petImage: element.images[0],
          petName: element.name,
          petBio: element.bio,
          id: element.id,
          match: Math.round(Math.random() * 100)
        });     
      });
      this.loading = false;
    });     
  };

  ngOnInit() {
    this.loadTinderCards();
  }

}
