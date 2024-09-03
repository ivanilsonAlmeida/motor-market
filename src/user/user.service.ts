import { Injectable } from '@nestjs/common';
import { User } from './model/user.model';
import { IUser } from './interface/user.interface';
import { IResponse } from '../shared/interface/response.interface';
import { UserRepository } from 'src/repository/mongodb/user.repository';


@Injectable()
export class UserService {

  constructor(
    private readonly repository: UserRepository
  ) {}

  public async create(user: User): Promise<IResponse> {
    try {
      const userCreated = await this.repository.create(user);
      
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
     const findUser = await this.repository.findUser(email)

      if (!findUser) {
        return {
          message: `User ${email} don't finded!`
        };
      }

      const userUpdated = await this.repository.update(user);

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

      const findUser = await this.repository.findUser(email);
      
      if (!findUser) {
        return {
          message: `User ${email} don't finded!`
        };
      }

      const userDeleted = await this.repository.delete(email);

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
      const users = await this.repository.findAll();

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
     const user = await this.repository.findUser(email);

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
