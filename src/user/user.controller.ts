import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { User } from './model/user.model';
import { Employee } from './model/employee.model';

@Controller('user')
export class UserController {

  constructor() {}

  @Post('')
  public createUser(@Body() user: User) {    
    return null;
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
