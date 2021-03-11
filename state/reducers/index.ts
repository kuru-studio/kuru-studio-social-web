// ANCOR: Redux Imports
import { combineReducers } from 'redux';

// ANCHOR: Module Imports
import { counterReducer } from './modules/counterReducer';
import { userTokenReducer } from './modules/userTokenReducer';
import { errorMessageReducer } from './modules/errorMessageReducer';
import { usersListReducer } from './modules/usersListReducer';

// ANCHOR: Combine Reducers
export const rootReducers = combineReducers({
  counter: counterReducer,
  userToken: userTokenReducer,
  errorMessage: errorMessageReducer,
  usersList: usersListReducer,
});
