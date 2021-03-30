import React from "react";

export default function TodoDialog({ showing, showDialog }) {
  const show = showing === true ? "" : "hide-dialog";

  return (
    <div className={`todo-dialog--overlay ${show}`}>
      <div className="todo-dialog">
        <h2 className="title--md">Create Todo</h2>
        <p className="text">Please create your todo</p>

        <label className="label" htmlFor="">
          Title
        </label>
        <input className="input" type="text" />

        <label className="label" htmlFor="">
          Description
        </label>
        <textarea
          className="textarea"
          name="todo-description"
          cols="30"
          rows="10"
        ></textarea>

        <div>
          <button className="btn" onClick={() => showDialog()}>
            Cancel
          </button>
          <button className="btn">Create</button>
        </div>
      </div>
    </div>
  );
}
