import { Module } from '@nestjs/common';
import { SaleService } from './sale.service';
import { SaleController } from './sale.controller';
import { RepositoryModule } from 'src/repository/repository.module';

@Module({
  providers: [SaleService],
  controllers: [SaleController],
  imports: [RepositoryModule]
})
export class SaleModule {}
