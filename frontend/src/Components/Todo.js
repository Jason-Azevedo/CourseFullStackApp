import React from "react";

export default function Todo() {
  return (
    <div className="todo">
      <div className="todo__header">
        <h3 className="title--sm">Title</h3>
        <span className="icon--dots clickable"></span>
        <div className="todo__context-menu">{/* Options Context Menu */}</div>
      </div>

      <hr />
      <p className="text">Description</p>
    </div>
  );
}
