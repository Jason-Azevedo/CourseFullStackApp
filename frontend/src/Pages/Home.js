import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../Context/UserContext";
import Navbar from "../Components/Navbar";
import CreateTodoDialog from "../Components/TodoDialog/CreateTodoDialog";
import EditTodoDialog from "../Components/TodoDialog/EditTodoDialog";
import TodoManager from "../Components/TodoManager";
import BackendApi from "../Utils/BackendApi";

export default function Home() {
  const { context } = useContext(UserContext);
  document.title = `${context.username}'s Todos - Course Todo App`;

  const [todos, setTodos] = useState([]);

  // Helper method to get our todos
  const FetchTodos = () => {
    BackendApi.getTodos(setTodos, console.error);
  };

  // Fetch todos when the page is first done loading!
  useEffect(FetchTodos, []);

  // Different callback methods for each case, example: create todo
  const createTodo = (todo) => {
    BackendApi.createTodo(todo, FetchTodos, console.error);
  };

  const editTodo = (todo) => {
    BackendApi.editTodo(todo, FetchTodos, console.error);
  };

  const deleteTodo = (todo) => {
    BackendApi.deleteTodo(todo, FetchTodos, console.error);
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
        <Navbar username={context.username} />
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
