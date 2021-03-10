// ANCHOR: Constants Import
import { GET_USERS } from '../../constants';

// ANCHOR: Interface
interface IAction {
  type: string;
  payload: any;
}

// ANCHOR: Get Users Reducer
export const getUsersReducer = (state = null, action: IAction) => {
  switch(action.type) {
    case GET_USERS:
      return action.payload;
    default:
      return state;
  }
}
