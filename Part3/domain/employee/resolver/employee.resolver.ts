import {
  QueryEmployeeArgs,
  Employee,
  Resolvers,
} from '@part3/graphqlTypes';
import employee from '@part3Employee/service/employee.service';

const resolver: Resolvers = {
  Query: {
    employee: async (parent, args: QueryEmployeeArgs, { dataSources }): Promise<Employee> => {
      return employee(args, { dataSources });
    },
  },
};

export default resolver;
