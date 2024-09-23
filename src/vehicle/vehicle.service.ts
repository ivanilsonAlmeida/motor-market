import { Injectable } from '@nestjs/common';
import { VehicleRepository } from 'src/repository/mongodb/vehicle.repository';

@Injectable()
export class VehicleService {

  constructor(
    private readonly repository: VehicleRepository
  ) {}
}
