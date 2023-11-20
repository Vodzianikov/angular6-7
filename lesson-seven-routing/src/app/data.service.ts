import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from './model/model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = "http://localhost:3000/cars";
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.url);
  }

  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.url, car, this.httpOptions)
  }

  deleteCar(id: number): Observable<Car> {
    return this.http.delete<Car>(`${this.url}/${id}`);
  }

  updateCar(car: Car): Observable<Car> {
    return this.http.put<Car>(`${this.url}/${car.id}`, car, this.httpOptions);
  }


}
