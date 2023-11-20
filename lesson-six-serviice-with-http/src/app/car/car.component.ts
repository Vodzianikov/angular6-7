import { Component, Input } from '@angular/core';
import Car from '../model/data.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent {

  @Input() car!: Car;
  @Input() index!: number;

  constructor(private dataService: DataService){}

  deleteCar(): void {
    this.dataService.delete(+this.index + 1);
  }

  editCar(): void {
    console.log(`editCar - ${this.index}`);
  }

  

}
