import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import {
  decrease,
  decreaseBy,
  increase,
  increaseBy
} from "../modules/counter/actions";
import Counter from "../components/Counter";

function CounterContainer() {
  const { count, click } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff));
  };
  const onDecreaseBy = (diff: number) => {
    dispatch(decreaseBy(diff));
  };

  return (
    <Counter
      count={count}
      click={click}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onIncreaseBy={onIncreaseBy}
      onDecreaseBy={onDecreaseBy}
    ></Counter>
  );
}

export default CounterContainer;
