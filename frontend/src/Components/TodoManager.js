import React, { useState } from "react";
import Todo from "./Todo";

export default function TodoManager({ todoArr, onEdit, onDelete }) {
  const todoCards = todoArr.map((todo) => (
    <Todo title={todo.title} description={todo.description} />
  ));

  return <>{todoCards}</>;
}
