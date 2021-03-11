// ANCHOR: Constant Import
import { DECREMENT_COUNTER_CONSTANT, INCREMENT_COUNTER_CONSTANT } from '../../constants';

// ANCHOR: Decrement Counter Action
export const decrementCounterAction = (amount: number) => ({
  type: DECREMENT_COUNTER_CONSTANT,
  payload: amount,
})

// ANCHOR: Increment Counter Action
export const incrementCounterAction = (amount: number) => ({
  type: INCREMENT_COUNTER_CONSTANT,
  payload: amount,
})
