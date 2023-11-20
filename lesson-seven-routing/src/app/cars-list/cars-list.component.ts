import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Car } from '../model/model';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  cars: Car[] = [];
  isLoading = true;

  key = "marka";

  // для пагинации
  carsPerPage = 4;
  selectedPage = 1;
  pageNumbers: number[] = [];


  constructor(private dataService: DataService){}


  ngOnInit(): void {
    this.isLoading = true;
    this.dataService.getCars()
    .subscribe(data => {
      this.cars = data;
      console.log(this.cars);
      this.isLoading = false;

      this.pageNumbers = Array(Math.ceil(this.cars.length / this.carsPerPage))
      .fill(0).map((x, i) => i + 1);
    });
  }

  sortedCars(key: any): Car[] {
    const cars = this.cars.sort((a: any, b: any) => {
      return (a[key] > b[key])? 1: ((a[key] < b[key]))? -1 : 0;
    });

    let pageIndex: number = (this.selectedPage - 1) * this.carsPerPage;

    return cars.slice(pageIndex, Number(pageIndex) + Number(this.carsPerPage));
    
  }

  changePage(pageNumber: number): void {
    this.selectedPage = pageNumber;
  }

  changePageSize() {
    this.pageNumbers = Array(Math.ceil(this.cars.length / this.carsPerPage))
      .fill(0).map((x, i) => i + 1);
    this.changePage(1);
  }



  


}
