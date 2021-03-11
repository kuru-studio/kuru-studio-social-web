// ANCHOR: Constants Import
import { GET_USER_TOKEN } from '../../constants';

// ANCHOR: Interface
interface IAction {
  type: string;
  payload: string | null;
}

// ANCHOR: User Token Reducer
export const userTokenReducer = (state = null, action: IAction) => {
  switch(action.type) {
    case GET_USER_TOKEN:
      return action.payload;
    default:
      return state;
  }
}
