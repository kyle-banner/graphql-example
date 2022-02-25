import { Employee, QueryEmployeeArgs } from '@part2/graphqlTypes';
import convertRestToGraphEmployeeEnums from '@part2Employee/util/convertRestToGraphEmployeeEnums';

const employee = async (
  args: QueryEmployeeArgs,
  dataSources
): Promise<Employee> => {
  const response = await dataSources.rouletteApi.getEmployee(args.id);

  console.log('getEmployee REST result', response);

  const employee: Employee = convertRestToGraphEmployeeEnums(response);

  return employee;
};

export default employee;
