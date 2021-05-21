import React, { useState } from "react";

export default function TodoDialog({
  isEditMode,
  todo = { id: 0, title: "", description: "" },
  onComplete,
  onCancel,
}) {
  const [todoTitle, setTodoTitle] = useState(todo.title);
  const [todoDesc, setTodoDesc] = useState(todo.description);
  const [requiredText, setRequiredText] = useState("");

  const onCreateClick = () => {
    if (todoTitle === "" || todoDesc === "") {
      setRequiredText("(Required)");
      return;
    }

    onComplete({ _id: todo._id, title: todoTitle, description: todoDesc });
  };

  return (
    <div className={`todo-dialog--overlay `}>
      <div className="todo-dialog">
        <h2 className="title--md">
          {isEditMode ? "Edit Todo" : "Create Todo"}
        </h2>
        <p className="text">
          {isEditMode ? "Please edit your todo" : "Please create your todo"}
        </p>

        <label className="label" htmlFor="">
          Title {requiredText}
        </label>
        <input
          className="input"
          type="text"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />

        <label className="label" htmlFor="">
          Description {requiredText}
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
          <button className="btn" onClick={onCancel}>
            Cancel
          </button>
          <button className="btn" onClick={onCreateClick}>
            {isEditMode ? "Edit" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
}
