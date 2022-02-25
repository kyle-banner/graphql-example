import {
  QueryEmployeeArgs,
  Employee,
  Resolvers,
} from '@part2/graphqlTypes';
import employee from '@part2Employee/service/employee.service';

const resolver: Resolvers = {
  Query: {
    employee: async (parent, args: QueryEmployeeArgs, context): Promise<Employee> => {
      return employee(args, context.dataSources);
    },
  },
};

export default resolver;
