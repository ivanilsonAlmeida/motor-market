import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Employee } from 'src/employee/model/employee.model';
import { ICreate, IRepository, IUpdate } from './interface/repository.interface';


@Injectable()
export class EmployeeRepository implements IRepository<Employee>
{
  constructor(
    @InjectModel(Employee.name) private readonly employeeModel: Model<Employee>,
  ) {}

  public create(employee: Employee) {
    try {
      return this.employeeModel.create(employee);
    } catch (error) {
      console.error(`An error occurred in the repository: ${error}`);
      return error?.data;
    }
  }

  public update(employee: Employee, id: ObjectId) {
    try {
      return this.employeeModel.findByIdAndUpdate(id, {
        name: employee.name,
        email: employee.email,
        password: employee.password,
        registration: employee.registration,
        userRole: employee.userRole,
      });
    } catch (error) {
      console.error(`An error occurred in the repository: ${error}`);
      return error?.data;
    }
  }

  public delete(registration: number) {
    try {
      return this.employeeModel.deleteOne({
        registration,
      });
    } catch (error) {
      console.error(`An error occurred in the repository: ${error}`);
      return error?.data;
    }
  }

  public findOne(registration: number) {
    try {
      return this.employeeModel.findOne({
        registration,
      });
    } catch (error) {
      console.error(`An error occurred in the repository: ${error}`);
      return error?.data;
    }
  }

  public findAll() {
    try {
      return this.employeeModel.find().exec();
    } catch (error) {
      console.error(`An error occurred in the repository: ${error}`);
      return error?.data;
    }
  }
}
