import { call, put, takeLatest } from 'redux-saga/effects'
import { USER_FETCH_FAILED, USER_FETCH_REQUESTED, USER_FETCH_SUCCEEDED } from '../constants';
import { getUsers } from '../../utilities/request/getUsers';

function* fetchUser(action) {
   try {
      const user = yield call(Api.fetchUser, action.payload.userId);
      yield put({type: USER_FETCH_SUCCEEDED, user: user});
   } catch (e) {
      yield put({type: USER_FETCH_FAILED, message: e.message});
   }
}

export function* rootSaga() {
  yield takeLatest(USER_FETCH_REQUESTED, fetchUser);
}
