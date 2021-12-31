// ANCHOR: GQL request
import * as schema from 'yup';

// ANCHOR: GraphQL Definition
import type { userDataRequestParametersInterface } from '@interfaces/index';

// ANCHOR: Utility Import
import { errorLog } from '@utilities/index';

// ANCHOR: Constant Import
import { ERROR_VALIDATION_CONSTANT } from '@state/constants';

const userDataShape = schema.object().shape({
  id: schema.string().required("ID is required"),
});

export async function userDataValidation(userDataRequestParameters: userDataRequestParametersInterface): Promise<boolean> {
  const isValid = await userDataShape.isValid(userDataRequestParameters).catch((error) => {
    errorLog(ERROR_VALIDATION_CONSTANT, error);
  });
  return !!isValid;
}
