// ANCHOR: Constants Import
import { GET_ERROR_MESSAGE } from '../../constants';

// ANCHOR: Error Message Action
export const errorMessageAction = (message: any) => ({
  type: GET_ERROR_MESSAGE,
  payload: message,
})
