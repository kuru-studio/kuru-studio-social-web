// ANCOR: Redux Imports
import { combineReducers } from 'redux';

// ANCHOR: Module Imports
import { getCounterReducer } from './modules/counter';
import { getUserTokenReducer } from './modules/authenticate';
import { getErrorReducer } from './modules/error';
import { getUsersReducer } from './modules/user';

// ANCHOR: Combine Reducers
export const rootReducers = combineReducers({
  counter: getCounterReducer,
  userToken: getUserTokenReducer,
  error: getErrorReducer,
  users: getUsersReducer,
});
