import { Injectable, NotImplementedException } from '@nestjs/common';
import { Payment } from './model/payment.model';
import { StatusPaymentEnum } from './enum/status-payment.enum';

@Injectable()
export class PaymentService {

  constructor() {}

  public paymentOrder(payment: Payment): Payment {
    payment.statusPayment = StatusPaymentEnum.APPROVED
    return payment;
  }
}
