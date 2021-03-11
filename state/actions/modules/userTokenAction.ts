// ANCHOR: Constants Import
import { GET_USER_TOKEN } from '../../constants';

// ANCHOR: User Token Action
export const userTokenAction = (token: string | null) => ({
  type: GET_USER_TOKEN,
  payload: token,
})
