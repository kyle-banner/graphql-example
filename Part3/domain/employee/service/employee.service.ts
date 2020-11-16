import { Employee, QueryEmployeeArgs, MutationCreateEmployeeArgs, CreateEmployeePayload } from '@part3/graphqlTypes';

const employee = async (
  args: QueryEmployeeArgs,
  { dataSources }
): Promise<Employee> => {
  const response: Employee = await dataSources.rouletteApi.getEmployee(args.id);

  console.log('GET /employees/{id} response', response);

  return response;
};

const employees = async (
  { dataSources }
): Promise<Employee[]> => {
  const response: Employee[] = await dataSources.rouletteApi.getEmployees();

  console.log('GET /employees/ response', response);

  return response;
};

const createEmployee = async (
  args: MutationCreateEmployeeArgs,
  { dataSources }
): Promise<CreateEmployeePayload> => {
  const response: string = await dataSources.rouletteApi.createEmployee(args);

  console.log('POST /employees response', response);

  return {
    url: response
  };
};

export { employee, employees, createEmployee };
