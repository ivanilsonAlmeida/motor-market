import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeRepository } from 'src/repository/mongodb/employee.repository';

describe('EmployeeRepository', () => {
  let service: EmployeeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeeRepository],
    }).compile();

    service = module.get<EmployeeRepository>(EmployeeRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
