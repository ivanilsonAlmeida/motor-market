import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { UserDto } from "./user.schema";

export type EmployeeSchema = HydratedDocument<EmployeeDto>;

@Schema()
export class EmployeeDto extends UserDto {
  @Prop()
  registration: number;
  
  @Prop()
  userRole: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(EmployeeDto);