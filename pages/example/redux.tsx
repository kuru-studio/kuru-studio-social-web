// ANCHOR: React
import * as React from 'react';

// ANCHOR: Redux
import { useSelector, useDispatch } from 'react-redux';

// ANCHOR: Redux Actions
import { incrementCounterAction, decrementCounterAction } from '../../state/actions';

// ANCHOR: Interface
interface IRootState {
  counter: number;
}

// ANCHOR: Redux Page
export default () => {
  const counter = useSelector((state: IRootState) => state.counter);
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
          onClick={() => dispatch(incrementCounterAction(5))}
        >
          increase
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={() => dispatch(decrementCounterAction(5))}
        >
          decrease
        </button>
      </li>
    </ul>
  );
};
