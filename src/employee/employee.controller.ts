import { Body, Controller, Delete, Get, NotImplementedException, Param, Post, Put, UseGuards } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './model/employee.model';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/auth/roles/role.decorator';
import { RoleEnum } from 'src/auth/roles/enum/role.enum';

@Controller('employee')
export class EmployeeController {

  constructor(private readonly service: EmployeeService) {}

  @UseGuards(AuthGuard)
  @Roles(RoleEnum.USER)
  @Post('/')
  public createEmployee(@Body() employee: Employee) {
    return this.service.create(employee);
  }

  @UseGuards(AuthGuard)
  @Roles(RoleEnum.ADMIN)
  @Put(':registration')
  public updateEmployee(@Param('registration') registration: number, @Body() employee: Employee) {
    return this.service.update(registration, employee);
  }

  @UseGuards(AuthGuard)
  @Roles(RoleEnum.ADMIN)
  @Delete(':registration')
  public deleteEmployee(@Param('registration') registration: number) {
    return this.service.delete(registration);
  }

  @UseGuards(AuthGuard)
  @Roles(RoleEnum.USER)
  @Get('/employees')
  public listEmployee() {
    return this.service.findAll();
  }

  @UseGuards(AuthGuard)
  @Roles(RoleEnum.USER)
  @Get(':registration')
  public getEmployee(@Param('registration') registration: number) {
    return this.service.find(registration);
  }
}
