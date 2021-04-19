import React from "react";

export default function Navbar() {
  return (
    <nav className="nav">
      <h2 className="title--sm">Course Todo App</h2>
      <p className="nav--text">
        {/* TODO: Implement the signout function */}
        Welcome <strong>Jason</strong> <a href="/login" className="link"> [Sign Out]</a>
      </p>
      <div className="icon--container">
        <a href="/settings">
          <span className="icon--cog clickable"></span>
        </a>
      </div>
    </nav>
  );
}
