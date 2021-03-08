// ANCHOR: Constants Import
import { AUTHENTICATE } from '../../constants';

// ANCHOR: Interface
interface IAction {
  type: string;
  payload: string | null;
}

// ANCHOR: Authenticate Reducer
export const authenticateReducer = (state = null, action: IAction) => {
  switch(action.type) {
    case AUTHENTICATE:
      return action.payload;
    default:
      return state;
  }
}
