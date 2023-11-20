import { Component, EventEmitter, Output } from '@angular/core';3
import Car from '../model/data.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {

  car: Car = new Car("", "", "", 2023);

  @Output() onChangeChoice = new EventEmitter<number>();


  constructor(private dataService: DataService){
  }

  addCar(): void {
    this.dataService.addCar(this.car);
    this.onChangeChoice.emit(1); // choice установим в 1 для отображения списка
  }


}
