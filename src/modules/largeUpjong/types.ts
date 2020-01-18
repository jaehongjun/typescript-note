import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type LargeUpjongAction = ActionType<typeof actions>;

export type LargeUpjong = {
  indsLclsCd: string;
  indsLclsNm: string;
  stdrDt: string;
};

export type LargeUpjongState = { largeList: LargeUpjong[] };
