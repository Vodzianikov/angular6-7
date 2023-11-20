import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Car } from './model/model';
import { DataService } from './data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-first';

  isLoggedIn = false;
  searchString = "";
  cars: Car[] = [];
  
  constructor(
    private auth: AuthService,
    private dataService: DataService,
    private router: Router
    ){}

  login(): void {
    this.isLoggedIn = true;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.auth.logout();
  }

  search(): void {
    let cars: Car[] = [];
    this.dataService.getCars().subscribe(data => {
      cars = data;
      let car: Car = cars.find(item => item.marka == this.searchString)!; 
      this.router.navigate(["cars", car.id]);
    })

  }



}
