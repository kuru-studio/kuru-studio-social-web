// ANCHOR: Redux Import
import { combineReducers } from 'redux';

// ANCHOR: Module Import
import { counterReducer } from '@state/reducers/modules/counterReducer';
import { errorMessageReducer } from '@state/reducers/modules/errorMessageReducer';
import { usersListReducer } from '@state/reducers/modules/usersListReducer';
import { userTokenReducer } from '@state/reducers/modules/userTokenReducer';

// ANCHOR: Combine Reducers
export const rootReducers = combineReducers({
  counter: counterReducer,
  errorMessage: errorMessageReducer,
  usersList: usersListReducer,
  userToken: userTokenReducer,
});
