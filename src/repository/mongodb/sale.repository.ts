import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { Sale } from "src/sale/model/sale.model";
import { Repository } from "./interface/repository.interface";
import { Injectable, NotImplementedException } from "@nestjs/common";

@Injectable()
export class SaleRepository implements Repository<Sale>{

  constructor(
    @InjectModel(Sale.name) private readonly saleModel: Model<Sale>
  ) {}

  public async create(sale: Sale) {
    try {
      return this.saleModel.create(sale);
    } catch (error) {
      console.error(`An error occurred in the repository: ${error}`);
      return error?.data;
    }
  }

  public async update(sale: Sale, id: ObjectId) {
    try {
      return this.saleModel.findByIdAndUpdate(id, {
        registration: sale.registration,
        nameClient: sale.nameClient,
        totalPrice: sale.totalPrice,
        payment: sale.payment,
        vehicle: sale.vehicle,
        state: sale.state,
      }, {
        new: true
      });
    } catch (error) {
      console.error(`An error occurred in the repository: ${error}`);
      return error?.data;
    }
  }

  public async findOne(registration: number) {
    try {
      return this.saleModel.findOne({
        registration
      }); 
    } catch (error) {
      console.error(`An error occurred in the repository: ${error}`);
      return error?.data;
    }
  }

  public async findAll() {
    try {
      return this.saleModel.find().exec(); 
    } catch (error) {
      console.error(`An error occurred in the repository: ${error}`);
      return error?.data;
    }
  }

  public async delete(t: string | number) {
    throw NotImplementedException;
  }


}
