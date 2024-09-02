import { Module } from '@nestjs/common';
import { UserRepository } from './database.mongo/user.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from 'src/user/model/user.model';
import { UserSchema } from './database.mongo/schema/user.schema';

@Module({
  providers: [UserRepository],
  exports: [UserRepository],
  imports: [
    MongooseModule.forFeature([{name: User.name, schema: UserSchema}])
  ]
})
export class RepositoryModule {}
