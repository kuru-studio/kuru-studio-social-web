// ANCHOR: Redux Saga Import
import { call, put } from 'redux-saga/effects'

// ANCHOR: Utility Import
import { usersListRequest } from '@utilities/request/user/usersListRequest';

// ANCHOR: Action Import
import { errorMessageAction, storeUsersListAction } from '@state/actions';

// ANCHOR: Users List Worker
export function* usersListWorker(payload: any) {
   try {
      const users = yield call(usersListRequest, payload);
      yield put(storeUsersListAction(users));
   } catch (e) {
      yield put(errorMessageAction(e.message));
   }
}
