import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from 'src/user/model/user.model';
import { UserRepository } from './mongodb/user.repository';
import { UserSchema } from './mongodb/schema/user.schema';
import { EmployeeRepository } from './mongodb/employee.repository';
import { Employee } from 'src/employee/model/employee.model';
import { EmployeeSchema } from './mongodb/schema/employee.schema';


@Module({
  providers: [UserRepository, EmployeeRepository],
  exports: [UserRepository, EmployeeRepository],
  imports: [
    MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
    MongooseModule.forFeature([{name: Employee.name, schema: EmployeeSchema}])
  ]
})
export class RepositoryModule {}
