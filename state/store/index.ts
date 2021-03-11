// ANCHOR: Redux Imports
import { createStore, applyMiddleware } from 'redux';
import { rootReducers } from '../reducers';

// ANCHOR: Redux Devtools Extension Import
import { composeWithDevTools } from 'redux-devtools-extension';

// ANCHOR: Redux Saga Imports
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from '../workers'

// ANCHOR: Create Saga Middleware
const sagaMiddleware = createSagaMiddleware()

// ANCHOR: Initialize Redux Store
export const reduxStore = createStore(
  rootReducers,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
);

// ANCHOR: Run Sagas
sagaMiddleware.run(rootSaga);
