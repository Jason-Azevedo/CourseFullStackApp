import React from "react";
import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="container small">
        <h1>This is the home page!</h1>
      </main>
    </>
  );
}
