import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  document.title = "Login - TodoApp";

  const [userCredentials, setUserCredentials] = useState({});
  const [errorMessage, setErrorMessage] = useState();
  const showError = () => {
    if (errorMessage !== "" && errorMessage !== undefined) {
      return <p className="error-message">{errorMessage}</p>;
    }
  };

  const onLoginClick = (e) => {
    e.preventDefault();
    console.log(userCredentials);
    console.log(errorMessage);

    // Validate the inputs to not be empty!
    if (
      userCredentials.username === "" ||
      userCredentials.username === undefined
    ) {
      setErrorMessage("Username cannot be empty!");
      return;
    } else if (
      userCredentials.password === "" ||
      userCredentials.password === undefined
    ) {
      setErrorMessage("Password cannot be empty!");
      return;
    } else setErrorMessage("");
  };

  return (
    <div className="form__background">
      <div className="form__container">
        <form className="form" action="">
          <h2 className="title--sm">Course Todo App</h2>
          <h1 className="title--lg">Login</h1>

          {showError()}

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
