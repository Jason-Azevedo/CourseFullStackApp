import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "../Components/ErrorMessage";
import BackendApi from "../Utils/BackendApi";
import { UserContext } from "../Context/UserContext";

export default function Login() {
  document.title = "Login - TodoApp";

  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState();
  const context = useContext(UserContext);

  const onLoginClick = e => {
    e.preventDefault();

    if (userCredentials.username === "" || userCredentials.password === "") {
      setErrorMessage("Fields cannot be empty");
      return;
    }

    // Log the user in and then redirect to homepage!
    BackendApi.login(
      userCredentials,
      res => {
        // Update the global context
        localStorage.setItem("username", res.username);
        context.updateUsername(res.username);

        // Redirect
        window.location = "/";
      },
      setErrorMessage
    );
  };

  return (
    <div className="form__background">
      <div className="form__container">
        <form className="form" action="">
          <h2 className="title--sm">Course Todo App</h2>
          <h1 className="title--lg">Login</h1>

          <ErrorMessage error={errorMessage} />

          <label className="label" htmlFor="username-input">
            Username
          </label>
          <input
            className="input"
            id="username-input"
            name="username"
            type="text"
            onChange={e =>
              setUserCredentials(prev => {
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
            onChange={e =>
              setUserCredentials(prev => {
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
