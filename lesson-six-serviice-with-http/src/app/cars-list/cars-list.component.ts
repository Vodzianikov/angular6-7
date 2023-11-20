import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import Car from "../model/data.model"

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  cars: Car[] | undefined; 

  @Output() onChangeChoice = new EventEmitter<number>();


  constructor(private dataService: DataService){
       
  }

  ngOnInit(): void {
    this.cars = this.dataService.getCars();
  }

  

}
