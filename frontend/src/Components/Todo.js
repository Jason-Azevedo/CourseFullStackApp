import React from "react";

export default function Todo({ todo, onEdit, onDelete }) {
  return (
    <div className="todo">
      <div className="todo__header">
        <h3 className="title--sm">{todo.title}</h3>
        <div>
          <span
            className="icon--pencil clickable"
            onClick={() => onEdit(todo)}
          ></span>
          <span
            className="icon--trash clickable"
            onClick={() => onDelete(todo)}
          ></span>
        </div>
      </div>

      <hr />
      <p className="text">{todo.description}</p>
    </div>
  );
}
