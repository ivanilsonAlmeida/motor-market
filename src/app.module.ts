import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UserModule, 
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]
    }),
    MongooseModule.forRoot('mongodb://localhost/local')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
