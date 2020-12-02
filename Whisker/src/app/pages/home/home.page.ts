import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  cards;

  constructor(private router: Router, private loginService: LoginService) { 
    this.cards = [];

    setTimeout(() => {
      if(!loginService.isLoggedIn()) {
        this.router.navigateByUrl('');
      }
    }, 1000);
  }

  loadTinderCards() {
    this.cards = [
      {
        image: "https://placeimg.com/300/300/people",
        name: "pet card 1",
        bio: "This is a demo for Tinder like swipe cards"
      },
      {
        image: "https://placeimg.com/300/300/animals",
        name: "pet card 2",
        bio: "This is a demo for Tinder like swipe cards"
      },
      {
        image: "https://placeimg.com/300/300/nature",
        name: "pet card 3",
        bio: "This is a demo for Tinder like swipe cards"
      },
      {
        image: "https://placeimg.com/300/300/tech",
        name: "pet card 4",
        bio: "This is a demo for Tinder like swipe cards"
      },
      {
        image: "https://placeimg.com/300/300/arch",
        name: "pet card 5",
        bio: "This is a demo for Tinder like swipe cards"
      }
    ]
  };

  ngOnInit() {
  }

}
