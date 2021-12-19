// ANCHOR: GQL request
import * as schema from 'yup';

// ANCHOR: GraphQL Definition
import { userLoginRequestParametersInterface } from '@interfaces/index';

const userLoginShape = schema.object().shape({
  email: schema.string().required(),
  password: schema.string().required(),
});

export function userLoginValidation(data: userLoginRequestParametersInterface): boolean {
  userLoginShape.isValid(data).then((valid) => true);
  return false;
}
