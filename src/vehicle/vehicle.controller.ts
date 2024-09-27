import { Body, Controller, Get, NotImplementedException, Param, Post, Put } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { Vehicle } from './model/vehicle.model';

@Controller('vehicle')
export class VehicleController {

  constructor(
    private readonly service: VehicleService
  ) {}

  @Post('/')
  public createVehicle(@Body() vehicle: Vehicle) {
    return this.service.create(vehicle);
  }
  
  @Put(':chassi')
  public updateVehicle(@Param('chassi') chassi: string, @Body() vehicle: Vehicle) {
    return this.service.update(chassi, vehicle);
  }

  @Get('vehicles')
  public listVehicle() {
    return this.service.findAll();
  }

  @Get(':chassi')
  public getVehicle(@Param('chassi') chassi: string) {
    return this.service.find();
  }
}
