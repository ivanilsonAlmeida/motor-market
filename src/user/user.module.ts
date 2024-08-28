import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseMongoModule } from 'src/repository/database.mongo/database.mongo.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserDto, UserSchema } from 'src/repository/database.mongo/schema/user.schema';

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports: [
    MongooseModule.forFeature([{name: UserDto.name, schema: UserSchema}])
  ]
})
export class UserModule {}
