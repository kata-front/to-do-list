import type { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/store";
import CountersSlice from "./counter.slice";

const Counter: FC = () => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector(state => CountersSlice.selectors.selectCounter(state, "first"));

  return (
    <>
      <div data-testid="counters">Counter: {counter}</div>
      <button
        onClick={() => dispatch(CountersSlice.actions.increment("first"))}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(CountersSlice.actions.decrement("first"))}
      >
        Decrement
      </button>
    </>
  );
};

export default Counter;
