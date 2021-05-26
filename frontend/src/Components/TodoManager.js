import React from "react";
import Todo from "./Todo";

export default function TodoManager({ todoArr, onEdit, onDelete }) {
  // Check to see if we have any todos, if not display an message to the user
  if (todoArr.length === 0) {
    return (
      <div className="container center dark-bg full-height">
        <h2 className="title--sm">It's a bit empty in here, make a todo!!</h2>
      </div>
    );
  }

  // Create our list of todos and supply the correct callbacks for them
  const todoCards = todoArr.map((todo, index) => (
    <Todo todo={todo} onEdit={onEdit} onDelete={onDelete} key={index} />
  ));

  return <>{todoCards}</>;
}
