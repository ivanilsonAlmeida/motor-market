import { Injectable } from '@nestjs/common';
import { Sale } from './model/sale.model';
import { SaleRepository } from 'src/repository/mongodb/sale.repository';

@Injectable()
export class SaleService {

  constructor(
    private readonly repository: SaleRepository
  ) {}

  public async registerSale(sale: Sale) {
    try {
      const registerSale = await this.repository.create(sale);

      if (!registerSale) {
        return;
      }

    } catch (error) {
      console.error(`An error occurred in the application: ${error}`);
      return error?.data;
    }
  }

  public async confirmSale(registration: number, sale: Sale) {
    try {
      throw new Error('Method not implemented.');
    } catch (error) {
      console.error(`An error occurred in the application: ${error}`);
      return error?.data;
    }
  }

  public async getSaleByRegistration(registration: number) {
    try {
      throw new Error('Method not implemented.');
    } catch (error) {
      console.error(`An error occurred in the application: ${error}`);
      return error?.data;
    }
  }

  public async allSales() {
    try {
      throw new Error('Method not implemented.');
    } catch (error) {
      console.error(`An error occurred in the application: ${error}`);
      return error?.data;
    }
  }
}
