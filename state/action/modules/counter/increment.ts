// ANCHOR: Constants Import
import { INCREMENT } from '../../constants';

// ANCHOR: Increment Action
export const incrementAction = (amount: number) => ({
  type: INCREMENT,
  payload: amount,
})
