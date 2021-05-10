import React from "react";
import BackendApi from "../Utils/BackendApi";

export default function Navbar({ username }) {
  const onLogoutClick = (e) => {
    e.preventDefault();
    BackendApi.logout();
  };

  return (
    <nav className="nav">
      <h2 className="title--sm">Course Todo App</h2>
      <p className="nav--text">
        Welcome <strong>{username}</strong>
        <a href="#" className="link" onClick={onLogoutClick}>
          [Sign Out]
        </a>
      </p>
      <div className="icon--container">
        <a href="/settings">
          <span className="icon--cog clickable"></span>
        </a>
      </div>
    </nav>
  );
}
