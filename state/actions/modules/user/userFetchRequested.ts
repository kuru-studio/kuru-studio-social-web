// ANCHOR: Constants Import
import { USER_FETCH_REQUESTED } from '../../../constants';

// ANCHOR: User Fetch Requested Action
export const userFetchRequestedAction = (token: any) => ({
  type: USER_FETCH_REQUESTED,
  payload: token,
})
