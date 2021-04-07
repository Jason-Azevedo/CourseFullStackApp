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
];

export default function Home() {
  // Replace [User] with the actual user's username
  document.title = "[User]'s Todos - Course Todo App";

  const [todos, setTodos] = useState(testTodoData);
  const createTodo = (todo) => setTodos((prev) => [...prev, todo]);
  const editTodo = (todo) => {
    // TODO: Edit the todo in the array
    const tempArr = todos.map((t) => t.id !== todo.id);
    console.log("Here is the array:");
    console.log(tempArr);
  };
  const deleteTodo = (todo) => console.log(todo.id + " said delete me!");

  const toggleDialog = (isEditMode = false) =>
    setDialogOptions((prev) => {
      const obj = { ...prev };
      obj.isShowing = !prev.isShowing;
      obj.isEditMode = isEditMode;
      return obj;
    });

  const DialogOptions = function () {
    this.isShowing = false;
    this.isEditMode = false;
    this.showDialog = toggleDialog;
    this.todo = { id: 0, title: "", description: "" };
    this.onComplete = (todo) => {
      if (this.isEditMode) editTodo(todo);
      else createTodo(todo);

      toggleDialog();
    };
  };
  const [dialogOptions, setDialogOptions] = useState(new DialogOptions());

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="container home">
        <div className="container small">
          <TodoManager
            todoArr={todos}
            onEdit={() => toggleDialog(true)}
            onDelete={deleteTodo}
          />
        </div>

        <div className="floating-btn br" onClick={toggleDialog}>
          <span className="icon--cross"></span>
        </div>
      </main>

      <TodoDialog options={dialogOptions} />
    </>
  );
}
