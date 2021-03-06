// ANCHOR: Constants Import
import { DECREMENT } from '../../constants';

// ANCHOR: Decrement Action
export const decrementAction = (amount: number) => ({
  type: DECREMENT,
  payload: amount,
})
