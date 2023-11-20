import { Component, Input } from '@angular/core';
import { Car } from '../model/model';
// для программной маршрутизации
import { Router } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

  isLoading = false;
  @Input() car!: Car;

  constructor(private router: Router){}

  goToDetail(): void {
    this.router.navigate(["cars", this.car.id]);
  }

}
