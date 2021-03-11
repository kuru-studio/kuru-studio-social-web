// ANCHOR: Constants Import
import { DECREMENT_COUNTER, INCREMENT_COUNTER } from '../../constants';

// ANCHOR: Decrement Counter Action
export const decrementCounterAction = (amount: number) => ({
  type: DECREMENT_COUNTER,
  payload: amount,
})

// ANCHOR: Increment Counter Action
export const incrementCounterAction = (amount: number) => ({
  type: INCREMENT_COUNTER,
  payload: amount,
})
