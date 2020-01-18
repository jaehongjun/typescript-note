import { all } from "redux-saga/effects";
import { largeUpjongAll } from "./largeUpjong/saga";

export default function* rootSaga() {
  yield all([largeUpjongAll()]);
}
