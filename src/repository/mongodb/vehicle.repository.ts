import { Injectable, NotImplementedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Vehicle } from "src/vehicle/model/vehicle.model";

@Injectable()
export class VehicleRepository {

  constructor(
    @InjectModel(Vehicle.name) private readonly vehicleModel: Model<Vehicle>
  ) {}

  public async create() {
    return NotImplementedException;
  }

  public async delete() {
    return NotImplementedException;
  }

  public async update() {
    return NotImplementedException;
  }

  public async findOne() {
    return NotImplementedException;
  }

  public async findAll() {
    return NotImplementedException;
  }
}
