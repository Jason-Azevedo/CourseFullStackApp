import React from "react";
import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="container home">
        <div className="container small">
          <h1>This is the home page!</h1>
        </div>

        <div
          className="floating-btn br"
          onClick={() => alert("Floatty was clicked!")}
        >
          <span className="icon--cross"></span>
        </div>
      </main>
    </>
  );
}
