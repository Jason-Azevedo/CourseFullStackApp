import React from "react";

export default function Settings() {
  document.title = "[User]'s Settings- Course Todo App";

  return (
    <div className="settings-page">
      <div className="container small">
        <div className="settings-header">
          <a className="btn" href="/">
            Back
          </a>
          <h1 className="title--sm">[User]'s Settings</h1>
          <button className="btn">Save</button>
        </div>

        <div className="setting-block">
          <h2 className="title--xsm">[User]'s Details</h2>
          <p className="text">Down below is your personal details</p>

          <div className="setting-field">
            <label className="label" htmlFor="username">
              Username
            </label>
            <input className="input" type="text" id="username" />
          </div>

          <div className="setting-field">
            <label className="label" htmlFor="username">
              Password
            </label>
            <input className="input" type="text" />
          </div>
        </div>
      </div>
    </div>
  );
}