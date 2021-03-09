import { takeLatest } from 'redux-saga/effects'
import { USER_FETCH_REQUESTED } from '../constants';
import { getUsersWorker } from './modules/user/getUsersWorker';

export function* rootSaga() {
  yield takeLatest(USER_FETCH_REQUESTED, getUsersWorker);
}
