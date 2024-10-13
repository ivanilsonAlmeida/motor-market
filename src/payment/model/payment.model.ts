import { TypePaymentEnum } from "../enum/type-payment.enum";

export class Payment {
  private _totalValue: string;
  private _typePayment: TypePaymentEnum;
  private _paymentInstallments: string;

  constructor(
    totalValue: string,
    typePayment: TypePaymentEnum,
    paymentInstallments: string,
  ) {
    this._totalValue = totalValue;
    this._typePayment = typePayment;
    this._paymentInstallments = paymentInstallments;
  }

  get totalValue(): string {
    return this._totalValue
  }

  set totalValue(totalValue: string) {
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
}