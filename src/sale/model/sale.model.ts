import { Vehicle } from 'src/vehicle/model/vehicle.model';
import { SaleStateEnum } from '../enum/sale.state';
import { Payment } from 'src/payment/model/payment.model';

export class Sale {
  private _registration: number;
  private _nameClient: string;
  private _totalPrice: number;
  private _payment: Payment;
  private _vehicle: Vehicle;
  private _state: SaleStateEnum;

  constructor(
    registration: number,
    nameClient: string,
    totalPrice: number,
    payment: Payment,
    vehicle: Vehicle,
    state: SaleStateEnum,
  ) {
    this._registration = registration;
    this._nameClient = nameClient;
    this._totalPrice = totalPrice;
    this._payment = payment;
    this._vehicle = vehicle;
    this._state = state;
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

  get payment(): Payment {
    return this._payment;
  }

  set payment(payment: Payment) {
    this._payment = payment;
  }

  get vehicle(): Vehicle {
    return this._vehicle;
  }

  set vehicle(vehicle: Vehicle) {
    this._vehicle = vehicle;
  }

  get state(): SaleStateEnum {
    return this._state;
  }

  set state(state: SaleStateEnum) {
    this._state = state;
  }
}
