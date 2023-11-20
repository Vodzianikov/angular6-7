import { Component, OnInit } from '@angular/core';
import { Car } from '../model/model';
import { DataService } from '../data.service';
// для определения параметра маршрута
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit{

  car!: Car;
  isLoading = true;
  cars: Car[] = [];
  id = 0;

  isEdited = false;
  isLoggedIn = false;

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private auth: AuthService
    ){}

  ngOnInit(): void {
    this.isLoading = true;
    this.isEdited = false;
    this.isLoggedIn = this.auth.isLoggedIn;

    this.id = +this.activatedRoute.snapshot.params['id'];
    this.dataService.getCars().subscribe(data => {
      this.cars = data;
      this.car = this.cars[this.id - 1];
      this.isLoading = false; 
    })
  }

  deleteCar(): void {
    this.dataService.deleteCar(this.id).subscribe(data => {
      this.router.navigate([""]);
    });
  }

  editCar(): void {
    this.isEdited = true;
  }

  updateCar(): void {
    this.dataService.updateCar(this.car).subscribe(data => {
      this.router.navigate([""]);
    });
  }


  

}
