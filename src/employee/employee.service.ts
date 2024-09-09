import { Injectable, NotImplementedException } from '@nestjs/common';
import { EmployeeRepository } from 'src/repository/mongodb/employee.repository';
import { Employee } from './model/employee.model';
import { IResponse } from 'src/shared/interface/response.interface';
import { IEmployee } from './interface/employee.interface';

@Injectable()
export class EmployeeService {

  constructor(
    private readonly repository: EmployeeRepository
  ) {}

  public async create(employee: Employee): Promise<IResponse> {
    try {
      const employeeCreated = await this.repository.create(employee);

      if (!employeeCreated) {
        return;
      }

      return {
        message: `Employee ${employee.name} created successfully!`
      }
    } catch (error) {
      console.error(`An error occurred in the application: ${error}`);
      return error?.data
    }
  }

  public async update(registration: number, employee: Employee): Promise<IResponse> {
    try {
      throw NotImplementedException;
    } catch (error) {
      console.error(`An error occurred in the application: ${error}`);
      return error?.data;
    }
  }

  public async delete(registration: number): Promise<IResponse> {
    try {
      throw NotImplementedException;
    } catch (error) {
      console.error(`An error occurred in the application: ${error}`);
      return error?.data;
    }
  }

  public async findAll(): Promise<Array<IEmployee>> {
    try {
      throw this.repository.findAll();
    } catch (error) {
      console.error(`An error occurred in the application: ${error}`);
      return error?.data;
    }
  }

  public async find(registration: number): Promise<IEmployee> {
    try {
      throw NotImplementedException;
    } catch (error) {
      console.error(`An error occurred in the application: ${error}`);
      return error?.data;
    }
  }
}
