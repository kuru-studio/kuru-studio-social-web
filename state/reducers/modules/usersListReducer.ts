// ANCHOR: Constants Import
import { STORE_USERS_LIST_CONSTANT } from '@state/constants';

// ANCHOR: Interface
interface IAction {
  type: string;
  payload: any;
}

// ANCHOR: Users List Reducer
export const usersListReducer = (state = null, action: IAction) => {
  switch(action.type) {
    case STORE_USERS_LIST_CONSTANT:
      return action.payload;
    default:
      return state;
  }
}
