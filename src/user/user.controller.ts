import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { User } from './model/user.model';
import { UserService } from './user.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { RoleEnum } from 'src/auth/roles/enum/role.enum';
import { Roles } from 'src/auth/roles/role.decorator';

@Controller('user')
export class UserController {

  constructor(private readonly service: UserService) {}

  @Post('/')
  @Roles(RoleEnum.USER)
  public createUser(@Body() user: User) {    
    return this.service.create(user);
  }

  @UseGuards(AuthGuard)
  @Roles(RoleEnum.ADMIN)
  @Delete(':email')
  public deleteUser(@Param('email') email: string) {
    return this.service.delete(email);
  }

  @UseGuards(AuthGuard)
  @Roles(RoleEnum.ADMIN)
  @Put(':email')
  public updateUser(@Param('email') email: string, @Body() user: User) {
    return this.service.update(email, user);
  }

  @UseGuards(AuthGuard)
  @Roles(RoleEnum.USER)
  @Get('/users')
  public listUser() {
    return this.service.findAll();
  }

  @UseGuards(AuthGuard)
  @Roles(RoleEnum.USER)
  @Get(':email')
  public getUser(@Param('email') email: string) {
    return this.service.find(email);
  }
}
