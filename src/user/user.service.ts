import { Inject, Injectable } from '@nestjs/common';
import { User } from './model/user.model';
import { IUser } from './interface/user.interface';
import { IResponse } from '../shared/interface/response.interface';
import { UserRepository } from 'src/repository/mongodb/user.repository';
import { IRepository } from 'src/repository/mongodb/interface/repository.interface';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {

  constructor(private readonly repository: UserRepository) {}

  public async create(user: User): Promise<IResponse> {
    try {
      const userCreated = await this.repository.create(user);

      if (!userCreated) {
        return;
      }

      return {
        message: `User ${user.name} created successfully!`,
      };
    } catch (error) {
      console.error(`An error occurred in the application: ${error}`);
      return error?.data;
    }
  }

  public async update(email: string, user: User): Promise<IResponse> {
    try {
      const findUser: Partial<UserDto> = await this.repository.findOne(email);

      if (!findUser) {
        return {
          message: `User ${email} don't finded!`,
        };
      }

      const userUpdated = await this.repository.update(user, findUser._id);

      if (!userUpdated) {
        return {
          message: `User cannot be updated!`,
        };
      }

      return {
        message: `User ${user.name} updated successfully!`,
      };
    } catch (error) {
      console.error(`An error occurred in the application: ${error}`);
      return error?.data;
    }
  }

  public async delete(email: string): Promise<IResponse> {
    try {
      const findUser: Partial<User> = await this.repository.findOne(email);

      if (!findUser) {
        return {
          message: `User ${email} don't finded!`,
        };
      }

      await this.repository.delete(email);

      return {
        message: `Resource successfully deleted.`,
      };
    } catch (error) {
      console.error(`An error occurred in the application: ${error}`);
      return error?.data;
    }
  }

  public async findAll(): Promise<Array<IUser>> {
    try {
      const users = await this.repository.findAll();

      if (!users) {
        return;
      }

      return users.map((user: User) => {
        return {
          name: user.name,
          email: user.email,
          password: user.password,
        };
      });
    } catch (error) {
      console.error(`An error occurred in the application: ${error}`);
      return error?.data;
    }
  }

  public async find(email: string): Promise<IUser> {
    try {
      const user = await this.repository.findOne(email);

      return {
        name: user.name,
        email: user.email,
        password: user.password,
      };
    } catch (error) {
      console.error(`An error occurred in the application: ${error}`);
      return error?.data;
    }
  }
}
