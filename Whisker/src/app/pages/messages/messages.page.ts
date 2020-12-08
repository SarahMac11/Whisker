import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  friends = [];

  constructor(private router: Router, private loginService: LoginService) { 
    if(!loginService.isLoggedIn()) {
      this.router.navigateByUrl('');
    }
  }

  // goToChatRoom(this.friends) {
  //   this.navCtrl.push('ChatRoomPage', {this.friends});
  // }

  ngOnInit() {
    this.friends = [
      {
        username: "cmhs",
        fullname: "Central Missouri Humane Society",
        avatar: "../../assets/avatars/CMHS.jpg",
        message: "Due to COVID, we have been experiencing some delays in our response. We will get back to you when..."
      },
      {
        username: "hsmo314",
        fullname: "Humane Society of Missouri",
        avatar: "../../assets/avatars/heart.jpg",
        message: "Hello, are you still interested in adopting Tristen?"
      },
      {
        username: "koolkaren8",
        fullname: "Karen Smith",
        avatar: "../../assets/avatars/karen.jpg",
        message: "Hi Karen, when would you be available for me to pick up Corona Cat?"
      },
      {
        username: "secondchance2",
        fullname: "Second Chance",
        avatar: "../../assets/avatars/SecondChance.jpeg",
        message: "Is Tiger still pending adoption?"
      },
      {
        username: "jeffcityanimalshelter",
        fullname: "Jefferson City Animal Shelter",
        avatar: "../../assets/avatars/paw-icon.png",
        message: "We still need you to fill out your adoption form. You can find the link here at our website..." 
      },
      {
        username: "comoanimalshelter",
        fullname: "Columbia Animal Shelter",
        avatar: "../../assets/avatars/cat_icon.jpg",
        message: "Sounds good! You can reach me at 314-555-1234."
      }
    ]
  }

}
