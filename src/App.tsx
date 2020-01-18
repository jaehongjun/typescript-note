import React from "react";
// import CounterContainer from './containers/CounterContainer';
import CounterContainer from "./components/CounterUseHooks";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <CounterContainer />
      <TodoInsert />
      <TodoList />
    </>
  );
}

export default App;
