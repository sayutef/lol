import { Injectable } from '@angular/core';
import { CarGateway } from '../domain/models/gateway/car-gateway';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteCarUseCase {
  constructor(private carGateway: CarGateway) {}

  execute(id: number): Observable<void> {
    return this.carGateway.delete(id);
  }
}
