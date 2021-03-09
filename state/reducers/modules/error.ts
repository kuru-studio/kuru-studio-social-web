// ANCHOR: Constants Import
import { USER_FETCH_FAILED } from '../../constants';

// ANCHOR: Interface
interface IAction {
  type: string;
  payload: any;
}

// ANCHOR: User Reducer
export const errorReducer = (state = null, action: IAction) => {
  switch(action.type) {
    case USER_FETCH_FAILED:
      return action.payload;
    default:
      return state;
  }
}
