import { Injectable, NotImplementedException } from '@nestjs/common';
import { Sale } from './model/sale.model';
import { SaleRepository } from 'src/repository/mongodb/sale.repository';
import { ISale } from './interface/sale.interface';
import { SaleStateEnum } from './enum/sale.state';
import { PaymentService } from 'src/payment/payment.service';
import { Payment } from 'src/payment/model/payment.model';
import { StatusPaymentEnum } from 'src/payment/enum/status-payment.enum';
import { SaleDto } from './dto/Sale.dto';

@Injectable()
export class SaleService {

  constructor(
    private readonly repository: SaleRepository,
    private readonly paymentService: PaymentService
  ) {}

  public async registerSale(sale: Sale): Promise<ISale> {
    try {      
      sale.state = SaleStateEnum.PENDENT;
      sale.payment = this.paymentService.registerPaymentOrder(sale.payment);
      const saleRegister: Sale = await this.repository.create(sale);

      return {
        message: `Sale ${saleRegister.registration} registered successfully!`,
        sale: {
          registration: saleRegister.registration,
          nameClient: saleRegister.nameClient,
          totalPrice: saleRegister.totalPrice,
          payment: saleRegister.payment,
          vehicle: saleRegister.vehicle,
          state: saleRegister.state
        }
      };
    } catch (error) {
      console.error(`An error occurred in the application: ${error}`);
      return error?.data;
    }
  }

  public async confirmSale(registration: number): Promise<ISale> {
    try {
      const saleFinded: SaleDto = await this.repository.findOne(registration);

      if (saleFinded.state === SaleStateEnum.APPROVED) {
        return {
          message: `Sale ${saleFinded.registration} has already been approved.`,
          sale: {
            registration: saleFinded.registration,
            nameClient: saleFinded.nameClient,
            totalPrice: saleFinded.totalPrice,
            payment: saleFinded.payment,
            vehicle: saleFinded.vehicle,
            state: saleFinded.state
          }
        };
      }

      const paymentOrder: Payment = this.paymentService.confirmPaymentOrder(saleFinded.payment);

      if (paymentOrder.statusPayment === StatusPaymentEnum.REPROVED) {
        return {
          message: `Payment for sale ${saleFinded.registration} was reproved.`,
          sale: null
        };
      }

      saleFinded.payment = paymentOrder;
      saleFinded.state = SaleStateEnum.APPROVED;

      const saleConfirmed: Sale = await this.repository.update(
        new Sale(
          saleFinded.registration, 
          saleFinded.nameClient, 
          saleFinded.totalPrice, 
          saleFinded.payment, 
          saleFinded.vehicle, 
          saleFinded.state
        ), 
        saleFinded._id
      );

      return {
        message: `Sale ${saleConfirmed.registration} confirmed successfully.`,
        sale: {
          registration: saleConfirmed.registration,
          nameClient: saleConfirmed.nameClient,
          totalPrice: saleConfirmed.totalPrice,
          payment: saleConfirmed.payment,
          vehicle: saleConfirmed.vehicle,
          state: saleConfirmed.state
        }
      };
    } catch (error) {
      console.error(`An error occurred in the application: ${error}`);
      return error?.data;
    }
  }

  public async getSaleByRegistration(registration: number): Promise<ISale> {
    try {
      const sale = await this.repository.findOne(registration);

      return {
        message: `Sale ${registration} finded successfully!`,
        sale: {
          registration: sale.registration,
          nameClient: sale.nameClient,
          totalPrice: sale.totalPrice,
          payment: sale.payment,
          vehicle: sale.vehicle,
          state: sale.state
        }
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
          message: `Sale ${sale.registration}`,
          sale: {
            registration: sale.registration,
            nameClient: sale.nameClient,
            totalPrice: sale.totalPrice,
            payment: sale.payment,
            vehicle: sale.vehicle,
            state: sale.state
          }
        }
      });
    } catch (error) {
      console.error(`An error occurred in the application: ${error}`);
      return error?.data;
    }
  }
}
