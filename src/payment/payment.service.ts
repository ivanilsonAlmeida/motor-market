import { Injectable } from '@nestjs/common';
import { Payment } from './model/payment.model';
import { StatusPaymentEnum } from './enum/status-payment.enum';

@Injectable()
export class PaymentService {
  constructor() {}

  public registerPaymentOrder(payment: Payment): Payment {
    payment.priceInstallments = this.calculateInstallments(
      payment.paymentInstallments,
      payment.totalValue,
    );
    payment.statusPayment = StatusPaymentEnum.PENDENT;
    return payment;
  }

  public confirmPaymentOrder(payment: Payment) {
    //TODO - create code to get payment confirmation using any system from cache (Redis, RabitMQ, Kafka etc)
    payment.statusPayment = StatusPaymentEnum.APPROVED;
    return payment;
  }

  private calculateInstallments(
    installments: number,
    totalValue: number,
  ): number {
    return Math.round(totalValue / installments);
  }
}
