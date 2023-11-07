"use client";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '@/app/_data/counter'
import Atom from "@atom";

export default function ReduxExamplePage() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="flex justify-center items-center gap-10 mt-10">
      <Atom.Button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </Atom.Button>
      <span>{count}</span>
      <Atom.Button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </Atom.Button>
    </div>
  );
}
