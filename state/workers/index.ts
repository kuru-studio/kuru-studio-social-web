import { takeLatest } from 'redux-saga/effects'
import { REQUEST_USERS } from '../constants';
import { usersListWorker } from './modules/usersListWorker';

export function* rootSaga() {
  yield takeLatest(REQUEST_USERS, usersListWorker);
}
