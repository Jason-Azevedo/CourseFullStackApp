import React, { useState } from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "../Components/ErrorMessage";

export default function SignUp() {
  document.title = "Sign Up - TodoApp";

  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="form__background">
      <div className="form__container">
        <form className="form" action="">
          <h2 className="title--sm">Course Todo App</h2>
          <h1 className="title--lg">Create Account</h1>

          <ErrorMessage error={errorMessage} />

          <label className="label" htmlFor="username-input">
            Username
          </label>
          <input
            className="input"
            id="username-input"
            name="username"
            type="text"
          />

          <label className="label" htmlFor="password-input">
            Password
          </label>
          <input
            className="input"
            id="password-input"
            name="password"
            type="password"
          />

          <label className="label" htmlFor="password-input-confirm">
            Confirm Password
          </label>
          <input
            className="input"
            id="password-input-confirm"
            name="password"
            type="password"
          />

          <p className="text">
            Already have an account?
            <Link className="link" to="/login">
              Sign In
            </Link>
          </p>
          <button className="btn" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
