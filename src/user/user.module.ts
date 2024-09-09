import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { RepositoryModule } from 'src/repository/repository.module';

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports: [
    //MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
    RepositoryModule
  ]
})
export class UserModule {}
