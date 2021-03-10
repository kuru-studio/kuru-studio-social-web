import { takeLatest } from 'redux-saga/effects'
import { REQUEST_USERS } from '../constants';
import { getUsersWorker } from './modules/user/getUsersWorker';

export function* rootSaga() {
  yield takeLatest(REQUEST_USERS, getUsersWorker);
}
