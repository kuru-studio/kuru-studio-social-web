// ANCHOR: Type
import { AUTHENTICATE } from '../../types';

// ANCHOR: Action
export const authenticateAction = (token: string | null) => ({
  type: AUTHENTICATE,
  payload: token,
})
