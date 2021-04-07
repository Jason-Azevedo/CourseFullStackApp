import React from "react";
import Todo from "./Todo";

export default function TodoManager({ todoArr, onEdit, onDelete }) {
  const todoCards = todoArr.map((todo, index) => (
    <Todo todo={todo} onEdit={onEdit} onDelete={onDelete} key={index} />
  ));

  return <>{todoCards}</>;
}
