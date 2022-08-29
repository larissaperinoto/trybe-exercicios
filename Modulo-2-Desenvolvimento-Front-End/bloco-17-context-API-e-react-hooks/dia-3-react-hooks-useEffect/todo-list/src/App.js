import React, { useState } from 'react';
import TodoList from './components/TodoList';
import useUpdateTodoList from './hooks/useUpdateTodoList';

function App() {
  const [todo, setTodo] = useState('');
  const [todoList, handleSubmitTodo] = useUpdateTodoList();

  return (
    <div>
      <input
        type='text'
        placeholder='Digite uma tarefa'
        value={ todo }
        onChange={ (e) => setTodo(e.target.value)}
      />
      <button
        type='button'
        onClick={ () => handleSubmitTodo(todo) }
      >
        Adicionar
      </button>
      <TodoList todo={todoList} />
    </div>
  );
}

export default App;
