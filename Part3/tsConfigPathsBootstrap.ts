/**
 * This file is used to resolve the ts config path aliases when building
 * for a production or other deployment.
 */
import { register } from 'tsconfig-paths';

const paths = {
  "@part3Employee/*": ["domain/employee/*"],
  "@part3/*": ["*"],
};
const baseUrl = '.';

register({
  baseUrl,
  paths,
});
