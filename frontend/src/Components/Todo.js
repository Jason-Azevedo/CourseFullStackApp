import React, {useState} from "react";

export default function Todo() {
  const [showContextMenu, setShowContextMenu] = useState(false);
  const showMenu = () => {
    setShowContextMenu(prev => !prev);
  }

  return (
    <div className="todo">
      <div className="todo__header">
        <h3 className="title--sm">Title</h3>
        <span className="icon--dots clickable" onClick={showMenu}></span>
        <div className={`todo__context-menu ${showContextMenu ? "show" : ""}`}>
          <p><span className="icon--pencil"></span> Edit</p>
          <p><span className="icon--trash"></span> Delete</p>
        </div>
      </div>

      <hr />
      <p className="text">Description</p>
    </div>
  );
}
