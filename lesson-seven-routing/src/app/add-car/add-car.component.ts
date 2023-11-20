import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Car } from '../model/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  car: Car = new Car();
  cars: Car[] = [];

  constructor(private dataService: DataService, private router: Router){}

  ngOnInit(): void {
    this.dataService.getCars().subscribe(data => {
      this.cars = data;
    })
  }

  addCar(): void {
    this.car.id = Math.max(...this.cars.map(item => item.id)) + 1;
    this.dataService.addCar(this.car).subscribe(data => {
      this.router.navigate([""]);  
    })
   
  }


}
