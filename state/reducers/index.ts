// ANCHOR: Redux Import
import { combineReducers } from 'redux';

// ANCHOR: Module Import
import { counterReducer } from './modules/counterReducer';
import { errorMessageReducer } from './modules/errorMessageReducer';
import { userTokenReducer } from './modules/userTokenReducer';

// ANCHOR: Combine Reducers
export const rootReducers = combineReducers({
  counter: counterReducer,
  errorMessage: errorMessageReducer,
  userToken: userTokenReducer,
});
