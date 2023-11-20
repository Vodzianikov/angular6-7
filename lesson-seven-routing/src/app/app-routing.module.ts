import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsListComponent } from './cars-list/cars-list.component';
import { AddCarComponent } from './add-car/add-car.component';
import { CarComponent } from './car/car.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { LoginComponent } from './login/login.component';
import { addGuard } from './add.guard';

const routes: Routes = [
  {path: "", component: CarsListComponent},
  {path: "cars", component: CarsListComponent},
  {path: "cars/:id", component: CarDetailComponent},
  {path: "add", component: AddCarComponent, canActivate: [addGuard]},
  {path: "login", component: LoginComponent},
  {path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
