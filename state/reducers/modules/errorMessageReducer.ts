// ANCHOR: Constants Import
import { ERROR_MESSAGE_CONSTANT } from '@state/constants';

// ANCHOR: Interface
interface IAction {
  type: string;
  payload: any;
}

// ANCHOR: Error Message Reducer
export const errorMessageReducer = (state = null, action: IAction) => {
  switch(action.type) {
    case ERROR_MESSAGE_CONSTANT:
      return action.payload;
    default:
      return state;
  }
}
