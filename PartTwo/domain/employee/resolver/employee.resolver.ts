import {
  QueryEmployeeArgs,
  Employee,
  Resolvers,
} from '../../../../part2/domain/employee/resolver/node_modules/@part2/graphqlTypes';
import employee from '@part2/service/employee.service';

const resolver: Resolvers = {
  Query: {
    employee: async (parent, args: QueryEmployeeArgs, { dataSources }): Promise<Employee> => {
      return employee(args, { dataSources });
    },
  },
};

export default resolver;
