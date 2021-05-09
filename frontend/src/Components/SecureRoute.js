import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function SecureRoute({
  path,
  exact,
  redirectPath = "/login",
  children,
}) {
  const isLoggedIn = localStorage.getItem("username") !== null;
  const secureRoute = isLoggedIn ? (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  ) : (
    <Redirect to={redirectPath} />
  );

  return secureRoute;
}
