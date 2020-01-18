import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import {
  decrease,
  decreaseBy,
  increase,
  increaseBy
} from "../modules/counter/actions";

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

  return {
    count,
    click,
    onIncrease,
    onDecrease,
    onIncreaseBy,
    onDecreaseBy
  };
}

export default CounterContainer;
