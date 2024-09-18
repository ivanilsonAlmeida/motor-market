import { Body, Controller, Delete, Get, NotImplementedException, Param, Post, Put, UseGuards } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './model/employee.model';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('employee')
export class EmployeeController {

  constructor(private readonly service: EmployeeService) {}

  @UseGuards(AuthGuard)
  @Post('/')
  public createEmployee(@Body() employee: Employee) {
    return this.service.create(employee);
  }

  @UseGuards(AuthGuard)
  @Put(':registration')
  public updateEmployee(@Param('registration') registration: number, @Body() employee: Employee) {
    return this.service.update(registration, employee);
  }

  @UseGuards(AuthGuard)
  @Delete(':registration')
  public deleteEmployee(@Param('registration') registration: number) {
    return this.service.delete(registration);
  }

  @UseGuards(AuthGuard)
  @Get('/employees')
  public listEmployee() {
    return this.service.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':registration')
  public getEmployee(@Param('registration') registration: number) {
    return this.service.find(registration);
  }
}
