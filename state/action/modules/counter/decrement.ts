// ANCHOR: Type
import { DECREMENT } from '../../types';

// ANCHOR: Action
export const decrementAction = (amount: number) => ({
  type: DECREMENT,
  payload: amount,
})
