import React, { useState } from 'react';
import "./NewTodoForm.css";

/** Form for adding new todo. */

function NewTodoForm({ addTodo }) {
  console.debug("NewTodoForm", typeof addTodo);

  let [title, setTitle] = useState("");
  let [descrip, setDescrip] = useState("");

  /** Submit form to parent and clear form fields */
  async function submit(evt) {
    evt.preventDefault();
    await addTodo({ title, descrip });
    setDescrip("");
    setTitle("");
  }

  return (
    <form className="NewTodoForm" onSubmit={submit}>
      <h2>Add Todo</h2>
      <input
        placeholder="Title"
        onChange={evt => setTitle(evt.target.value)}
        value={title} />
      <input
        placeholder="Description"
        onChange={evt => setDescrip(evt.target.value)}
        value={descrip} />
      <button>Save</button>
    </form>
  )
}

export default React.memo(NewTodoForm);