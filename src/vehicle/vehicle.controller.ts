import { Controller, NotImplementedException } from '@nestjs/common';
import { VehicleService } from './vehicle.service';

@Controller('vehicle')
export class VehicleController {

  constructor(
    private readonly service: VehicleService
  ) {}

  public createVehicle() {
    return NotImplementedException;
  }
  
  public updateVehicle() {
    return NotImplementedException;
  }

  public listVehicle() {
    return NotImplementedException;
  }

  public getVehicle() {
    return NotImplementedException;
  }
}
