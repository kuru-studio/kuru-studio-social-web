// ANCHOR: Constant Import
import { ERROR_MESSAGE_CONSTANT } from '@state/constants';

// ANCHOR: Error Message Action
export const errorMessageAction = (message: any) => ({
  type: ERROR_MESSAGE_CONSTANT,
  payload: message,
})
