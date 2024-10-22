import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Module({
  providers: [PaymentService],
  exports: [PaymentService],
  imports: []
})
export class PaymentModule {}
