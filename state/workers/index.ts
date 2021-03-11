import { takeLatest } from 'redux-saga/effects'
import { REQUEST_USERS_LIST_CONSTANT } from '../constants';
import { usersListWorker } from './modules/usersListWorker';

export function* rootSaga() {
  yield takeLatest(REQUEST_USERS_LIST_CONSTANT, usersListWorker);
}
