// ANCHOR: Redux Saga Import
import { takeLatest } from 'redux-saga/effects'

// ANCHOR: Constant Import
import { REQUEST_USERS_LIST_CONSTANT } from '@state/constants';

// ANCHOR: Worker Import
import { usersListWorker } from '@state/workers/modules/usersListWorker';

// ANCHOR: Root Saga
export function* rootSaga() {
  yield takeLatest(REQUEST_USERS_LIST_CONSTANT, usersListWorker);
}
