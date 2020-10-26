import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-browse-pets',
  templateUrl: './browse-pets.page.html',
  styleUrls: ['./browse-pets.page.scss'],
})
export class BrowsePetsPage implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { 
    if(!loginService.isLoggedIn()) {
      this.router.navigateByUrl('');
    }
  }
  ngOnInit() {
  }

}
