import React, { useState } from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "../Components/ErrorMessage";
import BackendApi from "../Utils/BackendApi";

export default function SignUp() {
  document.title = "Sign Up - TodoApp";

  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");

  const onSignupClick = e => {
    e.preventDefault();

    // Check if any of the fields is empty
    if (username === "" || password === "" || conPassword === "") {
      setErrorMessage("Fields cannot be empty!");
      return;
    }
    // Check if the confirmation password and the normal password match
    else if (password !== conPassword) {
      setErrorMessage("Password and Confirmation Password can't be different");
      return;
    }

    // Contact the backend
    const userCredentials = {
      username: username,
      password: password,
    };

    BackendApi.post("/user", userCredentials, (d, err) => {
      if (err) setErrorMessage(err);
    });
  };

  return (
    <div className="form__background">
      <div className="form__container">
        <form className="form" action="">
          <h2 className="title--sm">Course Todo App</h2>
          <h1 className="title--lg">Create Account</h1>

          <ErrorMessage msg={errorMessage} />

          <label className="label" htmlFor="username-input">
            Username
          </label>
          <input
            className="input"
            id="username-input"
            name="username"
            type="text"
            onChange={e => setUsername(e.target.value)}
          />

          <label className="label" htmlFor="password-input">
            Password
          </label>
          <input
            className="input"
            id="password-input"
            name="password"
            type="password"
            onChange={e => setPassword(e.target.value)}
          />

          <label className="label" htmlFor="password-input-confirm">
            Confirm Password
          </label>
          <input
            className="input"
            id="password-input-confirm"
            name="password"
            type="password"
            onChange={e => setConPassword(e.target.value)}
          />

          <p className="text">
            Already have an account?
            <Link className="link" to="/login">
              Sign In
            </Link>
          </p>
          <button className="btn" type="submit" onClick={onSignupClick}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
