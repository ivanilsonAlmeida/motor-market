import { Injectable, NotImplementedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/user/model/user.model";

@Injectable()
export class UserRepository {

  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>
  ) {}

  public async create(user: User) {
    try {
      return await this.userModel.create(user); 
    } catch (error) {
      console.error(`An error occurred in the repository: ${error}`);
      return error?.data;
    }
  }

  public async delete(email: string) {
    try {
      return await this.userModel.deleteOne({
        email
      });
    } catch (error) {
      console.error(`An error occurred in the repository: ${error}`);
      return error?.data;
    }
  }

  public async update(user: User) {
    try {
      return await this.userModel.updateOne({
        name: user.name,
        email: user.email,
        password: user.password
      });

    } catch (error) {
      console.error(`An error occurred in the repository: ${error}`);
      return error?.data;
    }
  }

  public async findUser(email: string) {
    try {
      return await this.userModel.findOne({
        email
      });
    } catch (error) {
      console.error(`An error occurred in the repository: ${error}`);
      return error?.data;
    }
  }

  public async findAll() {
    try {
      return await this.userModel.find(); 
    } catch (error) {
      console.error(`An error occurred in the repository: ${error}`);
      return error?.data;
    }
  }
}