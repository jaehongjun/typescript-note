import { createReducer } from "typesafe-actions";
import { TodosState, TodosAction } from "./types";
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actions";
// function todos(
//   state: TodosState = initialState,
//   action: TodosAction
// ): TodosState {
//   switch (action.type) {
//     case ADD_TODO:
//       const nextId = Math.max(...state.map(todo => todo.id)) + 1;
//       return state.concat({
//         id: nextId,
//         text: action.payload,
//         done: false
//       });
//     case TOGGLE_TODO:
//       return state.map(todo =>
//         todo.id === action.payload ? { ...todo, done: !todo.done } : todo
//       );
//     case REMOVE_TODO:
//       return state.filter(todo => todo.id !== action.payload);
//     default:
//       return state;
//   }
// }

// 초기값 설정
const initialState: TodosState = [
  { id: 1, text: "타입스크립트 배우기", done: true },
  { id: 2, text: "타입스크립트와 리덕스 함께 사용해보기", done: true },
  { id: 3, text: "투두리스트 만들기", done: false }
];

const todos = createReducer<TodosState, TodosAction>(initialState, {
  [ADD_TODO]: (state, action) => {
    const nextId = Math.max(...state.map(todo => todo.id)) + 1;
    return state.concat({
      id: nextId,
      text: action.payload,
      done: false
    });
  },
  [TOGGLE_TODO]: (state, action) =>
    state.map(todo =>
      todo.id === action.payload ? { ...todo, done: !todo.done } : todo
    ),
  [REMOVE_TODO]: (state, action) =>
    state.filter(todo => todo.id !== action.payload)
});

export default todos;
