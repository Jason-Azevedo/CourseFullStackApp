import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../Context/UserContext";
import Navbar from "../Components/Navbar";
import TodoManager from "../Components/TodoManager";
import BackendApi from "../Utils/BackendApi";
import TodoDialog from "../Components/TodoDialog";

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

  // Dialog related state
  const [dialogOptions, setDialogOptions] = useState({
    isEdit: false,
    showing: false,
  });
  const toggleDialog = (editMode = false, todo) =>
    setDialogOptions(prev => {
      return {
        isEdit: editMode,
        showing: !prev.showing,
        todo: todo,
      };
    });

  const onTodoDialogCompleteClick = todo => {
    if (dialogOptions.isEdit) {
      BackendApi.editTodo(todo, FetchTodos, console.error);
    } else {
      BackendApi.createTodo(todo, FetchTodos, console.error);
    }

    toggleDialog();
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
            onEdit={todo => toggleDialog(true, todo)}
            onDelete={todo =>
              BackendApi.deleteTodo(todo, FetchTodos, console.error)
            }
          />
        </div>

        <div className="floating-btn br" onClick={() => toggleDialog(false)}>
          <span className="icon--cross"></span>
        </div>
      </main>

      {/* Render dialog when it should be showing */}
      {dialogOptions.showing && 
         <TodoDialog
          isEditMode={dialogOptions.isEdit}
          todo={dialogOptions.todo}
          onComplete={onTodoDialogCompleteClick}
          onCancel={toggleDialog}
         />
      }
    </>
  );
}
