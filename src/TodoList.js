import React from 'react';
import Todo from './Todo';
import "./TodoList.css";

/** Render list of Todo components */

function TodoList({ todos, delTodo }) {
  console.debug("TodoList", todos, typeof delTodo);

  return (
    <ul className="TodoList">
      {todos.map(({id, title, descrip}) =>
        <Todo
          key={id}
          id={id}
          title={title}
          descrip={descrip}
          delTodo={delTodo}
        />
      )}
    </ul>
  )
}

export default React.memo(TodoList);