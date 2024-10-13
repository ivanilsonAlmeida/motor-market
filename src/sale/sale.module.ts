import { Module } from '@nestjs/common';
import { SaleService } from './sale.service';
import { SaleController } from './sale.controller';
import { RepositoryModule } from 'src/repository/repository.module';
import { PaymentModule } from 'src/payment/payment.module';

@Module({
  providers: [SaleService],
  controllers: [SaleController],
  imports: [
    RepositoryModule, 
    PaymentModule
  ]
})
export class SaleModule {}
