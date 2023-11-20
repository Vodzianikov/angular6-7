import { Component } from '@angular/core';
import { DataService } from '../data.service';
import Car from '../model/data.model';

@Component({
  selector: 'app-get-car',
  templateUrl: './get-car.component.html',
  styleUrls: ['./get-car.component.css']
})
export class GetCarComponent {

  car!: Car;
  id!: number;

  constructor(private dataService: DataService){}

  getCar(): void {
    this.car = this.dataService.getCar(this.id);
  }

  editCar(): void {
    this.dataService.editCar(this.car);
  }
}
