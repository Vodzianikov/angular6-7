import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-delete-car',
  templateUrl: './delete-car.component.html',
  styleUrls: ['./delete-car.component.css']
})
export class DeleteCarComponent {

  @Output() onChangeChoice = new EventEmitter<number>();

  constructor(private dataService: DataService){}
  
  deleteCar(id: string): void {
    this.dataService.delete(+id);
    this.onChangeChoice.emit(1);
  }

}


