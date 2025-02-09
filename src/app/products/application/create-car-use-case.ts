import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarGateway } from '../domain/models/gateway/car-gateway';
import { Car } from '../domain/models/car';

@Injectable({
    providedIn: 'root'
})
export class CreateCarUseCase {
    constructor(private carGateway: CarGateway) {}

    execute(make: string, model: string, year: number, mileage: number, fuelType: string): Observable<Car> {
        return this.carGateway.create(make, model, year, mileage, fuelType);
    }
}
