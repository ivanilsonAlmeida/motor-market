import { Vehicle } from "src/vehicle/model/vehicle.model";
import { SaleStateEnum } from "../enum/sale.state";

export interface ISale {
  message: string;
  sale: {
    registration: number;
    nameClient: string;
    totalPrice: number;
    payment: string;
    vehicle: Vehicle;
    state: SaleStateEnum
  }
}
