// ANCHOR: Constants Import
import { USER_FETCH_FAILED } from '../../../constants';

// ANCHOR: User Fetch Failed Action
export const userFetchFailedAction = (message: any) => ({
  type: USER_FETCH_FAILED,
  payload: message,
})
