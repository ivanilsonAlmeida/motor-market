import { Body, Controller, Delete, Get, NotImplementedException, Param, Post, Put } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './model/employee.model';

@Controller('employee')
export class EmployeeController {

  constructor(private readonly service: EmployeeService) {}

  @Post('/')
  public createEmployee(@Body() employee: Employee) {
    return this.service.create(employee);
  }

  @Put(':registration')
  public updateEmployee(@Param('registration') registration: number, @Body() employee: Employee) {
    return this.service.update(registration, employee);
  }

  @Delete(':registration')
  public deleteEmployee(@Param('registration') registration: number) {
    return this.service.delete(registration);
  }

  @Get('/employees')
  public listEmployee() {
    return this.service.findAll();
  }

  @Get(':registration')
  public getEmployee(@Param('registration') registration: number) {
    return this.service.find(registration);
  }
}
