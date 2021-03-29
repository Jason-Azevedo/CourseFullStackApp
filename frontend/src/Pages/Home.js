import React from "react";
import Navbar from "../Components/Navbar";
import TodoDialog from "../Components/TodoDialog";

export default function Home() {
  document.title = "[User]'s Todos - Course Todo App";

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
        <div
          className="floating-btn br"
          onClick={() => alert("Floatty was clicked!")}
        >
          <span className="icon--cross"></span>
        </div>
      </main>

      <TodoDialog />
    </>
  );
}
