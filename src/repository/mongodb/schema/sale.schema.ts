import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
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
  payment: string;

  @Prop()
  vehicle: Vehicle;
}

export const SaleSchema = SchemaFactory.createForClass(SaleDto);