import React, { FormEvent, useState } from "react";
import useAddTodo from "../hooks/useAddTodo";
function TodoInsert() {
  const [inputValue, setInputValue] = useState("");
  const addTodo = useAddTodo();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTodo(inputValue);
    setInputValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={inputValue}
        onChange={onChange}
      />
      <button type="submit">등록</button>
    </form>
  );
}

export default TodoInsert;
