import { Injectable } from '@angular/core';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  cars: Car[]

  constructor() { 
    this.cars = []
  }
  
  saveCar(car: Car) {
    this.cars.push(car);
  }

  getCarById(id: number) {
    return this.cars.find(xuxa => xuxa.id === id)
  }

}
