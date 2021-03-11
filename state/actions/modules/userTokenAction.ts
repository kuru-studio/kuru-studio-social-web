// ANCHOR: Constants Import
import { GET_USER_TOKEN } from '../../constants';

// ANCHOR: Get User Token Action
export const getUserTokenAction = (token: string | null) => ({
  type: GET_USER_TOKEN,
  payload: token,
})
