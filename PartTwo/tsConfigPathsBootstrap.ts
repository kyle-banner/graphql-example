/**
 * This file is used to resolve the ts config path aliases when building
 * for a production or other deployment.
 */
import { register } from 'tsconfig-paths';

const paths = {
  "@partTwoEmployee/*": ["PartTwo/domain/employee/*"],
  "@partTwo/*": ["PartTwo/*"],
};
const baseUrl = '.';

register({
  baseUrl,
  paths,
});
