import React from "react";
// import CounterContainer from './containers/CounterContainer';
import CounterContainer from "./components/CounterUseHooks";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import UpjongList from "./components/UpjongList";
function App() {
  return (
    <>
      <CounterContainer />
      <TodoInsert />
      <TodoList />
      <UpjongList />
    </>
  );
}

export default App;
