import React, { useState, useEffect } from 'react';
import api from './api';
import TodoList from './TodoList';
import NewTodoForm from './NewTodoForm';
import "./TodoApp.css";

/** Todo Application: show list of todos and new todo form. */

function TodoApp() {
  console.debug("TodoApp");

  let [todos, setTodos] = useState([]);

  /** Get initial data from API. */
  async function loadDataOnMount() {
    let res = await api.get("/");
    setTodos(res.data.data);
  }

  // call loadDataOnMount as async callback, running only once
  useEffect(function() { loadDataOnMount() }, [ /* only once */]);

  /** Delete todo from API and then remove from in-memory list. */
  async function delTodo(id) {
    await api.delete(`/${id}`);
    setTodos(todos => todos.filter(t => t.id !== id));
  }

  /** Add todo to API and add to in-memory list. */
  async function addTodo({ title, descrip }) {
    let res = await api.post("/", { title, descrip });
    setTodos(todos => [...todos, { id: res.data.id, title, descrip }]);
  }

  return (
    <div className="TodoApp">
      <h1>Todo App</h1>
      <TodoList todos={todos} delTodo={delTodo} />
      <NewTodoForm addTodo={addTodo} />
    </div>
  )
}

export default React.memo(TodoApp);