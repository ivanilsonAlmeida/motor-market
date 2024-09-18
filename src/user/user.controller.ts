import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { User } from './model/user.model';
import { Employee } from '../employee/model/employee.model';
import { UserService } from './user.service';
import { MethodEnum } from './enum/method.enum';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('user')
export class UserController {

  constructor(private readonly service: UserService) {}

  @UseGuards(AuthGuard)
  @Post('/')
  public createUser(@Body() user: User) {    
    return this.service.create(user);
  }

  @UseGuards(AuthGuard)
  @Delete(':email')
  public deleteUser(@Param('email') email: string) {
    return this.service.delete(email);
  }

  @UseGuards(AuthGuard)
  @Put(':email')
  public updateUser(@Param('email') email: string, @Body() user: User) {
    return this.service.update(email, user);
  }

  @UseGuards(AuthGuard)
  @Get('/users')
  public listUser() {
    return this.service.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':email')
  public getUser(@Param('email') email: string) {
    return this.service.find(email);
  }
}
