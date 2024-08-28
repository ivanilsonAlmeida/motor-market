import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { UserDto } from './schema/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: UserDto.name, schema: UserDto}])
  ]
})
export class DatabaseMongoModule {}
