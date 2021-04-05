import React, { useState } from "react";
import Todo from "./Todo";

const testTodoData = [
  {
    id: 0,
    title: "Test Note",
    description: "This is the description of the test note",
  },
  {
    id: 1,
    title: "Second Test Note",
    description: "This is the second test todo",
  },
];

export default function TodoManager() {
  const [todos, setTodos] = useState(testTodoData);

  const todoCards = todos.map((todo) => (
    <Todo title={todo.title} description={todo.description} />
  ));

  return <>{todoCards}</>;
}
