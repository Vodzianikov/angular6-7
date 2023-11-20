import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userName = "";
  userPassword = "";

  constructor(private auth: AuthService, private router: Router){}
  
  login(): void {
    this.auth.login(this.userName, this.userPassword);
    this.router.navigate([""]);
  }

}
