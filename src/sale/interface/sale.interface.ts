import { Vehicle } from 'src/vehicle/model/vehicle.model';
import { SaleStateEnum } from '../enum/sale.state';
import { Payment } from 'src/payment/model/payment.model';

export interface ISale {
  message: string;
  sale: {
    registration: number;
    nameClient: string;
    totalPrice: number;
    payment: Payment;
    vehicle: Vehicle;
    state: SaleStateEnum;
  };
}
