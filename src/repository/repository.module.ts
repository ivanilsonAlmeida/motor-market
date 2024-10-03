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
import { SaleSchema } from './mongodb/schema/sale.schema';
import { Sale } from 'src/sale/model/sale.model';
import { SaleRepository } from './mongodb/sale.repository';


@Module({
  providers: [
    UserRepository, 
    EmployeeRepository, 
    VehicleRepository,
    SaleRepository
  ],
  exports: [
    UserRepository, 
    EmployeeRepository, 
    VehicleRepository,
    SaleRepository
  ],
  imports: [
    MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
    MongooseModule.forFeature([{name: Employee.name, schema: EmployeeSchema}]),
    MongooseModule.forFeature([{name: Vehicle.name, schema: VehicleSchema}]),
    MongooseModule.forFeature([{name: Sale.name, schema: SaleSchema}])
  ]
})
export class RepositoryModule {}
