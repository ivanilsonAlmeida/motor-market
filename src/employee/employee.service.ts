import { Inject, Injectable, NotImplementedException } from '@nestjs/common';
import { EmployeeRepository } from 'src/repository/mongodb/employee.repository';
import { Employee } from './model/employee.model';
import { IResponse } from 'src/shared/interface/response.interface';
import { IEmployee } from './interface/employee.interface';

@Injectable()
export class EmployeeService {

  constructor(
    @Inject()
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
      const employeeFinded = await this.repository.findOne(registration);

      if (!employeeFinded) {
        return;
      }

      const employeeUpdated = await this.repository.update(employee, employeeFinded._id);

      if (!employeeUpdated.matchedCount) {
        return {
          message: `User cannot be updated!`
        }
      }

      return {
        message: `Employee ${employee.name} updated successfully!`
      }
    } catch (error) {
      console.error(`An error occurred in the application: ${error}`);
      return error?.data;
    }
  }

  public async delete(registration: number): Promise<IResponse> {
    try {
      const employee = await this.repository.findOne(registration);

      if (!employee) {
        return;
      }

      const employeeDeleted = await this.repository.delete(registration);

      if (!employeeDeleted.deletedCount) {
        return {
          message: `Employee with mail ${registration} do not exist!`
        };
      }

      return {
        message: `Resource successfully deleted.`
      }
    } catch (error) {
      console.error(`An error occurred in the application: ${error}`);
      return error?.data;
    }
  }

  public async findAll(): Promise<Array<IEmployee>> {
    try {
      const employees: Array<Employee> = await this.repository.findAll();

      if (!employees) {
        return;
      }

      return employees.map((employee) => {
        return {
          name: employee.name,
          email: employee.email,
          password: employee.password,
          registration: employee.registration,
          userRole: employee.userRole
        }
      })
    } catch (error) {
      console.error(`An error occurred in the application: ${error}`);
      return error?.data;
    }
  }

  public async find(registration: number): Promise<IEmployee> {
    try {
      const employee = await this.repository.findOne(registration);

      return {
        name: employee.name,
        email: employee.email,
        password: employee.password,
        registration: employee.registration,
        userRole: employee.userRole
      }
    } catch (error) {
      console.error(`An error occurred in the application: ${error}`);
      return error?.data;
    }
  }
}
