import React from "react";
import Todo from "./Todo";

export default function TodoManager() {
  const todoData = {
    title: "First Note",
    description: "This is the description",
  };

  const todos = <Todo details={todoData} />;

  return <>{todos}</>;
}
