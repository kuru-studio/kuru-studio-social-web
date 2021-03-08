// ANCHOR: Constants Import
import { AUTHENTICATE } from '../../../constants';

// ANCHOR: Authenticate Action
export const authenticateAction = (token: string | null) => ({
  type: AUTHENTICATE,
  payload: token,
})
