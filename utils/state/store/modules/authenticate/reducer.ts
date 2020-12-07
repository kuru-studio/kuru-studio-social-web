import {
  AUTHENTICATE,
  AuthenticateState,
  AuthenticateActionTypes,
} from './types';

const initialState: AuthenticateState = null;

export function authenticateReducer(
  state = initialState,
  action: AuthenticateActionTypes,
) {
  switch (action.type) {
    case AUTHENTICATE:
      return action.payload;
    default:
      return state;
  }
}
