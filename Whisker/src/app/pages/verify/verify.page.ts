import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.page.html',
  styleUrls: ['./verify.page.scss'],
})
export class VerifyPage implements OnInit {

  loading: boolean = true;
  verified: boolean = false;
  message: string = '';
  constructor(private route: ActivatedRoute, private router: Router, private loginService: LoginService) {
    if(loginService.isTokenPresent()) {
      this.router.navigate(['/home']);
    }
   }

  ngOnInit() {
    if (this.route.snapshot.queryParams.vid !== undefined) {
      this.loginService.verifyAccount(this.route.snapshot.queryParams.vid).subscribe((res: { ok: boolean }) => {
        if (res.ok) {
          this.verified = true;
        }
        else {
          this.message = 'Invalid verification.'
        }
        this.loading = false;
      }, err => {
        this.loading = false;
        this.message = 'Verification request failed.';
      });
    }
    else {
      this.loading = false;
      this.message = 'This verification link seems to be misformatted.';
    }
  }

}