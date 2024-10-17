import { Injectable, NotImplementedException } from '@nestjs/common';
import { Sale } from './model/sale.model';
import { SaleRepository } from 'src/repository/mongodb/sale.repository';
import { ISale } from './interface/sale.interface';
import { SaleStateEnum } from './enum/sale.state';
import { PaymentService } from 'src/payment/payment.service';
import { Payment } from 'src/payment/model/payment.model';
import { log } from 'console';

@Injectable()
export class SaleService {

  constructor(
    private readonly repository: SaleRepository,
    private readonly paymentService: PaymentService
  ) {}

  public async registerSale(sale: Sale) {
    try {      
      sale.state = SaleStateEnum.PENDENT;

      const saleRegister: Sale = await this.repository.create(sale);

      const paymentOrder = this.paymentService.paymentOrder(sale.payment);


    } catch (error) {
      console.error(`An error occurred in the application: ${error}`);
      return error?.data;
    }
  }

  public async confirmSale(registration: number, sale: Sale) {
    try {
      const currentFinded: Sale = await this.repository.findOne(registration);

      if (!currentFinded) {
        return;
      }

      currentFinded.state = SaleStateEnum.APPROVED;

      return this.repository.update(currentFinded);
    } catch (error) {
      console.error(`An error occurred in the application: ${error}`);
      return error?.data;
    }
  }

  public async getSaleByRegistration(registration: number): Promise<ISale> {
    try {
      const sale = await this.repository.findOne(registration);

      return {
        registration: sale.registration,
        nameClient: sale.nameClient,
        totalPrice: sale.totalPrice,
        payment: sale.payment,
        vehicle: sale.vehicle
      }
    } catch (error) {
      console.error(`An error occurred in the application: ${error}`);
      return error?.data;
    }
  }

  public async allSales(): Promise<Array<ISale>> {
    try {
      const sales = await this.repository.findAll();

      if (!sales) {
        return;
      }

      return sales.map((sale: Sale) => {
        return {
          registration: sale.registration,
          nameClient: sale.nameClient,
          totalPrice: sale.totalPrice,
          payment: sale.payment,
          vehicle: sale.vehicle
        }
      });
    } catch (error) {
      console.error(`An error occurred in the application: ${error}`);
      return error?.data;
    }
  }
}
