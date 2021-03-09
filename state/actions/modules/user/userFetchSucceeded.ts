// ANCHOR: Constants Import
import { USER_FETCH_SUCCEEDED } from '../../../constants';

// ANCHOR: User Fetch Succeeded Action
export const userFetchSucceededAction = (user: any) => ({
  type: USER_FETCH_SUCCEEDED,
  payload: user,
})
