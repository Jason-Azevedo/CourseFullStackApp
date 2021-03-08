import React from "react";
import FormInput from "../Components/FormInput";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="form__background">
      <div className="form__container">
        <form className="form" action="">
          <h2 className="title--small">Course Todo App</h2>
          <h1 className="title--large">Welcome to the login page!</h1>

          <FormInput inputName="username" errMsg="Invalid username" />

          <FormInput inputName="password" errMsg="Invalid password" />

          <p className="text">
            Don't have an account?
            <Link className="link" to="/signup">
              Make one!
            </Link>
          </p>
          <button className="btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
