import React, { useState } from "react";

export default function TodoDialog({
  title,
  subtitle,
  buttonText,
  onComplete,
  onCancel,
}) {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDesc, setTodoDesc] = useState("");
  const [requiredText, setRequiredText] = useState("");

  const onCreateClick = () => {
    if (todoTitle === "" || todoDesc === "") {
      setRequiredText("(Required)");
      return;
    }

    onComplete({ title: todoTitle, description: todoDesc });
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
