import { createAction } from "typesafe-actions";
import { LargeUpjongState } from "./types";

export const LARGE_UPJONG = "upjong/LARGE_UPJONG";
export const LARGE_UPJONG_REQUESTED = "upjong/LARGE_UPJONG_REQUESTED";
export const LARGE_UPJONG_SUCCEEDED = "upjong/LARGE_UPJONG_SUCCEEDED";
export const LARGE_UPJONG_FAILED = "upjong/LARGE_UPJONG_FAILED";

export const largeUpjong = createAction(LARGE_UPJONG)();
export const largeUpjongRequested = createAction(LARGE_UPJONG_REQUESTED)<
  LargeUpjongState
>();
export const largeUpjongSucceeded = createAction(LARGE_UPJONG_SUCCEEDED)<
  LargeUpjongState
>();
export const largeUpjongFailed = createAction(LARGE_UPJONG_FAILED)<
  LargeUpjongState
>();
