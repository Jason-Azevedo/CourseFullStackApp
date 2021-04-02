import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import TodoDialog from "../Components/TodoDialog";
import TodoManager from "../Components/TodoManager";

export default function Home() {
  // Replace [User] with the actual user's username
  document.title = "[User]'s Todos - Course Todo App";

  const [isDialogShowing, setShowDialog] = useState(false);
  const toggleDialog = () => {
    setShowDialog((prev) => !prev);
  };

  const dialogOptions = {
    isShowing: isDialogShowing,
    isEditMode: false,
    showDialog: toggleDialog,
    todo: { title: "", description: "" },

    // This method is responsible for updating the note in the note array
    todoMethod: () => {},
  };

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="container home">
        <div className="container small">
          <TodoManager />
        </div>

        <div className="floating-btn br" onClick={toggleDialog}>
          <span className="icon--cross"></span>
        </div>
      </main>

      <TodoDialog options={dialogOptions} />
    </>
  );
}
