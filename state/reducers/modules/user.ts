// ANCHOR: Constants Import
import { USER_FETCH_SUCCEEDED } from '../../constants';

// ANCHOR: Interface
interface IAction {
  type: string;
  payload: any;
}

// ANCHOR: User Reducer
export const userReducer = (state = null, action: IAction) => {
  switch(action.type) {
    case USER_FETCH_SUCCEEDED:
      return action.payload;
    default:
      return state;
  }
}
