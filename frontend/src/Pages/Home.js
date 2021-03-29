import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import TodoDialog from "../Components/TodoDialog";

export default function Home() {
  // Replace [User] with the actual user's username
  document.title = "[User]'s Todos - Course Todo App";

  const [isDialogShowing, setShowDialog] = useState(false);
  const toggleDialog = () => {
    setShowDialog((prev) => !prev);
  };

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="container home">
        <div className="container small">
          {/* Todos will be displayed here */}
        </div>

        {/* Floating button to add notes */}
        <div className="floating-btn br" onClick={toggleDialog}>
          <span className="icon--cross"></span>
        </div>
      </main>

      <TodoDialog showing={isDialogShowing} showDialog={toggleDialog} />
    </>
  );
}
