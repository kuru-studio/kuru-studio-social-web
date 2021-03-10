// ANCHOR: React
import * as React from 'react';

// ANCHOR: Redux
import { useSelector, useDispatch } from 'react-redux';

// ANCHOR: Redux Actions
import { requestUsersAction } from '../../state/actions';

// ANCHOR: Interface
interface IRootState {
  userToken: string | null;
  users: any;
}

// ANCHOR: Redux Page
export default () => {
  const userToken = useSelector((state: IRootState) => state.userToken);
  const users = useSelector((state: IRootState) => state.users);
  const dispatch = useDispatch();

  return (
    <ul>
      <li>
        Token:
        { `${userToken}` }
      </li>
      <li>
        User:
        { `${users !== null ? users[0].id : 'empty'}` }
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
