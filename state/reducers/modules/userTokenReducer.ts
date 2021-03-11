// ANCHOR: Constants Import
import { USER_TOKEN_CONSTANT } from '../../constants';

// ANCHOR: Interface
interface IAction {
  type: string;
  payload: string | null;
}

// ANCHOR: User Token Reducer
export const userTokenReducer = (state = null, action: IAction) => {
  switch(action.type) {
    case USER_TOKEN_CONSTANT:
      return action.payload;
    default:
      return state;
  }
}
