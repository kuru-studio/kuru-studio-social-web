// ANCHOR: Constants Import
import { INCREMENT_COUNTER_CONSTANT, DECREMENT_COUNTER_CONSTANT } from '@state/constants';

// ANCHOR: Interface
interface IAction {
  type: string;
  payload: number;
}

// ANCHOR: Counter Reducer
export const counterReducer = (state = 0, action: IAction) => {
  switch(action.type) {
    case INCREMENT_COUNTER_CONSTANT:
      return state + action.payload;
    case DECREMENT_COUNTER_CONSTANT:
      return state - action.payload;
    default:
      return state;
  }
}
