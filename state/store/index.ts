// ANCOR: Redux Imports
import { createStore } from 'redux';
import { rootReducers } from '../reducers';
import { checkWindowObject } from '../../utilities/checkWindowObject';

// ANCHOR: Redux Devtools Condition
const reduxDevtoolsToggle: boolean = process.env.NODE_ENV === 'development' && checkWindowObject;

// ANCHOR: Initialize Redux Store
export const reduxStore = createStore(
  rootReducers,
  reduxDevtoolsToggle
  && (window as any).__REDUX_DEVTOOLS_EXTENSION__
  && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);
