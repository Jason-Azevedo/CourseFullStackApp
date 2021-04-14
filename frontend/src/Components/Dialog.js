import React from "react";

export default function Dialog({ message, onOk, onCancel }) {
  return (
    <>
      <div className="overlay"></div>
      <div className="dialog">
        <h3 className="title--sm">{message}</h3>
        <button className="btn" onClick={onCancel}>
          Cancel
        </button>
        <button className="btn" onClick={onOk}>
          Ok
        </button>
      </div>
    </>
  );
}
