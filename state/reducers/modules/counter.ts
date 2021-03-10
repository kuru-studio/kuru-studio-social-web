// ANCHOR: Constants Import
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../../constants';

// ANCHOR: Interface
interface IAction {
  type: string;
  payload: number;
}

// ANCHOR: Get Counter Reducer
export const getCounterReducer = (state = 0, action: IAction) => {
  switch(action.type) {
    case INCREMENT_COUNTER:
      return state + action.payload;
    case DECREMENT_COUNTER:
      return state - action.payload;
    default:
      return state;
  }
}
