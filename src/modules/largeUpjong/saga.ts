import { takeEvery, call, put } from "redux-saga/effects";
import { api } from "../api";
import {
  LARGE_UPJONG,
  LARGE_UPJONG_REQUESTED,
  LARGE_UPJONG_SUCCEEDED,
  LARGE_UPJONG_FAILED
} from "./actions";
function* largeUpjong() {
  try {
    yield put({
      type: LARGE_UPJONG_REQUESTED
    });
    const payload = yield call(api.largeUpjong);
    console.log(payload);
    yield put({
      type: LARGE_UPJONG_SUCCEEDED,
      payload: payload.body.items
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: LARGE_UPJONG_FAILED
    });
  }
}

export function* largeUpjongAll() {
  yield takeEvery(LARGE_UPJONG, largeUpjong);
}
