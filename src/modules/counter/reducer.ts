import { CounterState, CounterAction } from "./types";
import { createReducer } from "typesafe-actions";
import { INCREASE, DECREASE, INCREASE_BY, DECREASE_BY } from "./actions";

// 초기값 세팅
const initialState: CounterState = {
  count: 0,
  click: 0
};

// 리듀서 작성
// function counter(state: CounterState = initialState, action: CounterAction) {
//   switch (action.type) {
//     case INCREASE:
//       return { count: state.count + 1, click: state.click + 1 };
//     case DECREASE:
//       return { count: state.count - 1, click: state.click + 1 };
//     case INCREASE_BY:
//       return { count: state.count + action.payload, click: state.click + 1 };
//     case DECREASE_BY:
//       return { count: state.count - action.payload, click: state.click + 1 };
//     default:
//       return state;
//   }
// }
const counter = createReducer<CounterState, CounterAction>(initialState, {
  [INCREASE]: state => ({ count: state.count + 1, click: state.click + 1 }),
  [DECREASE]: state => ({ count: state.count - 1, click: state.click + 1 }),
  [INCREASE_BY]: (state, action) => ({
    count: state.count + action.payload,
    click: state.click + 1
  }),
  [DECREASE_BY]: (state, action) => ({
    count: state.count - action.payload,
    click: state.click + 1
  })
});

export default counter;
