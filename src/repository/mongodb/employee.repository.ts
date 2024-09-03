import { Injectable, NotImplementedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee } from 'src/user/model/employee.model';

@Injectable()
export class EmployeeRepository {

  constructor(
    @InjectModel(Employee.name) private readonly userModel: Model<Employee>
  ) {}

  public async create() {
    return NotImplementedException;
  }

  public async update() {
    return NotImplementedException;
  }

  public async delete() {
    return NotImplementedException;
  }

  public async findOne() {
    return NotImplementedException;
  }

  public async findAll() {
    return NotImplementedException;
  }
}
