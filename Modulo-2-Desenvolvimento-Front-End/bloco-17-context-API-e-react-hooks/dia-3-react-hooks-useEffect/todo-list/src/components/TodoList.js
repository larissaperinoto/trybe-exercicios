import React from 'react';

function TodoList({ todo }) {
  return (
    <div>
      <h1>Tarefas</h1>
      <ul>
        { todo.map((item, i) => <li key={i}>{ item }</li>)}
      </ul>
    </div>
  );
}

export default TodoList;
