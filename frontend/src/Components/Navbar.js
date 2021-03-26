import React from "react";

export default function Navbar() {
  return (
    <nav className="nav">
      <h2 className="title--sm">Course Todo App</h2>
      <p className="nav--text">
        Welcome <strong>Jason</strong>
      </p>
      <div className="icon--container">
        <a href="/settings">
          <span className="icon--cog clickable"></span>
        </a>
      </div>
    </nav>
  );
}
