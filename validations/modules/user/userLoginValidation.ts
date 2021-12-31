// ANCHOR: GQL request
import * as schema from 'yup';

// ANCHOR: GraphQL Definition
import type { userLoginRequestParametersInterface } from '@interfaces/index';

// ANCHOR: Utility Import
import { errorLog } from '@utilities/index';

// ANCHOR: Constant Import
import { ERROR_VALIDATION_CONSTANT } from '@state/constants';

const userLoginShape = schema.object().shape({
  email: schema.string().required("Email is required"),
  password: schema.string().required("Password is required"),
});

export async function userLoginValidation(userLoginRequestParameters: userLoginRequestParametersInterface): Promise<boolean> {
  const isValid = await userLoginShape.isValid(userLoginRequestParameters).catch((error) => {
    errorLog(ERROR_VALIDATION_CONSTANT, error);
  });
  return !!isValid;
}
