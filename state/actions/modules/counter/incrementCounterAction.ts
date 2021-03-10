// ANCHOR: Constants Import
import { INCREMENT_COUNTER } from '../../../constants';

// ANCHOR: Increment Counter Action
export const incrementCounterAction = (amount: number) => ({
  type: INCREMENT_COUNTER,
  payload: amount,
})
