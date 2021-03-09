// ANCOR: Redux Imports
import { combineReducers } from 'redux';

// ANCHOR: Module Imports
import { counterReducer } from './modules/counter';
import { authenticateReducer } from './modules/authenticate';
import { errorReducer } from './modules/error';
import { userReducer } from './modules/user';

// ANCHOR: Combine Reducers
export const rootReducers = combineReducers({
  counterReducer,
  authenticateReducer,
  errorReducer,
  userReducer,
});
