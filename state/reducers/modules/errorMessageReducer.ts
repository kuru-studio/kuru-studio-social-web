// ANCHOR: Constants Import
import { GET_ERROR_MESSAGE } from '../../constants';

// ANCHOR: Interface
interface IAction {
  type: string;
  payload: any;
}

// ANCHOR: Error Message Reducer
export const errorMessageReducer = (state = null, action: IAction) => {
  switch(action.type) {
    case GET_ERROR_MESSAGE:
      return action.payload;
    default:
      return state;
  }
}
