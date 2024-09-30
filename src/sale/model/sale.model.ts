import { Vehicle } from "src/vehicle/model/vehicle.model";

export class Sale {
  private _registration: number;
  private _nameClient: string;
  private _totalPrice: number;
  private _payment: string;
  private _vehicle: Vehicle;

  constructor(
    registration: number,
    nameClient: string,
    totalPrice: number,
    payment: string,
    vehicle: Vehicle
  ) {
      this._registration = registration;
      this._nameClient = nameClient;
      this._totalPrice = totalPrice;
      this._payment = payment;
      this._vehicle = vehicle;
  }

  get registration(): number {
    return this._registration;
  }

  set registration(registration: number) {
    this._registration = registration;
  }

  get nameClient(): string {
    return this._nameClient;
  }

  set nameClient(nameClient: string) {
    this._nameClient = nameClient;
  }

  get totalPrice(): number {
    return this._totalPrice;
  }

  set totalPrice(totalPrice: number) {
    this._totalPrice = totalPrice;
  }

  get payment(): string {
    return this._payment;
  }

  set payment(payment: string) {
    this._payment = payment;
  }

  get vehicle(): Vehicle {
    return this._vehicle;
  }

  set vehicle(vehicle: Vehicle) {
    this._vehicle = vehicle;
  }
}
