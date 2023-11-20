import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoggedIn = false;

  constructor() {
    let user = sessionStorage.getItem("user");
    if (user) {
      this.isLoggedIn = true;
    }
  }

  login(_name: string, _password: string) {
    sessionStorage.setItem("user", JSON.stringify({
      name: _name,
      password: _password
    }));
    this.isLoggedIn = true;
  }

  logout(): void {
    sessionStorage.removeItem("user");
    this.isLoggedIn = false;
  }
}
