import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { User } from 'src/user/model/user.model';
import { ICreate, IDelete, IFindAll, IFindOne, IRepository, IUpdate } from './interface/repository.interface';

@Injectable()
export class UserRepository implements IRepository<User>
{
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  public create(user: User) {
    try {
      return this.userModel.create(user);
    } catch (error) {
      console.error(`An error occurred in the repository: ${error}`);
      return error?.data;
    }
  }

  public delete(email: string) {
    try {
      return this.userModel.deleteOne({
        email,
      });
    } catch (error) {
      console.error(`An error occurred in the repository: ${error}`);
      return error?.data;
    }
  }

  public update(user: User, id: ObjectId) {
    try {
      return this.userModel.findByIdAndUpdate(id, {
        name: user.name,
        email: user.email,
        password: user.password,
      });
    } catch (error) {
      console.error(`An error occurred in the repository: ${error}`);
      return error?.data;
    }
  }

  public findOne(email: string) {
    try {
      return this.userModel.findOne({
        email,
      });
    } catch (error) {
      console.error(`An error occurred in the repository: ${error}`);
      return error?.data;
    }
  }

  public findAll() {
    try {
      return this.userModel.find().exec();
    } catch (error) {
      console.error(`An error occurred in the repository: ${error}`);
      return error?.data;
    }
  }
}
