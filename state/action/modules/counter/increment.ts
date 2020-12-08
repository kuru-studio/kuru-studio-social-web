// ANCHOR: Type
import { INCREMENT } from '../../types';

// ANCHOR: Action
export const incrementAction = (amount: number) => ({
  type: INCREMENT,
  payload: amount,
})
