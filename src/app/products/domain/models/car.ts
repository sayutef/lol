export class Car {
    id: number;
    make: string;
    model: string;
    year: number;
    mileage: number;
    fuelType: string;
  
    constructor(id: number, make: string, model: string, year: number, mileage: number, fuelType: string) {
      this.id = id;
      this.make = make;
      this.model = model;
      this.year = year;
      this.mileage = mileage;
      this.fuelType = fuelType;
    }
  }
  