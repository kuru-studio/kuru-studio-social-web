// ANCHOR: GQL request
import * as schema from 'yup';

// ANCHOR: GraphQL Definition
import type { userLoginRequestParametersInterface } from '@interfaces/index';
import type { userLoginValidationInterface } from '@interfaces/index';

const userLoginShape = schema.object().shape({
  email: schema.string().required("Email is required"),
  password: schema.string().required("Password is required"),
});

export async function userLoginValidation(userLoginRequestParameters: userLoginRequestParametersInterface): Promise<userLoginValidationInterface> {
  return await userLoginShape.isValid(userLoginRequestParameters);
}
