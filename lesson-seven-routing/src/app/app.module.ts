import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CarsListComponent } from './cars-list/cars-list.component';
import { AddCarComponent } from './add-car/add-car.component';
import { CarComponent } from './car/car.component';
import { HttpClientModule } from '@angular/common/http';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent,
    AddCarComponent,
    CarComponent,
    CarDetailComponent,
    LoginComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
