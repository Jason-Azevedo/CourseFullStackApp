import React from "react";

export default function Settings() {
  document.title = "[User]'s Settings- Course Todo App";

  return (
    <div className="settings-page">
      <div className="container small">
        <div className="">
          <a className="btn" href="/">
            Back
          </a>

          <h1 className="title--md">[User]'s Settings</h1>
        </div>
      </div>
    </div>
  );
}
