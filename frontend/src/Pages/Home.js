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
  // In these methods make calls to the server api for the todo crud operations
  // then refresh the todos from the server.
  const createTodo = (todo) =>
    setTodos((prev) => {
      todo.id = prev.length;
      return [...prev, todo];
    });
  const editTodo = (todo) => {
    const tempArr = todos.map((oldTodo) => {
      if (oldTodo.id !== todo.id) return oldTodo;
      else if (oldTodo.id === todo.id) {
        return todo;
      }
    });

    setTodos(tempArr);
  };
  const deleteTodo = (todo) => {
    const tempArr = [];
    todos.forEach((oldTodo) => {
      if (oldTodo.id !== todo.id) {
        tempArr.push(oldTodo);
      }
    });

    setTodos(tempArr);
  };

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
