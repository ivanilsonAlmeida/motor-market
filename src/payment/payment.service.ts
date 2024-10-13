import { Injectable, NotImplementedException } from '@nestjs/common';
import { Payment } from './model/payment.model';

@Injectable()
export class PaymentService {

  constructor() {}

  public paymentOrder(payment: Payment) {
    return NotImplementedException;
  }
}
