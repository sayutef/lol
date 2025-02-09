import { Component, OnInit } from '@angular/core';
import { CarApiService } from '../../../../products/infraestructure/driver-adapter/car-api.service';
import { Car } from '../../../../products/domain/models/car';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cars: Car[] = [];  
  carsInEditMode: Set<number> = new Set();  
  newCar: Car = { id: 0, make: '', model: '', year: 0, mileage: 0, fuelType: '' }; 

  constructor(
    private carApiService: CarApiService 
  ) {}

  ngOnInit(): void {
    this.loadCars();  
  }

  addCar(makeInput: HTMLInputElement, modelInput: HTMLInputElement, yearInput: HTMLInputElement, mileageInput: HTMLInputElement, fuelTypeInput: HTMLInputElement): void {
    const make = makeInput.value;
    const model = modelInput.value;
    const year = parseInt(yearInput.value, 10);  
    const mileage = parseFloat(mileageInput.value);  
    const fuelType = fuelTypeInput.value;
  
    if (make && model && year && mileage && fuelType) {
      this.carApiService.create(make, model, year, mileage, fuelType).subscribe((newCar) => {
        this.cars.push(newCar);  
        
        makeInput.value = '';
        modelInput.value = '';
        yearInput.value = '';
        mileageInput.value = '';
        fuelTypeInput.value = '';
      });
    }
  }
  
  updateCarValue(field: string, event: Event): void {
    const input = event.target as HTMLInputElement;
    
    
    if (field === 'make') {
      this.newCar.make = input.value;
    } else if (field === 'model') {
      this.newCar.model = input.value;
    } else if (field === 'year') {
      this.newCar.year = parseInt(input.value, 10);  
    } else if (field === 'mileage') {
      this.newCar.mileage = parseFloat(input.value);  
    } else if (field === 'fuelType') {
      this.newCar.fuelType = input.value;
    }
  }
  
  
  
  
  loadCars(): void {
    this.carApiService.getAll().subscribe((carList) => {
      this.cars = carList;
    });
  }

 
  deleteCar(id: number): void {
    this.carApiService.delete(id).subscribe(() => {
      this.cars = this.cars.filter((car) => car.id !== id);  
    });
  }

  toggleEdit(car: Car): void {
    if (this.carsInEditMode.has(car.id)) {
      this.updateCar(car);
    } else {
      this.carsInEditMode.add(car.id);
    }
  }

  
  updateCar(updatedCar: Car): void {
    this.carApiService.update(updatedCar).subscribe((car) => {
      const index = this.cars.findIndex((c) => c.id === car.id);
      if (index !== -1) {
        this.cars[index] = car;  
        this.carsInEditMode.delete(car.id); 
      }
    });
  }
}
