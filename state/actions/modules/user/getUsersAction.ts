// ANCHOR: Constants Import
import { GET_USERS } from '../../../constants';

// ANCHOR: Get Users Action
export const getUsersAction = (users: any) => ({
  type: GET_USERS,
  payload: users,
})
