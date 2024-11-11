import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Sale } from './model/sale.model';
import { SaleService } from './sale.service';
import { Roles } from 'src/auth/roles/role.decorator';
import { RoleEnum } from 'src/auth/roles/enum/role.enum';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('sale')
export class SaleController {
  constructor(private readonly saleService: SaleService) {}

  @Post('/')
  @Roles(RoleEnum.USER)
  @UseGuards(AuthGuard)
  public register(@Body() sale: Sale) {
    return this.saleService.registerSale(sale);
  }

  @Put(':registration')
  @Roles(RoleEnum.USER)
  @UseGuards(AuthGuard)
  public checkout(@Param('registration') registration: number) {
    return this.saleService.confirmSale(registration);
  }

  @Get('sales')
  @Roles(RoleEnum.USER)
  @UseGuards(AuthGuard)
  public listAllSale() {
    return this.saleService.allSales();
  }

  @Get(':registration')
  @Roles(RoleEnum.USER)
  @UseGuards(AuthGuard)
  public getSale(@Param('registration') registration: number) {
    return this.saleService.getSaleByRegistration(registration);
  }
}
