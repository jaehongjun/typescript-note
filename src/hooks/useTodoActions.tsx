import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { toggleTodo, removeTodo } from "../modules/todos";

function useTodoActions(id: number) {
  const dispatch = useDispatch();

  const onToggle = useCallback(() => {
    dispatch(toggleTodo(id));
  }, [dispatch, id]);
  const onRemove = useCallback(() => {
    dispatch(removeTodo(id));
  }, [dispatch, id]);

  return { onRemove, onToggle };
}

export default useTodoActions;
