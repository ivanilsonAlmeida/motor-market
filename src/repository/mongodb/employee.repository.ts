import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee } from 'src/employee/model/employee.model';

@Injectable()
export class EmployeeRepository {

  constructor(
    @InjectModel(Employee.name) private readonly employeeModel: Model<Employee>
  ) {}

  public async create(employee: Employee) {
    try {
      return this.employeeModel.create(employee);
    } catch (error) {
      console.error(`An error occurred in the repository: ${error}`);
      return error?.data;
    }
  }

  public async update(registration: number) {
    try {
      return this.employeeModel.updateOne({
        registration
      });
    } catch (error) {
      console.error(`An error occurred in the repository: ${error}`);
      return error?.data;
    }
  }

  public async delete(registration: number) {
    try {
      return this.employeeModel.deleteOne({
        registration
      });
    } catch (error) {
      console.error(`An error occurred in the repository: ${error}`);
      return error?.data;
    }
  }

  public async findOne(registration: number) {
    try {
      return this.employeeModel.findOne({
        registration
      });
    } catch (error) {
      console.error(`An error occurred in the repository: ${error}`);
      return error?.data;
    }
  }

  public async findAll() {
    try {
      return this.employeeModel.find();
    } catch (error) {
      console.error(`An error occurred in the repository: ${error}`);
      return error?.data;
    }
  }
}
