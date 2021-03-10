// ANCHOR: Constants Import
import { GET_ERROR_MESSAGE } from '../../constants';

// ANCHOR: Interface
interface IAction {
  type: string;
  payload: any;
}

// ANCHOR: Get Error Reducer
export const getErrorReducer = (state = null, action: IAction) => {
  switch(action.type) {
    case GET_ERROR_MESSAGE:
      return action.payload;
    default:
      return state;
  }
}
