import { merge } from 'lodash';
import employeeResolvers from '@partTwoEmployee/resolver/employee.resolver';

export default merge(
  employeeResolvers,
);
