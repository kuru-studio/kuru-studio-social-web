// ANCHOR: Constants Import
import { GET_USERS, REQUEST_USERS } from '../../constants';

// ANCHOR: Get Users List Action
export const storeUsersListAction = (users: any) => ({
  type: GET_USERS,
  payload: users,
})

// ANCHOR: Request Users List Action
export const requestUsersListAction = (token: string | null) => ({
  type: REQUEST_USERS,
  payload: token,
})
