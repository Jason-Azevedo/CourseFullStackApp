import React from "react";
import FormInput from "../Components/FormInput";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <form action="">
        <h2>Course Todo App</h2>
        <h1>Welcome to the login page!</h1>

        <FormInput inputName="username" errMsg="Invalid username" />

        <FormInput inputName="password" errMsg="Invalid password" />

        <p>
          Don't have an account? <Link to="/signup">Make one!</Link>
        </p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
