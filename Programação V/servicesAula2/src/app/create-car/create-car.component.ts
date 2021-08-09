import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {

  newCar: Car

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.newCar = new Car()
  }

  saveCar(form) {
    this.carService.saveCar(this.newCar)
    this.newCar = new Car()
    form.reset()
  }

}
