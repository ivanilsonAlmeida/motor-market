import { TypePaymentEnum } from "../enum/type-payment.enum";

export class Payment {
  private _totalValue: number;
  private _typePayment: TypePaymentEnum;
  private _paymentInstallments: string;
  private _priceInstallments: number;

  constructor(
    totalValue: number,
    typePayment: TypePaymentEnum,
    paymentInstallments: string,
    priceInstallments: number
  ) {
    this._totalValue = totalValue;
    this._typePayment = typePayment;
    this._paymentInstallments = paymentInstallments;
    this._priceInstallments = priceInstallments;
  }

  get totalValue(): number {
    return this._totalValue
  }

  set totalValue(totalValue: number) {
    this._totalValue = totalValue;
  }

  get typePayment(): TypePaymentEnum {
    return this._typePayment
  }

  set typePayment(typePayment: TypePaymentEnum) {
    this._typePayment = typePayment;
  }

  get paymentInstallments(): string {
    return this._paymentInstallments;
  }

  set paymentInstallments(paymentInstallments: string) {
    this._paymentInstallments = paymentInstallments;
  }

  get priceInstallments(): number {
    return this._priceInstallments;
  }

  set priceInstallments(priceInstallments: number) {
    this._priceInstallments = priceInstallments;
  }
}