import { merge } from 'lodash';
import employeeResolvers from '@part3Employee/resolver/employee.resolver';

export default merge(
  employeeResolvers,
);
