// ANCHOR: React
import * as React from 'react';

// ANCHOR: Redux
import { useSelector, useDispatch } from 'react-redux';

// ANCHOR: Redux Actions
import { incrementAction, decrementAction } from '../state/action';

// ANCHOR: Interface
interface IRootState {
  counterReducer: number;
}

// ANCHOR: Redux Page
export default () => {
  const counter = useSelector((state: IRootState) => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <ul>
      <li>
        Count:
        { ` ${counter}` }
      </li>
      <li>
        <button
          type="button"
          onClick={() => dispatch(incrementAction(5))}
        >
          increase
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={() => dispatch(decrementAction(5))}
        >
          decrease
        </button>
      </li>
    </ul>
  );
};
