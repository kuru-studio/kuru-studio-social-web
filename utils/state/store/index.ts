// ANCHOR: Redux
import { combineReducers } from 'redux';

// ANCHOR: Reducers
import { authenticateReducer } from './modules/authenticate/reducer';

export const rootReducer = combineReducers({
  autenticate: authenticateReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
