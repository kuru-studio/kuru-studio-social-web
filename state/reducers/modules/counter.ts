// ANCHOR: Type
import { INCREMENT, DECREMENT } from '../../action/constants';

// ANCHOR: Interface
interface IAction {
  type: string;
  payload: number;
}

// ANCHOR: Reducer
export const counterReducer = (state = 0, action: IAction) => {
  switch(action.type) {
    case INCREMENT:
      return state + action.payload;
    case DECREMENT:
      return state - action.payload;
    default:
      return state;
  }
}
