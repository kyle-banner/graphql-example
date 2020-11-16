/**
 * This file is used to resolve the ts config path aliases when building
 * for a production or other deployment.
 */
import { register } from 'tsconfig-paths';

const paths = {
  "@part2Employee/*": ["Part2/domain/employee/*"],
  "@part2/*": ["Part2/*"],
};
const baseUrl = '.';

register({
  baseUrl,
  paths,
});
