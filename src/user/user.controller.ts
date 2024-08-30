import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { User } from './model/user.model';
import { Employee } from './model/employee.model';
import { UserService } from './user.service';
import { MethodEnum } from './enum/method.enum';

@Controller('user')
export class UserController {

  constructor(private readonly service: UserService) {}

  @Post('/')
  public createUser(@Body() user: User) {    
    return this.service.create(user);
  }

  @Delete(':id')
  public deleteUser(@Param('id') id: number) {
    return null;
  }

  @Put(':id')
  public updateUser(@Param('id') id: number, @Body() user: User) {
    return null;
  }

  @Get('/users')
  public listUser() {
    return null;
  }

  @Get(':id')
  public getUser(@Param('id') id: number) {
    return null;
  }
}
