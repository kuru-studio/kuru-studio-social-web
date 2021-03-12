// ANCHOR: Redux Saga Import
import { call, put, takeLatest } from 'redux-saga/effects'

// ANCHOR: Utility Import
import { usersListRequest } from '@utilities/request/user/usersListRequest';

// ANCHOR: Action Import
import { errorMessageAction, storeUsersListAction } from '@state/actions';

// ANCHOR: Constant Import
import { REQUEST_USERS_LIST_CONSTANT } from '@state/constants';

// ANCHOR: Users List Worker Function
function* usersListWorkerFunction(payload: any) {
   try {
      const users = yield call(usersListRequest, payload);
      yield put(storeUsersListAction(users));
   } catch (e) {
      yield put(errorMessageAction(e.message));
   }
}

// ANCHOR: Users List Worker
export function* usersListWorker() {
  yield takeLatest(REQUEST_USERS_LIST_CONSTANT, usersListWorkerFunction);
}
