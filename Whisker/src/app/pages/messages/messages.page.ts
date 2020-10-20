import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { 
    if(!loginService.isLoggedIn()) {
      this.router.navigateByUrl('');
    }
  }

  ngOnInit() {
  }

}
