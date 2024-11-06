import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { Vehicle } from './model/vehicle.model';
import { Roles } from 'src/auth/roles/role.decorator';
import { RoleEnum } from 'src/auth/roles/enum/role.enum';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('vehicle')
export class VehicleController {

  constructor(
    private readonly service: VehicleService
  ) {}

  @Post('/')
  @Roles(RoleEnum.USER)
  @UseGuards(AuthGuard)
  public createVehicle(@Body() vehicle: Vehicle) {
    //TODO - upload de foto do veiculo
    return this.service.create(vehicle);
  }
  
  @Put(':chassi')
  @Roles(RoleEnum.USER)
  @UseGuards(AuthGuard)
  public updateVehicle(@Param('chassi') chassi: string, @Body() vehicle: Vehicle) {
    return this.service.update(chassi, vehicle);
  }

  @Get('vehicles')
  @Roles(RoleEnum.USER)
  @UseGuards(AuthGuard)
  public listVehicle() {
    return this.service.findAll();
  }

  @Get(':chassi')
  @Roles(RoleEnum.USER)
  @UseGuards(AuthGuard)
  public getVehicle(@Param('chassi') chassi: string) {
    return this.service.find(chassi);
  }
}
