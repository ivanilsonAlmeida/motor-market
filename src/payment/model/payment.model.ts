import { StatusPaymentEnum } from "../enum/status-payment.enum";
import { TypePaymentEnum } from "../enum/type-payment.enum";

export class Payment {
  private _totalValue: number;
  private _typePayment: TypePaymentEnum;
  private _paymentInstallments: number;
  private _priceInstallments: number;
  private _statusPayment: StatusPaymentEnum

  constructor(
    totalValue: number,
    typePayment: TypePaymentEnum,
    paymentInstallments: number,
    priceInstallments: number,
    statusPayment: StatusPaymentEnum
  ) {
    this._totalValue = totalValue;
    this._typePayment = typePayment;
    this._paymentInstallments = paymentInstallments;
    this._priceInstallments = priceInstallments;
    this._statusPayment = statusPayment
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

  get paymentInstallments(): number {
    return this._paymentInstallments;
  }

  set paymentInstallments(paymentInstallments: number) {
    this._paymentInstallments = paymentInstallments;
  }

  get priceInstallments(): number {
    return this._priceInstallments;
  }

  set priceInstallments(priceInstallments: number) {
    this._priceInstallments = priceInstallments;
  }

  get statusPayment(): StatusPaymentEnum {
    return this._statusPayment;
  }

  set statusPayment(statusPayment: StatusPaymentEnum) {
    this._statusPayment = statusPayment;
  }
}