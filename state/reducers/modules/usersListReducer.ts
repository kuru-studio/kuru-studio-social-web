// ANCHOR: Constants Import
import { GET_USERS } from '../../constants';

// ANCHOR: Interface
interface IAction {
  type: string;
  payload: any;
}

// ANCHOR: Users List Reducer
export const usersListReducer = (state = null, action: IAction) => {
  switch(action.type) {
    case GET_USERS:
      return action.payload;
    default:
      return state;
  }
}
