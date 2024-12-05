import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { UserSchemaDto } from './user.schema';


export type EmployeeSchema = HydratedDocument<EmployeeSchemaDto>;

@Schema()
export class EmployeeSchemaDto extends UserSchemaDto {
  @Prop()
  registration: number;

  @Prop()
  userRole: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(EmployeeSchemaDto);
