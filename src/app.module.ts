import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { RepositoryModule } from './repository/repository.module';
import { EmployeeModule } from './employee/employee.module';
import { AuthModule } from './auth/auth.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { SaleModule } from './sale/sale.module';
import { PaymentModule } from './payment/payment.module';

const configService = new ConfigService();

@Module({
  imports: [
    UserModule, 
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongooseModule.forRoot(
      `${configService.get<string>('DATA_BASE_BASE_URL_LOCAL')}${configService.get('DATA_BASE')}`
    ),
    RepositoryModule,
    EmployeeModule,
    AuthModule,
    VehicleModule,
    SaleModule,
    PaymentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
