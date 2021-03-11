// ANCHOR: React
import * as React from 'react';

// ANCHOR: Redux
import { useSelector, useDispatch } from 'react-redux';

// ANCHOR: Redux Actions
import { requestUsersListAction } from '../../state/actions';

// ANCHOR: Interface
interface IRootState {
  userToken: string | null;
  usersList: any;
}

// ANCHOR: Redux Page
export default () => {
  const userToken = useSelector((state: IRootState) => state.userToken);
  const usersList = useSelector((state: IRootState) => state.usersList);
  const dispatch = useDispatch();

  return (
    <ul>
      <li>
        Token:
        { `${userToken}` }
      </li>
      <li>
        User:
        { `${usersList !== null ? usersList[0].id : 'empty'}` }
      </li>
      <li>
        <button
          type="button"
          onClick={() => dispatch(requestUsersListAction(userToken))}
        >
         get user
        </button>
      </li>
    </ul>
  );
};
