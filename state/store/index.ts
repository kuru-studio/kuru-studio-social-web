// ANCOR: Redux Imports
import { createStore, applyMiddleware } from 'redux';
import { rootReducers } from '../reducers';

// ANCOR: Redux Devtools Extension Import
import { composeWithDevTools } from 'redux-devtools-extension';

// ANCOR: Redux Saga Imports
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from '../middleware'

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
