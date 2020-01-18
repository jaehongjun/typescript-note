import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";
import largeUpjong from "./largeUpjong";
const rootReducer = combineReducers({
  counter,
  todos,
  largeUpjong
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
