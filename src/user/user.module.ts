import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/repository/database.mongo/schema/user.schema';
import { User } from './model/user.model';

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports: [
    MongooseModule.forFeature([{name: User.name, schema: UserSchema}])
  ]
})
export class UserModule {}
