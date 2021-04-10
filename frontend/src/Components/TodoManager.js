import React from "react";
import Todo from "./Todo";

export default function TodoManager({ todoArr, onEdit, onDelete }) {
  if (todoArr.length === 0) {
    return (
      <div className="container center dark-bg full-height">
        <h2 className="title--sm">It's a bit empty in here, make a todo!!</h2>
      </div>
    );
  }

  const todoCards = todoArr.map((todo, index) => (
    <Todo todo={todo} onEdit={onEdit} onDelete={onDelete} key={index} />
  ));

  return <>{todoCards}</>;
}
