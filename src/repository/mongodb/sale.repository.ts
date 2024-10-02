import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Sale } from "src/sale/model/sale.model";
import { Repository } from "./interface/repository.interface";

export class SaleRepository implements Repository<Sale>{

  constructor(
    @InjectModel(Sale.name) private readonly saleModel: Model<Sale>
  ) {}

  create(sale: Sale) {
    throw new Error("Method not implemented.");
  }

  update(sale: Sale) {
    throw new Error("Method not implemented.");
  }

  findOne(registration: number) {
    throw new Error("Method not implemented.");
  }

  findAll() {
    throw new Error("Method not implemented.");
  }

  delete(t: string | number) {
    throw new Error("Method not implemented.");
  }


}
