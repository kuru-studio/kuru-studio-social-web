import { call, put } from 'redux-saga/effects'
import { getUsersRequest } from '../../../../utilities/request/user/getUsersRequest';
import { userFetchFailedAction } from '../../../actions/modules/user/userFetchFailed';
import { userFetchSucceededAction } from '../../../actions/modules/user/userFetchSucceeded';

export function* getUsersWorker(payload: any) {
   try {
      const user = yield call(getUsersRequest, payload);
      yield put(userFetchSucceededAction(user));
   } catch (e) {
      yield put(userFetchFailedAction(e.message));
   }
}
