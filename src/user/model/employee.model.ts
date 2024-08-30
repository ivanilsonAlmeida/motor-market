import { Prop, Schema } from "@nestjs/mongoose";
import { User } from "./user.model";

export class Employee extends User {
  private _registration: number;
  private _userRole: string;

  constructor(name: string, email: string, password: string, registration: number, userRole: string) {
    super(name, email, password)
    this._registration = registration;
    this._userRole = userRole;
  }

  get getRegistration(): number {
    return this._registration;
  }

  set setRegistration(registration: number) {
    this._registration = registration;
  }

  get getuserRole(): string {
    return this._userRole;
  }

  set setuserRole(userRole: string) {
    this._userRole = userRole;
  }
}
