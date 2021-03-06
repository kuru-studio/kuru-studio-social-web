// ANCHOR: Type
import { INCREMENT } from '../../constants';

// ANCHOR: Action
export const incrementAction = (amount: number) => ({
  type: INCREMENT,
  payload: amount,
})
