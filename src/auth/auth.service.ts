import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {

  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  public async signIn(
    email: string,
    pass: string
  ) {
    const user = await this.userService.find(email);

    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload = {
      sub: user.email,
      userName: user.name
    }
    return {
      access_token: await this.jwtService.signAsync(payload)
    };
  }
}
