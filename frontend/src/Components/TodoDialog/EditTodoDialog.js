import React from "react";
import TodoDialog from "./TodoDialog";

export default function EditTodoDialog({ todo, onComplete, onCancel }) {
  return (
    <TodoDialog
      title="Edit Todo"
      subtitle="Please edit your todo"
      buttonText="Edit"
      todo={todo}
      onComplete={onComplete}
      onCancel={onCancel}
    />
  );
}
