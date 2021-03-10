// ANCHOR: React
import * as React from 'react';

// ANCHOR: Redux
import { useSelector, useDispatch } from 'react-redux';

// ANCHOR: Redux Actions
import { requestUsersAction } from '../../state/actions';

// ANCHOR: Interface
interface IRootState {
  userToken: string | null;
  userReducer: any;
}

// ANCHOR: Redux Page
export default () => {
  const userToken = useSelector((state: IRootState) => state.userToken);
  const user = useSelector((state: IRootState) => state.userReducer);
  const dispatch = useDispatch();

  return (
    <ul>
      <li>
        Token:
        { `${userToken}` }
      </li>
      <li>
        User:
        { `${user !== null ? user[0].id : 'empty'}` }
      </li>
      <li>
        <button
          type="button"
          onClick={() => dispatch(requestUsersAction(userToken))}
        >
         get user
        </button>
      </li>
    </ul>
  );
};
