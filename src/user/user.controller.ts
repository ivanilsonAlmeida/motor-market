import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { User } from './model/user.model';
import { Employee } from '../employee/model/employee.model';
import { UserService } from './user.service';
import { MethodEnum } from './enum/method.enum';

@Controller('user')
export class UserController {

  constructor(private readonly service: UserService) {}

  @Post('/')
  public createUser(@Body() user: User) {    
    return this.service.create(user);
  }

  @Delete(':email')
  public deleteUser(@Param('email') email: string) {
    return this.service.delete(email);
  }

  @Put(':email')
  public updateUser(@Param('email') email: string, @Body() user: User) {
    return this.service.update(email, user);
  }

  @Get('/users')
  public listUser() {
    return this.service.findAll();
  }

  @Get(':email')
  public getUser(@Param('email') email: string) {
    return this.service.find(email);
  }
}
