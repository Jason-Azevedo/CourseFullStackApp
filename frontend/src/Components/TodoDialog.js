import React from "react";

export default function TodoDialog() {
  return (
    <div className="todo-dialog--overlay">
      <div className="todo-dialog">
        <h2 className="title--md">Create Todo</h2>

        <label className="todo-dialog__label" htmlFor="">
          Title of Todo
        </label>
        <input className="todo-dialog__input" type="text" />

        <label className="todo-dialog__label" htmlFor="">
          Description
        </label>
        <textarea name="" id="" cols="30" rows="10"></textarea>

        <div>
          <button className="btn">Cancel</button>
          <button className="btn">Create</button>
        </div>
      </div>
    </div>
  );
}
