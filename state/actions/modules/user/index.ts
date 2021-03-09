// ANCHOR: Constants Import
import { USER_FETCH_REQUESTED } from '../../../constants';

// ANCHOR: Authenticate Action
export const userFetchAction = (token: string | null) => ({
  type: USER_FETCH_REQUESTED,
  payload: token,
})
