import { RESTDataSource } from 'apollo-datasource-rest';

export class RouletteApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:8080/';
  }

  async getEmployee(employeeId: String) {
    if (!employeeId) {
      throw new Error('No employee id');
    }

    return {
      name: {
        firstName: 'Kyle',
        lastName: 'Banner',
      },
      title: 'Solution Architect',
      email: 'kyle.banner@slalom.com',
      practice: 'Technology Enablement',
      id: '1234'
    };
    // const result = await this.get(`employees/${employeeId}`);

    // return result;
  }
};