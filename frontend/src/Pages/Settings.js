import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import BackendApi from "../Utils/BackendApi";
import ErrorMessage from "../Components/ErrorMessage";

export default function Settings() {
  const { username, updateUsername } = useContext(UserContext);
  document.title = `${username}'s Settings - Course Todo App`;

  // Error state
  const [errorMessages, setErrorMessages] = useState({
    details: "",
    deleteAccount: "",
  });

  // User details state and save button callback:
  const [details, setDetails] = useState({ username: "", password: "" });
  const onSave = () => {
    // Check if username and password fields are empty
    if (details.username === "" || details.password === "") {
      setErrorMessages({ details: "Cannot have empty fields" });
    }

    BackendApi.patch("/user", details, (res, err) => {
      if (err) {
        setErrorMessages({ details: "An error occured" });
        return;
      }

      localStorage.setItem("username", res.username);
      updateUsername(res.username);
    });
  };

  // Account delete section state and callback
  const [deleteAccount, setDeleteAccount] = useState(false);
  const onAccountDelete = () => {
    console.log("Is this being called");
    if (!deleteAccount) {
      setErrorMessages({ deleteAccount: "Please tick the checkbox" });
      return;
    }

    BackendApi.delete("/user", undefined, (d, err) => {
      if (err) setErrorMessages({ deleteAccount: err });
    });
  };

  return (
    <div className="settings-page">
      <div className="container small">
        <div className="settings-header">
          <a className="btn" href="/">
            Back
          </a>
          <h1 className="title--sm">{username}'s Settings</h1>
          <button className="btn" onClick={onSave}>
            Save
          </button>
        </div>

        <div className="setting-block">
          <h2 className="title--xsm">Edit details</h2>
          <p className="text">Change your account details below</p>
          <ErrorMessage msg={errorMessages.details} />

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
              onChange={e => setDeleteAccount(prev => !prev)}
            />
          </div>
          <ErrorMessage msg={errorMessages.deleteAccount} />
          <button className="btn" onClick={onAccountDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
