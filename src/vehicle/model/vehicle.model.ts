export class Vehicle {
  private _chassi: string;
  private _model: string;
  private _brand: string;
  private _year: number;
  private _color: string;
  private _motor: string;
  private _hp: string;
  
  constructor(
    chassi: string,
    model: string, 
    brand: string, 
    year: number, 
    color: string, 
    motor: string, 
    hp: string
  ) {
    this._chassi = chassi;
    this._model = model;
    this._brand = brand;
    this._year = year;
    this._color = color;
    this._motor = motor;
    this._hp = hp;
  }

  get chassi(): string {
    return this._chassi;
  }

  set chassi(chassi: string) {
    this._chassi = chassi;
  }

  get model(): string {
    return this._model;
  }

  set model(model: string) {
    this._model = model;
  }

  get brand(): string {
    return this._brand;
  }

  set brand(brand: string) {
    this._brand = brand;
  }

  get year(): number {
    return this._year;
  }

  set year(year: number) {
    this._year = year;
  }

  get color(): string {
    return this._color;
  }

  set color(color: string) {
    this._color = color;
  }

  get motor(): string {
    return this._motor;
  }

  set motor(motor: string) {
    this._motor = motor;
  }

  get hp(): string {
    return this._hp;
  }

  set hp(hp: string) {
    this._hp = hp;
  }
}
