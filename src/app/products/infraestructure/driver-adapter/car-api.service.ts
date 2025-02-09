import { Injectable } from '@angular/core';
import { CarGateway } from '../../domain/models/gateway/car-gateway';
import { Car } from '../../domain/models/car';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarApiService extends CarGateway {

  private apiUrl = 'http://localhost:8080/cars'; 

  constructor(private http: HttpClient) { super(); }

  create(make: string, model: string, year: number, mileage: number, fuelType: string): Observable<Car> {
    const payload = { make, model, year, mileage, fuelType };  
    return this.http.post<Car>(this.apiUrl, payload, {
        headers: { 'Content-Type': 'application/json' }
    });
}

  getAll(): Observable<Car[]> {
    return this.http.get<{ cars: Car[] }>(`${this.apiUrl}/`)
      .pipe(map(response => response.cars));
  }

  update(car: Car): Observable<Car> {
    return this.http.put<Car>(`${this.apiUrl}/${car.id}`, car);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
