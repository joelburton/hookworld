import React from 'react';
import "./Todo.css";

/** Render an individual todo: title, descrip, delete button */

function Todo({ id, title, descrip, delTodo }) {
  console.debug("Todo", id, title, descrip, typeof delTodo);

  return (
    <li className="Todo">
      <b className="Todo-title">{title}</b>{" "}
      <i className="Todo-descrip">{descrip}</i>{" "}
      <button className="Todo-del" onClick={evt => delTodo(id)}>
        &times;
      </button>
    </li>
  );
}

export default React.memo(Todo);