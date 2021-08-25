import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {

  cars: Car[]
  selectedCar: Car

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.cars = this.carService.cars
  }

  showCarDetail(carId: number) {
    this.selectedCar = this.carService.getCarById(carId)
  }

}
