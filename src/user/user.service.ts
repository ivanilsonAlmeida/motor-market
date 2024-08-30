import { Injectable, NotImplementedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MethodEnum } from './enum/method.enum';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './model/user.model';

@Injectable()
export class UserService {

  constructor(
    private readonly config: ConfigService,
    @InjectModel(User.name) private readonly userModel: Model<User>
  ) {}
  
  public handle() {
    return NotImplementedException;
  }

  public async create(user: User) {
    const createUser = await this.userModel.create(user)
    console.log(createUser);
    
    return null;
  }

}
