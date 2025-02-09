import { Injectable } from '@angular/core';
import { Car } from '../domain/models/car';
import { CarGateway } from '../domain/models/gateway/car-gateway';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAllCarsUseCase {
  constructor(private carGateway: CarGateway) {}

  execute(): Observable<Car[]> {
    return this.carGateway.getAll();
  }
}
