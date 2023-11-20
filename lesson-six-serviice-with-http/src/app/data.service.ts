import { Injectable } from '@angular/core';
import Car from './model/data.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  // cars: Car[] = [
  //   new Car("vw", "polo", "red", 2015),
  //   new Car("vw", "boro", "blue", 2022),
  //   new Car("audi", "q5", "metalic", 2020),
  //   new Car("geely", "emgrand", "red", 2021),
  // ]

  cars: Car[] = [];

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  url = 'http://localhost:3000/cars';

  constructor(private http: HttpClient) {
    this.http.get<Car[]>(this.url)
    .subscribe( data => {
      this.cars = data;
      console.log(this.cars);
    })

  }

  getCars(): Car[] {
    return this.cars;
  }

  getCar(index: number): Car {
    return this.cars[index - 1]; 
  }

  addCar(car: Car): void {
    this.cars.push(car);
    this.http.post<Car>(this.url, car, this.httpOptions)
    .subscribe( data => {
      console.log('Add');
      console.log(data);
    })
  }

  delete(index: number): void {
    if (index > 0 && index <= this.cars.length ) {
      this.cars.splice(index - 1, 1);
      this.http.delete(`${this.url}/${index}`, this.httpOptions)
      .subscribe(data => {
        console.log('Delete');
        console.log(data);
      })
    }

  }

  editCar(car: Car): void {
    let index = this.cars.findIndex(item => item == car);
    this.http.patch<Car>(this.url, car, this.httpOptions)
    .subscribe( data => {
      console.log("Edit");
      this.cars.splice(index, 1);
    })
 
  }  

}
