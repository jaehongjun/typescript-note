import { createAction } from "typesafe-actions";

// const INCREASE = 'counter/INCREASE' as const;
// const DECREASE = 'counter/DECREASE' as const;
// const INCREASE_BY = 'counter/INCREASE_BY' as const;
// const DECREASE_BY = 'counter/DECREASE_BY' as const;

export const INCREASE = "counter/INCREASE";
export const DECREASE = "counter/DECREASE";
export const INCREASE_BY = "counter/INCREASE_BY";
export const DECREASE_BY = "counter/DECREASE_BY";

// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });
// export const increaseBy = (diff: number) => ({
//   type: INCREASE_BY,
//   payload: diff
// });
// export const decreaseBy = (diff: number) => ({
//   type: DECREASE_BY,
//   payload: diff
// });

export const increase = createAction(INCREASE)();
export const decrease = createAction(DECREASE)();
export const increaseBy = createAction(INCREASE_BY)<number>();
export const decreaseBy = createAction(DECREASE_BY)<number>();
// 리턴타입에 대한 타입 선언 as const사용 후 ReturnType을 사용하면 type이 무조건 string으로 처리되므로 수정
// type CounterAction =
//   | ReturnType<typeof increase>
//   | ReturnType<typeof decrease>
//   | ReturnType<typeof increaseBy>
//   | ReturnType<typeof decreaseBy>;
