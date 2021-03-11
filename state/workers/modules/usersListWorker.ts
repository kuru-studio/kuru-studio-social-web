// ANCHOR: Redux Saga Import
import { call, put } from 'redux-saga/effects'

// ANCHOR: Utility Import
import { getUsersRequest } from '../../../utilities/request/user/getUsersRequest';

// ANCHOR: Action Import
import { errorMessageAction, storeUsersListAction } from '../../actions';

// ANCHOR: Users List Worker
export function* usersListWorker(payload: any) {
   try {
      const users = yield call(getUsersRequest, payload);
      yield put(storeUsersListAction(users));
   } catch (e) {
      yield put(errorMessageAction(e.message));
   }
}
