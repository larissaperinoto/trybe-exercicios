import { useState } from 'react';

function useUpdateTodoList() {
  const [todoList, setTodoList] = useState(['lavar']);

  const handleSubmitTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  }

  return [todoList, handleSubmitTodo];
}

export default useUpdateTodoList;
