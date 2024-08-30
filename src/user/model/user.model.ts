import { Prop, Schema } from "@nestjs/mongoose";

export class User {
  private _name: string;
  private _email: string;
  private _password: string;

  constructor(name: string, email: string, password: string) {
    this._name = name;
    this._email = email;
    this._password = password;
  }

  get getName(): string {
    return this._name;
  }

  set setName(name: string) {
    this._name = name;
  }

  get getEmail(): string {
    return this._email;
  }

  set setEmail(email: string) {
    this._email = email;
  }

  get getPassword(): string {
    return this._password;
  }

  set setPassword(password: string) {
    this._password = password;
  }

}