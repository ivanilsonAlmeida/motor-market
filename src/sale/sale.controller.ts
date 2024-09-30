import { Body, Controller, Get, NotImplementedException, Param, Post, Put } from '@nestjs/common';
import { Sale } from './model/sale.model';

@Controller('sale')
export class SaleController {

  constructor() {}


  @Post('/')
  public register(@Body() sale: Sale) {
    return NotImplementedException;
  }

  @Put(':registration')
  public checkout(@Param('registration') registration: number, @Body() sale: Sale) {
    return NotImplementedException;
  }

  @Get('sales')
  public listAllSale() {
    return NotImplementedException;
  }

  @Get(':registration')
  public getSale(@Param('registration') registration: number) {
    return NotImplementedException;
  }
}
