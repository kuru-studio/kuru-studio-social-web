// ANCHOR: Type
import { AUTHENTICATE } from '../../action/constants';

// ANCHOR: Interface
interface IAction {
  type: string;
  payload: string | null;
}

// ANCHOR: Reducer
export const authenticateReducer = (state = null, action: IAction) => {
  switch(action.type) {
    case AUTHENTICATE:
      return action.payload;
    default:
      return state;
  }
}
