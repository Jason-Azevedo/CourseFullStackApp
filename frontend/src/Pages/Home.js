import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import TodoDialog from "../Components/TodoDialog";
import TodoManager from "../Components/TodoManager";

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

export default function Home() {
  // Replace [User] with the actual user's username
  document.title = "[User]'s Todos - Course Todo App";

  const [todos, setTodos] = useState(testTodoData);
  const createTodo = (todo) => setTodos([...todos, todo]);
  const editTodo = (todo) => {};
  const deleteTodo = () => {};

  const [isDialogShowing, setShowDialog] = useState(false);
  const toggleDialog = () => {
    setShowDialog((prev) => !prev);
  };

  const DialogOptions = function () {
    this.isShowing = isDialogShowing;
    this.isEditMode = false;
    this.showDialog = toggleDialog;
    this.todo = { id: 0, title: "", description: "" };
    this.onComplete = (todo) => {
      if (this.isEditMode) editTodo(todo);
      else createTodo(todo);

      toggleDialog();
    };
  };
  const dialogOptions = new DialogOptions();

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="container home">
        <div className="container small">
          <TodoManager todoArr={todos} />
        </div>

        <div className="floating-btn br" onClick={toggleDialog}>
          <span className="icon--cross"></span>
        </div>
      </main>

      <TodoDialog options={dialogOptions} />
    </>
  );
}
