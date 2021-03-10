// ANCHOR: Constants Import
import { DECREMENT_COUNTER } from '../../../constants';

// ANCHOR: Decrement Counter Action
export const decrementCounterAction = (amount: number) => ({
  type: DECREMENT_COUNTER,
  payload: amount,
})
