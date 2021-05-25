import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import BackendApi from "../Utils/BackendApi";

export default function Settings() {
  const { context, update: setContext } = useContext(UserContext);
  document.title = `${context.username}'s Settings - Course Todo App`;

  // Error state
  const [errorMessages, setErrorMessages] = useState({
    details: "",
    deleteAccount: "",
  });

  // Details state and save button callback:
  const [details, setDetails] = useState({ username: "", password: "" });
  const onSave = () => {
    if (details.username === "" || details.password === "") {
      setErrorMessages({ details: "Cannot have empty fields" });
    }
    // Save user settings!
    BackendApi.editUser(
      details,
      res => {
        const { username } = res;

        localStorage.setItem("username", username);
        setContext(true, res.username);
      },
      err => {
        setErrorMessages({ details: "An error occured" });
      }
    );
  };

  // Account delete section state and callback
  const [deleteAccount, setDeleteAccount] = useState(false);
  const onAccountDelete = () => {
    if (!deleteAccount) {
      setErrorMessages({ deleteAccount: "Please tick the checkbox" });
      return;
    }

    // Delete the users account!
    BackendApi.deleteUser(err => {
      setErrorMessages({ deleteAccount: err });
    });
  };

  return (
    <div className="settings-page">
      <div className="container small">
        <div className="settings-header">
          <a className="btn" href="/">
            Back
          </a>
          <h1 className="title--sm">{context.username}'s Settings</h1>
          <button className="btn" onClick={onSave}>
            Save
          </button>
        </div>

        <div className="setting-block">
          <h2 className="title--xsm">Edit details</h2>
          <p className="text">Down below is your personal details</p>
          <p className="text--error">{errorMessages.details}</p>

          <div className="setting-field">
            <label className="label" htmlFor="username">
              Username
            </label>
            <input
              className="input"
              type="text"
              onChange={e => {
                setDetails(prev => {
                  prev.username = e.target.value;
                  return prev;
                });
              }}
            />
          </div>

          <div className="setting-field">
            <label className="label" htmlFor="username">
              Password
            </label>
            <input
              className="input"
              type="text"
              onChange={e => {
                setDetails(prev => {
                  prev.password = e.target.value;
                  return prev;
                });
              }}
            />
          </div>
        </div>

        <div className="setting-block">
          <h2 className="title--xsm">Delete account</h2>
          <div className="setting-field">
            <label className="label" htmlFor="">
              Are you sure you want to delete your account?
            </label>
            <input
              type="checkbox"
              onChange={e => {
                setDeleteAccount(prev => !prev);
                console.log(deleteAccount);
              }}
            />
          </div>
          <p className="text--error">{errorMessages.deleteAccount}</p>
          <button className="btn" onClick={onAccountDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
