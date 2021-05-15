import React, { useState } from "react";

export default function TodoDialog({
  title,
  subtitle,
  buttonText,
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
    clearState();
  };

  const onCancelClick = () => {
    clearState();
    onCancel();
  };

  const clearState = () => {
    setTodoTitle("");
    setTodoDesc("");
  };

  return (
    <div className={`todo-dialog--overlay `}>
      <div className="todo-dialog">
        <h2 className="title--md">{title}</h2>
        <p className="text">{subtitle}</p>

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
          <button className="btn" onClick={onCancelClick}>
            Cancel
          </button>
          <button className="btn" onClick={onCreateClick}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
