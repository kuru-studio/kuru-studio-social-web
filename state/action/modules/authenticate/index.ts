// ANCHOR: Type
import { AUTHENTICATE } from '../../constants';

// ANCHOR: Action
export const authenticateAction = (token: string | null) => ({
  type: AUTHENTICATE,
  payload: token,
})
