// ANCHOR: React
import * as React from 'react';

// ANCHOR: Redux
import { useSelector, useDispatch } from 'react-redux';

// ANCHOR: Redux Actions
import { userFetchRequestedAction } from '../../state/actions/modules/user/userFetchRequested';

// ANCHOR: Interface
interface IRootState {
  authenticateReducer: any;
  userReducer: any;
}

// ANCHOR: Redux Page
export default () => {
  const token = useSelector((state: IRootState) => state.authenticateReducer);
  const user = useSelector((state: IRootState) => state.userReducer);
  const dispatch = useDispatch();

  return (
    <ul>
      <li>
        Token:
        { `${token}` }
      </li>
      <li>
        User:
        { `${user !== null ? user[0].id : 'empty'}` }
      </li>
      <li>
        <button
          type="button"
          onClick={() => dispatch(userFetchRequestedAction(token))}
        >
         get user
        </button>
      </li>
    </ul>
  );
};
