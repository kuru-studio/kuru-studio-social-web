// ANCHOR: Redux Import
import { combineReducers } from 'redux';

// ANCHOR: Module Import
import { counterReducer } from './modules/counterReducer';
import { errorMessageReducer } from './modules/errorMessageReducer';
import { usersListReducer } from './modules/usersListReducer';
import { userTokenReducer } from './modules/userTokenReducer';

// ANCHOR: Combine Reducers
export const rootReducers = combineReducers({
  counter: counterReducer,
  errorMessage: errorMessageReducer,
  usersList: usersListReducer,
  userToken: userTokenReducer,
});
