// ANCHOR: Constants Import
import { GET_USERS } from '../../constants';

// ANCHOR: Interface
interface IAction {
  type: string;
  payload: any;
}

// ANCHOR: User Reducer
export const userReducer = (state = null, action: IAction) => {
  switch(action.type) {
    case GET_USERS:
      return action.payload;
    default:
      return state;
  }
}
