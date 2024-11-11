import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type VehicleSchema = HydratedDocument<VehicleDto>;

@Schema()
export class VehicleDto {
  @Prop()
  model: string;

  @Prop()
  brand: string;

  @Prop()
  year: number;

  @Prop()
  color: string;

  @Prop()
  motor: string;

  @Prop()
  hp: string;
}

export const VehicleSchema = SchemaFactory.createForClass(VehicleDto);
