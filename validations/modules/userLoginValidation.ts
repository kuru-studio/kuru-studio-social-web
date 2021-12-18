// ANCHOR: GQL request
import * as schema from 'yup';

const userLoginShape = schema.object().shape({
  email: schema.string().required(),
  password: schema.string().required(),
});

export function userLoginValidation(data: any): boolean {
  userLoginShape.isValid(data).then((valid) => true);
  return false;
}
