// ANCHOR: Constant Import
import { USER_LOGIN_CONSTANT } from '@state/constants';

// ANCHOR: User Login Action
export const userLoginAction = (credentials: string | null) => ({
  type: USER_LOGIN_CONSTANT,
  payload: token,
})
