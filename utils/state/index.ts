/* eslint-disable no-underscore-dangle */
// ANCOR: Redux Imports
import { createStore } from 'redux';
import { checkWindowObject } from '../checkWindowObject';
import { rootReducer } from './store';

// ANCHOR: Redux Devtools Condition
const reduxDevtoolsToggle: boolean = process.env.NODE_ENV === 'development' && checkWindowObject;

// ANCHOR: Initialize Redux Store
export const reduxStore = createStore(
  rootReducer,
  reduxDevtoolsToggle
    && (window as any).__REDUX_DEVTOOLS_EXTENSION__
    && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);
