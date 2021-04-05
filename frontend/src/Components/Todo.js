import React from "react";

export default function Todo() {
  return (
    <div className="todo">
      <div className="todo__header">
        <h3 className="title--sm">Title</h3>
        <div>
          <span className="icon--pencil clickable"></span>
          <span className="icon--trash clickable"></span>
        </div>
      </div>

      <hr />
      <p className="text">Description</p>
    </div>
  );
}
