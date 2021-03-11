// ANCHOR: Constant Import
import { STORE_USERS_LIST_CONSTANT, REQUEST_USERS_LIST_CONSTANT } from '../../constants';

// ANCHOR: Store Users List Action
export const storeUsersListAction = (users: any) => ({
  type: STORE_USERS_LIST_CONSTANT,
  payload: users,
})

// ANCHOR: Request Users List Action
export const requestUsersListAction = (token: string | null) => ({
  type: REQUEST_USERS_LIST_CONSTANT,
  payload: token,
})
