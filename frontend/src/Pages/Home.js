import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../App";
import Navbar from "../Components/Navbar";
import CreateTodoDialog from "../Components/TodoDialog/CreateTodoDialog";
import EditTodoDialog from "../Components/TodoDialog/EditTodoDialog";
import TodoManager from "../Components/TodoManager";
import BackendApi from "../Utils/BackendApi";

const testTodoData = [
  {
    _id: 0,
    title: "Test Note",
    description: "This is the description of the test note",
  },
];

export default function Home() {
  const { context } = useContext(GlobalContext);
  document.title = `${context.username}'s Todos - Course Todo App`;

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    BackendApi.getTodos().then((todos) => {
      if (todos.error) {
        console.error(todos.error);
        return;
      }

      setTodos(todos);
    });
  }, []);

  // In these methods make calls to the server api for the todo crud operations
  // then refresh the todos from the server.
  const createTodo = (todo) =>
    BackendApi.createTodo(todo).then((data) => {
      if (data.error) {
        console.error(data.error);
        return;
      }

      BackendApi.getTodos().then((todos) => {
        if (todos.error) {
          console.error(todos.error);
          return;
        }

        setTodos(todos);
      });
    });
  const editTodo = (todo) => {
    const tempArr = todos.map((oldTodo) => {
      if (oldTodo._id !== todo.id) return oldTodo;
      else if (oldTodo._id === todo.id) {
        return todo;
      }
    });

    setTodos(tempArr);
  };

  const deleteTodo = (todo) => {
    BackendApi.deleteTodo(todo).then((todo) => {
      if (todo.error) {
        console.error(todo.error);
        return;
      }

      // Fetch the updated todos
      BackendApi.getTodos().then((todos) => {
        if (todos.error) {
          console.error(todos.error);
          return;
        }

        setTodos(todos);
      });
    });
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
