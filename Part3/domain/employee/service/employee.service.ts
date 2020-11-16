import { Employee, QueryEmployeeArgs, MutationCreateEmployeeArgs, CreateEmployeePayload, MutationDeleteEmployeeArgs, DeleteEmployeePayload } from '@part3/graphqlTypes';

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

  console.log('GET /employees response', response);

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

const deleteEmployee = async (
  args: MutationDeleteEmployeeArgs,
  { dataSources }
): Promise<DeleteEmployeePayload> => {
  const response: string = await dataSources.rouletteApi.deleteEmployee(args);

  console.log('DELETE /employees/{id} response', response);

  // 404 will be thrown and shown in playground if encountered

  return {
    success: true
  };
};

export { employee, employees, createEmployee, deleteEmployee };
