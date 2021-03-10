// ANCHOR: Constants Import
import { REQUEST_USERS } from '../../../constants';

// ANCHOR: Request Users Action
export const requestUsersAction = (token: string | null) => ({
  type: REQUEST_USERS,
  payload: token,
})
