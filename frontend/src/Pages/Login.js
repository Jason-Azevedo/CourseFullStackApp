import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import ValidateInput from "../Utils/ValidateInput";
import ErrorMessage from "../Components/ErrorMessage";
import Backend from "../Utils/Backend";

export default function Login() {
  document.title = "Login - TodoApp";

  const [userCredentials, setUserCredentials] = useState({});
  const [errorMessage, setErrorMessage] = useState();

  const onLoginClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Validate the inputs to not be empty!
    if (!ValidateInput(userCredentials.username, { notEmpty: true })) {
      setErrorMessage("Username cannot be empty!");
      return;
    } else if (!ValidateInput(userCredentials.password, { notEmpty: true })) {
      setErrorMessage("Password cannot be empty!");
      return;
    } else setErrorMessage("");

    // Log the user in and then redirect to homepage!
    Backend.login(userCredentials.username, userCredentials.password).then(
      (res) => {
        console.log(res.error);
        if (res.error !== "" && res.error !== undefined) {
          setErrorMessage(res.error);
          console.log("returning");
          return;
        }

        // Update the global context

        // Redirect
        window.location = res.redirect;
      }
    );
  };

  return (
    <div className="form__background">
      <div className="form__container">
        <form className="form" action="">
          <h2 className="title--sm">Course Todo App</h2>
          <h1 className="title--lg">Login</h1>

          <ErrorMessage err={errorMessage} />

          <label className="label" htmlFor="username-input">
            Username
          </label>
          <input
            className="input"
            id="username-input"
            name="username"
            type="text"
            onChange={(e) =>
              setUserCredentials((prev) => {
                prev.username = e.target.value;
                return prev;
              })
            }
          />

          <label className="label" htmlFor="password-input">
            Password
          </label>
          <input
            className="input"
            id="password-input"
            name="password"
            type="password"
            onChange={(e) =>
              setUserCredentials((prev) => {
                prev.password = e.target.value;
                return prev;
              })
            }
          />

          <p className="text">
            Don't have an account?
            <Link className="link" to="/signup">
              Make one!
            </Link>
          </p>
          <button className="btn" type="submit" onClick={onLoginClick}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
