import { Body, Controller, Get, NotImplementedException, Param, Post, Put } from '@nestjs/common';
import { Sale } from './model/sale.model';
import { SaleService } from './sale.service';

@Controller('sale')
export class SaleController {

  constructor(
    private readonly saleService: SaleService
  ) {}

  @Post('/')
  public register(@Body() sale: Sale) {
    return this.saleService.registerSale(sale);
  }

  @Put(':registration')
  public checkout(@Param('registration') registration: number) {
    return this.saleService.confirmSale(registration);
  }

  @Get('sales')
  public listAllSale() {
    return this.saleService.allSales();
  }

  @Get(':registration')
  public getSale(@Param('registration') registration: number) {
    return this.saleService.getSaleByRegistration(registration);
  }
}
