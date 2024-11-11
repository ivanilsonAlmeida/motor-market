import { Module } from '@nestjs/common';
import { VehicleController } from './vehicle.controller';
import { VehicleService } from './vehicle.service';
import { RepositoryModule } from 'src/repository/repository.module';

@Module({
  controllers: [VehicleController],
  providers: [VehicleService],
  imports: [RepositoryModule],
})
export class VehicleModule {}
