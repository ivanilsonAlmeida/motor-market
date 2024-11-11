import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants/jwt';
import { AuthController } from './auth.controller';
import { AuthGuard } from './auth.guard';

@Module({
  providers: [AuthService, AuthGuard],
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '300s' },
    }),
  ],
  controllers: [AuthController],
})
export class AuthModule {}
