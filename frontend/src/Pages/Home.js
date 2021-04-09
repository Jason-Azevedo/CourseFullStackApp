import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import CreateTodoDialog from "../Components/TodoDialog/CreateTodoDialog";
import EditTodoDialog from "../Components/TodoDialog/EditTodoDialog";
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

  // Dialog related state
  const [dialogOptions, setDialogOptions] = useState({
    isEdit: false,
    showing: false,
  });
  const toggleDialog = (editMode = false, show = false, todo) =>
    setDialogOptions({ isEdit: editMode, showing: show, todo: todo });

  const ShowDialog = () => {
    if (!dialogOptions.showing) return <> </>;

    if (dialogOptions.isEdit === true) {
      return (
        <EditTodoDialog
          todo={dialogOptions.todo}
          onComplete={(todo) => {
            editTodo(todo);
            toggleDialog();
          }}
          onCancel={toggleDialog}
        />
      );
    } else {
      return (
        <CreateTodoDialog
          onComplete={(todo) => {
            createTodo(todo);
            toggleDialog();
          }}
          onCancel={toggleDialog}
        />
      );
    }
  };

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="container home">
        <div className="container small">
          <TodoManager
            todoArr={todos}
            // Insert the todo in this method
            onEdit={(todo) => toggleDialog(true, true, todo)}
            onDelete={deleteTodo}
          />
        </div>

        <div
          className="floating-btn br"
          onClick={() => toggleDialog(false, true)}
        >
          <span className="icon--cross"></span>
        </div>
      </main>

      {ShowDialog()}
    </>
  );
}
