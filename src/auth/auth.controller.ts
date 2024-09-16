import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/user/model/user.model';

@Controller('auth')
export class AuthController {

  constructor(
    private readonly service: AuthService
  ) {}

  @Post('login')
  public async getToken(@Body() user: User) {    
    return this.service.signIn(user.email, user.password);
  }
}
