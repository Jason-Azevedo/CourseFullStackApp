import React from "react";
import FormInput from "../Components/FormInput";
import FormInputPass from "../Components/FormInputPass";
import { Link } from "react-router-dom";

export default function SignUp() {
  document.title = "Sign Up - TodoApp";

  return (
    <div className="form__background">
      <div className="form__container">
        <form className="form" action="">
          <h2 className="title--sm">Course Todo App</h2>
          <h1 className="title--lg">Create Account</h1>

          <FormInput
            htmlFor="Username"
            inputName="username"
            errMsg="Invalid username"
          />

          <FormInputPass
            htmlFor="Password"
            inputName="password"
            errMsg="Invalid password"
          />

          <FormInputPass
            htmlFor="Verify Password"
            inputName="verify-password"
            errMsg="Invalid password"
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
