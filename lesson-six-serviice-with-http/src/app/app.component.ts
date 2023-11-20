import { Component } from '@angular/core';
import Car from './model/data.model';
import { DataService } from './data.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-first';
  cars: Car[];

  choice = 0;

  constructor(private dataService: DataService) {
    this.cars = dataService.getCars();
  }

  showAll(): void {
    this.choice = 1;
  }

  showCar(): void {
    this.choice = 2;
  }

  addCar(): void {
    this.choice = 3;
  }

  deleteCar(): void {
    this.choice = 4;
  }

  changeChoice(choice: number): void {
    this.choice = choice;
  }


  
}
