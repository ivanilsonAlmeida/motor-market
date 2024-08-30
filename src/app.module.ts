import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { MongooseModule } from '@nestjs/mongoose';

const configService = new ConfigService();

@Module({
  imports: [
    UserModule, 
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]
    }),
    MongooseModule.forRoot(`${configService.get('DATA_BASE_BASE_URL_LOCAL')}${configService.get('DATA_BASE')}`)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
