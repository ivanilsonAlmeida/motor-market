import { ObjectId } from "mongoose";

export class UserDto {
  private __id: ObjectId;
  private _name: string;
  private _email: string;
  private _password: string;

  constructor(_id: ObjectId, name: string, email: string, password: string) {
    this.__id = _id;
    this._name = name;
    this._email = email;
    this._password = password;
  }

  get _id(): ObjectId {
    return this.__id;
  }

  set _id(_id: ObjectId) {
    this.__id = _id;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get email(): string {
    return this._email;
  }

  set email(email: string) {
    this._email = email;
  }

  get password(): string {
    return this._password;
  }

  set password(password: string) {
    this._password = password;
  }
}