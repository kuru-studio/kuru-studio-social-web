// ANCHOR: Redux Import
import { createStore, applyMiddleware } from 'redux';
import { rootReducers } from '@state/reducers';

// ANCHOR: Redux Devtools Extension Import
import { composeWithDevTools } from 'redux-devtools-extension';

// ANCHOR: Redux Saga Import
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from '@state/workers'

// ANCHOR: Create Saga Middleware
const sagaMiddleware = createSagaMiddleware()

// ANCHOR: Initialize Redux Store
export const reduxStore = createStore(
  rootReducers,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
);

// ANCHOR: Run Redux Saga
sagaMiddleware.run(rootSaga);
