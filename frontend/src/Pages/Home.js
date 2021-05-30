import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../Context/UserContext";
import Navbar from "../Components/Navbar";
import TodoManager from "../Components/TodoManager";
import BackendApi from "../Utils/BackendApi";
import TodoDialog from "../Components/TodoDialog";

export default function Home() {
  const { username } = useContext(UserContext);
  document.title = `${username}'s Todos - Course Todo App`;

  const [todos, setTodos] = useState([]);

  /**
   * General method for getting our todos and if passed an error
   * will log it.
   *
   * @param {string} err - Any potential error message to log
   */
  const FetchTodos = err => {
    if (err) console.error(err);
    else
      BackendApi.get("/todo", (data, err) => {
        if (err) {
          console.error(err);
          return;
        }

        setTodos(data);
      });
  };

  // Fetch todos when the page is first done loading!
  useEffect(FetchTodos, []);

  // Dialog related state
  const [dialogOptions, setDialogOptions] = useState({
    isEdit: false,
    showing: false,
  });

  /**
   * A simple method for toggling the Create/Edit dialog
   *
   * @param {boolean}  editMode - Render the dialog in Edit Mode
   * @param {object}   todo     - The todo object to use when the dialog is
   *                              rendered in Edit Mode
   * @returns void
   */
  const toggleDialog = (editMode = false, todo) =>
    setDialogOptions(prev => {
      return {
        isEdit: editMode,
        showing: !prev.showing,
        todo: todo,
      };
    });

  /**
   *  A callback for when create or edit is clicked in the Todo Dialog,
   *  which then contacts the backend to either create or edit the todo.
   *
   * @param {object}  todo - The newly edited or created todo object
   */
  const onTodoDialogCompleteClick = todo => {
    if (dialogOptions.isEdit) {
      BackendApi.patch("/todo", todo, (d, err) => FetchTodos(err));
    } else {
      BackendApi.post("/todo", todo, (d, err) => FetchTodos(err));
    }

    toggleDialog();
  };

  return (
    <>
      <header>
        <Navbar username={username} />
      </header>

      <main className="container home">
        <div className="container small">
          <TodoManager
            todoArr={todos}
            onEdit={todo => toggleDialog(true, todo)}
            onDelete={todo =>
              BackendApi.delete("/todo", todo, (d, err) => FetchTodos(err))
            }
          />
        </div>

        <div className="floating-btn br" onClick={() => toggleDialog(false)}>
          <span className="icon--cross"></span>
        </div>
      </main>

      {/* Render dialog when it should be showing */}
      {dialogOptions.showing && (
        <TodoDialog
          isEditMode={dialogOptions.isEdit}
          todo={dialogOptions.todo}
          onComplete={onTodoDialogCompleteClick}
          onCancel={toggleDialog}
        />
      )}
    </>
  );
}
