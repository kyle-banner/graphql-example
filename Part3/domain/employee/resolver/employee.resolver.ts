import {
  QueryEmployeeArgs,
  MutationCreateEmployeeArgs,
  Employee,
  Resolvers,
  CreateEmployeePayload,
  MutationDeleteEmployeeArgs,
  DeleteEmployeePayload,
} from '@part3/graphqlTypes';
import { employee, employees, createEmployee, deleteEmployee } from '@part3Employee/service/employee.service';

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
    deleteEmployee: async (parent, args: MutationDeleteEmployeeArgs, { dataSources }): Promise<DeleteEmployeePayload> => {
      return deleteEmployee(args, { dataSources });
    }
  }
};

export default resolver;
