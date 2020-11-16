import {
  QueryEmployeeArgs,
  Employee,
  Resolvers,
} from '../../graphqlTypes';
import employee from './employee.service';

const resolver: Resolvers = {
  Query: {
    employee: async (parent, args: QueryEmployeeArgs, { dataSources }): Promise<Employee> => {
      return employee(args, { dataSources });
    },
  },
};

export default resolver;
