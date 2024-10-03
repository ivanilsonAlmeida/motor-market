import { Vehicle } from "src/vehicle/model/vehicle.model";

export interface ISale {
  registration: number;
  nameClient: string;
  totalPrice: number;
  payment: string;
  vehicle: Vehicle;
}
