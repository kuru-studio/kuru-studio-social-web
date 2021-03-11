import { call, put } from 'redux-saga/effects'
import { getUsersRequest } from '../../../utilities/request/user/getUsersRequest';
import { errorMessageAction } from '../../actions';
import { storeUsersListAction } from '../../actions';

export function* usersListWorker(payload: any) {
   try {
      const users = yield call(getUsersRequest, payload);
      yield put(storeUsersListAction(users));
   } catch (e) {
      yield put(errorMessageAction(e.message));
   }
}
