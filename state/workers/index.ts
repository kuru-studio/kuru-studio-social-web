import { takeLatest } from 'redux-saga/effects'
import { USER_FETCH_REQUESTED } from '../constants';
import { fetchUser } from './modules/user/fetchUser';

export function* rootSaga() {
  yield takeLatest(USER_FETCH_REQUESTED, fetchUser(payload));
}
