// ANCOR: Redux Imports
import { combineReducers } from 'redux';

// ANCHOR: Module Imports
import { counterReducer } from './modules/counter';
import { authenticateReducer } from './modules/authenticate';

// ANCHOR: Combine Reducers
export const rootReducers = combineReducers({
  counterReducer,
  authenticateReducer,
});
