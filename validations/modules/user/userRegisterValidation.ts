// ANCHOR: GQL request
import * as schema from 'yup';

// ANCHOR: GraphQL Definition
import type { userRegisterRequestParametersInterface } from '@interfaces/index';
import type { userRegisterValidationInterface } from '@interfaces/index';

// ANCHOR: Utility Import
import { errorLog } from '@utilities/errorLog';

// ANCHOR: Constant Import
import { ERROR_VALIDATION_CONSTANT } from '@state/constants';

const userRegisterShape = schema.object().shape({
  name: schema.string().required("Name is required"),
  email: schema.string().required("Email is required"),
  password: schema.string().required("Password is required"),
});

export async function userRegisterValidation(userRegisterRequestParameters: userRegisterRequestParametersInterface): Promise<userRegisterValidationInterface> {
  const isValid = await userRegisterShape.isValid(userRegisterRequestParameters).catch((error) => {
    errorLog(ERROR_VALIDATION_CONSTANT, error);
  });
  return !!isValid;
}
