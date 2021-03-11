// ANCHOR: Constants Import
import { USER_TOKEN_CONSTANT } from '../../constants';

// ANCHOR: User Token Action
export const userTokenAction = (token: string | null) => ({
  type: USER_TOKEN_CONSTANT,
  payload: token,
})
