import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type CounterAction = ActionType<typeof actions>;

// 스테이트에 대한 타입설정
export type CounterState = {
  count: number;
  click: number;
};
