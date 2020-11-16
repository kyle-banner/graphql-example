import { merge } from 'lodash';
import employeeResolvers from '../domain/employee/employee.resolver';
// import meetingResolvers from '../domain/meeting/meeting.resolver';

export default merge(
  employeeResolvers,
  // meetingResolvers
);
