import { Injectable, NotImplementedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { Vehicle } from "src/vehicle/model/vehicle.model";
import { Repository } from "./interface/repository.interface";

@Injectable()
export class VehicleRepository implements Repository<Vehicle> {

  constructor(
    @InjectModel(Vehicle.name) private readonly vehicleModel: Model<Vehicle>
  ) {}

  public create(vehicle: Vehicle) {
    try {
      return this.vehicleModel.create(vehicle);
    } catch (error) {
      console.error(`An error occurred in the repository: ${error}`);
      return error?.data;
    }
  }

  public delete(chassi: string) {
    try {
      return this.vehicleModel.deleteOne({
        chassi
      });
    } catch (error) {
      console.error(`An error occurred in the repository: ${error}`);
      return error?.data;
    }
  }

  public update(vehicle: Vehicle, id: ObjectId) {
    try {
      return this.vehicleModel.findByIdAndUpdate(id, {
        chassi: vehicle.chassi,
        model: vehicle.model,
        brand: vehicle.brand,
        year: vehicle.year,
        color: vehicle.color,
        motor: vehicle.motor,
        hp: vehicle.hp
      });
    } catch (error) {
      console.error(`An error occurred in the repository: ${error}`);
      return error?.data;
    }
  }

  public findOne(chassi: string) {
    try {
      return this.vehicleModel.findOne({
        chassi
      }); 
    } catch (error) {
      console.error(`An error occurred in the repository: ${error}`);
      return error?.data;
    }
  }

  public findAll() {
    try {
      return this.vehicleModel.find().exec();
    } catch (error) {
      console.error(`An error occurred in the repository: ${error}`);
      return error?.data;
    }
  }
}
