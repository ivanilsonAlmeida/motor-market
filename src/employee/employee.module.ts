import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { RepositoryModule } from 'src/repository/repository.module';

@Module({
  providers: [EmployeeService],
  controllers: [EmployeeController],
  imports: [RepositoryModule],
})
export class EmployeeModule {}
