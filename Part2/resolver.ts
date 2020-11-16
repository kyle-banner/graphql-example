import { merge } from 'lodash';
import employeeResolvers from '@part2Employee/resolver/employee.resolver';

export default merge(
  employeeResolvers,
);
