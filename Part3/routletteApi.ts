import { MutationCreateEmployeeArgs } from '@part3/graphqlTypes';
import { RESTDataSource } from 'apollo-datasource-rest';

export class RouletteApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:8080/';
  }

  async getEmployee(employeeId: String) {
    const result = await this.get(`employees/${employeeId}`);

    return result;
  }

  async getEmployees() {
    const result = await this.get('employees');

    return result;
  }

  async createEmployee(args: MutationCreateEmployeeArgs) {
    const result = await this.post('employees', {
      ...args.input
    });

    return result;
  }
};