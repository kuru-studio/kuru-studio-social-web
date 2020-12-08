import { combineReducers } from 'redux';

// ANCHOR: Modules
import { counterReducer } from './modules/counter';
import { authenticateReducer } from './modules/authenticate';

// ANCHOR: Combine Reducers
export const rootReducers = combineReducers({
  counterReducer,
  authenticateReducer,
});
