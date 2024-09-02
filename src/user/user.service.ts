import { Injectable, NotImplementedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './model/user.model';
import { IUser } from './interface/user.interface';
import { IResponse } from './response/message.response';

@Injectable()
export class UserService {

  constructor(
    private readonly config: ConfigService,
    @InjectModel(User.name) private readonly userModel: Model<User>
  ) {}

  public async create(user: User): Promise<IResponse> {
    try {
      const userCreated = await this.userModel.create(user);      
      
      if (!userCreated) {
        return;
      }      
      
      return {
        message: `User ${user.name} created successfully!`
      }
    } catch (error) {
      console.error(`An error occurred in the application: ${error}`);
      return error?.data;
    }
  }

  public async update(email: string, user: User): Promise<IResponse> {
    try {
      const userFind: User = await this.userModel.findOne({
        email
      });

      if (!userFind) {
        return {
          message: `User ${email} don't finded!`
        };
      }

      const userUpdated = await this.userModel.updateOne({
        name: user.name,
        email: user.email,
        password: user.password
      })

      if (!userUpdated.matchedCount) {
        return {
          message: `User cannot be updated!`
        }
      }

      console.log(userUpdated);
      return {
        message: `User ${user.name} updated successfully!`
      }
    } catch (error) {
      console.error(`An error occurred in the application: ${error}`);
      return error?.data;
    }
  }

  public async delete(email: string): Promise<IResponse> {
    try {

      const findUser: User = await this.userModel.findOne({
        email
      });
      
      if (!findUser) {
        return {
          message: `User ${email} don't finded!`
        };
      }
      
      const userDeleted = await this.userModel.deleteOne({
        email
      });

      if (!userDeleted.deletedCount) {
        return {
          message: `User with mail ${email} do not exist!`
        };
      }

      return {
        message: `Resource successfully deleted.`
      };
    } catch (error) {
      console.error(`An error occurred in the application: ${error}`);
      return error?.data;
    }
  }

  public async findAll(): Promise<Array<IUser>> {
    try {

      const users: User[] = await this.userModel.find();

      if (!users) {
        return;
      }

      return users.map((user) => {
        return {
          name: user.name,
          email: user.email,
          password: user.password
        }
      });
    } catch (error) {
      console.error(`An error occurred in the application: ${error}`);
      return error?.data;
    }
  }

  public async find(email: string): Promise<IUser> {
    try {

      const user: User = await this.userModel.findOne({
        email
      });

      return {
        name: user.name,
        email: user.email,
        password: user.password
      }
    } catch (error) {
      console.error(`An error occurred in the application: ${error}`);
      return error?.data;
    }
  }

}
