import { Employee, QueryEmployeeArgs } from '@part2/graphqlTypes';

const employee = async (
  args: QueryEmployeeArgs,
  { dataSources }
): Promise<Employee> => {
  const response: Employee = await dataSources.rouletteApi.getEmployee(args.id);

  console.log('getEmployee REST result', response);

  return response;
};

export default employee;
