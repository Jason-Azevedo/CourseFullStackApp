import React, { useState } from "react";

export default function TodoDialog({ options }) {
  const show = options.isShowing ? "" : "hide-dialog";
  const title = options.isEditMode === true ? "Edit Todo" : "Create Todo";
  const buttonText = options.isEditMode === true ? "Edit" : "Create";
  const subtitle =
    options.isEditMode === true
      ? "Please edit your todo"
      : "Please create your todo";

  const [todoTitle, setTodoTitle] = useState(options.todo.title);
  const [todoDesc, setTodoDesc] = useState(options.todo.description);

  const onCompleteClick = () => {
    const todo = {
      id: 0,
      title: todoTitle,
      description: todoDesc,
    };

    options.onComplete(todo);
  };

  return (
    <div className={`todo-dialog--overlay ${show}`}>
      <div className="todo-dialog">
        <h2 className="title--md">{title}</h2>
        <p className="text">{subtitle}</p>

        <label className="label" htmlFor="">
          Title
        </label>
        <input
          className="input"
          type="text"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />

        <label className="label" htmlFor="">
          Description
        </label>
        <textarea
          className="textarea"
          name="todo-description"
          cols="30"
          rows="10"
          value={todoDesc}
          onChange={(e) => setTodoDesc(e.target.value)}
        ></textarea>

        <div>
          <button className="btn" onClick={options.showDialog}>
            Cancel
          </button>
          <button className="btn" onClick={onCompleteClick}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
