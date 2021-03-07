// ANCOR: Redux Imports
import { createStore, applyMiddleware } from 'redux';
import { rootReducers } from '../reducers';
import { checkWindowObject } from '../../utilities/checkWindowObject';

// ANCOR: Redux Saga Imports
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from '../middleware'

// ANCHOR: Create Saga Middleware
const sagaMiddleware = createSagaMiddleware()

// ANCHOR: Redux Devtools Condition
const reduxDevtoolsToggle: boolean = process.env.NODE_ENV === 'development' && checkWindowObject;

// ANCHOR: Initialize Redux Store
export const reduxStore = createStore(
  rootReducers,
  reduxDevtoolsToggle
  && (window as any).__REDUX_DEVTOOLS_EXTENSION__
  && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware),
);

// ANCHOR: Run Sagas
sagaMiddleware.run(rootSaga);
