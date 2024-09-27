import { Injectable } from '@nestjs/common';
import { VehicleRepository } from 'src/repository/mongodb/vehicle.repository';
import { Vehicle } from './model/vehicle.model';
import { IResponse } from 'src/shared/interface/response.interface';
import { IVehicle } from './interface/vehicle.interface';

@Injectable()
export class VehicleService {

  constructor(
    private readonly repository: VehicleRepository
  ) {}

  public async create(vehicle: Vehicle): Promise<IResponse> {
    try {
      const vehicleCreated = await this.repository.create(vehicle)

      if (!vehicleCreated) {
        return;
      }

      return {
        message: `Vehicle created successfully!`
      }
    } catch (error) {
      console.error(`An error occurred in the application: ${error}`);
      return error?.data;
    }
  }

  public async update(chassi: string, vehicle: Vehicle): Promise<IResponse> {
    try {
      const vehicleFinded = await this.repository.findOne(chassi);

      if (!vehicleFinded) {
        return {
          message: `Vehicle with chassi ${chassi} don't finded!`
        }
      }

      const vehicleUpdated = await this.repository.update(vehicle);
      
      if (!vehicleUpdated.matchedCount) {
        return {
          message: `Vehicle cannot be updated!`
        }
      }
      return {
        message: `Vehicle updated successfully!`
      }
    } catch (error) {
      console.error(`An error occurred in the application: ${error}`);
      return error?.data;
    }
  }

  public async findAll(): Promise<Array<IVehicle>> {
    try {
      const vehicles = await this.repository.findAll();

      if (!vehicles) {
        return;
      }

      return vehicles.map((vehicle) => {
        return {
          chassi: vehicle.chassi,
          model: vehicle.model,
          brand: vehicle.brand,
          year: vehicle.year,
          color: vehicle.color,
          motor: vehicle.motor,
          hp: vehicle.hp
        }
      });
    } catch (error) {
      console.error(`An error occurred in the application: ${error}`);
      return error?.data;
    }
  }

  public async find(chassi: string): Promise<IVehicle> {
    try {
      const vehicle = await this.repository.findOne(chassi);

      return {
        chassi: vehicle.chassi,
        model: vehicle.model,
        brand: vehicle.brand,
        year: vehicle.year,
        color: vehicle.color,
        motor: vehicle.motor,
        hp: vehicle.hp
      }
    } catch (error) {
      console.error(`An error occurred in the application: ${error}`);
      return error?.data;
    }
  }
}
