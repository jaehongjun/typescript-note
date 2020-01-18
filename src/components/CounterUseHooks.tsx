import React, { useState } from "react";
import useCounter from "../hooks/useCounter";
type CounterProps = {
  count: number;
  click: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
  onDecreaseBy: (diff: number) => void;
};

function Counter() {
  const [range, setRange] = useState(1);
  const {
    count,
    click,
    onIncrease,
    onDecrease,
    onIncreaseBy,
    onDecreaseBy
  }: CounterProps = useCounter();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setRange(Number(value));
  };

  return (
    <div>
      <h1>
        count: {count}, click: {click}{" "}
      </h1>
      <input type="text" onChange={onChange} value={range}></input>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={() => onIncreaseBy(range)}>{`+${range}`}</button>
      <button onClick={() => onDecreaseBy(range)}>{`-${range}`}</button>
    </div>
  );
}

export default Counter;
