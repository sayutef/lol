import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarGateway } from '../domain/models/gateway/car-gateway';
import { Car } from '../domain/models/car';

@Injectable({
  providedIn: 'root'
})
export class UpdateCarUseCase {
  constructor(private carGateway: CarGateway) {}

  execute(car: Car): Observable<Car> {
    return this.carGateway.update(car);
  }
}
