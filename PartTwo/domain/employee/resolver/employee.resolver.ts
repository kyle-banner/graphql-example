import {
  QueryEmployeeArgs,
  Employee,
  Resolvers,
} from '@partTwo/graphqlTypes';
import employee from '@partTwoEmployee/service/employee.service';

const resolver: Resolvers = {
  Query: {
    employee: async (parent, args: QueryEmployeeArgs, { dataSources }): Promise<Employee> => {
      return employee(args, { dataSources });
    },
  },
};

export default resolver;
