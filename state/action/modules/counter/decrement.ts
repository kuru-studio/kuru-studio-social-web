// ANCHOR: Type
import { DECREMENT } from '../../constants';

// ANCHOR: Action
export const decrementAction = (amount: number) => ({
  type: DECREMENT,
  payload: amount,
})
