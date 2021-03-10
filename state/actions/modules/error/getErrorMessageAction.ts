// ANCHOR: Constants Import
import { GET_ERROR_MESSAGE } from '../../../constants';

// ANCHOR: Get Error Message Action
export const getErrorMessageAction = (message: any) => ({
  type: GET_ERROR_MESSAGE,
  payload: message,
})
