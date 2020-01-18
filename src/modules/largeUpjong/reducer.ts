import { createReducer } from "typesafe-actions";
import { LargeUpjongState, LargeUpjongAction } from "./types";
import {
  LARGE_UPJONG_REQUESTED,
  LARGE_UPJONG_SUCCEEDED,
  LARGE_UPJONG_FAILED
} from "./actions";
const initState: any = {
  largeList: [
    {
      indsLclsCd: "",
      indsLclsNm: "",
      stdrDt: ""
    }
  ]
};

const largeUpjongList = createReducer<any, LargeUpjongAction>(initState, {
  [LARGE_UPJONG_REQUESTED]: state => {
    console.log("request ", { ...state, largeList: initState.largeList });
    return { ...state, largeList: initState.largeList };
  },
  [LARGE_UPJONG_SUCCEEDED]: (state, action) => {
    return { ...state, largeList: action.payload };
  },
  [LARGE_UPJONG_FAILED]: (state, action) => {
    return { ...state, largeList: action.payload };
  }
});

export default largeUpjongList;
