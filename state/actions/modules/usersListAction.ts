// ANCHOR: Constants Import
import { GET_USERS, REQUEST_USERS } from '../../constants';

// ANCHOR: Get Users Action
export const getUsersAction = (users: any) => ({
  type: GET_USERS,
  payload: users,
})

// ANCHOR: Request Users Action
export const requestUsersAction = (token: string | null) => ({
  type: REQUEST_USERS,
  payload: token,
})
