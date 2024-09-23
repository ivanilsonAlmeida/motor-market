import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from 'src/user/model/user.model';
import { UserRepository } from './mongodb/user.repository';
import { UserSchema } from './mongodb/schema/user.schema';
import { EmployeeRepository } from './mongodb/employee.repository';
import { Employee } from 'src/employee/model/employee.model';
import { EmployeeSchema } from './mongodb/schema/employee.schema';
import { VehicleRepository } from './mongodb/vehicle.repository';
import { VehicleSchema } from './mongodb/schema/vehicle.schema';
import { Vehicle } from 'src/vehicle/model/vehicle.model';


@Module({
  providers: [UserRepository, EmployeeRepository, VehicleRepository],
  exports: [UserRepository, EmployeeRepository, VehicleRepository],
  imports: [
    MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
    MongooseModule.forFeature([{name: Employee.name, schema: EmployeeSchema}]),
    MongooseModule.forFeature([{name: Vehicle.name, schema: VehicleSchema}])
  ]
})
export class RepositoryModule {}
