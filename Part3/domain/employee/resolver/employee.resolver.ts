import {
  QueryEmployeeArgs,
  MutationCreateEmployeeArgs,
  Employee,
  Resolvers,
  CreateEmployeePayload,
} from '@part3/graphqlTypes';
import { employee, employees, createEmployee } from '@part3Employee/service/employee.service';

const resolver: Resolvers = {
  Query: {
    employee: async (parent, args: QueryEmployeeArgs, { dataSources }): Promise<Employee> => {
      return employee(args, { dataSources });
    },
    employees: async (parent, args, { dataSources }): Promise<Employee[]> => {
      return employees({ dataSources });
    }
  },
  Mutation: {
    createEmployee: async (parent, args: MutationCreateEmployeeArgs, { dataSources }): Promise<CreateEmployeePayload> => {
      return createEmployee(args, { dataSources });
    },
  }
};

export default resolver;
