import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-pipe-tests',
  templateUrl: './custom-pipe-tests.component.html',
  styleUrls: ['./custom-pipe-tests.component.scss']
})
export class CustomPipeTestsComponent implements OnInit {
  carType:string = 'FAMILY_CAR';

  constructor() { }

  ngOnInit(): void {
  }

}

export enum CourierVehicleType {
  Bicycle = 'BICYCLE',
  Motorcycle = 'MOTORCYCLE',
  MotorWithBox = 'MOTOR_WITH_BOX',
  Mini = 'MINI',
  FamilyCar = 'FAMILY_CAR',
  Suv = 'SUV',
  Truck = 'TRUCK'
}