import { Injectable } from '@nestjs/common';
import { Sale } from './model/sale.model';
import { SaleRepository } from 'src/repository/mongodb/sale.repository';

@Injectable()
export class SaleService {

  constructor(
    private readonly repository: SaleRepository
  ) {}

  
  public async getSaleByRegistration(registration: number) {
    throw new Error('Method not implemented.');
  }
  
  public async allSales() {
    throw new Error('Method not implemented.');
  }
  
  public async confirmSale(registration: number, sale: Sale) {
    throw new Error('Method not implemented.');
  }
  
  public async registerSale(sale: Sale) {
    throw new Error('Method not implemented.');
  }
}
