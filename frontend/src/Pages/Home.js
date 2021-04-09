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
  const hideDialog = () => setDialogOptions({ isEdit: false, showing: false });
  const ShowDialog = () => {
    if (!dialogOptions.showing) return <> </>;

    if (dialogOptions.isEdit === true) return <EditTodoDialog />;
    else
      return (
        <CreateTodoDialog
          onComplete={(todo) => {
            createTodo(todo);
            hideDialog();
          }}
          onCancel={hideDialog}
        />
      );
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
            // onEdit={() => toggleDialog(true)}
            onDelete={deleteTodo}
          />
        </div>

        <div
          className="floating-btn br"
          onClick={() => setDialogOptions({ isEdit: false, showing: true })}
        >
          <span className="icon--cross"></span>
        </div>
      </main>

      {ShowDialog()}
    </>
  );
}
