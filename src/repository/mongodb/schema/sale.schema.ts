import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { Payment } from "src/payment/model/payment.model";
import { SaleStateEnum } from "src/sale/enum/sale.state";
import { Vehicle } from "src/vehicle/model/vehicle.model";

export type SaleSchema = HydratedDocument<SaleDto>;

@Schema()
export class SaleDto {
  @Prop()
  registration: number;
  
  @Prop()
  nameClient: string;
  
  @Prop()
  totalPrice: number;

  @Prop()
  payment: Payment;

  @Prop()
  vehicle: Vehicle;

  @Prop()
  state: SaleStateEnum;
}

export const SaleSchema = SchemaFactory.createForClass(SaleDto);