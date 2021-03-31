import React from "react";

// TodoDialog will take an options object that contains the following
// showing state
// show dialog function
// if it is in edit mode
// the note
// a method to update the note state of the parent

export default function TodoDialog({ options }) {
  const show = options.isShowing ? "" : "hide-dialog";
  const title = options.isEditMode ? "Edit Todo" : "Create Todo";
  const titleText = options.isEditMode
    ? "Please edit your todo"
    : "Please create your todo";

  return (
    <div className={`todo-dialog--overlay ${show}`}>
      <div className="todo-dialog">
        <h2 className="title--md">{title}</h2>
        <p className="text">{titleText}</p>

        <label className="label" htmlFor="">
          Title
        </label>
        <input className="input" type="text" value={options.todo.title} />

        <label className="label" htmlFor="">
          Description
        </label>
        <textarea
          className="textarea"
          name="todo-description"
          cols="30"
          rows="10"
          value={options.todo.description}
        ></textarea>

        <div>
          <button className="btn" onClick={() => options.showDialog()}>
            Cancel
          </button>
          <button className="btn">Create</button>
        </div>
      </div>
    </div>
  );
}
