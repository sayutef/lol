import { Car } from '../car';
import { Observable } from 'rxjs';

export abstract class CarGateway {
  abstract create(make: string, model: string, year: number, mileage: number, fuelType: string): Observable<Car>;
  abstract getAll(): Observable<Car[]>;
  abstract update(car: Car): Observable<Car>;
  abstract delete(id: number): Observable<void>;
}
