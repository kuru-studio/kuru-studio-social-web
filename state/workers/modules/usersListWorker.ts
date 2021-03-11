import { call, put } from 'redux-saga/effects'
import { getUsersRequest } from '../../../utilities/request/user/getUsersRequest';
import { getErrorMessageAction } from '../../actions';
import { getUsersAction } from '../../actions';

export function* usersListWorker(payload: any) {
   try {
      const user = yield call(getUsersRequest, payload);
      yield put(getUsersAction(user));
   } catch (e) {
      yield put(getErrorMessageAction(e.message));
   }
}
