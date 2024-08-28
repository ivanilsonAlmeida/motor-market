import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserSchema = HydratedDocument<UserDto>;

@Schema()
export class UserDto {

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;
}


export const UserSchema = SchemaFactory.createForClass(UserDto)