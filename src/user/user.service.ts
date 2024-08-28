import { Injectable, NotImplementedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserDto } from '../repository/database.mongo/schema/user.schema'
import { MethodEnum } from './enum/method.enum';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './model/user.model';

@Injectable()
export class UserService {

  constructor(
    private readonly config: ConfigService,
    @InjectModel(UserDto.name) private readonly userModel: Model<UserDto>
  ) {}
  
  public handle() {
    return NotImplementedException;
  }

  public async create(user: UserDto) {
    const createUser = await this.userModel.create(user)
    console.log(createUser);
    
    return null;
  }

}
