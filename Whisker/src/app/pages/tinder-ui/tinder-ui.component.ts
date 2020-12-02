import { Component, Input, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tinder-ui',
  templateUrl: './tinder-ui.component.html',
  styleUrls: ['./tinder-ui.component.scss'],
})
export class TinderUiComponent {

  @Input('cards') cards: Array<{
    image: string,
    name: string,
    bio: string
  }>;

  @ViewChildren('tinderCard') tinderCards: QueryList<ElementRef>;

  tinderCardsArray: Array<ElementRef>;

  constructor() { }

  ngAfterViewInit() {
    this.tinderCardsArray = this.tinderCards.toArray();
    this.tinderCards.changes.subscribe(()=>{
      this.tinderCardsArray = this.tinderCards.toArray();
    })
  };

  ngOnInit() {}

}
