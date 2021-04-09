import React from "react";
import TodoDialog from "./TodoDialog";

export default function CreateTodoDialog({ onComplete, onCancel }) {
  return (
    <TodoDialog
      title="Create Todo"
      subtitle="Please create your todo"
      buttonText="Create"
      onComplete={onComplete}
      onCancel={onCancel}
    />
  );
}
