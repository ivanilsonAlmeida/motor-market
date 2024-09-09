import { IUser } from "src/user/interface/user.interface";

export interface IEmployee extends IUser {
  registration: number;
  userRole: string;
}